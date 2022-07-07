import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.models';
import { AppState } from 'src/app/state/app.state';
import { addPost } from '../state/posts.action';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.scss']
})
export class AddPostsComponent implements OnInit {
  postForm!: FormGroup;
  constructor(private store: Store<AppState>) { }

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
    const post:Post = {
      title: this.postForm.get('title')?.value,
      description: this.postForm.get('description')?.value
    }

    this.store.dispatch(addPost({post}))
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
