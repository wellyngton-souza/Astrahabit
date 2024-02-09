import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import totalTime from "../../utils/totalTime";

import Rodape from "../../components/Rodape";
import TimerComponent from "../../components/Timer";

import { StackTypes } from "../../routes";
import { useEffect, useState } from "react";

const Timer = () =>{
    const navigation = useNavigation<StackTypes>();

    const [timedTask, setTimedTask] = useState("a");

    const defineTask = (task: string) =>{
        setTimedTask(task);
    }

    const [times, setTimes] = useState([
        { name: "Atena", color: "#26C3BA", time: 1030 },
        { name: "Astrahabit", color: "#2649C3", time: 2030 },
        { name: "Manggih", color: "#9B26C3", time: 2030 },
        { name: "100Points", color: "#59C326", time: 2030 }
    ]);

    useEffect(() =>{
        const intervalId = setInterval(() => {
            setTimes((prevTimes) =>{
                    return prevTimes.map((item) =>
                        item.name === timedTask ? { ...item, time: item.time + 1 } : item
                    );
                }
            );
        }, 1000);
    
        return () => clearInterval(intervalId);
    },[timedTask]);

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
                <View style={ layout.Flex }>
                    <Text style={ layout.Text }>List View</Text>
                    <Text style={ layout.Text }>{ totalTime(times.reduce((acc, timeObj) => acc + timeObj.time, 0)) }</Text>
                </View>
            </View>
            <TimerComponent times={times} defineTask={defineTask} taskSelected={timedTask} />
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