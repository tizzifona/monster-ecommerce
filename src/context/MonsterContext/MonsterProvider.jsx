import { MonsterContext } from './MonsterContext';
import useMonster from '../../hooks/useMonsters';

const MonsterProvider = ({ children }) => {
  const { monsters, createMonster, updateMonsterById, deleteMonsterById } = useMonster();

  return (
    <MonsterContext.Provider value={{ monsters, createMonster, updateMonsterById, deleteMonsterById }}>
      {children}
    </MonsterContext.Provider>
  );
};

export default MonsterProvider;