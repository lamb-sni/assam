import React from 'react'
import { flushSync } from 'react-dom'
import { useNavigate } from 'react-router-dom'

declare global {
  interface Document {
    startViewTransition?: (callback: () => void) => any
  }
}

const useViewTransition = () => {
  const navigate = useNavigate()
  const transitionNavigate = React.useCallback(
    async (newRoute: string) => {
      if (!document.startViewTransition) {
        return navigate(newRoute)
      }

      document.startViewTransition(() => {
        flushSync(() => {
          navigate(newRoute)
        })
      })

      return
    },
    [navigate],
  )

  return {
    transitionNavigate,
  }
}

export default useViewTransition
