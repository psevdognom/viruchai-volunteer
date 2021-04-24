import RandomEmodji from "./RandomEmodji";
import Link from "next/link"
import { useContext } from 'react';
import {UserContext} from "../lib/context";
import {auth} from "../lib/firebase";

interface Props {
    color?: "" | "is-link"
}

const Nav = ({ color="" }:Props) => {
    const { username } = useContext(UserContext);


    return (
    <div className={"hero-head " + color}>
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <Link href={'/'}><h1 className={"is-size-4"}>Выручай, волнтер! <RandomEmodji/></h1></Link>
                    </a>
                    <span className="navbar-burger" data-target="navbarMenuHeroB">

                    </span>
                </div>
                <div id="navbarMenuHeroB" className="navbar-menu">
                    <div className="navbar-end">
                        <Link href={'helpme'}>
                            <a className="navbar-item">
                                Мне нужна помощь!
                            </a>
                        </Link>
                        <span className="navbar-item">
                              <a className="button is-info is-inverted mx-2">
                                  {username ?
                                      <Link href={'/account'}>Личный кабинет</Link> :
                                      <Link href={'/enter'}>Войти</Link>
                                  }
                              </a>
                            {username ? <a onClick={() => auth.signOut()} className="button is-info is-inverted">Выйти</a> : '' }
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Nav