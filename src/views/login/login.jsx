import { Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { styled } from "@stitches/react"
import { useEffect, useState } from "react"
import { login, signUp } from "../../api/apis"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../../redux/reducers/messages"
import { setAuthenticated, setUserDetails, setUserToken } from "../../redux/reducers/users"

export const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState([

    ])
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.users.user?.session ? true : false);


    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard')
        }
    }, [isAuthenticated])

    const handleOnChange = (e) => {
        console.log('value here')
        let value = e.target.value
        let name = e.target.name
        setUser({ ...user, [name]: value })
    }
    const handleLogin = (e) => {
        login(user?.farm_name, user)
            .then((res) => {
                dispatch(setUserDetails(res))
                dispatch(addMessage(res.message))
                dispatch(addMessage('LoginSuccessful'))


            })
            .catch((err) => {
                dispatch(addMessage(err.response?.data['detail']))
            })
    }

    const handleSignUp = (e) => {
        signUp(user?.farm_name, user)
            .then((res) => {
                dispatch(setUserDetails(res))
                dispatch(addMessage(res.message))
                dispatch(addMessage('Signup Succesful'))



            })
            .catch((err) => {
                dispatch(addMessage(err.response?.data['detail']))
            })
    }

    return (
        <Root className="py-5 px-4  bg-grey bg-darkened view_height_100">
            <div className="flex flex-col lg:flex-row m-1 md:m-5  h-full ">
                <div className="flex-[0_1_50%]  bg-login-left flex flex-col justify-center items-center">

                </div>
                <div className="flex-[1_1_700px]
                py-5 md:py-0 flex flex-col justify-center items-center
                 bg-white" style={{ height: 'max-height' }}>
                    <h1 className="uppercase brand-green-font font-bold">Boatey Farms</h1>

                    <div className="py-5">
                        <TextField label='FARM NAME'
                            name="farm_name"
                            required={true}
                            onChange={handleOnChange} />

                    </div>
                    <div className="py-5">
                        <TextField label='EMAIL'
                            name="email"
                            value={user.email}
                            required={true}
                            onChange={handleOnChange} />

                    </div>

                    <div className="py-5">
                        <TextField label='PASSWORD'
                            name="password"
                            type="password"
                            value={user.password}
                            required={true}
                            onChange={handleOnChange} />


                    </div>
                    <div className="flex gap-4">
                        <Button
                            sx={{
                                color: "#0FA958"

                            }}
                            onClick={handleSignUp}
                            className="">SIGN UP</Button>

                        <Button
                            sx={{
                                color: "grey"

                            }}

                            onClick={handleLogin}
                            className="text-center">LOGIN</Button>
                    </div>
                </div>
            </div>
        </Root>
    )


}

const Root = styled('div', {

})