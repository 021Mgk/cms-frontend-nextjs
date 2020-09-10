
import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            maxWidth: '260px',
        },
    },
}));


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
    type: ''
}
export default function registerArticle() {
    const classes = useStyles();

    const ArticleFormValidation = yup.object().shape({
        title: yup.string().required("لطفا عنوان را وارد نمایید"),
        type: yup.number().required("لطفا نوع را انتخاب نمایید")
    });

    return (
        <div>
            <Formik
                initialValues={INITIALVALUE}
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
                    isSubmitting
                }) => (
                        <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">

                            {/* <input
                                type="date"
                                placeholder="dd-mm-yyyy"
                                min="1997-01-01"
                                name="register_date"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.register_date}
                            /> */}

                            <input
                                type="text"
                                placeholder="dd-mm-yyyy"
                                name="register_date"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.register_date}
                            />

                            <br />
                            {/* type of content */}

                            <input
                                type="text"
                                name="title"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                            />

                            {errors.title && touched.title && errors.title}
                            <ErrorMessage name="title" component="div" />
                            <br />
                            <input
                                type="text"
                                name="summary"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.summary}
                            />
                            <br />
                            <input
                                type="text"
                                name="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.text}
                            />
                            <br />

                            <input
                                type="file"
                                name="thumbnail"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.thumbnail}
                            />
                            <br />
                            <input
                                type="file"
                                name="cover"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.cover}
                            />
                            <br />
                            <input
                                type="file"
                                name="attachment"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.attachment}
                            />

                            <br />
                            <input
                                type="number"
                                name="status"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.status}
                            />


                            <br />

                            <input
                                type="number"
                                name="type"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.type}
                            />

                            {errors.type && touched.type && errors.type}
                            <ErrorMessage name="type" component="div" />
                            <br />
                            <input
                                type="number"
                                name="views"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.views}
                            />

                            <br />
                            {/* <TextField
                                id="standard-basic"
                                label="Standard"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />

                            {errors.email && touched.email && errors.email}
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && errors.password} */}

                            <button type="submit" disabled={isSubmitting}> ارسال </button>
                        </form>
                    )}

            </Formik>
        </div>
    )
}
