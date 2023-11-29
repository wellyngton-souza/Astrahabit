import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

import Rodape from "../../components/Rodape";

const Timer = () =>{
    return(
        <View style={ layout.container }>
            <View style={ layout.Flex }>
                <Text style={ custom.title }>Calendario</Text>
                <Image
                    source={ require("../../../assets/app/Settings.png") }
                    style={ layout.icon }
                />
            </View>
            <View style={ layout.Flex }>
                <Text style={ layout.Text }>Sexta Feira</Text>
                <Text style={ layout.Text }>0:00:00</Text>
            </View>
            <View style={ layout.content }>
            </View>
            <Rodape />
        </View>
    );   
}

const layout = StyleSheet.create({
    container: {
        padding: 35,
        flex: 1,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
    },
    Text: {
        fontSize: 21,
        fontWeight: "bold"
    },
    Flex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    icon: {
        width: 35
    },
    content: {
        flexGrow: 1
    }
});

const custom = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 20
    }
});

export default Timer;