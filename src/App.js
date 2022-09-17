import React,{useState,useEffect} from 'react';
import Actor from './Actor';
import Show from './Show';
import './App.css';
import Navbar from './Navbar';
import axios from 'axios';


function App() {
  const[radio,setRadio]=useState('');
  const[input,setInput]=useState('');
  const[actor,setActor]=useState([]);
  const[show,setShow]=useState([]);
  const[actShow,setActShow]=useState([]);
  
  
  
  const updateRadioData=(e)=>{
    setRadio(e.target.value);
    setActor([])
    setShow([])
    setActShow([])
    setInput('')
    
  }
  useEffect(()=>{
    if(radio==="actor"){
      
      const fetchActorData=async()=>{
        const response=await axios.get(`https://api.tvmaze.com/search/people?q=${input}`)
        
        setActor(response.data);
        
      }
      fetchActorData();
      
    }else{
      if(input!==''){
        const fetchShowData=async()=>{
        const response=await axios.get(`https://api.tvmaze.com/search/shows?q=${input}`)
        setShow(response.data);
        
      }
      fetchShowData();
      
      }
    }
  },[input,radio])
  useEffect(()=>{
    if(actor.length !==0){
      const fetchActShowData=async()=>{
        const response=await axios.get(`https://api.tvmaze.com/people/${actor[0]?.person?.id}/castcredits?embed=show`)
        
        setActShow(response.data);
        
      }
      fetchActShowData();
    }
  },[actor,input])
  return (
    <div classname="App">
      <Navbar/>
      
      <div className='border border-5 rounded-3 mt-2'>
        <div className='ml-2 mt-4 d-inline'>   
          <input classname="form-control mt-2" type="text" placeholder="Search"   aria-label="Search" value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
        </div>
        <div className='ml-3 mt-2 d-inline'>
          <input classname="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value='actor' onChange={updateRadioData}/>
          <label classname="form-check-label" htmlFor="flexRadioDefault1">
          Actor
          </label>
        </div>
        <div className='ml-3 mt-2 d-inline'>
          <input classname="form-check-input " type="radio" name="flexRadioDefault"  id="flexRadioDefault2" value='show' onChange={updateRadioData}/>
          <label classname="form-check-label" htmlFor="flexRadioDefault2">
          Show
          </label>
        </div>
        
      </div>
        
      <div className='d-flex justify-content-center'>
               {radio==='actor'?
               ((actShow.length !==0)?
               <Actor data={actShow}/>:
               <div style={{height:'380px'}}><h1>Search By Actor Name</h1></div>):
               radio==='show'?
               ((show.length !==0)?
               <Show data={show}/>:
               <div style={{height:'380px'}}><h1>Search By Show Name</h1></div>)
               :
              <div style={{height:'380px'}}>
               <h1>Select Category</h1> 
              </div>}
               
      </div>     
      
    </div>
  );
}

export default App;
