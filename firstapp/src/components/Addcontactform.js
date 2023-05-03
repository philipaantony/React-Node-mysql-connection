import axios from 'axios';
import {useHistory} from "react-router-dom";
import React, { useState } from 'react'

function Addcontactform() {

    const history = useHistory();
    const [contactname, setcontactname] = useState('');
    const [phonenumber, setphonenumber] = useState('');

    const handleaddcontact = (e) => {
        e.preventDefault()
        console.log(contactname)
        console.log(phonenumber)
        axios.post("http://localhost:5000/api/addcontact",{
            contactname,
            phonenumber,
        }).then((response)=>{
            if(response.data){
                alert('Contact Added');
                window.location.reload(false);
                setTimeout(()=>  history.push("/addcontact"),500);
               
            }
            else if(!response.data ){
                alert('something went wrong...!');
            }
        })
    }
  return (
    <div><center>
         <form  onSubmit={handleaddcontact}>
         <h1>ADD NEW CONTACT</h1>
                    <input
                        value={contactname}
                        required
                        onChange={(e) => setcontactname(e.target.value)}
                        type={'text'}
                        placeholder='New Contact Name' /><br></br>

                    {/* password */}
                    <input
                        value={phonenumber}
                        required
                        pattern="[789][0-9]{9}" 
                        onChange={(e) => setphonenumber(e.target.value)}
                        type={'text'}
                        placeholder='Phone Number' /><br></br>
                    <button>Add New Contact</button>
                    <h1></h1>
                </form>
                </center> 
    </div>
  )
}

export default Addcontactform