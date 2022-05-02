import React,{useState} from 'react'
import './App.css';
//import ReactDOM from 'react-dom/client';

function App() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("successfully submited.....");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} required
      />
      </label>
      <br></br>
      <br></br>

      <label>Enter your age:
        <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} required
      />
      </label>
      <br></br>
      <br></br>

      <label>Enter your mobile number:
        <input type="text" name="mobilenumber" value={inputs.mobilenumber || ""} onChange={handleChange} required
      />
      </label>
      <br></br>
      <br></br>

      <label>Enter your mail id:
         <input type="text" name="mailid" value={inputs.mailid || ""} onChange={handleChange} required
         />
      </label>
      <br></br>
      <br></br>
        <input type="submit" />
    </form>
  )
}
export default App;