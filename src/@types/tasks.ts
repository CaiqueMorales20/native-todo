interface ITask {
  id: number
  name: string
  completed: boolean
  onDelete: () => void
  onComplete: () => void
}

export type { ITask }
