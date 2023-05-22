import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate} from "react-router-dom";
    

const List = (props) => {
    
    const [author, setAuthor] = useState([])
    // const {id} = useParams(); 
    // const navigate = useNavigate();

    useEffect(()=>{
    	axios.get("http://localhost:8000/api/authors")
    	.then((res)=>{
	    console.log(res.data);
            setAuthor(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	});
    }, []);

    
    const deleteAuthor = (id) => {
        axios.delete("http://localhost:8000/api/authors/" + id)
            .then(res => {
                console.log(res.data)
                const filteredAuthors = author.filter((person) => person._id !== id)
                setAuthor(filteredAuthors);
                
            })
            .catch(err => console.log(err))
    }

  return (
    <div>

        <h1 className="mt-4">Favorite authors</h1>
        <div >
                <Link className='' to={"/authors/add"}> Add an Author </Link>
        </div>
        <h4> We have quotes by:</h4>

        <table className="table">
            <thead class="thead-dark">
            <tr>  

                <th>Author</th>
                <th>Actions available</th>
                
            </tr>  
            </thead>

            <tbody>
            {
                author.map((person, idx) => {
                return (
                <tr key={idx}>
                
                    <td>{person.name}</td>
                    <td>
                        <Link className="btn btn-warning" to={"/authors/edit/" + person._id}> Edit </Link>
                        <button className="btn btn-danger" onClick={(e)=>{deleteAuthor(person._id)}}> Delete </button>
                    </td>
                </tr>
                )})}       
            </tbody>
        </table>
        
    </div>
  )
}

export default List