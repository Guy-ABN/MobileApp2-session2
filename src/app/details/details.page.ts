import { Component, OnInit } from '@angular/core';
// importing all the dependencies.
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IPosts } from 'src/shared/interfaces'; // IPosts is an interface for the posts we created in 'src/shared/interfaces.ts'.
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})

export class DetailsPage implements OnInit {
  // declaring variables that we will use.
  post: IPosts[];
  id: number;

  // declaring "http" and "route" variables to use
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    // reading the parameter sent from the button on the previous page (in this case we read the id of the post). 
    this.route.params.subscribe(params => {
      // assigning the parameter value to the variable id created in line 17.
      this.id = params['id'];
    });
  }

  // reading the data of the chosen post id from the database using http request.
  ngOnInit() {
    // requesting the data from 'https://jsonplaceholder.typicode.com/posts'. 
    this.http.get(environment.apiUrl + "posts").subscribe((response: any) => { // "environment.apiUrl" is a variable that we created in 'environments.ts' and assigned the value of "https://jsonplaceholder.typicode.com/".
      // assigning the data to the variable "post" that we created in line 16.
      this.post = response as IPosts[];
      // filtering the posts to keep only the post with the chosen id.
      this.post = this.post.filter(x => x.id == this.id);
    });
  }

}
