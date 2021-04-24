import Layout from "../../components/Layout"
import 'bulma/css/bulma.css'
import {firestore, candidateToJSON} from "../../lib/firebase";
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

// @ts-ignore
export async function getServerSideProps(context) {
    const postsQuery = firestore
        .collectionGroup('candidates')
        .limit(10);

    const candidates = (await postsQuery.get()).docs.map(candidateToJSON);

    return {
        props: { candidates }, // will be passed to the page component as props
    };
}

export default WhomIndex