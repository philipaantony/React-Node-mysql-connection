import React from 'react'
import Footer from '../tempale/Footer'
import Header from '../tempale/Header'
import Signupform from '../components/signupform'


function SignupPage() {
    return (
        <div>
            <Header />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <center> 
               <h1>SignUp Here</h1>
            </center>

            <Signupform/>
            <Footer />


        </div>
    )
}

export default SignupPage