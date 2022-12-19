import React from 'react'
import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Provider, TextInput } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown';
import * as Animatable from 'react-native-animatable';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Pg5 = () => {
    const slideOutLeft = {
        from: {
            right: -900
        },
        to: {
            right: 0
        }
    }
    // =============================Owner Driver============================
    const [isFocusOwnerDriver, setIsFocusOwnerDriver] = useState(false);
    const [OwnerDrivervalue, setOwnerDriverValue] = useState(null);
    const OwnerDriverDate = [
        { label: 'yes', value: '1' },
        { label: 'No', value: '2' },
    ];

    // =============================PA Cover to Unnamed Passengers============================
    const [isFocusUnnamedPassengers, setIsFocusUnnamedPassengers] = useState(false);
    const [UnnamedPassengersvalue, setUnnamedPassengersValue] = useState(null);
    const UnnamedPassengersDate = [
        { label: 'yes', value: '1' },
        { label: 'No', value: '2' },
    ];
    // =============================Geographical Extenstion============================
    const [isFocusGeographicalExtenstion, setIsFocusGeographicalExtenstion] = useState(false);
    const [GeographicalExtenstionvalue, setGeographicalExtenstionValue] = useState(null);
    const GeographicalExtenstionDate = [
        { label: 'yes', value: '1' },
        { label: 'No', value: '2' },
    ];
    // =============================Restricated TPPD============================
    const [isFocusRestricatedTPPD, setIsFocusRestricatedTPPD] = useState(false);
    const [RestricatedTPPDvalue, setRestricatedTPPDValue] = useState(null);
    const RestricatedTPPDDate = [
        { label: 'yes', value: '1' },
        { label: 'No', value: '2' },
    ];
    return (
        <Provider>
            <Animatable.View style={styles.container} animation={slideOutLeft} duration={500}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.form_header}>
                        <Text style={{ fontSize: 18, width: "100%", textAlign: "center" }}>Third Party Details</Text>
                    </View>
                    <View style={styles.product_form}>
                        <View style={styles.applicationHeader_flex_left_input}>
                            <Dropdown
                                style={[styles.dropdown, isFocusOwnerDriver && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={OwnerDriverDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusOwnerDriver ? 'Owner Driver' : '...'}
                                value={OwnerDrivervalue}
                                onFocus={() => setIsFocusOwnerDriver(true)}
                                onBlur={() => setIsFocusOwnerDriver(false)}
                                onChange={item => {
                                    setOwnerDriverValue(item.value);
                                    setIsFocusOwnerDriver(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusUnnamedPassengers && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={UnnamedPassengersDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusUnnamedPassengers ? 'PA Cover to Unnamed Passengers' : '...'}
                                value={UnnamedPassengersvalue}
                                onFocus={() => setIsFocusUnnamedPassengers(true)}
                                onBlur={() => setIsFocusUnnamedPassengers(false)}
                                onChange={item => {
                                    setUnnamedPassengersValue(item.value);
                                    setIsFocusUnnamedPassengers(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusGeographicalExtenstion && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={GeographicalExtenstionDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusGeographicalExtenstion ? 'Geographical Extenstion' : '...'}
                                value={GeographicalExtenstionvalue}
                                onFocus={() => setIsFocusGeographicalExtenstion(true)}
                                onBlur={() => setIsFocusGeographicalExtenstion(false)}
                                onChange={item => {
                                    setGeographicalExtenstionValue(item.value);
                                    setIsFocusGeographicalExtenstion(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusRestricatedTPPD && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={RestricatedTPPDDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusRestricatedTPPD ? 'Restricated TPPD' : '...'}
                                value={RestricatedTPPDvalue}
                                onFocus={() => setIsFocusRestricatedTPPD(true)}
                                onBlur={() => setIsFocusRestricatedTPPD(false)}
                                onChange={item => {
                                    setRestricatedTPPDValue(item.value);
                                    setIsFocusRestricatedTPPD(false);
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </Animatable.View>
        </Provider>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: "center",
        width: windowWidth,
    },
    form_header: {
        marginTop: 20,
        width: "95%",
    },
    product_form: {
        width: windowWidth,
    },
    input: {
        marginTop: 15,
        width: "95%",
        backgroundColor: "#fff",
        alignSelf: "center"
    },
    // =====================================================================
    dropdown: {
        height: 50,
        borderWidth: 1,
        borderRadius: 3,
        paddingHorizontal: 8,
        marginTop: 15,
        width: "95%",
        borderBottomColor: "gray",
        borderTopColor: "#fff",
        borderLeftColor: "#fff",
        borderRightColor: "#fff",
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    applicationHeader_flex_left_input: {
        width: windowWidth,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
    // =========================
})
export default Pg5;