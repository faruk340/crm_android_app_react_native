import React from 'react'
import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { Provider, TextInput } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown';
import * as Animatable from 'react-native-animatable';
import DateTimePickerModal from "react-native-modal-datetime-picker";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Pg4 = () => {
    const slideOutLeft = {
        from: {
            right: -900
        },
        to: {
            right: 0
        }
    }
    // =================================Nominee & Current Policy Details===========================
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [RegistrationDate, setRegistrationDate] = useState(new Date())
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        setRegistrationDate(date)

    };
    // =================================Relationship With Nominee===========================
    const [isFocusRelationshipNominee, setIsFocusRelationshipNominee] = useState(false);
    const [RelationshipNomineevalue, setRelationshipNomineeValue] = useState(null);
    const RelationshipNomineeDate = [
        { label: 'Other', value: '1' },
        { label: 'Spouse', value: '2' },
        { label: 'Father', value: '3' },
        { label: 'Mother', value: '4' },
        { label: 'Son', value: '5' },
        { label: 'Daughter', value: '6' },
        { label: 'Brother', value: '7' },
        { label: 'Sister', value: '8' },
    ];

    // =================================Product Type===========================
    const [isFocusProductType, setIsFocusProductType] = useState(false);
    const [ProductTypevalue, setProductTypeValue] = useState(null);
    const ProductTypeDate = [
        { label: 'Two Wheeler', value: '1' },
        { label: ' Two Wheeler Passenger Carrying ', value: '2' },
        { label: ' Goods Carrying Vehicle - Public ', value: '3' },
        { label: ' Goods Carrying Vehicle - Private ', value: '4' },
        { label: 'Taxi', value: '5' },
        { label: 'Bus', value: '6' },
        { label: 'School Bus', value: '7' },
        { label: ' Three Wheeler Goods Carrying - Public ', value: '8' },
        { label: ' Three Wheeler Goods Carrying - Private ', value: '9' },
        { label: ' Three Wheeler PCV ', value: '10' },
        { label: ' E-Rickshaw Goods Carrying Vehicle - Public ', value: '11' },
        { label: ' E-Rickshaw Goods Carrying Vehicle - Private ', value: '12' },
        { label: ' E-Rickshaw Passengers Carrying Vehicle ', value: '13' },
        { label: 'Ambulance', value: '14' },
        { label: 'Trailer', value: '15' },
        { label: ' Trailer and Other Misc D ', value: '16' },
        { label: ' Hearses (Dead Body Carry Vehicle) ', value: '17' },
        { label: ' Tractor - Agriculture ', value: '18' },
        { label: ' Tractor - Commercial ', value: '19' },
        { label: 'Misc D', value: '20' },
    ];
    // =================================Vehicle Type===========================
    const [isFocusVehicleType, setIsFocusVehicleType] = useState(false);
    const [VehicleTypevalue, setVehicleTypeValue] = useState(null);
    const VehicleTypeDate = [
        { label: 'New', value: '1' },
        { label: 'Roll Over', value: '2' },
        { label: ' Roll Over with Breaking Less than 90 Days ', value: '3' },
        { label: ' Roll Over with Breaking More than 90 Days ', value: '4' },
        { label: 'Used Car', value: '5' },
    ];
    return (
        <Provider>
            <Animatable.View style={styles.container} animation={slideOutLeft} duration={500}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.form_header}>
                        <Text style={{ fontSize: 18, width: "100%", textAlign: "center" }}>Nominee & Current Policy Details</Text>
                    </View>
                    <View style={styles.product_form}>
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Nominee Name"
                        />
                        <TouchableOpacity
                            style={styles.date_time_style}
                            onPress={showDatePicker}
                        >
                            <TextInput
                                mode="flat"
                                style={styles.input}
                                label="Registration Date *"
                                value={RegistrationDate.toLocaleDateString()}
                                right={<TextInput.Icon name="calendar" onPress={() => showDatePicker()} />}
                            />
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                        <View style={styles.applicationHeader_flex_left_input}>
                            <Dropdown
                                style={[styles.dropdown, isFocusRelationshipNominee && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={RelationshipNomineeDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusRelationshipNominee ? 'Relationship With Nominee' : '...'}
                                value={RelationshipNomineevalue}
                                onFocus={() => setIsFocusRelationshipNominee(true)}
                                onBlur={() => setIsFocusRelationshipNominee(false)}
                                onChange={item => {
                                    setRelationshipNomineeValue(item.value);
                                    setIsFocusRelationshipNominee(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusProductType && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={ProductTypeDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusProductType ? 'Product Type' : '...'}
                                value={ProductTypevalue}
                                onFocus={() => setIsFocusProductType(true)}
                                onBlur={() => setIsFocusProductType(false)}
                                onChange={item => {
                                    setProductTypeValue(item.value);
                                    setIsFocusProductType(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusVehicleType && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={VehicleTypeDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusVehicleType ? 'Vehicle Type' : '...'}
                                value={VehicleTypevalue}
                                onFocus={() => setIsFocusVehicleType(true)}
                                onBlur={() => setIsFocusVehicleType(false)}
                                onChange={item => {
                                    setVehicleTypeValue(item.value);
                                    setIsFocusVehicleType(false);
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
export default Pg4;