import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Provider, TextInput, RadioButton, Button, Banner } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const windowHeight = Dimensions.get('window').height;
const Registerscreen = () => {
    const [value, setValue] = React.useState('Individual');
    const [toastvisible, setToastVisible] = React.useState(false);
    const registerInfoVerify = () => {
        setToastVisible(true)
    }
    return (
        <Provider>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.reg_header}>
                        <Text style={{ textTransform: "uppercase", textAlign: "center", marginBottom: 40, fontSize: 15, color: "#fff", letterSpacing: 10 }}>CRM</Text>
                        <Text style={{ textTransform: "uppercase", textAlign: "center", fontSize: 20, color: "#fff" }}>Register</Text>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../images/engine.gif')}
                        />
                    </View>
                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                        <View style={styles.reg_form_one}>
                            <View style={styles.Individual_box}>
                                <Text>Individual</Text>
                                <RadioButton value="Individual" />
                            </View>
                            <View style={styles.Company_box}>
                                <Text>Company</Text>
                                <RadioButton value="Company" />
                            </View>
                        </View>
                    </RadioButton.Group>
                    <TextInput
                        style={styles.input}
                        label="Full Name *"
                    />
                    <TextInput
                        style={styles.input}
                        label="Email Id *"
                    />
                    {value === "Individual" ? false : true && <TextInput
                        style={styles.input}
                        label="Company Name *"
                    />}
                    {value === "Individual" ? false : true &&
                        <TextInput
                            style={styles.input}
                            label="GST *"
                        />}
                    <TextInput
                        style={styles.input}
                        label="Password *"
                    />
                    <TextInput
                        style={styles.input}
                        label="Confirm Password *"
                    />
                </View>
            </ScrollView>
            <Banner
                visible={toastvisible}
                elevation={5}
                actions={[
                    {
                        label: 'ok',
                        onPress: () => setToastVisible(false),
                    },
                    {
                        label: '',
                        onPress: () => setToastVisible(false),
                    },
                ]}
                icon={({ size }) => (
                    <Image
                        source={require('../images/facepalm-ugh.gif')}
                        style={{
                            width: size,
                            height: size,
                        }}
                    />
                )}>
                There was a problem !! Please fill all the field Thank you
            </Banner>
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
    reg_header: {
        // borderWidth: 1,
        // borderColor: "red",
        position: "relative",
        width: "100%",
        backgroundColor: "#0f3cc9",
        height: 150,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    reg_form_one: {
        marginTop: 20,
        width: "95%",
        // borderWidth: 1,
        // borderColor: "red",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-around',
    },
    Individual_box: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-around',
    },
    Company_box: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-around',
    },
    input: {
        marginTop: 15,
        width: '95%',
        backgroundColor: "#fff",
    },
    tinyLogo: {
        position: "absolute",
        width: 90,
        height: 90,
        resizeMode: 'contain',
        right: 0,
        bottom: 0,
        opacity: 0.3,
    },
    registerBtn: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 200,
        height: 45,
        borderRadius: 8,
        marginTop: 40
    },
})
export default Registerscreen;