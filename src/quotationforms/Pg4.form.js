import React from 'react'
import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Provider, TextInput } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown';
import * as Animatable from 'react-native-animatable';

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
    // =================================Anti Theft Discount===========================
    const [isFocusAntiTheftDiscount, setIsFocusAntiTheftDiscount] = useState(false);
    const [AntiTheftDiscountvalue, setAntiTheftDiscountValue] = useState(null);
    const AntiTheftDiscountDate = [
        { label: 'Yes', value: '1' },
        { label: 'No', value: '2' },
    ];

    // =================================Voluntary Deductible===========================
    const [isFocusVoluntaryDeductible, setIsFocusVoluntaryDeductible] = useState(false);
    const [VoluntaryDeductiblevalue, setVoluntaryDeductibleValue] = useState(null);
    const VoluntaryDeductibleDate = [
        { label: '0', value: '1' },
        { label: '500', value: '2' },
        { label: '750', value: '3' },
        { label: '1000', value: '4' },
        { label: '1500', value: '5' },
        { label: '3000', value: '6' },
    ];
    return (
        <Provider>
            <Animatable.View style={styles.container} animation={slideOutLeft} duration={500}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.form_header}>
                        <Text style={{ fontSize: 18, width: "100%", textAlign: "center" }}>IDV Details</Text>
                    </View>
                    <View style={styles.product_form}>
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="This Year Prefered IDV *"
                        />
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Electrical Accessories IDV"
                        />
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Non-Electrical Accessories IDV *"
                        />
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="CNG IDV *"
                        />
                        <View style={styles.applicationHeader_flex_left_input}>
                            <Dropdown
                                style={[styles.dropdown, isFocusAntiTheftDiscount && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={AntiTheftDiscountDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusAntiTheftDiscount ? 'Anti Theft Discount' : '...'}
                                value={AntiTheftDiscountvalue}
                                onFocus={() => setIsFocusAntiTheftDiscount(true)}
                                onBlur={() => setIsFocusAntiTheftDiscount(false)}
                                onChange={item => {
                                    setAntiTheftDiscountValue(item.value);
                                    setIsFocusAntiTheftDiscount(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusVoluntaryDeductible && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={VoluntaryDeductibleDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusVoluntaryDeductible ? 'Anti Theft Discount' : '...'}
                                value={VoluntaryDeductiblevalue}
                                onFocus={() => setIsFocusVoluntaryDeductible(true)}
                                onBlur={() => setIsFocusVoluntaryDeductible(false)}
                                onChange={item => {
                                    setVoluntaryDeductibleValue(item.value);
                                    setIsFocusVoluntaryDeductible(false);
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