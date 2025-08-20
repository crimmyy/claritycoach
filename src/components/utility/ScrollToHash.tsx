import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToHash() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        const yOffset = 120 // adjust this for your header height or preference
        const y =
          element.getBoundingClientRect().top + window.scrollY - yOffset

        window.scrollTo({ top: y, behavior: "smooth" })
      }
    }
  }, [hash])

  return null
}
