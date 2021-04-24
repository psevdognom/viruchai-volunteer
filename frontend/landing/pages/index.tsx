import 'bulma/css/bulma.css'
import Layout from "../components/Layout";
import FAQ from "../components/FAQ";

const HomeLanding = () => (
    <Layout>
        <div className="box cta">
            <p className="has-text-centered">
                <span className="tag is-primary">New</span> Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <section className="container">
            <div className="columns features">
                <div className="column is-4">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                            <i className="fa fa-paw"/>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4>Tristique senectus et netus et. </h4>
                                <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa
                                    enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan
                                    tortor posuere ac ut consequat semper viverra nam.</p>
                                <p><a href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-4">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                            <i className="fa fa-empire"/>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4>Tempor orci dapibus ultrices in.</h4>
                                <p>Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit
                                    pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis
                                    in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem
                                    sed risus.</p>
                                <p><a href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-4">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                            <i className="fa fa-apple"/>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4> Leo integer malesuada nunc vel risus. </h4>
                                <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci
                                    nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget
                                    nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <p><a href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="intro column is-8 is-offset-2 mb-4">
                <h2 className="title">Perfect for developers or designers!</h2><br/>
                <p className="subtitle">Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam
                    vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus.</p>

            </div>
            <div className="columns">
                <div className="column is-offset-4 is-8"><FAQ/></div>
            </div>
        </section>
    </Layout>
);

export default HomeLanding