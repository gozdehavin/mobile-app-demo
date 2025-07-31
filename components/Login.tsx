import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  Animated,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

interface LoginProps {}

type ScreenType = 'welcome' | 'onboarding' | 'Login';

const Login: React.FC<LoginProps> = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('welcome');
  const [email, setEmail] = useState<string>('');

  // Animations
  const bounceAnim = new Animated.Value(0);
  const pulseAnim = new Animated.Value(1);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // Bounce animation for doctor character
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -10,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Pulse animation for hearts
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [bounceAnim, pulseAnim, fadeAnim]);

  const WelcomeScreen: React.FC = () => (
    <LinearGradient
      colors={['#60A5FA', '#3B82F6', '#2563EB']}
      style={styles.fullScreen}
    >
      <StatusBar barStyle="light-content" backgroundColor="#3B82F6" />
      <SafeAreaView style={styles.container}>

        {/* Decorative Medical Icons */}
        <View style={styles.decorativeContainer}>
          <Animated.View style={[styles.floatingIcon, styles.topLeft, { transform: [{ scale: pulseAnim }] }]}>
            <Text style={styles.medicalIcon}>⚕️</Text>
          </Animated.View>
          <Animated.View style={[styles.floatingIcon, styles.topRight, { transform: [{ scale: pulseAnim }] }]}>
            <Text style={styles.heartIcon}>❤️</Text>
          </Animated.View>
          <Animated.View style={[styles.floatingIcon, styles.bottomLeft, { transform: [{ scale: pulseAnim }] }]}>
            <Text style={styles.activityIcon}>📊</Text>
          </Animated.View>
          <View style={[styles.floatingIcon, styles.midRight]}>
            <Text style={styles.plusIcon}>+</Text>
          </View>
        </View>

        {/* Medical Clouds */}
        <View style={[styles.cloud, styles.cloudTop]} />
        <View style={[styles.cloud, styles.cloudBottom]} />

        {/* Main Content */}
        <View style={styles.centerContent}>
          {/* Doctor Character */}
          <Animated.View style={[styles.doctorContainer, { transform: [{ translateY: bounceAnim }] }]}>
            {/* Doctor Body */}
            <View style={styles.doctorBody}>
              {/* Doctor Head */}
              <View style={styles.doctorHead}>
                {/* Hair */}
                <View style={styles.doctorHair} />
                {/* Eyes */}
                <View style={styles.eyesContainer}>
                  <View style={styles.eye} />
                  <View style={styles.eye} />
                </View>
                {/* Glasses */}
                <View style={styles.glassesContainer}>
                  <View style={styles.glassLens} />
                  <View style={styles.glassBridge} />
                  <View style={styles.glassLens} />
                </View>
                {/* Nose */}
                <View style={styles.nose} />
                {/* Smile */}
                <View style={styles.smile} />
              </View>

              {/* White Coat */}
              <View style={styles.whiteCoat}>
                {/* Stethoscope */}
                <View style={styles.stethoscope}>
                  <View style={styles.stethoscopeHead} />
                  <View style={styles.stethoscopeTube} />
                </View>
                {/* Pocket */}
                <View style={styles.pocket}>
                  <View style={styles.pen} />
                </View>
              </View>

              {/* Arms */}
              <View style={[styles.arm, styles.leftArm]} />
              <View style={[styles.arm, styles.rightArm]} />

              {/* Clipboard */}
              <View style={styles.clipboard}>
                <View style={styles.clipboardLine} />
                <View style={styles.clipboardLine2} />
              </View>

              {/* Legs */}
              <View style={[styles.leg, styles.leftLeg]} />
              <View style={[styles.leg, styles.rightLeg]} />

              {/* Shoes */}
              <View style={[styles.shoe, styles.leftShoe]} />
              <View style={[styles.shoe, styles.rightShoe]} />
            </View>
          </Animated.View>

          <Animated.View style={{ opacity: fadeAnim }}>
            <Text style={styles.appTitle}>Login</Text>
            <Text style={styles.appSubtitle}>Your Digital Health Companion</Text>
          </Animated.View>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          {/* Progress Indicators */}
          <View style={styles.progressContainer}>
            <View style={[styles.progressDot, styles.progressActive]} />
            <View style={styles.progressDot} />
            <View style={styles.progressDot} />
          </View>

          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => setCurrentScreen('onboarding')}
          >
            <Text style={styles.continueText}>Tap to continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );

  const OnboardingScreen: React.FC = () => (
    <LinearGradient
      colors={['#60A5FA', '#3B82F6', '#2563EB']}
      style={styles.fullScreen}
    >
      <StatusBar barStyle="light-content" backgroundColor="#3B82F6" />
      <SafeAreaView style={styles.container}>

        {/* Decorative Elements */}
        <View style={styles.decorativeContainer}>
          <Animated.View style={[styles.floatingIcon, styles.topLeft, { transform: [{ scale: pulseAnim }] }]}>
            <Text style={styles.medicalIcon}>⚕️</Text>
          </Animated.View>
          <Animated.View style={[styles.floatingIcon, styles.topRight, { transform: [{ scale: pulseAnim }] }]}>
            <Text style={styles.heartIcon}>❤️</Text>
          </Animated.View>
          <Animated.View style={[styles.floatingIcon, styles.bottomRight, { transform: [{ scale: pulseAnim }] }]}>
            <Text style={styles.activityIcon}>📊</Text>
          </Animated.View>
        </View>

        {/* Medical Scene Illustration */}
        <View style={styles.illustrationContainer}>
          {/* Patient Character */}
          <View style={styles.patientContainer}>
            <View style={styles.patientHead}>
              <View style={styles.patientHair} />
              <View style={styles.patientEye} />
              <View style={styles.patientEye2} />
              <View style={styles.patientSmile} />
            </View>
            <View style={styles.patientBody} />
            <View style={styles.patientArm} />
            <View style={styles.patientArm2} />
            <View style={styles.patientLeg} />
            <View style={styles.patientLeg2} />
          </View>

          {/* Small Doctor */}
          <View style={styles.smallDoctorContainer}>
            <View style={styles.smallDoctorHead}>
              <View style={styles.smallDoctorHair} />
              <View style={styles.smallGlasses} />
            </View>
            <View style={styles.smallWhiteCoat}>
              <View style={styles.smallStethoscope} />
            </View>
          </View>

          {/* Floating Medical Icons */}
          <Animated.View style={[styles.floatingHeart, { transform: [{ scale: pulseAnim }] }]}>
            <Text style={styles.smallHeartIcon}>❤️</Text>
          </Animated.View>
          <Animated.View style={[styles.floatingActivity, { transform: [{ scale: pulseAnim }] }]}>
            <Text style={styles.smallActivityIcon}>📊</Text>
          </Animated.View>
        </View>

        {/* Content Card */}
        <View style={styles.contentCard}>
          <Text style={styles.onboardingTitle}>Your health, our priority.</Text>
          <Text style={styles.onboardingSubtitle}>
            Track symptoms, book appointments, and stay connected with your healthcare team.
          </Text>

          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={() => setCurrentScreen('Login')}
          >
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>

          {/* Progress Indicators */}
          <View style={styles.progressContainer}>
            <View style={styles.progressDot} />
            <View style={[styles.progressDot, styles.progressActive]} />
            <View style={styles.progressDot} />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );

  const LoginScreen: React.FC = () => (
    <View style={styles.fullScreen}>
      <StatusBar barStyle="light-content" backgroundColor="#3B82F6" />

      {/* Header */}
      <LinearGradient
        colors={['#3B82F6', '#2563EB']}
        style={styles.loginHeader}
      >
        <SafeAreaView>
          <View style={styles.loginHeaderContent}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setCurrentScreen('onboarding')}
            >
              <Text style={styles.backArrow}>←</Text>
            </TouchableOpacity>
            <View style={styles.headerCenter}>
              <Text style={styles.headerHeart}>❤️</Text>
            </View>
            <View style={styles.headerSpacer} />
          </View>
        </SafeAreaView>
      </LinearGradient>

      {/* Content */}
      <ScrollView style={styles.loginContent} showsVerticalScrollIndicator={false}>
        <View style={styles.loginForm}>
          <Text style={styles.loginTitle}>Welcome Back</Text>
          <Text style={styles.loginSubtitle}>
            Sign in to access your health dashboard and stay connected with your care team.
          </Text>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputIcon}>✉️</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your email"
                placeholderTextColor="#9CA3AF"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          <Text style={styles.securityNote}>
            We'll send you a secure login link to access your account.
          </Text>

          {/* Sign In Button */}
          <TouchableOpacity style={styles.signInButton}>
            <LinearGradient
              colors={['#3B82F6', '#2563EB']}
              style={styles.signInGradient}
            >
              <Text style={styles.signInIcon}>❤️</Text>
              <Text style={styles.signInText}>Sign In Securely</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social Login Buttons */}
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialIcon}>G</Text>
            <Text style={styles.socialText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialIcon}>f</Text>
            <Text style={styles.socialText}>Continue with Facebook</Text>
          </TouchableOpacity>

          {/* HIPAA Compliance Card */}
          <View style={styles.complianceCard}>
            <View style={styles.complianceHeader}>
              <View style={styles.lockIcon}>
                <Text style={styles.lockText}>🔒</Text>
              </View>
              <Text style={styles.complianceTitle}>HIPAA Compliant</Text>
            </View>
            <Text style={styles.complianceText}>
              Your health data is protected with bank-level security and complies with healthcare privacy regulations.
            </Text>
          </View>

          {/* Footer */}
          <Text style={styles.footer}>
            By continuing, you agree to our{' '}
            <Text style={styles.footerLink}>Terms of Service</Text> and{' '}
            <Text style={styles.footerLink}>Privacy Policy</Text>.
          </Text>
        </View>
      </ScrollView>
    </View>
  );

  const screens: Record<ScreenType, React.ReactElement> = {
    welcome: <WelcomeScreen />,
    onboarding: <OnboardingScreen />,
    Login: <LoginScreen />,
  };

  return screens[currentScreen];
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

  // Decorative Elements
  decorativeContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  floatingIcon: {
    position: 'absolute',
  },
  topLeft: {
    top: 80,
    left: 40,
  },
  topRight: {
    top: 120,
    right: 64,
  },
  bottomLeft: {
    bottom: 160,
    left: 80,
  },
  bottomRight: {
    bottom: 240,
    right: 80,
  },
  midRight: {
    top: 96,
    right: 128,
  },
  medicalIcon: {
    fontSize: 24,
    opacity: 0.6,
  },
  heartIcon: {
    fontSize: 20,
    opacity: 0.4,
  },
  activityIcon: {
    fontSize: 20,
    opacity: 0.5,
  },
  plusIcon: {
    fontSize: 32,
    color: 'white',
    opacity: 0.3,
  },

  // Clouds
  cloud: {
    position: 'absolute',
    backgroundColor: '#93C5FD',
    borderRadius: 25,
    opacity: 0.2,
  },
  cloudTop: {
    top: 64,
    left: 24,
    width: 64,
    height: 32,
  },
  cloudBottom: {
    top: 96,
    right: 32,
    width: 80,
    height: 40,
  },

  // Welcome Screen
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doctorContainer: {
    marginBottom: 32,
  },
  doctorBody: {
    width: 96,
    height: 128,
    position: 'relative',
  },
  doctorHead: {
    width: 80,
    height: 80,
    backgroundColor: '#FED7D7',
    borderRadius: 40,
    position: 'absolute',
    top: -16,
    left: 8,
  },
  doctorHair: {
    width: 64,
    height: 48,
    backgroundColor: '#D69E2E',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    position: 'absolute',
    top: -8,
    left: 8,
  },
  eyesContainer: {
    position: 'absolute',
    top: 24,
    left: 16,
    flexDirection: 'row',
    width: 48,
    justifyContent: 'space-between',
  },
  eye: {
    width: 8,
    height: 8,
    backgroundColor: 'black',
    borderRadius: 4,
  },
  glassesContainer: {
    position: 'absolute',
    top: 20,
    left: 8,
    flexDirection: 'row',
    alignItems: 'center',
    width: 64,
  },
  glassLens: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 12,
  },
  glassBridge: {
    width: 8,
    height: 4,
    backgroundColor: 'black',
    marginHorizontal: 4,
  },
  nose: {
    width: 4,
    height: 8,
    backgroundColor: '#FED7D7',
    borderRadius: 2,
    position: 'absolute',
    top: 32,
    left: 38,
  },
  smile: {
    width: 16,
    height: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    position: 'absolute',
    top: 36,
    left: 32,
  },
  whiteCoat: {
    position: 'absolute',
    top: 48,
    left: 4,
    width: 88,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  stethoscope: {
    position: 'absolute',
    top: 8,
    left: 44,
    transform: [{ translateX: -16 }],
    alignItems: 'center',
  },
  stethoscopeHead: {
    width: 32,
    height: 32,
    borderWidth: 2,
    borderColor: '#4A5568',
    borderRadius: 16,
    backgroundColor: '#E2E8F0',
  },
  stethoscopeTube: {
    width: 4,
    height: 24,
    backgroundColor: '#4A5568',
    marginTop: 4,
  },
  pocket: {
    width: 24,
    height: 16,
    backgroundColor: '#EBF8FF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#3182CE',
    position: 'absolute',
    bottom: 16,
    left: 8,
  },
  pen: {
    width: 2,
    height: 12,
    backgroundColor: '#3B82F6',
    position: 'absolute',
    bottom: 2,
    left: 4,
  },
  arm: {
    width: 16,
    height: 48,
    backgroundColor: '#FED7D7',
    borderRadius: 8,
    position: 'absolute',
    top: 64,
  },
  leftArm: {
    left: -8,
  },
  rightArm: {
    right: -8,
  },
  clipboard: {
    position: 'absolute',
    top: 80,
    right: -16,
    width: 12,
    height: 16,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#A0AEC0',
    borderRadius: 2,
  },
  clipboardLine: {
    width: 8,
    height: 2,
    backgroundColor: '#A0AEC0',
    position: 'absolute',
    top: 4,
    left: 2,
  },
  clipboardLine2: {
    width: 6,
    height: 2,
    backgroundColor: '#A0AEC0',
    position: 'absolute',
    top: 8,
    left: 2,
  },
  leg: {
    width: 16,
    height: 32,
    backgroundColor: '#1A365D',
    borderRadius: 8,
    position: 'absolute',
    bottom: 0,
  },
  leftLeg: {
    left: 8,
  },
  rightLeg: {
    right: 8,
  },
  shoe: {
    width: 20,
    height: 12,
    backgroundColor: 'black',
    borderRadius: 6,
    position: 'absolute',
    bottom: -4,
  },
  leftShoe: {
    left: 6,
  },
  rightShoe: {
    right: 6,
  },
  appTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  appSubtitle: {
    fontSize: 16,
    color: '#DBEAFE',
    textAlign: 'center',
  },

  // Bottom Section
  bottomSection: {
    alignItems: 'center',
    paddingBottom: 32,
  },
  progressContainer: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  progressDot: {
    width: 8,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 2,
    marginHorizontal: 4,
  },
  progressActive: {
    width: 32,
    backgroundColor: 'white',
  },
  continueButton: {
    width: '100%',
  },
  continueText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },

  // Onboarding Screen
  illustrationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 64,
  },
  patientContainer: {
    position: 'relative',
  },
  patientHead: {
    width: 56,
    height: 56,
    backgroundColor: '#FED7D7',
    borderRadius: 28,
    marginBottom: 8,
    position: 'relative',
  },
  patientHair: {
    width: 72,
    height: 40,
    backgroundColor: '#D69E2E',
    borderRadius: 20,
    position: 'absolute',
    top: -8,
    left: -8,
  },
  patientEye: {
    width: 8,
    height: 8,
    backgroundColor: 'black',
    borderRadius: 4,
    position: 'absolute',
    top: 20,
    left: 12,
  },
  patientEye2: {
    width: 8,
    height: 8,
    backgroundColor: 'black',
    borderRadius: 4,
    position: 'absolute',
    top: 20,
    right: 12,
  },
  patientSmile: {
    width: 12,
    height: 6,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    position: 'absolute',
    top: 32,
    left: 22,
  },
  patientBody: {
    width: 40,
    height: 56,
    backgroundColor: '#48BB78',
    borderRadius: 8,
    alignSelf: 'center',
  },
  patientArm: {
    width: 12,
    height: 24,
    backgroundColor: '#FED7D7',
    borderRadius: 6,
    position: 'absolute',
    top: 64,
    left: -8,
  },
  patientArm2: {
    width: 12,
    height: 24,
    backgroundColor: '#FED7D7',
    borderRadius: 6,
    position: 'absolute',
    top: 64,
    right: -8,
  },
  patientLeg: {
    width: 10,
    height: 24,
    backgroundColor: '#1A365D',
    borderRadius: 5,
    position: 'absolute',
    top: 116,
    left: 16,
  },
  patientLeg2: {
    width: 10,
    height: 24,
    backgroundColor: '#1A365D',
    borderRadius: 5,
    position: 'absolute',
    top: 116,
    right: 16,
  },
  smallDoctorContainer: {
    position: 'absolute',
    right: -48,
    bottom: 16,
    transform: [{ scale: 0.75 }],
  },
  smallDoctorHead: {
    width: 48,
    height: 48,
    backgroundColor: '#FED7D7',
    borderRadius: 24,
    marginBottom: 4,
    position: 'relative',
  },
  smallDoctorHair: {
    width: 40,
    height: 32,
    backgroundColor: '#8B4513',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    top: -4,
    left: 4,
  },
  smallGlasses: {
    width: 32,
    height: 16,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    position: 'absolute',
    top: 12,
    left: 8,
  },
  smallWhiteCoat: {
    width: 32,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 4,
    borderLeftWidth: 2,
    borderLeftColor: '#3B82F6',
    alignSelf: 'center',
  },
  smallStethoscope: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#4A5568',
    borderRadius: 8,
    backgroundColor: '#E2E8F0',
    alignSelf: 'center',
    marginTop: 8,
  },
  floatingHeart: {
    position: 'absolute',
    top: -16,
    left: 24,
  },
  floatingActivity: {
    position: 'absolute',
    top: -8,
    right: -16,
  },
  smallHeartIcon: {
    fontSize: 16,
  },
  smallActivityIcon: {
    fontSize: 12,
  },

  // Content Card
  contentCard: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
    marginTop: 'auto',
  },
  onboardingTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
  },
  onboardingSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
    marginBottom: 32,
  },
  getStartedButton: {
    marginBottom: 24,
  },
  getStartedText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 16,
    backgroundColor: '#3B82F6',
    borderRadius: 16,
    overflow: 'hidden',
  },

  // Login Screen
  loginHeader: {
    paddingBottom: 16,
  },
  loginHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 24,
    color: 'white',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerHeart: {
    fontSize: 24,
  },
  headerSpacer: {
    width: 40,
  },
  loginContent: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  loginForm: {
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  loginTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  loginSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
  },
  inputIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  securityNote: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 32,
  },
  signInButton: {
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
  },
  signInGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  signInIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  signInText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  dividerText: {
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#6B7280',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    paddingVertical: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  socialIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 12,
    width: 20,
    textAlign: 'center',
  },
  socialText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
  },
  complianceCard: {
    backgroundColor: '#EBF8FF',
    borderRadius: 16,
    padding: 16,
    marginTop: 32,
    marginBottom: 24,
  },
  complianceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  lockIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  lockText: {
    fontSize: 12,
  },
  complianceTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E40AF',
  },
  complianceText: {
    fontSize: 12,
    color: '#1E40AF',
    lineHeight: 18,
  },
  footer: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 32,
  },
  footerLink: {
    color: '#3B82F6',
    textDecorationLine: 'underline',
  },
});

export default Login;