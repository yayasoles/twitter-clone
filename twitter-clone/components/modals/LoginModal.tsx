import useLoginModal from "@/hooks/useLoginModal"
import { useCallback, useState } from "react"
import Input from "../Input"
import Modal from "../Modal"
import useRegisterModal from "@/hooks/useRegisterModal"

const LoginModal = () => {
    const loginModal = useLoginModal()
    const registrationModal = useRegisterModal()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const onToggle=useCallback(()=>{
        if(isLoading){
            return
        }
        loginModal.onClose()
        registrationModal.onOpen()
    },[isLoading,loginModal,registrationModal])

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true)
            // TO ADD LOGIN HERE

            loginModal.onClose()
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }, [loginModal])
    const bodyContent = (
        <div className="flex flex-col gap-4 ">
            <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
                type="password"
            />
        </div>
    )
    const fotterContent=(
        <div className="text-neutral-400 text-center  mt-4">
            <p>Do not  have an account?
                <span onClick={onToggle} className="text-white cursor-pointer hover:underline">
                    Sign Up
                </span>
            </p>
        </div>
    )
    return (
          <Modal  actionLabel="Sign In"
                  onClose={loginModal.onClose}
                  body={bodyContent}
                  disabled={isLoading}
                  isOpen={loginModal.isOpen}
                  title="Login Page"
                  onSubmit={onSubmit} 
                  footer={fotterContent}
          />
        // <div></div>
    )
}
export default LoginModal