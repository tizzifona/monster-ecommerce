import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import { useContext } from "react";
import { MonsterContext } from "../../context/MonsterContext/MonsterContext";
import MonsterCard from "../../components/MonsterCard/MonsterCard";


function Home() {
  const {monsters} = useContext(MonsterContext);
  return (
    <Box mt="90px">
      <Box p={5} maxW="1200px" mx="auto">
      <Heading as="h3" size="lg" mb={4}>
          Featured Products
        </Heading>
      <Grid templateColumns="repeat(auto-fit, minmax(200px, 4fr))" gap={6}>
      {monsters
            .filter(monster => monster.featured) // Filtra solo los productos destacados
            .map(monster => (
              <GridItem key={monster.id}>
                <MonsterCard monster={monster} />
              </GridItem>
            ))}
      </Grid>
      </Box>
    </Box>
  )
}

export default Home