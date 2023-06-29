import React from "react";
import { useState } from "react";

function CreateArea(props) {

  const [ Note , setnote] = useState({
      title:"",
      content:""
  });

  function handlechange(event){
       const{value,name}=event.target;
       
       setnote(prevvalue=>{
        return{
          ...prevvalue,
          [name]:value
        }
});
}




function handleclick(event){
  props.onAdd(Note);
  setnote({
    title:"",
    content:""
  });
  event.preventDefault();
  
}

return (
    <div>
      <form>
        <input onChange={handlechange} value={Note.title} name="title" placeholder="Title" />
        <textarea name="content" onChange={handlechange} value={Note.content}  placeholder="Take a note..." rows="3" />
        <button onClick={handleclick}
        
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
