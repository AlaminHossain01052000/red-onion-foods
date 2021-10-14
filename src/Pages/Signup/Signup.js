import React from 'react';



const Signup = () => {

    return (
        <div style={{ marginTop: "120px" }} className="d-flex justify-content-center">
            <form className="mx-auto">
                <div class="mb-3">

                    <input type="text" style={{ backgroundColor: "#eee" }} className="form-control" placeholder="Name" />

                </div>
                <div class="mb-3">

                    <input type="email" style={{ backgroundColor: "#eee" }} className="form-control" placeholder="Email" />

                </div>
                <div class="mb-3">

                    <input type="password" style={{ backgroundColor: "#eee" }} className="form-control" placeholder="Password" />
                </div>
                <div class="mb-3">

                    <input type="password" style={{ backgroundColor: "#eee" }} className="form-control" placeholder="Confirm Password" />
                </div>

                <button type="submit" className="btn btn-danger w-100">Sign Up</button>
                <p className="text-center text-danger mt-3">Already have an account</p>
            </form>


        </div>
    );
};

export default Signup;