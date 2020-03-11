import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Note from "./Note";
import notes from "../notes";
import Homepage from "./Homepage"

import FunctionalComponent  from "./FunctionalComponent"
 

//console-log(uscount)

function createNotes (noteItem){
return (
<Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
)

}



function App(noteItem) {
  return (
    <div>
      <Header />
      <Navbar />
      <FunctionalComponent />

      
      {notes.map(createNotes)}
      <Homepage />
    
     <Footer />
    </div>
  );
}

export default App;
