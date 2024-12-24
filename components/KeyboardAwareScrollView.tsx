import { PropsWithChildren } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function KeyboardAwareScrollView({ children }: PropsWithChildren) {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : undefined}            
        >
            <ScrollView
                keyboardShouldPersistTaps='handled'
                contentContainerStyle={{ flex:1 }}
                showsVerticalScrollIndicator={false}
            >
                <SafeAreaView edges={['bottom']} className='p-5 bg-white' style={{ flex: 1 }}>
                    {children}
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}