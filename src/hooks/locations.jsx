import * as Location from 'expo-location';

const Coordenada = async() => {

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        console.log("Error de acces")
        throw "Permission to access location was denied";
    }

    let location = await Location.getCurrentPositionAsync({});

    const {latitude,longitude} = location.coords

    return {latitude,longitude} 
}

export default Coordenada