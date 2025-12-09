# Daily Time Tracker - AI-Powered Analytics Dashboard

A responsive, modern web app for tracking daily activities and analyzing time usage with interactive dashboards.

## 🌟 Features

✅ **Firebase Authentication**
- Email/password sign-up and sign-in
- Google OAuth integration
- Secure session management

✅ **Activity Tracking**
- Add activities with title, duration, and category
- Edit and delete activities
- Real-time remaining minutes calculation
- Daily limit validation (≤ 1440 minutes)

✅ **Analytics Dashboard**
- Summary statistics (total hours, activity count, categories)
- Pie chart showing time distribution by category
- Bar chart showing activity durations
- "No data" friendly state with illustration

✅ **User Experience**
- Responsive design (mobile, tablet, desktop)
- Smooth transitions and animations
- Real-time data synchronization
- Date-based activity organization
- Notifications for user actions

## 📋 Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Authentication:** Firebase Auth
- **Database:** Firestore
- **Charts:** Chart.js
- **Deployment:** GitHub Pages (or any static hosting)

## 🚀 Getting Started

### Prerequisites
- Firebase project (free tier available)
- Modern web browser
- Git (for deployment)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/time-tracker.git
   cd time-tracker
   \`\`\`

2. **Set up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Create a new project
   - Enable Authentication (Email/password + Google)
   - Create a Firestore Database

3. **Configure Firebase Credentials**
   - In Firebase Console, go to Project Settings
   - Copy your config object
   - Replace the config in `app.js`:
   \`\`\`javascript
   const firebaseConfig = {
       apiKey: "YOUR_FIREBASE_API_KEY",
       authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_PROJECT_ID.appspot.com",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
   };
   \`\`\`

4. **Deploy Firestore Security Rules**
   - Go to Firestore Database → Rules
   - Copy the rules from `firebase.rules.txt`
   - Deploy the rules

5. **Run Locally**
   \`\`\`bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   \`\`\`
   Then visit `http://localhost:8000`

6. **Deploy to GitHub Pages**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   \`\`\`
   Then enable GitHub Pages in repository settings.

## 📖 Usage

1. **Sign Up/Sign In**
   - Create an account with email or Google
   - Your data is securely stored in Firestore

2. **Add Activities**
   - Select a date
   - Enter activity title, duration in minutes, and category
   - Click "Add Activity"
   - View remaining minutes for the day

3. **View Analytics**
   - Once you've logged activities, click "Analyze Dashboard"
   - See summary stats, pie charts, and bar charts
   - Navigate between dates to view historical data

4. **Manage Activities**
   - Edit or delete activities from the list
   - Activities update in real-time across devices

## 🔒 Security

- Row-Level Security (RLS) ensures users can only access their own data
- Password hashing via Firebase Auth
- HTTPS enforced
- No sensitive data stored client-side

## 📱 Responsive Design

Optimized for:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (< 768px)

## 🎨 Design

- Modern gradient UI with smooth transitions
- Accessibility-first color palette
- Clean, intuitive navigation
- Fast load times

## 🐛 Troubleshooting

**Firebase Config Error**
- Verify all config values in `app.js` are correct
- Check Firebase project is active

**Charts Not Showing**
- Ensure Chart.js CDN is loaded
- Check browser console for errors

**Activities Not Saving**
- Verify Firestore rules are deployed
- Check user is authenticated

## 🚀 Deployment Options

### GitHub Pages (Free)
- Set repository to public
- Enable Pages in Settings
- Deploy with `git push`

### Vercel (Free)
- Connect repository to Vercel
- Auto-deploys on push

### Firebase Hosting
- Run `firebase deploy`
- Free tier includes custom domain

## 📞 Support

For issues or suggestions:
1. Check existing GitHub issues
2. Create a new issue with details
3. Include browser console errors

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes

## 🙏 Acknowledgments

- Firebase for backend infrastructure
- Chart.js for beautiful visualizations
- Inspired by modern productivity apps

---

**Live Demo:** [Add deployment link here]  
**Video Walkthrough:** [Add YouTube/Drive link here]

Happy tracking! 📊⏱️
