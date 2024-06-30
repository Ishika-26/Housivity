import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  Icon  from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import {Home, CityExpert, Investors, Profile, Saved} from '../pages/index'


const Tab = createMaterialBottomTabNavigator();

const NavigationLayout = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fe6636"
        inactiveColor="#4f4a50"
        barStyle={{ backgroundColor: 'white' }}
        activeIndicatorStyle = {{backgroundColor: 'none'}}
      >
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Icon name='home' size={25} color={color}/>
            ),
          }}
        />
        <Tab.Screen name="City Expert" component={CityExpert} 
        options={{
            tabBarLabel: 'City Expert',
            tabBarIcon: ({ color }) => (
              <Icon name='people-outline' size={25} color={color}/>
            ),
          }}/>
        <Tab.Screen name="Saved" component={Saved} 
        options={{
            tabBarLabel: 'Saved',
            tabBarIcon: ({ color }) => {
                if(color === "#fe6636"){
                    return(
                        <Icon name='heart' size={25} color={color}/>
                    )
                }
                return(
                    <Icon name='heart-outline' size={25} color={color}/>
                )
            },
          }}/>
        <Tab.Screen name="Investors" component={Investors} 
        options={{
            tabBarLabel: 'Investors',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name='business-center' size={25} color={color}/>
            ),
          }}/>
        <Tab.Screen name="Profile" component={Profile} 
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <EvilIcons name='user' size={30} color={color}/>
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default NavigationLayout

const styles = StyleSheet.create({})