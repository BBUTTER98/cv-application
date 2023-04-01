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
          {firstName:"First_name"},
          {lastName:"Last_name"},
          {city:"Example city"},
          {postCode:"Examle post-code"},
          {number: "+48000111333"},
          {mail: "example@mail.com"},
        ],
        edu:[],
        abilities:[{
            id: uniqid(),
            name: "example of ability (click to remove)",
        }],
        practice:[{
            id: uniqid(),
            name: "Company name",
            position: "Your position",
            description:"Work description",
            date_start: "Start date",
            date_finish:"Finish date",
            tasks:[{
              id: uniqid(),
              name:"example task"
            }]
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
        return{
          [param]: [...prevState[param],obj],
        }
      })
    }
    remove = (id, param) =>{
      this.setState((prevState)=>{
        const updatedState = prevState[param].filter((obj)=>{
          console.log(obj.id);
          console.log(id);
          if(obj.id !== id){
            return obj;
          } 
        });
        console.log();
        return{
          [param]: updatedState,
        }
      })}
      addComplex = (id,object) =>{
        console.log(id);
        console.log(object);
        this.setState((prevState)=>{
          const updatedState =  prevState.practice.map((obj)=>{
            if(obj.id === id){
              return {
                ...obj,
                tasks: [...obj.tasks,object],
              }
            }
            return obj;
          })
          return {
            practice: updatedState,
          }  
        })
      }
    render(){
      return (
        <div className='main-container'>
          <General property={this.state.general} modify={this.modifyGeneral} /><br />
          <hr />
          <h2 className='main-heading'>Key Abilities</h2>
          <Abilities list={this.state.abilities} handleClick={this.remove} handleSubmit={this.add}/><br />
          <hr />
          <h2 className='main-heading'>Education</h2>
          <Education list={this.state.edu} add={this.add} remove={this.remove}/><br />
          <hr />
          <h2 className='main-heading'>Career Summary</h2>
          <Career list={this.state.practice} add={this.add} addComplex={this.addComplex} remove={this.remove}/><br />
          <hr />
          <p>I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).</p>
        </div>
      )
    }
  }
  export default App;