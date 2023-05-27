import { useEffect, useState, useMemo } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Container1 from "../container/home/container1";
import Container2 from "../container/home/modal";
import AreaView from "../components/SafeArea";
import Loading from "../components/loading";
import Coordenada from "../hooks/locations";
import weathrApi from "../api/weathermap";
import { contextHome } from "../context/home";
import NavBottom from "../container/home/bottomNav";
/**Datos auxiliares en caso de que la api aya sobrepasado la solicitud */
import { auxClima } from "../utils/auxClima";
import { auxForesct } from "../utils/auxList";

export default function Home() {

    const [coord, setCoord] = useState(undefined)
    const [load, setLoad] = useState(true)
    const [data, setData] = useState(undefined) //Infromacion actual
    const [clima, setClima] = useState(undefined) //Lista de pronostico

    useEffect(() => {
        const efecto = async () => {
            try {
                let aux = await Coordenada()
                setCoord(aux)
            } catch (error) {
                console.log(error)

            }
        }

        efecto()
    }, [])

    useEffect(()=>{
        if(clima,data){
            setLoad(false)
        }
    },[clima,data])

    useMemo(async () => {
        if (coord) {
            const { latitude, longitude } = coord
            try {
                const respons = await weathrApi(`weather?lat=${latitude}&lon=${longitude}`).then(e => {
                    return e.data
                })
                setData(respons)

                const {id} = respons

                const responsA = await  weathrApi(`forecast?id=${id}`).then((e)=>{
                    return e.data.list
                })

                setClima(responsA)

            } catch (error) {
                setData(auxClima)
                setClima(auxForesct.list)
                console.log(error);
            }
        }

    }, [coord])

    return (
        <contextHome.Provider value={{ clima ,data ,coord}}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <AreaView>
                    {
                        !load ?
                            <>
                                {
                                    data &&
                                    <Container1 city={data.name} temperatura={data.main.temp} humedad={data.main.humidity}
                                        aprox={data.clouds.all}
                                    />
                                }

                                <Container2 />
                                <NavBottom/>
                            </>
                            : <Loading />
                    }
                </AreaView>
            </GestureHandlerRootView>
        </contextHome.Provider>
    )

}