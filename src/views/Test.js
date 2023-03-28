import React, { useState, useEffect } from 'react'

export default function Test(props) {
    // useState hook
    // Syntax: const [initialState, setState] = useState(initialValue)
    // ie const [name, setName] = useState('christian')
    const [age, setAge] = useState(20)
    const [name, setName] = useState('Christian')

    const addOne = () => {
        setAge(age + 1)
    }

    // useEffect()
    // Syntax: useEffect(callback func, [])
    useEffect(() => {
        console.log('Mount Successful')
    }, [age])

  return (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
        <button onClick={props.addOne}>Increment</button>
        <h1>{name}</h1>
        <h2>{age}</h2>
        <button onClick={addOne}>Increment</button>
    </div>
  )
}