import './App.css';
import axios from "axios";

function App() {
  const handleSubmit=()=>{
    const formData = new FormData()
        formData.append('firstName',"Anuj");
        formData.append('lastName',"Verma")
        formData.append('email',"anuj.v@yopmail.com")
        formData.append('password',"Test@123")
        axios.post("http://localhost:8000/signup", formData,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(res => {
          console.log(res)
        })
  }
  return (
    <div className="App">
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
}

export default App;
