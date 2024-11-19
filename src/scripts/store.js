import {createStore} from 'vuex';

// Create a new store instance.
const store = createStore({
    store() {
        return {
            account: {
                id: 0,      // 초기값을 객체로 설정, 로그인하지 않은 상태에서는 id:0
            }
        }
    },
    mutations: {
        setAccount(state, payload) {
            // account 객체의 id 속성에 값 설정
            state.account = payload;
            // state.account = account;
        }
    }
})

export default store;
