import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    
    body: {
        flex: 1,
    },
    picker: {
        color: '#fff'
    },
    text: {
        color: '#ccc',
        marginLeft: 10,
        fontWeight: 'bold',
    },
    footerContainer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingTop: 5,
        position: 'absolute',
        top: 15,
        right: 0,
    },
})

export default styles