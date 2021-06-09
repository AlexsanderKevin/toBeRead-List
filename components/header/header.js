import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import headerStyles from './headerStyles'
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const Header = (props) => {

    return(

        <View style = {headerStyles.header}>
            <Text style = {headerStyles.headerTitle} >{props.title}</Text>

            <TouchableOpacity 
                style = {headerStyles.addButton}
                onPress = {props.onPress}
            >
                
                <Ionicons
                    name = 'add-outline'
                    color = '#fff'
                    size = {30}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Header