/*** Home.jsx Page ***/

import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, SafeAreaView } from "react-native";
import { motion } from "framer-motion";

/* Images - Icons */
import IconHome from "../assets/images/icons/IconHome.png"
import IconHomeHover from "../assets/images/icons/IconHomeHover.png"
import IconLesson from "../assets/images/icons/IconLesson.png"
import IconLessonHover from "../assets/images/icons/IconLessonHover.png"
import IconAchievement from "../assets/images/icons/IconAchievements.png"
import IconAchievementHover from "../assets/images/icons/IconAchievementsHover.png"
import IconActivity from "../assets/images/icons/IconActivity.png"
import IconActivityHover from "../assets/images/icons/IconActivityHover.png"
/* Images - Lessons */
import IconLessonEnglish from "../assets/images/icons/Lessons/IconLessonEnglish.png"
import IconLessonMalay from "../assets/images/icons/Lessons/IconLessonMalay.png"
import IconLessonScience from "../assets/images/icons/Lessons/IconLessonScience.png"
import IconLessonMaths from "../assets/images/icons/Lessons/IconLessonMaths.png"
import IconLessonTechnology from "../assets/images/icons/Lessons/IconLessonTechnology.png"
import IconLessonGeography from "../assets/images/icons/Lessons/IconLessonGeography.png"
import IconLessonHistory from "../assets/images/icons/Lessons/IconLessonHistory.png"

/* Images - Icons */
import PopHover from "../assets/sfx/sfxpop.mp3"
import UIsfx1 from "../assets/sfx/UISFX.mp3"
import UIsfx2 from "../assets/sfx/UISFX2.mp3"


/* References */
// https://www.pngfind.com/mpng/JRboTm_free-png-of-library-books-book-library-png/
// https://pixabay.com/sound-effects/search/hover/
// https://www.pngegg.com/en/png-wmaxi/download
// https://www.flaticon.com/free-icon/math_3426679
// https://www.clipartmax.com/download/m2H7i8b1Z5d3b1H7_png-malaysia-icon/
// https://www.flaticon.com/free-icon/geography_3635966
// https://icons-for-free.com/history+tutor+world+globe+icon-1320195955885841255/
// https://www.flaticon.com/free-icon/history_2132336

const grades = [
  { id: '1', name: "Starter Island", grade: 1, progress: 0.75, unlocked: true },
  { id: '2', name: "Mountain World", grade: 2, progress: 0.0, unlocked: false },
  { id: '3', name: "Ocean World", grade: 3, progress: 0.0, unlocked: false },
  { id: '4', name: "Space World", grade: 4, progress: 0.0, unlocked: false },
];


export default function HomePage({ navigation }) {

  const handlePress = (grade) => {
    if (grade.unlocked) {
      navigation.navigate('SubjectsPage', { grade });
    } else {
      Alert.alert("Locked", "This grade is locked!");
    }
  };

  const renderGrade = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)} activeOpacity={0.8}>
      <View style={[styles.card, !item.unlocked && styles.cardLocked]}>
        <Text style={[styles.cardTitle, !item.unlocked && styles.textLocked]}>
          {item.name} - Grade {item.grade}
        </Text>
        <View style={styles.progressBackground}>
          <View style={[styles.progressFill, { width: `${item.progress * 100}%` }]} />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hi, Alex!</Text>
        <Text style={styles.levelText}>Level 5</Text>
      </View>
      <Text style={styles.title}>Choose your Grade</Text>
      <Text style={styles.subtitle}>Continue your learning journey</Text>
      <FlatList
        data={grades}
        renderItem={renderGrade}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingVertical: 16 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, backgroundColor: '#F8FAFC' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 },
  headerText: { fontSize: 20, fontWeight: 'bold' },
  levelText: { fontSize: 16, color: '#64748B' },
  title: { fontSize: 22, fontWeight: 'bold', marginTop: 24 },
  subtitle: { fontSize: 14, color: '#64748B', marginBottom: 16 },
  card: { backgroundColor: 'white', borderRadius: 16, padding: 16, marginVertical: 8 },
  cardLocked: { backgroundColor: '#E5E7EB' },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  textLocked: { color: '#9CA3AF' },
  progressBackground: { height: 8, backgroundColor: '#E5E7EB', borderRadius: 8, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: '#22C55E' },
});