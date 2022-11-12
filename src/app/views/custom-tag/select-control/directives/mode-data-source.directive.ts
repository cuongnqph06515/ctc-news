import { Directive } from "@angular/core";
import { Observable } from "rxjs";
import { SELECT_DIRECTIVE } from "./constants";
import { Option, SelectDirective } from "./type";
import { of } from "rxjs";

@Directive({
    selector: 'app-select-control[modeDataSource]',
    providers:[{
        provide: SELECT_DIRECTIVE,
        useExisting: ModeDatasourceDirective
    }]
})
export class ModeDatasourceDirective implements SelectDirective{
    option$: Observable<Option[]> = of([
        { label: 'Auto', value: 'auto' },
        { label: 'Manual', value: 'manual' },
      ]);
}
