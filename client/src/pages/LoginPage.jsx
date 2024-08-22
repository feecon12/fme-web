import Layout from "../components/Layout"
import { useState } from "react"
import axios from 'axios'
import Button from "../components/Button"

const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        email:"",
        password: ""
    });
    const [isValidated, setIsValidated] = useState(false);
    const [error, setError] = useState(null);
    const handleChange = (e) => { 
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const clearForm = () => { 
        setFormData({
            username: "",
            email:"",                                                                   
            password: ""
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/users', formData);
            if (response.status === 201) {
                setIsValidated(true); //set the state to true
                clearForm();
            }
            console.log(response.data);
            // Handle success (e.g., display a success message, reset the form, etc.)
        } catch (error) {
            console.error("Error sending message:", error.response?.data || error.message);
            setError(error.response?.data?.message || "Error submitting form");
            setIsValidated(false);  
        }
    };
    return (
        <>
            <Layout>
                <section className="min-h-screen flex items-center justify-center bg-gray-100">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                        <form onSubmit={handleSubmit}>
                            <fieldset className="py-2 flex flex-col gap-4">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    onChange={handleChange}
                                    value={formData.username}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={handleChange}
                                    value={formData.password}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                                <Button
                                    text={"Submit"}
                                    className="bg-dark px-2 py-2 rounded-lg text-light w-full hover:border-dark mt-4"
                                    type="submit"
                                />
                            </fieldset>
                        </form>
                        {isValidated && (
                            <div className="text-green-500 mt-4">
                                <p>Authenticated.</p>
                            </div>
                        )}
                        {error && (
                            <div className="text-red-500 mt-4">
                                <p>{error}</p>
                            </div>
                        )}
                    </div>
                </section>
            </Layout>

        </>

    )
}

export default LoginPage