import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/signIn';

const AuthStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name='SignIn' component={SignIn} />
    </AuthStack.Navigator>
);

export default AuthRoutes;
