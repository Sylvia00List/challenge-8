import '../index.css';
import Player from '../components/Player';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddPlayer from '../components/AddPlayer';
import EditPlayer from '../components/EditPlayer';


function Players() {
    const [players, setPlayers] = useState([
        {
            id: 1,
            name: 'Sylvial',
            email: 'sylvia@gmail.com',
            experience: '1',
            level: '1',
        },
        {
            id: 2,
            name: 'Sabrina',
            email: 'sabrina@gmail.com',
            experience: '2',
            level: '2',
        }
    ]);

    function updatePlayer(id, newName, newEmail, newExperience,newLevel) {
        const updatedPlayers = players.map((player) => {
            if (id === player.id) {
                return { ...player, name: newName, email: newEmail, experience:newExperience, level:newLevel };
            }

            return player;
        });
        setPlayers(updatedPlayers);
    }

    function newPlayer(name, email, experience, level) {
        const newPlayer = {
            id: uuidv4(),
            name: name,
            email: email,
            experience: experience,
            level: level,
            
        };
        setPlayers([...players, newPlayer]);
    }

    const showPlayers = true;
    return (
        <div className="">
            {showPlayers ? (
                <>
                <div style={{ textAlign: "left", backgroundColor: "#F0E68C" }} className="flex flex-wrap justify-center" >
                        <h3> Data Player: Update/Edit </h3>
                        {players.map((player) => {
                            const editPlayer = (
                                <EditPlayer
                                    id={player.id}
                                    name={player.name}
                                    email={player.email}
                                    experience={player.experience}
                                    level={player.level}


                                    updatePlayer={updatePlayer}
                                />
                            );
                            return (
                                <Player
                                    key={player.id}
                                    id={player.id}
                                    name={player.name}
                                    email={player.email}
                                    experience={player.experience}
                                    level={player.level}
                                    editPlayer={editPlayer}
                                />
                            );
                        })}
                    </div>
                    <AddPlayer newPlayer={newPlayer} />
                </>
            ) : (
                <p>You cannot see the players</p>
            )}
        </div>
    );
}

export default Players;
