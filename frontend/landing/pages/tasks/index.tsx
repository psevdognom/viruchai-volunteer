import Layout from "../../components/Layout";
import TaskCards from "../../components/TaskCards";
import Paginator from "../../components/Pagination";

const ItemExampleItems = () => (
    <Layout sizeProps={"is-small"}>
        <TaskCards/>
        <Paginator/>
    </Layout>
)

export default ItemExampleItems