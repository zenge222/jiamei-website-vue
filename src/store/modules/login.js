import request from '../../api/request';
import apiConfig from '../../api/apiConfig';
import * as types from '../mutations';

const login = {
  state: {
    newsId: ''
  },
  mutations: {
    setNewsId(state, data) {
      state.newsId = data
    }
  },
  actions: {}
}

export default login;
