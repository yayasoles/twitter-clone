import useRegisterModal from "@/hooks/useRegisterModal"
import { useCallback, useState } from "react"
import Input from "../Input"
import Modal from "../Modal"
import useLoginModal from "@/hooks/useLoginModal"


const RegisterModal = () => {

    const registrationModal = useRegisterModal()
    const loginModal = useLoginModal()


    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [userName, setuserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const onToggle=useCallback(()=>{
        console.log('dddddddddddddddddddddd')
        if(isLoading){
        console.log('gggggggggggggggggggg')

            return
        }
        console.log('dddddddddddddddddddddd')

        registrationModal.onClose();
        loginModal.onOpen();
    },[isLoading,registrationModal,loginModal])
    
    const onSubmit = useCallback(() => {
        try {
            setIsLoading(true)

            // Registration to be done Here

            registrationModal.onClose()
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }, [registrationModal])

    

    const bodyContent = (
        <div className="flex flex-col gap-4 ">
            <Input
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                placeholder="Email"
                value={email}
            />
            <Input
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                placeholder="Password "
                value={password}
            />
            <Input
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
                placeholder="Name "
                value={name}
            />
            <Input
                onChange={(e) => setuserName(e.target.value)}
                disabled={isLoading}
                placeholder="User Name"
                value={userName}
            />


        </div>
    )
    const fotterContent = (
        <div className="text-neutral-400 text-center  mt-4">
            <p>Already have an account?
                <span onClick={onToggle} className="text-white cursor-pointer hover:underline">
                    Sig n In
                </span>
            </p>
        </div>
    )
    return (
        <Modal
            actionLabel="Create"
            onClose={registrationModal.onClose}
            onSubmit={onSubmit}
            disabled={isLoading}
            isOpen={registrationModal.isOpen}
            title="Create Account"
            body={bodyContent}
            footer={fotterContent}
        />
    )
}
export default RegisterModal