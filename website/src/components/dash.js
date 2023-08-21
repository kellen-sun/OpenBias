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
                    <h1 className="text-4xl pb-4 title font-bold">{`${this.state.numArticles} Articles Registered`}</h1>    
                    <div className="search-bar-container2">
                        <input className='input2 text-black' type="text" required value={this.state.input} onChange={this.onSearchChange} placeholder="Search for an article..."/>
                        <p>{this.state.input2}</p>
                    </div>
                </div>
                <hr class="my-6 mx-20 border-gray-700 " />
                <div className="flex flex-col items-center mb-20">
                    <div className="grid">
                        {this.state.articles.map(x=> {
                            var sum = 0 
                            var num = 0 
                            for(var y in x.reviews){
                                sum+=parseInt(y)*x.reviews[y]
                                num+=x.reviews[y]
                            }
                            var y = parseInt(sum/num)
                            var b = 40+(y*27)
                            console.log(b)
                            
                            var n = ''
                            if (x.title.length > 75) {
                                n = x.title.substring(0,74) + "...";
                            } else {
                                n = x.title
                            }

                            return (
                                <div key={x._id} className="grid-item hover:bg-gray-600">
                                    <a href={`/article/${x._id}`} className="font-semibold mx-5 my-5">{n}</a>
                                    <a href={`/article/${x._id}`} style={{paddingLeft:"3vh", paddingTop:"30px"}}><span className="font-extrabold">L</span> ----------------------------|---------------------------- <span className='font-extrabold'>R</span></a>
                                    <a href={`/article/${x._id}`} id="dot" className="font-extrabold text-7xl text-green-500" style={{position:'relative',left:`${b}px`, bottom:'65px'}}>.</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr class="my-6 mx-20 border-gray-700 " />
                <div className="flex flex-col items-center mb-20">
                    <h1 className="text-2xl font-semibold">News Networks</h1>
                    <div className="grid2">
                        <div className="grid-item2 hover:bg-gray-700 hover:text-gray-900">
                            <a className="font-medium mx-5 my-5 title text-xl">CBC</a>
                        </div>
                        <div className="grid-item2 hover:bg-gray-700 hover:text-gray-900">
                            <a className="font-medium mx-5 my-5 title text-xl">CTV</a>
                        </div>
                        <div className="grid-item2 hover:bg-gray-700 hover:text-gray-900">
                            <a className="font-medium mx-5 my-5 title text-xl">Toronto Star</a>
                        </div>
                        <div className="grid-item2 hover:bg-gray-700 hover:text-gray-900">
                            <a className="font-medium mx-5 my-5 title text-xl">Macleans</a>
                        </div>
                        <div className="grid-item2 hover:bg-gray-700 hover:text-gray-900">
                            <a className="font-medium mx-5 my-5 title text-xl">Global News</a>
                        </div>
                        <div className="grid-item2 hover:bg-gray-700 hover:text-gray-900">
                            <a className="font-medium mx-5 my-5 title text-xl">Ottawa Citizen</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}