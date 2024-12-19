import React, { useState, useContext, useEffect } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Image
} from '@chakra-ui/react';
import { MonsterContext } from '../../context/MonsterContext/MonsterContext';
import FeaturedSwitch from '../shared/FeatureSwitch/FeatureSwitch';

function EditFormMonster({ monster, isOpen, onClose }) {
    const { updateMonsterById } = useContext(MonsterContext);
    const [formData, setFormData] = useState({ ...monster });

    useEffect(() => {
        if (monster) {
            setFormData({ ...monster });
        }
    }, [monster]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSwitchChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: checked,
        }));
    };

    const handleSubmit = async () => {
        await updateMonsterById(monster.id, formData);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader color="black">Edit Monster</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel color="black">Name</FormLabel>
                        <Input
                            name="name"
                            value={formData.name || ''}
                            onChange={handleChange}
                            bg="white"
                            color="black"
                        />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel color="black">Price</FormLabel>
                        <Input
                            name="price"
                            value={formData.price || ''}
                            onChange={handleChange}
                            bg="white"
                            color="black"
                        />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel color="black">Image URL</FormLabel>
                        <Input
                            name="imageUrl"
                            value={formData.imageUrl || ''}
                            onChange={handleChange}
                            bg="white"
                            color="black"
                        />
                    </FormControl>
                    {formData.imageUrl && (
                        <Image
                            src={formData.imageUrl}
                            alt="Image Preview"
                            objectFit="cover"
                            borderRadius="lg"
                            maxH="200px"
                            mt={4}
                        />
                    )}
                    <FormLabel mb="0" color="black">Featured</FormLabel>
                    <FeaturedSwitch
                        isChecked={formData.featured || false}
                        onChange={handleSwitchChange}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                        Save
                    </Button>
                    <Button variant="ghost" onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default EditFormMonster;