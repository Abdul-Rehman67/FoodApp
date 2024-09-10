"use client"
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
export default function RegisterPage() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

function handleFormSubmit (ev){
    ev.preventDefault();
    let result =  axios.post('/api/register',{
        email:email,
        password:password
    })

}
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl font-bold mb-4">Register</h1>
      <form className="block max-w-xs mx-auto">
        <input type="email" placeholder="Email" value={email} onChange={ev=>setEmail(ev.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={ev=>setPassword(ev.target.value)}/>
        <button type="submit" onClick={handleFormSubmit} >Register </button>
        <div className="text-center my-4 text-gray-500">
            or login with provider
        </div>
        <button className="flex items-center gap-2 justify-center">
            <Image src={'/google.png'} alt={'google'} width={20} height={20}/>
            Google
        </button>
      </form>
    </section>
  );
}
