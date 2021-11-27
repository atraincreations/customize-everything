import React, { Component } from "react";

class Firm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render(){
        return(
            <div>
                <div className='firm-title'>
                    <h1>Firm Name</h1>
                </div>
                <div className='grid-container'>
                    <h4>Firm Name:</h4>
                    <p>firm name here</p>
                    <h4>Address:</h4>
                    <p>address here</p>
                    <h4>Phone Number:</h4>
                    <p>phone number here</p>
                    <h4>Disclaimer:</h4>
                    <p>disclaimer here</p>
                    <h4>Advisor Count:</h4>
                    <p>count here</p>
                    <h4>Admin Count:</h4>
                    <p>count here</p>
                </div>
                
            </div>
        );
    }
    
}


export default Firm;