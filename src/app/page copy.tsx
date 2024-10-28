

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Eye, EyeOff } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [connectionType, setConnectionType] = useState('TCP')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!username || !password) {
      setError('Por favor, complete todos los campos.')
      return
    }

    const formData = {
      username,
      password,
      connectionType
    }

    saveFormDataAsJson(formData)

    // Here you would typically make an API call to validate the credentials
    // For this example, we'll just simulate a successful login
    console.log('Login attempt:', formData)
    router.push('/dashboard') // Redirect to dashboard after successful login
  }

  const saveFormDataAsJson = (data: object) => {
    const jsonData = JSON.stringify(data, null, 2)
    console.log('Form data saved as JSON:', jsonData)
    // In a real application, you might want to send this data to a server or save it locally
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tl from-gray-700 via-gray-800 to-gray-700">
      <div className="w-full max-w-sm p-8 space-y-8">
        <div className="flex items-center justify-center space-x-2">
          <Image src="/dahua-logo.png" alt="Dahua Technology" width={330} height={60} className="h-15 w-auto" />
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-5">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <Input
                id="username"
                name="username"
                type="text"
                required
                className="pl-10 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-0 hover:border-gray-600 focus:border-gray-600 transition-colors duration-200 sm:text-sm"
                placeholder="Nombre"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="pl-10 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-0 hover:border-gray-600 focus:border-gray-600 transition-colors duration-200 sm:text-sm"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
              </button>
            </div>
          </div>

          <Select onValueChange={setConnectionType} defaultValue={connectionType}>
            <SelectTrigger className="w-full mt-5 bg-gray-700 border-gray-600 text-white rounded-none">
              <SelectValue placeholder="Seleccione el tipo de conexión" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="TCP">TCP</SelectItem>
              <SelectItem value="UDP">MULTICAST</SelectItem>
            </SelectContent>
          </Select>

          {error && <p className="text-red-500 text-xs italic">{error}</p>}

          <div className="flex items-center justify-end mt-4">
            <div className="text-sm">
              <a href="#" className="font-medium text-gray-400 hover:text-gray-300">
                No sé mi clave
              </a>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-none text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Entrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}





