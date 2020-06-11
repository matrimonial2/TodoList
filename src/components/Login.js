import React, { Component } from 'react';

export default class Login extends Component {
    
    render() {
        const { name, pass, handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit} className="d-flex justify-content-start">
                    <div className="form-group col-sm-3">
                        <h5 className="form-group-prepend mx-2">Login: </h5><br/>
                        <input type="text" className="form-control mx-2" placeholder="User name" ref={userName => this.userName = userName} /><br />
                        <input type="text" className="form-control mx-2" placeholder="Password" ref={Password => this.Password = Password} /><br />
                        <button type="submit" className="btn btn-primary mx-2">Login</button>
                    </div>
                </form>
            </div>
            )
    }
}