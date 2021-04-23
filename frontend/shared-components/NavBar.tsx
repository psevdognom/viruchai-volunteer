import Link from "next/link";
import {ReactNode, useState} from "react";
import {useRouter} from "next/router";
import Nav from "./Nav";
import NavBody from "./NavBody";

interface Props {
    sizeProps: "is-small" | "is-large";
}

interface Tab {
    link: string,
    title: string,
}

const tabsList: Tab[] = [
    {
        link: '/',
        title: "Как помочь?",
    },
    {
        link: '/whom',
        title: "Кому?",
    },
    {
        link: '/how',
        title: "Чем?",
    },
    {
        link: '/where',
        title: "Где?",
    },
]

const NavBar = ( {sizeProps="is-small"}:Props ) => {
    const router = useRouter()

    const [size, setSize] = useState(sizeProps)
    const [activeTab, setActiveTab] = useState(router.route)

    const hide = (): string  => (size=="is-small") ? "is-hidden" : "";
    const [isHidden, setIsHidden] = useState(hide())

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
            <NavBody isHidden={isHidden}/>

            <div className="hero-foot">
                <nav className="tabs is-boxed is-fullwidth">
                    <div className="container">
                        <ul>
                            { renderTabs(tabsList) }
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavBar