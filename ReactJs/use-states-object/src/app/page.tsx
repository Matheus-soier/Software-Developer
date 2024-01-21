"use client"

import { Person } from "@/types/Person"
import { useState } from "react"

export default function Home() {
  
  const [fullName, setFullName] = useState<Person>({firstName: "", lastName: ""})
  
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <div className="flex flex-col gap-3">
        <input
        className="px-2 py-1 rounded-md text-black outline-none"
        type="text"
        name="firstName"
        id="firstName"
        value={fullName.firstName}
        placeholder="Primeiro Nome"
        onChange={e => setFullName({...fullName, firstName: e.target.value})}
        />
        
        <input
        className="px-2 py-1 rounded-md text-black outline-none"
        type="text"
        name="lastName"
        id="lastName"
        value={fullName.lastName}
        placeholder="Segundo Nome"
        onChange={e => setFullName({...fullName, lastName: e.target.value})}
        />
        <div>
          <p>Seu nome completo é: </p>
          <p>{fullName.firstName} {fullName.lastName}</p>
        </div>
      </div>
    </div>
  )
}
