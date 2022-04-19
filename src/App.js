
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

            const { advice} = response.data.slip;
            
       console.log(advice);
        })

        .catch((error) => {
       console.log(error);
        });
    }

    render(){
    return(
        <h1>app</h1>
    );
}

 }
export default App;