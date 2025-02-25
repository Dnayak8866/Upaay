import { TextInput } from 'react-native'

type CustomTextInputProps = {
    placeholder: string;
    secureTextEntry?: boolean;
    value: string;
    onChangeText: (value: string) => void;
}

const CustomTextInput = ({ placeholder, secureTextEntry = false, value, onChangeText }: CustomTextInputProps) => {
    return (
        <TextInput
            placeholder={placeholder}
            className='flex-1 ml-2 text-gray-700 font-poppins'
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
        />
    )
}

export default CustomTextInput