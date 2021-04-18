import Layout from "../../components/Layout";
import 'bulma/css/bulma.css'

const WhereIndex = () => (
    <Layout sizeProps={"is-small"}>
        <iframe
            width="600"
            height="450"
            style={{border:0}}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?key=
        &q=Space+Needle,Seattle+WA">
        </iframe>
    </Layout>
)

export default WhereIndex