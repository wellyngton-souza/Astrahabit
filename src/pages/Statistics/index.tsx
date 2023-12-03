import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import StatisticsComponent from "../../components/Statistics";
import Rodape from "../../components/Rodape";

import { StackTypes } from "../../routes";

const Statistics = () =>{
    const navigation = useNavigation<StackTypes>();

    return(
        <View style={ layout.container }>
            <View style={ layout.subContainer }>
                <View style={ layout.Flex }>
                    <Text style={ custom.title }>Statistics</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Config")}
                    >
                        <Image
                            source={ require("../../../assets/app/Settings.png") }
                            style={ [layout.icon, custom.iconLeft] }
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <StatisticsComponent />
            <Rodape screenSelect="Statistics" />
        </View>
    );   
}

const layout = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
    },
    subContainer: {
        padding: 35,
        borderBottomWidth: 1,
        borderBottomColor: "black",
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
        width: 35,
        height: 35
    },
    content: {
        flexGrow: 1,
        borderTopColor: "black",
        borderTopWidth: 1
    },
    border: {
        borderBottomColor: "black",
        overflow: "hidden",
        borderBottomWidth: 1
    }
});

const custom = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 20
    },
    iconLeft: {
        marginLeft: 10
    },
    scrollData: {
        marginHorizontal: 15,
        minHeight: 120,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    scrollText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 35
    },
    scrollTextSelected: {
        fontSize: 18,
        fontWeight: "bold",
        backgroundColor: "orange",
        marginBottom: 35
    },
});

export default Statistics;