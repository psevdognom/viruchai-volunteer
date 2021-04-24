export interface Tab {
    link: string,
    title: string,
}

export interface Candidate {
    id?: number,
    name: string,
    district: string,
    desc: string,
    photo: string,
    taskCount: number
    tasksRef?: object
}

export interface Category {
    id?: number,
    title: string,
    slug: string
    tasksRef?: object
}

export interface Task {
    title: string,
    desc: string,
    category: string,
    candidate: string,
    img?: string,
    applicants?: object,
    chatGroupID?: number
}