import Layout from "../../components/Layout"
import 'bulma/css/bulma.css'
import CandidateSlick from "../../components/CandidateSlick"
import {Candidate} from "../../interfaces/interfaces";

interface Props {
    candidates: Candidate[]
}

const WhomIndex = ({ candidates }:Props) => (
    <Layout>
        <CandidateSlick candidates={candidates}/>
    </Layout>
)

export default WhomIndex