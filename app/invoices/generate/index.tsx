import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Text } from 'react-native';
import { z } from 'zod';

import { Button } from '~/components/Button';
import CustomTextInput from '~/components/CustomTextInput';
import KeyboardAwareScrollView from '~/components/KeyboardAwareScrollView';

const senderInfoSchema = z.object({
  name: z.string({ required_error: 'Name is required'}).min(1, 'Name is required'),
  address: z.string({ required_error: 'Address is required'}).min(1, 'Address is required'),
  taxId: z.string().optional(),
});

type senderInfo = z.infer<typeof senderInfoSchema>;

export default function GenerateInvoice() {
  const form = useForm<senderInfo>({
    resolver: zodResolver(senderInfoSchema),
  });

  const onSubmit = (data: any) => {
    console.log('All the data has been fetched');
  };

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <Text className="mb-5 text-2xl font-bold">Sender Info</Text>
        <CustomTextInput label="Name" name="name" placeholder="Name" />
        <CustomTextInput label="Address" name="address" multiline placeholder="Address" />
        <CustomTextInput label="Tax ID" name="taxId" placeholder="Tax ID" />
        <Button title="Next" className="mt-auto" onPress={form.handleSubmit(onSubmit)} />
      </FormProvider>
    </KeyboardAwareScrollView>
  );
}
