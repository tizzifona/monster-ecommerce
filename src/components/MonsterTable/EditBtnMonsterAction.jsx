import React, { useState } from 'react';
import { IconButton } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import EditFormMonster from '../EditFormMonster/EditFormMonster';

function EditBtnMonsterAction({ monster }) {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <>
            <IconButton
                icon={<EditIcon />}
                colorScheme="blue"
                onClick={handleOpen}
            />
            <EditFormMonster monster={monster} isOpen={isOpen} onClose={handleClose} />
        </>
    );
}

export default EditBtnMonsterAction;