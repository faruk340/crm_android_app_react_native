import React from 'react'
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native'
import { Provider, TextInput } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';



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
    // ============================Policy Type=======================
    const [isFocusPolicyType, setIsFocusPolicyType] = useState(false);
    const [PolicyTypevalue, setPolicyTypeValue] = useState(null);
    const PolicyTypeDate = [
        { label: ' Comprehensive ', value: '1' },
        { label: ' Liability only ', value: '2' },
        { label: '  Stand Alone OD ', value: '3' },
        { label: ' Bundle Policy  ', value: '4' },
    ];
    // ============================Policy Module=======================
    const [isFocusPolicyModule, setIsFocusPolicyModule] = useState(false);
    const [PolicyModulevalue, setPolicyModuleValue] = useState(null);
    const PolicyModuleDate = [
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
        { label: ' Misc D ', value: '21' },
    ];
    // ============================Vehicle Type=======================
    const [isFocusVehicleType, setIsFocusVehicleType] = useState(false);
    const [VehicleTypevalue, setVehicleTypeValue] = useState(null);
    const VehicleTypeDate = [
        { label: 'New', value: '1' },
        { label: 'Roll Over', value: '2' },
        { label: ' Roll Over with Breaking Less than 90 Days ', value: '3' },
        { label: ' Roll Over with Breaking More than 90 Days ', value: '4' },
        { label: 'Used Car', value: '5' },

    ];

    // ============================Previous Policy=======================
    const [isFocusPreviousPolicy, setIsFocusPreviousPolicy] = useState(false);
    const [PreviousPolicyvalue, setPreviousPolicyValue] = useState(null);
    const PreviousPolicyDate = [
        { label: '0', value: '1' },
        { label: '20', value: '2' },
        { label: '25', value: '3' },
        { label: '35', value: '4' },
        { label: '45', value: '5' },
        { label: '50', value: '6' },
        { label: '55', value: '7' },
        { label: '65', value: '8' },

    ];


    return (
        <Provider>
            <Animatable.View style={styles.container} animation={slideOutLeft} duration={500}>
                <View style={styles.form_header}>
                    <Text style={{ fontSize: 18, textAlign: "center" }}>Previous Policy Details</Text>
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
                            style={[styles.dropdown, isFocusPolicyModule && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={PolicyModuleDate}
                            showsVerticalScrollIndicator={false}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocusPolicyModule ? 'Policy Module' : '...'}
                            value={PolicyModulevalue}
                            onFocus={() => setIsFocusPolicyModule(true)}
                            onBlur={() => setIsFocusPolicyModule(false)}
                            onChange={item => {
                                setPolicyModuleValue(item.value);
                                setIsFocusPolicyModule(false);
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
                        <Dropdown
                            style={[styles.dropdown, isFocusPreviousPolicy && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={PreviousPolicyDate}
                            showsVerticalScrollIndicator={false}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocusPreviousPolicy ? 'NCB (%) in Previous Policy' : '...'}
                            value={PreviousPolicyvalue}
                            onFocus={() => setIsFocusPreviousPolicy(true)}
                            onBlur={() => setIsFocusPreviousPolicy(false)}
                            onChange={item => {
                                setPreviousPolicyValue(item.value);
                                setIsFocusPreviousPolicy(false);
                            }}
                        />
                    </View>
                </View>
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
export default Pg2;