import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";

const NOTES = [
 
];

const App = () => {
  const [notes, setNotes] = useState(NOTES);
  const [selectedNote, setSelectedNote] = useState({});
  const[isModalOpen, setIsModalOpen] = useState(false)

  const deleteNote = (id) => {
    setNotes((...prevNotes) => {return prevNotes.filter(note => id !== note.id)})
  }

  const addNote = (note) => {
    setNotes((prevNotes)=>{
      return [...prevNotes, note];
     })
    
  };

  const toggleModal = () => {
    setIsModalOpen(prevState => {
      return !prevState 
    })
  }

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes notes={notes}
       deleteNote = {deleteNote} 
       toggleModal= {toggleModal}
        setSelectedNote= {setSelectedNote} 
        />
      {
        isModalOpen &&  <Modal isModalOpen = {isModalOpen} selectedNote={selectedNote} toggleModal={toggleModal}/>
      }
    </div>
  );
};

export default App;

// use Arrow functions vs regular functions
// regular functions are calleble and constructible
// this inside a regular function is bound to the function
// arrow function only return one statement
