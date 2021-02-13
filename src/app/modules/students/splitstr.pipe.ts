import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'splitstr'
})
export class SplitStrPipe implements PipeTransform {
    transform(str: string, numOfLexem: any) {
        console.log('splitstrPipe',str,numOfLexem);
        const lexems = str.split(",");
        console.log('splitstrPipe',lexems[numOfLexem]);
        return lexems[numOfLexem]
    }
}