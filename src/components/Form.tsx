import { useState } from "react";
import { cathegories } from "../data/categories";

export default function Form() {

    const [activity, setActivity] = useState({

        cathegory : 1,
        name: '',
        calories: 0

    })

    const handleChange = (e) => {

      setActivity({
        ...activity,
        [e.target.id] : e.target.value
      })
    
    }

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label className="font-bold" htmlFor="cathegory">Categoría</label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          name=""
          id="cathegory"
          value={activity.cathegory}
          onChange={handleChange}
        >
          {cathegories.map((cathegorie) => (
            <option
            key={cathegorie.id}
            value={cathegorie.id}>{cathegorie.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="name">Actividad</label>
            <input
            id="name"
            className="border
            border-slate-300
            p-2
            rounded-lg"
            value={activity.name}
            onChange={handleChange}
            type="text"
            placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"/>
      </div>

      <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="calories">Calorías</label>
            <input
            id="calories"
            className="border
            border-slate-300
            p-2
            rounded-lg"
            value={activity.calories}
            onChange={handleChange}
            type="number"
            placeholder="Calorias .ej. 300 o 500"/>
      </div>


      <input 
      type="submit"
      className="bg-gray-800 hover:bg-gray-900 w-full text-white p-2 font-bold uppercase cursor-pointer"
      value="Guardar Comida o Guardar Ejercicio" 
      />

    </form>
  );
}
