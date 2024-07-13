import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

const Profile = () => {
  return (
    <View className="bg-gray-100 flex-1 p-3">
      <View className="flex-1 bg-white rounded-xl pt-6 items-center justify-start px-4">
        <Text className="text-2xl uppercase font-bold text-gray-700 text-center mb-4">
          Your Profile
        </Text>
        <TextInput
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
        />
        <TextInput
          placeholder="Email"
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
        />
        <TouchableOpacity className="bg-indigo-600 py-3 px-6 rounded-2xl w-full">
          <Text className="text-center text-white text-lg text-bold">
            Your Plan
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
