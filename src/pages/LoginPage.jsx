import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = ()=>{
    const [email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');
    const [error, setError ] = useState('');
    return(
        <>
        <h1>
            Login Page 
        </h1>
        <input type="text" />
        <input type="password" />
        <button>Log In</button>
        <Link to="/create-account">Create account</Link>
        </>
    )
}

export default LoginPage;