import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {Box} from "@mui/material";

const Loading = ({size}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '40vh',
            }}
        >
            <CircularProgress size={size} thickness={5} color="primary"/>
        </Box>
    );
};

export default Loading;
