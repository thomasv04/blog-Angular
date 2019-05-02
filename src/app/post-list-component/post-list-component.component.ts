import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent : string;
  @Input() postDate : Date;
  @Input() postLoveIts : number;
  @Input() postDontLoveIts : number;

  onClickLove(love){
    if(love === 'love'){
      this.postLoveIts++;
    }else if(love === 'dontlove'){
      this.postLoveIts--;
    }
  }


  getDate(){
    return Date()
  }

  constructor() { }

  ngOnInit() {
  }

}
