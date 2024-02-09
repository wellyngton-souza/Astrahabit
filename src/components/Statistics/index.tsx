import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { useState } from "react";
import { LineChart, PieChart, ContributionGraph } from "react-native-chart-kit";

const StatisticsComponent = () =>{
    const [tabSelect, setTabSelect] = useState(2);

    return(
        <ScrollView>
            <View style={ [ layout.content, layout.subContainer ] }>
                <Text style={ layout.Text }>
                    Your Activity
                </Text>
                <View style={ layout.Flex }>
                    <TouchableOpacity onPress={() => setTabSelect(1)}>
                        <Text style={ [layout.Title, tabSelect === 1 && layout.TitleSelected] }>Week</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setTabSelect(2)}>
                        <Text style={ [layout.Title, tabSelect === 2 && layout.TitleSelected] }>Year</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setTabSelect(3)}>
                        <Text style={ [layout.Title, tabSelect === 3 && layout.TitleSelected] }>Global</Text>
                    </TouchableOpacity>
                </View>
                {
                    tabSelect === 1 ?
                    <LineChart
                        data={{
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            datasets: [
                                {
                                    data: [830, 762, 810, 700, 723, 493, 677, 641, 509, 213, 335, 198, 29]
                                },
                            ],
                        }}
                        width={Dimensions.get('window').width - 70}
                        height={200}
                        yAxisLabel={'$'}
                        chartConfig={{
                            backgroundGradientFrom: '#fff',
                            backgroundGradientTo: '#fff',
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
                        }}
                    /> :
                    tabSelect === 2 ?
                    <ContributionGraph
                        values={
                            [
                                { date: "2017-01-02", count: 1 },
                                { date: "2017-01-03", count: 2 },
                                { date: "2017-01-04", count: 3 },
                                { date: "2017-01-05", count: 4 },
                                { date: "2017-01-06", count: 5 },
                                { date: "2017-01-30", count: 2 },
                                { date: "2017-01-31", count: 3 },
                                { date: "2017-03-01", count: 2 },
                                { date: "2017-04-02", count: 4 },
                                { date: "2017-03-05", count: 2 },
                                { date: "2017-02-30", count: 4 }
                            ]
                        }
                        endDate={new Date("2017-04-01")}
                        numDays={105}
                        width={Dimensions.get('window').width - 70}
                        height={220}
                        chartConfig={{
                            backgroundGradientFrom: '#fff',
                            backgroundGradientTo: '#fff',
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
                        }}
                    />
                    :
                    <PieChart
                        data={
                            [
                                {
                                name: "Seoul",
                                population: 21,
                                color: "rgba(131, 167, 234, 1)",
                                legendFontColor: "#7F7F7F",
                                legendFontSize: 15
                                },
                                {
                                name: "Toronto",
                                population: 28,
                                color: "#F00",
                                legendFontColor: "#7F7F7F",
                                legendFontSize: 15
                                },
                                {
                                name: "Beijing",
                                population: 52,
                                color: "red",
                                legendFontColor: "#7F7F7F",
                                legendFontSize: 15
                                },
                                {
                                name: "New York",
                                population: 85,
                                color: "#449999",
                                legendFontColor: "#7F7F7F",
                                legendFontSize: 15
                                },
                                {
                                name: "Moscow",
                                population: 11,
                                color: "rgb(0, 0, 255)",
                                legendFontColor: "#7F7F7F",
                                legendFontSize: 15
                                }
                            ]
                        }
                        width={Dimensions.get('window').width - 70}
                        height={200}
                        chartConfig={{
                            color: (opacity = 3) => `rgba(255, 255, 255, ${opacity})`
                        }}
                        accessor="population"
                        backgroundColor="transparent"
                        paddingLeft="15"
                        absolute
                    />
                }
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
    Title: {
        fontSize: 21,
        marginBottom: 35,
        fontWeight: "bold",
        color: "#FF0066"
    },
    TitleSelected: {
        textDecorationLine: 'underline'
    },
    Flex: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
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