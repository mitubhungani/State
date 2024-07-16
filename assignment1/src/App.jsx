import "./App.css";
import Greetings from "./Greetings";


function App() {

  let data1={
    name:"HHHHHHHHHHHHH",
    color:"green"
  };

  return (
    <> 
    <center><h1>Greetings!!!</h1></center>
    <div className="Greetings">
      <Greetings {...data1}/>
      <Greetings name="Hello" color='red'/>
      <Greetings name="World" color='yellow'/>
      <Greetings name="Noooooooo" color='green'/>
      <Greetings />
    
     
     </div> 
    </>
  );
}

export default App;
