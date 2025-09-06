

import { useState } from "react";
import { login, signUp } from "../services/firebase";

export default function Login(){
    const [email, setEmail]  = useState("");
    const [password, setPassword] = useState("");
    const [isSignup, setIsSignup] = useState(false);
    const [error, setError] = useState("")
    

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setError("");
        try{
            if(isSignup){
                await signUp(email, password);

            }else{
                await login(email, password);
            }
        }catch(err){
            setError(err.message);
        }
    }

    return (
      <div>
        <h2>
            {isSignup ? "Sign Up" : "Login"} to Gallery
        </h2>

        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} 
             required
            />
            <input type="password" placeholder="Password" value={password} 
            onChange={(e)=>setPassword(e.target.value)}
            required
            />

            <button type="submit">
                {isSignup ? "Sign Up" : "Login"}
            </button>
        </form>

        {error && <p>{error}</p>}

        <p>
            {isSignup? "Already have and account?": "Don't have an account?"} {" "}
            <button onClick={()=>setIsSignup(!isSignup)}>
                {isSignup ? "Login": "Sign Up"}
            </button>
        </p>
      </div>
    )
}