import React, { Component } from 'react'
import axios from 'axios'
import UserTable from './UserTable';

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    async componentDidMount() {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            .then((result) => {
                console.log(result);
                this.setState({ users: result.data });
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    tableRow() {
        return this.state.users.map(function (user, index) {
            return <UserTable user={user} key={index} />;
        });
    }

    render() {
        return (
            <div>
                <h4 align="center">User List</h4>
                <table className="table table-striped table-bordered" style={{ marginTop: 10 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tableRow()}
                    </tbody>
                </table>
            </div>
        );
    }

}