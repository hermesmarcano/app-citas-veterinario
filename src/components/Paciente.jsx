

function Paciente() {
  return (
    <div className="m-3 px-5 py-10 bg-white shadow-md rounded-xl">
  <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
  <span className=" font-normal normal-case">Piloto</span>
  </p>

  <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
  <span className=" font-normal normal-case">Fernanda</span>
  </p>

  <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
  <span className=" font-normal normal-case">fernanda@gmail.com</span>
  </p>

  <p className="font-bold mb-3 text-gray-700 uppercase">Alta: {''}
  <span className=" font-normal normal-case">25/09/2022</span>
  </p>

  <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
  <span className=" font-normal normal-case">vomita cuando anda en coche</span>
  </p>
</div>
  )
}

export default Paciente
