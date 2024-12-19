import React from 'react';
import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

const FeaturedSwitch = ({ isChecked, onChange, labelColor = "black" }) => {
    return (
        <FormControl display="flex" alignItems="center">
            <Switch
                name="featured"
                isChecked={isChecked}
                onChange={onChange}
            />
        </FormControl>
    );
};

export default FeaturedSwitch;