import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Provider, TextInput } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import * as Animatable from 'react-native-animatable';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Pg6 = () => {
    const slideOutLeft = {
        from: {
            right: -900
        },
        to: {
            right: 0
        }
    }
    // ============================Car Details=======================
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
                            label="Passenger Capacity"
                        />
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Engine Number"
                        />
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Chasis Number"
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
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Financer Name"
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
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 3,
        paddingHorizontal: 8,
        marginTop: 15,
        width: "95%"
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
export default Pg6;