import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ApiService } from '../../services/api.service'
import { Market } from '../../interfaces/market'
import { Product } from '../../interfaces/product'
import { Shop } from '../../interfaces/shop'

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css'],
})
export class ProductDetailPageComponent {
  shopId: string
  marketId: string
  productId: string
  productData: Product = {
    catagoryId: '',
    productCoverImg: '',
    productDescribe: '',
    productDetail: '',
    productId: '',
    productImg: [],
    productName: '',
    productPrice: 0,
    productQty: 0,
    shopId: '',
  }
  marketData: Market = {
    marketName: '',
    marketDescribe: '',
    marketId: '',
    marketImg: '',
    marketIntroImg: '',
    readmore: '',
  }
  shopData: Shop = {
    catagoryId: '',
    shopDescribe: '',
    marketId: '',
    shopId: '',
    shopImg: '',
    shopName: '',
  }
  constructor(private routedata: ActivatedRoute, private api: ApiService) {}
  ngOnInit(): void {
    this.shopId = this.routedata.snapshot.paramMap.get('shopId')
    this.marketId = this.routedata.snapshot.paramMap.get('marketId')
    this.productId = this.routedata.snapshot.paramMap.get('productId')
    this.api
      .Api()
      .market.getOne(this.marketId)
      .subscribe((e) => {
        this.marketData = e.data
        console.log(e.data)
      })
    this.api
      .Api()
      .shop.getOne(this.shopId)
      .subscribe((e) => {
        this.shopData = e.data
        console.log(e.data)
      })
    this.api
      .Api()
      .product.getOne(this.productId)
      .subscribe((e) => {
        this.productData = e.data
        console.log(e.data)
      })
  }
}
