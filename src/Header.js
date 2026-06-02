function Header({name, title, location}){
    return (
        <div>
            {/* <h1>Neha Patil</h1>
            <p>Frontend Developer | Bay Area, CA</p> */}

            <h1>{name}</h1>
            <p>{title}</p>
            <p>{location}</p>
        </div>
    );
}


export default Header;