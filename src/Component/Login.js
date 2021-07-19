import React, {Component} from 'react';

const url = "https://developerjwt.herokuapp.com/api/auth/login";

class Login extends Component {
    constructor(props) {
        super(props)

        this.state={
            email:"",
            password:"",
            message:""
        }; 
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        console.log(this.state)
        fetch(url, 
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            .then((res) => res.json()) //will get response as token if auth is true
            .then((data) => {
                if(data.auth === false){  //if auth is false the token wil be set to message
                    this.setState ({message: data.token}) //invalid password
                }else{
                    sessionStorage.setItem('ltk', data.token) //if auth is true the token need to b stored
                    this.props.history.push('/profile') //ones done with registration push to users page
                }
            } ) 
    }
    render(){
        return(
            
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                     Login Area
                    </div>
                    <div className="panel-body">
                        <h1 style={{color:"red"}}>{this.state.message}</h1>
                        <div className="form-group">
                            <label>Email</label>
                            <input name="email" value={this.state.email}
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>password</label>
                            <input name="password" value={this.state.password}
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                        <button className="btn btn-success" type="submit" onClick={this.handleSubmit}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;