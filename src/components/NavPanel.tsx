import {AppBar, Box, Container, Tab, Tabs, Toolbar} from "@mui/material";
import React, {useState} from "react";
import {Link} from "react-router-dom";


export default function NavPanel() {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters
                     sx={{
                         display: 'flex',
                         justifyContent: 'space-between'
                     }}>
                <img src={'https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png'}
                     alt={'Rick and Morty'}
                     height={'100px'}/>
                <Box>
                    <Tabs value={value}
                          onChange={handleChange}
                          textColor={'secondary'}
                          indicatorColor={'secondary'}>
                        <Tab label="Characters" component={Link} to={'/characters'}/>
                        <Tab label="My watch list" component={Link} to={'/my-watch-list'}/>
                    </Tabs>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
}