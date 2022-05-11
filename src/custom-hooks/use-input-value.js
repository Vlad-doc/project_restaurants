import { useState } from "react"

export function useInputValue(initialValue) {
  const [state, setState] = useState(initialValue)
  const onChange = (ev) => setState(ev.target.value)

  return [state, onChange]
}
