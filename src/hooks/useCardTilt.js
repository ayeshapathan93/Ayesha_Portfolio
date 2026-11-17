import { useCallback, useEffect, useState } from 'react'

const rest = {
  rotateX: 0,
  rotateY: 0,
  glareX: 50,
  glareY: 36,
  shiftX: 0,
  shiftY: 0,
  active: false,
}

export function useFinePointer() {
  const [fine, setFine] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setFine(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return fine
}

export function useCardTilt({ maxTilt = 7, maxShift = 8, enabled = true } = {}) {
  const [tilt, setTilt] = useState(rest)

  const onPointerMove = useCallback(
    (event) => {
      if (!enabled || event.pointerType !== 'mouse') return
      const rect = event.currentTarget.getBoundingClientRect()
      const px = (event.clientX - rect.left) / rect.width
      const py = (event.clientY - rect.top) / rect.height
      setTilt({
        rotateX: (0.5 - py) * maxTilt * 2,
        rotateY: (px - 0.5) * maxTilt * 2,
        glareX: px * 100,
        glareY: py * 100,
        shiftX: (px - 0.5) * maxShift * 2,
        shiftY: (py - 0.5) * maxShift * 2,
        active: true,
      })
    },
    [enabled, maxShift, maxTilt],
  )

  const onPointerLeave = useCallback(() => setTilt(rest), [])

  return { tilt, onPointerMove, onPointerLeave }
}
