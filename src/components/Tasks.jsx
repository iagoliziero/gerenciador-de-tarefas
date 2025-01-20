import {CircleArrowRight, Trash2, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button.jsx';

function Tasks({tasks, onTaskClick, onDeleteTask}) {
    const navigate = useNavigate()

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/detalhes-tarefa?${query.toString()}`)
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-600 rounded-md shadow "> {tasks.map((task) =>
            (
            <li key={task.id}  className="flex gap-2">

            <button onClick={() => onTaskClick(task.id)} 
            className={`" bg-slate-400 text-slate-100 p-2 rounded-md w-full text-left flex gap-2 "`}> {task.isCompleted && <Check />}  {task.title}  </button>

            <Button 
            onClick={() => onSeeDetailsClick(task)}> <CircleArrowRight /> 
            
            </Button>

            <Button onClick={() => onDeleteTask(task.id)}>
            <Trash2 /> </Button>
             </li>
            ))}
         </ul>
    )
}

export default Tasks