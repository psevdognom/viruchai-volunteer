import React from "react";
import 'bulma/css/bulma.css'
import NavBar from "../components/NavBar";
import MainTabs from "../components/MainTabs";

const HomeLanding = () => (
    <section className="hero is-info is-small">
        <NavBar/>
        <MainTabs/>
    </section>
);

export default HomeLanding