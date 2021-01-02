import React, {useState} from "react";
import cuid from 'cuid';


const FormInputs = () => {

//State for the contact form

const [person, setPerson] = useState({ firstName: '', surName: '', email: ''});
const [people, setPeople] = useState([]); 

//Change handler
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setPerson({ ...person, [name]: value });
  };

//Submit handler for the form

const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.surName && person.email) {
      const newPerson = { ...person, id: cuid() };
      setPeople([...people, newPerson]);
      console.log(newPerson);
      setPerson({ firstName: '', surName: '', email: '' });
    }
  };
  
  return (
    <>
    <article className='form'>
    <form>
    <div className='form-control'>
    <label htmlFor='firstName'>First Name: </label>
    <input 
    type='text'
    id='firstName'
    name='firstName'
    value={person.firstName}
    onChange={handleChange}
    />
    </div>
    <div className='form-control'>
    <label htmlFor='surName'>Surname:</label>
    <input 
    type='text'
    id='surName'
    name='surName'
    value={person.surName}
    onChange={handleChange}
    />
    </div>
    <div className='form-control'>
    <label htmlFor='email'>Email:</label>
    <input 
    type='email'
    id='email'
    name='email'
    value={person.email}
    onChange={handleChange}
    />
    </div>
    <button type='submit' className='btn' onClick={handleSubmit}>
            Contact Us 
          </button>
    </form>
    </article>
  </>
  );
  };
  
 

export default FormInputs;
