import "./Notes.css";
import Note from "./Note";

const Notes = (props) => {
  const { notes, deleteNote, toggleModal,setSelectedNote } = props;

  return (
    <div className="notes">
      {notes.length === 0 ? (
        <p>You can add a note here</p>
      ) : (
        notes.map((note, index) => (
          <Note
            note={note}
            key={index}
            deleteNote={deleteNote}
            toggleModal={toggleModal}
            setSelectedNote= {setSelectedNote}
          />
        ))
      )}
    </div>
  );
};

export default Notes;
