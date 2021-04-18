const emodjiList: string[] = ["👩‍🏭","🧑‍🏭","👨‍🏭","👩‍💻","🧑‍💻","👨‍💻","👩‍💼","🧑‍💼","👨‍💼","👩‍🔧","🧑‍🔧","👨‍🔧","👩‍🔬","🧑‍🔬","👨‍🔬","👩‍🎨","🧑‍🎨","👨‍🎨"]

const RandomEmodji = () => {
    const randomID = () => Math.floor(Math.random() * emodjiList.length);
    return (
        <span>{emodjiList[randomID()]}</span>
    )
}

export default RandomEmodji