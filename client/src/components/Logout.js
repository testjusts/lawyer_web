import React, { useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from "../App";


const Logout = () => {
    const { state, dispatch } = useContext(UserContext)
    const history = useNavigate()

    useEffect(() => {
        fetch("/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: 'include'
        }).then((res) => {
            dispatch({ type: "USER", payload: false })
            alert('You are Logout!')
            if (!state) {history('/login')}
            console.log(res)
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        }).catch((err) => {
            console.log(err)
        })
    })


    return (
        <div>
        </div>
    )
}

export default Logout