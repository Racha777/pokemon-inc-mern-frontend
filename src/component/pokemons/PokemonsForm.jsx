import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from "formik";

const PokemonsForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        type: '',
        hp: '',
        attack: '',
        special: '',
        image: ''
      }}
      validationSchema={yup.object({
        name: yup.string().required('El nombre es requerido'),
        type: yup.string().required('El tipo es requerido'),
        hp: yup.number().required('El Hp es requerido'),
        attack: yup.string().required('El ataque es requerido'),
        special: yup.string().required('El especial es requerido'),
        image: yup.string().required('La imagen es requerida')
      })}
      onSubmit={(values, actions) => {
        console.log(values);
      }}
    >
      {({ handleSubmit }) => {
        return (
          <Form
            onSubmit={handleSubmit}
            className="text-black"
          >
            <Field name="name" placeholder="Nombre" />
            <ErrorMessage name="name" />
            <Field name="type" placeholder="Tipo" />
            <ErrorMessage name="type" />
            <Field name="hp" placeholder="Hp" />
            <ErrorMessage name="hp" />
            <Field name="attack" placeholder="Ataque" />
            <ErrorMessage name="attack" />
            <Field name="special" placeholder="Especial" />
            <ErrorMessage name="special" />
            <Field name="image" placeholder="Imagen" />
            <ErrorMessage name="image" />
            <button type="submit">Crear</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PokemonsForm;