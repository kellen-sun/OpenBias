import React, {Component} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './css/display-article.css'
import Navbar from './navbar'

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class DisplayArticle extends Component {
    constructor(props){
        super(props)

        this.state = {
            url:'',
            title:'',
            reviews: [],
            avgreview: 0,
            isNotReviewed: true,
            std: 0,
        }
    }

    componentDidMount(){
        let {id} = this.props.params
        axios.get(`http://localhost:5001/articles/${id}`).then(res=>{
            this.setState({
                url: res.data.url,
                title: res.data.title,
                reviews: res.data.reviews
            })
            var sum = 0 
            var num = 0 
            for(var x in this.state.reviews){
                sum+=parseInt(x)*this.state.reviews[x]
                num+=this.state.reviews[x]
            }
            var y = Math.round(sum/num * 100) / 100
            console.log(sum)
            console.log(y)
            this.setState({avgreview: y})


            var sum2 = 0
            for(var c in this.state.reviews){
                sum2+=(Math.abs(parseInt(c)-y)**2)*this.state.reviews[c]
            }
            console.log(sum2)
            var s = Math.round(((sum2/num)**0.5)*100)/100
            console.log(s)
            this.setState({std: s})
        })
    }

    submitVote(e){
        let {id} = this.props.params
        if(this.state.isNotReviewed){
            this.state.reviews[e.target.value] += 1
            this.setState({isNotReviewed: false})
        }
        const article = {
            url: this.state.url,
            title: this.state.title,
            reviews: this.state.reviews
        }
        axios.post(`http://localhost:5001/articles/update/${id}`,article).then(res=>console.log(res.data))
        window.location = '/dash'

    }

    render(){
        return(
            <div>
                <Navbar/>
                <div className="flex flex-col items-center py-40">
                    <div className="flex pb-12">
                        <h1 className="text-4xl font-bold title mx-56 text-center">{this.state.title}</h1>
                    </div>
                    <h1 className="text-3xl">{`Average review: ${this.state.avgreview}`}</h1>
                    <br/>
                    <h1 className="text-3xl">{`Standard deviation: ${this.state.std}`}</h1>
                    <h1 className='pt-32 pb-6 title font-semibold text-2xl'>Vote Below</h1>
                    <div className="flex space-x-0.5">
                        <p className='text-2xl text-green-600 font-extrabold pr-5 pt-1.5'>Left</p>
                        <button className="text-black font-extrabold text-xl px-8 py-2 bg-slate-400 rounded-xl hover:bg-gray-600" onClick={e=>this.submitVote(e)} value={1} >1</button>
                        <button className="px-8 py-2 bg-slate-400 rounded-xl hover:bg-gray-600" onClick={e=>this.submitVote(e)} value={2}></button>
                        <button className="px-8 py-2 bg-slate-400 rounded-xl hover:bg-gray-600" onClick={e=>this.submitVote(e)} value={3}></button>
                        <button className="px-8 py-2 bg-slate-400 rounded-xl hover:bg-gray-600" onClick={e=>this.submitVote(e)} value={4}></button>
                        <button className="px-8 py-2 bg-slate-400 rounded-xl hover:bg-gray-600" onClick={e=>this.submitVote(e)} value={5}></button>
                        <button className="px-8 py-2 bg-slate-400 rounded-xl hover:bg-gray-600" onClick={e=>this.submitVote(e)} value={6}></button>
                        <button className="px-8 py-2 bg-slate-400 rounded-xl hover:bg-gray-600" onClick={e=>this.submitVote(e)} value={7}></button>
                        <button className="px-8 py-2 bg-slate-400 rounded-xl hover:bg-gray-600" onClick={e=>this.submitVote(e)} value={8}></button>
                        <button className="text-black font-extrabold text-xl px-8 py-2 bg-slate-400 rounded-xl hover:bg-gray-600" onClick={e=>this.submitVote(e)} value={9}>9</button>
                        <p className='text-2xl text-green-600 font-extrabold pl-5 pt-1.5'>Right</p>
                    </div>
                    <div className="flex space-x-4 mt-24">
                        <button className="font-semibold text-white text-lg py-2.5 px-8 my-4 rounded-xl bg-green-800 hover:bg-slate-300 hover:text-black" onClick={()=>window.location=`${this.state.url}`}>View Article</button>
                        <button className="dash font-semibold text-lg py-2.5 px-8 my-4 rounded-xl hover:bg-slate-300 hover:text-black" onClick={()=>window.location='/dash'}>Return</button>
                    </div>
            
                </div>
            </div>
        )
    }
}

export default withParams(DisplayArticle)