import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isSignedIn: false,
    email: ""
  });

  const signIn = ({ email }) => {
    setAuth({
      isSignedIn: true,
      email
    });
  }
  
  const signOut = () => {
    setAuth({
      isSignedIn: false,
      email: ""
    });
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      authState: auth
    }}>
      {children}
    </AuthContext.Provider>
  );
}