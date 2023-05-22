import React, {useEffect, useState} from 'react';
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from 'axios';

const Form = () => {

    const [name, setName] = useState("");
    const navigate = useNavigate();

  
  const [errors, setErrors] = useState({}); 
  
    const onSubmitHandler = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8000/api/authors/add', {
        name
      })
        .then (res => {
          console.log(res);
          console.log(res.data);
          navigate("/");
      
        }
        )
        .catch (err => {console.log(err)
        setErrors(err.response.data.errors
          )})
    }
    
  return (

    <div>
        {/* <form onSubmit={onSubmitHandler}> */}
        <form onSubmit={(e) => onSubmitHandler(e)}>

        <h1>Favorite Authors</h1>

        <Link to={"/"}>Go Back Home</Link>
        <h4 className="mt-4">Add a new author!</h4>
        
            { errors.name ?
            <p>{errors.name.message}</p>
            : ""
            }
                    <p>
                    
                        <label className="mx-3">Name</label>
                        <input type="text" onChange = {(e) => setName(e.target.value)} />
                    </p>
                    
                    <div>
                        <Link className="btn btn-warning" to={"/"}> Cancel </Link>
                        <input type="submit" value= "Submit" className="btn btn-primary"/>
                    </div>
        
        </form>




    </div>
  )
}

export default Form