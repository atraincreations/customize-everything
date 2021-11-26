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
                <table className='grid-container'>
                    <h4>Firm Name:</h4>
                    <p>firm name here</p>
                    <h4>Firm Name:</h4>
                    <p>firm name here</p>
                    <h4>Firm Name:</h4>
                    <p>firm name here</p>
                    <h4>Firm Name:</h4>
                    <p>firm name here</p>
                    <h4>Firm Name:</h4>
                    <p>firm name here</p>
                    <h4>Firm Name:</h4>
                    <p>firm name here</p>
                    <h4>Firm Name:</h4>
                    <p>firm name here</p>
                </table>
                
            </div>
        );
    }
    
}


export default Firm;