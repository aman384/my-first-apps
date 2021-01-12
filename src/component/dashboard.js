import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

// require("bootstrap/less/bootstrap.less");

// const TITLE = 'RedLedgers capital-Issuer'

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list:[]
        }

    }




    componentDidMount() {
        axios.get(`http://espsofttechnologies.com/utou/api/users/all_user_list`, { }).then((res) => {
            this.setState({
                list: res.data.recdata
            });
           }).catch((error) => {

        });
        

    }



    render() {


        return (
            <>
            <h>Page 1</h>
            <tbody>
            {this.state.list.map(item => (
            <tr>
                <td>{item.username}</td>
            </tr>
            ))}
            </tbody>
            <Link to="/profile">View more</Link>
            </>
        )
    }
}
