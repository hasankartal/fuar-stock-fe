import request from '@/utils/request'
import moment from 'moment'
import id from "element-ui/src/locale/lang/id";
import qs from 'qs';

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/article/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data
  })
}

export function fetchSaleList() {
 /* get('https://fuar-stock.herokuapp.com/sale?token=token').then(response => {
    //this.total = 3
    this.list = response.data.map(v => {
    v.id = v.id
    v.amount = v.amount
    return v
  })
  setTimeout(() => {
    this.listLoading = false
    }, 1.5 * 1000)
  }) */
  return request({
    url: 'https://fuar-stock.herokuapp.com/sale?token=token',
    method: 'get'
  })

}

export function fetchSaleSearchList(data) {
   return request({
     url: 'https://fuar-stock.herokuapp.com/sale/search?token=token',
     method: 'get',
     params: {
      moneyType: data.moneyType,
      orderDate: moment(String(data.orderDate)).format('DD-MM-YYYY')
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    },
   })
 
}
 
export function createSale(data) {
  return request({
    url: 'https://fuar-stock.herokuapp.com/sale/add?token=token',
    method: 'post',
    data
  })
}

export function updateSale(data) {
  request({
    url: 'https://fuar-stock.herokuapp.com/sale/update?token=token',
    method: 'post',
    data
  })
}

export function deleteSale(data) {
//  axios.delete('https://my-json-server.typicode.com/json/posts/' + id);
  request({
    url: 'https://fuar-stock.herokuapp.com/sale/delete?token=token',
    method: 'delete',
    data
  })
}

export function exportSaleExcel(data) {
  return request({
      url: 'https://fuar-stock.herokuapp.com/sale/exportExcel?token=token',
      method: 'post',
      responseType: 'blob',
      data
    })
}

export function exportSaleExcelByParameters(data) {
  return request({
      url: 'https://fuar-stock.herokuapp.com/sale/exportExcelByParameters?token=token',
      method: 'get',
      responseType: 'blob',
      params: {
        moneyType: data.moneyType
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    })
}

export function fetchCustomerList() {
  /* get('https://fuar-stock.herokuapp.com/sale?token=token').then(response => {
     //this.total = 3
     this.list = response.data.map(v => {
     v.id = v.id
     v.amount = v.amount
     return v
   })
   setTimeout(() => {
     this.listLoading = false
     }, 1.5 * 1000)
   }) */
   return request({
     url: 'https://fuar-stock.herokuapp.com/customer?token=token',
     method: 'get'
   })
 }
 
 export function fetchCustomerSearchList(data) {
    return request({
      url: 'https://fuar-stock.herokuapp.com/customer/search?token=token',
      method: 'get',
      params: {
       name: data.surname,
     surname: data.surname
     },
     paramsSerializer: (params) => {
       return qs.stringify(params, { arrayFormat: 'repeat' })
     },
    })
  
 }
  
 
 export function createCustomer(data) {
   return request({
     url: 'https://fuar-stock.herokuapp.com/customer/add?token=token',
     method: 'post',
     data
   })
 }
 
 export function updateCustomer(data) {
   request({
     url: 'https://fuar-stock.herokuapp.com/customer/update?token=token',
     method: 'post',
     data
   })
 }
 
 export function deleteCustomer(data) {
 //  axios.delete('https://my-json-server.typicode.com/json/posts/' + id);
   request({
     url: 'https://fuar-stock.herokuapp.com/customer/delete?token=token',
     method: 'delete',
     data
   })
 }
 
 export function exportCustomerExcel(data) {
   return request({
       url: 'https://fuar-stock.herokuapp.com/customer/exportExcel?token=token',
       method: 'post',
       responseType: 'blob',
       data
     })
 }
 
 export function exportCustomerExcelByParameters(data) {
   return request({
       url: 'https://fuar-stock.herokuapp.com/customer/exportExcelByParameters?token=token',
       method: 'get',
       responseType: 'blob',
       params: {
       name: data.surname,
       surname: data.surname
       },
       paramsSerializer: (params) => {
         return qs.stringify(params, { arrayFormat: 'repeat' })
       }
     })
 }
