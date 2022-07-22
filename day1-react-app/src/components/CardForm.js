import {useState} from 'react';
export default function CardForm(){
    const [personName, setPersonName] = useState("")
    const [personEmail, setPersonEmail] = useState("")
    const [selectedMovie, setSelectedMovie] = useState("")
    const [senderName, setSenderName] = useState("")
    const [senderEmail, setSenderEmail] = useState("")
    
    function handleSubmit(){
        console.log("Submitted")
    }
    function makeUpper(value){
        return value.toUpperCase(); 
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="theirName">Their Name</label>
        <input 
            name="theirName"
            type="text"
            value={makeUpper(personName)}
            onChange={(event) => setPersonName(event.target.value)}
        />
        </form>
    </div>
)

}