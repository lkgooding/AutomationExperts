import React, {useState} from "react";
import cuid from 'cuid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


export default function TestForm() {

//State for the contact form

const [person, setPerson] = useState({ firstName: '', surName: '', email: ''});
const [people, setPeople] = useState([]); 

//initial empty values for Formik 

const initialValues = {
firstName: '',
surName: '',
email: '',
}
//Yup validation for Formik (what inputs are required)

const validationSchema = Yup.object({
    firstName: Yup.string().required('You must provide your name'),
    surName: Yup.string().required('You must provide your surname'),
    description: Yup.string().required(),
    email: Yup.string().required(),
  });

//Change handler
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setPerson({ ...person, [name]: value });
  };

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values) => {
       
    if (person.firstName && person.surName && person.email) {
      const newPerson = { ...person, id: cuid() };
      setPeople([...people, newPerson]);
      console.log(newPerson);
      setPerson({ firstName: '', surName: '', email: '' });
    }
  }
}
    >
    {({isSubmitting, dirty, isValid}) => (
    <Form className='ui form'>
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
    <Button 
    disabled={!isValid || !dirty || isSubmitting}
    type='submit' 
    positive
    content='Contact Us'
    />
    <Button
              disabled={isSubmitting}
              as={Link}
              to='/home'
              type='submit'
              floated='right'
              content='Cancel'
            />
    </Form>
    )}
    </Formik>
    );
  };
  
 


