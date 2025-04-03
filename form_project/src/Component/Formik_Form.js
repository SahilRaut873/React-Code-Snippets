import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { validationSchema } from "../Validation/validation";
import { createStudent } from "../Service/Service";
import { useNavigate } from "react-router-dom";

const FormikForm = () => {
  const navigator=useNavigate()
  // Validation schema
  // const validationSchema = Yup.object({
  //   firstname: Yup.string()
  //     .min(2, "First name must be at least 2 characters")
  //     .required("First name is required"),
  //   middlename: Yup.string(),
  //   lastname: Yup.string()
  //     .min(2, "Last name must be at least 2 characters")
  //     .required("Last name is required"),
  //   dob: Yup.date()
  //     .max(new Date(), "Date of birth cannot be in the future")
  //     .required("Date of birth is required"),
  //   age: Yup.number()
  //     .min(0, "Age cannot be negative")
  //     .required("Age is required"),
  //   email: Yup.string()
  //     .email("Invalid email address")
  //     .required("Email is required"),
  //   phone: Yup.string()
  //     .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
  //     .required("Phone number is required"),
  //   address: Yup.string()
  //     .min(10, "Address must be at least 10 characters")
  //     .required("Address is required"),
  // });

  const initialValues = {
    firstname: "",
    middlename: "",
    lastname: "",
    gender:"",
    email: "",
    address: "",
    stream:"",
    mobNumber:"",
    dob: "",
    age: "",
  };

  function handleSubmit (){
    // alert("Form submitted successfully:\n" + JSON.stringify(values, null, 2));
    //  resetForm();
    const student={initialValues}
    createStudent(student).then((response)=>{
      console.log(response.data);
      navigator("/student");
    })
    
  };
  // const handleSubmit = (values, { resetForm }) => {
  //   // alert("Form submitted successfully:\n" + JSON.stringify(values, null, 2));
  //   //  resetForm();
  //   const student={initialValues}
  //   createStudent(student).then((response)=>{
  //     console.log(response.data);
  //     navigator("/student");
  //   })
    
  // };
  // function handleSubmit(e){
  //   // eslint-disable-next-line no-undef
  //   createStudent(student).then((response)=>{
  //     console.log(response);
  //     navigator("/student")
  //   })
  // }

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

            <div className="col-md-4">
              <label htmlFor="middlename" className="form-label">
                Middle Name
              </label>
              <Field
                type="text"
                id="middlename"
                name="middlename"
                className="form-control"
                //placeholder="Enter Middele name"
              />
              <ErrorMessage
                name="middlename"
                component="div"
                className="text-danger"
              />
            </div>

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

            <div className="col-md-4">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <Field
                type="text"
                id="gender"
                name="gender"
                className="form-control"
              />
              <ErrorMessage
                name="gender"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="stream" className="form-label">
                Stream
              </label>
              <Field
                type="text"
                id="stream"
                name="stream"
                className="form-control"
              />
              <ErrorMessage
                name="stream"
                component="div"
                className="text-danger"
              />
            </div>

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
};

export default FormikForm;
