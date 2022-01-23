import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  // Sharing data between the parent and children components
  // new EventEmitter() tells Angular to create a new event emitter
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost!: Post;
  @Input() isEdit!: boolean;

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  // Method to allow user to add a Post
  addPost(title: any, body: any) {
    if (!title || !body) {
      alert('Please add a post');
    } else {
      this.postService.savePost({ title, body } as Post).subscribe((post) => {
        this.newPost.emit(post);
      });
    }
  }
  // Method to allow user to update a Post
  updatePost() {
    this.postService.updatePost(this.currentPost).subscribe((post) => {
      this.isEdit = false;
      this.updatedPost.emit(post);
    });
  }
}
