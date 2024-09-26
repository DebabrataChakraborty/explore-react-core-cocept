import { useState } from "react"

export default function Team (){

const [teamCount,setTeamCount] = useState(11);
const handleAdd = () =>{
    const newTeam = teamCount + 1;
    setTeamCount(newTeam);
}

const teamStyle = {
        border:'2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
    return(
        <div style={teamStyle}>
            <h3>Players:{teamCount}</h3>
            <button onClick={handleAdd}>Add Team</button>
        </div>
    )
}