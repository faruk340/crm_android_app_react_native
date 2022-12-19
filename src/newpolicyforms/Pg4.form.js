import React from 'react'
import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Provider, TextInput } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown';
import * as Animatable from 'react-native-animatable';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Pg4 = () => {
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

    // ============================Nominee Date=================================
    const [NomineeDateVisibility, setNomineeDateVisibility] = useState(false);
    const [NomineeDate, setNomineeDate] = useState(new Date())
    const showNomineeDate = () => {
        setNomineeDateVisibility(true);
    };

    const hideNomineeDate = () => {
        setNomineeDateVisibility(false);
    };
    const handleNomineeDate = (date) => {
        hideNomineeDate();
        setNomineeDate(date)
    };
    const slideOutLeft = {
        from: {
            right: -900
        },
        to: {
            right: 0
        }
    }
    // =================================Nominee Relationship===========================
    const [isFocusNomineeRelationship, setIsFocusNomineeRelationship] = useState(false);
    const [NomineeRelationshipvalue, setNomineeRelationshipValue] = useState(null);
    const NomineeRelationshipDate = [
        { label: 'Spouse', value: '1' },
        { label: 'Daughter', value: '2' },
        { label: 'Son', value: '2' },
        { label: 'Mother', value: '2' },
        { label: 'Father', value: '2' },
        { label: 'Brother', value: '2' },
        { label: 'Sister', value: '2' },
        { label: 'Other', value: '2' },
    ];
    return (
        <Provider>
            <Animatable.View style={styles.container} animation={slideOutLeft} duration={500}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.form_header}>
                        <Text style={{ fontSize: 18, width: "100%", textAlign: "center" }}>Personal Details</Text>
                    </View>
                    <View style={styles.product_form}>
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="PAN (Optional)"
                        />
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Aadhar No. (Optional)"
                        />
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="GST No. (Optional)"
                        />
                        <TouchableOpacity
                            style={styles.date_time_style}
                            onPress={showDatePicker}
                        >
                            <TextInput
                                mode="flat"
                                style={styles.input}
                                label="Date of Birth *"
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
                                style={[styles.dropdown, isFocusNomineeRelationship && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={NomineeRelationshipDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusNomineeRelationship ? 'Nominee Relationship' : '...'}
                                value={NomineeRelationshipvalue}
                                onFocus={() => setIsFocusNomineeRelationship(true)}
                                onBlur={() => setIsFocusNomineeRelationship(false)}
                                onChange={item => {
                                    setNomineeRelationshipValue(item.value);
                                    setIsFocusNomineeRelationship(false);
                                }}
                            />
                        </View>
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Nominee Name *"
                        />
                        <TouchableOpacity
                            style={styles.date_time_style}
                            onPress={showNomineeDate}
                        >
                            <TextInput
                                mode="flat"
                                style={styles.input}
                                label="Nominee Date of Birth *"
                                value={NomineeDate.toLocaleDateString()}
                                right={<TextInput.Icon name="calendar" onPress={() => showNomineeDate()} />}
                            />
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={NomineeDateVisibility}
                            mode="date"
                            onConfirm={handleNomineeDate}
                            onCancel={hideDatePicker}
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
export default Pg4;