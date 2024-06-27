'use client'	

import {AlertDialog,AlertDialogAction,AlertDialogCancel
  ,AlertDialogContent,AlertDialogDescription
  ,AlertDialogFooter,AlertDialogHeader,
AlertDialogTitle,AlertDialogTrigger} from '@/components/ui/alert-dialog'
import React from "react"

interface ConfirmModalProps {
  children:React.ReactNode
  onConfirm:() => void
}

export function ConfirmModal ({children,onConfirm}:ConfirmModalProps) {

  const handleConfirm = (e:React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
    e.stopPropagation()
    onConfirm()
  }
  
return (
    <AlertDialog>
      <AlertDialogTrigger onClick={e => e.stopPropagation()} asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Вы уверены?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Вы не сможете отменить это действие
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={e => e.stopPropagation()}>
            Назад
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>
            Подтвердить
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
)
}