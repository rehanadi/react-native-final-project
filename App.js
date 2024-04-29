import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from "./context/AuthContext";
import RootStackNavigator from "./routes/RootStackNavigator";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
