import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery'

export default class InnerSidebar extends Component {

    constructor(props) {
        super(props)
        let data = Cookies.getJSON('name');
        this.loginData = data.user_data
        this.state = {
            listGroup: []
        }
    }

    componentDidMount() {
        this.groupAPI()
        this.showDisplayNameAPI()
        var urlGroup = window.location.href.split('groupdetail/')[1]
        this.setState({
            urlGroup: urlGroup
        })
        $(".sidebar-dropdown > a").click(function () {
            $(".sidebar-submenu").slideUp(250);
            if (
                $(this)
                    .parent()
                    .hasClass("active")
            ) {
                $(".sidebar-dropdown").removeClass("active");
                $(this)
                    .parent()
                    .removeClass("active");
            } else {
                $(".sidebar-dropdown").removeClass("active");
                $(this)
                    .next(".sidebar-submenu")
                    .slideDown(250);
                $(this)
                    .parent()
                    .addClass("active");
            }
        });

        $("#toggle-sidebar").click(function () {
            $(".page-wrapper").toggleClass("toggled");
        });
    }

    //==================================  Detail of Group List  ==============================

    groupAPI() {
        $('#main_loader').show();
        $('#root').css('opacity', '0.5');
        axios.post(`/freedomcell/api/users/group_list`, { 'user_id': this.loginData.id, 'view_user_id': this.loginData.id, 'api_key': this.loginData.api_key }).then((res) => {
            this.codeDataGroup = res.data.code
            if (this.codeDataGroup === true) {
                this.setState({
                    listGroup: res.data.recdata
                });
            }
            $('#main_loader').hide();
            $('#root').css('opacity', '1.0');
        }).catch((error) => {
        });
    }

    loading(id) {
        $('#main_loader').show();
        $('#root').css('opacity', '0.5');
        setTimeout(() => {
            window.location.href = '/timeLine/' + id;
            $('#main_loader').hide();
            $('#root').css('opacity', '1.0');
        }, 200);
    }

    groupDetail(id) {
        $('#main_loader').show();
        $('#root').css('opacity', '0.5');
        setTimeout(() => {
            window.location.href = '/timeLine/' + id;
            $('#main_loader').hide();
            $('#root').css('opacity', '1.0');
        }, 200);
    }

    //=====================================   Show Display NAme    ====================================

    showDisplayNameAPI() {
        $('#main_loader').show();
        $('#root').css('opacity', '0.5');
        axios.post(`/freedomcell/api/users/show_display_name`, { 'user_id': this.loginData.id, 'api_key': this.loginData.api_key }).then((res) => {
            this.codeDataDisplayName = res.data.code
            if (this.codeDataDisplayName === true) {
                this.setState({
                    list: res.data
                });
            }
            $('#main_loader').hide();
            $('#root').css('opacity', '1.0');
        }).catch((error) => {
        });
    }

    render() {
        return (
            <div className="col-lg-3">
                <aside className="sidebar fixed">
                    <div className="widget" style={{ height: '352px', overflowY: 'auto', width: '307px', marginLeft: '-10px' }}>
                        <br />
                        <ul className="naves">
                            <li id="li_self">
                                <i className="ti-user"></i>
                                <Link to={`/timeLine/${this.loginData?.id}`} onClick={this.loading.bind(this, this.loginData?.id)}>{this.state.list?.display_name} </Link>
                            </li>
                            <li id="li_dashboard">
                                <i className="fa fa-home" aria-hidden="true"></i>
                                <Link to="/dashboard" > Home </Link>
                            </li>
                            <li id="li_wallet">
                                <i className="ti-wallet"></i>
                                <Link to="/wallet" title="" > Wallet </Link>
                            </li>
                            <li className="sidebar-dropdown">
                                <a href="#" className="group_arrow" style={{ marginLeft: '23px' }}> <img style={{ color: '#999', marginLeft: '-28px' }} src="https://espsofttechnologies.com/Projects_icon_small.png" /><span>Projects</span></a>
                                <div className="sidebar-submenu" style={{ display: 'none' }}>
                                    <ul>
                                        <li id="li_projects">
                                            <Link to="/createproject" title="" >  Create New Project </Link>
                                        </li>
                                        <li id="li_my_projects"><Link to="/MyProject" ><span>My Projects</span> </Link></li>
                                        <li id="li_discovery_projects"><Link to="/DiscoveryProject" ><span>Discover Projects</span> </Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="sidebar-dropdown">
                                <a href="#" className="group_arrow" style={{ marginLeft: '23px' }}>  <i className="fa fa-users" style={{ color: '#999', marginLeft: '-42px' }} aria-hidden="true"></i><span>Groups</span></a>
                                <div className="sidebar-submenu" style={{ display: 'none' }}>
                                    <ul>
                                        <li id="li_creategroup"><Link to="/creategroup" >
                                            <span>Create Group</span> </Link></li>
                                        <li id="li_my_groups"><Link to="/MyGroup" ><span>My Groups</span> </Link></li>
                                        <li id="li_discovery_groups"><Link to="/discoverygroups" ><span>Discover Group</span> </Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li id="li_analytics_traffic">
                                <i className="fa fa-bar-chart-o"></i>
                                <Link to="/analyticstraffic" title=""> Analytics </Link>
                            </li>
                            <li id="li_settings">
                                <i className="fa fa-gear"></i>
                                <Link to="/setting" title=""> Settings  </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        )
    }
}