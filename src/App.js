import React from 'react';
// import logo from './logo.svg';
import './assets/jquery.emojiarea.css'
// import './assets/stylesheet.css'
import './assets/fontello.css'
import './App.css';
// import './assets/css/bootstrap.css';
import './assets/css/font-awesome.min.css';
import './assets/plugins/owl/owl.carousel.css'
import './assets/plugins/owl/owl.theme.css'
import './assets/plugins/owl/owl.transitions.css'
import './assets/plugins/aos-master/aos.css'
import './assets/css/responsive.css'
import './assets/css/main.min.css'
import './assets/css/style.css'
import './assets/css/style1.css'
import './assets/css/canvas.css'
import './assets/themify-icons.css'
import './assets/css/color.css'

// import '~video-react/dist/video-react.css'; // import css

import Home from './components/Home';
import Header from './directives/header'
import Footer from './directives/footer'
import Dashboard from './components/Dashboard'
import InnerHeader from './directives/innerHeader'
import InnerSidebar from './directives/innerSidebar'
import RightSidebar from './directives/rightSidebar'
import Fixedsidebarright from './directives/Fixedsidebarright'
import Timeline from './components/Timeline'
import Wallet from './components/Wallet'
import Creategroup from './components/Creategroup'
import Forgetpassword from './components/Forgetpassword'
import Resetpassword from './components/Resetpassword'
import Groupdetail from './components/Groupdetail'
import AnalyticsTraffic from './components/Analytics'
import DiscoveryGroups from './components/Discoverygroup'
import Setting from './components/Setting'
import Messaging from './components/messaging'
import Twofa from './components/Twofa'
import Headerhome from './directives/headerhome'
import Overview from './components/Overview'
import Createproject from './components/CreateProject'
import Allprojects from './components/Allproject'
import Profilesetup from './components/Profilesetup'
import Pro from './components/Pro'
import Plus from './components/Plus'
import Allprojectshome from './components/Allprojecthome'
import MyGroups from './components/myGroups'
import MyProjects from './components/Myprojects'
import DiscoveryProjects from './components/DiscoverProject'
import AllNotifications from './components/Allnotification'
import Home1 from './components/Home1'
import BuyEther from './components/BuyEth'



import { HashRouter, Route, Switch } from 'react-router-dom'


function App() {
  return (

    <HashRouter>
      <div>
        <Switch>
        {/* <Route path="/freedom-cells-react/" exact component={Home} /> */}
          
          <Route path="/freedom-cells-react/" exact component={Home} />
          <Route path="/freedom-cells-react/Login=:id" component={Home1} />

          <Route path="/freedom-cells-react/header" component={Header} />
          <Route path="/freedom-cells-react/footer" component={Footer} />
          <Route path="/freedom-cells-react/dashboard" component={Dashboard} />
          <Route path="/freedom-cells-react/innerHeader" component={InnerHeader} />
          <Route path="/freedom-cells-react/innerSidebar" component={InnerSidebar} />
          <Route path="/freedom-cells-react/rightSidebar" component={RightSidebar} />
          <Route path="/freedom-cells-react/timeLine/:id/:post_id" component={Timeline} />
          <Route path="/freedom-cells-react/timeLine/:id" component={Timeline} />
          <Route path="/freedom-cells-react/creategroup" component={Creategroup} />
          <Route path="/freedom-cells-react/fixedsidebarright" component={Fixedsidebarright} />
          <Route path="/freedom-cells-react/wallet" component={Wallet} />
          <Route path="/freedom-cells-react/analyticstraffic" component={AnalyticsTraffic} />
          <Route path="/freedom-cells-react/discoverygroups" component={DiscoveryGroups} />
          <Route path="/freedom-cells-react/forgetpassword" component={Forgetpassword} />
          <Route path="/freedom-cells-react/setting" component={Setting} />
          <Route path="/freedom-cells-react/messaging" component={Messaging} />
          <Route path="/freedom-cells-react/twofa" component={Twofa} />
          <Route path="/freedom-cells-react/resetpassword/:code" component={Resetpassword} />
          <Route path="/freedom-cells-react/groupdetail/:group_id" component={Groupdetail} />
          <Route path="/freedom-cells-react/Headerhome" component={Headerhome} />
          <Route path="/freedom-cells-react/overview" component={Overview} />
          <Route path="/freedom-cells-react/createproject" component={Createproject} />
          <Route path="/freedom-cells-react/allprojects" component={Allprojects} />
          <Route path="/freedom-cells-react/profilesetup" component={Profilesetup} />
          <Route path="/freedom-cells-react/pro" component={Pro} />
          <Route path="/freedom-cells-react/plus" component={Plus} />
          <Route path="/freedom-cells-react/allprojectslist" component={Allprojectshome} />
          <Route path="/freedom-cells-react/MyGroup" component={MyGroups} />
          <Route path="/freedom-cells-react/MyProject" component={MyProjects} />
          <Route path="/freedom-cells-react/DiscoveryProject" component={DiscoveryProjects} />
          <Route path="/freedom-cells-react/AllNotification" component={AllNotifications} />
          <Route path="/freedom-cells-react/BuyEth" component={BuyEther} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
