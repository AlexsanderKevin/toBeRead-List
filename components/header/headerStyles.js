import {StyleSheet} from 'react-native'

const headerStyles = StyleSheet.create({
    header: {
        paddingTop: 50,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: '#000',
        justifyContent: 'center',
    },
})

export default headerStyles