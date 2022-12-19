import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Provider, TextInput } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import * as Animatable from 'react-native-animatable';

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
    // =================================Previous Policy Addon==================================
    const [isFocusPolicyAddon, setIsFocusPolicyAddon] = useState(false);
    const [PolicyAddonvalue, setPolicyAddonValue] = useState(null);
    const PolicyAddonDate = [
        { label: 'Yes', value: '1' },
        { label: 'No', value: '2' },
    ];
    // =================================Previous Policy Addon==================================
    const [isFocusZeroDepreciation, setIsFocusZeroDepreciation] = useState(false);
    const [ZeroDepreciationvalue, setZeroDepreciationValue] = useState(null);
    const ZeroDepreciationDate = [
        { label: 'Yes', value: '1' },
        { label: 'No', value: '2' },
    ];
    // =================================RSA==================================
    const [isFocusRSA, setIsFocusRSA] = useState(false);
    const [RSAvalue, setRSAValue] = useState(null);
    const RSADate = [
        { label: 'Yes', value: '1' },
        { label: 'No', value: '2' },
    ];
    // =================================Consumable==================================
    const [isFocusConsumable, setIsFocusConsumable] = useState(false);
    const [Consumablevalue, setConsumableValue] = useState(null);
    const ConsumableDate = [
        { label: 'Yes', value: '1' },
        { label: 'No', value: '2' },
    ];
    // =================================Engine Protector==================================
    const [isFocusEngineProtector, setIsFocusEngineProtector] = useState(false);
    const [EngineProtectorvalue, setEngineProtectorValue] = useState(null);
    const EngineProtectorDate = [
        { label: 'Yes', value: '1' },
        { label: 'No', value: '2' },
    ];
    // =================================Tyre Cover==================================
    const [isFocusTyreCover, setIsFocusTyreCover] = useState(false);
    const [TyreCovervalue, setTyreCoverValue] = useState(null);
    const TyreCoverDate = [
        { label: 'Yes', value: '1' },
        { label: 'No', value: '2' },
    ];
    // =================================NCB Protection==================================
    const [isFocusNCBProtection, setIsFocusNCBProtection] = useState(false);
    const [NCBProtectionvalue, setNCBProtectionValue] = useState(null);
    const NCBProtectionDate = [
        { label: 'Yes', value: '1' },
        { label: 'No', value: '2' },
    ];
    // =================================Return to Invoice==================================
    const [isFocusReturntoInvoice, setIsFocusReturntoInvoice] = useState(false);
    const [ReturntoInvoicevalue, setReturntoInvoiceValue] = useState(null);
    const ReturntoInvoiceDate = [
        { label: 'Yes', value: '1' },
        { label: 'No', value: '2' },
    ];
    return (
        <Provider>
            <Animatable.View style={styles.container} animation={slideOutLeft} duration={500}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.form_header}>
                        <Text style={{ fontSize: 18, width: "100%", textAlign: "center" }}>Addon Details</Text>
                    </View>
                    <View style={styles.product_form}>
                        <View style={styles.applicationHeader_flex_left_input}>
                            <Dropdown
                                style={[styles.dropdown, isFocusPolicyAddon && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={PolicyAddonDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusPolicyAddon ? 'Customer Type' : '...'}
                                value={PolicyAddonvalue}
                                onFocus={() => setIsFocusPolicyAddon(true)}
                                onBlur={() => setIsFocusPolicyAddon(false)}
                                onChange={item => {
                                    setPolicyAddonValue(item.value);
                                    setIsFocusPolicyAddon(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusZeroDepreciation && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={ZeroDepreciationDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusZeroDepreciation ? 'Zero Depreciation' : '...'}
                                value={ZeroDepreciationvalue}
                                onFocus={() => setIsFocusZeroDepreciation(true)}
                                onBlur={() => setIsFocusZeroDepreciation(false)}
                                onChange={item => {
                                    setZeroDepreciationValue(item.value);
                                    setIsFocusZeroDepreciation(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusRSA && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={RSADate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusRSA ? 'RSA' : '...'}
                                value={RSAvalue}
                                onFocus={() => setIsFocusRSA(true)}
                                onBlur={() => setIsFocusRSA(false)}
                                onChange={item => {
                                    setRSAValue(item.value);
                                    setIsFocusRSA(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusConsumable && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={ConsumableDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusConsumable ? 'Consumable' : '...'}
                                value={Consumablevalue}
                                onFocus={() => setIsFocusConsumable(true)}
                                onBlur={() => setIsFocusConsumable(false)}
                                onChange={item => {
                                    setConsumableValue(item.value);
                                    setIsFocusConsumable(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusEngineProtector && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={EngineProtectorDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusEngineProtector ? 'Engine Protector' : '...'}
                                value={EngineProtectorvalue}
                                onFocus={() => setIsFocusEngineProtector(true)}
                                onBlur={() => setIsFocusEngineProtector(false)}
                                onChange={item => {
                                    setEngineProtectorValue(item.value);
                                    setIsFocusEngineProtector(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusTyreCover && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={TyreCoverDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusTyreCover ? 'Tyre Cover' : '...'}
                                value={TyreCovervalue}
                                onFocus={() => setIsFocusTyreCover(true)}
                                onBlur={() => setIsFocusTyreCover(false)}
                                onChange={item => {
                                    setTyreCoverValue(item.value);
                                    setIsFocusTyreCover(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusNCBProtection && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={NCBProtectionDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusNCBProtection ? 'NCB Protection' : '...'}
                                value={NCBProtectionvalue}
                                onFocus={() => setIsFocusNCBProtection(true)}
                                onBlur={() => setIsFocusNCBProtection(false)}
                                onChange={item => {
                                    setNCBProtectionValue(item.value);
                                    setIsFocusNCBProtection(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusReturntoInvoice && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={ReturntoInvoiceDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusReturntoInvoice ? 'Return to Invoice' : '...'}
                                value={ReturntoInvoicevalue}
                                onFocus={() => setIsFocusReturntoInvoice(true)}
                                onBlur={() => setIsFocusReturntoInvoice(false)}
                                onChange={item => {
                                    setReturntoInvoiceValue(item.value);
                                    setIsFocusReturntoInvoice(false);
                                }}
                            />
                            <TextInput
                                multiline={true}
                                mode="flat"
                                style={styles.input}
                                label="Other Addon Requird"
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
export default Pg6;