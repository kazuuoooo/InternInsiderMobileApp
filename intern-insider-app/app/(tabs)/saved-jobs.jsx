import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useUser } from '../context/UserContext'; // Adjust the path as necessary

const SavedJobs = () => {
  const { savedJobs } = useUser();

  return (
    <View className="bg-gray-100 flex-1 p-3">
      <View className="flex-1 w-full bg-white rounded-xl pt-6 items-center justify-center">
        <Text className="text-2xl uppercase font-bold text-gray-700 text-center mb-6">
          Saved Jobs
        </Text>
        {savedJobs.length > 0 ? (
          <ScrollView contentContainerStyle={{ flexGrow: 1, width: '100%', paddingHorizontal: 20 }}>
            {savedJobs.map((item) => (
              <View key={item.id.toString()} className="w-full p-4 mb-4 bg-white border border-gray-300 rounded-xl flex-row justify-between items-center">
                <View>
                  <Text className="font-bold text-xl text-gray-700">{item.title}</Text>
                  <Text className="text-lg text-gray-600">{item.company}</Text>
                  <Text className="text-md text-gray-500">{item.location}</Text>
                </View>
                <TouchableOpacity className="bg-indigo-600 py-2 px-4 rounded-2xl">
                  <Text className="text-center text-white text-lg">Apply</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        ) : (
          <Text className="text-lg text-gray-500">No saved jobs yet.</Text>
        )}
      </View>
    </View>
  );
};

export default SavedJobs;
