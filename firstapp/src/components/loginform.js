import React, { useState } from 'react'
import axios from 'axios';
import {useHistory} from "react-router-dom";

function Loginform() {
    
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const handlelogin = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
        axios.post("http://localhost:5000/api/login",{
            email,
            password,
        }).then((response)=>{
            if(response.data){
                
                alert(response.data[0].email);
                alert('LOGIN SUCCESFULL');
                setTimeout(()=>  history.push("/userhome"),500);
               
            }
            else if(!response.data ){
                alert('WRONG EMAIL AND PASSWORD');
            }
          
        })
       

    }
    return (
        <div>
            <center>
                <h3>Login form </h3>
                <form onSubmit={handlelogin}>
                    <input
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        type={'text'}
                        placeholder='Your Email' /><br></br>

                    {/* password */}
                    <input
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        type={'password'}
                        placeholder='Password' /><br></br>
                    <button>SignUp</button>
                    <h1></h1>
                </form>
                <br></br>
                <br></br><br></br><br></br>

            </center>

        </div>
    )
}

export default Loginform