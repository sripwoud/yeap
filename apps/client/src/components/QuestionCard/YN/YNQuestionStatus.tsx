import { Equal, Hourglass, ThumbsDown, ThumbsUp } from 'lucide-react'
import type { FC } from 'react'

interface YNQuestionStatusProps {
  active: boolean
  no: number
  size: number
  yes: number
}

export const YNQuestionStatus: FC<YNQuestionStatusProps> = ({ active, no, size, yes }) => {
  const hasVotes = (yes + no) > 0
  const hasMoreYes = yes > no && hasVotes
  const hasMoreNo = no > yes && hasVotes
  const draw = yes === no && hasVotes

  if (active) return <Hourglass size={size} />
  if (hasMoreYes) return <ThumbsUp className='text-green-500' size={size} />
  if (hasMoreNo) return <ThumbsDown className='text-red-500' size={size} />
  if (draw) return <Equal className='text-gray-500' size={size} />
  return
}
