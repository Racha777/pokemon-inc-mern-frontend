import { Field, Form, Formik } from "formik";

const PokemonsForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        type: '',
        hp: '',
        attack: '',
        special: ''
      }}
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
            <Field name='name' placeholder="Nombre" />
            <Field name='type' placeholder="Tipo" />
            <Field name='hp' placeholder="Hp" />
            <Field name='attack' placeholder="Ataque" />
            <Field name='special' placeholder="Especial" />
            <button type="submit">Crear</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PokemonsForm;