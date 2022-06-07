import {AppBar, Box, Container, Tab, Tabs, Toolbar, useMediaQuery} from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import {CHARACTERS, WATCH_LIST} from '../config/pathes'
import {useLocation} from 'react-router-dom'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

const portalLogo = 'https://res.cloudinary.com/imagenbcsdr/image/upload/v1653593234/rick-and-morty/portal_kxntxb.png'
const rickAndMortyLogo =
    'https://res.cloudinary.com/imagenbcsdr/image/upload/v1653593234/rick-and-morty/rick-and-morty_h6jcug.png'

export default function NavPanel() {
    const location = useLocation()
    const smScreen = useMediaQuery('(min-width:600px)')

    return (
        <AppBar position="static" color="secondary">
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Link to={CHARACTERS}>
                        {!smScreen && <img src={portalLogo} alt="Rick and Morty" height="100px" />}
                        {smScreen && <img src={rickAndMortyLogo} alt="Rick and Morty" height="100px" />}
                    </Link>
                    <Box>
                        <Tabs value={location.pathname}>
                            <Tab
                                label={smScreen && 'Characters'}
                                icon={<AccountBoxIcon />}
                                iconPosition="start"
                                value={CHARACTERS}
                                component={Link}
                                to={CHARACTERS}
                            />
                            <Tab
                                label={smScreen && 'My watch list'}
                                icon={<CheckBoxIcon />}
                                iconPosition="start"
                                value={WATCH_LIST}
                                component={Link}
                                to={WATCH_LIST}
                            />
                        </Tabs>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
