import { Mail, PhoneCall } from "lucide-react"

export const Contacts = () => {
  return (
    <div className="h-screen flex flex-col gap-10 justify-center items-center">
      <h1 className="font-header text-8xl">GET IN TOUCH</h1>
      <p>For any inquiries, you can contact me using the following contact information.</p>
      <div className="flex flex-col gap-2 items-center">
        <div className="button flex gap-2 hover:cursor-default">
          <Mail size={20}/>
          jmpbanar@gmail.com
        </div>
        <div className="button flex gap-2 hover:bg-p-green hover:cursor-default">
          <PhoneCall size={20}/>
          (0939) 813 4912
        </div>
      </div>
    </div>
  )
}