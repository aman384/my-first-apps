import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


// require("bootstrap/less/bootstrap.less");

// const TITLE = 'RedLedgers capital-Issuer'

export default class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list:[]
        }

    }




    componentDidMount() {
        axios.get(`https://espsofttechnologies.com/utou/api/users/all_user_list`, { }).then((res) => {
            this.setState({
                list: res.data.recdata
            });
           }).catch((error) => {

        });
        

    }



    render() {


        return (
            <>
            <h>Page 2</h>
            <tbody>
            {this.state.list.map(item => (
            <tr>
                <td>{item.id}</td>
            </tr>
            ))}
            </tbody>
            <Link to="/page3">View more</Link>
            </>
        )
    }
}
