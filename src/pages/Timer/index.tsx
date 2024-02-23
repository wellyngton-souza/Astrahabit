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
    const [editTask, setEditTask] = useState(false);

    const defineTask = (task: string) =>{
        setTimedTask(task);
    }

    const [times, setTimes] = useState([
        { name: "Atena", color: "#26C3BA", time: 1030 },
        { name: "Astrahabit", color: "#2649C3", time: 2030 },
        { name: "Manggih", color: "#9B26C3", time: 2030 },
        { name: "100Points", color: "#59C326", time: 2030 }
    ]);

    const addTimes = () =>{
        setEditTask(!editTask);
    }

    const deleteTask = (taskToDelete: { name: String, color: String, time: Number }) =>{
        setTimes(prevTimes => prevTimes.filter(task => task !== taskToDelete));
    }

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
                        <TouchableOpacity onPress={addTimes}>
                            <Image
                                source={ require("../../../assets/app/ExternalLink.png") }
                                style={ [layout.icon, custom.iconLeft] }
                            />
                        </TouchableOpacity>
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
            {
                editTask ?    
                    <TimerComponent times={times} defineTask={defineTask} taskSelected={timedTask} />
                :
                <View style={ custom.afterComponent }>
                    <Text style={ layout.Text }>Editar Tasks</Text>
                    <View style={ [custom.afterComponent, { paddingHorizontal: 0 }] }>
                        {
                            times.map((item) => (
                                <View style={ layout.Flex }>
                                    <Text style={ layout.Text }>{item.name}</Text>
                                    <View style={ [layout.Flex, layout.flexGap] }>
                                        <View style={ custom.buttonCorrect }></View>
                                        <TouchableOpacity onPress={() => deleteTask(item)}>
                                            <View style={ custom.buttonIncorrect }></View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                    <TouchableOpacity>
                        <View style={ custom.buttonGray }>
                            <Text style={ layout.Text }>Editar</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={ custom.buttonGray }>
                            <Text style={ layout.Text }>Adicionar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            }
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
    flexGap: {
        gap: 10
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
    flexGrow: {
        flexGrow: 1
    },
    afterComponent: {
        flexGrow: 1,
        padding: 35,
        display: "flex",
        flexDirection: "column",
        gap: 30
    },
    buttonGray: {
        backgroundColor: "#9999",
        padding: 20
    },
    buttonCorrect: {
        width: 50,
        height: 50,
        borderRadius: 40,
        backgroundColor: "green"
    },
    buttonIncorrect: {
        width: 50,
        height: 50,
        borderRadius: 40,
        backgroundColor: "red"
    }
});

export default Timer;