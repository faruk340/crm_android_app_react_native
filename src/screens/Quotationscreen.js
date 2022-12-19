import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Provider } from 'react-native-paper';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import Pg1 from '../quotationforms/Pg1.form';
import Pg2 from '../quotationforms/Pg2.form';
import Pg3 from '../quotationforms/Pg3.form';
import Pg4 from '../quotationforms/Pg4.form';
import Pg5 from '../quotationforms/Pg5.form';
import Pg6 from '../quotationforms/Pg6.form';
import Pg7 from '../quotationforms/Pg7.form';




const windowHeight = Dimensions.get('window').height;
const Quotationscreen = ({ navigation }) => {
    const slideOutLeft = {
        from: {
            left: -900
        },
        to: {
            left: 0
        }
    }
    const slideOutRight = {
        from: {
            right: -900
        },
        to: {
            right: 0
        }
    }
    const [pageNumber, setPageNumber] = useState(1)
    const pageNumberIncrement = () => {
        setPageNumber(pageNumber + 1)
        if (pageNumber === 7) {
            setPageNumber(7)
        }
    }
    const pageNumberDecrement = () => {
        setPageNumber(pageNumber - 1)
    }
    return (
        <Provider>
            <Header
                navigation={navigation}
                formName="Create Quotatation"
                create="All Quotatation"
            />
            <View style={styles.container}>
                {/* <View style={styles.log_or_rog}>
                    <View style={[styles.log_or_rog_text, {
                        backgroundColor: pageNumber >= 1
                            || pageNumber === 2
                            || pageNumber === 3
                            || pageNumber === 4
                            || pageNumber === 5
                            || pageNumber === 6
                            || pageNumber === 7
                            ? "#0A2885" : "#fff"
                    }]}><Text style={{
                        color: pageNumber >= 1
                            || pageNumber === 2
                            || pageNumber === 3
                            || pageNumber === 4
                            || pageNumber === 5
                            || pageNumber === 6
                            || pageNumber === 7
                            ? "#fff" : "#000"
                    }}>S</Text></View>
                    <View style={styles.log_or_rog_1}></View>
                    <View style={[styles.log_or_rog_text, {
                        backgroundColor: pageNumber >= 1
                            && pageNumber === 2
                            || pageNumber === 3
                            || pageNumber === 4
                            || pageNumber === 5
                            || pageNumber === 6
                            || pageNumber === 7
                            ? "#0A2885" : "#fff"
                    }]}><Text style={{
                        color: pageNumber >= 1
                            && pageNumber === 2
                            || pageNumber === 3
                            || pageNumber === 4
                            || pageNumber === 5
                            || pageNumber === 6
                            || pageNumber === 7
                            ? "#fff" : "#000"
                    }}>1</Text></View>
                    <View style={styles.log_or_rog_2}></View>
                    <View style={[styles.log_or_rog_text, {
                        backgroundColor: pageNumber >= 1
                            && pageNumber === 3
                            || pageNumber === 4
                            || pageNumber === 5
                            || pageNumber === 6
                            || pageNumber === 7
                            ? "#0A2885" : "#fff"
                    }]}><Text style={{
                        color: pageNumber >= 1
                            && pageNumber === 3
                            || pageNumber === 4
                            || pageNumber === 5
                            || pageNumber === 6
                            || pageNumber === 7
                            ? "#fff" : "#000"
                    }}>2</Text></View>
                    <View style={styles.log_or_rog_2}></View>
                    <View style={[styles.log_or_rog_text, {
                        backgroundColor: pageNumber >= 1
                            && pageNumber === 4
                            || pageNumber === 5
                            || pageNumber === 6
                            || pageNumber === 7
                            ? "#0A2885" : "#fff"
                    }]}><Text style={{
                        color: pageNumber >= 1
                            && pageNumber === 4
                            || pageNumber === 5
                            || pageNumber === 6
                            || pageNumber === 7
                            ? "#fff" : "#000"
                    }}>3</Text></View>
                    <View style={styles.log_or_rog_2}></View>
                    <View style={[styles.log_or_rog_text, {
                        backgroundColor: pageNumber >= 1
                            && pageNumber === 5
                            || pageNumber === 6
                            || pageNumber === 7
                            ? "#0A2885" : "#fff"
                    }]}><Text style={{
                        color: pageNumber >= 1
                            && pageNumber === 5
                            || pageNumber === 6
                            || pageNumber === 7
                            ? "#fff" : "#000"
                    }}>4</Text></View>
                    <View style={styles.log_or_rog_2}></View>
                    <View style={[styles.log_or_rog_text, {
                        backgroundColor: pageNumber >= 1
                            && pageNumber === 6
                            || pageNumber === 7
                            ? "#0A2885" : "#fff"
                    }]}><Text style={{
                        color: pageNumber >= 1
                            && pageNumber === 6
                            || pageNumber === 7
                            ? "#fff" : "#000"
                    }}>5</Text></View>
                    <View style={styles.log_or_rog_2}></View>
                    <View style={[styles.log_or_rog_text, {
                        backgroundColor: pageNumber >= 1
                            && pageNumber === 7
                            ? "#0A2885" : "#fff"
                    }]}><Text style={{
                        color: pageNumber >= 1
                            && pageNumber === 7
                            ? "#fff" : "#000"
                    }}>E</Text></View>
                </View> */}
                <View style={{ width: "90%", marginTop: 10 }}>
                    <Text style={{ textAlign: "right", }}><Text style={{ color: "#360254" }}>{pageNumber}</Text>/7</Text>
                </View>
                {pageNumber === 1 ? <Pg1 /> : pageNumber === 2 ? <Pg2 /> : pageNumber === 3 ? <Pg3 /> : pageNumber === 4 ? <Pg4 /> : pageNumber === 5 ? <Pg5 /> : pageNumber === 6 ? <Pg6 /> : pageNumber === 7 ? <Pg7 /> : <Pg7 />}
                <View style={styles.flex_box_btn}>
                    {
                        pageNumber > 1 &&
                        <TouchableOpacity style={[styles.registerBtn1]} mode="contained"
                            onPress={() => pageNumberDecrement()}>
                            <MaterialIcons name="keyboard-arrow-left" size={30} color={'#fff'} />
                            {/* <Text style={{ color: "#fff", textTransform: "uppercase" }}>Previous</Text> */}
                        </TouchableOpacity>
                    }
                    <TouchableOpacity style={[styles.registerBtn2,]} mode="contained"
                        onPress={() => pageNumberIncrement()}>
                        {pageNumber === 7 ? <Text style={{ color: "#fff", textTransform: "uppercase" }}>done</Text> : <Text style={{ color: "#fff", textTransform: "uppercase" }}>continue</Text>}
                        {/* {pageNumber === 7 ? <MaterialIcons name="done" size={30} color={'#fff'} /> : <MaterialIcons name="keyboard-arrow-right" size={30} color={'#fff'} />} */}
                    </TouchableOpacity>
                </View>
            </View>
        </Provider>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        width: "100%",
        height: windowHeight,
        backgroundColor: "#fff",
    },
    flex_box_btn: {
        width: "100%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#360254"
    },
    registerBtn1: {
        width: "20%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gray"
    },
    registerBtn2: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#360254"
    },
    log_or_rog: {
        position: "relative",
        width: "95%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        paddingBottom: 10
    },
    log_or_rog_1: {
        width: "5%",
        borderWidth: 2,
        borderBottomColor: "#ccc",
        borderTopColor: "#fff",
        borderLeftColor: "#fff",
        borderRightColor: "#fff"
    },
    log_or_rog_text: {
        borderWidth: 1,
        borderColor: "#0A2885",
        width: 25,
        height: 25,
        borderRadius: 15,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

    },
    log_or_rog_2: {
        width: "5%",
        borderWidth: 1,
        borderBottomColor: "#ccc",
        borderTopColor: "#fff",
        borderLeftColor: "#fff",
        borderRightColor: "#fff"
    },
})
export default Quotationscreen