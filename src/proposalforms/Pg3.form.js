import React from 'react'
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Button } from 'react-native';
import { Provider, TextInput } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as Animatable from 'react-native-animatable';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Pg3 = () => {
    const slideOutLeft = {
        from: {
            right: -900
        },
        to: {
            right: 0
        }
    }
    // ==================================State=============================
    const [isFocusState, setIsFocusState] = useState(false);
    const [Statevalue, setStateValue] = useState(null);


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

    const StateDate = [
        {
            "value": "1",
            "label": "Andaman and Nicobar Islands"
        },
        {
            "value": "2",
            "label": "Andhra Pradesh"
        },
        {
            "value": "3",
            "label": "Arunachal Pradesh"
        },
        {
            "value": "4",
            "label": "Assam"
        },
        {
            "value": "5",
            "label": "Bihar"
        },
        {
            "value": "6",
            "label": "Chandigarh"
        },
        {
            "value": "7",
            "label": "Chhattisgarh"
        },
        {
            "value": "8",
            "label": "Dadra and Nagar Haveli"
        },
        {
            "value": "9",
            "label": "Daman and Diu"
        },
        {
            "value": "10",
            "label": "Delhi"
        },
        {
            "value": "11",
            "label": "Goa"
        },
        {
            "value": "12",
            "label": "Gujarat"
        },
        {
            "value": "13",
            "label": "Haryana"
        },
        {
            "value": "14",
            "label": "Himachal Pradesh"
        },
        {
            "value": "15",
            "label": "Jammu and Kashmir"
        },
        {
            "value": "16",
            "label": "Jharkhand"
        },
        {
            "value": "17",
            "label": "Karnataka"
        },
        {
            "value": "18",
            "label": "Kerala"
        },
        {
            "value": "19",
            "label": "Lakshadweep"
        },
        {
            "value": "20",
            "label": "Madhya Pradesh"
        },
        {
            "value": "21",
            "label": "Maharashtra"
        },
        {
            "value": "22",
            "label": "Manipur"
        },
        {
            "value": "23",
            "label": "Meghalaya"
        },
        {
            "value": "24",
            "label": "Mizoram"
        },
        {
            "value": "25",
            "label": "Nagaland"
        },
        {
            "value": "26",
            "label": "Odisha"
        },
        {
            "value": "27",
            "label": "Puducherry"
        },
        {
            "value": "28",
            "label": "Punjab"
        },
        {
            "value": "29",
            "label": "Rajasthan"
        },
        {
            "value": "30",
            "label": "Sikkim"
        },
        {
            "value": "31",
            "label": "Tamil Nadu"
        },
        {
            "value": "32",
            "label": "Telangana"
        },
        {
            "value": "33",
            "label": "Tripura"
        },
        {
            "value": "34",
            "label": "Uttar Pradesh"
        },
        {
            "value": "35",
            "label": "Uttarakhand"
        },
        {
            "value": "36",
            "label": "West Bengal"
        }
    ]


    // ==================================Vehicle Model=============================
    const [isFocusVehicleModel, setIsFocusVehicleModel] = useState(false);
    const [VehicleModelvalue, setVehicleModelValue] = useState(null);
    const VehicleModelDate = [
        { label: ' EXPRESS ', value: '1' },
    ]


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

    const windowWidth = Dimensions.get('window').width;
    return (
        <Provider>
            <Animatable.View style={styles.container} animation={slideOutLeft} duration={500}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.form_header}>
                        <Text style={{ fontSize: 18, width: "100%", textAlign: "center" }}>Owner Details</Text>
                    </View>
                    <View style={styles.product_form}>
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Address Line 2"
                        />
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Landmark"
                        />
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="City"
                        />
                        <View style={styles.applicationHeader_flex_left_input}>
                            <Dropdown
                                style={[styles.dropdown, isFocusState && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                search
                                searchPlaceholder="Search..."
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={StateDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusState ? 'State' : '...'}
                                value={Statevalue}
                                onFocus={() => setIsFocusState(true)}
                                onBlur={() => setIsFocusState(false)}
                                onChange={item => {
                                    setStateValue(item.value);
                                    setIsFocusState(false);
                                }}
                            />
                        </View>
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Pin Code"
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
})
export default Pg3;