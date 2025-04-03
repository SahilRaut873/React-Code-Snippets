import React from 'react'
import FormikForm from './Formik_Form'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigator =useNavigate();
    function newForm(){
        navigator('/form')

    }
  return (
    <div>
        <h1>Welcome</h1>
        <button onClick={newForm}>Add New</button>
    </div>
  )
}

export default HomePage
