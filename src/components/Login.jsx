import { useState } from "react"

const Login = () => {

  const [isSIgnedIn,setIsSignedIn] = useState(false);
  const handleToggle = () => {
    setIsSignedIn(!isSIgnedIn)
  }
  return (

    <div className="flex w-screen h-screen bg-linear-to-r from-blue-500 via-purple-500 to-white">
      
      <form className="border-2 border-cyan-200 rounded-lg flex flex-col items-center bg-indigo-900 text-white w-6/12 my-32 py-10 m-auto" onSubmit={(e)=> e.preventDefault()}>
      <h1 className="text-5xl font-bold my-4">{isSIgnedIn ? "Login" : "Sign up"}</h1>
      
      <div className="w-10/12 flex flex-col">
        {
        !isSIgnedIn && <>
          <input className="rounded-lg p-2 m-2 bg-white text-black" type="text" placeholder="Name"></input>
          <input className="rounded-lg p-2 m-2 bg-white text-black" type="text" placeholder="Contact"></input>
          </>
        }
        <input className="rounded-lg p-2 m-2 bg-white text-black" type="text" placeholder="Email"></input>
         <input className="rounded-lg p-2 m-2 bg-white text-black" type="password" placeholder="password"></input>
          
       </div>
       
       <div className="flex flex-row justify-end w-auto">
       <p className="p-1">{isSIgnedIn ? "New User, " : "Already a member, "}</p>
       <button onClick={handleToggle} className="p-1 underline font-bold">{isSIgnedIn ? " Sign Up" : " Sign in"}</button>
       </div>
      </form>
    </div>
  )
}

export default Login
