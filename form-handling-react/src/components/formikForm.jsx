import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const initialValues = { name: "", email: "", password: "" };

const inputValidation = yup.object().shape({
  name: yup.string().required("Field is Required"),
  email: yup
    .string()
    .email("Please Enter Valid Email")
    .required("Field is Required"),
  password: yup.string().min(5).required("Field is Required"),
});

const onSubmit = (values, { setSubmitting, resetForm }) => {
  console.log("Form submitted:", values);
  setSubmitting(false);
  resetForm();
};

const FormikRegistrationForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={inputValidation}
    >
      <Form>
        <Field name="name" placeholder="Name...." />
        <ErrorMessage name="name" component="div" style={{ color: "red" }} />

        <Field name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" style={{ color: "red" }} />

        <Field name="password" placeholder="Password" />
        <ErrorMessage
          name="password"
          component="div"
          style={{ color: "red" }}
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikRegistrationForm;
