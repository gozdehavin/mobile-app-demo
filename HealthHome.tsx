// HealthHome.tsx - Updated version with AddReminderScreen integration

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AddReminderScreen from './AddReminderScreen'; // Import the new screen

const { width } = Dimensions.get('window');

interface Medicine {
  id: string;
  name: string;
  dose: string;
  unit: string;
  time: string;
  color: string[];
  icon: string;
}

interface DayItem {
  day: string;
  date: number;
  isToday: boolean;
}

interface MedicineReminderScreenProps {
  onBack: () => void;
  onAddReminder: () => void; // Added this prop
}

// Medicine Reminder Screen Component
const MedicineReminderScreen: React.FC<MedicineReminderScreenProps> = ({
  onBack,
  onAddReminder
}) => {
  const [selectedDay, setSelectedDay] = useState(2);

  const today = new Date();
  const currentDayIndex = today.getDay();

  const dayNames = [ 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue'];
  const todayIndex = 2;

  const days: DayItem[] = dayNames.map((day, i) => {
    const offset = i - todayIndex;
    const date = new Date(today);
    date.setDate(today.getDate() + offset);

    return {
      day,
      date: date.getDate(),
      isToday: i === todayIndex,
    };
  });

  const todayMedicines: Medicine[] = [
    {
      id: '1',
      name: 'Azoptex Obat',
      dose: '10',
      unit: 'mg',
      time: 'After lunch',
      color: ['#8B5CF6', '#A78BFA'],
      icon: '💊'
    },
    {
      id: '2',
      name: 'Ketoprofen',
      dose: '2',
      unit: 'Tablet',
      time: 'After lunch',
      color: ['#EC4899', '#F472B6'],
      icon: '💊'
    }
  ];

  const renderDayButton = (dayItem: DayItem, index: number) => (
    <TouchableOpacity
      key={index}
      style={[
        medicineStyles.dayButton,
        selectedDay === index && medicineStyles.selectedDayButton
      ]}
      onPress={() => setSelectedDay(index)}
    >
      <Text style={[
        medicineStyles.dayText,
        selectedDay === index && medicineStyles.selectedDayText
      ]}>
        {dayItem.day}
      </Text>
      <Text style={[
        medicineStyles.dateText,
        selectedDay === index && medicineStyles.selectedDateText
      ]}>
        {dayItem.date}
      </Text>
    </TouchableOpacity>
  );

  const renderMedicineCard = (medicine: Medicine) => (
    <LinearGradient
      key={medicine.id}
      colors={medicine.color}
      style={medicineStyles.medicineCard}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={medicineStyles.medicineInfo}>
        <View style={medicineStyles.medicineIconContainer}>
          <Text style={medicineStyles.medicineIcon}>{medicine.icon}</Text>
        </View>
        <View style={medicineStyles.medicineDetails}>
          <Text style={medicineStyles.medicineName}>{medicine.name}</Text>
          <Text style={medicineStyles.medicineTime}>{medicine.time}</Text>
        </View>
      </View>
      <View style={medicineStyles.doseContainer}>
        <Text style={medicineStyles.doseNumber}>{medicine.dose}</Text>
        <Text style={medicineStyles.doseUnit}>{medicine.unit}</Text>
      </View>
    </LinearGradient>
  );

  return (
    <View style={medicineStyles.fullScreen}>
      <StatusBar barStyle="light-content" backgroundColor="#1E1B4B" />

      <LinearGradient
        colors={['#1E1B4B', '#312E81', '#3730A3']}
        style={medicineStyles.header}
      >
        <SafeAreaView>
          <View style={medicineStyles.headerContent}>
            <TouchableOpacity onPress={onBack} style={medicineStyles.backButton}>
              <Text style={medicineStyles.backArrow}>←</Text>
              <Text style={medicineStyles.backText}>Back</Text>
            </TouchableOpacity>

            <View style={medicineStyles.pillsContainer}>
              <View style={[medicineStyles.pill, medicineStyles.pill1]} />
              <View style={[medicineStyles.pill, medicineStyles.pill2]} />
              <View style={[medicineStyles.pill, medicineStyles.pill3]} />
              <View style={[medicineStyles.pill, medicineStyles.pill4]} />
              <View style={[medicineStyles.pill, medicineStyles.pill5]} />
              <View style={[medicineStyles.pillBottle]} />
            </View>

            <Text style={medicineStyles.headerTitle}>Reminders</Text>
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView style={medicineStyles.content} showsVerticalScrollIndicator={false}>
        <View style={medicineStyles.daysContainer}>
          {days.map((dayItem, index) => renderDayButton(dayItem, index))}
        </View>

        <View style={medicineStyles.activitiesSection}>
          <Text style={medicineStyles.sectionTitle}>Today Activities</Text>

          <View style={medicineStyles.medicinesContainer}>
            {todayMedicines.map(renderMedicineCard)}
          </View>
        </View>

        <TouchableOpacity
          style={medicineStyles.addButton}
          onPress={onAddReminder} // Updated to call onAddReminder
        >
          <LinearGradient
            colors={['#8B5CF6', '#A78BFA']}
            style={medicineStyles.addButtonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={medicineStyles.addButtonIcon}>+</Text>
            <Text style={medicineStyles.addButtonText}>Add New Reminder</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

// Main Health Home Component
const HealthHome: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'medicine-reminder' | 'add-reminder'>('home');
  const [currentTime, setCurrentTime] = useState(new Date());
  const pulseAnim = new Animated.Value(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    return () => clearInterval(timer);
  }, []);

  const navigateToMedicineReminder = () => {
    setCurrentView('medicine-reminder');
  };

  const navigateToAddReminder = () => {
    setCurrentView('add-reminder');
  };

  const navigateBack = () => {
    setCurrentView('home');
  };

  const navigateBackToReminders = () => {
    setCurrentView('medicine-reminder');
  };

  const handleSaveReminder = (reminderData: any) => {
    console.log('Saving reminder:', reminderData);
    // Here you can handle saving the reminder data
    setCurrentView('medicine-reminder');
  };

  // Render different screens based on currentView
  if (currentView === 'add-reminder') {
    return (
      <AddReminderScreen
        onBack={navigateBackToReminders}
        onSave={handleSaveReminder}
      />
    );
  }

  if (currentView === 'medicine-reminder') {
    return (
      <MedicineReminderScreen
        onBack={navigateBack}
        onAddReminder={navigateToAddReminder}
      />
    );
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <View style={homeStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3B82F6" />
      
      {/* Header */}
      <LinearGradient
        colors={['#3B82F6', '#2563EB']}
        style={homeStyles.header}
      >
        <SafeAreaView>
          <View style={homeStyles.headerContent}>
            <View style={homeStyles.headerTop}>
              <View>
                <Text style={homeStyles.welcomeText}>Welcome back!</Text>
                <Text style={homeStyles.timeText}>{formatTime(currentTime)}</Text>
                <Text style={homeStyles.dateText}>{formatDate(currentTime)}</Text>
              </View>
              <Animated.View style={[homeStyles.profileContainer, { transform: [{ scale: pulseAnim }] }]}>
                <Text style={homeStyles.profileIcon}>👤</Text>
              </Animated.View>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView style={homeStyles.content} showsVerticalScrollIndicator={false}>
        {/* Health Status Card */}
        <View style={homeStyles.statusCard}>
          <Text style={homeStyles.statusTitle}>How is your health today?</Text>
          <Text style={homeStyles.statusSubtitle}>It's been over a year since your last visit</Text>
          
          <TouchableOpacity style={homeStyles.scheduleButton}>
            <LinearGradient
              colors={['#8B5CF6', '#A78BFA']}
              style={homeStyles.scheduleGradient}
            >
              <Text style={homeStyles.scheduleIcon}>🩺</Text>
              <View style={homeStyles.scheduleTextContainer}>
                <Text style={homeStyles.scheduleTitle}>Blood test</Text>
                <Text style={homeStyles.scheduleDate}>Schedule the visit • 2 March 08:00 am</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={homeStyles.quickActionsContainer}>
          <Text style={homeStyles.sectionTitle}>Quick Actions</Text>
          
          <View style={homeStyles.actionsGrid}>
            <TouchableOpacity 
              style={homeStyles.actionCard}
              onPress={navigateToMedicineReminder}
            >
              <LinearGradient
                colors={['#EC4899', '#F472B6']}
                style={homeStyles.actionGradient}
              >
                <Text style={homeStyles.actionIcon}>💊</Text>
                <Text style={homeStyles.actionTitle}>Medicine Reminders</Text>
                <Text style={homeStyles.actionSubtitle}>Manage your medications</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyles.actionCard}>
              <LinearGradient
                colors={['#10B981', '#34D399']}
                style={homeStyles.actionGradient}
              >
                <Text style={homeStyles.actionIcon}>📊</Text>
                <Text style={homeStyles.actionTitle}>Health Metrics</Text>
                <Text style={homeStyles.actionSubtitle}>Track your progress</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyles.actionCard}>
              <LinearGradient
                colors={['#F59E0B', '#FBBF24']}
                style={homeStyles.actionGradient}
              >
                <Text style={homeStyles.actionIcon}>📅</Text>
                <Text style={homeStyles.actionTitle}>Appointments</Text>
                <Text style={homeStyles.actionSubtitle}>Schedule & manage</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyles.actionCard}>
              <LinearGradient
                colors={['#EF4444', '#F87171']}
                style={homeStyles.actionGradient}
              >
                <Text style={homeStyles.actionIcon}>🚨</Text>
                <Text style={homeStyles.actionTitle}>Emergency</Text>
                <Text style={homeStyles.actionSubtitle}>Quick access</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={homeStyles.recentActivity}>
          <Text style={homeStyles.sectionTitle}>Recent Activity</Text>
          
          <View style={homeStyles.activityItem}>
            <View style={homeStyles.activityIcon}>
              <Text style={homeStyles.activityEmoji}>💊</Text>
            </View>
            <View style={homeStyles.activityContent}>
              <Text style={homeStyles.activityTitle}>Took Ketoprofen</Text>
              <Text style={homeStyles.activityTime}>2 hours ago</Text>
            </View>
          </View>

          <View style={homeStyles.activityItem}>
            <View style={homeStyles.activityIcon}>
              <Text style={homeStyles.activityEmoji}>🩺</Text>
            </View>
            <View style={homeStyles.activityContent}>
              <Text style={homeStyles.activityTitle}>Blood pressure recorded</Text>
              <Text style={homeStyles.activityTime}>Yesterday</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// Home Styles
const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingBottom: 24,
  },
  headerContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  timeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 14,
    color: '#DBEAFE',
  },
  profileContainer: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    fontSize: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  statusCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginTop: 7,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 24,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  statusSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  scheduleButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  scheduleGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  scheduleIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  scheduleTextContainer: {
    flex: 1,
  },
  scheduleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginBottom: 2,
  },
  scheduleDate: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  quickActionsContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: (width - 51) / 2,
    marginBottom: 12,
    borderRadius: 16,
    overflow: 'hidden',
  },
  actionGradient: {
    padding: 16,
    alignItems: 'center',
    minHeight: 120,
    justifyContent: 'center',
  },
  actionIcon: {
    fontSize: 27,
    marginBottom: 8,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  recentActivity: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  activityIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityEmoji: {
    fontSize: 20,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 12,
    color: '#6B7280',
  },
});

