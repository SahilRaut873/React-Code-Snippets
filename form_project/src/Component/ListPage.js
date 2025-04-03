import React, { useEffect, useState } from 'react'
import listStudent from '../Service/Service';
import { useNavigate } from 'react-router-dom';

function ListPage() {
    const [student, setStudent]=useState([]);
    const navigator=useNavigate();
    useEffect(()=>{
        listStudent().then((response)=>{
            setStudent(response.data);
        }).catch(error=>{
            console.error(error);
        })

    },[])
    function addStudent(){
        navigator("/add-student");
    }

  return (
    <div className='container'>
        <br/>
        <button className='btn btn-primary mb-4' onClick={addStudent}>Add New</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Middel Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Stream</th>
                    <th>Mob Number</th>
                    <th>DOB</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    student.map(student=>
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.middleName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.gender}</td>
                            <td>{student.email}</td>
                            <td>{student.address}</td>
                            <td>{student.stream}</td>
                            <td>{student.mobNumber}</td>
                            <td>{student.dob}</td>
                            <td>{student.age}</td>
                        </tr>
                    )
                }

            </tbody>
        </table>
      
    </div>
  )
}

export default ListPage
