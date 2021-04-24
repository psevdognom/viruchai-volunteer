import React, {ReactNode} from "react";
import { tabsList } from "../cms";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = ({ children, sizeProps="is-large" }) => (
    <>
        <section className={"hero is-info " + "is-large"}>
            <NavBar tabList={tabsList}/>
        </section>
            <Component {...pageProps} />
        <Footer/>
    </>
)

export default Layout

export default function MyApp({ Component, pageProps }) {

    return

    <Component {...pageProps} />
}