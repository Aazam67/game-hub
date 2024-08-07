import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
const GameGrid = () => {
  const { games, error } = useGames();

  //i wrote below error message because we want to render this only if we have an error.
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
export default GameGrid;
