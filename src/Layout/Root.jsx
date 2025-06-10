import React from 'react';
import Nave from '../Component/Nave/Nave';
import Footer from '../Component/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
           <Nave></Nave> 
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;