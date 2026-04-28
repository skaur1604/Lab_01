import { useState } from "react"

export function useFormInput(initialValue = "") {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setValue(e.target.value)
    setError("")
  }

  function validate(callback: (value: string) => string | null) {
    const result = callback(value)

    if (result) {
      setError(result)
      return false
    }

    setError("")
    return true
  }

  function reset() {
    setValue(initialValue)
    setError("")
  }

  return {
    value,
    error,
    onChange: handleChange,
    validate,
    setValue,
    setError,
    reset
  }
}