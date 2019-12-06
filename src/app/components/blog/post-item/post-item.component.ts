import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
 @Input() postItem: any;

  constructor() { 
    console.log('this.postItem');
    console.log(this.postItem);
  }

  ngOnInit() {
    console.log('this.postItem OnInit');
    console.log(this.postItem);
  }

}
