import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Counter from '../views/cunter';
import UserList from '../views/user s';


const AppRoutes = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                 <Route path='/users' element={<UserList/>} />
                <Route path='/' element={<Counter/>} />
            </Routes>
        </BrowserRouter>
     );
}
 
export default AppRoutes;