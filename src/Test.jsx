import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form, Card, Container, InputGroup } from "react-bootstrap";
import React, { useState } from 'react';

function Test() {
    let [username, setUsername] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [lemail, setLemail] = useState("")
    let [lpassword, setLpassword] = useState("")
    let [Form, setForm] = useState("")
    let [arr, setArr] = useState([])

    const handlesignup = (e) => {
        e.preventDefault();
        let obj = {
            email: email,
            password: password
        }
        setArr((prev) => [...prev, obj])
    }

    const handlelogin = (e) => {
        e.preventDefault();
        if (lemail == email && lpassword == password) {
            alert("Login Succesfully!");
        }
    }
    return (
        <div>
            <Container className='pt-5'>
                <div className='mb-5 mt-5 pt-5 outline-dark'>
                    {
                        Form == "Login" ?
                            <Card className='m-5 p-5'>
                                <form id='login' onSubmit={handlelogin}>
                                    <h1 className='text-secondary'>Login Your Account</h1><br />
                                    <input type="email" placeholder='Enter Email' onChange={(e) => setLemail(e.target.value)} /><br />
                                    <br />
                                    <input type="password" placeholder='Enter Password' onChange={(e) => setLpassword(e.target.value)} /><br />
                                    {lpassword.length >= 8 ? (<span style={{ color: "green" }}>Valid Password</span>) :
                                        (<span style={{ color: "red" }}>Enter 8 digits!</span>)}<br /><br />
                                    <Button className='btn btn-dark'>Login</Button>
                                </form>
                            </Card>
                            :
                            <Card className='m-5 p-5'>
                                <InputGroup className="mb-3 bg-secondary w-50">
                                    <InputGroup.Text aria-label="Checkbox for following text input bg-secondary">Username</InputGroup.Text>
                                    <Form.Control aria-label="Text input with checkbox" />
                                </InputGroup>
                                <form id='signup'>
                                    <h1 className='text-secondary'>Create a new Account!</h1><br />
                                    <input type="text" placeholder='Enter User Name' onChange={(e) => setUsername(e.target.value)} /><br />
                                    {username.length >= 3 || username.length == 0 ? null :
                                        (<span style={{ color: "red" }}>Invalid User Name!</span>)}
                                    <br />
                                    <input type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} /><br /><br />
                                    <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} /><br />{password.length >= 8 ? (<span style={{ color: "green" }}>Valid Password</span>) :
                                        (<span style={{ color: "red" }}>Enter 8 digits!</span>)}<br /><br />
                                    <Button onClick={handlesignup} className='btn btn-dark'>Signup</Button>
                                </form>
                            </Card>
                    }

                </div>
                <Button onClick={() => setForm("Login")} className='me-3 btn btn-dark'>Login Now</Button>
                <Button onClick={() => setForm("Signup")} className='btn btn-dark'>Create New Account</Button>
            </Container>
        </div>
    )
}

export default Test;