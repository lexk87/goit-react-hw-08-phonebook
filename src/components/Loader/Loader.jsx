import { Box } from '@chakra-ui/react';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb="50px"
        >
            <ThreeDots
                height="60"
                width="60"
                radius="9"
                color="#fff"
                ariaLabel="three-dots-loading"
                visible={true}
            />
        </Box>
    );
};
