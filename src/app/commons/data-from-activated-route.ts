
import { ActivatedRoute } from "@angular/router";
import { map, Observable } from "rxjs";

export function routeParamMapFactory(paramKey: string): 
    (route: ActivatedRoute) => Observable<string | null>{
            return (route: ActivatedRoute): Observable<string | null> =>{
                return route.paramMap.pipe(map(param => param.get(paramKey)));
            };
}
export function routeSnapshotParamFactory(paramKey: string): 
    (route: ActivatedRoute) => string | null {
        return (route: ActivatedRoute): string | null =>{
            return route.snapshot.paramMap.get(paramKey);
        }
}
export function routeQueryParamFactory(paramKey: string):  
    (route: ActivatedRoute)=> Observable<string| null>{
    return (route: ActivatedRoute): (Observable<string| null>)=>{
        return route.queryParamMap.pipe(map((param) => param.get(paramKey)));
    }
}
export function routeSnapshotQueryFactory(paramKey: string): 
    (route: ActivatedRoute) => string | null{
    return function(route: ActivatedRoute): string | null{
        return route.snapshot.queryParamMap.get(paramKey);
    }
}