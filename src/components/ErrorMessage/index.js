import React from 'react';
import {Box, Typography} from "@mui/material";

const ErrorMessage = ({message}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '40vh',
            }}
        >
            <Typography variant="p" color="error">{message}</Typography>
        </Box>
    );
};

export default ErrorMessage;
