import React from 'react'
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native'
import { Provider, TextInput } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ScrollView } from 'react-native-gesture-handler';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Pg2 = () => {
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
    const slideOutLeft = {
        from: {
            right: -900
        },
        to: {
            right: 0
        }
    }
    // ============================Insurance Type=======================
    const [isFocusInsuranceType, setIsFocusInsuranceType] = useState(false);
    const [InsuranceTypevalue, setInsuranceTypeValue] = useState(null);
    const InsuranceTypeDate = [
        { label: '  Renew  ', value: '1' },
        { label: '  Used Car  ', value: '2' },
        { label: '   Policy Already Expired ', value: '3' },
        { label: '  New Car   ', value: '4' },
    ];
    // ============================Policy Details=======================
    const [isFocusPolicyDetails, setIsFocusPolicyDetails] = useState(false);
    const [PolicyDetailsvalue, setPolicyDetailsValue] = useState(null);
    const PolicyDetailsDate = [
        { label: ' Package Policy ', value: '1' },
        { label: ' Liability Only ', value: '2' },
        { label: ' OD Cover Only ', value: '3' },
        { label: ' 1 Year OD 3 Year TP ', value: '4' },
        { label: ' 3 Year OD 3 Year TP ', value: '5' },
        { label: ' 1 Year OD 5 Year TP ', value: '6' },
        { label: ' 5 Year OD 5 Year TP ', value: '7' },
    ];
    // ============================Any Claim in Previous Year=======================
    const [isFocusAnyClaim, setIsFocusAnyClaim] = useState(false);
    const [AnyClaimvalue, setAnyClaimValue] = useState(null);
    const AnyClaimDate = [
        { label: 'Yes', value: '1' },
        { label: 'No', value: '2' },

    ];

    // ============================Previous Policy=======================
    const [isFocusPreviousPolicy, setIsFocusPreviousPolicy] = useState(false);
    const [PreviousPolicyvalue, setPreviousPolicyValue] = useState(null);
    const PreviousPolicyDate = [
        { label: '0%', value: '1' },
        { label: '20%', value: '2' },
        { label: '25%', value: '3' },
        { label: '35%', value: '4' },
        { label: '45%', value: '5' },
        { label: '50%', value: '6' },
        { label: '55%', value: '7' },
        { label: '65%', value: '8' },

    ];
    // =========================================Insurance Company Name=================
    const [isFocusInsuranceCompany, setIsFocusInsuranceCompany] = useState(false);
    const [InsuranceCompanyvalue, setInsuranceCompanyValue] = useState(null);
    const InsuranceCompanyDate = [
        { label: ' Acko General Insurance Limited ', value: '1' },
        { label: ' Bajaj Allianz General Insurance Company Limited ', value: '2' },
        { label: ' Bharti Axa General Insurance Company Limited ', value: '3' },
        { label: ' Cholamandalam MS General Insurance Company Ltd ', value: '4' },
        { label: ' DHFL General Insurance Limited ', value: '5' },
        { label: ' Edelweiss General Insurance Company Limited ', value: '6' },
        { label: ' Future Generali India Insurance Company Ltd ', value: '7' },
        { label: ' Go Digit General Insurance Limited ', value: '8' },
        { label: ' HDFC ERGO General Insurance Company Limited ', value: '9' },
        { label: ' ICICI Lombard General Insurance Company Limited ', value: '10' },
        { label: ' Iffco Tokio General Insurance Company Ltd ', value: '11' },
        { label: ' Kotak Mahindra General Insurance Company Ltd ', value: '12' },
        { label: ' Liberty General Insurance Ltd. ', value: '13' },
        { label: ' Magma HDI General Insurance Co. Ltd ', value: '14' },
        { label: ' National Insurance Company Limited ', value: '15' },
        { label: ' Raheja QBE General Insurance Company Limited ', value: '16' },
        { label: ' Reliance General Insurance Co. Ltd. ', value: '17' },
        { label: ' Royal Sundaram General Insurance Co. Limited ', value: '18' },
        { label: ' SBI General Insurance Company Limited ', value: '19' },
        { label: ' Shriram General Insurance Company Limited ', value: '20' },
        { label: ' TATA AIG General Insurance Co. Ltd. ', value: '21' },
        { label: ' The New India Assurance Company Ltd. ', value: '22' },
        { label: ' The Oriental Insurance Company Ltd. ', value: '23' },
        { label: ' United India Insurance Company Limited ', value: '24' },
        { label: ' Universal Sompo General Insurance Co. Ltd. ', value: '25' },
    ];

    return (
        <Provider>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Animatable.View style={styles.container} animation={slideOutLeft} duration={500}>
                    <View style={styles.form_header}>
                        <Text style={{ fontSize: 18, textAlign: "center" }}>Policy Details</Text>
                    </View>
                    <View style={styles.product_form}>
                        <View style={styles.applicationHeader_flex_left_input}>
                            <Dropdown
                                style={[styles.dropdown, isFocusInsuranceType && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={InsuranceTypeDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusInsuranceType ? 'Insurance Type' : '...'}
                                value={InsuranceTypevalue}
                                onFocus={() => setIsFocusInsuranceType(true)}
                                onBlur={() => setIsFocusInsuranceType(false)}
                                onChange={item => {
                                    setInsuranceTypeValue(item.value);
                                    setIsFocusInsuranceType(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusPolicyDetails && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={PolicyDetailsDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusPolicyDetails ? 'Policy Details' : '...'}
                                value={PolicyDetailsvalue}
                                onFocus={() => setIsFocusPolicyDetails(true)}
                                onBlur={() => setIsFocusPolicyDetails(false)}
                                onChange={item => {
                                    setPolicyDetailsValue(item.value);
                                    setIsFocusPolicyDetails(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusAnyClaim && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={AnyClaimDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusAnyClaim ? 'Any Claim in Previous Year' : '...'}
                                value={AnyClaimvalue}
                                onFocus={() => setIsFocusAnyClaim(true)}
                                onBlur={() => setIsFocusAnyClaim(false)}
                                onChange={item => {
                                    setAnyClaimValue(item.value);
                                    setIsFocusAnyClaim(false);
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
                            <Dropdown
                                style={[styles.dropdown, isFocusInsuranceCompany && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={InsuranceCompanyDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusInsuranceCompany ? 'Insurance Company Name' : '...'}
                                value={InsuranceCompanyvalue}
                                onFocus={() => setIsFocusInsuranceCompany(true)}
                                onBlur={() => setIsFocusInsuranceCompany(false)}
                                onChange={item => {
                                    setInsuranceCompanyValue(item.value);
                                    setIsFocusInsuranceCompany(false);
                                }}
                            />
                        </View>
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Lead Name *"
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
                    </View>
                </Animatable.View>
            </ScrollView>
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