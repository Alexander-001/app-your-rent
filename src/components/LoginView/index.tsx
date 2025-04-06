import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface LoginViewProps {
  title: string;
  secondTitle: string;
  description: string;
  onPressLogin: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({
  title,
  secondTitle,
  description,
  onPressLogin,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        <Text style={styles.secondTitle}>{secondTitle}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.8}
          onPress={onPressLogin}
        >
          <Text style={styles.textButton}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginView;
