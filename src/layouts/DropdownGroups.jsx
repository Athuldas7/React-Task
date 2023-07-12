import React, { useState } from 'react';
import { ChipComponent, Dropdown } from '../components';
import { Button, Link, Menu, MenuItem } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const DropdownGroups = () => {
    const [selectedValues, setSelectedValues] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleValueChange = (newValue) => {
        setSelectedValues((prevValues) => [...prevValues, ...newValue]);
    };


    const handleChipDelete = (deletedValue) => {
        setSelectedValues((prevValues) => prevValues.filter(value => value !== deletedValue));
    };

    const handleAddMoreClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleAddMoreOptionClick = (option) => {
        setSelectedValues((prevValues) => [...prevValues, option]);
        setAnchorEl(null);
      };
      
      

    const jurisdictionOptions = [
        { value: 'B2B', label: 'B2B' },
        { value: 'B2C', label: 'B2C' },
    ];

    const legalFormOptions = [
        { value: 'Sole establishment', label: 'Sole establishment' },
        { value: 'Civil company', label: 'Civil company' },
    ];

    const plansOptions = [
        { value: 'Free', label: 'Free' },
        { value: 'Service plan ($99)', label: 'Service plan ($99)' },
    ];

    return (
        <div>
            <div className='drpdwn-grp'>
                <Dropdown label="Jurisdiction" options={jurisdictionOptions} onChange={handleValueChange} />
                <Dropdown label="Legal Form" options={legalFormOptions} onChange={handleValueChange} />
                <Dropdown label="Plans" options={plansOptions} onChange={handleValueChange} />
                <Button
                    style={{ color: '#D36A80' }}
                    variant="text"
                    className='addmore-btn'
                    onClick={handleAddMoreClick}
                >
                    <AddCircleIcon /><span>Add more</span>
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                >
                    <MenuItem onClick={() => handleAddMoreOptionClick('Status')}>
                        Status
                    </MenuItem>
                    <MenuItem onClick={() => handleAddMoreOptionClick('Date of incorporation')}>
                        Date of incorporation
                    </MenuItem>
                    <MenuItem onClick={() => handleAddMoreOptionClick('Legal Form')}>
                        Legal Form
                    </MenuItem>
                </Menu>
                {/* <Menu anchorEl={null} open={false} onClose={() => { }}>
                    <MenuItem onClick={() => handleAddMoreOptionClick('option1')}>Status</MenuItem>
                    <MenuItem onClick={() => handleAddMoreOptionClick('option2')}>Date of incorporation</MenuItem>
                    <MenuItem onClick={() => handleAddMoreOptionClick('option3')}>Legal Form</MenuItem>
                </Menu> */}
            </div>
            <ChipsGroup selectedValues={selectedValues} setSelectedValues={setSelectedValues} onDelete={handleChipDelete} />
        </div>
    );
};

export default DropdownGroups;

const ChipsGroup = ({ selectedValues, setSelectedValues, onDelete }) => {
    const handleClearAllClick = () => {
        setSelectedValues([]);
    };

    return (
        <div className='chip-grp'>
            <ChipComponent chipsData={selectedValues} onDelete={onDelete} />
            {selectedValues.length > 0 && (
                <Link href="#" underline="always" onClick={handleClearAllClick}>
                    {'Clear all'}
                </Link>
            )}
        </div>
    );
};

