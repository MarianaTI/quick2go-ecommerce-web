import { login } from "@/feacture/sessionslice";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

interface LoginForm {
    email?: string;
    password?: string;
}

const LoginPage = () => {
    
    const [values, setValues] = useState<LoginForm>({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://www.quick2goapiprod.somee.com/api/cuentas/login/', values);
            if (response.status === 200) {
                const token = response.data.token;
                dispatch(login(token));
                router.push('/indexPage')
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" value={values.email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" value={values.password} onChange={handleChange} />
            </div>
            <button type="submit">Iniciar sesión</button>
        </form>
    )
}
export default LoginPage;
