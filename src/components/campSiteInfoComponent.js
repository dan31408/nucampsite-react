import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class CampsiteInfo extends Component {
         
    render() {
    if (this.props.campsite) {        
        return (
            <div className="container">
                <div className="row">               
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderCampsite(this.props.campsite.comments)}
                    </div>
                </div>
            );
        }
        
       return <div />;
    }
 }
 
export default CampsiteInfo;