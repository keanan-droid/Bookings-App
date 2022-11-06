import { Component, OnInit } from '@angular/core';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { TableService } from 'src/app/services/table.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private service: TableService, private router:Router) { }
  faEdit = faEdit;
  faTimes = faTimes;

  readData:any;

  ngOnInit(): void {
    this.service.getData().subscribe((res) => {
      this.readData = res.Data;
      
    })
    
  }

  deleteBook(book:any) {
    this.service.delete(book).subscribe((res) => {
      console.log(res);
      this.readData = res.Data;
      this.router.navigate(['']);
    })
  }

}
