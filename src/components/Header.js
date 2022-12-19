import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, StatusBar } from 'react-native'
import { Provider, Portal, Modal } from 'react-native-paper';
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
const windowHeight = Dimensions.get('window').height;
const { width } = Dimensions.get('window');
const Header = (props) => {
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const slideOutLeft = {
        from: {
            right: -700
        },
        to: {
            right: 0
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#0f3cc9"
                barStyle="light-content"
            // barStyle={statusBarStyle}
            // showHideTransition={statusBarTransition}
            // hidden={hidden} 
            />
            <View style={styles.applicationHeader}>
                {
                    props.screenName === "allQuot" ?
                        <TouchableOpacity
                            style={styles.headerLeftMenu}
                            onPress={() => props.navigation.navigate('Quotationscreen')}
                        >
                            <AntDesign name="arrowleft" size={30} color={'#fff'} />
                            <Text style={{ color: "#fff", paddingLeft: 10, fontSize: 18 }}>{props.formName}</Text>
                        </TouchableOpacity>
                        : props.screenName === "allpropo" ?
                            <TouchableOpacity
                                style={styles.headerLeftMenu}
                                onPress={() => props.navigation.navigate('Proposalscreen')}
                            >
                                <AntDesign name="arrowleft" size={30} color={'#fff'} />
                                <Text style={{ color: "#fff", paddingLeft: 10, fontSize: 18 }}>{props.formName}</Text>
                            </TouchableOpacity>
                            : props.screenName === "allpolicy" ?
                                <TouchableOpacity
                                    style={styles.headerLeftMenu}
                                    onPress={() => props.navigation.navigate('Dashboardscreen')}
                                >
                                    <AntDesign name="arrowleft" size={30} color={'#fff'} />
                                    <Text style={{ color: "#fff", paddingLeft: 10, fontSize: 18 }}>{props.formName}</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity
                                    style={styles.headerLeftMenu}
                                    onPress={() => props.navigation.toggleDrawer()}
                                >
                                    <Feather name="menu" size={30} color={'#fff'} />
                                    <Text style={{ color: "#fff", paddingLeft: 10, fontSize: 18 }}>{props.formName}</Text>
                                </TouchableOpacity>
                }
                <TouchableOpacity style={styles.headerRightMenu}
                    // onPress={showModal}
                    // onPress={() => props.navigation.navigate('AllquotationStack')}
                    onPress={() => {
                        props.formName == undefined ? showModal()
                            : props.formName === "Create Quotatation" ? props.navigation.navigate('AllquotationStack')
                                : props.formName === "Create Proposal" ? props.navigation.navigate('AllproposalsStack')
                                    : props.formName === "Policy" ? props.navigation.navigate('Policyscreen')
                                        : null
                    }}
                >
                    {/* <Text style={{ color: "#fff" }}>Company Info</Text> */}
                    <Text style={{ color: "#fff" }}>{props.create}</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={30} color={'#fff'} />
                </TouchableOpacity>
            </View>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
                    <Animatable.View style={styles.company_info_flex} animation={slideOutLeft} duration={500}>
                        <TouchableOpacity style={styles.company_info_box}>
                            <Image
                                style={styles.company_info_img}
                                source={require('../images/company_detail.png')}
                            />
                            <Text style={{ textTransform: "uppercase", paddingLeft: 10 }}>Company Details</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.company_info_box}>
                            <Image
                                style={styles.company_info_img}
                                source={require('../images/garage.png')}
                            />
                            <Text style={{ textTransform: "uppercase", paddingLeft: 10 }}>Cashless garage</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.company_info_box}>
                            <Image
                                style={styles.company_info_img}
                                source={require('../images/claim_form.png')}
                            />
                            <Text style={{ textTransform: "uppercase", paddingLeft: 10 }}>Claim Form</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.company_info_box}>
                            <Image
                                style={styles.company_info_img}
                                source={require('../images/irda.png')}
                            />
                            <Text style={{ textTransform: "uppercase", paddingLeft: 10 }}>Irda</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </Modal>
            </Portal>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row"
    },
    containerStyle: {
        position: "absolute",
        top: 29,
        left: 0,
        display: "flex",
        width: "100%",
        height: 300,

    },
    applicationHeader: {
        // borderWidth: 1,
        // borderColor: "red",
        width: "100%",
        backgroundColor: "#0f3cc9",
        paddingLeft: 15,
        paddingRight: 15,
        height: 60,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerRightMenu: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    headerLeftMenu: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    applicationHeader_flex: {
        width: "95%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    applicationHeader_flex_left_input: {
        width: "45%"
    },
    applicationHeader_flex_Right_input: {
        width: "50%"
    },
    company_info_flex: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: "#fff"
    },
    company_info_inner_flex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    company_info_img: {
        width: 25,
        height: 25,
    },
    company_info_box: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
    },
})
export default Header