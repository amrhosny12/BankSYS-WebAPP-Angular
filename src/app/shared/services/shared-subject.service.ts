import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedSubjectService {

  splitSection = new Subject<string>();

  constructor() { }
}
