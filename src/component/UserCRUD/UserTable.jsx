import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class UserTable extends Component {

    constructor(props) {
        super(props);
    }

    deleteStudent = (id) => {
        // Delete the user info from out fake database..
        let self = this;

        confirmAlert({
            title: '',
            message: 'Are you sure do you want to Delete?.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        try {
                            axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
                                .then((result) => {
                                    console.log(result);
                                    alert("User data deleted successfully...");
                                    self.props.history.push("/user/list");                                    

                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                        } catch (error) {
                            console.log("====================================");
                            console.log(error);
                            console.log("====================================");
                        }
                    }
                },
                {
                    label: 'No',
                    onClick: () => {

                    }
                }
            ]
        });


    };

    render() {
        const { id, name, email, phone, website } = this.props.user;
        return (
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>
                    <Link to={`${website}`} target="_blank">{website}</Link>
                </td>
                <td>
                    <Link to={`/user/edit/${id}`} className="btn btn-success">Edit</Link>
                    <button type="button" onClick={() => this.deleteStudent(id)} className="btn btn-danger ml-3">Delete</button>
                </td>
            </tr>
        );
    }
}

export default UserTable;