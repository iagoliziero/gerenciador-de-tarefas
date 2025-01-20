
import { useState } from "react";
import Input from "./Input";

function AddTasks({onAddTaskSubmit}) {
    const [title, setTitle] =  useState("")
    const [description, setDescription] = useState("")
    return (
        <div 
        className="space-y-4 p-6 bg-slate-600 rounded-md shadow flex flex-col">

            <Input 
            type="text"placeholder="Digite o nome da tarefa"
            value={title} 
             //evento para pegar os valores de title
             onChange={(event) => setTitle(event.target.value)}/>

            <Input 
            type="text"placeholder="Digite a descrição da tarefa" 
            value={description}
            //evento para pegar os valores de description
            onChange={(event) => setDescription(event.target.value)}/>
            <button onClick={() => {
                // verificar se os inputs foram preenchidos
                if(!title.trim() || !description.trim() ) return alert("Preencha o título e a descrição da tarefa")
                onAddTaskSubmit(title, description) 
                setTitle("")
                setDescription("")
            }}
             className="bg-slate-400 p-2 rounded-md text-white transition-margin-right duration-[4s] hover:bg-slate-700  hover:animate-button-hover">
            Adicionar </button>

        </div>
    );
};

export default AddTasks;