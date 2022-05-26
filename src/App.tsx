import React from 'react';
import Characters from "./components/pages/Characters/Characters";
import NavPanel from "./components/NavPanel";
import {Routes, Route} from 'react-router-dom';
import MyWatchList from "./components/pages/MyWatchList/MyWatchList";
import {Box} from "@mui/material";


function App() {


    return (
        <>
            <NavPanel/>
            <Routes>
                <Route path='/' element={<Characters/>}/>
                <Route path='/characters' element={<Characters/>}/>
                <Route path='/my-watch-list' element={<MyWatchList/>}/>
                <Route path="*" element={<Box>Page not found</Box>}/>
            </Routes>
        </>

    );
}

export default App;
