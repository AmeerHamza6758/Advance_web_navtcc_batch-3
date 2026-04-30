import React, { useState } from 'react'
import './StudentForm.css'
function StudentForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        age: ""
    })

    // error
    const [formErrors, setFormErrors] = useState({})


    // Validation
    function validateForm() {
        let errorState = {}

        if (form.name == "" || form.name == form.name.trim() || !form.name) {
            errorState.name = "Please enter your full name."
        }

        if (!form.email.includes('@') || form.email.trim() == "") {
            errorState.email = "Please enter your email address."
        }
         if (!form.password) {
            errorState.password = "Please enter your password."
        }
       else if (form.password < 8) {
            errorState.password = "Password must be 8 characters long."
        }
        return errorState;
    }


    // Chnage value
    function handleChnage(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // Submit Form
    function handleSubmit(e) {
        e.preventDefault()

        const validationError = validateForm()
        setFormErrors(validationError)
        console.log(validationError)
        // console.log(form, 'Ye form ka data ha jo hum  ny submit krwana hai!!!')
    }


    // Clear wala function
    function handleClear(e) {
        e.preventDefault()
        setForm({
            name: "",
            email: "",
            age: "",
            password: ""
        })

    }



    return (
        <div className='container'>
            <h1 className='std-form-title'>Student Registeration Form..</h1>
            <form className='form-container'>
                <div className='label-container'>
                    <label htmlFor="name" className='label'>Enter your Full Name:</label>
                    <input className='input' type="text" name='name' value={form.name}
                        placeholder='Enter your name...' onChange={handleChnage} />

                    {formErrors.name && <p style={{ fontSize: '12px', color: 'red' }}>{formErrors.name}</p>}
                </div>

                <div className='label-container'>
                    <label htmlFor="email" className='label'>Enter your Email Address:</label>
                    <input className='input' type="email" name='email' value={form.email}
                        placeholder='Enter your Email Address...' onChange={handleChnage} />
                    {formErrors.email && <p style={{ fontSize: '12px', color: 'red' }}>{formErrors.email}</p>}

                </div>

                <div className='label-container'>
                    <label htmlFor="age" className='label'>Enter your Age:</label>
                    <input className='input' type="number" name='age' value={form.age}
                        placeholder='Enter your age...' onChange={handleChnage} />
                    {formErrors.age && <p style={{ fontSize: '12px', color: 'red' }}>{formErrors.age}</p>}

                </div>

                <div className='label-container'>
                    <label htmlFor="password" className='label'>Enter your Password:</label>
                    <input className='input' type="password" name='password' value={form.password}
                        placeholder='Enter your Password...' onChange={handleChnage} />
                    {formErrors.password && <p style={{ fontSize: '12px', color: 'red' }}>{formErrors.password}</p>}

                </div>

                <div className='form-btn'>
                    <button className='btn-clear' onClick={handleClear}>Clear</button>
                    <button className='btn-submit' onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default StudentForm