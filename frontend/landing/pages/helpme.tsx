import 'bulma/css/bulma.css'
import Nav from "../components/Nav";

const HelpMe = () => (
    <>
    <Nav color={"is-link"}/>
    <section className="hero is-fullheight">
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="columns is-8 is-variable ">
                    <div className="column is-two-thirds has-text-left">
                        <h1 className="title is-1">Contact Us</h1>
                        <p className="is-size-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi
                            soluta
                            voluptate facere molestiae consequatur.</p>
                    </div>
                    <div className="column is-one-third has-text-left">
                        <div className="field">
                            <label className="label">Имя</label>
                            <div className="control">
                                <input className="input is-medium" type="text"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Способ связи</label>
                            <div className="control">
                                <input className="input is-medium" type="text"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Немного о вас</label>
                            <div className="control">
                                <textarea className="textarea is-medium"/>
                            </div>
                        </div>
                        <div className="control">
                            <button type="submit"
                                    className="button is-link is-fullwidth has-text-weight-medium is-medium">
                                        Отправить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
)

export default HelpMe