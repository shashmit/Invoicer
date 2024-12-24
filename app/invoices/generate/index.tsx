import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '~/components/Button';
import CustomTextInput from '~/components/CustomTextInput';
import KeyboardAwareScrollView from '~/components/KeyboardAwareScrollView';

export default function GenerateInvoice() {

  return (
    // <SafeAreaView edges={['bottom']} className='p-5 flex-1 bg-white'>

    //   <KeyboardAvoidingView
    //     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //     style={{ flex: 1 }}
    //   >

    //     <ScrollView
    //       keyboardShouldPersistTaps='handled'
    //       contentContainerStyle={{ paddingBottom: 100 }}
    //       showsVerticalScrollIndicator={false}
    //     >
        <KeyboardAwareScrollView>
          <Text className='mb-5 text-2xl font-bold'>Sender Info</Text>
          <CustomTextInput label='Name' placeholder='Enter your name' />
          <CustomTextInput label='Address' placeholder='Enter your Address' multiline />
          <CustomTextInput label='Tax ID' placeholder='Enter your tax ID' />
          <Button title='Next' className='mt-auto' />
        </KeyboardAwareScrollView>
    //</ScrollView>
    //   </KeyboardAvoidingView>

  

    // </SafeAreaView>
  );
}
