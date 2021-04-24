import {useRouter} from "next/router";

const NavBody = () => {
    const router = useRouter()

    //@TODO FIX NavBody

    return <div className={"hero-body " + router.route == '/' ? 'is-large' : 'is-hidden'}>
        <div className="container has-text-centered">
            <p className="title">
                Выручай, волонтер!
            </p>
            <p className="subtitle">
                Помощь тем, кто помогает!
            </p>
        </div>
    </div>
}

export default NavBody