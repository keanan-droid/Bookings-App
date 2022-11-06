import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TableService } from 'src/app/services/table.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-table',
  templateUrl: './update-table.component.html',
  styleUrls: ['./update-table.component.css']
})
export class UpdateTableComponent implements OnInit {

  constructor(private router:ActivatedRoute,private service: TableService,private path:Router) { }

  newBookForm = new FormGroup({
    'Title': new FormControl('', Validators.required),
    'Author': new FormControl('', Validators.required),
    'Issue': new FormControl('', Validators.required), 
    'Date': new FormControl('', Validators.required), 
    'State': new FormControl('', Validators.required) 
  });

  readData:any;
  id:any = this.router.snapshot.params['id']

  ngOnInit(): void {

  }

  updateBook(id:any) {
    this.service.update(id,this.newBookForm.value).subscribe((res) => {
      console.log(res);
      this.readData = res.Data;
      this.path.navigate(['/table']);
    })
  }

}
