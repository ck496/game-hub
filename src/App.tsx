import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //For devices larger than 1020 px show side bar etc
      }}
    >
      <GridItem area="nav" bg="coral">
        <NavBar />
      </GridItem>

      <Show above="lg">
        {/* Only show Component for lg size displays and above */}
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="lightblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
