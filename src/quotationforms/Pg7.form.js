import React from 'react'
import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Provider, TextInput } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown';
import * as Animatable from 'react-native-animatable';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Pg7 = () => {
    const slideOutLeft = {
        from: {
            right: -900
        },
        to: {
            right: 0
        }
    }
    // =========================Choice 1===============================
    const [isFocusChoice1, setIsFocusChoice1] = useState(false);
    const [Choice1value, setChoice1Value] = useState(null);
    const Choice1Date = [
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
    // =========================Choice 2===============================
    const [isFocusChoice2, setIsFocusChoice2] = useState(false);
    const [Choice2value, setChoice2Value] = useState(null);
    // =========================Choice 3===============================
    const [isFocusChoice3, setIsFocusChoice3] = useState(false);
    const [Choice3value, setChoice3Value] = useState(null);
    return (
        <Provider>
            <Animatable.View style={styles.container} animation={slideOutLeft} duration={500}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.form_header}>
                        <Text style={{ fontSize: 18, width: "100%", textAlign: "center" }}>Preffered Insurance Company</Text>
                    </View>
                    <View style={styles.product_form}>
                        <View style={styles.applicationHeader_flex_left_input}>
                            <Dropdown
                                style={[styles.dropdown, isFocusChoice1 && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={Choice1Date}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusChoice1 ? 'Choice 1' : '...'}
                                value={Choice1value}
                                onFocus={() => setIsFocusChoice1(true)}
                                onBlur={() => setIsFocusChoice1(false)}
                                onChange={item => {
                                    setChoice1Value(item.value);
                                    setIsFocusChoice1(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusChoice2 && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={Choice1Date}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusChoice2 ? 'Choice 2' : '...'}
                                value={Choice2value}
                                onFocus={() => setIsFocusChoice2(true)}
                                onBlur={() => setIsFocusChoice2(false)}
                                onChange={item => {
                                    setChoice2Value(item.value);
                                    setIsFocusChoice2(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusChoice3 && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={Choice1Date}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusChoice3 ? 'Choice 3' : '...'}
                                value={Choice3value}
                                onFocus={() => setIsFocusChoice3(true)}
                                onBlur={() => setIsFocusChoice3(false)}
                                onChange={item => {
                                    setChoice3Value(item.value);
                                    setIsFocusChoice3(false);
                                }}
                            />
                        </View>
                        <TextInput
                            mode="flat"
                            multiline={true}
                            style={styles.input}
                            label="Comments"
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
export default Pg7;