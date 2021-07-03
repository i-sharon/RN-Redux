import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux';
import { addFood } from './actions/food';

class FoodForm extends Component{

static navigationOptions = {
title:'Home',
headerTintColor:'white',
headerStyle: {
backgroundColor:'blue',
},
};
state = {
food:null
}

render(){
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Shopping List</Text>
      <TextInput
        value={this.state.food}
        placeholder='Enter Item'
        style={styles.foodInput}
        onChangeText={(food) => this.setState({ food })}
      />
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => {this.props.add(this.state.food)
        this.setState({food:null})
        }}>
        <Text style={{ fontSize: 22, color: 'black' }}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => this.props.navigation.navigate('FoodList')}>
        <Text style={{ fontSize: 22, color: 'black' }}>Go to Shopping List</Text>
      </TouchableOpacity>
    </View>
  );
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 48,
    marginBottom: 30,
    marginTop: 16,
    color: 'black'
  },
  foodInput: {
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 1,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  image: {
    width: 120,
    height: 120,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 100,
  }
});

const mapStateToProps = (state) => {
console.log(state);
return{
foods: state.foodReducer.foodList
}
}

const mapDispatchToProps = (dispatch) => {
return{
add: (food) => dispatch(addFood(food)),
}
}

export default connect(mapStateToProps,mapDispatchToProps)(FoodForm);