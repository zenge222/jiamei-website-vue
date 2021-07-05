import api from '../api/apiConfig'
import request from '../api/request'

// 获取新闻列表
export function _getNewsList(data) {
  return request(api.getNewsList, 'post', data)
}

// 获取新闻详情
export function _getNewsDetail(data) {
  return request(api.getNewsDetail + `/${data}`, 'get')
}

// 提交留言信息
export function _leaveMessage(data) {
  return request(api.leaveMessage, 'post', data)
}
