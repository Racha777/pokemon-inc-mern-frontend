import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import usePokemons from "../../hooks/usePokemons";

const PokemonsCard = ({ pokemon }) => {
  const { deletePokemon } = usePokemons();
  const { _id, name, type, hp, attack, special, image } = pokemon;

  const handleDelete = (_id) => {
    toast((t) =>
    (
      <div className="flex flex-col gap-2">
        <h5 className="text-lg font-medium text-center">¿Deseas eliminarlo?</h5>
        <div className="flex gap-2">
          <button
            className="bg-rose-500 rounded-md text-white font-medium px-3 py-1 cursor-pointer transition-colors hover:bg-rose-600"
            onClick={() => {
              deletePokemon(_id);
              toast.dismiss(t.id);
            }}
          >
            Eliminar
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="bg-cyan-300 rounded-md text-black font-medium px-3 py-1 cursor-pointer transition-colors hover:bg-white"
          >
            Cancelar
          </button>
        </div>
      </div>
    ),
      {
        icon: '❗❕❗',
        style: {
          borderRadius: '1rem',
          backgroundColor: '#20232a',
          color: '#fff',
          boxShadow: '0 0 0 0.125rem #8888, 0 0 0 0.25rem #8888'
        },
      }
    );
  };

  return (
    <div
      className="flex flex-col items-center gap-4 bg-white rounded-lg shadow shadow-cyan-300 hover:shadow-yellow-400 transition-shadow w-64 p-4 md:w-80 dark:bg-zinc-700"
    >
      <div className="w-32 h-32">
        <img className="w-full h-full object-cover" src={image.url} alt={name} />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-zinc-600 text-sm font-thin dark:text-zinc-400">Hp: {hp}</p>
        <h5 className="text-black text-xl font-medium dark:text-white">{name}</h5>
        <p className="text-zinc-600 text-sm font-extralight dark:text-zinc-400">{type}</p>
      </div>
      <div className="flex gap-1">
        <span className="bg-zinc-800 rounded-xl text-white text-sm font-normal px-3 py-1">{attack}</span>
        <span className="bg-zinc-800 rounded-xl text-white text-sm font-normal px-3 py-1">{special}</span>
      </div>
      <div className="flex gap-2">
        <Link to={`update-pokemon/${_id}`} className="bg-cyan-300 rounded-md text-black font-medium px-3 py-1 cursor-pointer transition-colors hover:bg-white">
          Editar
        </Link>
        <button
          className="bg-rose-500 rounded-md text-white font-medium px-3 py-1 cursor-pointer transition-colors hover:bg-rose-600"
          onClick={() => handleDelete(_id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default PokemonsCard;