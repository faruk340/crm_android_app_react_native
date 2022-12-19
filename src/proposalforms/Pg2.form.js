import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';
import { Provider, TextInput } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Pg2 = () => {
    const slideOutLeft = {
        from: {
            right: -900
        },
        to: {
            right: 0
        }
    }
    // ============================Oener Details=======================
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
    // ============================Gender=======================
    const [isFocusGender, setIsFocusGender] = useState(false);
    const [Gendervalue, setGenderValue] = useState(null);
    const GenderDate = [
        { label: ' Male ', value: '1' },
        { label: ' Female', value: '2' },
        { label: ' Other', value: '3' },
    ];
    // ============================Marital Status=======================
    const [isFocusMaritalStatus, setIsFocusMaritalStatus] = useState(false);
    const [MaritalStatusvalue, setMaritalStatusValue] = useState(null);
    const MaritalStatusDate = [
        { label: 'Single', value: '1' },
        { label: 'Married', value: '2' },
        { label: 'Unknown', value: '3' },
    ];



    return (
        <Provider>
            <Animatable.View style={styles.container} animation={slideOutLeft} duration={500}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.form_header}>
                        <Text style={{ fontSize: 18, textAlign: "center" }}>Owner Details</Text>
                    </View>
                    <View style={styles.product_form}>
                        <View style={styles.applicationHeader_flex_left_input}>
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
                            <Dropdown
                                style={[styles.dropdown, isFocusGender && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={GenderDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusGender ? 'Gender' : '...'}
                                value={Gendervalue}
                                onFocus={() => setIsFocusGender(true)}
                                onBlur={() => setIsFocusGender(false)}
                                onChange={item => {
                                    setGenderValue(item.value);
                                    setIsFocusGender(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusMaritalStatus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={MaritalStatusDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusMaritalStatus ? 'Marital Status' : '...'}
                                value={MaritalStatusvalue}
                                onFocus={() => setIsFocusMaritalStatus(true)}
                                onBlur={() => setIsFocusMaritalStatus(false)}
                                onChange={item => {
                                    setMaritalStatusValue(item.value);
                                    setIsFocusMaritalStatus(false);
                                }}
                            />
                            <TextInput
                                mode="flat"
                                style={styles.input}
                                label="Mobile Number *"
                            />
                            <TextInput
                                mode="flat"
                                style={styles.input}
                                label="Alternate Number"
                            />
                            <TextInput
                                mode="flat"
                                style={styles.input}
                                label="E-mail id"
                            />
                            <TextInput
                                mode="flat"
                                style={styles.input}
                                label="Address Line 1 "
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
    date_time_style: {
        width: "100%"
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
export default Pg2;