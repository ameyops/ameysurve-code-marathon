import React from "react";
import './mform.css'
export default function MatchForm() {
   
    const [player1Id, setPlayer1Id] = React.useState('');
    const [player2Id, setPlayer2Id] = React.useState('');
    const [matchDate, setMatchDate] = React.useState('');
    const [matchLevel, setMatchLevel] = React.useState('');
    const [winnerId, setWinnerId] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setPlayer1Id('');
        setPlayer2Id('');
        setMatchDate('');
        setMatchLevel('');
        setWinnerId('');
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Player 1 ID:
                    <input
                        type="text"
                        value={player1Id}
                        onChange={(e) => setPlayer1Id(e.target.value)}
                    />
                </label>
                <label>
                    Player 2 ID:
                    <input
                        type="text"
                        value={player2Id}
                        onChange={(e) => setPlayer2Id(e.target.value)}
                    />
                </label>
                <label>
                    Match Date:
                    <input
                        type="date"
                        value={matchDate}
                        onChange={(e) => setMatchDate(e.target.value)}
                    />
                </label>
                <label>
                    Match Level:
                    <input
                        type="text"
                        value={matchLevel}
                        onChange={(e) => setMatchLevel(e.target.value)}
                    />
                </label>
                <label>
                    Winner ID:
                    <input
                        type="text"
                        value={winnerId}
                        onChange={(e) => setWinnerId(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
