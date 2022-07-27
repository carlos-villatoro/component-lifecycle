import React, {Component} from 'react'

class FavoriteFoods extends Component{
    // component is constructed during the mounting
    constructor(){
        // get stuff from Component
        super()
        this.state = {
            // text value for a controlled form input
            textValue: '',
            // an array of fav foods user has entered
            favorites: []
        }
        console.log('fav foods has been constructed')
    }

    // runs after the component is constructed in the mount phase
    // important -- runs only once
    // fetching api data and putting it on the page (with no user inter)
    componentDidMount(){
        console.log('fav foods has mounted')
    }

    // runs everytime the component is re-rendered
    // aka when state changes of this or a parent component
    componentDidUpdate(){
        console.log('fav foods has updated')
        // accurate state console.logs here
        console.log('fav foods state', this.state)
    }

    // happens in unmounting phase
    // used to remove intervals and event listeners mounted on the dom
    componentWillUnmount(){
        console.log('fav foods is unmounting')
    }


    // event handlers
    handleChange = (e)=> this.setState({ textValue: e.target.value })

    handleSubmit = (e)=>{
        e.preventDefault()
        this.setState(prevState => (
            { textValue: '', 
            favorites: [...prevState.favorites, prevState.textValue] 
            }
        ))
    }

    // render happens during mounting and updating
    render(){
        console.log('fav foods is rendering')

        const foods = this.state.favorites.map((fave, i)=> <li key={`food${i}`}>{fave}</li> )
        return(
            <div>
            <h2> fave foods</h2>
            <ul>
                {foods}
            </ul>

            <form onSubmit={this.handleSubmit}>
                <label htmlFor='text-input'>Enter a food:</label>
                <input
                  type='text'
                  id='text-input'
                  value={this.state.textValue}
                  onChange={this.handleChange}
                />

                <input type='submit'/>
            </form>

            </div>
        )
    }
}

export default FavoriteFoods;