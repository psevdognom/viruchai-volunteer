import Layout from "../components/Layout";
import 'bulma/css/bulma.css'
import AuthCheck from "../components/AuthCheck";
import {useContext} from "react";
import {UserContext} from "../lib/context";

const Account = () => {
    const { username } = useContext(UserContext);

    return (
        <Layout>
            <AuthCheck>
                {username}
            </AuthCheck>
        </Layout>
    )
}

export default Account