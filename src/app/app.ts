import { Component } from '@angular/core';
import { DragAndDropComponent } from './components/draganddrop/draganddrop.component';
import { GaugeComponent } from './components/gauge/gauge.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DragAndDropComponent, GaugeComponent, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  gaugeValue = 65; // default starting value
}