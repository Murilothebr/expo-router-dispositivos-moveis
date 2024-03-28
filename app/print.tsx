import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router';

type ParamList = {
    id: number;
};

export default function screen2() {

    const params = useGlobalSearchParams();
    const id = params.id;

    const router = useRouter();

    function routerReplace() {
        router.replace('/')
    }

    return (
        <View>
            <Stack.Screen
                options={{
                    title: 'não sei o que não sei o que lá',
                }}
            />

            <Text>{id}</Text>

            <Button
                onPress={routerReplace}
                title="vortar"
                color="#841584"
            />
        </View>
    )
}