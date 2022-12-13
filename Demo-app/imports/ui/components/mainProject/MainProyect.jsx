import React from 'react'
import Drawer from '@mui/material/Drawer'
import {
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListItem,
    Typography,
    Menu
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AppBar from '@mui/material/AppBar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { CssBaseline } from '@mui/material'
import { Link } from 'react-router-dom';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const MainProyect = ({ children }) => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
        console.log(event.currentTarget)
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <CssBaseline>
                <Box
                    sx={{
                        width: '100vw',
                    }}
                >
                    <AppBar
                        position='static'
                        sx={{
                            backgroundColor: '#1E1E2E',
                        }}
                    >
                        <Toolbar
                            disableGutters
                            sx={{
                                width: '100vw',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                pr: 3
                            }}
                        >
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Toolbar>
                    </AppBar >
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
                                <Link
                                    to='/home/projects'
                                    style={{
                                        color: '#fff',
                                        textDecoration: 'none',
                                        width: '100%',
                                    }}
                                >
                                    <ListItemButton>
                                        <ListItemIcon sx={{ color: '#fff' }}>
                                            <FormatListBulletedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary='Proyectos' />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        </List>
                    </Drawer >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'absolute',
                            right: '0px',
                            width: 'calc(100% - 250px)'
                        }}
                    >
                        {children}
                    </Box>
                </Box>
            </CssBaseline>
        </>
    )
}

export default MainProyect
