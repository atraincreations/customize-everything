import React, { Component } from "react";

class Search extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             search: '',
             choice: 'name'
        }
    }

    handleSearchChange = event => {
        this.setState({
            search: event.target.value
        })
    }
    
    handleChoiceChange = event => {
        this.setState({
            choice: event.target.value
        })
        console.log(event.target.value)
    } 

    handleSubmit = event => {
        alert(`SELECT * FROM users_db WHERE ${this.state.choice} = '${this.state.search}'`)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Search: </label>
                    <input type='text' 
                        value={this.state.search} 
                        onChange={this.handleSearchChange} 
                    />
                </div>
                <div>
                    <label>Choice: </label>
                    <select value={this.state.choice} onChange={this.handleChoiceChange}>
                        <option value="name">Advisor Name</option>
                        <option value="email">Email</option>
                        <option value="firm">Firm Name</option>
                        <option value="id">User ID</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        );
    }
}

export default Search;