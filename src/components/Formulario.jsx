import {useState, useEffect} from "react"
import Error from "./Error"


function Formulario({setPacientes, pacientes}) {
 const [nombre, setNombre] = useState('')
 const [propietario, setPropietario] = useState('')
 const [email, setEmail] = useState('')
 const [alta, setAlta] = useState('')
 const [sintomas, setSintomas] = useState('')

 const [error, setError] = useState('')

 const generarId = () => {
  const random = Math.random().toString(36).substr(2);
  const fecha = Date.now().toString(36)

   return fecha + random
 }


const handleSubmit = (e) =>{
  e.preventDefault();

//Validacion del formulario
if ([nombre, propietario, email, alta, sintomas].includes('')) {
  
  setError(true)
  return;
} 
setError(false)

  console.log('Enviando formulario');
  // Objeto de paciente
const objetoPaciente = {
  nombre,
   propietario,
    email,
     alta,
      sintomas,
      id: generarId()

}

console.log(objetoPaciente);

    setPacientes([...pacientes, objetoPaciente])

  //Reiniciar form
  setNombre('')
  setPropietario('')
  setEmail('')
  setAlta('')
  setSintomas('')
}




  

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold text-lg ">Administralos</span>
      </p>

      <form
      onSubmit={handleSubmit}
       className="bg-white shadow-md rounded-lg py-10 px-5 mb-5 mx-5">

{error && <Error>Todos los componentes son obligatorios</Error> }

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
          Nombre Mascota 
          </label>
          <input 
          id="mascota"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="text"
            placeholder="nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
          Nombre Propietario
          </label>
          <input 
          id="propietario"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="text"
            placeholder="nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
          Email
          </label>
          <input 
          id="email"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="email"
            placeholder="pedronavajas@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
          Alta
          </label>
          <input 
          id="alta"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="date"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
            />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
          Sintomas
          </label>
          <textarea 
          id="sintomas"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="textarea"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            
          />
        </div>
        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value='Agregar paciente'
        />
      </form>
    </div>
  )
}

export default Formulario