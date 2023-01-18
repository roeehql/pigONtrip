import { ChangeEvent, useState } from 'react'

export const useHandleInput = (initialValue:string) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e:ChangeEvent<HTMLInputElement> ) =>{
        setValue(e.target.value)
    }
    return {value , onChange  , setValue};
}

export const useHandleTextArea = (initialValue:string) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e:ChangeEvent<HTMLTextAreaElement> ) =>{
        setValue(e.target.value)
    }
    return {value , onChange  , setValue};
}