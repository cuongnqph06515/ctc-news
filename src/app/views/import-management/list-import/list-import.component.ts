import { Component, OnInit } from '@angular/core';
import { Import } from 'src/app/model/import.model';
import { ImportService } from 'src/app/service/import.service';

@Component({
  selector: 'app-list-import',
  templateUrl: './list-import.component.html',
  styleUrls: ['./list-import.component.css']
})
export class ListImportComponent implements OnInit {

  importList: Import[]=[];

  constructor(private importService: ImportService) { }

  ngOnInit(): void {
    this.getAllImport();
  }

  //get import
  getAllImport(): void{
    this.importService.getAllImport().subscribe({
      next: (response)=>{
        this.importList = response.data;
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }
}
