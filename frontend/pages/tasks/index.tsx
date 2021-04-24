import Layout from "../../components/Layout";
import Paginator from "../../components/Pagination";
import AuthCheck from "../../components/AuthCheck";
import {firestore} from "../../lib/firebase";
import React, {useEffect, useState} from "react";
import TaskCard from "../../components/TaskCard";

const TasksPage = ( ) => {
    const [tasks, setTasks] = useState()

    useEffect(() => {
        async function fetchTasks() {
            const tasksQuery = firestore
                .collectionGroup('tasks')

            const fetchedTasks = (await tasksQuery.get()).docs.map(doc => {return { ...doc.data() }});
            // @ts-ignore
            setTasks(fetchedTasks)
        }

        fetchTasks()

    }, []);

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