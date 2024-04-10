
import React,{useState} from "react";

const XDisplayName = () => {

    const [fullName, setFullName] = useState();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: ""
    });

    const handleSubmit = e=>{
        e.preventDefault();
        
        setFullName(`${formData?.firstName} ${formData?.lastName}`);
    }

    const handleChange = e=>{
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});
    }
    return (
        <div>
            <h1>Full Name Display</h1>
            <form onSubmit={handleSubmit}>
                <label for="firstName">First Name:</label>
                <input type='text' required id='firstName' name='firstName' value={formData?.firstName} onChange={handleChange}/>
                <br/>
                <label for="lastName">Last Name:</label>
                <input type='text' required id='lastName' name='lastName' value={formData.lastName} onChange={handleChange}/>
                <br/>
                <button type='submit'>Submit</button>
            </form>
            {fullName ? <p>Full Name: {fullName}</p> : null}
        </div>
    );
};


export default XDisplayName;