import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Tabs } from 'expo-router';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@/src/components/global';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          width: '95%', height: 70, 
          margin: 10, marginBottom: 20,  paddingHorizontal: 20,
          justifyContent: "center",
          borderRadius: 15,
          backgroundColor: colors.fundo2, // cor de fundo da tab
        },

        // tabBarShowLabel: false, // opcional: para esconder os labels das tabs
      }}
    >
      <Tabs.Screen 
        name="Home"
        options={{
          title: "",         
          tabBarLabelStyle: { 
            fontSize: 12, // ajuste o tamanho da fonte aqui
            fontWeight: 'bold', // opcional: para deixar o texto em negrito
          },
          tabBarIcon: ({ size, color, focused }) => {
              return <MaterialCommunityIcons name='home' color={color} size={33} top={10}/>
          },
        }}
        />
      <Tabs.Screen 
        name="Others"
        options={{
          title: "",         
          tabBarLabelStyle: { 
            fontSize: 12, // ajuste o tamanho da fonte aqui
            fontWeight: 'bold', // opcional: para deixar o texto em negrito
          },
          tabBarIcon: ({ size, color, focused }) => {
              return <MaterialCommunityIcons name='book' color={color} size={33} top={10} />
          },
        }}
        />
      <Tabs.Screen 
        name="Account"
        options={{
          title: "",         
          tabBarLabelStyle: { 
            fontSize: 12, // ajuste o tamanho da fonte aqui
            fontWeight: 'bold', // opcional: para deixar o texto em negrito
          },
          tabBarIcon: ({ size, color, focused }) => {
              return <MaterialCommunityIcons name='account' color={color} size={33} top={10} />
          },
        }}
        />
      </Tabs>
      
  );
}