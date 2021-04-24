import Link from "next/link";
import {ReactNode, useState} from "react";
import {useRouter} from "next/router";
import Nav from "./Nav";
import NavBody from "./NavBody";
import AnimateHeight from 'react-animate-height';

import { Tab } from '../interfaces/interfaces'

interface Props {
    tabList: Tab[]
}

const NavBar = ( {tabList}:Props ) => {
    const router = useRouter()
    const [size] = useState(router.pathname == '/' ? "is-large" : "is-small")
    const [activeTab, setActiveTab] = useState(router.route)

    // @TODO learn react context and fix animation on NavBody resize
    const hideNavBody = (): string  => (size=="is-small") ? "0" : "auto";
    const [height] = useState(hideNavBody())

    const renderTabs = (tabs: Tab[]): ReactNode => {
        return tabs.map(tab => {
            const isActive = (activeTab == tab.link)
            return (
                <li className={isActive ? "is-active" : ""}>
                    <Link href={tab.link}>
                        <a
                            onClick={() => setActiveTab(tab.link)}
                            className={isActive ? "has-text-link" : ""}
                        >
                            {tab.title}
                        </a>
                    </Link>
                </li>
            )
        })
    }

    return (
        <>
            <Nav/>
            <AnimateHeight
                duration={ 500 }
                height={ height }
            >
                <NavBody/>
            </AnimateHeight>

            <div className="hero-foot">
                <nav className="tabs is-boxed is-fullwidth">
                    <div className="container">
                        <ul>
                            { renderTabs(tabList) }
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavBar