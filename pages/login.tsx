
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
    email: '',
    password: ''
}
export default function login() {
    const classes = useStyles();

    const loginValidationSchema = yup.object().shape({
        email: yup.string().required("required"),
        password: yup.string().required("required")
    });

    return (
        <div>
            <Formik
                initialValues={INITIALVALUE}
                validationSchema={loginValidationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    alert(JSON.stringify(values, null, 2));
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
                            <TextField
                                id="standard-basic"
                                label="Standard"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {/* <input
                               
                            /> */}
                            {errors.email && touched.email && errors.email}
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && errors.password}
                            <ErrorMessage name="password" component="div" />
                            <button type="submit" disabled={isSubmitting}> ارسال </button>
                        </form>
                    )}

            </Formik>
        </div>
    )
}
