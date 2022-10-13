
import { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
export interface TextInputRootProps {
    children: ReactNode; 
}
function TextInputRoot(props:TextInputRootProps){
    return(
    <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-blue-300'>
     {props.children}
     </div>
     )
}

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps{
    children: ReactNode;
}
function TextInputIcon(props:TextInputIconProps) {
    //usar o fragment do react é algo para encapsular o componente que não aparece em tela
    return(
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )

}

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { } // dessa maneira vou receber todas as propriedades que o input pode receber 
function TextInputInput(props:TextInputInputProps) {
    
    return(

     <input className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none' 
      {...props}  
  />
              
  )
}
TextInputInput.displayName = 'TextInput.Input';





export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}






