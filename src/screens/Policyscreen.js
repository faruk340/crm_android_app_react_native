import React, { useState } from 'react';
import { Path, Svg } from 'react-native-svg';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    Image
} from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header';
import { Card } from 'react-native-shadow-cards';
import * as Animatable from 'react-native-animatable';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Policyscreen = (props) => {
    const [isExtended, setIsExtended] = React.useState(true);
    const [loading, setloading] = useState(false);
    const [visible2, setVisible2] = React.useState(false);

    // ================================pdf generator========================

    const createPDF = async () => {
        let options = {
            html: '<h1>PDF TEST</h1>',
            fileName: 'test',
            directory: 'Documents',
        };
        let file = await RNHTMLtoPDF.convert(options)
        // console.log(file.filePath);
        alert(file.filePath);
    }

    const openMenu = () => setVisible2(true);
    const closeMenu = () => setVisible2(false);
    const onScroll = ({ nativeEvent }) => {
        const currentScrollPosition =
            Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

        setIsExtended(currentScrollPosition <= 0);
    };
    const onLoadingFun = React.useCallback(() => {
        setloading(true)
        wait(3000).then(() => setloading(false));
    }, []);
    const slideOutRight = {
        from: {
            right: -900
        },
        to: {
            right: 0
        }
    }
    const zoomIn = {
        0: {
            opacity: 0,
            scale: 0,
        },
        0.5: {
            opacity: 0,
            scale: 0.3,
        },
        1: {
            opacity: 1,
            scale: 1,
        },
    };
    const Notifications = [
        {
            id: 1,
            title: 'Your pizza order placed successfully',
            details: 'Your pizza order to snack corner has been accepted and being processed.'
        },
        {
            id: 2,
            title: 'Your bengali thali order has been delivered',
            details: 'Your bengali thali has been delivered by Delicious Bong Recipe.'
        },
        {
            id: 3,
            title: 'Out for delivery',
            details: 'Bengali thali will reach to you within 30 minutes.'
        },
        {
            id: 4,
            title: 'Your bengali thali order placed successfully',
            details: 'Your bengali thali order to Delicious Bong Recipe has been accepted and being processed.'
        },
        {
            id: 5,
            title: 'Money added to your wallet',
            details: '₹ 1,000/- has been added to your wallet successfully and remaining balance is ₹ 1,150/-'
        },
        {
            id: 6,
            title: 'Add money to your wallet',
            details: 'Only ₹ 150/- is left in your wallet. Add some more amount to place your order quickly.'
        },
        {
            id: 7,
            title: 'Check new Pizza Corner within 1 km',
            details: 'A new Pizza Corner is being loved by more people around you.'
        },
        {
            id: 8,
            title: 'Check new Roll Center within 3 km',
            details: 'A new roll center is being loved by more people around you.'
        },
        {
            id: 9,
            title: 'Check new Crispy Chicken within 3 km',
            details: 'A new Crispy Chicken is being loved by more people around you.'
        },
        {
            id: 10,
            title: 'Check new Snacks Corner within 5 km',
            details: 'A new Snacks Corner is being loved by more people around you.'
        },
    ];

    const [listData, setListData] = useState(
        Notifications.map((NotificationItem, index) => ({
            key: `${index}`,
            title: NotificationItem.title,
            details: NotificationItem.details,
        })),
    );

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const onLeftActionStatusChange = rowKey => {
        console.log('onLeftActionStatusChange', rowKey);
    };

    const onRightActionStatusChange = rowKey => {
        console.log('onRightActionStatusChange', rowKey);
    };

    const onRightAction = rowKey => {
        console.log('onRightAction', rowKey);
    };

    const onLeftAction = rowKey => {
        console.log('onLeftAction', rowKey);
    };

    const VisibleItem = props => {
        const {
            data,
            rowHeightAnimatedValue,
            removeRow,
            leftActionState,
            rightActionState,
        } = props;

        if (rightActionState) {
            Animated.timing(rowHeightAnimatedValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start(() => {
                removeRow();
            });
        }

        return (
            <Animatable.View
                style={[styles.rowFront, { height: rowHeightAnimatedValue }]}>
                <Card style={styles.quotation_Box}>
                    <View style={styles.quotation_img_box}>
                        <Image
                            style={styles.quotation_img}
                            source={require('../images/icici.png')}
                        />
                    </View>
                    <View style={styles.quotation_content_box}>
                        <Text style={[styles.quotatio_Text, { fontSize: 14 }]} numberOfLines={1}>Mr Santosh Kumar</Text>
                        <Text style={styles.quotatio_Text} numberOfLines={1}>2022202302081</Text>
                        <Text style={styles.quotatio_Text} numberOfLines={1}>TATA Marcopolo</Text>
                    </View>
                    <View>
                        <Text style={styles.title} numberOfLines={1}>₹ 39982</Text>
                    </View>
                </Card>
            </Animatable.View>
        );
    };

    const renderItem = (data, rowMap) => {
        const rowHeightAnimatedValue = new Animated.Value(60);

        return (
            <VisibleItem
                data={data}
                rowHeightAnimatedValue={rowHeightAnimatedValue}
                removeRow={() => deleteRow(rowMap, data.item.key)}
            />
        );
    };

    const HiddenItemWithActions = props => {
        const {
            swipeAnimatedValue,
            leftActionActivated,
            rightActionActivated,
            rowActionAnimatedValue,
            rowHeightAnimatedValue,
            onClose,
            onDelete,
        } = props;

        if (rightActionActivated) {
            Animated.spring(rowActionAnimatedValue, {
                toValue: 500,
                useNativeDriver: false
            }).start();
        } else {
            Animated.spring(rowActionAnimatedValue, {
                toValue: 75,
                useNativeDriver: false
            }).start();
        }

        return (
            <Animated.View style={[styles.rowBack, { height: rowHeightAnimatedValue }]}>
                <Text>Left</Text>
                {!leftActionActivated && (
                    <TouchableOpacity
                        style={[styles.backRightBtn, styles.backRightBtnLeft]}
                        onPress={onClose}>
                        <MaterialCommunityIcons
                            name="close-circle-outline"
                            size={25}
                            style={styles.trash}
                            color="#fff"
                        />
                    </TouchableOpacity>
                )}
                {!leftActionActivated && (
                    <Animated.View
                        style={[
                            styles.backRightBtn,
                            styles.backRightBtnRight,
                            {
                                flex: 1,
                                width: rowActionAnimatedValue,
                            },
                        ]}>
                        <TouchableOpacity
                            style={[styles.backRightBtn, styles.backRightBtnRight]}
                            onPress={onDelete}>
                            <Animated.View
                                style={[
                                    styles.trash,
                                    {
                                        transform: [
                                            {
                                                scale: swipeAnimatedValue.interpolate({
                                                    inputRange: [-90, -45],
                                                    outputRange: [1, 0],
                                                    extrapolate: 'clamp',
                                                }),
                                            },
                                        ],
                                    },
                                ]}>
                                <MaterialCommunityIcons
                                    name="trash-can-outline"
                                    size={25}
                                    color="#fff"
                                />
                            </Animated.View>
                        </TouchableOpacity>
                    </Animated.View>
                )}
            </Animated.View>
        );
    };

    const renderHiddenItem = (data, rowMap) => {
        const rowActionAnimatedValue = new Animated.Value(75);
        const rowHeightAnimatedValue = new Animated.Value(60);

        return (
            <HiddenItemWithActions
                data={data}
                rowMap={rowMap}
                rowActionAnimatedValue={rowActionAnimatedValue}
                rowHeightAnimatedValue={rowHeightAnimatedValue}
                onClose={() => closeRow(rowMap, data.item.key)}
                onDelete={() => deleteRow(rowMap, data.item.key)}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Animatable.View animation={zoomIn}>
                <Header
                    navigation={props.navigation}
                    formName=""
                    create=""
                    screenName="allpolicy"
                />
                <Text style={[styles.header_text, { textTransform: "uppercase" }]}>Your all Policy is here</Text>
                <View style={styles.header_flex_btn}>
                    <TouchableOpacity style={styles.header_btn}
                        onPress={createPDF}
                    >
                        <View style={styles.header_btn_icon}>
                            <MaterialCommunityIcons style={{ paddingBottom: 5 }} name="database-export-outline" size={20} color={'#fff'} />
                        </View>
                        <Text style={{ color: "#fff" }}>export</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.header_btn}
                        onPress={onLoadingFun}
                    >
                        <View style={styles.header_btn_icon}>
                            <EvilIcons style={{ paddingBottom: 5 }} name="refresh" size={30} color={'#fff'} />
                        </View>
                        <Text style={{ color: "#fff" }}>refresh</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.header_btn}
                    >
                        <View style={styles.header_btn_icon}>
                            <AntDesign style={{ paddingBottom: 5 }} name="filter" size={20} color={'#fff'} />
                        </View>
                        <Text style={{ color: "#fff" }}>filter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.header_btn}
                        onPress={() => props.navigation.navigate('NewpolicyStack')}
                    >
                        <View style={styles.header_btn_icon}>
                            <Ionicons style={{ paddingBottom: 5 }} name="add" size={20} color={'#fff'} />
                        </View>
                        <Text style={{ color: "#fff" }}>add new</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.topSvg}>
                    <Svg
                        width={windowWidth + 10}
                        height={90}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="10 10 1440 300"
                    >
                        <Path fill="#0f3cc9" fill-opacity="1" d="M0,160L120,165.3C240,171,480,181,720,160C960,139,1200,85,1320,58.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></Path>
                    </Svg>
                </View>
            </Animatable.View>
            <StatusBar barStyle="dark-content" />
            {/* <StatusBar backgroundColor="#FF6347" barStyle="light-content"/> */}
            {
                loading ?
                    <View style={styles.loading_container}>
                        <Image
                            style={styles.loadinf_gif}
                            source={require('../images/loading_7.gif')}
                        />
                    </View> :
                    <Animatable.View animation={slideOutRight}>
                        <SwipeListView
                            onScroll={onScroll}
                            showsVerticalScrollIndicator={false}
                            style={{ marginTop: 50, marginBottom: 100, height: 300, width: "95%" }}
                            data={listData}
                            renderItem={renderItem}
                            renderHiddenItem={renderHiddenItem}
                            leftOpenValue={75}
                            rightOpenValue={-158}
                            disableRightSwipe
                            onRowDidOpen={onRowDidOpen}
                            leftActivationValue={100}
                            rightActivationValue={-220}
                            leftActionValue={0}
                            rightActionValue={-500}
                            onLeftAction={onLeftAction}
                            onRightAction={onRightAction}
                            onLeftActionStatusChange={onLeftActionStatusChange}
                            onRightActionStatusChange={onRightActionStatusChange}
                        />
                        {
                            isExtended &&
                            <Animatable.View style={styles.fabStylebtn} animation={zoomIn}>
                                <TouchableOpacity style={styles.fabStylebtnInner}
                                    onPress={() => props.navigation.navigate('NewpolicyStack')}
                                >
                                    <Feather name="plus" size={30} color={'#fff'} />
                                </TouchableOpacity>
                            </Animatable.View>
                        }
                    </Animatable.View>
            }
        </View>
    );
};

