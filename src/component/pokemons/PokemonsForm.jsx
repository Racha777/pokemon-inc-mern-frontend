import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from "formik";
import usePokemon from '../../hooks/usePokemon';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonsForm = () => {
  const { id } = useParams();
  const { pokemon, submitPokemonsForm } = usePokemon();
  const [formPokemon, setFormPokemon] = useState({
    name: '',
    type: '',
    hp: '',
    attack: '',
    special: '',
    image: ''
  });

  useEffect(() => {
    if (id && pokemon._id) {
      setFormPokemon({
        ...pokemon,
        image: pokemon.image?.url
      });
    }
  }, [id, pokemon]);

  return (
    <Formik
      initialValues={formPokemon}
      enableReinitialize
      validationSchema={yup.object({
        name: yup.string().required('El nombre es requerido'),
        type: yup.string().required('El tipo es requerido'),
        hp: yup.number().required('El Hp es requerido'),
        attack: yup.string().required('El ataque es requerido'),
        special: yup.string().required('El especial es requerido'),
        image: yup.string().required('La imagen es requerida')
      })}
      onSubmit={(values, actions) => {
        submitPokemonsForm(values);
      }}
    >
      {({ handleSubmit }) => {
        return (
          <Form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-zinc-700 rounded-md w-4/5 max-w-sm mx-auto p-4"
          >
            <div className="flex flex-col gap-1">
              <Field name="name" placeholder="Nombre" className="bg-zinc-800 rounded p-2" />
              <ErrorMessage name="name" component="div" className="text-rose-500 text-sm" />
            </div>
            <div className="flex flex-col gap-1">
              <Field name="type" placeholder="Tipo" className="bg-zinc-800 rounded p-2" />
              <ErrorMessage name="type" component="div" className="text-rose-500 text-sm" />
            </div>
            <div className="flex flex-col gap-1">
              <Field name="hp" placeholder="Hp" className="bg-zinc-800 rounded p-2" />
              <ErrorMessage name="hp" component="div" className="text-rose-500 text-sm" />
            </div>
            <div className="flex flex-col gap-1">
              <Field name="attack" placeholder="Ataque" className="bg-zinc-800 rounded p-2" />
              <ErrorMessage name="attack" component="div" className="text-rose-500 text-sm" />
            </div>
            <div className="flex flex-col gap-1">
              <Field name="special" placeholder="Especial" className="bg-zinc-800 rounded p-2" />
              <ErrorMessage name="special" component="div" className="text-rose-500 text-sm" />
            </div>
            <div className="flex flex-col gap-1">
              <Field name="image" placeholder="Imagen" className="bg-zinc-800 rounded p-2" />
              <ErrorMessage name="image" component="div" className="text-rose-500 text-sm" />
            </div>
            <button
              type="submit"
              className="bg-cyan-300 rounded-md text-black font-medium p-2 cursor-pointer transition-colors hover:bg-white"
            >
              {id ? 'Editar' : 'Crear'}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PokemonsForm;