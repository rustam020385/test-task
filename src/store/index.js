import { createStore } from 'vuex'

export default createStore({
  state: {
    leftSelected: [],
    rightSelected: '',
    leftSelectors: [
      {
        id: 1,
        name: "Shoes 1",
      },
      {
        id: 2,
        name: "Shoes 2",
      },
      {
        id: 3,
        name: "Shoes 3",
      },
      {
        id: 4,
        name: "Shoes 4",
      },
      {
        id: 5,
        name: "T-shirt 1",
      },
      {
        id: 6,
        name: "T-shirt 2",
      },
      {
        id: 7,
        name: "T-shirt 3",
      },
      {
        id: 8,
        name: "T-shirt 4",
      },
    ],
    rightSelectors: [
      {
        id: 11,
        name: "Jacket 1",
      },
      {
        id: 12,
        name: "Jacket 2",
      },
      {
        id: 13,
        name: "Jacket 3",
      },
      {
        id: 14,
        name: "Jacket 4",
      },
      {
        id: 15,
        name: "Hoodie 1",
      },
      {
        id: 16,
        name: "Hoodie 2",
      },
      {
        id: 17,
        name: "Hoodie 3",
      },
      {
        id: 18,
        name: "Hoodie 4",
      },
    ],
  },
  getters: {
    leftSelectedItems(state) {
      return state.leftSelectors.filter((item) => state.leftSelected.includes(item.id));
    },
    rightSelectedItems(state) {
      return state.rightSelectors.filter((item) => item.id == state.rightSelected);
    },
  },
  mutations: {
    addLeftSelected(state, value) {
      state.leftSelected.push(value)
    },
    delLeftSelected(state, value) {
      var index = state.leftSelected.indexOf(value);
      if (index !== -1) {
        state.leftSelected.splice(index, 1);
      }
    },
    addRightSelected(state, value) {
      //console.log(value);

      state.rightSelected = value

      
    }
  },
  actions: {
    changeLeftSelected({ state, commit }, { id, value }) {
      if (value && state.leftSelected.length < 6) {
        commit('addLeftSelected', id)
      }

      if (!value) {
        commit('delLeftSelected', id)
      }
    },
    changeRightSelected({ state, commit }, value) {
      console.log(value);

      if (state.rightSelected == value) {
        commit('addRightSelected', '')
      } else {
        commit('addRightSelected', value)
      }      
    }
  },
  modules: {
  }
})
