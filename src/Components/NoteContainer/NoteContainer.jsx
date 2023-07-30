import React from 'react'
import "./noteContainer.css";
import Note from '../Note/Note';

export default function NoteContainer() {
  return (
    <div className="note_container">
      <h2>Notes</h2>
      <div className="note_container_notes notes_scrollbar">
        <Note note={{        
            text:"saroj",
            time:"12:12 PM",
            color:"green" 
            }}/>
        <Note note={{        
            text:"saroj",
            time:"12:12 PM",
            color:"green" 
            }}/>
        <Note note={{        
            text:"saroj",
            time:"12:12 PM",
            color:"green" 
            }}/>
        <Note note={{        
            text:"saroj",
            time:"12:12 PM",
            color:"green" 
            }}/>
        <Note note={{        
            text:"saroj",
            time:"12:12 PM",
            color:"green" 
            }}/>
        <Note note={{        
            text:"saroj",
            time:"12:12 PM",
            color:"green" 
            }}/>
        <Note note={{        
            text:"saroj",
            time:"12:12 PM",
            color:"green" 
            }}/>
        <Note note={{        
            text:"saroj",
            time:"12:12 PM",
            color:"green" 
            }}/>
        <Note note={{        
            text:"saroj",
            time:"12:12 PM",
            color:"green" 
            }}/>
        </div>
    </div>
  )
}
