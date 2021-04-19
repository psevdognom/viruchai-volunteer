interface Props {
    isHidden: "is-hidden" | "" | string
}

const NavBody = ( { isHidden }:Props ) => (
    <div className={"hero-body " + isHidden}>
        <div className="container has-text-centered">
            <p className="title">
                Выручай, волонтер!
            </p>
            <p className="subtitle">
                Помощь тем, кто помогает!
            </p>
        </div>
    </div>
)

export default NavBody