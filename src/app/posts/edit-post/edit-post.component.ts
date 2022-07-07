import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.models';
import { AppState } from 'src/app/state/app.state';
import { getPostsById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  updatePostForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;

      this.store.select(getPostsById(id)).subscribe((post) => {
        
        if(post) {
          this.createForm(post);
        }
      });
    });
  }

  createForm(post: Post ) {
    this.updatePostForm = new FormGroup({
      title: new FormControl(post.title, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(post.description, [Validators.required,  Validators.minLength(6)])
    });
  }

  updatePost() {

  }

  showDescriptionErrors() {
    const descriptionForm = this.updatePostForm.get('description');
    if (descriptionForm?.touched && !descriptionForm.valid) {
      if (descriptionForm.errors?.required) {
        return 'Description is required';
      } else if (descriptionForm.errors?.minLength) {
        return 'Minimum 6 characters required';
      }
    }
  }
}
