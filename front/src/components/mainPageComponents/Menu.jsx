import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
// import sun and moon icons
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const isDarkMode = true;

const actions = [
    {icon: <GitHubIcon/>, name: 'Github', link: 'https://github.com/Arash1381-y/fun-with-compiler'},
    {icon: <SchoolIcon/>, name: 'Course Page', link: 'http://sharif.edu/~sani/courses/compiler/'},
];


export default function Menu() {

    return (
        <Box sx={{transform: 'translateZ(0px)', flexGrow: 1}}>
            <SpeedDial
                ariaLabel='Menu'
                direction='left'
                sx={{position: 'absolute', top: 16, right: 16}}
                icon={<SpeedDialIcon openIcon={<MoreVertIcon/>} icon={<MenuIcon/>}/>}
                FabProps={{
                    color: 'secondary',
                }}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        tooltipTitle={action.name}
                        icon={action.icon}
                        onClick={() => {
                            if (action.name === 'Github' || action.name === 'Course Page') {
                                window.open(action.link, '_blank', 'noopener,noreferrer');
                            }
                        }}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}