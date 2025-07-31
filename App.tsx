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
  AppRegistry,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

interface LoginProps {}

type ScreenType = 'welcome' | 'onboarding' | 'login' | 'register';

const App: React.FC<LoginProps> = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('welcome');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');

  // Animations
  const bounceAnim = new Animated.Value(0);
  const pulseAnim = new Animated.Value(1);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // Bounce animation for doctor character
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -5,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Pulse animation for hearts
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1500,
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
  }, []);

  const WelcomeScreen: React.FC = () => (
    <LinearGradient
      colors={['#60A5FA', '#3B82F6', '#2563EB']}
      style={styles.fullScreen}
    >
      <StatusBar barStyle="light-content" backgroundColor="#3B82F6" />
      <SafeAreaView style={styles.container}>



        {/* Medical Clouds */}
<View style={[styles.cloud, styles.cloudTop]} />
<View style={[styles.cloud, styles.cloudBottom]} />
<View style={[styles.cloud, styles.cloudMiddleLeft]} />
<View style={[styles.cloud, styles.cloudMiddleRight]} />
<View style={[styles.cloud, styles.cloudFar]} />

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
            <Text style={styles.appTitle}>Diabell</Text>
            <Text style={styles.appSubtitle}>Everything for your health</Text>
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


        {/* Medical Scene Illustration */}
        <View style={styles.illustrationContainer}>

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
        </View>

        {/* Content Card */}
        <View style={styles.contentCard}>
          <Text style={styles.onboardingTitle}>Your health, our priority.</Text>
          <Text style={styles.onboardingSubtitle}>
            Track symptoms, book appointments, and stay connected with your healthcare team.
          </Text>

          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={() => setCurrentScreen('login')}
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
              <Text style={styles.getStartedText}>Diabell</Text>
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

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputIcon}>🔒</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                placeholderTextColor="#9CA3AF"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Sign In Button */}
          <TouchableOpacity style={styles.signInButton}>
            <LinearGradient
              colors={['#3B82F6', '#2563EB']}
              style={styles.signInGradient}
            >

              <Text style={styles.signInText}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social Login Button */}
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialIcon}>G</Text>
            <Text style={styles.socialText}>Continue with Google</Text>
          </TouchableOpacity>

          {/* Register Link */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => setCurrentScreen('register')}>
              <Text style={styles.registerLink}>Register</Text>
            </TouchableOpacity>
          </View>

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

  const RegisterScreen: React.FC = () => (
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
              onPress={() => setCurrentScreen('login')}
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
          <Text style={styles.loginTitle}>Create Account</Text>
          <Text style={styles.loginSubtitle}>
            Join Diabell and take control of your health journey with our comprehensive platform.
          </Text>

          {/* Full Name Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputIcon}>👤</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your full name"
                placeholderTextColor="#9CA3AF"
                value={fullName}
                onChangeText={setFullName}
              />
            </View>
          </View>

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

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputIcon}>🔒</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Create a password"
                placeholderTextColor="#9CA3AF"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Confirm Password Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputIcon}>🔒</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Confirm your password"
                placeholderTextColor="#9CA3AF"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Register Button */}
          <TouchableOpacity style={styles.signInButton}>
            <LinearGradient
              colors={['#3B82F6', '#2563EB']}
              style={styles.signInGradient}
            >

              <Text style={styles.signInText}>Create Account</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social Login Button */}
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialIcon}>G</Text>
            <Text style={styles.socialText}>Continue with Google</Text>
          </TouchableOpacity>

          {/* Login Link */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => setCurrentScreen('login')}>
              <Text style={styles.registerLink}>Sign In</Text>
            </TouchableOpacity>
          </View>

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
            By creating an account, you agree to our{' '}
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
    login: <LoginScreen />,
    register: <RegisterScreen />,
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
  cloudMiddleLeft: {
    top: 96,
    right: 32,
    width: 80,
    height: 40,
  },
    cloudMiddleRight: {
      top: 796,
      right: 92,
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
    width: 100,
    height: 140,
    position: 'relative',
    alignItems: 'center',
  },
  doctorHead: {
    width: 60,
    height: 60,
    backgroundColor: '#FED7D7',
    borderRadius: 30,
    position: 'absolute',
    top: 0,
    left: 20,
    zIndex: 10,
  },
  doctorHair: {
    width: 50,
    height: 35,
    backgroundColor: '#D69E2E',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'absolute',
    top: -5,
    left: 5,
  },
  eyesContainer: {
    position: 'absolute',
    top: 20,
    left: 12,
    flexDirection: 'row',
    width: 36,
    justifyContent: 'space-between',
  },
  eye: {
    width: 6,
    height: 6,
    backgroundColor: 'black',
    borderRadius: 3,
  },
  glassesContainer: {
    position: 'absolute',
    top: 18,
    left: 8,
    flexDirection: 'row',
    alignItems: 'center',
    width: 44,
  },
  glassLens: {
    width: 16,
    height: 16,
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 8,
  },
  glassBridge: {
    width: 6,
    height: 2,
    backgroundColor: 'black',
    marginHorizontal: 3,
  },
  nose: {
    width: 3,
    height: 6,
    backgroundColor: '#FED7D7',
    borderRadius: 1.5,
    position: 'absolute',
    top: 26,
    left: 28.5,
  },
  smile: {
    width: 12,
    height: 6,
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    position: 'absolute',
    top: 32,
    left: 24,
  },
  whiteCoat: {
    position: 'absolute',
    top: 45,
    left: 10,
    width: 80,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#3B82F6',
    zIndex: 5,
  },
  stethoscope: {
    position: 'absolute',
    top: 8,
    left: 30,
    alignItems: 'center',
  },
  stethoscopeHead: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: '#4A5568',
    borderRadius: 10,
    backgroundColor: '#E2E8F0',
  },
  stethoscopeTube: {
    width: 3,
    height: 18,
    backgroundColor: '#4A5568',
    marginTop: 2,
  },
  pocket: {
    width: 18,
    height: 12,
    backgroundColor: '#EBF8FF',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#3182CE',
    position: 'absolute',
    bottom: 10,
    left: 6,
  },
  pen: {
    width: 1.5,
    height: 8,
    backgroundColor: '#3B82F6',
    position: 'absolute',
    bottom: 1,
    left: 3,
  },
  arm: {
    width: 12,
    height: 35,
    backgroundColor: '#FED7D7',
    borderRadius: 6,
    position: 'absolute',
    top: 55,
  },
  leftArm: {
    left: 2,
  },
  rightArm: {
    right: 2,
  },
  clipboard: {
    position: 'absolute',
    top: 70,
    right: -8,
    width: 10,
    height: 14,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#A0AEC0',
    borderRadius: 2,
  },
  clipboardLine: {
    width: 6,
    height: 1.5,
    backgroundColor: '#A0AEC0',
    position: 'absolute',
    top: 3,
    left: 2,
  },
  clipboardLine2: {
    width: 5,
    height: 1.5,
    backgroundColor: '#A0AEC0',
    position: 'absolute',
    top: 6,
    left: 2,
  },
  leg: {
    width: 14,
    height: 25,
    backgroundColor: '#1A365D',
    borderRadius: 7,
    position: 'absolute',
    bottom: 5,
  },
  leftLeg: {
    left: 22,
  },
  rightLeg: {
    right: 22,
  },
  shoe: {
    width: 16,
    height: 8,
    backgroundColor: 'black',
    borderRadius: 4,
    position: 'absolute',
    bottom: 0,
  },
  leftShoe: {
    left: 21,
  },
  rightShoe: {
    right: 21,
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
    fontSize: 32,
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
    marginBottom: 24,
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
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  registerText: {
    fontSize: 16,
    color: '#6B7280',
  },
  registerLink: {
    fontSize: 16,
    color: '#3B82F6',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  complianceCard: {
    backgroundColor: '#EBF8FF',
    borderRadius: 16,
    padding: 16,
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

export default App;

// Bu satırı ekleyin
AppRegistry.registerComponent('main', () => App);