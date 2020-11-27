import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  updateAcc: FormGroup;

  currentUser;

  constructor(public dialogRef: MatDialogRef<UserprofileComponent>, private fb: FormBuilder) {
    this.updateAcc = this.fb.group({
      "email": [{ value: '', disabled: false }],
      "name": ['', [Validators.required, Validators.minLength(4)]],
      "address": ['', [Validators.required, Validators.minLength(4)]],
      "picture":['']
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  updateAccount(){
    alert('update logic here');
    this.dialogRef.close();
  }

}
