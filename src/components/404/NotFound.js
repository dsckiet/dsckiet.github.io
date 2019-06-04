import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class NotFound extends Component {
    render() {
        return (
            <div class="fluid-container" style={{paddingBottom: '0'}}>
            <div class="container pt-5" style={{height: '100vh'}}>

                <img src="../assets/images/illustration.svg" alt=""  style={{position: 'absolute', transform: 'rotate(-90deg)', right: '32px', opacity: '0.3'}} />

                <div class="row pb-5 pt-4">
                    <div class="col-md-5">
                        <img class="pt-5 mt-5" src="../assets/images/illustration.svg" style={{zIndex: '-99', position: 'absolute'}} alt=""/>
                    </div>
                    <div class="col-md-7 col-12 pt-5 mt-5">
                        <h1 class="title" style={{fontSize: '4em', color: '#444444'}}>You are lost</h1>
                        <h2 class="title" style={{fontSize: '6em', color: '#4C4A78'}}>404</h2>

                        <br/>
                        <Link to="/" class="btn btn-primary prime_btn">Go to Home Page</Link>
                    </div>
                </div>
            </div>

    </div>

        )
    }
}
