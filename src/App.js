
import React from "react";
import './App.css';
import axios from 'axios';

 class App extends React.Component{  // used react class
    state ={ advice: ''};

    componentDidMount(){
   this.fetchAdvice();

    }

    fetchAdvice = () =>{   // function inside of a class

        axios.get("https://api.adviceslip.com/advice")
        .then((response) => {

            const { advice} = response.data.slip; // destructuring

            this.setState({advice})

       console.log(advice);
        })

        .catch((error) => {
       console.log(error);
        });
    }

    render(){
        const {advice} = this.state;  // destructuring
    return(
        <div className="app">
            <div className="card">
                <h1 className="heading">{advice}</h1>
            </div>

        </div>

    );
}

 }
export default App;