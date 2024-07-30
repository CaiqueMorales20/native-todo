import { SetStateAction } from 'react'

import { ITask } from '../@types/tasks'

interface ICreateTask {
  setState: React.Dispatch<SetStateAction<ITask[]>>
  newTaskName: string
}

function createTask({ newTaskName, setState }: ICreateTask) {
  setState((prev) => {
    const lastId = prev.length > 0 ? prev[prev.length - 1].id : 0
    return [...prev, { id: lastId + 1, name: newTaskName, completed: false }]
  })
}

export { createTask }
