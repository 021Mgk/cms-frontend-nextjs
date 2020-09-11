import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker2';
import momentJalaali from 'moment-jalaali';
import { GetStaticProps } from 'next';

export interface ArticleProps {
  id: string | undefined;
  status: string | undefined;
  attachment: string | undefined;
  cover: string | undefined;
  register_date: string | undefined;
  summary: string | undefined;
  text: string | undefined;
  thumbnail: string | undefined;
  title: string | undefined;
  views: string | undefined;
  type: string | undefined;
}

export interface ArticleArrayProps {
  articles: ArticleProps[];
}

export interface ArticleArrayProps2 {
  article: ArticleProps | undefined;
}

const INITIALVALUE = {
  id: '',
  status: '',
  attachment: '',
  cover: '',
  register_date: '',
  summary: '',
  text: '',
  thumbnail: '',
  title: '',
  views: '',
  type: '',
};

export const ArticleForm = ({ article }: ArticleArrayProps2) => {
  const [onChangeValue, setOnChangeValue] = useState(
    momentJalaali('1399/6/20', 'jYYYY/jM/jD')
  );

  const persionToEnglish = () => {
    const formated = onChangeValue.format('YYYY/M/D');
    console.log(formated, ' formated');
    const mom = momentJalaali('1360/5/26', 'jYYYY/jM/jD');
    console.log('mom', mom);
  };

  const ArticleFormValidation = yup.object().shape({
    title: yup.string().required('لطفا عنوان را وارد نمایید'),
    type: yup.number().required('لطفا نوع را انتخاب نمایید'),
  });
  return (
    <Formik
      initialValues={article || INITIALVALUE}
      validationSchema={ArticleFormValidation}
      onSubmit={(values, { setSubmitting }) => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className='form' onSubmit={handleSubmit} autoComplete='off'>
          {/* // <input
                                type="date"
                                placeholder="dd-mm-yyyy"
                                min="1997-01-01"
                                name="register_date"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.register_date}
                            /> //
             //
                            <DatePicker
                                timePicker={false}
                                value={date}
                                onChange={() => setDate(date)}                               
                            /> // */}

          <DatePicker
            value={onChangeValue}
            persianDigits={true}
            isGregorian={false}
            timePicker={false}
            onChange={(onChangeValue) => {
              setOnChangeValue(onChangeValue);
              persionToEnglish();
            }}
          />

          <input
            type='text'
            placeholder='dd-mm-yyyy'
            name='register_date'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.register_date || ''}
          />

          <br />

          <input
            type='text'
            name='title'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />

          {errors.title && touched.title && errors.title}
          <ErrorMessage name='title' component='div' />
          <br />
          <input
            type='text'
            name='summary'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.summary}
          />
          <br />
          <input
            type='text'
            name='text'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.text}
          />
          <br />

          <input
            type='file'
            name='thumbnail'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.thumbnail || ''}
          />
          <br />
          <input
            type='file'
            name='cover'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cover || ''}
          />
          <br />
          <input
            type='file'
            name='attachment'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.attachment || ''}
          />

          <br />
          <input
            type='number'
            name='status'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.status}
          />

          <br />

          <input
            type='number'
            name='type'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.type}
          />

          {errors.type && touched.type && errors.type}
          <ErrorMessage name='type' component='div' />
          <br />
          <input
            type='number'
            name='views'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.views}
          />

          <br />

          {/* {errors.email && touched.email && errors.email}
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && errors.password} // */}

          <button type='submit' disabled={isSubmitting}>
            {' '}
            ارسال{' '}
          </button>
        </form>
      )}
    </Formik>
  );
};

export interface ppp {
  close: any;
  article: ArticleProps | undefined;
}
export const ModalView = ({ close, article }: ppp) => (
  <div id='myModal' className='modal'>
    <div className='modal-content'>
      <div className='modal-header'>
        <span className='close' onClick={close}>
          &times;
        </span>
        <h2>Modal Header</h2>
      </div>
      <div className='modal-body'>
        <ArticleForm article={article} />
      </div>
    </div>
  </div>
);
export default function article({ articles }: ArticleArrayProps) {
  const [data, setData] = useState(articles);
  const [modal, setModal] = useState(false);
  const [editArticle, setEditArticle] = useState<ArticleProps | undefined>(
    INITIALVALUE
  );
  const editHandler = (id?: string) => {
    console.log(id);
    const arti = data.find((d) => d.id == id);
    console.log('artiiiii', arti);
    setEditArticle(arti);
    setModal(true);
  };
  const closeHandler = () => {
    setModal(false);
    console.log('close');
  };
  return (
    <>
      <div className='area'>
        <table>
          <thead>
            <tr className='table-head'>
              <th className='column1'>ردیف</th>
              <th className='column2'>عنوان</th>
              <th className='column3'>نوع</th>
              <th className='column4'>تعداد بازدید</th>
              <th className='column5'>تاریخ ثبت</th>
              <th className='column6'>وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((d, index) => (
              <tr key={d.id} onClick={() => editHandler(d.id)}>
                <td className='column1'>{index}</td>
                <td className='column2'>{d.title}</td>
                <td className='column3'>{d.type}</td>
                <td className='column4'> {d.views}</td>
                <td className='column5'> {d.register_date}</td>
                <td className='column6'>{d.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modal ? (
        <ModalView article={editArticle} close={() => closeHandler()} />
      ) : null}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:8080/api/v1/articles', {
    method: 'GET',
  });
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
