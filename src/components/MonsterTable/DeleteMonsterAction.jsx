import React from 'react';
import { IconButton, useDisclosure } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import { MonsterContext } from '../../context/MonsterContext/MonsterContext';
import DeleteMonsterModal from './DeleteMonsterModal';

function DeleteMonsterAction({ monster }) {
    const { deleteMonsterById } = useContext(MonsterContext);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <IconButton
                icon={<DeleteIcon />}
                colorScheme="red"
                onClick={onOpen}
            />
            <DeleteMonsterModal
                isOpen={isOpen}
                onClose={onClose}
                monsterId={monster?.id}
                deleteMonsterById={deleteMonsterById}
            />
        </>
    );
}

export default DeleteMonsterAction;