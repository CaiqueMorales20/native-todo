import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { Pressable, Text, View } from 'react-native'
import { twMerge } from 'tailwind-merge'
import colors from 'tailwindcss/colors'

import { ITask } from '../@types/tasks'

export function Item({ name, completed, onDelete, onComplete }: ITask) {
  return (
    <View className="flex-row items-center justify-between bg-neutral-600 p-3">
      <View>
        <Pressable
          onPress={onComplete}
          className="h-10 w-10 items-center justify-center"
        >
          {completed ? (
            <FontAwesome name="circle" size={17} color={colors.blue[500]} />
          ) : (
            <FontAwesome name="circle-o" size={17} color={colors.blue[500]} />
          )}
        </Pressable>
      </View>
      <Text
        className={twMerge(
          completed ? 'text-neutral-400 line-through' : 'text-white',
        )}
      >
        {name}
      </Text>
      <Pressable
        onPress={onDelete}
        className="h-10 w-10 items-center justify-center"
      >
        <FontAwesome5 name="trash-alt" size={14} color={colors.neutral[400]} />
      </Pressable>
    </View>
  )
}
