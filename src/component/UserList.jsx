import React, { Component } from "react";

class UserList extends Component {
    constructor(props){
        super(props);
        this.state = { 
            userList: [],
            isSuccess: false,
            hasError: false
        };
    }
    componentDidMount() {
        fetch("http://localhost:8000/api/v1/users/")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    userList: result,
                    isSuccess: true
                });
            },
            (error) => {
                this.setState({
                    isSuccess: false
                });
            }
        )
    }

    render() {
        const { userList, hasError, isSuccess } = this.state;
        //const callStatus = hasError ? "Call Has error" : "Api call Success";
        const callStatus = !isSuccess ? "Call Has error" : "Api call Success";
        return (
            <div>
                <h1><center>Registered User List</center></h1>
                <button onClick={(e) => this.props.switchRegister(e)}>Register New</button>
                <br />
                <div className="container">
                    <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((user, index) => (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.age}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserList;