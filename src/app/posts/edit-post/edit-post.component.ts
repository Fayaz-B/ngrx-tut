import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.models';
import { AppState } from 'src/app/state/app.state';
import { updatePost } from '../state/posts.action';
import { getPostsById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  updatePostForm!: FormGroup;
  id: string = ''

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;

      this.store.select(getPostsById(this.id)).subscribe((post) => {
        
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
    if(this.updatePostForm.invalid) {
      return
    }
    const post: Post = {
      id: this.id,
      title: this.updatePostForm.get('title')?.value,
      description: this.updatePostForm.get('description')?.value
    }

    this.store.dispatch(updatePost({post}))
    this.router.navigate(['/posts'])

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
