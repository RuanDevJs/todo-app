import { useState, ChangeEvent } from "react";
import { ClipboardText, PlusCircle, Trash } from "phosphor-react";

import uuid from "react-uuid";
import * as Styled from "./styles.ts";

interface Task {
  _id: string;
  title: string;
  done: boolean;
}

export default function Tasks() {
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([
    {
      _id: uuid(),
      title: "Lorem ipsum dolor sit amet.",
      done: false
    },
    {
      _id: uuid(),
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fuga!",
      done: false
    },
    {
      _id: uuid(),
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eius velit impedit ipsum illum repellat nostrum possimus officia vel corporis.",
      done: false
    },
    {
      _id: uuid(),
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      done: false
    },
  ]);

  function handleAddTasks() {
    if(newTask.trim() === '' || !newTask.length){
      return alert('Preencha o formulário 😡');
    }

    setTasks(oldValue => [...oldValue, {
      _id: uuid(),
      title: newTask.trim(),
      done: false
    }]);

    setNewTask('');
  }

  function handleDoneTask(e: ChangeEvent<HTMLInputElement>, selectedTask: Task) {
    const updatedTasks: Task[] = tasks.map((task) => {
      if(task._id === selectedTask._id){
        task = {
          _id: task._id,
          title: task.title,
          done: e.target.checked
        }
      }

      return task;
    })

    setTasks(updatedTasks);
  }

  function handleDelete(selectedTask: Task) {
    const updatedTasks: Task[] = tasks.filter((task) => task._id !== selectedTask._id);

    setTasks(updatedTasks);
  }

  const doneTasks = tasks.filter(task => task.done === true).length;

  return (
    <Styled.Container>
      <Styled.Input
        placeholder="Adicione uma nova tarefa"
        onChange={e => setNewTask(e.target.value)}
        value={newTask}
      />
      <Styled.Button onClick={handleAddTasks}>
        Criar
        <PlusCircle size={24} weight="bold" />
      </Styled.Button>
      <Styled.Created>
        <Styled.CreatedText> Tarefas criadas </Styled.CreatedText>
        <Styled.Count>{tasks.length}</Styled.Count>
      </Styled.Created>
      <Styled.Done>
        <Styled.DoneText>Concluídas</Styled.DoneText>
        <Styled.Count>{doneTasks}</Styled.Count>
      </Styled.Done>
      <Styled.Tasks>
        {
          tasks.length ?
            tasks.map((task) => {
              return (
                <Styled.Task key={`$key=${task._id}`}>
                  <Styled.TaskInput
                    type="checkbox"
                    name="check"
                    onChange={e => handleDoneTask(e, task)}
                  />
                  <Styled.TaskTitle className={task.done && 'done'}>
                    {task.title}
                  </Styled.TaskTitle>
                  <Styled.DeleteTask onClick={() => handleDelete(task)}>
                    <Trash size={20} />
                  </Styled.DeleteTask>
                </Styled.Task>
              )
            })
            :
            <Styled.EmptyTasks>
              <ClipboardText size={60} weight="light" color="#808080" />
              <Styled.EmptyTitle> Você ainda não tem tarefas cadastradas </Styled.EmptyTitle>
              <Styled.EmptyDescription>Crie tarefas e organize seus itens a fazer</Styled.EmptyDescription>
            </Styled.EmptyTasks>
        }

      </Styled.Tasks>
    </Styled.Container>
  )
}
