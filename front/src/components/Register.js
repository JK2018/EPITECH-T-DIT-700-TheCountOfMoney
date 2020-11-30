import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import "../assets/css/login.css";

// API
import userApi from "../api/user";

export const Register = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const { username, email, password, password_confirmation } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password === password_confirmation) {
            const newUser = {
                username,
                email,
                password
            }
            try {
                const body = JSON.stringify(newUser);
                userApi.create(body).then((response) => {
                    //
                })
            } catch (error) {
                console.error(error.response.data);
            }
        }
    }

    return (
        <Grid container>
            <Grid item className="login-form" lg={4} md={6} sm={6} xs={10}>
                <h1 className="lead">Create new account</h1>
                <p className="introduction">
                    With a user account, save and follow live your favorite crypto-currencies.
                    Already have an account? <Link to="/login">Sign in.</Link>
                </p>
                <form onSubmit={e => onSubmit(e)}>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField 
                                className="input"
                                type="text" 
                                name="username"
                                label="Username"
                                variant="outlined" 
                                value ={username} 
                                onChange={e => onChange(e)} 
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                className="input"
                                type="email"
                                name="email"
                                label="Email Address"
                                variant="outlined" 
                                value={email}
                                onChange={e => onChange(e)}
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="input"
                                type="password"
                                name="password"
                                label="Password"
                                variant="outlined" 
                                value={password}
                                minLength="6"
                                onChange={e => onChange(e)}
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="input"
                                type="password"
                                name="password_confirmation"
                                label="Confirm Password"
                                variant="outlined" 
                                value={password_confirmation}
                                minLength="6"
                                onChange={e => onChange(e)}
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button className="submit-btn" type="submit" color="primary" variant="contained" size="large" fullWidth>
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}
export default Register;