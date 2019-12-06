import { Component, OnInit } from '@angular/core';  
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: any;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.posts = [
      {
        title: "Test 1",
        content: "content"
      },
      {
        title: "Test 2",
        content: "content"
      },
      {
        title: "Test 4",
        content: "content"
      },
      {
        title: "Test 8",
        content: "content"
      },
      {
        title: "Test 27",
        content: "content"
      }
    ];
  }
  
  getPosts(){
    this.http.get('https://localhost:44370/api/posts',{headers:{'Content-Type':'application/json; charset=utf-8'}})
    .subscribe(resp => {
      this.posts = resp;
      console.log(this.posts);
    },
    error => {
      console.log(error);
    });
  }

}
