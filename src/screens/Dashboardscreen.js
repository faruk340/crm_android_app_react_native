import * as React from 'react';
import { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text, Image, ScrollView } from 'react-native';
import { Provider, Portal, Modal } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import { Card } from 'react-native-shadow-cards';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import Header from '../components/Header';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const { width } = Dimensions.get('window');
const Dashboardscreen = ({ navigation }) => {
    const [datevalue, setdateValue] = useState(null);
    const [businesstypevalue, setbusinesstypeValue] = useState(null);
    const [isFocusDate, setIsFocusDate] = useState(false);
    const [isFocusBusiness, setIsFocusBusiness] = useState(false);


    const slideOutLeft = {
        from: {
            right: -700
        },
        to: {
            right: 0
        }
    }
    const dataDate = [
        { label: 'Today', value: '1' },
        { label: 'This Week', value: '2' },
        { label: 'Next Week', value: '3' },
        { label: 'Previous Month', value: '4' },
        { label: 'This Month', value: '5' },
        { label: 'Next Month', value: '6' },
    ];
    const businessTypeData = [
        { label: 'Motor', value: '1' },
        { label: 'Health', value: '2' },
    ];
    const colors = [
        {
            business_name: "Daily Business",
            business_title: "Based on Daily Business achieved",
            amount: "0"
        },
        {
            business_name: "Monthly Business",
            business_title: "Based on Monthly Business achieved",
            amount: "24,000"
        },
        {
            business_name: "Winning Rate",
            business_title: "Winning Rate is Based on Monthly Business Target and total Business achieved",
            amount: "0.01 %"
        },
    ];



    return (
        <Provider>
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <Animatable.View style={styles.DashboardBody} animation={slideOutLeft} duration={800}>
                        <View style={styles.applicationHeader_flex}>
                            <View style={styles.applicationHeader_flex_left_input}>
                                <Dropdown
                                    style={[styles.dropdown, isFocusDate && { borderColor: 'blue' }]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={dataDate}
                                    showsVerticalScrollIndicator={false}
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!isFocusDate ? 'Choose Date' : '...'}
                                    value={datevalue}
                                    onFocus={() => setIsFocusDate(true)}
                                    onBlur={() => setIsFocusDate(false)}
                                    onChange={item => {
                                        setdateValue(item.value);
                                        setIsFocusDate(false);
                                    }}
                                    renderLeftIcon={() => (
                                        <Image
                                            style={{ width: 20, height: 20, marginRight: 5 }}
                                            source={require('../images/Date.png')}
                                        />
                                    )}
                                />
                            </View>
                            <View style={styles.applicationHeader_flex_Right_input}>
                                <Dropdown
                                    style={[styles.dropdown, isFocusBusiness && { borderColor: 'blue' }]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    showsVerticalScrollIndicator={false}
                                    iconStyle={styles.iconStyle}
                                    data={businessTypeData}
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!isFocusBusiness ? 'Business Type' : '...'}
                                    value={businesstypevalue}
                                    onFocus={() => setIsFocusBusiness(true)}
                                    onBlur={() => setIsFocusBusiness(false)}
                                    onChange={item => {
                                        setbusinesstypeValue(item.value);
                                        setIsFocusBusiness(false);
                                    }}
                                    renderLeftIcon={() => (
                                        <Image
                                            style={{ width: 20, height: 20, marginRight: 5 }}
                                            source={require('../images/Business_type.png')}
                                        />
                                    )}
                                />
                            </View>
                        </View>
                        <View style={styles.renewal_container}>
                            <View style={styles.renewal_flex_container}>
                                <Card style={styles.renewal_box}>
                                    <Image
                                        style={{ width: 60, height: 60, marginBottom: 5 }}
                                        source={require('../images/renewals.png')}
                                    />
                                    <Text style={{ fontSize: 18, marginBottom: 5 }}>Renwals</Text>
                                    <Text style={{ fontSize: 18, marginBottom: 5 }}>01</Text>
                                    <Card style={styles.shadowCardStyle}>
                                        <TouchableOpacity style={styles.renewal_btn} mode="contained"
                                        >
                                            <MaterialIcons name="keyboard-arrow-right" size={30} color={'#0A2885'} />
                                        </TouchableOpacity>
                                    </Card>
                                </Card>
                                <Card style={styles.renewal_box}>
                                    <Image
                                        style={{ width: 60, height: 60, marginBottom: 5 }}
                                        source={require('../images/business_update.png')}
                                    />
                                    <Text style={{ fontSize: 18, marginBottom: 5 }}>Business</Text>
                                    <Text style={{ fontSize: 18, marginBottom: 5 }}>01</Text>
                                    <Card style={styles.shadowCardStyle}>
                                        <TouchableOpacity style={styles.renewal_btn} mode="contained" onPress={() => console.log('Pressed')}>
                                            <MaterialIcons name="keyboard-arrow-right" size={30} color={'#0A2885'} />
                                        </TouchableOpacity>
                                    </Card>
                                </Card>
                            </View>
                        </View>
                        <View style={styles.Performance_container}>
                            <View style={styles.Performance_flex_Container}>
                                <Card style={styles.Performance_Box}>
                                    <View style={styles.Performance_icon}>
                                        <Image
                                            style={{ width: 25, height: 25, marginBottom: 5, marginRight: 15 }}
                                            source={require('../images/Received.png')}
                                        />
                                    </View>
                                    <View style={styles.Performance_Content}>
                                        <Text style={{ paddingBottom: 5 }}>Commission Received</Text>
                                        <View style={styles.rupee_flex}>
                                            <Image
                                                style={{ width: 25, height: 25, marginBottom: 5, marginRight: 8 }}
                                                source={require('../images/Rupee.png')}
                                            />
                                            <Text>0</Text>
                                        </View>
                                    </View>
                                </Card>
                                <Card style={styles.Performance_Box}>
                                    <View style={styles.Performance_icon}>
                                        <Image
                                            style={{ width: 25, height: 25, marginBottom: 5, marginRight: 15 }}
                                            source={require('../images/pending.png')}
                                        />
                                    </View>
                                    <View style={styles.Performance_Content}>
                                        <Text style={{ paddingBottom: 5 }}>Commission Panding</Text>
                                        <View style={styles.rupee_flex}>
                                            <Image
                                                style={{ width: 25, height: 25, marginBottom: 5, marginRight: 8 }}
                                                source={require('../images/Rupee.png')}
                                            />
                                            <Text>0</Text>
                                        </View>
                                    </View>
                                </Card>
                                <Card style={styles.Performance_Box}>
                                    <View style={styles.Performance_icon}>
                                        <Image
                                            style={{ width: 30, height: 30, marginBottom: 5, marginRight: 15 }}
                                            source={require('../images/Com_hold.png')}
                                        />
                                    </View>
                                    <View style={styles.Performance_Content}>
                                        <Text style={{ paddingBottom: 5 }}>Commission Hold</Text>
                                        <View style={styles.rupee_flex}>
                                            <Image
                                                style={{ width: 25, height: 25, marginBottom: 5, marginRight: 8 }}
                                                source={require('../images/Rupee.png')}
                                            />
                                            <Text>0</Text>
                                        </View>
                                    </View>
                                </Card>
                            </View>
                        </View>
                        <SwiperFlatList
                            autoplay={true}
                            autoplayDelay={5}
                            autoplayLoop={true}
                            autoplayLoopKeepAnimation={true}
                            showPagination={true}
                            paginationStyleItem={{ width: 10, height: 10 }}
                            data={colors}
                            renderItem={({ item }) => (
                                <View style={styles.Statictics_container}>
                                    <Card style={styles.Statictics_container_flex}>
                                        <View style={styles.Statictics_box}>
                                            <Text style={[styles.Statictics_box_content_padding, { fontSize: 20 }]}>{item.business_name}</Text>
                                            <Text style={styles.Statictics_box_content_padding}>{item.business_title}</Text>
                                            <View style={styles.rupee_flex}>
                                                <Image
                                                    style={{ width: 20, height: 20, marginBottom: 5, marginRight: 8 }}
                                                    source={require('../images/gold_rupee.png')}
                                                />
                                                <Text style={{ color: "#fff", fontSize: 20 }}>{item.amount}</Text>
                                            </View>
                                        </View>
                                    </Card>
                                </View>
                            )}
                        />
                    </Animatable.View>
                </ScrollView>
            </View>
        </Provider>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "#fff",
    },
    applicationHeader: {
        // borderWidth: 1,
        // borderColor: "red",
        width: windowWidth,
        backgroundColor: "#0f3cc9",
        paddingLeft: 15,
        paddingRight: 15,
        height: 60,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerRightMenu: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    containerStyle: {
        position: "absolute",
        top: 20,
        left: 0,
        display: "flex",
        width: "100%",
        height: 300,

    },
    company_info_flex: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: "#fff"
    },
    company_info_inner_flex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    company_info_img: {
        width: 25,
        height: 25,
    },
    company_info_box: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
    },
    DashboardBody: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20
    },
    applicationHeader_flex: {
        width: "95%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    applicationHeader_flex_left_input: {
        width: "45%"
    },
    applicationHeader_flex_Right_input: {
        width: "50%"
    },
    // =====================================================================
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 3,
        paddingHorizontal: 8,
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
    renewal_container: {
        marginTop: 20,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    renewal_flex_container: {
        width: "95%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    renewal_box: {
        width: "48%",
        height: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    shadowCardStyle: {
        width: 40,
        height: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
    },
    renewal_btn: {
        marginTop: 10,
        width: 40,
        height: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    Performance_container: {
        width: "100%",
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    Performance_flex_Container: {
        width: "95%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    Performance_Box: {
        width: "100%",
        height: 80,
        display: "flex",
        flexDirection: "row",
        marginBottom: 15,
        padding: 8,
        paddingTop: 12,
        borderRadius: 8
    },
    rupee_flex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    Statictics_container: {
        width: windowWidth,
        flex: 1,
        backgroundColor: 'white',
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    Statictics_box_content_padding: {
        paddingBottom: 20,
        color: "#fff"
    },
    Statictics_container_flex: {
        marginBottom: 8,
        flex: 1,
        marginRight: 10,
        marginLeft: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#0f3cc9",
    },
    Statictics_box: {
        width: windowWidth - 50,
        padding: 8,
        height: 150,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#0f3cc9",
        borderRadius: 8,
    },
});
export default Dashboardscreen;