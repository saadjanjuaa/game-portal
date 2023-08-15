import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"

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
        Aside
      </GridItem>
    </Show>
    <GridItem gridArea={"main"} bg={""}>
      Main
    </GridItem>

  </Grid >
}

export default App
