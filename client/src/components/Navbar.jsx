import React , {useState} from 'react'
import { LightModeOutlined , DarkModeOutlined , Menu as MenuIcon , Search , SettingsOutlined,ArrowDropDownOutlined } from '@mui/icons-material'
import FlexBetween from './FlexBetween'
import { useDispatch } from 'react-redux'
import { setMode } from 'state'
import profileImage from "assets/image.png"
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from '@mui/material'



const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
    return (
    <AppBar
        sx={{
            position: 'sticky',
            background : "none",
            boxShadow: 'none',
        }}
    >
        <Toolbar sx={{justifyContent : 'space-between'}}>
            {/* The left side */}
            <FlexBetween>
                <IconButton onClick={()=> console.log('open/close sidebar')}>
                    <MenuIcon/>
                </IconButton>
                <FlexBetween
                    backgroundColor={theme.palette.background.alt}
                    borderRadius="9px"
                    gap="3rem"
                    p = "0.1rem 1.5rem"
                >
                    <InputBase placeholder='Search...'/>
                    <IconButton>
                        <Search/>
                    </IconButton>
                </FlexBetween>
            </FlexBetween>

            {/* The right side */}
            <FlexBetween gap="1.5rem">
                <IconButton onClick={()=>dispatch(setMode())}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlined sx={{fontSize: "25px"}}/>
                    ):(
                        <LightModeOutlined sx={{fontSize: "25px"}}/>
                    )}
                </IconButton>
                <IconButton>
                    <SettingsOutlined  sx={{fontSize: "25px"}}/>
                </IconButton>
            </FlexBetween>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar