import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFlowService } from '../data-flow.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {


  constructor(private route: ActivatedRoute, private dataFlowService: DataFlowService) { }

  data: Object

  ngOnInit() {
   /* this.sub = this.route
      .data
      .subscribe(v => console.log(v));
    this.route.params.subscribe(params => {
      this.data = params;
    });*/

  this.data = this.dataFlowService.getData();
    console.log('this is movie from details', this.data);
  }

}
