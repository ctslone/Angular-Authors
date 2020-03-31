import { Pipe, PipeTransform} from "@angular/core";

@Pipe ({
    name: "form"
})

export class FormPipe implements PipeTransform  {
    transform(value: number, arg?: any) {
        
    }
}