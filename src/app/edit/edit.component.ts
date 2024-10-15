import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { UserModelModel } from 'src/user.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  userDetails: UserModelModel = {}

  constructor(private Aroute: ActivatedRoute, private api: ApiService, private router:Router) { }

  editForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  ngOnInit(): void {
    this.Aroute.params.subscribe((res: any) => {
      console.log(res.id);
      const { id } = res
      this.getuser(id)
    })
  }

  getuser(id: any) {
    this.api.getUserApi(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.userDetails = res
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  edit() {
    this.api.updateUserApi(this.userDetails.id, this.userDetails).subscribe({
      next: (res: any) => {
        console.log(res);
        alert("user Details Updated Successfully")
        this.router.navigateByUrl('/')
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

}
