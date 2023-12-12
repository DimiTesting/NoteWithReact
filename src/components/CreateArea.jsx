import React from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={props.handleChange} />
        <textarea
          name="content"
          placeholder="Content..."
          rows="3"
          onChange={props.handleChange}
        />
        <button onClick={props.handleClick}><AddIcon/> </button>
      </form>
    </div>
  );
}

export default CreateArea;
