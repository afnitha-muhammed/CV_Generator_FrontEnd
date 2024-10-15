import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allusers: any = []

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getallusers()
  }


  getallusers() {
    this.api.getAllUsersApi().subscribe({
      next: (res: any) => {
        console.log(res);
        this.allusers = res
        console.log(this.allusers);

      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

}
