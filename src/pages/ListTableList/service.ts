import request from '@/utils/request';
import { TableListParams, TableListItem } from './data.d';

export async function queryRule(params?: TableListParams) {
  return request('http://faas.jike-serverless.online/api/rule', {
    params,
  });
}

export async function removeRule(params: { key: number[] }) {
  return request('http://faas.jike-serverless.online/api/rule', {
    method: 'DELETE',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: TableListItem) {
  return request('http://faas.jike-serverless.online/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('http://faas.jike-serverless.online/api/rule', {
    method: 'PUT',
    data: {
      ...params,
      method: 'update',
    },
  });
}
