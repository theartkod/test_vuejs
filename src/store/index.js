import Vue from 'vue';
import Vuex from 'vuex';
import format from 'date-fns/format';
import messages from '@/assets/messages.json';
import { LOADERS } from '../constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: 'me',
      name: 'vasiliy',
    },
    messages: [],
    loaders: [],
  },
  mutations: {
    setMessagesList(state, payload) {
      state.messages = payload;
    },
    setMessage(state, payload) {
      const messageObject = {
        id: Date.now(),
        author: state.user.name,
        created: format(Date.now(), 'yyyy-MM-dd HH:mm'),
        text: payload.message,
        sender: 'me',
      };
      state.messages.forEach((item) => {
        if (item.id === +payload.id) {
          item.parts.push(messageObject);
        }
      });
    },
  },
  actions: {
    loadMessages({ commit, state }) {
      state.loaders.push(LOADERS.LOAD_MESSAGES);
      setTimeout(() => {
        commit('setMessagesList', messages);
        const index = state.loaders.indexOf(LOADERS.LOAD_MESSAGES);
        state.loaders.splice(index, 1);
      }, 2000);
    },
    loadDialog({ state }, id) {
      state.loaders.push(LOADERS.LOAD_DIALOG);
      return new Promise((resolve) => {
        setTimeout(() => {
          const index = state.loaders.indexOf(LOADERS.LOAD_DIALOG);
          state.loaders.splice(index, 1);
          resolve(state.messages.filter(item => item.id === +id)[0]);
        }, 2000);
      });
    },
    sendMessage({ state, commit }, payload) {
      state.loaders.push(LOADERS.SENDING_MESSAGE);
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('setMessage', payload);
          const index = state.loaders.indexOf(LOADERS.SENDING_MESSAGE);
          state.loaders.splice(index, 1);
          resolve(true);
        }, 2000);
      });
    },
  },
});
