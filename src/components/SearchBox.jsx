import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SearchBox = () => {
    return (
        <Autocomplete
            disablePortal
            style={{marginTop: '0.6rem'}}
            size="small"
            id="combo-box-demo"
            options={searchResults}
            sx={{ width: 230 }}
            renderInput={(params) => <TextField {...params} label="Search" />}
        />
    );
}

export default SearchBox;

const searchResults = [
    { label: 'Alpha inc.' },
    { label: 'Alphalinx Inc.' },
    { label: 'Aljerhan ltd' },
    { label: 'AlZamantire Inc. file' },
    { label: 'Alkohiro' },
];