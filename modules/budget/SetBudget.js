import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";

class SetBudget extends Component {
  constructor() {
    super();
    this.state = {
      budget: 10000,
    };
  }

  onChange = text => {
    this.setState({
      budget: Number(text),
    });
  };

  render() {
    return (
      <View>
        <Text>Please set you monthly budget</Text>
        <TextInput style={{ width: 70 }}
          keyboardType="numeric"
          onChangeText={this.onChange}
          value={this.state.budget.toString()}
          maxLength={6}
        />
        <Text>UAH</Text>
      </View>
    );
  }
}

export default SetBudget;
