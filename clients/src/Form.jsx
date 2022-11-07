//import "./App.css";
import { useState } from "react";


function Form() {
    const [list, setList] = useState([]);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [lvl, setLvl] = useState(0);
    const [experience, setExperience] = useState(0);

    const [showData, setShowData] = useState(false);
    const [criteria, setCriteria] = useState("username");
    

    const onSubmit = (e) => {
        e.preventDefault();
        setList((prev) => [
            ...prev,
            {
                username,
                email,
                experience,
                lvl,
            },

        ]);
        setShowData(true);
    };
    const UserData = () => {
        if (showData) {
            return(
                <>
                {list.length > 0
                ? list.map((data, index) => {
                    return (
                        <ul key={index}>
                            <li> username: {data.username} </li>
                            <li> email: {data.email} </li>
                            <li> experience: {data.experience} </li>
                            <li> level: {data.lvl} </li>
                        </ul>
                    );
                })
                :null}
                </>
        );
    }
        return <></>;
    };
    return (
        
        <div className="Form">
            <div style={{ textAlign: "left", backgroundColor: "#F0E68C" }}>
            <h1> Welcome to Data Players </h1>
            <h3>  Data Player:Create & Search  </h3>
            <br />
            <div style={{ textAlign: "center", backgroundColor: "#F0E68C" }}></div>
            
                <select onsearch={(e) => setCriteria(e.target.value)}>
                    <option value="username"> username </option>
                    <option value="email"> email </option>
                    <option value="experience"> experience </option>
                    <option value="lvl"> level</option>
                </select>
            <input
                type="text"
                name="search"
                placeholder="search player"
                onChange= {(e) => {
                    setList((prev) => {
                        const data = prev.filter(
                            (player) => player[criteria] === e.target.value
                            );
                        if (data.length > 0) {
                            return data;
                        }    
                        return [...prev];
                         });
                }}
                />    
                <button type="submit" onClick={onsearch}>Search</button>
            </div>
            <pre>
            <div style={{ textAlign: "center", backgroundColor: "#FFE4B5" }}>
                <label>  Username : </label>
                <input
                   type="text"
                   name="username"
                   placeholder="username"
                   onChange={(e)  => setUsername(e.target.value)}
                />
                <br />
                <br />
                <label>  Email : </label>
                <input
                   type="email"
                   name="email"
                   placeholder="email"
                   onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <label>  Experience : </label>
                <input
                   type="text"
                   name="experience"
                   placeholder="experience"
                   onChange={(e)=> setExperience(e.target.value)}
                />
                <br />
                <br />
                <label>  Level : </label>
                <input
                   type="text"
                   name="level"
                   placeholder="level"
                   onChange={(e) => setLvl(e.target.value)}
                />
                <br />
                <br />
                <button type="submit" onClick={onSubmit}>Submit</button>
                
               
            </div>    
            </pre>
            {<UserData />}
        </div>
    );
}  
export default Form;    