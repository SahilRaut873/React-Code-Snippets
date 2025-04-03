import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import { validationSchema } from '../Validation/validation'

function LoginForm() {
    const initialValues={
        userName:"",
        password:"",
    };
    function handleSubmit(){

    }
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Personal Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="row g-3">
            {/* First Name */}
            <div className="col-md-4">
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <Field
                type="text"
                id="firstname"
                name="firstname"
                className="form-control"
              />
              <ErrorMessage
                name="firstname"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Middle Name */}
            <div className="col-md-4">
              <label htmlFor="middlename" className="form-label">
                Middle Name
              </label>
              <Field
                type="text"
                id="middlename"
                name="middlename"
                className="form-control"
              />
              <ErrorMessage
                name="middlename"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Last Name */}
            <div className="col-md-4">
              <label htmlFor="lastname" className="form-label">
                Last Name
              </label>
              <Field
                type="text"
                id="lastname"
                name="lastname"
                className="form-control"
              />
              <ErrorMessage
                name="lastname"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <Field type="date" id="dob" name="dob" className="form-control" />
              <ErrorMessage name="dob" component="div" className="text-danger" />
            </div>

            <div className="col-md-6">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <Field type="number" id="age" name="age" className="form-control" />
              <ErrorMessage name="age" component="div" className="text-danger" />
            </div>

            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="form-control"
              />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <Field
                type="text"
                id="phone"
                name="phone"
                className="form-control"
              />
              <ErrorMessage name="phone" component="div" className="text-danger" />
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <Field
                as="textarea"
                id="address"
                name="address"
                className="form-control"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
   
  );
}

export default LoginForm
