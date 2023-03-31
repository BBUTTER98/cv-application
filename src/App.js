import { Component } from 'react';
import './App.css';
import uniqid from "uniqid";
import General from "./components/General"
import Abilities from './components/Abilities';
import Education from './components/Education';
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
    addAbility = (value) =>{
      const obj = {
        id:uniqid(),
        name:value,
      }
      this.setState((prevState)=>{
        return {
          abilities: [...prevState.abilities,obj]
        }
      })
    }
    removeAbility = (id) =>{
      this.setState((prevState)=>{
        const updatedState = prevState.abilities.filter((obj)=>{
          if(obj.id !==id){
            return obj;
          } 
        });
        return{
          abilities: updatedState,
        }
      })
    }
    addSchool = (obj) =>{
      this.setState((prevState)=>{
        return {
          edu: [...prevState.edu,obj]
        }
      })
    }
    
    render(){
      return (
        <>
          <General property={this.state.general} modify={this.modifyGeneral}/>
          <Abilities list={this.state.abilities} handleClick={this.removeAbility} handleSubmit={this.addAbility}/>
          <Education list={this.state.edu} add={this.addSchool}/>
        </>
      )
    }
  }
  export default App;