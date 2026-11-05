import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { useState } from "react"
import { FaPlus } from "react-icons/fa"
import { Input } from "@/components/ui/input";



function NewDM() {

    const [openNewContactModel, setOpenNewContactModel] = useState(false);

    const searchContacts = async (event) => {}

    return (
        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <FaPlus className="text-neutral-400 font-light text-opacity-90 text-sm hover:text-neutral-100 cursor-pointer transition-all duration-300 "
                            onClick={() => setOpenNewContactModel(true)}
                        />
                    </TooltipTrigger>
                    <TooltipContent className='bg-[#1c1b1e] border-none mb-2 p-3 text-white'>Add new contact</TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <Dialog open={openNewContactModel} onOpenChange={setOpenNewContactModel}>
                <DialogContent className='bg-[#181920] border-none text-white w-[400px] h-[400px] flex flex-col '>
                    <DialogHeader>
                        <DialogTitle className='mt-5'>Please select a contact.</DialogTitle>
                        <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <div>
                        <Input placeholder='Search contacts'
                            className='rounded-lg p-6 bg-[#2c2e3b] border-none '
                            onChange={(e) => searchContacts(e.target.value)}
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default NewDM