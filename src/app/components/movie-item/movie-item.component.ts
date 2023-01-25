import { Component, OnInit,Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
@Input() itemData: Movie | null = null;

constructor(){}

ngOnInit(): void {
  
}
}
