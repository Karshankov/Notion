import './globals.css'
import { Toaster } from "sonner";
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Заметки',
  description: 'ИОР "АЛОВТ". Заметки',
  icons: {
    icon: 
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      }, 
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
          <link
            rel="icon"
            href="/favicon.ico"
            type="image/x-icon"
          />
        </head>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <Toaster position="bottom-center" />
            <ModalProvider/>
            {children}
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}