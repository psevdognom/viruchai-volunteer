import React from 'react'
import { Item } from 'semantic-ui-react'
import TaskCard from "./TaskCard";

const TaskCards = () => (
    <Item.Group>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
    </Item.Group>
)

export default TaskCards