import React, {useState} from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from "axios";


const Formiked = (id) => {

//State for the contact form

const [person, setPerson] = useState({ firstName: '', surName: '', email: '', query: ''});
const [people, setPeople] = useState([]); 

//Formik's required intial values:

const initialValues = {
firstName: '',
surName: '',
email: '',
query: ''
}

//Yup validation for Formik (what inputs are required)

const validationSchema = Yup.object({
    firstName: Yup.string().required('You must provide your name'),
    surName: Yup.string().required('You must provide your surname'),
    description: Yup.string().required(),
    email: Yup.string().required(),
    query: Yup.string().required('What would you like to contact us about?')
  });

const submitForm = (e) => {
  //e.preventDefault();
  axios.post("/people/add", person).then(() => {
if (person.firstName && person.surName && person.email && person.query) {
      const newPerson = { ...person, id };
      setPeople([...people, newPerson]);
      console.log(newPerson);
      setPerson({ firstName: '', surName: '', email: '', query: '' });
    }
  })
};

//Change handler
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setPerson({ ...person, [name]: value });
  };

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={submitForm}
    >
    {({isSubmitting, dirty, isValid}) => (
    <wrapper className='form-container'>
    <Form className='form'>
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
    <div className='form-control'>
    <label htmlFor='email'>Type your Query</label>
    <textarea rows='5' cols='5'
    type='query'
    id='query'
    name='query'
    value={person.query}
    onChange={handleChange}
    />
    </div>
    <button 
    type='submit' 
    className='btn' 
    onClick={submitForm}> Contact Us 
    </button>
    </Form>
     </wrapper>
    )}
    </Formik>
   );
  };
  
 

export default Formiked;
