import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';

function MyApp({ Component, pageProps }) {
    const userData = useUserData();

    return (
    <UserContext.Provider value={userData}>
        <section className={"hero is-info " + "is-large"}>
            <Nav/>
        </section>
        <Component {...pageProps} />
        <Footer/>
    </UserContext.Provider>
    )
}

export default MyApp
