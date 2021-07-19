//only admin user can cme to this page.

import React, {Component} from 'react';
import UserDisplay from './UserDisplay'

const url = "https://developerjwt.herokuapp.com/api/auth/users";

class UserList extends Component{
    constructor(props){
        super(props)
     this.state={
         users:""
     };
    }

    render() {
        if(sessionStorage.getItem('ltk') === null){ //if uer is nt loggied in push to login page
            this.props.history.push('/')
        }
        if(sessionStorage.getItem('ltk') !== null && sessionStorage.getItem('rtk') !== 'admin'){ //if user is logedin and user is nt admin push to profile page
            this.props.history.push('/profile')
        } 
        return(
           
            <div>
                <UserDisplay userdata={this.state.users}></UserDisplay>
            </div>

        );
    }

    componentDidMount(){
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            this.setState({users:data})
        })
    }
}
export default UserList;