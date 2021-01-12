import React, { Component } from 'react';
import Header from '../directives/header'
import Footer from '../directives/footer'
import axios from 'axios';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';
import { Helmet } from 'react-helmet'
import Cookies from 'js-cookie';

const TITLE = 'Freedom-cells-Twofa'

const initialState = {
    user_id: '',
    code: '',
    is_enable_google_auth_code: '',
    two_faError: '',
}
export default class Twofa extends Component {

    constructor(props) {
        super(props);
        this.state = initialState
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }


    componentDidMount() {
        let data = Cookies.getJSON('name');
        this.loginData = data.user_data
    }



    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    //submit the data
    async submitForm(e) {
        e.preventDefault()
        this.setState(initialState)
        delete this.state.two_faError;

        const data = this.state
        this.state.user_id = this.loginData.id
        this.state.is_enable_google_auth_code = this.loginData.is_enable_google_auth_code


        axios.post('/freedomcell/api/users/two_factor_auth', data)
            .then(response => {

                if (response.data.code === true) {
                    toastr.success(response.data.message, { displayDuration: 3000 })
                    this.setState({
                        loading: false,
                        message: response.data
                    })
                    window.location.reload(true);
                    window.location.href = '/freedom-cells-react/dashboard'

                }

                else if (response.data.code === false) {
                    toastr.error(response.data.message, { displayDuration: 3000 })

                }

            })

            .catch(err => {
                this.setState({
                    loading: false
                })
            })
    }



    render() {




        return (

            <>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
                <div className="se-pre-con"></div>
                {/* <!-- NAVIGATION --> */}
                <Header />
                <section id="ContactUs">

                    <div className="row">
                        <div className="col-sm-4">

                        </div>

                        <div className="col-sm-4 border">
                            <div className=" contact-container ">

                                <h1 className="contact-title">Google 2FA</h1>
                                <p style={{ textAlign: 'center' }}>Enter the verification code generated by Google Authenticator app on your phone.</p>
                                {/* <!-- <a href="http://15.207.99.96/gloriouschain/">
                        <button style="margin-top: -67px;" name="btnForgotPass" className="btn btn-primary mt-10 btn-corner right-15 pull-left">Back</button></a> --> */}

                                <div className="contact-outer-wrapper col-sm-12 col-12">
                                    <div className="form-wrap">


                                        <form className="no-mb no-mt" onSubmit={this.submitForm}>
                                            <div className="row">
                                                <div className="col-xs-12 col-md-12" style={{ marginBottom: '20px' }}>

                                                    <div className="form-group">
                                                        <div className="controls">
                                                            <input type="number" className="form-control" value={this.state.code} onChange={this.onChange} name="code" style={{ border: '1px solid #ddd', padding: '14px' }} placeholder="Enter Google Authenticator Code" />
                                                        </div>
                                                        <div className="errorMessage_signup">{this.state.emailError}</div>
                                                    </div>

                                                    <div className="pull-left">
                                                        <button name="btnForgotPass" type="submit" disabled={!this.state.code} className="btn btn-primary mt-10 btn-corner right-15">Login</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-4">

                        </div>

                    </div>


                </section>
                {/* <!-- Footer Section --> */}
                <Footer />
            </>
        )
    }
}