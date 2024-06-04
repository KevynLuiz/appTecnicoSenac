import { Button, Surface, useTheme } from "react-native-paper";
import { styles } from "../../config/styles";

export default function SettingScreen() {
    const { toggleTheme, isDarkTheme } = useTheme();

    return (
        <Surface
            style={styles.container}
        >
            <Text>Configurações do Crazy App</Text>
            <Button onPress={toggleTheme}>trocaTema</Button>
        </Surface>
    )
}