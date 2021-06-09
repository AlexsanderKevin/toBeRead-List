import { StyleSheet } from 'react-native'

const itemStyles = StyleSheet.create({    // Items
    itemList: {
        backgroundColor: '#222',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        alignSelf: 'stretch',
        marginHorizontal: 15,
        paddingRight: 10,
        paddingTop: 7,
        paddingBottom: 5,
        borderBottomColor: '#555',
        borderBottomWidth: 2,
    },

    itemTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    itemTitle: {
        fontSize: 21,
        maxWidth: 220,
        color: '#fff'
    },

    itemTextContainer: {
        flex: 1,
    },
    itemDescription : {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
    },
    itemDescriptionText:{
        color: '#aaa',
        fontSize: 15,
        maxWidth: 200,
    },
    
})

export default itemStyles