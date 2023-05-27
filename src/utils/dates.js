
export const getTime = (time) => {
    const hora = new Date(time).getHours()
    return hora
}

export const getJornada = (time) => {
    const hora = new Date(time).getHours()

    if ((hora > 5) && (hora < 19)) 
        return true

    return false
}