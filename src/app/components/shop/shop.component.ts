import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  @Input('shopData') shopData: any[] = []
}
