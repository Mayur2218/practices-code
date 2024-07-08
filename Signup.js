import React from 'react'
import './Signup.css'

function Signup() {
    return (
        <div className='mainpart'>
            <div className=" signupbox ">
                <span className="border">
                    <form>
                        <fieldset>
                            <legend>FOOTWEAR</legend>
                            <div>
                                <label className="form-label mt-4  d-flex justify-content-left ">First Name</label>
                                <input type="text" className="form-control" placeholder="First Name" />
                            </div>
                            <div>
                                <label for="exampleInputEmail1" className="form-label mt-4  d-flex justify-content-left ">Last Name</label>
                                <input type="text" className="form-control" placeholder="Last Name" />
                            </div>
                            <div>
                                <label for="exampleInputEmail1" className="form-label mt-4 d-flex justify-content-left">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div>
                                <label for="exampleInputPassword1" className="form-label mt-4 d-flex justify-content-left" >Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off" />
                            </div>

                            <fieldset>
                                <legend className="form-label mt-4 d-flex justify-content-left">Gender</legend>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="Male" />
                                    <label className="form-label mt-4 d-flex justify-content-left" for="optionsRadios1">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="Female" />
                                    <label className="form-label mt-4 d-flex justify-content-left" for="optionsRadios2">
                                        Female
                                    </label>
                                </div>
                            </fieldset>
                            <div className="d-grid gap-2 d-md-block">
                                <button type="submmit" className="btn btn-primary" >Submit</button>
                                <div className="dropdown gap-2 mt-2">
                                    <button className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" type="button">Login</button>


                                    <form className="dropdown-menu p-4">
                                        <div className="mb-3">
                                            <label for="exampleDropdownFormEmail2" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleDropdownFormPassword2" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
                                        </div>
                                        <div className="mb-3">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                                                <label className="form-check-label" for="dropdownCheck2">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Sign in</button>
                                    </form>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </span>
            </div>
        </div>
    )
}

export default Signup
