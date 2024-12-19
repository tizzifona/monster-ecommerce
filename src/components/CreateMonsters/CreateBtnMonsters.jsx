import { Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

function CreateBtnMonsters() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/create-monsters');
  };

  return (
    <Button colorScheme="green" variant="solid" mb={5} onClick={handleClick}>
      <AddIcon mr={2} /> Create Monster
    </Button>
  );
}

export default CreateBtnMonsters;