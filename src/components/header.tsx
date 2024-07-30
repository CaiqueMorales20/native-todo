import { Platform, StatusBar as RNStatusBar, Text, View } from 'react-native'

export function Header() {
  const statusBarHeight = Platform.OS === 'ios' ? 20 : RNStatusBar.currentHeight

  return (
    <View className="h-56 items-center justify-center bg-black">
      <Text
        style={{ marginTop: statusBarHeight }}
        className="text-2xl font-bold uppercase text-white"
      >
        Native <Text className="text-blue-400">Todo</Text>
      </Text>
    </View>
  )
}
