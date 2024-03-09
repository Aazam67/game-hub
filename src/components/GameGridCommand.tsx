import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  //we need a state variable for storing our game objects.
  //we have to tell the TypeScript compiler that this is a game array, so we use "<game[]>" also here

  const [games, setGames] = useState<Game[]>([]);
  //We also need a state variable for our error messages.
  const [error, setError] = useState("");
  //we should use the effect hook to send the fetch request to the backend and Here we pass a callback.
  //we call apiClient.get. and We send the request to the games endpoint. with "get" method
  //with ".then" we grab results => Now this is where we need to use TypeScript to define an interface that represents the shape of the response object.
  //when sending a get request to the server, we use angle brackets to provide a generic type argument.
  //With that"<fetchgamesresponse>", we know the shape of the response object that is access response of type fetch games response.
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.messages));
  });

  //in useEffect In this function, we need to use our API client.
  return (
    <ul>
      {error && <text>{error}</text>}
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;
