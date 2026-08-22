import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {

  return (
    <div id='Task' className='mt-6 flex w-full snap-x snap-mandatory items-stretch gap-4 overflow-x-auto pb-3 pt-1 sm:mt-8 sm:gap-5 lg:mt-10'>
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
