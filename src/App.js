import { useState } from 'react';
import './App.css';
import NoteContainer from './Components/NoteContainer/NoteContainer';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  const [notes,setNotes]=useState([
    
     
  ]);
  const addNote=(color)=>{
      const tempNotes=[...notes]

      tempNotes.push({
        id:Date.now() +""+ Math.floor(Math.random()*78),
        text: "",
        time: Date.now(),
        color,
      });
      setNotes(tempNotes);
  }
  return (
    
    <div className="app">
      <Sidebar addNote={addNote}/>
    <NoteContainer notes={notes}/>

    </div>
    

  );
}

export default App;
