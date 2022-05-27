import React from 'react';
import Characters from "./components/Characters/Characters";
import NavPanel from "./components/NavPanel";
import {Routes, Route, Navigate} from 'react-router-dom';
import MyWatchList from "./components/MyWatchList/MyWatchList";
import {CHARACTERS, WATCH_LIST} from "./config/pathes";


function App() {

    return <>
        <NavPanel/>
        <Routes>
            <Route path={CHARACTERS} element={<Characters/>}/>
            <Route path={WATCH_LIST} element={<MyWatchList/>}/>
            <Route path="*" element={<Navigate replace to={CHARACTERS}/>}/>
        </Routes>
    </>
}

export default App;
