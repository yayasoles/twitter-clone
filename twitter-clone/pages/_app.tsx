import Layout from '@/components/Layout'
import LoginModal from '@/components/modals/LoginModal'
import RegisterModal from '@/components/modals/RegisterModal'
// import Modal from '@/components/Modal'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Modal actionLabel='Submit' isOpen title='Assign Role'/> */}
      <LoginModal/>
      <RegisterModal/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
