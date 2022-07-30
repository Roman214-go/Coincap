const convertNumber = (number: string | number) => {
    number = Number(number).toFixed(2)
    
    return number
}

export default convertNumber