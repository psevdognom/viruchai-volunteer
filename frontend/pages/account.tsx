import Layout from "../components/Layout";
import 'bulma/css/bulma.css'
import AuthCheck from "../components/AuthCheck";

const Account = () => {
    const username = true;

    return (
        <Layout>
            <AuthCheck>
                {username}
            </AuthCheck>
        </Layout>
    )
}

export default Account