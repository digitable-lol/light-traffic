import React, { createContext, useContext, useState } from "react"

type User = {
  id: number
  name: string
  avatar: string
} | null

type UserContextType = {
  selectedUser: User
  selectUser: (user: User) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState<User>(null)

  const selectUser = (user: User) => {
    setSelectedUser(user)
  }

  return (
    <UserContext.Provider value={{ selectedUser, selectUser }}>{children}</UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
