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
    // ==================================Vehicle Make=============================
    const [isFocusVehicleMake, setIsFocusVehicleMake] = useState(false);
    const [VehicleMakevalue, setVehicleMakeValue] = useState(null);


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

    const VehicleMakeDate = [
        { label: ' APRILIA ', value: '1' },
        { label: '  BAJAJ  ', value: '2' },
        { label: '  BENELLI  ', value: '3' },
        { label: '  BMW  ', value: '4' },
        { label: '  CAGIVA  ', value: '5' },
        { label: '  DUCATI  ', value: '6' },
        { label: '  FAB MOTORS  ', value: '7' },
        { label: '  GLOBAL AUTOMOBILES  ', value: '8' },
        { label: '  HERO MOTOCORP  ', value: '9' },
        { label: '  HONDA  ', value: '10' },
        { label: '  HYOSUNG  ', value: '11' },
        { label: '  INDIAN MOTORCYCLE  ', value: '12' },
        { label: '  KAWASAKI  ', value: '13' },
        { label: '  KINETIC  ', value: '14' },
        { label: '  KTM  ', value: '15' },
        { label: '  LML  ', value: '16' },
        { label: '  MAHINDRA  ', value: '17' },
        { label: '  MONTO  ', value: '18' },
        { label: '  REGAL RAPTOR  ', value: '19' },
        { label: '  ROYAL ENFIELD  ', value: '20' },
        { label: '  SUZUKI  ', value: '21' },
        { label: '  SYM  ', value: '22' },
        { label: '  TERRA MOTORS  ', value: '23' },
        { label: '  TRIUMPH  ', value: '24' },
        { label: '  TVS  ', value: '25' },
        { label: '  UM GLOBAL  ', value: '26' },
        { label: '  VIBGYOR  ', value: '27' },
        { label: '  VICTORY  ', value: '28' },
        { label: '  YAMAHA  ', value: '29' },
        { label: '  YEZDI  ', value: '30' },
        { label: '  JAWA MOTORCYCLE  ', value: '31' },
        { label: '  CLEVELAND CYCLEWERKS  ', value: '32' },
        { label: '  HUSQVARNA  ', value: '33' },
        { label: '  ODYSSE  ', value: '34' },
        { label: '  HERO HONDA  ', value: '35' },
        { label: '  REVOLT  ', value: '36' },
        { label: '  SV MOTORS  ', value: '37' },
        { label: '  ATHER ENERGY  ', value: '38' },
        { label: '  ELECTROTHERM  ', value: '39' },
        { label: '  HERO ELECTRIC  ', value: '40' },
        { label: '  LAMBRETTA  ', value: '41' },
        { label: '  LOHIA AUTO  ', value: '42' },
        { label: '  PIAGGIO  ', value: '43' },
        { label: '  OKINAWA  ', value: '44' },
        { label: '  NDS ECO MOTORS  ', value: '45' },
        { label: '  TUNWAL  ', value: '46' },
        { label: '  RAFT MOTORS  ', value: '47' },
        { label: '  AVAN MOTORS  ', value: '48' },
        { label: '  JITENDRA ELECTRIC VEHICLE  ', value: '49' },
        { label: '  MOBYCY  ', value: '2' },
        { label: '  AVERA ELECTRIC VEHICLE  ', value: '50' },
        { label: '  UMA AUTO INDUSTRIES  ', value: '51' },
        { label: '  MAC  ', value: '52' },
        { label: '  AVON CYCLES LTD  ', value: '53' },
        { label: '  RAFTAAR  ', value: '54' },
        { label: '  YUKIE  ', value: '55' },
        { label: '  SUPER ECO  ', value: '56' },
        { label: '  SBTEK E MOTO PVT LTD  ', value: '57' },
        { label: '  AMPERE  ', value: '58' },
        { label: '  Hester  ', value: '59' },
        { label: '  CRAYON MOTORS PVT LTD  ', value: '60' },
        { label: '  UP TELELINKS LTD  ', value: '61' },
        { label: '  ELECTRECA VEHICLES  ', value: '62' },
        { label: '  UCE  ', value: '63' },
        { label: '  UJAAS ENERGY LTD  ', value: '64' },
        { label: '  NSW E VEHICLES  ', value: '65' },
        { label: '  OMJAY EV LTD  ', value: '66' },
        { label: '  PURE ELECTRIC VEHICLES  ', value: '67' },
        { label: '  MUDIT SR RONGDA  ', value: '68' },
        { label: '  BAHUBALI  ', value: '69' },
        { label: '  EVOLET  ', value: '70' },
        { label: '  MANTRA E BIKES  ', value: '71' },
        { label: '  GOREEN E MOBILITY PVT LTD  ', value: '72' },
        { label: '  KOMAKI  ', value: '73' },
        { label: '  BATTRE  ', value: '74' },
        { label: '  DEXPRESS  ', value: '75' },
        { label: '  TNR  ', value: '76' },
        { label: '  LUNDAFEI  ', value: '77' },
        { label: '  SUPERTECH  ', value: '78' },
        { label: '  GALLANT  ', value: '79' },
        { label: '  JOY E BIKE  ', value: '80' },
        { label: '  SPEEGO  ', value: '81' },
        { label: '  BENLING INDIA  ', value: '82' },
        { label: '  ECO FUEL SYSTEMS PVT LTD  ', value: '83' },
        { label: '  TOXMO ELECTRIC PVT LTD  ', value: '84' },
        { label: '  NEXZU MOBILITY PVT LTD  ', value: '85' },
        { label: '  VIKRAM  ', value: '86' },
        { label: '  OREVA  ', value: '87' },
        { label: '  DMW  ', value: '88' },
        { label: '  SERA ELECTRIC AUTO PVT LTD  ', value: '89' },
        { label: '  BHARATHI BUSINESS MACHINES  ', value: '90' },
        { label: '  GT FORCE  ', value: '91' },
        { label: '  FIADO  ', value: '92' },
        { label: '  FIRST BIKE  ', value: '93' },
        { label: '  THUKRAL ELECTRIC  ', value: '94' },
        { label: '  KYTE  ', value: '95' },
        { label: '  VIERTRIC MOTORS  ', value: '96' },
        { label: '  SAHARA EVOLS  ', value: '97' },
        { label: '  LI IONS ELEKTRIK SOLUTIONS  ', value: '98' },
        { label: '  ATUMMOBILE  ', value: '99' },
        { label: '  BALAJI  ', value: '100' },
        { label: '  PROSSPA E SCOOOTY  ', value: '101' },
        { label: '  FIDATO  ', value: '102' },
        { label: '  DIWA E VEHICLE  ', value: '103' },
        { label: '  EDRIVE  ', value: '104' },
    ];


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
                        <Text style={{ fontSize: 18, width: "100%", textAlign: "center" }}>Vehicle Details</Text>
                    </View>
                    <View style={styles.product_form}>
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Registration Number *"
                        />
                        <View style={styles.applicationHeader_flex_left_input}>
                            <Dropdown
                                style={[styles.dropdown, isFocusVehicleMake && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                search
                                searchPlaceholder="Search..."
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={VehicleMakeDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusVehicleMake ? 'Customer Type' : '...'}
                                value={VehicleMakevalue}
                                onFocus={() => setIsFocusVehicleMake(true)}
                                onBlur={() => setIsFocusVehicleMake(false)}
                                onChange={item => {
                                    setVehicleMakeValue(item.value);
                                    setIsFocusVehicleMake(false);
                                }}
                            />
                            <Dropdown
                                style={[styles.dropdown, isFocusVehicleModel && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={VehicleModelDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusVehicleModel ? 'Vehicle Model' : '...'}
                                value={VehicleModelvalue}
                                onFocus={() => setIsFocusVehicleModel(true)}
                                onBlur={() => setIsFocusVehicleModel(false)}
                                onChange={item => {
                                    setVehicleModelValue(item.value);
                                    setIsFocusVehicleModel(false);
                                }}
                            />
                        </View>
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="CC/GVW *"
                        />
                        <View style={styles.applicationHeader_flex_left_input}>
                            <Dropdown
                                style={[styles.dropdown, isFocusFuelType && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={FuelTypeDate}
                                showsVerticalScrollIndicator={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusFuelType ? 'Fuel Type' : '...'}
                                value={FuelTypevalue}
                                onFocus={() => setIsFocusFuelType(true)}
                                onBlur={() => setIsFocusFuelType(false)}
                                onChange={item => {
                                    setFuelTypeValue(item.value);
                                    setIsFocusFuelType(false);
                                }}
                            />
                        </View>
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Manufacturing Year *"
                        />
                        <TextInput
                            mode="flat"
                            style={styles.input}
                            label="Seating Capacity *"
                        />
                        <TouchableOpacity
                            style={styles.date_time_style}
                            onPress={showDatePicker}
                        >
                            {/* <Image
                                            style={{ width: 20, height: 20, marginRight: 5 }}
                                            source={require('../images/Date.png')}
                                        /> */}
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