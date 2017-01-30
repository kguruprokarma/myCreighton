import React, { Component } from 'react';
import { Link } from 'react-router';

class Login extends Component {
    render() {
        return (
            <section>
                    <div className="row">
                      <div className="col-md-offset-4 col-md-4">
                        <div className="form-input" >          
                         <form name="signup">
                           <div className="form-group"> <input type="text" className="form-control" placeholder="Net ID"  /></div>
                          <div className="form-group"><input type="password"  className="form-control" placeholder="Password"  /></div>
                          <div className="form-group text-center"><a >Forgot?</a></div>
                          <div className="form-group">
                            <Link className="btn btn-primary btn-raised btn-block" type="submit" to="/dashboard">Sign In</Link>
                          </div>
                         </form>
                          
                        </div>
                      </div>
                    </div>
            </section>
        );
    }
}



export default Login;