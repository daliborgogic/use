export const now = () => Date.now()
export const timestamp = () => +Date.now()
export const isClient = typeof window === 'object'
