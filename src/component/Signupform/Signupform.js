import React, { useState } from 'react';
import PageComponent from '../common/pageComponent';
import Validation from './validation';

export const Signupform = () => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({})

  const handleChange = (e)=> {
    setValues({
      ...values,
      [e.target.id]: e.target.value
    });

    setErrors(Validation(values));
    //console.log(values)

  }

  const handleSubmit = (e)=> {
    e.preventDefault();

    setErrors(Validation(values));

  }
    return (
        <div>
             <PageComponent title="Sign Up">
             <div className="row">
              <form className="s12" style={{ maxWidth: '500px', margin: '0 auto' }}>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="name" type="text" className="validate"  onChange={handleChange} />
                    <label>Name</label>
                    {errors.name && <span className="red-text text-darken-2">{errors.name}</span>}
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" onChange={handleChange} />
                    <label>Email</label>
                    {errors.email && <span className="red-text text-darken-2">{errors.email}</span>}
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="password" type="password" className="validate" onChange={handleChange} />
                    <label>Password</label>
                    {errors.password && <span className="red-text text-darken-2">{errors.password}</span>}
                  </div>
                </div>
                <button disabled={!values.name || !values.email || !values.password? true: false} onClick={handleSubmit} className="btn waves-effect waves-light" type="submit" name="action">
                    Sign Up
                </button>
              </form>
            </div>

             </PageComponent>

         </div>
    )
}
