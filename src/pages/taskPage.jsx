import { CircleArrowLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title.jsx";

function TaskPage() {
    const [searchParams] = useSearchParams();
        const title = searchParams.get('title');
        const description = searchParams.get('description');

    const navigate = useNavigate()
     
    return (
        <div 
        className="h-screen w-screen bg-zinc-900 text-slate-100 p-6 flex justify-center">
            <div className="w-[500px] space-y-4"> 
                <div className="flex justify-center relative"> 
                <button onClick={() => {
                    navigate(-1)
                }} className="absolute left-0 bottom-0"> 
                    < CircleArrowLeft />
                </button>
                <Title>
                    Detalhes da tarefa
                </Title>
                </div>
                <div className="space-y-4 p-6 bg-slate-600 rounded-md"> 
                    <h2 className="text-xl text-slate-100 font-bold ">  {title} </h2>
                    <p className="text-slate-100"> {description}</p>
                  </div>
            </div>
        </div>
    )
}

export default TaskPage;