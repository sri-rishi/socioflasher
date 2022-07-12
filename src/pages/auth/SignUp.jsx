import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { Button } from "../../components/index"
import { signupUser } from "./authSlice"

export const SignUp = () => {
    const {user, token} = useSelector(store => store?.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [signupDetails, setSignupDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    

    const signupHandler = () => {
        if(
            signupDetails.firstName !== "" &&
            signupDetails.lastName !== "" && 
            signupDetails.email !== "" && 
            signupDetails.password !== ""
        ) {
            dispatch(signupUser(signupDetails));
        }

        if(token) {
            navigate("/")
        }
    }
    return (
        <div className="w-full h-screen flex flex-row justify-center items-center">
            <div className="w-full max-w-sm flex flex-col items-center bg-white shadow-md p-8 rounded-2xl gap-4 font-semibold border-y-8 border-sky-700">
                <div className="flex flex-col items-center gap-8 border-b-2 border-sky-700 pb-4">
                    <h4 className="text-2xl">Welcome to socio<span className="text-sky-400">Flasher</span></h4>
                    <p className="text-xl">Sign Up</p>
                </div>
                <div className="w-full flex flex-col gap-4 items-start">
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="firstName">
                            First Name
                        </label>
                        <input 
                            className="border-2 p-2 rounded font-normal" 
                            type="text" 
                            name="firstName" 
                            placeholder="First Name"
                            value={signupDetails.firstName}
                            onChange={(e) => setSignupDetails(details => ({...details, firstName: e.target.value}))}
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="secondName">
                            Second Name
                        </label>
                        <input 
                            className="border-2 p-2 rounded font-normal"  
                            type="text" 
                            name="secondName" 
                            placeholder="Second Name"
                            value={signupDetails.lastName}
                            onChange={(e) => setSignupDetails(details => ({...details, lastName: e.target.value}))}
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="username">
                            Username or Email
                        </label>
                        <input 
                            className="border-2 p-2 rounded font-normal" 
                            type="text"    
                            name="username" 
                            placeholder="Username Or Email"
                            value={signupDetails.email}
                            onChange={(e) => setSignupDetails(details => ({...details, email: e.target.value}))}
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input 
                            className="border-2 p-2 rounded font-normal"   
                            type="password" 
                            name="password" 
                            placeholder="Password"
                            value={signupDetails.password}
                            onChange={(e) => setSignupDetails(details => ({...details, password: e.target.value}))}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4 py-2">
                    <Button 
                        className={"bg-sky-600 p-2 rounded-2xl text-white hover:bg-sky-900"}
                        text={"Sign Up"}
                        onClick={() => signupHandler()}
                    />
                    <NavLink to="/login">
                        <Button 
                            className={"w-full bg-white p-2 rounded-2xl text-gray-400 border-2 hover:bg-sky-600 hover:text-white hover:border-transparent"} 
                            text={"Already have account"}
                        />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}