const emodjiList: string[] = ["👩‍🏭","🧑‍🏭","👨‍🏭","👩‍💻","🧑‍💻","👨‍💻","👩‍💼","🧑‍💼","👨‍💼","👩‍🔧","🧑‍🔧","👨‍🔧","👩‍🔬","🧑‍🔬","👨‍🔬","👩‍🎨","🧑‍🎨","👨‍🎨"]

const RandomEmodji = () => {
    const randomID = () => Math.floor(Math.random() * emodjiList.length);
    return (
        <span className={"is-size-2"}>{emodjiList[randomID()]}</span>
    )
}

export default RandomEmodji