import {useState} from 'react'
import './Login.css';
const Login = () => {
    const [username,setUsername]=useState();
    const [passsword,setPassword]=useState();
  return (
    <>
    <div className="row mx-0 login">
        <div className="col-md-3"></div>
        <div className="col-md-6 ">
            <div className=" h-100 d-flex justify-content-center align-items-center">
                <div className="">
                    <h1 className="text-success text-center">My Store</h1>
                    <form  className="d-flex flex-column ">
                        <input type="text" 
                        className="m-2 p-2  border rounded"
                        autocomplete="username" 
                        placeholder="username" 
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)} 
                        />
                        <input type="text" 
                        className="m-2 p-2 border rounded"
                        autocomplete="current-password"
                        placeholder="password" 
                        value={passsword}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                        <button className="m-2 btn btn-success">
                            Log In
                        </button>
                    </form>

                </div>
            </div>

        </div>
        <div className="col-md-3"></div>
    </div>
      
    </>
  )
}

export default Login
