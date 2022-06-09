import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../services/auth';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<object | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = await AsyncStorage.getItem('@storage_user');
            const storagedToken = await AsyncStorage.getItem('@storage_token');

            if (storagedUser && storagedToken) {
                setUser(JSON.parse(storagedUser));
                setLoading(false);

            }
        }
        loadStorageData();
    }, []);

    async function signIn() {
        const response = await auth.signIn();

        setUser(response.user);

        await AsyncStorage.setItem('@storage_user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@storage_token', response.token);

    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
