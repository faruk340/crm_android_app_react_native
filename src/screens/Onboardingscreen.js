import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { Button } from 'react-native-paper';

const Onboardingscreen = ({ navigation }) => {
    const done = ({ ...props }) => {
        <Button
            title="Done"
            color="#000000"
            {...props}
        />
    }
    return (
        <Onboarding
            onDone={() => navigation.navigate('Loginscreen')}
            onSkip={() => navigation.navigate('Loginscreen')}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.onboarding_img} source={require('../images/onboarding_2.png')} />,
                    title: 'Wellcome To CRM',
                    subtitle: 'Thank you for installed our CRM application',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.onboarding_img} source={require('../images/crm_onboarding_lottie.gif')} />,
                    title: 'Onboarding',
                    subtitle: 'Thank you for installed our CRM application',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.onboarding_img} source={require('../images/onboarding_1.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Thank you for installed our CRM application',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.onboarding_img} source={require('../images/onboarding_4.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Thank you for installed our CRM application',
                },
            ]}
        />
    )
}
const styles = StyleSheet.create({
    onboarding_img: {
        width: 280,
        height: 280,
    }
})

export default Onboardingscreen