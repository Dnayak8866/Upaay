import { Text, TouchableOpacity } from 'react-native'

type CustomButtonProps = {
    onPress: () => void;
    title: string;
    disabled?: boolean;
}
const CustomButton = ({ onPress, title, disabled = false }: CustomButtonProps) => {
    return (
        <TouchableOpacity className="bg-primary py-3 rounded-lg mb-4 mt-6 disabled:bg-green-300" onPress={onPress} disabled={disabled}>
            <Text className="text-center text-white text-lg font-semibold">{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton