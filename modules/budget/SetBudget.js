import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button, FormInput, FormLabel } from "react-native-elements";

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
      <View style={styles.container}>
        <FormLabel>Monthly budget UAH</FormLabel>
        <FormInput
          onChangeText={this.onChange}
          keyboardType="numeric"
          value={this.state.budget.toString()}
        />
        <Button
          onPress={() => {}}
          backgroundColor="steelblue"
          raised
          icon={{ name: "done" }}
          title="OK"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 200,
  },
});

export default SetBudget;
