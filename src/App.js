import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "./Note1";

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteiteams) => (
        <Note
          key={noteiteams.key}
          title={noteiteams.title}
          titlepros={noteiteams.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
