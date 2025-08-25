import React, { createContext, useContext, useState } from 'react'


const AppContext = createContext({ user: { name: '', avatar: '' } })

export function AppProvider({ children }: { children: React.ReactNode }){
  const [user] = useState({ name: 'Thomas Shelby', avatar: 'https://i.pravatar.cc/40' })
  return (
    <AppContext.Provider value={{ user }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp(){ return useContext(AppContext) }