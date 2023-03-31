import { Component } from 'react';
import './App.css';
import uniqid from "uniqid";
import General from "./components/General"
import Abilities from './components/Abilities';
import Education from './components/Education';
import Career from './components/Career';
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
        edu:[{
              id: uniqid(),
              name: "school name",
              date_start:"start date",
              date_finish:"finish date",
        }],
        abilities:[{
            id: uniqid(),
            name: "example of ability",
        }],
        practice:[{
            id: uniqid(),
            name: "Company name",
            position: "Your position",
            task:"Example tasks",
            date_start: "Start date",
            date_finish:"Finish date",
          }],
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
    add = (obj, param) =>{
      this.setState((prevState)=>{
        console.log(prevState[param]);
        return{
          [param]: [...prevState[param],obj],
        }
      })
    }
    remove = (id, param) =>{
      this.setState((prevState)=>{
        const updatedState = prevState[param].filter((obj)=>{
          if(obj.id !==id){
            return obj;
          } 
        });
        return{
          abilities: updatedState,
        }
      })}
    render(){
      return (
        <>
          <General property={this.state.general} modify={this.modifyGeneral}/><br />
          <Abilities list={this.state.abilities} handleClick={this.remove} handleSubmit={this.add}/><br />
          <Education list={this.state.edu} add={this.add}/><br />
          <Career list={this.state.practice} add={this.add}/><br />
        </>
      )
    }
  }
  export default App;