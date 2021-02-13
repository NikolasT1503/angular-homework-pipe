import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'joinPipe'
})
export class JoinPipe implements PipeTransform {
    transform(studs, separator) {
        const fios: string[] = studs.map((s) => s.split(",",1)[0].split(" ",1)[0]);
        return fios.join(separator)
    }
}