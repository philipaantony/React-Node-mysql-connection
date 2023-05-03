import React from 'react'
import Footer from '../tempale/Footer'
import Header from '../tempale/Header'
import LoginForm from '../components/loginform'


function LoginPage() {
    return (
        <div>
            <Header />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <center> <
                h1>Login Here</h1>
            </center>

            <LoginForm />
            <Footer />

        </div>
    )
}

export default LoginPage