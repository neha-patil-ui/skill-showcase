// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Skills from './Skills';


// function App() { // Component - like Angular's @Componenet 
//   return (      // Returns what to show on Sceen
//     <div className="App">
//       <h1>Neha Patil</h1>
//       <p>Frontend Developer | Bay Area</p>
//     </div>
//   );
// }



// function App()
// {
//   const name = "Neha Patil";
//   const title = "Frontend Developer";
//   const location ="Bay Area, CA";

//   return (
//     <div className="App">
//       <h1>{name}</h1>
//       <p>{title}</p>
//       <p>{location}</p>
//     </div>
//   );

// }


function App(){
    // const skills = [
    //   "JavaScript",
    //   "Angular",
    //   "React",
    //   "HTML5",
    //   "CSS3",
    //   "SQL",
    //   "Azure",
    //   "Git"
    // ];
// }

const skills=[
  {name: "JavaScript", category: "Frontend" },
  {name: "Angular", category: "Frontend" },
   {name: "React", category: "Frontend" },
    {name: "HTML5", category: "Frontend" },
     {name: "CSS3", category: "Frontend" },
      {name: "SQL", category: "Backend" },
       {name: "Azure", category: "Cloud" },
        {name: "Git", category: "Tools" },
];

// function App(){
  return(
    <div className="App">
      <Header 
      name="Neha Patil"
      title="Frontend Developer"
      location="Bay Area, CA"
      />
      <Skills skills={skills}/>
    </div>
  );
}


export default App;



