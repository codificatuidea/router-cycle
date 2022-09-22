import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {
    const store = useStore()

    const currentTab = ref('all')
   
    return {
        pending: computed(() => store.getters['pendingTodos']),
        all: computed(() => store.getters['allTodos']),
        completed: computed(() => store.getters['completedTodos']),
        getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),
        onToggleTodo: (id) => store.commit('toggleTodo', id),

        currentTab
    }
}

export default useTodos