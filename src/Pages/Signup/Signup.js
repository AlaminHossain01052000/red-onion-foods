import React, { useState } from 'react';
import { set } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';



const Signup = () => {
    const { emailLogin } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const history = useHistory();
    const getEmail = e => {
        setEmail(e.target.value);

    }
    const getPassword = e => {

        setPassword(e.target.value);




    }
    const register = (e) => {



        emailLogin(email, password);
        history.push("/home");

    }



    return (
        <div style={{ marginTop: "120px" }} className="d-flex justify-content-center">
            <form className="mx-auto" >
                <div class="mb-3">

                    <input type="text" style={{ backgroundColor: "#eee" }} className="form-control" id="user-name" placeholder="Name" />

                </div>
                <div class="mb-3">

                    <input type="email" style={{ backgroundColor: "#eee" }} className="form-control" id="email-field" placeholder="Email" onBlur={getEmail} />

                </div>
                <div class="mb-3">

                    <input type="password" style={{ backgroundColor: "#eee" }} className="form-control" id="password-field" placeholder="Password" onBlur={getPassword} />
                </div>
                <div class="mb-3">

                    <input type="password" style={{ backgroundColor: "#eee" }} className="form-control" placeholder="Confirm Password" id="confirm-password" />
                </div>

                <button type="submit" className="btn btn-danger w-100" onClick={register}>Sign Up</button>
                <p className="text-center text-danger mt-3">Already have an account</p>
            </form>


        </div>
    );
};

export default Signup;