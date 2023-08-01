

function Paciente({paciente}) {
  
  const {nombre, propietario, email, alta, sintomas, id} = paciente
  
  
  
  
  return (
    <div className="m-3 px-5 py-10 bg-white shadow-md rounded-xl">
  <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
  <span className=" font-normal normal-case">{nombre}</span>
  </p>

  <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
  <span className=" font-normal normal-case">{propietario}</span>
  </p>

  <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
  <span className=" font-normal normal-case">{email}</span>
  </p>

  <p className="font-bold mb-3 text-gray-700 uppercase">Alta: {''}
  <span className=" font-normal normal-case">{alta}</span>
  </p>

  <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
  <span className=" font-normal normal-case">{sintomas}</span>
  </p>

  <p className="font-bold mb-3 text-gray-700 uppercase">ID: {''}
  <span className=" font-normal normal-case">{id}</span>
  </p>
</div>
  )
}

export default Paciente
