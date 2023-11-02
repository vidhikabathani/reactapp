import React, { useEffect, useState } from 'react'

let initial = {
    name: "",
    email: "",
    password: ""
}

function User() {
    let [obj, setObj] = useState(initial)
    let [array, setArray] = useState(JSON.parse(localStorage.getItem("User")) || [])
    let[edit,setEdit]=useState(-1)
    const change = (e) => {
        const { name, value } = e.target
        setObj({
            ...obj,
            [name]: value
        })
    }
    useEffect(() => {
        localStorage.setItem("User", JSON.stringify(array))
    }, [array])
    const handlesubmit = (e) => {
        e.preventDefault();
        setArray((pre) => [...pre, obj])
    }
    const handleDelete=(id)=>{
        let data=[...array]
        data.splice(id,1)
        setArray(data)
    }
    const handleUpdate=(id)=>{
        setEdit(id)
        setObj(array[id])
    }
    return (
        <>
            <form action="">
                <input type="text" placeholder='Enter Name' onChange={change} name='name' />
                <input type="text" placeholder='Enter Email' onChange={change} name='email' />
                <input type="text" placeholder='Enter Password' onChange={change} name='password' />
                <input type="submit" onClick={handlesubmit} />
            </form><br /><br />
            {
                array.map((e,index) => {
                    return <>
                        <div key={index}>
                        <h3>{e.name}-{e.email}</h3>
                        <button onClick={()=>handleDelete(index)}>Delete</button>
                        <button onClick={()=>handleUpdate(index)}>Update</button>
                        </div>
                    </>
                })
            }
        </>
    )
}

export default User