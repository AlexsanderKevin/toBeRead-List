import {Alert} from 'react-native'

function removeBook(item, list, setBook){
    
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
          onPress: () => setBook(list.filter(books => books !== item))
        }
      ]
    )
  }

  export default removeBook