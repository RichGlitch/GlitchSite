import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
 @Input() postItem: any;

  constructor(private router: Router) { 
   // console.log('this.postItem');
    //console.log(this.postItem);
  }

  ngOnInit() {
   // console.log('this.postItem OnInit');
    //console.log(this.postItem);
  }
  
  singlePost(){
    console.log('this.postItem.title');
    console.log(this.postItem.title);
    this.router.navigate(['/post',this.postItem.title]);
  }
}