// Medicine Reminder Styles
const medicineStyles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    paddingBottom: 30,
  },
  headerContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    position: 'relative',
    overflow: 'hidden',
    minHeight: 120,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  backArrow: {
    fontSize: 20,
    color: 'white',
    marginRight: 4,
  },
  backText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  pillsContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  pill: {
    position: 'absolute',
    borderRadius: 8,
  },
  pill1: {
    width: 22,
    height: 10,
    backgroundColor: '#EF4444',
    top: 30,
    right: 80,
    transform: [{ rotate: '15deg' }],
  },
  pill2: {
    width: 16,
    height: 14,
    backgroundColor: '#10B981',
    borderRadius: 24,
    top: 60,
    right: 120,
  },
  pill3: {
    width: 25,
    height: 15,
    backgroundColor: '#F59E0B',
    top: 80,
    right: 60,
    transform: [{ rotate: '-20deg' }],
  },
  pill4: {
    width: 18,
    height: 12,
    backgroundColor: '#8B5CF6',
    borderRadius: 25,
    top: 45,
    right: 40,
  },
  pill5: {
    width: 14,
    height: 7,
    backgroundColor: '#EC4899',
    top: 70,
    right: 100,
    transform: [{ rotate: '45deg' }],
  },
  pillBottle: {
    width: 40,
    height: 60,
    backgroundColor: '#4C1D95',
    borderRadius: 8,
    top: 20,
    right: 30,
    opacity: 0.3,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 30,
  },
  dayButton: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: 'transparent',
  },
  selectedDayButton: {
    backgroundColor: '#8B5CF6',
  },
  dayText: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '500',
    marginBottom: 4,
  },
  selectedDayText: {
    color: 'white',
  },
  dateText: {
    fontSize: 16,
    color: '#1E293B',
    fontWeight: '600',
  },
  selectedDateText: {
    color: 'white',
  },
  activitiesSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 20,
  },
  medicinesContainer: {
    gap: 16,
  },
  medicineCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  medicineInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  medicineIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  medicineIcon: {
    fontSize: 24,
  },
  medicineDetails: {
    flex: 1,
  },
  medicineName: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginBottom: 4,
  },
  medicineTime: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  doseContainer: {
    alignItems: 'center',
  },
  doseNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  doseUnit: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 2,
  },
  addButton: {
    marginTop: 20,
    marginBottom: 30,
  },
  addButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    gap: 8,
  },
  addButtonIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default HealthHome;