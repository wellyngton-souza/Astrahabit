import { StyleSheet, Text, View, ScrollView } from "react-native";

const StatisticsComponent = () =>{
    return(
        <ScrollView>
            <View style={ [ layout.content, layout.subContainer ] }>
                <Text style={ layout.Text }>
                    Your Activity
                </Text>
                <View style={ layout.circle }>
                    <View style={ layout.circleCenter }></View>
                </View>
            </View>
        </ScrollView>
    );
}

const layout = StyleSheet.create({
    subContainer: {
        padding: 35
    },
    Text: {
        fontSize: 21,
        marginBottom: 35,
        fontWeight: "bold"
    },
    content: {
        flexGrow: 1
    },
    circle: {
        width: "100%",
        aspectRatio: 1,
        borderRadius: 180,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "orange"
    },
    circleCenter: {
        width: "50%",
        aspectRatio: 1,
        borderRadius: 180,
        backgroundColor: "white"
    }
});

export default StatisticsComponent;