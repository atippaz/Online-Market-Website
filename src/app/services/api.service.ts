import { Injectable } from '@angular/core'
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Catagory } from '../interfaces/catagory'
import { Market } from '../interfaces/market'
import { Product } from '../interfaces/product'
import { Shop } from '../interfaces/shop'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers:HttpHeaders
  apiUr: string =
    'https://c512-2001-fb1-90-c3a9-e5d0-bb1e-763d-be07.ngrok-free.app/api/v1'
    token:string
  constructor(private _http: HttpClient) {
    // console.log(s)
    // Create headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
  }
  getAllCatagory(
    queryString: string = null
  ): Observable<{ status: number; data: Catagory[] }> {
    return this._http.get<{ status: number; data: Catagory[] }>(
      `${this.apiUr}/catagory?${queryString ? queryString : ''}`
    ,{headers:this.headers})
  }
  getAllProduct(
    queryString: string = null
  ): Observable<{ status: number; data: Product[] }> {
    return this._http.get<{ status: number; data: Product[] }>(
      `${this.apiUr}/product?${queryString ? queryString : ''}`
     ,{headers:this.headers})
  }
  getAllShop(
    queryString: string = null
  ): Observable<{ status: number; data: Shop[] }> {
    return this._http.get<{ status: number; data: Shop[] }>(
      `${this.apiUr}/shop?${queryString ? queryString : ''}`
     ,{headers:this.headers})
  }
  getAllMarket(
    queryString: string = null
  ): Observable<{ status: number; data: Market[] }> {
    return this._http.get<{ status: number; data: Market[] }>(
      `${this.apiUr}/market?${queryString ? queryString : ''}`
     ,{headers:this.headers})
  }
  getAllRandomShop(
    queryString: string = null
  ): Observable<{ status: number; data: Market[] }> {
    return this._http.get<{ status: number; data: Market[] }>(
      `${this.apiUr}/randomShop?${queryString ? queryString : ''}`
     ,{headers:this.headers})
  }
  getOneCatagory(
    id: string,
    queryString: string = null
  ): Observable<{ status: number; data: Catagory }> {
    return this._http.get<{ status: number; data: Catagory }>(
      `${this.apiUr}/catagory/${id}?${queryString ? queryString : ''}`
     ,{headers:this.headers})
  }
  getOneProduct(
    id: string,
    queryString: string = null
  ): Observable<{ status: number; data: Product }> {
    return this._http.get<{ status: number; data: Product }>(
      `${this.apiUr}/product/${id}?${queryString ? queryString : ''}`
     ,{headers:this.headers})
  }
  getOneShop(
    id: string,
    queryString: string = null
  ): Observable<{ status: number; data: Shop }> {
    return this._http.get<{ status: number; data: Shop }>(
      `${this.apiUr}/shop/${id}?${queryString ? queryString : ''}`
     ,{headers:this.headers})
  }
  getOneMarket(
    id: string,
    queryString: string = null
  ): Observable<{ status: number; data: Market }> {
    return this._http.get<{ status: number; data: Market }>(
      `${this.apiUr}/market/${id}?${queryString ? queryString : ''}`
     ,{headers:this.headers})
  }
}
