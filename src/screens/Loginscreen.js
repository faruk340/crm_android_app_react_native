import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, ImageBackground, StatusBar, TouchableOpacity } from "react-native";
import { TextInput, Dialog, Portal, Paragraph, Provider } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { authenticationCheck } from '../../service/actions/actions';
import * as Animatable from 'react-native-animatable';
import CheckBox from '@react-native-community/checkbox';
import AwesomeLoading from 'react-native-awesome-loading';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const fadeInLeft = {
    from: {
        opacity: 0,
    },
    to: {
        opacity: 1,
    },
};

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Loginscreen = (props) => {
    const navigation = props.navigation;
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [passwordVerifyDialog, setPasswordVerifyDialog] = React.useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, SetsecureTextEntry] = useState(true);
    const [iconValidation, setIconValidation] = useState(true);
    const [loading, setloading] = useState(false);


    const [userInfo, setUserInfo] = useState({
        isusername: username,
        ispassword: password,
        isUsernameValid: true,
        isPasswordValid: true,
    })

    const OnHandleUsername = (val) => {
        setUsername(val)
        if (val === "crm") {
            setIconValidation(false)
        } else {
            setIconValidation(true)
        }
    }
    const onHandleValidation = (val) => {
        if (val.length >= 3) {
            setUserInfo({
                ...userInfo,
                isUsernameValid: true
            })
        } else {
            setUserInfo({
                ...userInfo,
                isUsernameValid: false
            })
        }
    }

    const verifyLogin = () => {
        setloading(true)
        setTimeout(
            () => {
                if (username === "crm" && password === "123456") {
                    props.authenticationCheckHandler({ username: username, password: password, authenticationValidation: true })
                    setloading(false)
                } else {
                    setloading(false)
                    setPasswordVerifyDialog(true);
                }
            }
        ), 1000
    }

    return (
        loading ? <AwesomeLoading indicatorId={7} size={100} isActive={true} text="loading" /> :
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#0f3cc9"
                // barStyle={statusBarStyle}
                // showHideTransition={statusBarTransition}
                // hidden={hidden} 
                />
                <ImageBackground style={styles.Textcontainer}
                    source={require('../images/indsac-crm.gif')}
                    resizeMode="cover"
                >
                </ImageBackground>
                <TextInput
                    style={styles.input}
                    label="Username"
                    value={username}
                    onChangeText={text => OnHandleUsername(text)}
                    right={iconValidation ? null : <TextInput.Icon color="green" name="check-circle" />}
                    onEndEditing={(e) => onHandleValidation(e.nativeEvent.text)}
                />

                {
                    userInfo.isUsernameValid ? null
                        :
                        <Animatable.View style={{ width: "95%" }} animation={fadeInLeft} duration={500}>
                            <Text style={styles.validation_style}>Username not valid</Text>
                        </Animatable.View>
                }

                <TextInput
                    style={styles.input}
                    label="Password"
                    value={password}
                    secureTextEntry={secureTextEntry}
                    right={<TextInput.Icon onPress={() => SetsecureTextEntry(!secureTextEntry)} name="eye" />}
                    onChangeText={text => setPassword(text)}
                />
                <View style={styles.checkBoxContainer}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        tintColors={{ true: '#0f3cc9', false: '#000' }}
                    />
                    <Text style={{ color: "#000", }}>Stay logged in</Text>
                </View>
                <TouchableOpacity textColor='#fff' style={[styles.loginBtn, { backgroundColor: toggleCheckBox ? "#0f3cc9" : "grey", color: "#fff" }]}
                    disabled={toggleCheckBox ? false : true} mode="contained"
                    onPress={() => verifyLogin()}
                >
                    <AntDesign style={{ color: toggleCheckBox ? "#fff" : "#000", paddingRight: 10 }} name="login" size={20} color={'#fff'} />
                    <Text
                        style={{ color: toggleCheckBox ? "#fff" : "#000", textTransform: "uppercase" }}
                    >Login With Credential</Text>
                </TouchableOpacity>
                <View style={styles.log_or_rog}>
                    <View style={styles.log_or_rog_1}></View>
                    <Text style={styles.log_or_rog_text}>OR</Text>
                    <View style={styles.log_or_rog_2}></View>
                </View>
                <TouchableOpacity style={[styles.registerBtn, { backgroundColor: "#0f3cc9" }]} mode="contained"
                    onPress={() => navigation.navigate('Registerscreen')}>
                    <FontAwesome style={{ color: "#fff", paddingRight: 10 }} name="registered" size={20} color={'#fff'} />
                    <Text style={{ color: "#fff", textTransform: "uppercase" }}>Register</Text>
                </TouchableOpacity>
                <View style={styles.gosoftwareLogo}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../images/gs_logo.png')}
                    />
                </View>
                <Provider>
                    <Portal>
                        <Dialog visible={passwordVerifyDialog} onDismiss={setPasswordVerifyDialog}>
                            <Dialog.Title>Alert</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph>Your username & password is Wrong
                                    Please Enter the correct username & password
                                </Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button onPress={() => setPasswordVerifyDialog(false)}>Done</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </Provider>
            </View >
    )
}


const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "#fff",
    },
    Textcontainer: {
        position: "relative",
        width: "100%",
        height: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    input: {
        width: '95%',
        backgroundColor: "#fff",
    },
    loginBtn: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        height: 45,
        borderRadius: 8
    },
    registerBtn: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 200,
        height: 45,
        borderRadius: 8
    },
    log_or_rog: {
        position: "relative",
        width: "95%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        marginBottom: 15,
    },
    log_or_rog_1: {
        left: "13%",
        width: "30%",
        position: "absolute",
        borderWidth: 2,
        borderBottomColor: "#ccc",
        borderTopColor: "#fff",
        borderLeftColor: "#fff",
        borderRightColor: "#fff"
    },
    log_or_rog_2: {
        right: "13%",
        width: "30%",
        position: "absolute",
        borderWidth: 1,
        borderBottomColor: "#ccc",
        borderTopColor: "#fff",
        borderLeftColor: "#fff",
        borderRightColor: "#fff"
    },
    checkBoxContainer: {
        marginTop: 10,
        marginBottom: 30,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "95%",
    },
    gosoftwareLogo: {
        flex: 1,
        alignItems: "center",
        height: 90,
    },
    tinyLogo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    validation_style: {
        width: "95%",
        color: "red",
        paddingLeft: 12,
        paddingTop: 5
    }
})


const mapStateToProps = state => ({
    data: state.authenticationInformation
})
const mapDispatchToProps = dispatch => ({
    authenticationCheckHandler: data => dispatch(authenticationCheck(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Loginscreen);
