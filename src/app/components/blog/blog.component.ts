import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare function init_plugins();

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: any;
 // headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

  constructor(private http: HttpClient) { }
  ngOnInit() {
    init_plugins();
    this.getPosts();
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
