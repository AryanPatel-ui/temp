import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let app: any = null;
let auth: any = null;

const isConfigValid =
  firebaseConfig.apiKey &&
  firebaseConfig.apiKey !== 'your-value-here' &&
  !firebaseConfig.apiKey.includes('your-');

if (isConfigValid) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    auth = getAuth(app);
  } catch (error) {
    console.error('Failed to initialize Firebase app:', error);
  }
}

if (!auth) {
  console.warn(
    'Firebase API key not configured or invalid. Using fully functional mock authentication.'
  );

  // Create a robust mock auth system
  const listeners = new Set<(user: any) => void>();
  let currentUser: any = null;

  // Load mock user from localStorage on client-side
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('kairo_mock_user');
      if (stored) {
        currentUser = JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error reading mock user from localStorage:', e);
    }
  }

  const triggerStateChange = () => {
    listeners.forEach((cb) => cb(currentUser));
  };

  auth = {
    isMock: true,
    currentUser,
    onAuthStateChanged: (callback: (user: any) => void) => {
      listeners.add(callback);
      // Immediately invoke with current mock user
      callback(currentUser);
      return () => {
        listeners.delete(callback);
      };
    },
    mockSignIn: async (email: string) => {
      currentUser = {
        uid: 'mock-uid-' + Math.random().toString(36).substring(2, 11),
        email,
        displayName: email.split('@')[0],
        emailVerified: true,
      };
      if (typeof window !== 'undefined') {
        localStorage.setItem('kairo_mock_user', JSON.stringify(currentUser));
      }
      triggerStateChange();
      return currentUser;
    },
    mockSignOut: async () => {
      currentUser = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('kairo_mock_user');
      }
      triggerStateChange();
    },
  };
}

export { auth };
export default app;
