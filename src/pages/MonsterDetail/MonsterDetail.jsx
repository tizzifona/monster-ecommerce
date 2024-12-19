import { useParams } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import CardMonsterDetail from '../../components/MonsterDetail/CardMonsterDetail';
import ReviewMonsterDetail from '../../components/Reviews/ReviewMonsterDetail';
import ReviewForm from '../../components/Reviews/ReviewForm';
import { getMonsterById } from '../../service/MonsterService';
import useReviews from '../../hooks/useReviews';
import { useEffect, useState } from 'react';

const MonsterDetail = () => {
  const { monsterId } = useParams();
  const [monster, setMonster] = useState(null);
  const [loading, setLoading] = useState(true);
  const { reviews, createReview, loading: reviewsLoading } = useReviews(monsterId);

  useEffect(() => {
    const fetchMonster = async () => {
      try {
        const data = await getMonsterById(monsterId);
        setMonster(data);
      } catch (error) {
        console.error('Error fetching monster:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMonster();
  }, [monsterId]);

  if (loading || reviewsLoading) {
    return <div>Loading...</div>;
  }

  if (!monster) {
    return <div>Monster not found</div>;
  }

  return (
    <Flex direction="column" minHeight="100vh">
      <Box
        as="main"
        flex="1"
        width="100%"
        maxW="100%"
        mx="auto"
        px={{ base: 4, md: 10 }}
        py={10}
      >
        <Box
          width="100%"
          maxW="1400px"
          mx="auto"
          boxShadow="xl"
          rounded="lg"
          p={{ base: 6, md: 8 }}
        >
          <CardMonsterDetail monster={monster} />
        </Box>
        <Box mt={10}>
          <ReviewMonsterDetail reviews={reviews} />
        </Box>
        <Box mt={10}>
          <ReviewForm monsterId={monsterId} createReview={createReview} />
        </Box>
      </Box>
    </Flex>
  );
};

export default MonsterDetail;
