import React from "react";

function CreateArea(props) {

  const [note,setNote ] = React.useState(
    {
      title: "",
      content: ""
    }
  );

  function handleCh(event){
    const {name,value} = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name] : value
      }
    })
  }

  function saveNote(event){
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input name="title" values={note.title} onChange={handleCh} placeholder="Title"  />
        <textarea name="content" values={note.content} onChange={handleCh} placeholder="Take a note..." rows="3" />
        <button onClick={saveNote} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
