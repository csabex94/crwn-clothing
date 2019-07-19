import React, { Component } from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.scss';


class SignIn extends Component {

    state = {

        email: '',
        password: '',

    }

    handleSubmit = async event => {

        event.preventDefault();

        const { email, password } = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password);

            this.setState({ email: '', password: '' })

        } catch (error) {

            console.log(error);

        }

    }

    handleChange = (event) => {

        const { value, name } = event.target;

        this.setState({ [name]: value });

    }

    render() {

        return (

            <div className="sign-in">

                <h2>I already have account</h2>

                <span>Sign in with your email and password</span>

                <form onSubmit={() => this.handleSubmit}>

                    <FormInput name="email" label="Email" value={this.state.email} required handleChange={this.handleChange} />

                    <FormInput name="password" type="password" label="Password" value={this.state.password} required handleChange={this.handleChange} />

                    <div className="buttons">

                        <CustomButton type="submit" value="Submit Form" onClick={this.handleSubmit}>Sign In</CustomButton>

                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>

                    </div>

                </form>

            </div>

        );

    }

}

export default SignIn;