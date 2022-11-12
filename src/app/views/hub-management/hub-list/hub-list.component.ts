import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hub } from 'src/app/model/hub.model';
import { HubService } from 'src/app/service/hub.service';

@Component({
  selector: 'app-hub-list',
  templateUrl: './hub-list.component.html',
  styleUrls: ['./hub-list.component.css']
})
export class HubListComponent implements OnInit {

  pageSize = 5;
  pageIndex = 1;
  form = new FormGroup({
    mode: new FormControl(null)
  })

  hubList: Hub[]=[];

  constructor(private hubService: HubService){

  }

  ngOnInit(): void {
    this.getAllHub();
  }

  getAllHub(): void{
    this.hubService.getAllHub().subscribe({
      next: (response)=>{
        this.hubList = response.data;
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }

  submitForm(){

  }

}
