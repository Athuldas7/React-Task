import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Tabs, Tab, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


import ApiIcon from '@mui/icons-material/Api';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { grain } from '../assets/images';


const SideBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleProfileClick = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
  };


    return (
        <div className="container">
            <div className="sidebar" style={{ width: '300px', height: '95vh', background: '#0F1738' }}>
                <div className="button-group">
                    <div className="logo-container">
                        <img src={grain} alt='logo' className='c-logo' />
                        <h2 className='company_name'>Ynex</h2>
                    </div>
                    <button className="sidebar-button">
                        <WidgetsOutlinedIcon style={{ fontSize: '30px' }} />
                        <span className="button-text">Dashboard</span>
                    </button>
                    <button className="sidebar-button">
                        <ApiIcon style={{ fontSize: '30px' }} />
                        <span className="button-text">New Registration</span>
                    </button>
                    <button className="sidebar-button active">
                        <ApartmentOutlinedIcon style={{ fontSize: '30px' }} />
                        <span className="button-text">Companies</span>
                    </button>
                    <button className="sidebar-button">
                        <AssignmentOutlinedIcon style={{ fontSize: '30px' }} />
                        <span className="button-text">Tasks and Requests</span>
                    </button>
                    <button className="sidebar-button">
                        <ReceiptOutlinedIcon style={{ fontSize: '30px' }} />
                        <span className="button-text">Billing</span>
                    </button>
                    <button className="sidebar-button">
                        <AssessmentOutlinedIcon style={{ fontSize: '30px' }} />
                        <span className="button-text">Reporting and Analytics</span>
                    </button>
                </div>
                <div className="bottom-button-group">
                    <button className="sidebar-button">
                        <NotificationsNoneOutlinedIcon style={{ fontSize: '30px' }} />
                        <span className="button-text">Notification</span>
                    </button>
                    <button className="sidebar-button">
                        <HelpOutlineOutlinedIcon style={{ fontSize: '30px' }} />
                        <span className="button-text">Help Center</span>
                    </button>
                    <div className="profile-section" >
                        <img className="profile-photo" onClick={handleProfileClick} style={{ paddingRight: '8px' }} src="https://media.licdn.com/dms/image/D5603AQExJrh3EjKDQQ/profile-displayphoto-shrink_800_800/0/1675522871812?e=2147483647&v=beta&t=3CiW0dZEBshaDPXwmxveH-7OCr2Aoxt-6YA6GrwiOyw" alt="Profile" />

                        <div className="profile-details">
                            <p className="profile-name" style={{ fontSize: '13px' }}>Jacob James</p>
                            <p className="profile-email" style={{ color: '#7C89BF', fontSize: '12px' }}>jacobjames@gmail.com</p>


                            <Dialog
        open={isDrawerOpen}
        onClose={handleCloseDrawer}
        maxWidth="md"
        fullWidth
        PaperProps={{
          style: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            position: 'absolute',
            right: 0,
          },
        }}
      >
        <DialogTitle>
          Jacob Jones
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseDrawer}
            aria-label="close"
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
            
          </IconButton>
        </DialogTitle>
        <DialogContent style={{ flexGrow: 1 }}>
          <Tabs value={activeTab} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
            <Tab label="General Settings" />
            <Tab label="Roles and Permissions" />
            <Tab label="Assigned companies" />
          </Tabs>
          {activeTab === 0 && (
            <div>
              {/* General settings content */}
            </div>
          )}
          {activeTab === 1 && (
            <div>
              {/* Preferences settings content */}
            </div>
          )}
          {activeTab === 2 && (
            <div>
              {/* Security settings content */}
            </div>
          )}
        </DialogContent>
      </Dialog>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar