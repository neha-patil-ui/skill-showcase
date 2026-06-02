import { useState } from 'react';

function Skills({ skills }){
const [filter, setFilter] = useState("All");

const categories= ["All", "Frontend", "Backend", "Cloud", "Tools"];

const filteredSkills = filter === "All"
? skills
: skills.filter(skill => skill.category === filter);

    return(
        // <div>
        //     <h2>Skills</h2>
        //     <div>
        //         {skills.map(skill => (<span key={skill}>{skill}</span>))}
        //     </div>             
        // </div>


        <div>
            <h2>Skills</h2>
            <div>
                {categories.map(category => (
                    <button 
                         key ={category}
                         onClick={() => setFilter(category)}
                         >
                            {category}
                         </button>
                ))}
            </div>


            <div>
                {filteredSkills.map(skill => (
                    <span key={skill.name}>{skill.name}</span>
                ))}
            </div>
        </div>
    );
}


export default Skills;