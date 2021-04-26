import Link from 'next/link';
import 'bulma/css/bulma.css'

// Component's children only shown to logged-in users
// @ts-ignore
export default function AuthCheck(props) {
    const username = false

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