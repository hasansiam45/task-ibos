import React, { useEffect } from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Checkbox = () => {
    
    const [userDetails, setUserDetails] = useState([]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

     useEffect(() => {
         fetch(`https://sheltered-dusk-62408.herokuapp.com/users`)
             .then(res => res.json())
             .then(data => setUserDetails(data))
        }, [])
    
    const onSubmit = data => {      
          
          
           const userInfo = {
                name: data.name,
                email: data.email
            }
        
        

        const uri = `https://sheltered-dusk-62408.herokuapp.com/addUsers`
        
          fetch(uri, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => console.log(res))
        
      
 
        window.location.reload(false)

        

 
        
        
    }
    
   
    const handleDelete = id => {
           
        fetch(`https://sheltered-dusk-62408.herokuapp.com/delete/${id}`, {

            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                
                console.log('deleted', result)
            })
        window.location.reload(false)

    }

    return (
        
        <div className="container">

            <h1>Task-1</h1>
            
            <table class="table table-bordered table-dark mt-3">
                
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
                
                <tbody>
                    {
                        
                        userDetails.map(user => <tr>
                        
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td style={{cursor: 'pointer'}} className="text-danger" onClick={()=>handleDelete(user._id)}>delete</td>   
                        </tr>
                        )
                    
                    }
                </tbody>
                
            </table>
       <form onSubmit={handleSubmit(onSubmit)}>
    
                <input className="m-2" placeholder="name" {...register("name")}  />
                
                <input className="m-2" placeholder="email" {...register("email")} /> 
                
                <input className="m-2 btn btn-secondary" type="submit" value="Add" />
                            
                </form>
        </div>
    )
}

export default Checkbox;

