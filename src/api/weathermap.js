import axios from "axios";

const weathrApi = (url)=>{

    const instacia = axios({
        method:"GET",
        url:`${url}&appid=9b0b0e047932738afc2ded3a2cd8195a`,
        baseURL:"http://api.openweathermap.org/data/2.5",
        timeout:10000
    })

    return instacia

}

export default weathrApi