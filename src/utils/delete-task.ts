import { SetStateAction } from 'react'

import { ITask } from '../@types/tasks'

interface IDeleteTask {
  setState: React.Dispatch<SetStateAction<ITask[]>>
  idToDelete: number
}

function deleteTask({ idToDelete, setState }: IDeleteTask) {
  setState((prev) => prev.filter((task) => task.id !== idToDelete))
}

export { deleteTask }
