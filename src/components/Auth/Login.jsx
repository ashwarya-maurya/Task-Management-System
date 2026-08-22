import React, { useState } from 'react'

const Login = ({LoginHandler}) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        LoginHandler(email,password)
        setemail('')
        setpassword('')
    }


  return (
    <div className='flex min-h-screen w-full items-center justify-center px-4 py-8 sm:px-6'>
        <form
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        className='flex w-full max-w-md flex-col items-center justify-center rounded-2xl border-3 border-blue-600 px-5 py-8 sm:px-10 sm:py-12'>
            <input 
            value={email}
            onChange={(e)=>{
                setemail(e.target.value)
            }}
            required className='m-2 w-full border-2 border-blue-400 px-5 py-3 outline-none rounded-full sm:px-8 sm:py-4' type="email" placeholder='Enter your email' />
            <input 
            value={password}
            onChange={(e)=>{
                setpassword(e.target.value)
            }}
            required className='m-2 w-full border-2 border-blue-400 px-5 py-3 outline-none rounded-full sm:px-8 sm:py-4' type="password" placeholder='Enter Password' />
            <button className='mt-5 min-h-11 w-full rounded-full bg-blue-600 px-8 py-2 hover:bg-blue-800 sm:w-fit'>Login</button>
        </form>
    </div>
  )
}

export default Login
