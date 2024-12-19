import { useState, useEffect } from "react";
import { getAllMonsters, createMonsters, updateMonster, deleteMonster } from "../service/MonsterService";

const useMonster = () => {
  const [monsters, setMonsters] = useState([]);

  const getAllMonstersFromApiService = async () => {
    const data = await getAllMonsters();
    setMonsters(data);
  };

  const createMonster = async (newMonster) => {
    const createdMonster = await createMonsters(newMonster);
    setMonsters((prevMonsters) => [...prevMonsters, createdMonster]);
  };

  const updateMonsterById = async (id, updatedMonster) => {
    const updated = await updateMonster(id, updatedMonster);
    setMonsters((prevMonsters) =>
      prevMonsters.map((monster) => (monster.id === id ? updated : monster))
    );
  };

  const deleteMonsterById = async (id) => {
    await deleteMonster(id);
    setMonsters((prevMonsters) => prevMonsters.filter((monster) => monster.id !== id));
  };

  useEffect(() => {
    getAllMonstersFromApiService();
  }, []);

  return { monsters, createMonster, updateMonsterById, deleteMonsterById };
};

export default useMonster;