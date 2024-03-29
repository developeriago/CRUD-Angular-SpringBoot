import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';
import { Course } from '../model/course';
import { catchError, Observable, of } from 'rxjs'
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category', 'actions'];



  constructor(private coursesServices: CoursesService, public dialog: MatDialog, private router: Router, private route: ActivatedRoute){

    this.courses$ = this.coursesServices.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar os cursos.');
        return of([])
      })
    );

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit():void{

  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
