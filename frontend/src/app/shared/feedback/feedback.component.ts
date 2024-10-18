import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
  export class FeedbackComponent implements OnInit{

    private serverUrl = 'http://localhost:4000';
    rating = 0
    rideId = ''
    starsArray: boolean[] = [true, true, true, true, true];

    feedbackForm!: FormGroup;
    
    constructor(
      public dialog: MatDialog,
      public dialogRef: MatDialogRef<FeedbackComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private formBuilder: FormBuilder,
      private http: HttpClient
    ){
      this.feedbackForm = this.formBuilder.group({
        name: '',
        email: '',
        phone: '',
        message: ''
    });}
    
    ngOnInit(): void {
    }


  submitForm() {
    const formData = this.feedbackForm.value;

    const message = {
      formData, 
      rideId: this.data.rideId,
      rating: this.rating
    }
    console.log(message);
    
    this.http.post<any>(`${this.serverUrl}/feedback`, message)
    .subscribe(response => {
      console.log('Backend Response:', response);
    });
  }

  setRating(rating: number) {
    this.rating = rating;
  }

  resetForm() {
    this.feedbackForm.reset();
    this.rating = 0;  
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
