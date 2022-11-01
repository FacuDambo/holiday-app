const Years = () => {
    let max = new Date().getFullYear()
    let min = max - 30
    let years = []

    for (let i = max; i >= min; i--) {
        years.push(i)
    }
    return years
}

export default Years