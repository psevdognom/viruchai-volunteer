import Layout from "../../components/Layout";
import 'bulma/css/bulma.css'
import {firestore} from "../../lib/firebase";
import {Category} from "../../interfaces/interfaces";
import Link from 'next/link'


interface Props {
    categories: Category[]
}

const HowIndex = ({categories}:Props) => (
    <Layout>

            <ul>
                {categories.map(category =>
                    <li id={category.slug}> <Link href={'/how/' + category.slug}>{category.title}</Link></li>
                )}
            </ul>
    </Layout>
)

// @ts-ignore
export async function getServerSideProps(context) {
    const postsQuery = firestore
        .collectionGroup('categories');

    const categories = (await postsQuery.get()).docs.map(doc => {
        return { ...doc.data() }
    })

    return {
        props: { categories }, // will be passed to the page component as props
    };
}

export default HowIndex