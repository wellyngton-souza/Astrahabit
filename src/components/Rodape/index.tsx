import { View, Image, StyleSheet } from "react-native";

const Rodape = () =>{
    return(
        <View style={ layout.container }>
            <Image
                source={ require("../../../assets/app/Today.png") }
                style={ layout.icon }
            />
            <Image
                source={ require("../../../assets/app/Clock.png") }
                style={ layout.icon }
            />
            <Image
                source={ require("../../../assets/app/BarChart.png") }
                style={ layout.icon }
            />
        </View>
    );
}

const layout = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    icon: {
        width: 35
    }
});

export default Rodape;