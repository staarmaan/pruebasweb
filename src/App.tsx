import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {

  return (
    <>
      <div className="container mx-auto mt-20">
          <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
            Seguimiento de Pacientes {''}
            <span className="text-indigo-700">Veterinaria</span>
          </h1>

          <div className="mt-12 md:flex">
              <Formulario />
              <ListadoPacientes />
          </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App