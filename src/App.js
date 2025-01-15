import { useState } from "react"

import Header from "./components/Header"
import Form from "./components/Form"

const App =()=> {

    const handleChange = (event)=> {
        const { name, value, type, checked} = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name] : type ==="checkbox" ? checked : value
            }
        })
    }

    const handleSubmit =(event)=> {
        event.preventDefault()
        alert('Form Completed')
    }

    const [ formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        dateofbirth: '',
        phone: '',
        password: ''
    })

    return (
        <>
            <Header username= {formData.username} />
            <Form 
                firstName={formData.firstName} 
                lastName= {formData.lastName} 
                username= {formData.username}
                email= {formData.email}
                dateofbirth = {formData.dateofbirth} 
                phone= {formData.phone}
                password={formData.password}
                handleChange={handleChange}
                handleSubmit={handleSubmit}/>
        </>
    )
}

export default App