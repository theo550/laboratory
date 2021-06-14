// toggle done todos

export function useToggleTodos() {
  function toggleDone(todo) {
    todo.done = !todo.done
  }

  return{
    // methods
    toggleDone
  }
}