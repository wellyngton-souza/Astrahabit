import { StyleSheet, Text, View, ScrollView } from "react-native";

const TimerComponent = () =>{
    return(
        <ScrollView>
            <View style={ [ layout.content, layout.subContainer ] }>
                <Text style={ layout.Text }>
                    Your Activity
                </Text>
                <Text style={ layout.Text }>
                    Your Activity
                </Text>
                <Text style={ layout.Text }>
                    Your Activity
                </Text>
                <Text style={ layout.Text }>
                    Your Activity
                </Text>
                <Text style={ layout.Text }>
                    Your Activity
                </Text>
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
        paddingVertical: 50,
        fontWeight: "bold"
    },
    content: {
        flexGrow: 1
    }
});

export default TimerComponent;