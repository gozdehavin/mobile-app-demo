import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Eye, Pill, Heart, Plus, Settings, BarChart3, User, Home } from 'lucide-react';

const HealthApp = () => {
  const [currentScreen, setCurrentScreen] = useState('home');

  const HomeScreen = () => (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.menuIcon}>
          <div style={{...styles.menuLine, width: '20px'}}></div>
          <div style={{...styles.menuLine, width: '15px'}}></div>
          <div style={{...styles.menuLine, width: '12px'}}></div>
        </div>
        <div style={styles.profileContainer}>
          <div style={styles.profileImage}>
            <span style={styles.profileText}>U</span>
          </div>
          <span style={styles.dots}>⋯</span>
        </div>
      </div>

      <div style={styles.questionCard}>
        <h1 style={styles.questionTitle}>How is your<br />health today?</h1>
        <div style={styles.scheduleInfo}>
          <div>
            <p style={styles.scheduleText}>It's been over a year</p>
            <p style={styles.scheduleSubtext}>Visit schedule</p>
          </div>
          <div style={styles.scheduleIcons}>
            <Calendar size={16} color="#9CA3AF" />
            <div style={styles.notificationBadge}>
              <span style={styles.notificationText}>?</span>
            </div>
          </div>
        </div>
        <div style={styles.bloodTestCard}>
          <div style={styles.bloodTestIcon}>
            <div style={styles.dropIcon}></div>
          </div>
          <div style={styles.bloodTestInfo}>
            <h3 style={styles.bloodTestTitle}>Blood test</h3>
            <p style={styles.bloodTestSubtitle}>Schedule the visit</p>
          </div>
          <div style={styles.bloodTestDate}>
            <p style={styles.dateText}>2 March</p>
            <p style={styles.timeText}>09:00 am</p>
          </div>
        </div>
      </div>

      <div style={styles.medicinesSection}>
        <h2 style={styles.sectionTitle}>Buy medicines</h2>
        <div style={styles.medicineGrid}>
          <div style={styles.medicineCard}>
            <div style={styles.medicineIcon}>
              <Pill size={24} color="#6366F1" />
            </div>
            <p style={styles.medicineName}>Ibuprofen v.1</p>
            <button style={styles.buyButton}>
              <span style={styles.buyButtonText}>Buy</span>
            </button>
          </div>
          <div style={styles.medicineCard}>
            <div style={{...styles.medicineIcon, backgroundColor: '#FEF3C7'}}>
              <Pill size={24} color="#F59E0B" />
            </div>
            <p style={styles.medicineName}>Paracetamol</p>
            <button style={styles.buyButton}>
              <span style={styles.buyButtonText}>Buy</span>
            </button>
          </div>
          <div style={styles.medicineCard}>
            <div style={{...styles.medicineIcon, backgroundColor: '#D1FAE5'}}>
              <Pill size={24} color="#10B981" />
            </div>
            <p style={styles.medicineName}>Ketoprofen</p>
            <button style={styles.buyButton}>
              <span style={styles.buyButtonText}>Buy</span>
            </button>
          </div>
        </div>
      </div>

      <div style={styles.bottomNav}>
        <button style={styles.navItemActive}>
          <Home size={24} color="white" />
        </button>
        <button style={styles.navItem}>
          <Calendar size={24} color="#9CA3AF" />
        </button>
        <button style={styles.navItem}>
          <BarChart3 size={24} color="#9CA3AF" />
        </button>
        <button style={styles.navItem}>
          <User size={24} color="#9CA3AF" />
        </button>
        <button style={styles.navItem}>
          <Settings size={24} color="#9CA3AF" />
        </button>
      </div>
    </div>
  );

  const RemindersScreen = () => (
    <div style={styles.remindersContainer}>
      <div style={styles.remindersHeader}>
        <div
          style={{
            ...styles.backgroundImage,
            backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmUzMTkyO3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2MzY2RjE7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9InVybCgjZ3JhZCkiLz4KPCEtLSBQaWxscyBhbmQgZWxlbWVudHMgLS0+CjxlbGxpcHNlIGN4PSI4MCIgY3k9IjEyMCIgcng9IjE1IiByeT0iOCIgZmlsbD0iIzYwQTVGQSIgdHJhbnNmb3JtPSJyb3RhdGUoMTUgODAgMTIwKSIvPgo8ZWxsaXBzZSBjeD0iMTAwIiBjeT0iMTIwIiByeD0iOCIgcnk9IjgiIGZpbGw9IndoaXRlIi8+CjxlbGxpcHNlIGN4PSIxNDAiIGN5PSIxNDAiIHJ4PSIxNSIgcnk9IjgiIGZpbGw9IiMxMEI5ODEiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAxNDAgMTQwKSIvPgo8ZWxsaXBzZSBjeD0iMTYwIiBjeT0iMTQwIiByeD0iOCIgcnk9IjgiIGZpbGw9IndoaXRlIi8+CjxlbGxpcHNlIGN4PSIyMDAiIGN5PSIxNjAiIHJ4PSIxNSIgcnk9IjgiIGZpbGw9IiNGNTlFMEIiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDIwMCAxNjApIi8+CjxlbGxpcHNlIGN4PSIyMjAiIGN5PSIxNjAiIHJ4PSI4IiByeT0iOCIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iMTIwIiBjeT0iMTgwIiByPSIxMCIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iMTgwIiBjeT0iMjAwIiByPSIxMiIgZmlsbD0iIzEwQjk4MSIvPgo8Y2lyY2xlIGN4PSI5MCIgY3k9IjE4MCIgcj0iOCIgZmlsbD0iIzEwQjk4MSIvPgo8IS0tIEhlYXJ0IGljb25zIC0tPgo8Y2lyY2xlIGN4PSIxNjAiIGN5PSIxODAiIHI9IjE1IiBmaWxsPSJyZ2JhKDIzOSw2OCw2OCwwLjIpIi8+CjxwYXRoIGQ9Ik0xNTUgMTc1YzAtMiAyLTQgNS00czUgMiA1IDRjMC0yIDItNCA1LTRzNSAyIDUgNGMwIDQtNSA4LTEwIDEwLTUtMi0xMC02LTEwLTEweiIgZmlsbD0iI0VGNDQ0NCIvPgo8Y2lyY2xlIGN4PSIyNDAiIGN5PSIyMDAiIHI9IjEyIiBmaWxsPSJyZ2JhKDIzOSw2OCw2OCwwLjIpIi8+CjxwYXRoIGQ9Ik0yMzYgMTk2YzAtMS41IDEuNS0zIDMuNS0zczMuNSAxLjUgMy41IDNjMC0xLjUgMS41LTMgMy41LTNzMy41IDEuNSAzLjUgM2MwIDMtMy41IDYtNyA3LjUtMy41LTEuNS03LTQuNS03LTcuNXoiIGZpbGw9IiNFRjQ0NDQiLz4KPCEtLSBQbHVzIGljb25zIC0tPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMjAiIHI9IjEyIiBmaWxsPSIjRUY0NDQ0Ii8+CjxwYXRoIGQ9Ik0xOTYgMTE4aDhNMjAwIDExNHY4IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPGNpcmNsZSBjeD0iMTIwIiBjeT0iMjQwIiByPSIxMCIgZmlsbD0icmdiYSgyMzksNjgsNjgsMC4zKSIvPgo8cGF0aCBkPSJNMTE3IDIzN2g2TTEyMCAyMzR2NiIgc3Ryb2tlPSIjRUY0NDQ0IiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8IS0tIExlYXZlcyAtLT4KPHBhdGggZD0iTTI4MCAyMDBsLTEwLTVjLTUtMy01LTEwIDAtMTNsMTAtNWM1LTMgMTAtMyAxNSAwczUgMTAgMCAxM2wtMTAgNWMtNSAzLTEwIDMtMTUgMHoiIGZpbGw9IiMxMEI5ODEiLz4KPHBhdGggZD0iTTI4NSAyMDVjMCAwIDUtNSAwLTEwcy0xMC01LTEwLTVzNSAxMCAxMCAxNXoiIGZpbGw9IiMwRjc2NjAiLz4KPHBhdGggZD0iTTYwIDI2MGwtOC00Yy00LTItNC04IDAtMTBsOC00YzQtMiA4LTIgMTIgMHM0IDggMCAxMGwtOCA0Yy00IDItOCAyLTEyIDB6IiBmaWxsPSIjMTBCOTgxIi8+CjxwYXRoIGQ9Ik02NCAyNjRjMCAwIDQtNSAwLTlzLTktNC05LTRzNCA5IDkgMTN6IiBmaWxsPSIjMEY3NjYwIi8+CjwvZXZnPg==)'
          }}
        >
          <button
            onClick={() => setCurrentScreen('home')}
            style={styles.backButton}
          >
            <ArrowLeft size={24} color="white" />
          </button>
        </div>
      </div>

      <h1 style={styles.remindersTitle}>Reminders</h1>

      <div style={styles.weekDays}>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={day} style={index === 2 ? styles.activeDayContainer : styles.dayContainer}>
            <span style={index === 2 ? styles.activeDayText : styles.dayText}>{day}</span>
            <span style={index === 2 ? styles.activeDayNumber : styles.dayNumber}>
              {16 + index}
            </span>
          </div>
        ))}
      </div>

      <h2 style={styles.activitiesTitle}>Today Activities</h2>

      <div style={styles.activitiesList}>
        <div style={styles.activityCard}>
          <div style={styles.activityIcon}>
            <div style={{...styles.pill, ...styles.pillBlueWhite, transform: 'rotate(45deg)'}}></div>
            <div style={{...styles.pill, ...styles.pillOrange, marginTop: '8px'}}></div>
          </div>
          <div style={styles.activityInfo}>
            <h3 style={styles.activityName}>Azoptex Obat</h3>
            <p style={styles.activityTime}>After lunch</p>
          </div>
          <div style={styles.activityDose}>
            <span style={styles.doseNumber}>10</span>
            <span style={styles.doseUnit}>mg</span>
          </div>
        </div>

        <div style={{...styles.activityCard, backgroundColor: '#FECACA'}}>
          <div style={styles.activityIcon}>
            <div style={{...styles.pill, ...styles.pillBlueWhite}}></div>
            <div style={{...styles.pill, ...styles.pillPink, marginTop: '8px'}}></div>
          </div>
          <div style={styles.activityInfo}>
            <h3 style={styles.activityName}>Ketoprofen</h3>
            <p style={styles.activityTime}>After lunch</p>
          </div>
          <div style={styles.activityDose}>
            <span style={styles.doseNumber}>2</span>
            <span style={styles.doseUnit}>Tablet</span>
          </div>
        </div>
      </div>
    </div>
  );

  const NotificationScreen = () => (
    <div style={styles.notificationContainer}>
      <div style={styles.notificationHeader}>
        <button
          onClick={() => setCurrentScreen('home')}
          style={styles.backButtonLight}
        >
          <ArrowLeft size={24} color="#6B7280" />
        </button>
        <div style={styles.illustrationContainer}>
          <div style={styles.illustration}>
            <div style={styles.illustrationPeople}>
              <div style={styles.person1}></div>
              <div style={styles.person2}></div>
            </div>
          </div>
        </div>
        <div style={styles.timeIcon}>
          <Clock size={20} color="#F59E0B" />
        </div>
      </div>

      <div style={styles.doseContainer}>
        <span style={styles.doseLabel}>Dose</span>
        <span style={styles.doseValue}>1.25</span>
        <div style={styles.viewContainer}>
          <Eye size={16} color="#6B7280" />
          <span style={styles.viewText}>View</span>
          <span style={styles.tabletText}>Tablet</span>
        </div>
      </div>

      <div style={styles.usageContainer}>
        <span style={styles.usageLabel}>How to use</span>
        <span style={styles.usageText}>Before eat</span>
      </div>

      <div style={styles.dateRangeContainer}>
        <div style={styles.dateItem}>
          <span style={styles.dateLabel}>Begin</span>
          <span style={styles.dateValue}>Jan, 2</span>
        </div>
        <div style={styles.dateItem}>
          <span style={styles.dateLabel}>Finish</span>
          <span style={styles.dateValue}>Jan, 8</span>
        </div>
      </div>

      <h3 style={styles.notificationTitle}>Notification</h3>

      <div style={styles.weekCalendar}>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => (
          <div
            key={day}
            style={index === 1 ? styles.activeCalendarDay : styles.calendarDay}
          >
            <span style={index === 1 ? styles.activeCalendarDayText : styles.calendarDayText}>
              {day}
            </span>
          </div>
        ))}
      </div>

      <button style={styles.saveButton}>
        <span style={styles.saveButtonText}>Save Changes</span>
      </button>
    </div>
  );

  return (
    <div style={styles.app}>
      {currentScreen === 'home' && <HomeScreen />}
      {currentScreen === 'reminders' && <RemindersScreen />}
      {currentScreen === 'notification' && <NotificationScreen />}

      {currentScreen === 'home' && (
        <div style={styles.floatingButtons}>
          <button
            onClick={() => setCurrentScreen('reminders')}
            style={styles.floatingButton}
          >
            <span style={styles.floatingButtonText}>📋</span>
          </button>
          <button
            onClick={() => setCurrentScreen('notification')}
            style={styles.floatingButton}
          >
            <span style={styles.floatingButtonText}>🔔</span>
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  app: {
    width: '375px',
    height: '812px',
    margin: '0 auto',
    backgroundColor: '#F8FAFC',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  container: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '50px',
    paddingBottom: '20px'
  },
  menuIcon: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px'
  },
  menuLine: {
    height: '2px',
    backgroundColor: '#374151',
    borderRadius: '1px'
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  profileImage: {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    backgroundColor: '#6366F1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px'
  },
  dots: {
    fontSize: '20px',
    color: '#6B7280'
  },
  questionCard: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '20px',
    marginBottom: '20px'
  },
  questionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: '20px',
    lineHeight: '1.3'
  },
  scheduleInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px'
  },
  scheduleText: {
    fontSize: '14px',
    color: '#6B7280',
    margin: 0
  },
  scheduleSubtext: {
    fontSize: '12px',
    color: '#9CA3AF',
    margin: 0
  },
  scheduleIcons: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  notificationBadge: {
    width: '20px',
    height: '20px',
    borderRadius: '10px',
    backgroundColor: '#374151',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  notificationText: {
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold'
  },
  bloodTestCard: {
    backgroundColor: '#8B5CF6',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    alignItems: 'center'
  },
  bloodTestIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '12px'
  },
  dropIcon: {
    width: '20px',
    height: '20px',
    borderRadius: '10px',
    backgroundColor: '#EF4444'
  },
  bloodTestInfo: {
    flex: 1
  },
  bloodTestTitle: {
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
    margin: 0
  },
  bloodTestSubtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '14px',
    margin: 0
  },
  bloodTestDate: {
    textAlign: 'right'
  },
  dateText: {
    color: 'white',
    fontSize: '14px',
    fontWeight: '600',
    margin: 0
  },
  timeText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '12px',
    margin: 0
  },
  medicinesSection: {
    marginBottom: '20px'
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: '16px'
  },
  medicineGrid: {
    display: 'flex',
    gap: '12px'
  },
  medicineCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  medicineIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '24px',
    backgroundColor: '#EEF2FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '12px'
  },
  medicineName: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: '12px',
    margin: 0
  },
  buyButton: {
    backgroundColor: '#F3F4F6',
    border: 'none',
    borderRadius: '20px',
    padding: '8px 20px',
    cursor: 'pointer'
  },
  buyButtonText: {
    fontSize: '14px',
    color: '#6B7280',
    fontWeight: '500'
  },
  bottomNav: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '16px 0',
    borderRadius: '24px',
    marginBottom: '20px'
  },
  navItem: {
    backgroundColor: 'transparent',
    border: 'none',
    padding: '8px',
    cursor: 'pointer'
  },
  navItemActive: {
    backgroundColor: '#1F2937',
    border: 'none',
    borderRadius: '20px',
    padding: '12px',
    cursor: 'pointer'
  },

  // Reminders Screen Styles
  remindersContainer: {
    flex: 1,
    backgroundColor: '#2E3192',
    display: 'flex',
    flexDirection: 'column'
  },
  remindersHeader: {
    height: '300px',
    position: 'relative',
    overflow: 'hidden'
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  backButton: {
    position: 'absolute',
    top: '50px',
    left: '20px',
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: 'none',
    borderRadius: '20px',
    padding: '8px',
    cursor: 'pointer'
  },
  remindersTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: '-80px',
    marginBottom: '30px',
    zIndex: 10,
    position: 'relative'
  },
  weekDays: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
    backgroundColor: 'white',
    margin: '0 20px',
    borderRadius: '20px',
    marginBottom: '20px'
  },
  dayContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8px'
  },
  activeDayContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8px',
    backgroundColor: '#6366F1',
    borderRadius: '12px'
  },
  dayText: {
    fontSize: '12px',
    color: '#6B7280',
    marginBottom: '4px'
  },
  activeDayText: {
    fontSize: '12px',
    color: 'white',
    marginBottom: '4px'
  },
  dayNumber: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#1F2937'
  },
  activeDayNumber: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white'
  },
  activitiesTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'white',
    margin: '0 20px 20px 20px'
  },
  activitiesList: {
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  activityCard: {
    backgroundColor: '#C7D2FE',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    alignItems: 'center'
  },
  activityIcon: {
    width: '48px',
    height: '48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '16px',
    position: 'relative'
  },
  pill: {
    width: '24px',
    height: '12px',
    borderRadius: '6px',
    position: 'absolute'
  },
  pillBlueWhite: {
    background: 'linear-gradient(to right, #60A5FA 50%, white 50%)'
  },
  pillOrange: {
    background: 'linear-gradient(to right, #F59E0B 50%, white 50%)'
  },
  pillPink: {
    background: 'linear-gradient(to right, #EC4899 50%, white 50%)'
  },
  activityInfo: {
    flex: 1
  },
  activityName: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: '4px',
    margin: 0
  },
  activityTime: {
    fontSize: '14px',
    color: '#6B7280',
    margin: 0
  },
  activityDose: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  doseNumber: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1F2937'
  },
  doseUnit: {
    fontSize: '12px',
    color: '#6B7280'
  },

  // Notification Screen Styles
  notificationContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column'
  },
  notificationHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '50px',
    paddingBottom: '20px',
    justifyContent: 'space-between'
  },
  backButtonLight: {
    backgroundColor: 'transparent',
    border: 'none',
    padding: '8px',
    cursor: 'pointer'
  },
  illustrationContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center'
  },
  illustration: {
    width: '120px',
    height: '80px',
    backgroundColor: '#F3F4F6',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  illustrationPeople: {
    display: 'flex',
    gap: '16px'
  },
  person1: {
    width: '32px',
    height: '32px',
    backgroundColor: '#FF9292',
    borderRadius: '50%'
  },
  person2: {
    width: '32px',
    height: '32px',
    backgroundColor: '#9B79FF',
    borderRadius: '50%'
  },
  timeIcon: {
    backgroundColor: '#FEF3C7',
    borderRadius: '20px',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  doseContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '20px'
  },
  doseLabel: {
    fontSize: '14px',
    color: '#6B7280',
    marginRight: '8px'
  },
  doseValue: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1F2937',
    flex: 1
  },
  viewContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  viewText: {
    fontSize: '14px',
    color: '#6B7280'
  },
  tabletText: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#1F2937'
  },
  usageContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '20px'
  },
  usageLabel: {
    fontSize: '14px',
    color: '#6B7280',
    marginRight: '16px'
  },
  usageText: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#1F2937'
  },
  dateRangeContainer: {
    display: 'flex',
    gap: '16px',
    marginBottom: '30px'
  },
  dateItem: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    borderRadius: '12px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  dateLabel: {
    fontSize: '14px',
    color: '#6B7280',
    marginBottom: '4px'
  },
  dateValue: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1F2937'
  },
  notificationTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: '20px'
  },
  weekCalendar: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '30px'
  },
  calendarDay: {
    width: '48px',
    height: '48px',
    borderRadius: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6'
  },
  activeCalendarDay: {
    width: '48px',
    height: '48px',
    borderRadius: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6366F1'
  },
  calendarDayText: {
    fontSize: '14px',
    color: '#6B7280',
    fontWeight: '500'
  },
  activeCalendarDayText: {
    fontSize: '14px',
    color: 'white',
    fontWeight: '500'
  },
  saveButton: {
    backgroundColor: '#6366F1',
    border: 'none',
    borderRadius: '16px',
    padding: '16px 0',
    cursor: 'pointer',
    marginBottom: '20px'
  },
  saveButtonText: {
    color: 'white',
    fontSize: '16px',
    fontWeight: '600'
  },
  floatingButtons: {
    position: 'absolute',
    bottom: '100px',
    right: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  floatingButton: {
    width: '56px',
    height: '56px',
    backgroundColor: '#6366F1',
    border: 'none',
    borderRadius: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
  },
  floatingButtonText: {
    fontSize: '20px'
  }
};