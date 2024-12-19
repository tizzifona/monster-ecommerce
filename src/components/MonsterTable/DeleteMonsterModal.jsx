import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Text, useToast } from '@chakra-ui/react';

function DeleteMonsterModal({ isOpen, onClose, monsterId, deleteMonsterById }) {
    const toast = useToast();

    const handleDelete = async (id) => {
        if (id) {
            try {
                await deleteMonsterById(id);
                toast({
                    title: "Monster deleted.",
                    description: "The monster has been deleted successfully.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
                onClose();
            } catch (error) {
                toast({
                    title: "Error deleting monster.",
                    description: "There was an error deleting the monster.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
        } else {
            console.error('Monster ID is undefined');
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader color="black">Delete Monster</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text color="black">Are you sure you want to delete this monster?</Text>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="red" mr={3} onClick={() => handleDelete(monsterId)}>
                        Delete
                    </Button>
                    <Button variant="ghost" onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default DeleteMonsterModal;