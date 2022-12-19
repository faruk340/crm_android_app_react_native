import React from 'react'
import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Provider, TextInput } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown';
import * as Animatable from 'react-native-animatable';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Pg1 = () => {
    // ======================================Policy Type==================================
    const [isFocusPolicyType, setIsFocusPolicyType] = useState(false);
    const [PolicyTypevalue, setPolicyTypeValue] = useState(null);
    const PolicyTypeDate = [
        { label: ' Comprehensive ', value: '1' },
        { label: ' Liability only ', value: '2' },
        { label: '  Stand Alone OD  ', value: '3' },
        { label: '  Bundle Policy  ', value: '4' },
    ];

    // ======================================Owner Type==================================
    const [isFocusOwnerType, setIsFocusOwnerType] = useState(false);
    const [OwnerTypevalue, setOwnerTypeValue] = useState(null);
    const OwnerTypeDate = [
        { label: ' Individual ', value: '1' },
        { label: ' Company ', value: '2' },
    ];
    const slideOutLeft = {
        from: {
            right: -900
        },
        to: {
            right: 0
        }
    }
    return (
        <Provider>
            <Animatable.View style={styles.container} animation={slideOutLeft} duration={500}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.form_header}>
                        <Text style={{ fontSize: 18, width: "100%", textAlign: "center" }}>Owner Details</Text>
                    </View>
                    <View style={styles.product_form}>
                        <View style={styles.applicationHeader_flex_left_input}>
                            <Dropdown
                                style={[styles.dropdown, isFocusPolicyType && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={PolicyTypeDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusPolicyType ? 'Policy Type' : '...'}
                                value={PolicyTypevalue}
                                onFocus={() => setIsFocusPolicyType(true)}
                                onBlur={() => setIsFocusPolicyType(false)}
                                onChange={item => {
                                    setPolicyTypeValue(item.value);
                                    setIsFocusPolicyType(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusOwnerType && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={OwnerTypeDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusOwnerType ? 'Owner Type' : '...'}
                                value={OwnerTypevalue}
                                onFocus={() => setIsFocusOwnerType(true)}
                                onBlur={() => setIsFocusOwnerType(false)}
                                onChange={item => {
                                    setOwnerTypeValue(item.value);
                                    setIsFocusOwnerType(false);
                                }}
                            />
                        </View>
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="First Name *"
                        />
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Middle Name"
                        />
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Last Name *"
                        />
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Mobile Number *"
                        />
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Email Id *"
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