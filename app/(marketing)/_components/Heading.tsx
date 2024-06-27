'use client'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useConvexAuth } from "convex/react"
import { Spinner } from "@/components/spinner"
import Link from "next/link"
import { SignInButton } from "@clerk/clerk-react"
import Image from "next/image"

	

export default function Heading () {

  const {isAuthenticated,isLoading} = useConvexAuth()

return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Заметки
      </h1>
      <div className="flex justify-center">
  <Image
    src="/empty.png"
    width={300}
    height={300}
    alt="Picture of the author"
    className="items-center"
  />
</div>
      
      {isLoading && <div className="w-full flex justify-center items-center">
        <Spinner size='lg'/>
        </div>}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href='/documents'>
            Перейти к заметкам
            <ArrowRight className="w-4 h-4 ml-2"/>
          </Link>
      </Button>
        )}
        {!isAuthenticated && !isLoading && (
          <>
          <h3 className="text-base sm:text-xl md:text-2xl font-medium">
          Пройдите повторную аунтетификацию</h3>
          <SignInButton mode='modal'>
            <Button>
             Войти
              <ArrowRight className="w-4 h-4 ml-2"/>
            </Button>
          </SignInButton>
          
          </>
          
        )}
        
    </div>
)
}