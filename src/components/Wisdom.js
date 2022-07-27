import React, {Component} from 'react'
import axios from 'axios'

class Wisdom extends Component{
    // need to store the data somewhere
    state = {
        // shape initial state same as what it be eventually
        wiseWords: ''
    }
    // handle fact fetching data is async    
    // good news -- use fetch withoput installing anything
    // componentDidMount(){
    //     fetch('https://api.kanye.rest/')
    //         .then(res => res.json())
    //         .then(jsonData =>{
    //             console.log(jsonData)
    //             this.setState({ wiseWords: jsonData.quote })
    //         })
    // //wise way to do it
    // this.handleGetWisdom()
    // }

    // using async/await    
    // good news -- you can also install axios
    async componentDidMount(){
        try {
            const response = await axios.get('https://api.kanye.rest/')
            console.log(response.data)
            this.setState({ wiseWords: response.data.quote })
        } catch (error) {
            console.warn('api error',error)
        }
    }

    handleGetWise = async ()=>{
        try {
            const res = await fetch('https://api.kanye.rest/')
            const jsonData = await res.json()
            this.setState({ wiseWords: jsonData.quote})
        } catch (error) {
            console.warn('wisdom error', error)
        }
    }

    render(){
        return(
            <div>
                <h2> kanye's widsom </h2>

                <h3>{this.state.wiseWords}</h3>

                <button 
                onClick={this.handleGetWise}
                >Get More Wisdom</button>
            </div>
        )
    }
}

export default Wisdom;