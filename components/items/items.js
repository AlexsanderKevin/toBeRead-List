import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert, } from 'react-native'
import itemStyles from './itemStyles'
import { Ionicons, MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements'

const Item = (props) => {

  const [checked, setChecked] = useState(false)
  
  return (
    <View style={itemStyles.itemList}>
        <CheckBox
          size = {30}
          uncheckedColor = {'#555'}
          checkedColor = {'#fff'}
          checked = {checked}
          onPress = {() => setChecked(!checked)}
        />
        
        <View style ={ itemStyles.itemTextContainer } >
            <View style = {itemStyles.itemTitleContainer}>
              <Text style= { itemStyles.itemTitle } > {props.title} </Text>
              <TouchableOpacity
                onPress = {props.onDelete}
              >
                <MaterialCommunityIcons
                  name = 'delete-forever'
                  size = {24}
                  color = '#555'
                />
              </TouchableOpacity>
            </View>

            {/* Item Description */}
            <View style = {itemStyles.itemDescription} >

              <Text style = {itemStyles.itemDescriptionText} > {props.author} </Text>
              <Text style = {itemStyles.itemDescriptionText} > {props.genre} </Text>

            </View>

        </View> 
    </View>
  )
}

export default Item