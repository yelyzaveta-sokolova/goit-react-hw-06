import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

import s from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    id: "",
    name: "",
    number: "",
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={({ name, number }, actions) => {
          dispatch(
            addContact({
              id: nanoid(),
              name,
              number,
            })
          );

          actions.resetForm();
        }}
        validationSchema={contactSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field name="name" placeholder="Enter name"></Field>
            <ErrorMessage name="name" component="span" />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field name="number" type="tel"></Field>
            <ErrorMessage name="number" component="span" />
          </label>
          <button className={s.addBtn} type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;