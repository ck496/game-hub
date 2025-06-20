import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  let headingText = `
  ${gameQuery.platform?.name || ""}  ${gameQuery.genre?.name || ""} Games`;

  return <Heading as="h1" marginY={5} >{headingText}</Heading>;
};

export default GameHeading;
