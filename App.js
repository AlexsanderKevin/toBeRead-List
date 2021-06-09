import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from'react'
import {
  Text,
  TouchableOpacity, 
  View, 
  FlatList, 
  TextInput, 
  Alert, 
  ScrollView, 
  SectionList,
  KeyboardAvoidingView
} from 'react-native'

// other libs
import { Ionicons, MaterialIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import Modal from 'react-native-modal'
import { Picker } from '@react-native-picker/picker'
import AsyncStorage from '@react-native-async-storage/async-storage'

// styles
import styles from './mainStyles'
import formStyles from './components/form/formStyles'

// my components
import Header from './components/header/header'
import Item from './components/items/items'
import { Keyboard } from 'react-native';

export default function App() {

  // Modal
  const [modalVisible, setModalVisible] = useState(false)

    // Lista de todos os livros
    const [book, setBook] = useState([])
    const [readedBook, setReadedBook] = useState([])

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    let isValid = title != '' && author != '' && genre != ''

  // counter
  let readedBooks = 0

  function addBook() {

    // validasao
    handleAddBook()
    clearStates()
    setModalVisible(false)
  }

  // Function to clear the states of the items
  function clearStates(){
    setTitle('')
    setAuthor('')
    setGenre('')
  }

  // Function to create the obj and sent to the list
  function handleAddBook(){
    const newBook = {title, author, genre}
    setBook(oldBook => [...oldBook, newBook])
  }

  function removeBook(item){
    
    Alert.alert('REMOVER LIVRO',
      'Tem certeza que deseja remover este livro da sua lista?',
      [
        {
          text: 'Cancelar',
          onPress: () => {return},
          style: 'cancel',
        },
        {
          text: 'Remover',
          onPress: () => setBook(book.filter(books => books !== item))
        }
      ]
    )
  }

  function addReadedBook(item){
    //const readed = item
    //setReadedBook(oldReaded => [...oldReaded, readed])
    Alert.alert(item)
  }

// storaging and loading the list items
  useEffect(() => {
    async function loadData(){
      const book = await AsyncStorage.getItem('book')
      if (book){
        setBook(JSON.parse(book))
      }
    }
    loadData()
  }, [])

  useEffect(() => {
    async function saveData(){
      AsyncStorage.setItem(
        'book',
        JSON.stringify(book)
      )
    }
    saveData()
  }, [book])

  return (
    <View style={styles.container}>
      <StatusBar
        style = 'hidden'
      />
      <View style={ styles.body}>
        <Header 
          title = { 'Todos os livros' } 
          onPress = {() => setModalVisible(true)}
        />

        <FlatList
          data = {book}
          keyExtractor = {(item) => item.title}
          renderItem = {({item}) => (
            <Item
              title = {item.title}
              author = {item.author}
              genre = {item.genre}
              onDelete = {() => removeBook(item)}
            />
          )}
        />
      </View> 

      {/* Form */}
        <Modal
          transparent = {true}
          isVisible = {modalVisible}
          onBackdropPress = {() => setModalVisible(false)}
          onBackButtonPress = {() => setModalVisible(false)}
        >
          
          <View style = {formStyles.centeredView}>
              <View style = {formStyles.formBody}>
                  <View style = {formStyles.form}>
                      {/* Header */}
                      <Text style = {formStyles.title}>Novo Livro</Text>
        
                      {/* Title */}
                      <TextInput
                          style = {formStyles.textInput}
                          placeholder = {'Título'}
                          placeholderTextColor = {'#aaa'}
                          onChangeText = {text => setTitle(text)}
        
                      />
                      {/* Author */}
                      <TextInput
                          style = {formStyles.textInput}
                          placeholder = {'Autor(a)'}
                          placeholderTextColor = {'#aaa'}
                          onChangeText = {text => setAuthor(text)}
        
                      />
                      {/* Genre */}
                      <View style = {formStyles.pickerContainer}>
                          <Picker style = {formStyles.picker}
                            selectedValue = {genre}
                            onValueChange = {(itemValue) => setGenre(itemValue)}
                          >
                              <Picker.Item label = 'Gênero...' value = {null}/>
                              <Picker.Item label = 'Distopia' value = 'Distopia'/>
                              <Picker.Item label = 'Drama' value = 'Drama'/>
                              <Picker.Item label = 'Fantasia' value = 'Fantasia'/>
                              <Picker.Item label = 'Horror' value = 'Horror'/>
                              <Picker.Item label = 'HQ' value = 'HQ'/>
                              <Picker.Item label = 'Não Ficção' value = 'Não Ficção'/>
                              <Picker.Item label = 'Poesia' value = 'Poesia'/>
                              <Picker.Item label = 'Romance' value = 'Romance'/>
                              <Picker.Item label = 'Suspense' value = 'Suspense'/>
                              <Picker.Item label = 'Syfy' value = 'Syfy'/>
                              <Picker.Item label = 'Terror' value = 'Terror'/>
                          </Picker>
                      </View>
                  </View>
                  {/* Buttons */}
                  <View style = {formStyles.buttons}>
                      {/* Cancel */}
                      <TouchableOpacity
                          style = {formStyles.button}
                          onPress = {() => setModalVisible(false)}
                      >
                          <Text style = {formStyles.buttonText}>Cancelar</Text>
                      </TouchableOpacity>
                       {/* Add new book */}
                      <TouchableOpacity
                          style = {formStyles.button}
                          onPress = {() => addBook()}
                          disabled = {!isValid}
                      >
                          <Text style = {formStyles.buttonText}>Adicionar</Text>
                      </TouchableOpacity>
                  </View>
              </View> 

          </View>
        </Modal>

    <View style = {styles.footerContainer}>
      <FontAwesome5
        name = 'book-dead'
        size = {18}
        color = '#ccc'
      />
      <Text style = {styles.text}>{book.length}</Text>
    </View>

    </View>
  );
}