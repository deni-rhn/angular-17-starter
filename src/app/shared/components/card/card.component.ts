import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ICourse } from '../../models/response/iproduct';
import { IsPromoPipe, ShowPricePipe } from '../../pipes/product.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, IsPromoPipe, ShowPricePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  providers: [CurrencyPipe]
})
export class CardComponent {
  @Input() product!: ICourse;
}
