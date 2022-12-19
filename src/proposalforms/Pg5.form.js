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
    // =============================Vehicle Make============================
    const [isFocusVehicleMakel, setIsFocusVehicleMakel] = useState(false);
    const [VehicleMakelvalue, setVehicleMakelValue] = useState(null);
    const VehicleMakelDate = [
        { label: '', value: '1' },
    ];
    // =============================Vehicle Model============================
    const [isFocusVehicleModel, setIsFocusVehicleModel] = useState(false);
    const [VehicleModelvalue, setVehicleModelValue] = useState(null);
    const VehicleModelDate = [
        { label: '', value: '1' },
    ];

    // =============================Fuel Type============================
    const [isFocusFuelType, setIsFocusFuelType] = useState(false);
    const [FuelTypevalue, setFuelTypeValue] = useState(null);
    const FuelTypeDate = [
        { label: 'Diesel', value: '1' },
        { label: 'Petrol', value: '2' },
        { label: 'CNG', value: '2' },
        { label: 'Hybrid', value: '2' },
        { label: 'Electric', value: '2' },
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
                        <Text style={{ fontSize: 18, width: "100%", textAlign: "center" }}>Car Details</Text>
                    </View>
                    <View style={styles.product_form}>
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Registration Number"
                        />
                        <View style={styles.applicationHeader_flex_left_input}>
                            <Dropdown
                                style={[styles.dropdown, isFocusVehicleMakel && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={VehicleMakelDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusVehicleMakel ? 'Vehicle Make' : '...'}
                                value={VehicleMakelvalue}
                                onFocus={() => setIsFocusVehicleMakel(true)}
                                onBlur={() => setIsFocusVehicleMakel(false)}
                                onChange={item => {
                                    setVehicleMakelValue(item.value);
                                    setIsFocusVehicleMakel(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusVehicleModel && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={VehicleModelDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusVehicleModel ? 'Vehicle Model' : '...'}
                                value={VehicleModelvalue}
                                onFocus={() => setIsFocusVehicleModel(true)}
                                onBlur={() => setIsFocusVehicleModel(false)}
                                onChange={item => {
                                    setVehicleModelValue(item.value);
                                    setIsFocusVehicleModel(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusFuelType && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={FuelTypeDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusFuelType ? 'Fuel Type' : '...'}
                                value={FuelTypevalue}
                                onFocus={() => setIsFocusFuelType(true)}
                                onBlur={() => setIsFocusFuelType(false)}
                                onChange={item => {
                                    setFuelTypeValue(item.value);
                                    setIsFocusFuelType(false);
                                }}
                            />
                        </View>
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="CC/GVW"
                        />
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Manufacturing Year"
                        />
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Seating Capacity"
                        />
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