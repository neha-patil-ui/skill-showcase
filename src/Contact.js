function Contact({contactInfo}){

    return (
        <div className="section">
            <h2>Contact</h2>
           
                <div className="project-card">

                <p>📧{contactInfo.email}</p>
                <p><a href={contactInfo.linkedIn} target="_blank" rel="noopener noreferrer">
                  💼 LinkedIn
                  </a>
                </p> 
                <p><a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
                  🐙Github
                  </a>
                </p>
            </div>
        </div>
    );
}

export default Contact; 