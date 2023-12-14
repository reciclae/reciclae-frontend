import { AuthProvider } from "./context/AuthContext";
import { Router } from "./Router";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <AuthProvider>
      <Router />
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
