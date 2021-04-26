import Layout from "../../components/Layout";
import Paginator from "../../components/Pagination";
import AuthCheck from "../../components/AuthCheck";
import React, {useState} from "react";
import TaskCard from "../../components/TaskCard";

const TasksPage = ( ) => {
    const [tasks, setTasks] = useState()

    return (
        <Layout>
            <AuthCheck>
                <div className={"container py-3"}>
                    {// @ts-ignore
                        typeof tasks != 'undefined' ? tasks.map(task => <TaskCard task={task}/>) : ''
                    }
                    <Paginator/>
                </div>
            </AuthCheck>
        </Layout>
    )
}

export default TasksPage