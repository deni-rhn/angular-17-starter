import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-icon',
  templateUrl: './filter-icon.component.html',
  styleUrls: ['./filter-icon.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class FilterIconComponent {
  @Input() width: number = 20;
  @Input() height: number = 17;
  @Input() fill: string = '#2F353B';
}
