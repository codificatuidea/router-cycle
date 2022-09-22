import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {
        id: '1',
        text: 'Llenar el tanque del delorian',
        completed: true
      },
      {
        id: '2',
        text: 'Viajar al presente y recoger a Marty',
        completed: true
      },
      {
        id: '3',
        text: 'Viajar con Marty al futuro',
        completed: false
      },
      {
        id: '4',
        text: 'Evitar encontrarnos con nuestros yo del futuro',
        completed: false
      }
    ]
  },
  getters: {
    pendingTodos(state, getters, rootState) {
      return state.todos.filter(todo => !todo.completed)
    },
    allTodos(state, getters, rootState) {
      return state.todos
    },
    completedTodos(state, getters, rootState) {
      return state.todos.filter(todo => todo.completed)
    },
    getTodosByTab: (_, getters) => (tab) => {
      switch(tab) {
        case 'all': return getters.allTodos
        case 'pending': return getters.pendingTodos
        case 'completed': return getters.completedTodos
      }
    }
  },
  mutations: {
    toggleTodo(state, id) {
      const todoIdx = state.todos.findIndex(todo => todo.id === id)
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed
    }
  },
  actions: {
  },
  modules: {
  }
})
