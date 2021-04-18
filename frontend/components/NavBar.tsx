const NavBar = () => (
    <>
    <div className="hero-head">
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <h1>Выручай, волнтер!</h1>
                    </a>
                    <span className="navbar-burger" data-target="navbarMenuHeroB">
          </span>
                </div>
                <div id="navbarMenuHeroB" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item">
                            Мне нужна помощь!
                        </a>
                        <span className="navbar-item">
              <a className="button is-info is-inverted">
                <span className="icon">
                  <i className="fab fa-github"/>
                </span>
                <span>Войти</span>
              </a>
            </span>
                    </div>
                </div>
            </div>
        </nav>
    </div>

    <div className="hero-body is-hidden">
        <div className="container has-text-centered">
            <p className="title">
                Выручай, волонтер!
            </p>
            <p className="subtitle">
                Помощь тем, кто помогает!
            </p>
        </div>
    </div>
    </>)

export default NavBar