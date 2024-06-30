import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardData = async () => {
    try {
        const response = await fetch(
            'https://api.housivity.com/api/v1/property?city=Gandhinagar&projectType=[%22pgHostel%22]&page=1',
        );
        const json = await response.json();
        
        return json;
    } catch (error) {
        console.error(error);
    }
}

export default CardData
