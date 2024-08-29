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
            <Flex
                pl={"2rem"}
                pt={"0.5rem"}
                pb={"0.5rem"}
                minWidth={"15rem"}
                gap={"1rem"}
                borderRadius={"5px"}
                boxShadow="4px 4px 10px rgba(0, 0, 0, 0.25)"
                backgroundColor={"#242424"}
                color={"#ffffff"}
            >
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
