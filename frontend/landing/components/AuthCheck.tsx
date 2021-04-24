import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import 'bulma/css/bulma.css'

// Component's children only shown to logged-in users
// @ts-ignore
export default function AuthCheck(props) {
    const { username } = useContext(UserContext);

    return username ? props.children : props.fallback || (
        <article className="message is-danger">
            <div className="message-header">
                <p>Ошибка</p>
            </div>
            <div className="message-body">
                Необходимо <Link href={"/enter"}>авторизоваться</Link>
            </div>
        </article>
    );
}