import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LatestNews from './LatestNews';
import Navbar from './Navbar';
import LeftNavber from './LeftNavber';
import RightNavbar from './RightNavbar';
import FindUs from './FindUs';
import { Outlet } from 'react-router-dom';


const Home = () => {
    return (
        <div className='bg-base-100'>
            <header>
                <Header></Header>
                <LatestNews></LatestNews>
                <section className='w-11/12 mx-auto'>
                    <Navbar></Navbar>
                </section>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-8 mt-8'>
            <aside className='left col-span-3'>
                <LeftNavber></LeftNavber>            
            </aside>
            <section className='col-span-6'>
                <Outlet></Outlet>
            </section>
            <aside className='right col-span-3'>
                <RightNavbar></RightNavbar>
                <FindUs></FindUs>
            </aside>


            </main>

            <Footer></Footer>
        </div>
    );
};

export default Home;