import { useState } from "react";

const Form = () => {
    const [height, setHeight] = useState('');
 
    const handleSubmit = (event) => {
        event.preventDefault();
        
    }
 
    return (
       <form onSubmit={handleSubmit}>
          <input type='number' value={height} onChange={(e) => { setHeight(e.target.value) }} />
          <button type='submit'>Submit</button>
       </form>
    );
 }
 export default Form;