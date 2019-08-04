<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TasksController extends Controller{
    public function getAll(){
        $tasks = Task::all();

        return response()->json($tasks);
    }

    public function addTask(Request $request){
        // Validation
        $validate = $this->validate($request, [
            'title' => ['required'],
            'content' => ['required']
        ]);

        // Recogiendo datos
        $title = $request->input('title');
        $content = $request->input('content');

        // Asignar valores al objeto
        $task = new Task();
        $task->title = $title;
        $task->content = $content;

        $task->save();

        return response()->json($task);
    }

    public function getTask($id){
        // Obtener task unico
        $task = Task::find($id);

        return response()->json($task);
    }

    public function removeTask($id){
        // Obtener task unico
        $task = Task::find($id);

        $task->delete();

        return response()->json([
            'message' => 'Task successfully removed'
        ]);
    }

    public function updateTask($id, Request $request){
        // Validation
        $validate = $this->validate($request, [
            'title' => ['required'],
            'content' => ['required']
        ]);

        // Recogiendo datos
        $title = $request->input('title');
        $content = $request->input('content');

        // Asignar valores al objeto
        $task = Task::find($id);
        $task->title = $title;
        $task->content = $content;

        $task->update();

        return response()->json($task);
    }
}
