import React, {ReactNode} from "react";
import NavTabs from "./NavTabs";
import { defaultTabsList, accountTabsList } from '../cms'
import NavBody from "./NavBody";
import {useRouter} from "next/router";


interface Props {
    children: ReactNode
}

const Layout = ({children}:Props) => {
    const router = useRouter()
    const accountTabsListURLs = accountTabsList.map(account => account.link)
    const ifAccountTabs = accountTabsListURLs.includes(router.route)

    return (
        <>
            <NavBody/>
            <NavTabs tabList={ ifAccountTabs ? accountTabsList : defaultTabsList}/>
            <div className="container py-5">
                {children}
            </div>
        </>
    )
}

export default Layout
