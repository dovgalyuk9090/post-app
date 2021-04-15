import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PostService} from "../../shared/post.service";
import {switchMap} from "rxjs/operators";
import {Post} from "../shared/interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  form: FormGroup;
  post: Post;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.postService.getId(params['id']);
      })
    ).subscribe((post: Post) => {
      this.form = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        text: new FormControl(post.text, Validators.required)
      });
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    this.postService.update({
      ...this.post,
      text: this.form.value.text,
      title: this.form.value.title,
    }).subscribe(() => {
      this.submitted = false;
    });
  }

}
