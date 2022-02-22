import { Component, OnInit } from '@angular/core';
// importing all the dependencies.
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IPosts } from 'src/shared/interfaces';// IPosts is an interface for the posts we created in 'src/shared/interfaces.ts'.

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  // declaring variables that we will use.
  posts: IPosts[];

  constructor(private http: HttpClient) { }

  // requesting the data from 'https://jsonplaceholder.typicode.com/posts'.
  ngOnInit() {
    // for new versions of angular, use this commented script (line 20 to 33) to read data from the online database:
    // this.http.get(environment.apiUrl + "posts", {
    // }).subscribe({
    //   next: (response: any) => {
    //     // alert(JSON.stringify(response));
    //     this.forecasts = response as IPosts[];
    //     console.log(JSON.stringify(this.forecasts));
    //   },
    //   error: (err: any) => {
    //     console.log(JSON.stringify(err));
    //   },
    //   complete: () => {
    //     // alert('Address complete')
    //   }
    // });

    // for old versions of angular (I use ionic version 6.18.1, you can check your ionic version using "ionic -v" in the cmd).
    this.http.get(environment.apiUrl + "posts").subscribe((response: any) => { // "environment.apiUrl" is a variable that we created in 'environments.ts' and assigned the value of "https://jsonplaceholder.typicode.com/".
      // assigning the data to the variable "post" that we created in line 14.
      this.posts = response as IPosts[];
    });
  }  

}
