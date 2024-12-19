import {
  Box,
  Heading,
  FormControl,
  FormLabel, 
  Switch,
  Button
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { MonsterContext } from "../../context/MonsterContext/MonsterContext";
import MonsterTable from "../../components/MonsterTable/MonsterTable";
import SearchBar from "../../components/SearchMonster/SearchMonster";
import CreateBtnMonsters from "../../components/CreateMonsters/CreateBtnMonsters";

function ProductManager() {
  const { monsters, updateMonsterById } = useContext(MonsterContext);
  const [showFeatured, setShowFeatured] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMonsters = monsters.filter(monster => {
    const matchesSearchTerm = monster.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFeatured = showFeatured ? monster.featured : true;
    return matchesSearchTerm && matchesFeatured;
  });

  const handleFeaturedChange = async (id, isFeatured) => {
    const updatedMonster = monsters.find(monster => monster.id === id);
    if (updatedMonster) {
      updatedMonster.featured = isFeatured;
      await updateMonsterById(id, updatedMonster);
    }
  };

  return (
    <Box
      maxW="1200px"
      mx="auto"
      p={5}
      mt="110px"
      bg="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(10px)"
      borderRadius="lg"
      boxShadow="lg"
      minHeight="100vh"
    >
      <Heading as="h2" size="xl" color="white" mb={5} textAlign="center">
        Manage Products
      </Heading>
      <CreateBtnMonsters />
      <FormControl display="flex" alignItems="center" mb={5}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FormLabel htmlFor="show-featured" color="white" ml={2} mb={4}>
          Show Featured Only
        </FormLabel>
        <Switch
          id="show-featured"
          isChecked={showFeatured}
          onChange={() => setShowFeatured(!showFeatured)}
        />
      </FormControl>
      <MonsterTable monsters={filteredMonsters} onFeaturedChange={handleFeaturedChange} />
    </Box>
  );
}

export default ProductManager;