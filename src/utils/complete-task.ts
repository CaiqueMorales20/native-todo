import { SetStateAction } from 'react'

import { ITask } from '../@types/tasks'

interface ICompleteTask {
  setState: React.Dispatch<SetStateAction<ITask[]>>
  idToComplete: number
}

function completeTask({ idToComplete, setState }: ICompleteTask) {
  setState((prev) =>
    prev.map((task) => {
      if (task.id === idToComplete)
        return {
          ...task,
          completed: !task.completed,
        }
      return task
    }),
  )
}

export { completeTask }
