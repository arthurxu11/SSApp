import * as React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#24D31B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  danger: {
    flex: 1,
    backgroundColor: '#fc0303',
    alignItems: 'center',
    justifyContent: 'center',
  },
    logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 
})

function HomeScreen({ navigation }) {
  // All API and server stuff, shouldn't change anything in terms of views
  // fetch("http://0.0.0.0/sus")
  // .then(response => response.json())
  // .then((responseJson) => {
  //     if (responseJson['status'] == "Yes") {
  //       navigation.navigate('Details')
  //     }

  // })
  // .catch(error => console.log(error))

  // setInterval(function() {
  //   fetch("http://0.0.0.0/sus")
  //     .then(response => response.json())
  //     .then((responseJson) => {
  //         if (responseJson['status'] == "Yes") {
  //           navigation.navigate('Details')
  //         }

  //     })
  //     .catch(error => console.log(error))
  // }, 10000);


  return (
    <View style={styles.main}>
      <Text>All good :)</Text>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.danger}>
      {/* Can't load an image from the server. If you want to layout a photo, uncomment the block and add an image URI*/}
      {/* <Image
        source={{ uri: "http://0.0.0.0/image" }}
        style={{ width: 200, height: 200 }}
      /> */}

      <Text style={styles.instructions} >
        Hard Hat not detected
      </Text>

      <Button
          title="Acknowledge"
          onPress={
            navigation.goBack()
          }
        // Removed the server part of the button and just made the button go from click -> home
        //   onPress={
        //     () => fetch("http://0.0.0.0/clear").then(response => response.json()).then((responseJson) => {
        //         navigation.goBack()
        //     }).catch(error => console.log(error))
        // }
        />
    </View>
  );
}

const Stack = createStackNavigator();

function App({ navigation }) {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }

export default App;