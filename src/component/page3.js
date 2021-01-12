import React, { Component } from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom'


// require("bootstrap/less/bootstrap.less");

// const TITLE = 'RedLedgers capital-Issuer'

export default class page3 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list:[]
        }

    }




    componentDidMount() {
        // axios.get(`http://espsofttechnologies.com/utou/api/users/all_user_list`, { }).then((res) => {
        //     this.setState({
        //         list: res.data.recdata
        //     });
        //    }).catch((error) => {

        // });
        

    }



    render() {


        return (
            <>
            <h1>Page 3</h1>
            <tbody>
            {/* {this.state.list.map(item => (
            <tr>
                <td>Nothing more to load</td>
            </tr>
            ))} */}
            </tbody>
            <Link to="">View more</Link>
            </>
        )
    }
}
