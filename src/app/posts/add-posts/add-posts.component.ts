import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.scss']
})
export class AddPostsComponent implements OnInit {
  postForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      description: new FormControl(null,[
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }


  onAddPost() {

  }

  showDescriptionErrors(){
    const descriptionForm = this.postForm.get('description');
    if(descriptionForm?.touched && !descriptionForm.valid) {
      if(descriptionForm.errors?.required){
        return 'Description is required'
      }else if(descriptionForm.errors?.minLength) {
        return 'Minimum 6 characters required'
      }
    }
  }
}
