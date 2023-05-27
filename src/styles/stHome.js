import { StyleSheet, Dimensions } from "react-native";


let color = "white", fontWeight = "600"
const { width, height } = Dimensions.get("window")
const radio = 25

export const stContainer1 = StyleSheet.create({

    informacion: {
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2

    },

    cityT: {
        zIndex: 3,
        color,
        fontSize: 35,
        fontWeight: "bold"
    },

    temperatura: {
        color,
        fontSize: 80
    },

    viewG: {
        flexDirection: "row",
        gap: 5,
        justifyContent: "center"
    },

    etiqueta: {
        flexDirection: "row",
        alignItems: "center"
    },
    etiqTex: {
        color,
        fontSize: 17,
        fontWeight: "500"
    },

    gradiant: {
        width: width,
        height: height * .9,
        position: "absolute",
        top: height * .3,
        zIndex: 1
    },
    city: {
        top: "3%",
        zIndex: 1,
        width: width,


    }
})


const circle = width * .6

export const stContainer2 = StyleSheet.create({

    root: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,.7)",
        paddingHorizontal: "3%",
        paddingVertical: "2%",
        borderTopLeftRadius: radio,
        borderTopRightRadius: radio,
        overflow: "hidden"
    },


})

export const ItemsFlat = StyleSheet.create({
    root: {
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#000636",
        width: width * 0.2,
        height: width * 0.35,
        borderRadius: 15,
        paddingVertical: 14
    },
    text: {
        color: "white",
        fontWeight: "600",
        fontSize: 16
    },
    imagen: {
        width: 50,
        height: 50,

    }

})

export const stDetalles = StyleSheet.create({

    Text: {
        color: "white",
        fontWeight: "600",
        fontSize: 17
    },


})

export const stNavBottom = StyleSheet.create({

    root: {
        backgroundColor: "rgba(0,0,0,.3)",
        width: "100%",
        height: 80,
        zIndex: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: "5%",
        paddingVertical:"2%"
    },

    press: {
      
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: "5%",
        alignItems:"center"
    },

    pressCent:{
        width:80,
        height:80,
        borderColor:"white",
        borderWidth:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white",
        paddingHorizontal:"5%",
        borderRadius:360,
        top:-25
    }


})