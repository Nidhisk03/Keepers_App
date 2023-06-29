import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const[items,setitem]=useState([]);

function addNote(note){
   setitem( (prevItem)=>{
     return [...prevItem , note];
  })

console.log(note);
}

function deleteitem(id){
  setitem(prevItem=>{
    return prevItem.filter((item,index)=>{
        return index!==id;
      });
 });
 console.log("shhd");
}



  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

       { items.map((noteitem,index) => {
             return(
             <Note
             key={index}
             id={index}
             title={noteitem.title}  
             content={noteitem.content}  
             onDelete={deleteitem} 
             />

       )

      })} 


      <Footer />
    </div>
  )
}

export default App;
