import { Component, forwardRef, Inject, Input } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { BaseControlValueAccessor } from '../../../commons/base-control-value-accessor';
import { SELECT_DIRECTIVE } from './directives/constants';
import { ModeDatasourceDirective } from './directives/mode-data-source.directive';
import { Option } from './directives/type';

@Component({
  selector: 'app-select-control',
  templateUrl: './select-control.component.html',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> SelectControlComponent),
    multi: true
  }]
})
export class SelectControlComponent extends BaseControlValueAccessor{
  @Input() placeholder = '';
  option$: Observable<Option[]>;

  constructor(controlContainer: ControlContainer,
    @Inject(SELECT_DIRECTIVE) directive: ModeDatasourceDirective) { 
    super(controlContainer)
      this.option$ = directive? directive.option$ : of([]);
  }
}
