'use client'

import Image from "next/image"
import { useUser } from "@clerk/clerk-react"
import { PlusCircle } from "lucide-react"
import { useMutation } from "convex/react"

import {api} from '@/convex/_generated/api'
import { Button } from "@/components/ui/button"
import { toast } from "sonner"


export default function DocumentsPage () {

  const {user} = useUser()
  const create = useMutation(api.documents.create)

  const onCreate = () => {
    const promise = create({title:'Без названия'})

    toast.promise(promise,{
      loading:"Создание новой заметки...",
      success:"Новая заметка создана!",
      error:'Ошибка создания новой заметки.'
    })
  }

return (
    <div className="flex flex-col justify-center items-center h-full space-y-4">
      <Image className="dark:hidden" src='/empty.png' alt="Empty" width='300' height='300'/>
      <h2 className="text-lg font-medium">
        Добро пожаловать, {user?.firstName}
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="w-4 h-4 mr-2"/>
        Создать заметку
      </Button>
    </div>
)
}