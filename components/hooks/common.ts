import { useState } from "react"

export const useToggle = (): [boolean, () => void] => {
    const [toggleStatus, setToggle] = useState(false);

    const toggle = () => {
        setToggle(!toggleStatus);
    }

    return [toggleStatus, toggle];
}