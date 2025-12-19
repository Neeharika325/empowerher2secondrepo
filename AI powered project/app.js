// Firebase is loaded from CDN in HTML, we access it via window.firebase

let currentUser = null
let selectedDate = new Date().toISOString().split("T")[0]
let activities = []
let pieChart = null
let barChart = null

// Firebase Configuration
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
}

// Initialize Firebase
const firebase = window.firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.firestore()

// ===== DOM ELEMENTS =====
const authScreen = document.getElementById("authScreen")
const appScreen = document.getElementById("appScreen")
const signInForm = document.getElementById("signInForm")
const signUpForm = document.getElementById("signUpForm")
const trackerSection = document.getElementById("trackerSection")
const dashboardSection = document.getElementById("dashboardSection")

// Auth Form Elements
const signInEmail = document.getElementById("signInEmail")
const signInPassword = document.getElementById("signInPassword")
const signUpEmail = document.getElementById("signUpEmail")
const signUpPassword = document.getElementById("signUpPassword")
const signUpConfirm = document.getElementById("signUpConfirm")
const signInBtn = document.getElementById("signInBtn")
const signUpBtn = document.getElementById("signUpBtn")
const googleSignInBtn = document.getElementById("googleSignInBtn")
const googleSignUpBtn = document.getElementById("googleSignUpBtn")
const authError = document.getElementById("authError")
const signOutBtn = document.getElementById("signOutBtn")
const userEmail = document.getElementById("userEmail")

// App Elements
const dateInput = document.getElementById("dateInput")
const prevDateBtn = document.getElementById("prevDateBtn")
const nextDateBtn = document.getElementById("nextDateBtn")
const selectedDateSpan = document.getElementById("selectedDate")
const activityTitle = document.getElementById("activityTitle")
const activityMinutes = document.getElementById("activityMinutes")
const activityCategory = document.getElementById("activityCategory")
const addActivityBtn = document.getElementById("addActivityBtn")
const activitiesContainer = document.getElementById("activitiesContainer")
const remainingMinutes = document.getElementById("remainingMinutes")
const usageProgress = document.getElementById("usageProgress")
const analyzeBtn = document.getElementById("analyzeBtn")
const backToDayBtn = document.getElementById("backToDayBtn")
const noDataState = document.getElementById("noDataState")
const dashboardContent = document.getElementById("dashboardContent")
const dashboardDate = document.getElementById("dashboardDate")
const notification = document.getElementById("notification")

// ===== AUTH FUNCTIONS =====
function toggleAuthForm(e) {
  e.preventDefault()
  signInForm.classList.toggle("active")
  signUpForm.classList.toggle("active")
  authError.classList.remove("show")
  authError.textContent = ""
}

function showAuthError(message) {
  authError.textContent = message
  authError.classList.add("show")
}

function showNotification(message, type = "success") {
  notification.textContent = message
  notification.className = `notification ${type} show`
  setTimeout(() => {
    notification.classList.remove("show")
  }, 3000)
}

// Sign In with Email/Password
signInBtn.addEventListener("click", async () => {
  const email = signInEmail.value.trim()
  const password = signInPassword.value.trim()

  if (!email || !password) {
    showAuthError("Please fill in all fields")
    return
  }

  signInBtn.disabled = true
  signInBtn.textContent = "Signing in..."

  try {
    await auth.signInWithEmailAndPassword(email, password)
    resetAuthForms()
  } catch (error) {
    showAuthError(error.message)
  } finally {
    signInBtn.disabled = false
    signInBtn.textContent = "Sign In"
  }
})

// Sign Up with Email/Password
signUpBtn.addEventListener("click", async () => {
  const email = signUpEmail.value.trim()
  const password = signUpPassword.value.trim()
  const confirm = signUpConfirm.value.trim()

  if (!email || !password || !confirm) {
    showAuthError("Please fill in all fields")
    return
  }

  if (password.length < 6) {
    showAuthError("Password must be at least 6 characters")
    return
  }

  if (password !== confirm) {
    showAuthError("Passwords do not match")
    return
  }

  signUpBtn.disabled = true
  signUpBtn.textContent = "Creating account..."

  try {
    await auth.createUserWithEmailAndPassword(email, password)
    resetAuthForms()
  } catch (error) {
    showAuthError(error.message)
  } finally {
    signUpBtn.disabled = false
    signUpBtn.textContent = "Sign Up"
  }
})

// Google Sign In
async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider()
  try {
    await auth.signInWithPopup(provider)
  } catch (error) {
    showAuthError(error.message)
  }
}

googleSignInBtn.addEventListener("click", signInWithGoogle)
googleSignUpBtn.addEventListener("click", signInWithGoogle)

// Sign Out
signOutBtn.addEventListener("click", async () => {
  try {
    await auth.signOut()
  } catch (error) {
    showNotification("Error signing out", "error")
  }
})

