import React, { ReactNode, createContext, useState } from "react"

export interface User {
  id: number
  name: string
  avatar?: string
}

interface UserContextType {
  selectedUser: User | null
  selectUser: (user: User) => void
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [users, setUsers] = useState<User[]>([])

  const selectUser = (user: User) => setSelectedUser(user)

  return (
    <UserContext.Provider value={{ selectedUser, selectUser, users, setUsers }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
