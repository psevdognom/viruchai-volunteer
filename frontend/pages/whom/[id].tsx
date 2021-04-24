import {useRouter} from "next/router";
import Layout from "../../components/Layout";
import 'bulma/css/bulma.css'

const CandidateDetails = () => {
    const router = useRouter()

    return (
        <Layout>
        <div className="tab-pane is-active p-6" id="pane-2">
            <div className="content">
                <h1>Страница кандидата {router.query.id}</h1>

            </div>
        </div>
    </Layout>)
}


export default CandidateDetails