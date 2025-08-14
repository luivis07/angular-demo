import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-draganddrop',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './draganddrop.component.html',
  styleUrls: ['./draganddrop.component.css']
})
export class DragAndDropComponent {
  items = [
    {
      title: 'Avoiding Burnout',
      duration: '2 - 3 hrs',
      tags: ['Asset Class']
    },
    {
      title: 'Coaching Playlist',
      duration: '2 - 3 hrs',
      tags: ['Delivery Model', 'Topic Type - course, assessment, playlist, practice, resource']
    },
    {
      title: 'High Impact Feedback and Listening',
      duration: '2 - 3 hrs',
      tags: ['Course', 'Delivery Model']
    }
  ];

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}