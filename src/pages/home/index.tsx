import React, { useContext } from "react";
import AuthContext from "../../contexts/auth";

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home: React.FC = () => {
  const { signOut } = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={handleSignOut}
      >
        <Text style={{ fontSize: 20, color: 'white' }}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  btn: {
    marginTop: 50,
    alignItems: "center",
    backgroundColor: "#66627c",
    padding: 10,
    width: 250,
    height: 50,
    borderRadius: 20,

  },

});
export default Home;
