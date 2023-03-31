  import { Component } from 'react';
  import './App.css';
  import uniqid from "uniqid";
  import General from "./components/General"
  class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        general:[
          {firstName:"First name"},
          {lastName:"Last name"},
          {city:"Example city"},
          {postCode:"e.g. 503-12"},
          {number: "+48000111333"},
          {mail: "example@mail.com"},
        ],
        edu:{
          actual:{
            id: uniqid(),
            name: "school name",
            date_start:"start date",
            date_finish:"finish date",
          },
          list:[],
        },
        abilities:{
          actual:{
            id: uniqid(),
            name: "example of ability",
          },
          list:[],
        },
        practice:{
          actual:{
            id: uniqid(),
            name: "Company name",
            position: "Your position",
            task:{
              id: uniqid(),
              name: "name task which you were doing in company",
            },
            list:[],
            date_start: "Start date",
            date_finish:"Finish date",
          },
          list:[],
        }
      }
    }
    modifyGeneral = (name, value) => {
      this.setState((prevState) => {
        const updatedGeneral = prevState.general.map((obj) => {
          if (obj[name] !== undefined) {
            return {
              ...obj,
              [name]: value,
            };
          } else {
            return obj;
          }
        });
        return {
          general: updatedGeneral,
        };
      });
    };    
    render(){
      return (
        <General property={this.state.general} modify={this.modifyGeneral}/>
      )
    }
  }
  export default App;