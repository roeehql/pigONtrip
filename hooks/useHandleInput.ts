import { ChangeEvent, useState } from 'react'

const useHandleInput = (initialValue:string) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value)
    }
    return {value , onChange  , setValue};
}

export default useHandleInput;