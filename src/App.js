// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';




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

const projects =[
  {
  name: "JavaScript Practice",
  description: "Daily JavaScript learning - variables, functions,arrays, objects, conditions and loops.",
  link: "https://github.com/neha-patil-ui/javascript-practice"
  },
  {
    name: "DOM Practice",
    description: "Interactive webpage using DOM manipulation, event listeners and dynamic styling.",
    link: "https://github.com/neha-patil-ui/dom-practice"
  },
  {
    name: "My Portfolio",
    description: "Personal portfolio website built with HTML,CSS and JavaScript. Live on GitHub Pages.",
    link: "https://github.com/neha-patil-ui/my-portfolio"
  }
];

const contactInfo={
    email: "nehap2110@gmail.com",
    linkedIn:"https://linkedin.com/in/neha-patil-58b816321",
    github:"https://github.com/neha-patil-ui"
};

// function App(){
  return(
    <div className="App">
      <Header 
      name="Neha Patil"
      title="Frontend Developer"
      location="Bay Area, CA"
      />
      <Skills skills={skills}/>
      <Projects projects={projects}/>
      <Contact contactInfo={contactInfo}/>
    </div>
  );
}




export default App;



