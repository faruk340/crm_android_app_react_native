import React from 'react'
import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { Provider, TextInput } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown';
import * as Animatable from 'react-native-animatable';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Pg1 = () => {
    const [isFocusVehicleType, setIsFocusVehicleType] = useState(false);
    const [VehicleTypevalue, setVehicleTypeValue] = useState(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [RegistrationDate, setRegistrationDate] = useState(new Date())
    const VehicleTypeDate = [
        { label: 'Two Wheeler', value: '1' },
        { label: ' Two Wheeler Passenger Carrying ', value: '2' },
        { label: 'Private Car', value: '3' },
        { label: ' Goods Carrying Vehicle - Public ', value: '4' },
        { label: ' Goods Carrying Vehicle - Private ', value: '5' },
        { label: 'Taxi', value: '6' },
        { label: 'Bus', value: '7' },
        { label: 'School Bus', value: '8' },
        { label: ' Three Wheeler Goods Carrying - Public ', value: '9' },
        { label: ' Three Wheeler Goods Carrying - Private ', value: '10' },
        { label: ' Three Wheeler PCV ', value: '11' },
        { label: ' E-Rickshaw Goods Carrying Vehicle - Public ', value: '12' },
        { label: ' E-Rickshaw Goods Carrying Vehicle - Private ', value: '13' },
        { label: ' E-Rickshaw Passengers Carrying Vehicle ', value: '14' },
        { label: 'Ambulance', value: '15' },
        { label: 'Trailer', value: '16' },
        { label: ' Trailer and Other Misc D ', value: '17' },
        { label: ' Hearses (Dead Body Carry Vehicle) ', value: '18' },
        { label: ' Tractor - Agriculture ', value: '19' },
        { label: ' Tractor - Commercial ', value: '20' },
        { label: 'Misc D', value: '21' },
    ];

    // ==================================Fuel Type=============================

    const [isFocusFuelType, setIsFocusFuelType] = useState(false);
    const [FuelTypevalue, setFuelTypeValue] = useState(null);
    const FuelTypeDate = [
        { label: ' Diesel ', value: '1' },
        { label: ' Petrol ', value: '1' },
        { label: ' CNG ', value: '1' },
        { label: ' Hybrid ', value: '1' },
        { label: ' Electric ', value: '1' },
    ]

    const slideOutLeft = {
        from: {
            right: -900
        },
        to: {
            right: 0
        }
    }
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
    return (
        <Provider>
            <Animatable.View style={styles.container} animation={slideOutLeft} duration={500}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.form_header}>
                        <Text style={{ fontSize: 18, width: "100%", textAlign: "center" }}>Vehicle Details</Text>
                    </View>
                    <View style={styles.product_form}>
                        <View style={styles.applicationHeader_flex_left_input}>
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
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Vehicle Registration No *"
                        />
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Year Of Manufacturing"
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
                            label="Current IDV *"
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
export default Pg1;