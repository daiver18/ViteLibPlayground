export const initialCount = 0

export function setupCounter(element: HTMLButtonElement | null) {
  if (!element) return
  let counter = initialCount
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
  return counter
}
