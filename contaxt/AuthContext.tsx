"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  _id: string;
  username: string;
  phone: string;
  roles: string[];
  addresses: Array<{
    _id: string;
    name: string;
    province: string;
    city: string;
    street: string;
    postalCode: string;
  }>;
  createdAt: string;
  updatedAt: string;
  firstName?: string;
  lastName?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
  checkAuth: () => boolean;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is authenticated on component mount
  useEffect(() => {
    const checkUserAuth = () => {
      try {
        const storedUser = localStorage.getItem("currentUser");
        const token = localStorage.getItem("authToken");

        if (storedUser && token) {
          const userData: User = JSON.parse(storedUser);
          setUser(userData);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        // Clear corrupted data
        localStorage.removeItem("currentUser");
        localStorage.removeItem("authToken");
      } finally {
        setIsLoading(false);
      }
    };

    checkUserAuth();
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("currentUser", JSON.stringify(userData));
    localStorage.setItem("authToken", "mock-jwt-token"); // In real app, this comes from API
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
    localStorage.removeItem("authToken");
    // Optional: Redirect to home page
    window.location.href = "/";
  };

  const checkAuth = (): boolean => {
    return !!user && !!localStorage.getItem("authToken");
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    checkAuth,
    updateUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};