// ===== AUTH STATE MONITORING =====
auth.onAuthStateChanged((user) => {
  if (user) {
    currentUser = user
    userEmail.textContent = user.email
    authScreen.classList.add("hidden")
    appScreen.classList.remove("hidden")
    setDateToToday()
    setupDatePicker()
    loadActivities()
  } else {
    currentUser = null
    authScreen.classList.remove("hidden")
    appScreen.classList.add("hidden")
    trackerSection.classList.remove("hidden")
    dashboardSection.classList.add("hidden")
  }
})

function resetAuthForms() {
  signInEmail.value = ""
  signInPassword.value = ""
  signUpEmail.value = ""
  signUpPassword.value = ""
  signUpConfirm.value = ""
  authError.classList.remove("show")
}

// ===== APP INITIALIZATION =====
function setDateToToday() {
  const today = new Date().toISOString().split("T")[0]
  selectedDate = today
  dateInput.value = today
  updateDateDisplay()
}

function setupDatePicker() {
  dateInput.addEventListener("change", (e) => {
    selectedDate = e.target.value
    updateDateDisplay()
    loadActivities()
  })

  prevDateBtn.addEventListener("click", () => {
    const date = new Date(selectedDate)
    date.setDate(date.getDate() - 1)
    selectedDate = date.toISOString().split("T")[0]
    dateInput.value = selectedDate
    updateDateDisplay()
    loadActivities()
  })

  nextDateBtn.addEventListener("click", () => {
    const date = new Date(selectedDate)
    date.setDate(date.getDate() + 1)
    selectedDate = date.toISOString().split("T")[0]
    dateInput.value = selectedDate
    updateDateDisplay()
    loadActivities()
  })
}

function updateDateDisplay() {
  const date = new Date(selectedDate)
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  const formattedDate = date.toLocaleDateString("en-US", options)
  selectedDateSpan.textContent = formattedDate
  dashboardDate.textContent = formattedDate
}

// ===== ACTIVITY MANAGEMENT =====
addActivityBtn.addEventListener("click", addActivity)

async function addActivity() {
  const title = activityTitle.value.trim()
  const minutes = Number.parseInt(activityMinutes.value)
  const category = activityCategory.value || "Other"

  if (!title || !minutes || minutes <= 0) {
    showNotification("Please enter a valid activity and duration", "error")
    return
  }

  const totalMinutes = activities.reduce((sum, a) => sum + a.minutes, 0)
  if (totalMinutes + minutes > 1440) {
    showNotification("Cannot exceed 1440 minutes per day", "error")
    return
  }

  addActivityBtn.disabled = true

  try {
    await db
      .collection("users")
      .doc(currentUser.uid)
      .collection("days")
      .doc(selectedDate)
      .collection("activities")
      .add({
        title,
        minutes,
        category,
        createdAt: new Date(),
      })

    showNotification("Activity added successfully", "success")
    activityTitle.value = ""
    activityMinutes.value = ""
    activityCategory.value = ""
    loadActivities()
  } catch (error) {
    showNotification("Error adding activity: " + error.message, "error")
  } finally {
    addActivityBtn.disabled = false
  }
}

async function deleteActivity(activityId) {
  if (!confirm("Delete this activity?")) return

  try {
    await db
      .collection("users")
      .doc(currentUser.uid)
      .collection("days")
      .doc(selectedDate)
      .collection("activities")
      .doc(activityId)
      .delete()

    showNotification("Activity deleted", "success")
    loadActivities()
  } catch (error) {
    showNotification("Error deleting activity: " + error.message, "error")
  }
}

