import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-deck-swiper";
import jobs from '../../assets/jobs.json';
import { useUser } from '../context/UserContext'; // Adjust the path as necessary

const { height } = Dimensions.get('window');

const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const { saveJob, savedJobs } = useUser();

  const handleSaveJob = (job) => {
    saveJob(job);
  };

  return (
    <View style={styles.container}>
      <View style={styles.swiperContainer}>
        <Swiper
          cards={jobs}
          renderCard={(job) => (
            <View style={styles.card}>
              <View className="py-64 mb-12 bg-white border border-gray-300 rounded-xl">
                <Text className="font-bold text-center text-2xl text-gray-700">{job.title}</Text>
                <Text className="text-lg text-center">{job.company}</Text>
                <Text className="text-md font-medium text-gray-600 text-center">{job.location}</Text>
              </View>
            </View>
          )}
          onSwiped={(cardIndex) => setIndex(cardIndex + 1)}
          onSwipedRight={(cardIndex) => handleSaveJob(jobs[cardIndex])}
          onSwipedAll={() => console.log('All cards swiped')}
          cardIndex={index}
          backgroundColor={"#f5f5f5"}
          stackSize={3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 3,
  },
  swiperContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 800
  },
  card: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

export default HomeScreen;
