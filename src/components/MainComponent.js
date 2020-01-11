import React, { Component } from 'react';
import CampsiteInfo from './campSiteInfoComponent';
import Directory from './directorycomponents';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutUsComponent';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/Comments.js';
import { PARTNERS } from '../shared/Partners.js';
import { PROMOTIONS } from '../shared/Promotions.js';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
            
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                partner={this.state.partners.filter(partner => partner.featured)[0]}
                />
            )
        }
        

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/Home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    <Route exact path='/contactus' component={Contact} /> 
                    <Route path='/aboutus' render={() => <About partners={this.state.partners} />} />                  
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;