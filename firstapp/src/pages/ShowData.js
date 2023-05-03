import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';

function ShowData() {
 const [data,setData] = useState([]);
 

const loadData = async ()=>{
    const reponse = await axios.get("http://localhost:5000/api/get")
    setData(reponse.data);
  }

useEffect(()=>{
    loadData();
  },[]);

const deletedata = (id)=>{
  if(window.confirm("do yo want to delete?" +id))
  {
  axios.delete(`http://localhost:5000/api/remove/${id}`);
  console.log('successfulldeleted');
  setTimeout(()=> loadData(),500);   

  }
}


  return (
    <div><center>
        <h1>show data here</h1>
        <table>
            <thead>
                <th>No</th>
                <th>USER NAME </th>
                <th>email</th>
                <th>password</th>
                <th>phoneno</th>
                <th>Update Data</th>
                <th>Delete Data</th>
            </thead>
            <tbody>
             {data.map((item, index)=>{
                return(
                    <tr key={item.id}>
                             <th>{index+1} </th>
                             <td>{item.username}   </td>
                             <td>{item.email} </td>
                             <td>{item.password}</td>
                             <td>{item.phoneno}</td>
         <Link to ={`/update/${item.id}`}><td><button>UPDATE</button></td></Link>    
        <td><button onClick={() => deletedata(item.id)}>DELETE data</button></td>

                    </tr>
                )
             })}
            </tbody>
        </table>
        </center>
    </div>
  )
}

export default ShowData