import React, { useEffect, useState } from 'react'

const useLocalStorage = (name,initial) => {
    const [value,setValue] = useState(JSON.parse(localStorage.getItem(name)) || initial)

    useEffect(() => {
        localStorage.setItem(name,value)
    },[value])
  return [value, setValue]
}

export default useLocalStorage