import React, { useState } from 'react'
import { Checkbox } from '@chakra-ui/checkbox';
import { Flex, Text } from '@chakra-ui/layout';

export interface IListItem {
    label: string
}

export const ListItem: React.FC<IListItem> = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event: any) => {
        setIsChecked(event?.target?.checked);
    };

    return (
        <>
            <Flex>
                <Checkbox
                    isChecked={isChecked}
                    onChange={() => handleCheckboxChange(event)}
                />
                {isChecked ?
                    (<Text as="s">{label}</Text>) :
                    (<Text>{label}</Text>)
                }
            </Flex>
        </>
    );
}
