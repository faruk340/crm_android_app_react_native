import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Header from "../components/Header"
import {
    LineChart,
    BarChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import PieChart from 'react-native-pie-chart';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height
const Reportscreen = (props) => {
    const widthAndHeight = 250
    const series = [20, 50, 30]
    const reportData = [
        {
            name: "Quotation",
            color: "#AAE5CF",
            imgUrl: require("../images/quotation.png")
        },
        {
            name: "Proposal",
            color: "#FFC661",
            imgUrl: require("../images/proposal.png")
        },
        {
            name: "Policy",
            color: "#78C658",
            imgUrl: require("../images/policy.png")
        },
    ]

    const sliceColor = ['#AAE5CF', '#FFC661', '#78C658']

    // =========================BarChart===================

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
    };
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    const graphStyle = {
        backgroundColor: "#0f3cc9",
        marginTop: 20,
        borderRadius: 8
    }
    return (
        <View style={styles.container}>
            <Header
                navigation={props.navigation}
                formName="Report"
                create="Company Info"
            />
            <View style={styles.report_division_container}>
                <TouchableOpacity style={[styles.report_division_btn, { backgroundColor: "#2196f3", borderWidth: null }]}>
                    <Text style={{ color: "#ffffff" }}>Weekly</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.report_division_btn}>
                    <Text>Monthly</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.report_division_btn}>
                    <Text>Yearly</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.PieChart_container}>
                <View style={styles.PieChart}>
                    <PieChart
                        widthAndHeight={widthAndHeight - 70}
                        series={series}
                        sliceColor={sliceColor}
                        doughnut={true}
                        coverRadius={0.45}
                    />
                </View>
                <View style={styles.PieChart_content}>
                    {
                        reportData.map((ele, index) => {
                            return (
                                <View style={styles.PieChart_color} key={index}>
                                    <Image
                                        style={{ width: 15, height: 15, marginRight: 15 }}
                                        source={ele.imgUrl}
                                    />
                                    <Text>{ele.name}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
            <BarChart
                style={graphStyle}
                data={data}
                width={windowWidth - 20}
                height={220}
                // yAxisLabel="%"
                yAxisSuffix="%"
                chartConfig={chartConfig}
                verticalLabelRotation={15}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: windowWidth
    },
    report_division_container: {
        width: "95%",
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    PieChart_container: {
        marginTop: 20,
        width: "95%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgba(255,255,255,0.8)",
        borderRadius: 8,
        padding: 15,
    },
    report_division_btn: {
        height: 40,
        width: "30%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 25
    },
    PieChart_content_color: {
        width: 12,
        height: 12,
        borderRadius: 50,
        marginRight: 8
    },
    PieChart_color: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15
    },
    BarChart_container: {
        marginTop: 20,
        width: "95%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgba(255,255,255,0.8)",
        borderRadius: 8,
        padding: 15,
    }
});
export default Reportscreen;