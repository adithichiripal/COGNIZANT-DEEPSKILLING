function ListofPlayers() {

    const players = [

        { name: "Virat", score: 95 },
        { name: "Rohit", score: 84 },
        { name: "Gill", score: 67 },
        { name: "Rahul", score: 78 },
        { name: "Pant", score: 58 },
        { name: "Hardik", score: 73 },
        { name: "Jadeja", score: 62 },
        { name: "Ashwin", score: 80 },
        { name: "Shami", score: 45 },
        { name: "Bumrah", score: 90 },
        { name: "Siraj", score: 50 }

    ];

    const lowScorePlayers = players.filter(player => player.score < 70);

    return (

        <div>

            <h2>List of Players</h2>

            {
                players.map((player, index) => (

                    <p key={index}>
                        {player.name} - {player.score}
                    </p>

                ))
            }

            <h2>Players with Score below 70</h2>

            {
                lowScorePlayers.map((player, index) => (

                    <p key={index}>
                        {player.name} - {player.score}
                    </p>

                ))
            }

        </div>

    );

}

export default ListofPlayers;
