import NavBar from "../shared-components/NavBar";
import React, {ReactNode} from "react";
import Footer from "../shared-components/Footer";

import { tabsList } from "../cms";

interface Props {
    sizeProps: "is-large" | "is-small",
    children?: ReactNode
}

const Layout = ({ children, sizeProps="is-large" }:Props) => (
    <>
    <section className={"hero is-info " + sizeProps }>
        <NavBar tabList={tabsList} sizeProps={sizeProps}/>
    </section>
        { children }
    <Footer/>
    </>
)

export default Layout