import request from '../utils/request'
const api_path = import.meta.env.VITE_APP_PATH;

/**
 * 取得產品列表
 * @param {number} page 頁數
 * @returns 
 */
export const getProducts = (page) => request.get(`/api/${api_path}/products?page=${page}`)


/**
 * 取得產品列表 admin
 * @returns 
 */
export const getProductsAll = () => request.get(`/api/${api_path}/admin/products/all`)