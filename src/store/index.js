import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        todos: [],
    },
    mutations: {
        setTodo(state, payload) {
            state.todos.push(payload)
        },
        deleteTodo(state, id) {
            state.todos = state.todos.filter((item) => item.id !== id)
        },
        changeChecked(state, value, id) {
            state.todos = state.todos.map((item) => item.id === id ? { ...item, isChecked: value } : item)
        }
    },
    actions: {
        createTodo({ commit }, inputValue) {
            //request
            const todo = {
                id: Date.now(),
                name: inputValue,
                isChecked: false,
            }
            commit('setTodo', todo)
        },
        changeChecked({ commit }, value, id) {
            commit('changeChecked', value, id)
        }
    },
    getters: {
        todos: (state) => state.todos,
        todoById: (state) => {
            return (id) => {
                return state.todos.find((item) => item.id === +id)
            }
        }
    },
})