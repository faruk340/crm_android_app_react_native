import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { Provider, Portal, Modal } from 'react-native-paper';

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height
const Generatetab = (props) => {
    return (
        <Provider>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('QuotationscreenStack')}
                >
                    <Text>Quotation</Text>
                </TouchableOpacity>
            </View>
        </Provider>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "#fff",
    },
})
export default Generatetab