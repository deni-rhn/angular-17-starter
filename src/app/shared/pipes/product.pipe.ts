import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isPromo',
  pure: true,
  standalone: true
})
export class IsPromoPipe implements PipeTransform {

  transform(promo: string): boolean {
    return promo !== null || promo !== '';
  }
}

@Pipe({
  name: 'showPrice',
  pure: true,
  standalone: true
})
export class ShowPricePipe implements PipeTransform {

  constructor(
    private currencyPipe: CurrencyPipe
  ){}

  transform(price: number): string | null {
    if (price === 0) {
      return 'FREE';
    } else {
      return this.currencyPipe.transform(price, 'IDR');
    }
  }
}
