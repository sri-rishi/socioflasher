import { Button } from "../../components/index"

export const Login = () => {
    return (
        <div className="w-full h-screen flex flex-row justify-center items-center">
            <div className="flex flex-col items-center bg-white shadow-md p-8 rounded-2xl gap-4 font-semibold border-y-8 border-sky-700">
                <div className="flex flex-col items-center gap-8 border-b-2 border-sky-700 pb-4">
                    <h4 className="text-2xl">Welcome to socio<span className="text-sky-400">Flasher</span></h4>
                    <p className="text-xl">Sign In</p>
                </div>
                <div className="w-full flex flex-col gap-4 items-start">
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="username">
                            Username or Email
                        </label>
                        <input className="border-2 p-2 rounded font-normal" type="text" name="username" placeholder="Username Or Email"/>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input className="border-2 p-2 rounded font-normal"  type="password" name="password" placeholder="Password"/>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4 py-2">
                    <Button className={"bg-sky-600 p-2 rounded-2xl text-white hover:bg-sky-900"} text={"Sign In with test"}/>
                    <Button className={"bg-white p-2 rounded-2xl text-gray-400 border-2 hover:bg-sky-600 hover:text-white hover:border-transparent"} text={"Create new account"}/>
                </div>
            </div>
        </div>
    )
}