async function loadActivities() {
  try {
    const snapshot = await db
      .collection("users")
      .doc(currentUser.uid)
      .collection("days")
      .doc(selectedDate)
      .collection("activities")
      .get()

    activities = []
    snapshot.forEach((doc) => {
      activities.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    renderActivities()
    updateRemainingMinutes()
    updateAnalyzeButton()
  } catch (error) {
    console.error("Error loading activities:", error)
  }
}

function renderActivities() {
  activitiesContainer.innerHTML = ""

  if (activities.length === 0) {
    activitiesContainer.innerHTML =
      '<p style="color: var(--text-secondary); text-align: center; padding: 20px;">No activities yet</p>'
    return
  }

  activities.forEach((activity) => {
    const item = document.createElement("div")
    item.className = "activity-item"

    const categoryColor = getCategoryColor(activity.category)
    const hours = Math.floor(activity.minutes / 60)
    const mins = activity.minutes % 60
    const durationText = hours > 0 ? `${hours}h ${mins}m` : `${mins}m`

    item.innerHTML = `
            <div class="activity-info">
                <div>
                    <div class="activity-title">${escapeHtml(activity.title)}</div>
                    <span class="activity-category" style="background-color: ${categoryColor}20; color: ${categoryColor}">
                        ${activity.category}
                    </span>
                </div>
            </div>
            <div style="display: flex; align-items: center; gap: 12px;">
                <div class="activity-duration">${durationText}</div>
                <div class="activity-actions">
                    <button class="btn-delete" onclick="deleteActivity('${activity.id}')">Delete</button>
                </div>
            </div>
        `

    activitiesContainer.appendChild(item)
  })
}

function updateRemainingMinutes() {
  const totalMinutes = activities.reduce((sum, a) => sum + a.minutes, 0)
  const remaining = 1440 - totalMinutes
  remainingMinutes.textContent = remaining

  const usagePercent = (totalMinutes / 1440) * 100
  usageProgress.style.width = usagePercent + "%"

  if (usagePercent > 100) {
    usageProgress.style.background = "linear-gradient(90deg, var(--danger), var(--warning))"
  } else if (usagePercent > 80) {
    usageProgress.style.background = "linear-gradient(90deg, var(--warning), var(--accent))"
  } else {
    usageProgress.style.background = "linear-gradient(90deg, var(--primary), var(--secondary))"
  }
}

function updateAnalyzeButton() {
  const totalMinutes = activities.reduce((sum, a) => sum + a.minutes, 0)
  analyzeBtn.disabled = totalMinutes === 0
}

// ===== DASHBOARD =====
analyzeBtn.addEventListener("click", () => {
  trackerSection.classList.add("hidden")
  dashboardSection.classList.remove("hidden")
  renderDashboard()
})

backToDayBtn.addEventListener("click", () => {
  dashboardSection.classList.add("hidden")
  trackerSection.classList.remove("hidden")
})

function renderDashboard() {
  const totalMinutes = activities.reduce((sum, a) => sum + a.minutes, 0)

  if (totalMinutes === 0) {
    noDataState.classList.remove("hidden")
    dashboardContent.classList.add("hidden")
    return
  }

  noDataState.classList.add("hidden")
  dashboardContent.classList.remove("hidden")

  // Update stats
  const hours = Math.floor(totalMinutes / 60)
  const mins = totalMinutes % 60
  document.getElementById("totalHours").textContent = `${hours}h ${mins}m`
  document.getElementById("totalActivities").textContent = activities.length

  const categories = new Set(activities.map((a) => a.category))
  document.getElementById("totalCategories").textContent = categories.size

  // Prepare chart data
  const categoryData = {}
  activities.forEach((activity) => {
    if (!categoryData[activity.category]) {
      categoryData[activity.category] = 0
    }
    categoryData[activity.category] += activity.minutes
  })

  renderPieChart(categoryData)
  renderBarChart()
}

function renderPieChart(categoryData) {
  const ctx = document.getElementById("pieChart").getContext("2d")

  if (pieChart) {
    pieChart.destroy()
  }

  const colors = Object.keys(categoryData).map((_, i) => {
    const hue = ((i * 360) / Object.keys(categoryData).length) % 360
    return `hsl(${hue}, 70%, 55%)`
  })

  pieChart = new window.Chart(ctx, {
    type: "doughnut",
    data: {
      labels: Object.keys(categoryData),
      datasets: [
        {
          data: Object.values(categoryData),
          backgroundColor: colors,
          borderColor: "var(--bg-primary)",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            font: { size: 12 },
            color: "var(--text-primary)",
            padding: 12,
          },
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const minutes = context.parsed
              const hours = Math.floor(minutes / 60)
              const mins = minutes % 60
              return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
            },
          },
        },
      },
    },
  })
}

function renderBarChart() {
  const ctx = document.getElementById("barChart").getContext("2d")

  if (barChart) {
    barChart.destroy()
  }

  const sortedActivities = [...activities].sort((a, b) => b.minutes - a.minutes)

  barChart = new window.Chart(ctx, {
    type: "bar",
    data: {
      labels: sortedActivities.map((a) => a.title),
      datasets: [
        {
          label: "Minutes",
          data: sortedActivities.map((a) => a.minutes),
          backgroundColor: "var(--primary)",
          borderColor: "var(--primary-dark)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      indexAxis: "y",
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const minutes = context.parsed.x
              const hours = Math.floor(minutes / 60)
              const mins = minutes % 60
              return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
            },
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            color: "var(--text-secondary)",
            font: { size: 11 },
          },
          grid: {
            color: "var(--border-light)",
          },
        },
        y: {
          ticks: {
            color: "var(--text-secondary)",
            font: { size: 11 },
          },
          grid: {
            display: false,
          },
        },
      },
    },
  })
}

// ===== UTILITY FUNCTIONS =====
function escapeHtml(text) {
  const div = document.createElement("div")
  div.textContent = text
  return div.innerHTML
}

function getCategoryColor(category) {
  const colors = {
    Work: "#3b82f6",
    Exercise: "#10b981",
    Leisure: "#8b5cf6",
    Sleep: "#6b7280",
    Meals: "#f59e0b",
    Travel: "#06b6d4",
    Health: "#ef4444",
    Other: "#9ca3af",
  }
  return colors[category] || "#9ca3af"
}
