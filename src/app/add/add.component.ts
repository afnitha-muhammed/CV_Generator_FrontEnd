import { Component } from '@angular/core';
import { UserModelModel } from 'src/user.model';
import { OnInit, VERSION } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  userDetails: UserModelModel = {}
  constructor(private api: ApiService, private router: Router) { }

  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      experience: new FormArray([
        new FormGroup({
          company: new FormControl(''),
          designation: new FormControl(''),
          yearofexperience: new FormControl(''),
        })
      ])
    });

    console.log(this.form);
  }

  get experience(): FormArray {
    return this.form.get('experience') as FormArray;
  }

  addexperience() {
    this.experience.push(
      new FormGroup({
        company: new FormControl(''),
        designation: new FormControl(''),
        yearofexperience: new FormControl('')
      })
    );
  }

  cancel() {
    this.userDetails = {}
  }

  add() {
    console.log(this.userDetails);
    this.api.addcvapi(this.userDetails).subscribe({
      next: (res: any) => {
        console.log(res);
        alert("New Cv Created")
        this.router.navigateByUrl('/')
      },
      error: (err: any) => {
        console.log(err);
        alert("failed")
      }
    })
  }
}
