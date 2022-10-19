import { Pipe, PipeTransform } from '@angular/core'
import { Todo } from './models/todo.model'
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    console.log('PIPE->', filtro)

    switch( filtro ) {

      case 'completados':
        
        console.log(todos.filter( todo => todo.completado ))
        return todos.filter( todo => todo.completado );
      
      case 'pendientes':
        return todos.filter( todo => !todo.completado );

      default:
        return todos;
    }

  }

}
