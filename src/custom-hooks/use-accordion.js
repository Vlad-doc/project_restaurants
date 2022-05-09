import { useState } from "react"

export const useAccordion = (defaultOpenId) => {
  const [openItemId, setOpenItem] = useState(defaultOpenId)
  const isItemOpen = (id) => openItemId === id
  const toggleOpenItem = (id) => () => setOpenItem(id)

  return { isItemOpen, toggleOpenItem }
}
