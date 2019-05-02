import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident a aperiam numquam tempore aut non quis molestias, officiis, ipsam optio obcaecati fugit. Consectetur similique laboriosam, repellat molestiae quaerat earum fugiat.',
      loveIts: 3,
      created_at: Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident a aperiam numquam tempore aut non quis molestias, officiis, ipsam optio obcaecati fugit. Consectetur similique laboriosam, repellat molestiae quaerat earum fugiat.',
      loveIts: -3,
      created_at: Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident a aperiam numquam tempore aut non quis molestias, officiis, ipsam optio obcaecati fugit. Consectetur similique laboriosam, repellat molestiae quaerat earum fugiat.',
      loveIts: 0,
      created_at: Date()
    },
  ]

}
