import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate} from "react-router-dom";
    

const Update = (props) => {
    
    const { id } = useParams();
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const [errors, setErrors] = useState({}); 

    useEffect(()=>{
    	axios.get(`http://localhost:8000/api/authors/${id}`)
    	.then((res)=>{
	    console.log(res);
            setName(res.data.name);
	})
    	.catch((err)=>{
            console.log(err);
    	});
    }, []);

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/authors/edit/${id}`, {
            name
        })
            .then(res => {
                console.log(res);
                console.log("step one!!!!!!!!!!!!!")
                navigate("/");
                
            })
            .catch (err => {console.log(err)
                console.log("step TWO????????")
                setErrors(err.response.data.errors
                  )})
            // setStore({ ...store, open: false });
        }
    
    

  return (
    <div>

<h1>Favorite Authors</h1>

<Link to={"/"}>Home</Link>
<h4 className="mt-4">Edit this author</h4>
<form onSubmit={(e) => updateAuthor(e)}>

    { errors.name ?
    <p>{errors.name.message}</p>
    : ""
    }
            <p>
            
                <label className="mx-3">Name</label>
                <input 
                type="text" 
                name="name" 
                value={name} 
                onChange = {(e) => setName(e.target.value)} />
            </p>
            
            <div>
                <Link className="btn btn-warning" to={"/"}> Cancel </Link>
                <input type="submit" value= "Submit" className="btn btn-primary"/>
            </div>

</form>
        
    </div>
  )
}

export default Update