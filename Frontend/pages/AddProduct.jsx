import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function AddProduct() {
  return (
 <>
      <Formik
       initialValues={{ name: '',price: '',title : '' }}
       validationSchema={Yup.object({
        name: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
          price: Yup.number()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
           title: Yup.string().required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
        console.log(values)
         setTimeout(() => {
          async function AddProduct() {
            const res = await fetch("http://localhost:3000/products", {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              }, body: JSON.stringify(values),
            });
            const data = await res.json();
          }
           AddProduct();
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="name">Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="price">Price</label>
         <Field name="price" type="text" />
         <ErrorMessage name="price" />
 
         <label htmlFor="title">Title</label>
         <Field name="title" type="text" />
         <ErrorMessage name="title" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
 </>
  )
}

export default AddProduct