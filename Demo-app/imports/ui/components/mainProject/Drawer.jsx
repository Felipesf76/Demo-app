import React from 'react'
import Drawer from '@mui/material/Drawer'
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import {
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListItem,
    Typography
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const DrawerComponent = ({ children }) => {

    return (
        <>
            <Box
                sx={{
                    backgroundColor: '#1E1E2E',
                    width: '100vw',
                    height: 'auto'
                }}
            >
                <Drawer
                    variant="permanent"
                    anchor="left"
                    open
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            backgroundColor: '#1E8AF8',
                            boxSizing: 'border-box',
                            width: 230,
                            height: 'calc(100vh - 90px)',
                            ml: '20px',
                            mt: '80px',
                            borderRadius: '5px',
                            boxShadow: '0 0 45px 0 rgb(0 0 0 / 60 %)',
                            padding: 1,
                            color: '#fff'
                        },
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '50px',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <PersonIcon />
                        <Typography variant="body1" color="#fff">
                            {Meteor.user().emails[0].address}
                        </Typography>
                    </Box>
                    <Divider />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <FormatListBulletedIcon />
                                </ListItemIcon>
                                <ListItemText primary='Proyectos' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer >
                <Box
                    sx={{
                        display: 'flex',
                        position: 'absolute',
                        right: '-250px',
                    }}
                >
                    {children}
                </Box>
            </Box>
        </>
    )
}

export default DrawerComponent
