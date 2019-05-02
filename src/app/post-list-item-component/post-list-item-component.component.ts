import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent : string;
  @Input() postDate : Date;
  @Input() postLoveIts : number;
  @Input() postDontLoveIts : number;

  onClickLove(love : string){
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
