import request from '@/utils/request';
import { TableListParams, TableListItem } from './data.d';

const apiURL = '/api/rule';
export async function queryRule(params?: TableListParams) {
  return request(apiURL, {
    params,
  });
}

export async function removeRule(params: { key: number[] }) {
  return request(apiURL, {
    method: 'DELETE',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: TableListItem) {
  return request(apiURL, {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request(apiURL, {
    method: 'PUT',
    data: {
      ...params,
      method: 'update',
    },
  });
}
