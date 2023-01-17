
import NoteContext from "./noteContext";

import { useState } from "react";

const NoteState = (props)=>{
 const notesInitial=[
      {
    "_id": "63bef76c68f9dfb0495e3b6d",
    "user": "63becc49f55ca04523dcd68f",
    "title": "New note updated",
    "description": "My Note 1 updated",
    "tag": "personal tag",
    "date": "2023-01-11T17:52:44.951Z",
    "__v": 0
  },
   {
    "_id": "63bef76c68f9dfb0495e3b6d",
    "user": "63becc49f55ca04523dcd68f",
    "title": "New note updated",
    "description": "My Note 1 updated",
    "tag": "personal tag",
    "date": "2023-01-11T17:52:44.951Z",
    "__v": 0
  },
   {
    "_id": "63bef76c68f9dfb0495e3b6d",
    "user": "63becc49f55ca04523dcd68f",
    "title": "New note updated",
    "description": "My Note 1 updated",
    "tag": "personal tag",
    "date": "2023-01-11T17:52:44.951Z",
    "__v": 0
  }
 ] 
 const [notes ,setNotes]=useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;