import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AuthContext from "../../contexts/auth";


const SignIn: React.FC = () => {
    const { signed, user, signIn } = useContext(AuthContext);

    console.log(signed);
    console.log(user);

    function handleSigIn() {
        signIn();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}> LOGIN</Text>

        
            <TouchableOpacity
                style={styles.btn}
                onPress={handleSigIn}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContext: 'center',
        alignItems: 'center',

    },
    text: {
        marginTop: 60,
        fontSize: 30
    },
    btn: {
        marginTop: 50,
        alignItems: "center",
        backgroundColor: "#66627c",
        padding: 10,
        width: 250,
        height: 50,
        borderRadius: 20,
    }
});

export default SignIn;
