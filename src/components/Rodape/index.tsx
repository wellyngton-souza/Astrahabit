import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { StackTypes } from "../../routes";

type telaSelecionada = {
    screenSelect: String;
}

const Rodape: React.FC<telaSelecionada> = ({ screenSelect }) => {
    const navigation = useNavigation<StackTypes>();

    return (
        <View style={layout.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Calendary")}
            >
                <Image
                    source={require("../../../assets/app/Today.png")}
                    style={[layout.icon, { tintColor: screenSelect === "calendary" ? "black" : "gray" }]}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Timer")}
            >
                <Image
                    source={require("../../../assets/app/Clock.png")}
                    style={[layout.icon, { tintColor: screenSelect === "timer" ? "black" : "gray" }]}
                />
            </TouchableOpacity>
            <Image
                source={require("../../../assets/app/BarChart.png")}
                style={[layout.icon, { tintColor: "gray" }]}
            />
        </View>
    );
}

const layout = StyleSheet.create({
    container: {
        padding: 35,
        paddingBottom: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    icon: {
        width: 35,
        height: 35
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    buttonText: {
        marginLeft: 8,
        fontSize: 16
    }
});

export default Rodape;
