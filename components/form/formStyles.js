import {StyleSheet} from 'react-native'

const formStyles = StyleSheet.create ({
    
    centeredView: {
        flex: 1,
        // alignContent: 'center',
        justifyContent: 'center'
    },
    formBody: {
        backgroundColor: '#222',
        alignSelf: 'center',
        paddingBottom: 10,
        alignContent: 'center',
        justifyContent: 'center',
    },
    form: {
        margin: '10%',
        marginBottom: 0
    },

    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    textInput: {
        backgroundColor: '#444',
        borderBottomWidth: 1,
        borderColor: '#aaa',
        color: '#fff',
        width: 270,
        height: 40,
        paddingHorizontal: 15,
        fontSize: 20,
        marginBottom: 20,
    },

    // Picker
    pickerContainer: {
        borderBottomWidth: 1,
        borderColor: '#aaa',
        backgroundColor: '#333',
        width: 140,
        height: 40,
        marginTop: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    picker: {
        color: '#fff',
        width: 140,
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 20,
        margin: 10,
    },

    // buttons
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: '#fff',
        marginTop: 30,
    },
    button: {
        height: 40,
        paddingHorizontal: 40,
        marginTop: 10,
        borderRadius: 20,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default formStyles