import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"

function App() {

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"` // 1024px
  }}>

    <GridItem gridArea={"nav"}>
      <Navbar />
    </GridItem>
    <Show above="lg">
      <GridItem gridArea={"aside"} bg={""}>
        <GenreList />
      </GridItem>
    </Show>
    <GridItem gridArea={"main"} bg={""}>
      <GameGrid />
    </GridItem>

  </Grid >
}

export default App
