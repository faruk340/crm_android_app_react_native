import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Button, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import {
  configureFonts,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dashboardscreen from './src/screens/Dashboardscreen';
import Claiminformationscreen from './src/screens/Claiminformationscreen';
import Claimmisscreen from './src/screens/Claimmisscreen';
import Healthscreen from './src/screens/Healthscreen';
import Motorscreen from './src/screens/Motorscreen';
import Policyscreen from './src/screens/Policyscreen';
import Proposalscreen from './src/screens/Proposalscreen';
import Quotationscreen from './src/screens/Quotationscreen';
import Renewwalsscreen from './src/screens/Renewwalsscreen';
import Reportscreen from './src/screens/Reportscreen';
import Userscreen from './src/screens/Userscreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Loginscreen from './src/screens/Loginscreen';
import Registerscreen from './src/screens/Registerscreen';
import Onboardingscreen from "./src/screens/Onboardingscreen"
import Allquotation from './src/screens/Allquotation';
import { connect } from 'react-redux'
import Allproposals from './src/screens/Allproposals';
import Newpolicy from './src/screens/Newpolicy';
import Generatetab from './src/Tabs/Generatetab';
import Claimtab from './src/Tabs/Claimtab';
import Businesstab from './src/Tabs/Businesstab';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

const DashboardscreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboardscreen"
        component={Dashboardscreen}
        options={{
          title: 'Dashboardscreen',
          headerShown: false //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const QuotationscreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Quotationscreen"
        component={Quotationscreen}
        options={{
          title: 'Quotation',
          headerShown: false //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const ProposalscreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Proposalscreen"
        component={Proposalscreen}
        options={{
          title: 'Proposals',
          headerShown: false //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const PolicyscreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Policyscreen"
        component={Policyscreen}
        options={{
          title: 'Policy',
          headerShown: false //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const ReportscreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Reportscreen"
        component={Reportscreen}
        options={{
          title: 'Report',
          headerShown: false //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const MotorscreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Motorscreen"
        component={Motorscreen}
        options={{
          title: 'Motor',
          headerShown: false //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const HealthscreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Healthscreen"
        component={Healthscreen}
        options={{
          title: 'Health',
          headerShown: false //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const RenewwalsscreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Renewwalsscreen"
        component={Renewwalsscreen}
        options={{
          title: 'Renewwals',
          headerShown: false //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const ClaiminformationscreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Claiminformationscreen"
        component={Claiminformationscreen}
        options={{
          title: 'Claiminformation',
          headerShown: false //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const ClaimmisscreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Claimmisscreen"
        component={Claimmisscreen}
        options={{
          title: 'Claimmis',
          headerShown: false //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const AllquotationStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Allquotation"
        component={Allquotation}
        options={{
          title: 'All Quotation',
          headerShown: false //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const AllproposalsStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Allpropsals"
        component={Allproposals}
        options={{
          title: 'All Proposals',
          headerShown: false //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const NewpolicyStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Newpolicy"
        component={Newpolicy}
        options={{
          title: 'New policy',
          headerShown: false //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const GeneratetabStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Generatetab"
        component={Generatetab}
        options={{
          title: 'Generate',
          headerShown: false //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const CustomDrawer = (props) => {
  const filteredProps = {
    ...props,
    state: {
      ...props.state,
      routeNames: props.state.routeNames.filter(
        // To hide single option
        // (routeName) => routeName !== 'HiddenPage1',
        // To hide multiple options you can add & condition
        (routeName) => {
          routeName !== 'AllquotationStack' && routeName !== 'AllproposalsStack';
        }
      ),
      routes: props.state.routes.filter(
        (route) =>
          route.name !== 'AllquotationStack' && route.name !== 'AllproposalsStack'
      ),
    },
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          backgroundColor: '#0f3cc9',
          marginTop: -5,
          marginBottom: 20,
        }}
      >
        <View>
          <Text style={{ color: "#fff" }}>sanjeet Sah</Text>
          <Text style={{ color: "#fff" }}>sanjeetsah@email.com</Text>
        </View>
        <Image
          source={require('./src/images/blue-user-profile-icon.png')}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
      </View>
      {/* <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 0,
          backgroundColor: '#0f3cc9',
          padding: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <AntDesign style={{ color: "#fff", paddingRight: 10 }} name="login" size={20} color={'#fff'} />
        <Text style={{ color: "#fff", textTransform: "uppercase", fontSize: 16 }}>Log Out</Text>
      </TouchableOpacity> */}
      <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};
const App = (props) => {
  const authenticationValidation = props.data
  const [loginPageOpenState, setLoginPageOpenState] = useState(false)
  const [isFirstLaunched, setIsFirstLaunched] = useState(null)
  useEffect(() => {
    setLoginPageOpenState(authenticationValidation)
  })
  const logOutfun = () => {
  }
  const fontConfig = {
    web: {
      regular: {
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'sans-serif-medium',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'sans-serif-light',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'sans-serif-thin',
        fontWeight: 'normal',
      },
    },
    ios: {
      regular: {
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'sans-serif-medium',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'sans-serif-light',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'sans-serif-thin',
        fontWeight: 'normal',
      },
    },
    android: {
      regular: {
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'sans-serif-medium',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'sans-serif-light',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'sans-serif-thin',
        fontWeight: 'normal',
      },
    }
  };

  const theme = {
    ...DefaultTheme,
    myOwnProperty: true,
    colors: {
      primary: '#3498db',
    },
    animation: {
      scale: 1.0,
    },
    fonts: configureFonts(fontConfig),
  };

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true')
        setIsFirstLaunched(true)
      } else {
        setIsFirstLaunched(false)
      }
    })
  }, [])

  if (isFirstLaunched === null) {
    return null
  } else if (isFirstLaunched === true) {
    return (
      loginPageOpenState ? (
        <PaperProvider theme={theme}>
          <StatusBar
            animated={true}
            backgroundColor="#0f3cc9"
            barStyle="light-content"
          // barStyle={statusBarStyle}
          // showHideTransition={statusBarTransition}
          // hidden={hidden} 
          />
          <NavigationContainer>
            <Tab.Screen name="Home" component={Dashboardscreen} />
            {/* <Tab.Screen name="Quotation" component={Quotationscreen} /> */}
          </NavigationContainer>
        </PaperProvider>
      ) :
        (<PaperProvider theme={theme}>
          <StatusBar
            animated={true}
            backgroundColor="#0f3cc9"
            barStyle="light-content"
          // barStyle={statusBarStyle}
          // showHideTransition={statusBarTransition}
          // hidden={hidden} 
          />
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Onboardingscreen'>
              <Stack.Screen name="Loginscreen" component={Loginscreen}
                options={{
                  title: "Home",
                  headerShown: false
                }}
              />
              <Stack.Screen name="Registerscreen" component={Registerscreen}
                options={{
                  title: "Register",
                  headerShown: false
                }}
              />
              <Stack.Screen name="Onboardingscreen" component={Onboardingscreen}
                options={{
                  title: "Onboardingscreen",
                  headerShown: false
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
        )
    )
  } else {
    return (
      loginPageOpenState ?
        (<PaperProvider theme={theme}>
          <StatusBar
            animated={true}
            backgroundColor="#0f3cc9"
            barStyle="light-content"
          // barStyle={statusBarStyle}
          // showHideTransition={statusBarTransition}
          // hidden={hidden} 
          />
          <NavigationContainer initialRouteName={Dashboardscreen}>
            <Tab.Navigator

              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName
                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'home'
                      : 'home-outline';
                  } else if (route.name === 'Generate') {
                    iconName = focused ? 'ios-document-text' : 'ios-document-text-outline';
                  } else if (route.name === 'Business') {
                    iconName = focused ? 'business' : 'business-outline';
                  }
                  else if (route.name === 'Claim') {
                    iconName = focused ? 'ios-hammer' : 'ios-hammer-outline';
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={20} color={color} />;
                },
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: '#fff',
                tabBarStyle: {
                  backgroundColor: "#0f3cc9",
                }
              })}
            >
              <Tab.Screen name="Home" component={DashboardscreenStack} />
              <Tab.Screen name="Generate" component={GeneratetabStack} />
              <Tab.Screen name="Business" component={Businesstab} />
              <Tab.Screen name="Claim" component={Claimtab} />
            </Tab.Navigator>
          </NavigationContainer>
        </PaperProvider>) :
        (<PaperProvider theme={theme}>
          <StatusBar
            animated={true}
            backgroundColor="#0f3cc9"
            barStyle="light-content"
          // barStyle={statusBarStyle}
          // showHideTransition={statusBarTransition}
          // hidden={hidden} 
          />
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Loginscreen'>
              <Stack.Screen name="Loginscreen" component={Loginscreen}
                options={{
                  title: "Home",
                  headerShown: false
                }}
              />
              <Stack.Screen name="Registerscreen" component={Registerscreen}
                options={{
                  title: "Register",
                  headerShown: false
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>)
    )
  }

};


const mapStateToProps = state => ({
  data: state.authenticationInformation.authenticationData
})

export default connect(mapStateToProps)(App);
