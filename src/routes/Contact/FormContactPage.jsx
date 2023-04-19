import { collection, getFirestore, addDoc } from "firebase/firestore";
import React,{useState} from 'react'
import "../../App.css";
import Header from "../../components/Header/Header";

const FormContactPage = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [id, setId] = useState();
    
      const submitHandler = (ev) => {
        ev.preventDefault();
    
        const db = getFirestore();
        const contactFormColection = collection(db, 'contactform');
    
        addDoc(contactFormColection, form).then((snaptshot) => {
          setForm({
            name: '', 
            email: '',
            message: '',
          });
          setId(snaptshot.id);
        });
      };

      const inputChangeHandler = (ev) => {
        const { value, name } = ev.target;
        setForm({ ...form, [name]: value });
        //Siempre que en el estado tengamos un objeto para volver a setearlo hay que hacerle una copia
      };

  return (
    <div>
      <Header />


      <div className="mt-10">
      {typeof id !== 'undefined' ? (
        <p>El formulario se ha enviado con el id:{id}</p>
      ) : (
        ''
      )}
      <form onSubmit={submitHandler} className="flex items-center w-30 flex-col bg-white p-6 rounded-lg shadow-md ">
        <div className="mb-4 w-80">
          <label
            className="text-center block text-gray-900 font-bold mb-2 text-blue-500 "
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            className="
                shadow
                border-b
                rounded
                border-gray-500
                w-full
                py-2
                px-3
                text-gray-900
                leading-tight
                focus:outline-none focus:shadow-outline
                "
            placeholder="Ingrese su nombre"
            name="name"
            id="name"
            value={form.name}
            onChange={inputChangeHandler}
          />
        </div>
       
        <div className="mb-6 w-80">
          <label
            className="text-center block text-gray-900 font-bold mb-2 text-blue-500"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="
                shadow
                border-b
                rounded
                border-gray-500
                w-full
                py-2
                px-3
                text-gray-900
                leading-tight
                focus:outline-none focus:shadow-outline
                "
            placeholder="Ingrese su correo electrónico"
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={inputChangeHandler}



          />
        </div>

        <div className="mb-6 w-80">
          <label
            className="text-center block text-gray-900 font-bold mb-2 text-blue-500 "
            htmlFor="email"
          >
            Consulta
          </label>
          <textarea
            className="
                shadow
                border-b
                rounded
                border-gray-500
                w-full
                py-2
                px-3
                text-gray-900
                leading-tight
                focus:outline-none focus:shadow-outline
                "
            placeholder="Ingrese su mensaje"
            name="message"
            id="message"
            value={form.message}
            onChange={inputChangeHandler}
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="
                bg-blue-500
                hover:bg-blue-700
                text-white
                font-bold
                py-2
                px-4
                rounded
                focus:outline-none focus:shadow-outline
                "
          >
            Enviar
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default FormContactPage;
