import { reactive } from 'vue'
export const store = reactive({
    state: {
        food: 'Pudthai',
        sport: 'Football',
        count: 10,


    },
    mutations: {
        setFood(state, food) {
            state.food = food
        },
        setSport(state, sport) {
            state.sport = sport
        },
        setCount(state) {
            state.count
        }


    },

    getters: {
        food: state => state.food,
        sport: state => state.sport,
        count: state => state.count,


    }
})