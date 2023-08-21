import Navbar from './navbar'
import './css/display-article.css'
import React, {Component} from 'react'
import axios from 'axios'
import './css/display-article.css'
import './css/dash.css'
import './css/Searchbar2.css'; // Import the CSS file for styling

export default class Dash extends Component {
    constructor(props){
        super(props)

        this.onSearchChange = this.onSearchChange.bind(this);

        this.state = {
            articles: [],
            numArticles: 0,
            input: '',
        }
    }

    onSearchChange = e => {
        this.setState({ input: e.target.value });
        var text = e.target.value.toLowerCase()
        var items = document.getElementsByClassName('grid-item')
        Array.from(items).forEach(function(item){
            var itemName = item.firstChild.textContent
            if(itemName.toLowerCase().indexOf(text) != -1){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })

    };


    componentDidMount(){
        axios.get(`http://localhost:5001/articles/`).then(res=>{
            this.setState({
                articles: res.data,
                numArticles: res.data.length
            })    
        })
    }

    render(){
        return(
            <div>
                <Navbar/>
                <div className="flex flex-col items-center mt-48">
                    <h1 className="text-4xl pb-4 title font-bold">{`${this.state.numArticles} Articles Registered, 114 Reviews Made`}</h1>    
                </div>
                <hr class="my-6 mx-20 border-gray-700 " />
                
            </div>
                
        )
    }
}