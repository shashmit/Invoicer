// import { useController } from 'react-hook-form';
// import { View, Text, TextInput, TextInputProps } from 'react-native';

// type CustomTextInputProps = {
//   label: string;
//   name: string;
// } & TextInputProps;

// export default function CustomTextInput({ label, name, ...props }: CustomTextInputProps) {
//   const {
//     field: { onChange, onBlur, value },
//     fieldState: { error },
//   } = useController({ name });

//   return (
//     <View className="gap-1">
//       <Text className="text-lg"> {label} </Text>
//       <TextInput
//         {...props}
//         className={`rounded border border-gray-300 p-4 ${props.className}`}
//         value={value}
//         onBlur={onBlur}
//         onChangeText={onChange}
//       />
//       <Text className="text-sm text-red-500"> {error?.message} </Text>
//     </View>
//   );
// }
