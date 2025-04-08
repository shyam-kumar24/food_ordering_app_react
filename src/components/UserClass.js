// this is class based react component.
import React from "react"

class UserClass extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
            count: 10,
            count2: 20
        }
    }

    render(){
        const {name, location} = this.props
        const {count} = this.state

        return (
            <div className="user-card">
                <h1>count: {count}</h1>
                <button onClick={() => {
                    // never update state variable directly
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Count Increase</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>contact: prachiBiswal@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass