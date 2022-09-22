<template>
    <h1>Lista de tareas del Doc Brown</h1>
    <h4>Tareas: {{ $store.state.todos.length }}</h4>
    <h4>Pendientes: {{ pending.length }}</h4>
    <h4>Total: {{ all.length }}</h4>
    <h4>Completados: {{ completed.length }}</h4>

    <hr />
    <button
      :class="{ 'active': currentTab === 'all' }"
      @click="currentTab = 'all'">
      Todos
    </button>
    <button
      :class="{ 'active': currentTab === 'pending' }"
      @click="currentTab = 'pending'">
      Pendientes
    </button>
    <button
      :class="{ 'active': currentTab === 'completed' }"
      @click="currentTab = 'completed'">
      Completados
    </button>
    <div>
        <ul>
            <li
              v-for="todo in getTodosByTab"
              :key="todo.id"
              :class="{ 'completed': todo.completed }"
              @dblclick="onToggleTodo(todo.id)"
            >
                {{ todo.text }}
            </li>
        </ul>
    </div>

</template>

<script>
import useTodos from '@/composables/useTodos'

export default {
    setup() {
        
        const {
            pending,
            all,
            completed,
            getTodosByTab,
            onToggleTodo,
            currentTab
        } = useTodos()

        return {
            pending,
            all,
            completed,
            getTodosByTab,
            onToggleTodo,
            currentTab
        }

    }
}
</script>

<style scoped>
    div {
        display: flex;
        justify-content: center;
        text-align: center;
    }
    ul {
        width: 300px;
        text-align: left;
    }
    li {
        cursor: pointer
    }
    .active {
        background-color: green;
        color: #FFF;
    }
    .completed {
        text-decoration: line-through;
    }
</style>