import Layout from "../../components/Layout";
import 'bulma/css/bulma.css'
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


export default HowIndex