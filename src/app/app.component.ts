import { Component, OnInit  } from '@angular/core';
import { ActorService } from 'src/services/actor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public actorService: ActorService) {}
  data: any;
  ngOnInit(): void {
    console.log('123');
    this.actorService.getActor().subscribe(res => {
      this.data = res;
    });
  }
  title = 'FE';

}
