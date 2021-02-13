import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(studs, filterStr) {
        return studs.filter(s => {
            return s.name.includes(filterStr)
        })
    }
}