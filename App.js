import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { createStackNavigator } from "react-navigation";
import SetBudget from "./modules/budget/SetBudget";

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to BudgetBuddy</Text>
        <Button
          title="Hi Buddy"
          backgroundColor="steelblue"
          onPress={() => this.props.navigation.navigate("SetBudget")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default createStackNavigator(
  {
    Home: WelcomeScreen,
    SetBudget: SetBudget,
  },
  {
    initialRouteName: "Home",
  },
);
