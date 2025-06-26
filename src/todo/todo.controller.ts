// src/todo/todo.controller.ts
@Get('todos')
getTodos() {
  return ['Buy milk', 'Code NestJS', 'Write tests'];
}

