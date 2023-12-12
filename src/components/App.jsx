import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [notes, setNotes] = useState([]);

  function handleChange(event) {
    const { value, name } = event.target;

    setNote((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content,
        };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          content: value,
        };
      }
    });
  }

  function handleClick(event) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
    event.preventDefault();
  }

  function deleteNote(id) {
    setNotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea handleChange={handleChange} handleClick={handleClick} />
      {notes.map((note, index) => (
        <Note
          title={note.title}
          content={note.content}
          key={index}
          id={index}
          delete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
