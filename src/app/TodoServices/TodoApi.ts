import { Injectable } from '@angular/core';
import { Todo } from '../model/Todo';

@Injectable({ providedIn: 'root' })

export default class TodoApi {
    fetchTodo(): Promise<Array<Todo>> {
        return new Promise((resolve) => {
            {
                resolve([
                    new Todo('Module Angular', false, 0),
                    new Todo('Module JavaScript', false, 1),
                    new Todo('Module TypeScript', false, 2),
                ])
            };
        });
    }

}