export default Policyscreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "#fff",
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 105,
        margin: 5,
        marginBottom: 50,
    },
    rowFrontVisible: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 60,
        padding: 10,
        marginBottom: 15,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        width: "95%",
        height: 120,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        margin: 5,
        borderRadius: 5,
    },
    backRightBtn: {
        alignItems: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        paddingRight: 17,
    },
    backRightBtnLeft: {
        backgroundColor: '#1f65ff',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    trash: {
        height: 25,
        width: 25,
        marginRight: 7,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#666',
    },
    details: {
        fontSize: 12,
        color: '#999',
    },
    header_text: {
        backgroundColor: "#0f3cc9",
        color: "#fff",
        width: windowWidth,
        textAlign: "center",
        fontSize: 18,
        paddingTop: 15,
    },
    header_flex_btn: {
        backgroundColor: "#0f3cc9",
        width: windowWidth,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 30
    },
    header_btn: {
        width: 65,
        borderRadius: 100,
        height: 65,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    fabStylebtn: {
        position: "absolute",
        bottom: 230,
        right: 14,
        zIndex: 9999,
        backgroundColor: "#0f3cc9",
        borderRadius: 100,
    },
    fabStylebtnInner: {
        width: 70,
        height: 70,
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    topSvg: {
        width: windowWidth,
        height: windowHeight - 800,
        backgroundColor: "#0f3cc9",
    },
    quotation_Flex: {
        width: "95%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    quotation_Box: {
        width: "100%",
        height: 105,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        marginBottom: 15,
        borderWidth: 5,
        borderLeftColor: "#0f3cc9",
        borderRightColor: "#FFF",
        borderTopColor: "#FFF",
        borderBottomColor: "#FFF",
    },
    quotation_img: {
        width: 80,
        height: 70,
        resizeMode: "stretch"
    },
    quotation_img_box: {
        width: "30%",
    },
    quotation_content_box: {
        width: "55%",
    },
    quotatio_Text: {
        padding: 3,
        fontSize: 12
    },
    loading_container: {
        width: windowWidth,
        height: windowHeight - 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    loadinf_gif: {
        width: 200,
        height: 200
    }
});