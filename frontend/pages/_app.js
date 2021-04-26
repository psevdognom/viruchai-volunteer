import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {

    return (
        <>
            <section className={"hero is-info " + "is-large"}>
                <Nav/>
            </section>
                <Component {...pageProps} />
                <Footer/>
        </>

    )
}

export default MyApp
