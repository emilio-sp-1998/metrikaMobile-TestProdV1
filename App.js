import React from 'react';
import { SafeAreaView, View, Text, StatusBar, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-gray-900 items-center justify-center px-5">
      <StatusBar barStyle="light-content" backgroundColor="#111827" />

      <View className="mb-8 items-center">
        <Text className="text-3xl font-bold text-gray-50 mb-2">Bienvenido 👋</Text>
        <Text className="text-base text-gray-300">Tu nueva app React Native</Text>
      </View>

      <View className="bg-gray-700 rounded-2xl p-6 w-full items-center shadow-lg shadow-black/40">
        <Text className="text-xl font-semibold text-gray-100 mb-2">¡Listo para empezar!</Text>
        <Text className="text-center text-gray-300 mb-5">
          Edita <Text className="font-bold text-gray-50">App.js</Text> para personalizar esta pantalla.
        </Text>

        <TouchableOpacity className="bg-blue-600 py-3 px-6 rounded-xl active:bg-blue-700">
          <Text className="text-gray-50 text-base font-semibold">Explorar</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-sm text-gray-400 absolute bottom-5">
        Hecho con ❤️ usando React Native
      </Text>
    </SafeAreaView>
  );
}
