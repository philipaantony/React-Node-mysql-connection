import React, { useState } from 'react'
import axios from 'axios'; 
import {useHistory, useParams} from "react-router-dom";
import { useEffect } from 'react';



function Updateform() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneno, setPhoneno] = useState('');
    
  const history = useHistory();

  const {id} = useParams();

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/get/${id}`)
    .then((resp)=>{ 
      setUsername(resp.data[0].username)
      setEmail(resp.data[0].email)
      setPassword(resp.data[0].password)
      setPhoneno(resp.data[0].phoneno)
    })
  },[id])




  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:5000/api/update/${id}`,{
      username,
      email,
      password,
      phoneno
    }).catch((err)=>{
      console.log(err);
    });
    setTimeout(()=>  history.push("/"),500)

  }

  return (
    <div>
      <center>
        <br></br>
        <br></br>    
        <br></br>    
        <br></br>    
        <br></br>    
        <br></br>    
        <br></br>
        <h3>Update  form </h3>
        

        {/* username */}
        <form onSubmit={handleSubmit}>


          <input
            value={ username}
            onChange={(e) => setUsername(e.target.value)}
            type={'text'}
            required
            placeholder='User Name' /><br></br>

          {/* email */}
          <input
            value={email ||""}
            required
            onChange={(e) => setEmail(e.target.value)}
            type={'text'}
            placeholder='Your Email' /><br></br>

          {/* password */}
          <input
            value={password || ""}
            required
            onChange={(e) => setPassword(e.target.value)}
            type={'password'}
            placeholder='Password' /><br></br>

          {/* phone number */}
          <input
            required
            value={phoneno || ""}
            onChange={(e) => setPhoneno(e.target.value)}
            type={'text'}
            placeholder='phone Number' /><br></br>


          <button>Update</button>
        </form>
        <br></br>
        <br></br>
      </center>


    </div>
  )
}

export default Updateform