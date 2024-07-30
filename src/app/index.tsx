import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from 'react'
import {
  FlatList,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native'
import { twMerge } from 'tailwind-merge'
import colors from 'tailwindcss/colors'

export default function Index() {
  const [tasks, setTasks] = useState()

  return (
    <View className="flex-1 bg-neutral-800 px-10">
      <View className="-translate-y-7 flex-row gap-4">
        <TextInput
          className={twMerge(
            'h-14 flex-1 rounded-md bg-neutral-900 px-4',
            Platform.OS === 'ios'
              ? 'text-white'
              : 'text-white placeholder:text-white/60',
          )}
        />
        <Pressable className="h-14 w-14 items-center justify-center rounded-md bg-blue-400">
          <Ionicons name="add-circle-outline" size={18} color="white" />
        </Pressable>
      </View>

      <View>
        <View
          className={twMerge(
            'flex-row justify-between',
            !tasks && 'mb-20 border-b border-neutral-600 pb-5',
          )}
        >
          <View className="flex-row items-center gap-2">
            <Text className="font-bold text-blue-400">Created</Text>
            <View className="rounded-full bg-neutral-600 px-3 py-1">
              <Text className="font-bold text-blue-400">0</Text>
            </View>
          </View>
          <View className="flex-row items-center gap-2">
            <Text className="font-bold text-blue-400">Finished</Text>
            <View className="rounded-full bg-neutral-600 px-3 py-1">
              <Text className="font-bold text-blue-400">0</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          renderItem={() => <Text></Text>}
          ListEmptyComponent={() => (
            <View className="items-center">
              <FontAwesome5
                name="clipboard-list"
                size={102}
                color={colors.neutral[600]}
              />
              <Text className="mt-10 text-lg font-bold text-neutral-600">
                You do not have any registered tasks yet
              </Text>
              <Text className="text-lg text-neutral-600">
                Create tasks and organize your to-do items
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}
