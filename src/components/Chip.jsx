import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const ChipComponent = ({ chipsData, onDelete }) => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = (value) => {
    console.info('You clicked the delete icon.');
    onDelete(value);
  };

  return (
    <Stack direction="row" spacing={1}>
      {chipsData.map((chip, index) => (
        <Chip
          style={{ background: '#E5E9FF' }}
          key={index}
          label={chip}
          onClick={handleClick}
          onDelete={() => handleDelete(chip)}
        />
      ))}
    </Stack>
  );
};

export default ChipComponent;
