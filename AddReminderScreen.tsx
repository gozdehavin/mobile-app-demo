import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TextInput,
  Button,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// Resmi import et
import backgroundImage from './assets/images/background.jpg'; // Yolunu kendi projene göre ayarla
interface AddReminderScreenProps {
  onBack: () => void;
  onSave: (reminderData: any) => void;
}

const AddReminderScreen: React.FC<AddReminderScreenProps> = ({ onBack, onSave }) => {
  const [selectedDose, setSelectedDose] = useState('1.25');
  const [selectedView, setSelectedView] = useState('Tablet');
  const [selectedUsage, setSelectedUsage] = useState('Before eat');
  const [startDate, setStartDate] = useState('Jan, 2');
  const [endDate, setEndDate] = useState('Jan, 8');
  const [selectedDays, setSelectedDays] = useState(['Tue']);
  const [notificationEnabled, setNotificationEnabled] = useState(true);

  const doseOptions = ['0.5', '1', '2', '2.5'];
  const viewOptions = ['Tablet', 'Capsule', 'Liquid', 'Injection'];
  const usageOptions = ['Before eat', 'After eat', 'With food', 'Empty stomach'];
  const dayOptions = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const toggleDay = (day: string) => {
    setSelectedDays(prev =>
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const handleSave = () => {
    const reminderData = {
      dose: selectedDose,
      view: selectedView,
      usage: selectedUsage,
      startDate,
      endDate,
      days: selectedDays,
      notification: notificationEnabled
    };
    onSave(reminderData);
  };

  return (
    <View style={styles.container}>
      {/* Medical Background */}
      <View style={styles.backgroundContainer}>
        {/* Medicine Bottle */}
        <View style={styles.medicineBottle}>
          <View style={styles.bottleBody} />

          <View style={styles.bottleNeck} />
          <View style={styles.bottleCap} />
          <View style={styles.bottleLabel} />
        </View>

      </View>

      <StatusBar barStyle="light-content" backgroundColor="#1a1b3a" />

      {/* Header */}
      <SafeAreaView style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={styles.backArrow}>←</Text>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>


        </View>
      </SafeAreaView>

      <ScrollView style={styles.formContainer} showsVerticalScrollIndicator={false}>
        {/* Dose Selection */}
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Dose</Text>
          <View style={styles.optionsContainer}>
            {doseOptions.map(dose => (
              <TouchableOpacity
                key={dose}
                style={[
                  styles.optionButton,
                  selectedDose === dose && styles.selectedOption
                ]}
                onPress={() => setSelectedDose(dose)}
              >
                <Text style={[
                  styles.optionText,
                  selectedDose === dose && styles.selectedOptionText
                ]}>
                  {dose}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* View Selection */}
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>View</Text>
          <View style={styles.optionsContainer}>
            {viewOptions.map(view => (
              <TouchableOpacity
                key={view}
                style={[
                  styles.optionButton,
                  selectedView === view && styles.selectedOption
                ]}
                onPress={() => setSelectedView(view)}
              >
                <View style={styles.optionContent}>
                  <Text style={styles.optionIcon}>👁️</Text>
                  <Text style={[
                    styles.optionText,
                    selectedView === view && styles.selectedOptionText
                  ]}>
                    {view}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Usage Selection */}
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>How to use</Text>
          <View style={styles.optionsContainer}>
            {usageOptions.map(usage => (
              <TouchableOpacity
                key={usage}
                style={[
                  styles.optionButton,
                  selectedUsage === usage && styles.selectedOption
                ]}
                onPress={() => setSelectedUsage(usage)}
              >
                <View style={styles.optionContent}>
                  <Text style={styles.optionIcon}>🍽️</Text>
                  <Text style={[
                    styles.optionText,
                    selectedUsage === usage && styles.selectedOptionText
                  ]}>
                    {usage}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Date Range */}
        <View style={styles.dateContainer}>
          <View style={styles.dateGroup}>
            <Text style={styles.formLabel}>Begin</Text>
            <TouchableOpacity style={styles.dateButton}>
              <Text style={styles.dateIcon}>📅</Text>
              <Text style={styles.dateText}>{startDate}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dateGroup}>
            <Text style={styles.formLabel}>Finish</Text>
            <TouchableOpacity style={styles.dateButton}>
              <Text style={styles.dateIcon}>📅</Text>
              <Text style={styles.dateText}>{endDate}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Notification */}
        <View style={styles.notificationContainer}>
          <Text style={styles.notificationTitle}>Notification</Text>
          <TouchableOpacity
            style={[
              styles.notificationToggle,
              notificationEnabled && styles.notificationToggleActive
            ]}
            onPress={() => setNotificationEnabled(!notificationEnabled)}
          >
            <View style={[
              styles.notificationSlider,
              notificationEnabled && styles.notificationSliderActive
            ]}>
              <Text style={styles.bellIcon}>🔔</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Days Selection */}
        <View style={styles.daysContainer}>
          {dayOptions.map(day => (
            <TouchableOpacity
              key={day}
              style={[
                styles.dayButton,
                selectedDays.includes(day) && styles.selectedDayButton
              ]}
              onPress={() => toggleDay(day)}
            >
              <Text style={[
                styles.dayText,
                selectedDays.includes(day) && styles.selectedDayText
              ]}>
                {day}
              </Text>
              {selectedDays.includes(day) && (
                <Text style={styles.checkmark}>✓</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <LinearGradient
            colors={['#8B5CF6', '#A78BFA']}
            style={styles.saveButtonGradient}
          >
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1b3a',
    position: 'relative',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#1a1b3a',
  },
  // Medicine Bottle Styles
  medicineBottle: {
    position: 'absolute',
    top: 60,
    right: 20,
    width: 80,
    height: 100,
  },
  bottleBody: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#6366f1',
    borderRadius: 12,
    opacity: 0.9,
  },
  bottleNeck: {
    position: 'absolute',
    top: -5,
    left: 30,
    right: 30,
    height: 30,
    backgroundColor: '#6366f1',
    borderRadius: 8,
    opacity: 0.9,
  },
  bottleCap: {
    position: 'absolute',
    top: -5,
    left: 25,
    right: 25,
    height: 10,
    backgroundColor: '#8b5cf6',
    borderRadius: 10,
  },
  bottleLabel: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 6,
  },



  // Tablet Styles
  tablet: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabletWhite1: {
    top: 160,
    left: 100,
  },
  tabletWhite2: {
    top: 250,
    left: 200,
  },
  tabletWhite3: {
    bottom: 200,
    right: 150,
  },
  tabletGreen: {
    top: 180,
    left: 150,
    backgroundColor: '#22c55e',
  },
  tabletLine: {
    width: 12,
    height: 1,
    backgroundColor: '#64748b',
  },
  tabletLineRed: {
    backgroundColor: '#ef4444',
  },

  // Heart Notifications
  heartNotification: {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: '#ef4444',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },


  // Medical Cross Notification
  medicalNotification: {

    top: 1,           // Üstten 16 birim boşluk
    right: 16,         // Sağdan 16 birim boşluk
    width: 40,
    height: 40,
    width: 40,
    height: 40,
    backgroundColor: '#ef4444',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  medicalCross: {
    top: 180,
    left: 20,
  },
  crossIcon: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },


  // Header Styles
  header: {
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  headerContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
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
  clockContainer: {
    alignItems: 'center',
  },
  clock: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FEF3C7',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F59E0B',
  },
  clockFace: {
    width: 24,
    height: 24,
    position: 'relative',
  },
  clockHand: {
    position: 'absolute',
    width: 2,
    height: 8,
    backgroundColor: '#1E293B',
    top: 4,
    left: 11,
    transformOrigin: '1px 8px',
    transform: [{ rotate: '45deg' }],
  },
  minuteHand: {
    height: 10,
    top: 2,
    transform: [{ rotate: '90deg' }],
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    zIndex: 5,
  },
  formGroup: {
    marginBottom: 24,
  },
  formLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginBottom: 12,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  optionButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    marginRight: 8,
    marginBottom: 8,
  },
  selectedOption: {
    backgroundColor: '#8B5CF6',
    borderColor: '#8B5CF6',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  optionIcon: {
    fontSize: 14,
  },
  optionText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
  },
  selectedOptionText: {
    color: 'white',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 16,
  },
  dateGroup: {
    flex: 1,
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    gap: 8,
  },
  dateIcon: {
    fontSize: 16,
  },
  dateText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  notificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  notificationToggle: {
    width: 60,
    height: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    padding: 2,
    justifyContent: 'center',
  },
  notificationToggleActive: {
    backgroundColor: '#10B981',
  },
  notificationSlider: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  notificationSliderActive: {
    alignSelf: 'flex-end',
  },
  bellIcon: {
    fontSize: 12,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  dayButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  selectedDayButton: {
    backgroundColor: '#8B5CF6',
    borderColor: '#8B5CF6',
  },
  dayText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
  },
  selectedDayText: {
    color: 'white',
  },
  checkmark: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    fontSize: 8,
    color: 'white',
  },
  saveButton: {
    marginBottom: 24,
  },
  saveButtonGradient: {
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default AddReminderScreen;