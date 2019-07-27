import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import "./style.css";
import LeaderCard from './LeaderCard';
import * as websiteAPI from "../../utils/websiteApi";
import Axios from 'axios';

class Leaderboard extends Component {
    state = {
        leaderboard: []
    }

    componentDidMount() {
        websiteAPI.gscpLeaderboard().then((data)=>{
            this.setState({leaderboard: data.leaderboard});
        })
    }

    render() { 
        return ( <>
            <Navbar/>
            <div className="container pt-5">
                <span style={{color:"#5576D1", fontWeight: 700}}>Leaderboard</span>
                <hr/>
                <div className="row">
                    <div className="pt-2 col-lg-4 col-12">
                        <h5><b>Getting Started With CP</b></h5>
                        
                        {this.state.leaderboard.map(data => {
                            return <LeaderCard key={data.hacker} data={data}/>
                        })}
                    </div>
                    <div className="pt-2 col-lg-8 col-12">
                        More contests coming soon!
                    </div>
                </div>
            </div>
            <Footer/>
        </> );
    }
}
 
export default Leaderboard;