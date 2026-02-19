import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {

  return (
    <div id='Task' className='flex justify-start overflow-x-auto flex-nowrap gap-5 items-center mt-10 h-[60%] w-full'>
        {data.tasks.map((elem, idx)=>{
            if(elem.active_task){
                return <AcceptTask key={idx} data={elem}/>
            }
            if(elem.new_task){
                return <NewTask key={idx} data={elem}/>
            }
            if(elem.failed_task){
                return <FailedTask key={idx} data={elem}/>
            }
            if(elem.completed_task){
                return <CompleteTask key={idx} data={elem}/>
            }
        })}
    </div>
  )
}

export default TaskList