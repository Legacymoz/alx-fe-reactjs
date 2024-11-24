import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = { username: "", email: "", password: "" };

const inputValidation = Yup.object().shape({
  name: Yup.string().required("Field is Required"),
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Field is Required"),
  password: Yup.string().min(5).required("Field is Required"),
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
        <Field name="username" placeholder="Name...." />
        <ErrorMessage
          name="username"
          component="div"
          style={{ color: "red" }}
        />

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
