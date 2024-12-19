import axios from "axios";

const apiMonstersUrl = "http://localhost:8080/api/products";

const getAllMonsters = async () => {
    const response = await axios.get(apiMonstersUrl);
    return response.data;
};

const getMonsterById = async (id) => {
    const response = await axios.get(`${apiMonstersUrl}/${id}`);
    return response.data;
};

const createMonsters = async (newProduct) => {
    const response = await axios.post(apiMonstersUrl, newProduct);
    return response.data;
};

const deleteMonster = async (id) => {
    const response = await axios.delete(`${apiMonstersUrl}/${id}`);
    return response.data;
};

const updateMonster = async (id, updatedProduct) => {
    const response = await axios.put(`${apiMonstersUrl}/${id}`, updatedProduct);
    return response.data;
};

export {
    getAllMonsters,
    createMonsters,
    getMonsterById,
    deleteMonster,
    updateMonster
};