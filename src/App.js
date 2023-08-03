import { useState } from 'react';
import './App.css';
import NoteContainer from './Components/NoteContainer/NoteContainer';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  const [notes,setNotes]=useState([
    {
      text: "jdlfjfk",
      time: "4:45pm",
      color: "red"
    },
    {
      text: "jdlfjfk",
      time: "1:40 pm",
      color: "brown"
    },
    {
      text: "jdlfjfk",
      time: "3:45pm",
      color: "cyan"
    },
    {
      text: "jdlfjfk",
      time: "4:00pm",
      color: "pink"
    },
    {
      text: "dkfdfd",
      time: "7:00pm",
      color: "green"
    },
    {
      text: "jdlfjfk",
      time: "9:08pm",
      color: "blue"
    },
  ]);
  const addNote=(color)=>{
      const tempNotes=[...notes]
      tempNotes.push({
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
