import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
  <Header showBackArrow label='Home' />
  </>
  )
}
