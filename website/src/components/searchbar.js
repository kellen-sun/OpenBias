import React, { Component } from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './css/Searchbar.css'


export default class Searchbar extends Component {
    constructor(props) {
        super(props);

        this.onSearchChange = this.onSearchChange.bind(this);

        this.state = {
            input: '',
            input2: ''
        };
    }

    onSearchChange = e => {
        this.setState({ input: e.target.value });
    };

    onSearch = () => {
        const x = this.state.input;
        window.location = `/article/${x}`;
    };

    render() {
        return (
            <div className="search-bar-container">
                <div className="search-icon-container">
                    <IconButton onClick={this.onSearch}><SearchIcon sx={{height:'25px', width:'auto ', paddingRight:'15px'}}/></IconButton>
                </div>
                <input className='input text-black' type="text" required value={this.state.input} onChange={this.onSearchChange} placeholder="Search by ID"/>
                <p>{this.state.input2}</p>
            </div>
        );
    }
}