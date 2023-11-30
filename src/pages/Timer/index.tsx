import { StyleSheet, Text, View, Image } from "react-native";

import Rodape from "../../components/Rodape";
import TimerComponent from "../../components/Timer";

const Timer = () =>{
    return(
        <View style={ layout.container }>
            <View style={ layout.subContainer }>
                <View style={ layout.Flex }>
                    <Text style={ custom.title }>Timer</Text>
                    <View style={ layout.Flex }>
                        <Image
                            source={ require("../../../assets/app/Bookmark.png") }
                            style={ [layout.icon, custom.iconLeft] }
                        />
                        <Image
                            source={ require("../../../assets/app/ExternalLink.png") }
                            style={ [layout.icon, custom.iconLeft] }
                        />
                        <Image
                            source={ require("../../../assets/app/Settings.png") }
                            style={ [layout.icon, custom.iconLeft] }
                        />
                    </View>
                </View>
                <View style={ layout.Flex }>
                    <Text style={ layout.Text }>List View</Text>
                    <Text style={ layout.Text }>0:00:00</Text>
                </View>
            </View>
            <TimerComponent />
            <Rodape screenSelect="timer" />
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
        borderBottomColor: "black",
        borderBottomWidth: 1
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
});

export default Timer;