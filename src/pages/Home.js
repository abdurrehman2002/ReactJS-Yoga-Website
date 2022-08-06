import React from 'react';
import Banner from '../components/Banner';
import ChooseClass from '../components/ChooseClass';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Instractor from '../components/Instractor';
import Pricing from '../components/Pricing';
import States from '../components/States';
import Trainer from '../components/Trainer';
import Updates from '../components/Updates';

function Home() {
    return (
        <div>

            <Header />
            <Banner />
            <ChooseClass />
            <States />
            <Instractor />
            <Experience />
            <Pricing />
            <Trainer />
            <Updates />
            <Footer />

        </div>
    );
}

export default Home;