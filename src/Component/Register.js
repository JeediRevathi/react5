import React, {Component} from 'react';

const url = "https://developerjwt.herokuapp.com/api/auth/register";

class Register extends Component {
    constructor(props) {
        super(props)

        this.state={
            name:'',
            email:"",
            password:"",
            phone:""


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
            .then(this.props.history.push('/')) //after registration push to login page
        }
    render(){
        return(
            
            <div className="container">
                <div className="panel panel-success">
                    <div className="panel-heading">
                    Register
                    </div>
                    <div className="panel-body">
                    <div className="form-group">
                            <label>Name</label>
                            <input name="name" value={this.state.name}
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                        
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
                        <div className="form-group">
                            <label>phone</label>
                            <input name="phone" value={this.state.phone}
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                        <button className="btn btn-success" type="submit" onClick={this.handleSubmit}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;