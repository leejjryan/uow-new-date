// ─── UOW Session Date Data ────────────────────────────────────────────────────
// Each session has an array of weeks: { label, start, end }
// Dates in YYYY-MM-DD. Non-teaching periods (recess, exams, etc.) are separate.

const SESSIONS = [
  {
    name: "Autumn 2026",
    color: "#e8845a",
    weeks: [
      { label: "Week 1",  start: "2026-03-02", end: "2026-03-06" },
      { label: "Week 2",  start: "2026-03-09", end: "2026-03-13" },
      { label: "Week 3",  start: "2026-03-16", end: "2026-03-20" },
      { label: "Week 4",  start: "2026-03-23", end: "2026-03-27" },
      { label: "Week 5",  start: "2026-03-30", end: "2026-04-03" },
      { label: "Week 6",  start: "2026-04-06", end: "2026-04-10" },
      { label: "Week 7",  start: "2026-04-13", end: "2026-04-17" },
      // Mid-session recess 20–24 Apr
      { label: "Week 8",  start: "2026-04-27", end: "2026-05-01" },
      { label: "Week 9",  start: "2026-05-04", end: "2026-05-08" },
      { label: "Week 10", start: "2026-05-11", end: "2026-05-15" },
      { label: "Week 11", start: "2026-05-18", end: "2026-05-22" },
      { label: "Week 12", start: "2026-05-25", end: "2026-05-29" },
      { label: "Week 13", start: "2026-06-01", end: "2026-06-05" },
    ],
    periods: [
      { label: "Mid-Session Recess", start: "2026-04-20", end: "2026-04-24" },
      { label: "Study Recess",       start: "2026-06-08", end: "2026-06-12" },
      { label: "Final Exams",        start: "2026-06-13", end: "2026-06-25" },
      { label: "Mid-Year Recess",    start: "2026-06-29", end: "2026-07-24" },
    ]
  },
  {
    name: "Spring 2026",
    color: "#6ab187",
    weeks: [
      { label: "Week 1",  start: "2026-07-27", end: "2026-07-31" },
      { label: "Week 2",  start: "2026-08-03", end: "2026-08-07" },
      { label: "Week 3",  start: "2026-08-10", end: "2026-08-14" },
      { label: "Week 4",  start: "2026-08-17", end: "2026-08-21" },
      { label: "Week 5",  start: "2026-08-24", end: "2026-08-28" },
      { label: "Week 6",  start: "2026-08-31", end: "2026-09-04" },
      { label: "Week 7",  start: "2026-09-07", end: "2026-09-11" },
      { label: "Week 8",  start: "2026-09-14", end: "2026-09-18" },
      { label: "Week 9",  start: "2026-09-21", end: "2026-09-25" },
      // Mid-session recess 28 Sep – 2 Oct
      { label: "Week 10", start: "2026-10-05", end: "2026-10-09" },
      { label: "Week 11", start: "2026-10-12", end: "2026-10-16" },
      { label: "Week 12", start: "2026-10-19", end: "2026-10-23" },
      { label: "Week 13", start: "2026-10-26", end: "2026-10-30" },
    ],
    periods: [
      { label: "Mid-Session Recess", start: "2026-09-28", end: "2026-10-02" },
      { label: "Study Recess",       start: "2026-11-02", end: "2026-11-06" },
      { label: "Final Exams",        start: "2026-11-07", end: "2026-11-19" },
    ]
  },
  {
    name: "Annual 2026",
    color: "#5b9bd5",
    weeks: [
      { label: "Week 1",  start: "2026-03-02", end: "2026-03-06" },
      { label: "Week 2",  start: "2026-03-09", end: "2026-03-13" },
      { label: "Week 3",  start: "2026-03-16", end: "2026-03-20" },
      { label: "Week 4",  start: "2026-03-23", end: "2026-03-27" },
      { label: "Week 5",  start: "2026-03-30", end: "2026-04-03" },
      { label: "Week 6",  start: "2026-04-06", end: "2026-04-10" },
      { label: "Week 7",  start: "2026-04-13", end: "2026-04-17" },
      { label: "Week 8",  start: "2026-04-27", end: "2026-05-01" },
      { label: "Week 9",  start: "2026-05-04", end: "2026-05-08" },
      { label: "Week 10", start: "2026-05-11", end: "2026-05-15" },
      { label: "Week 11", start: "2026-05-18", end: "2026-05-22" },
      { label: "Week 12", start: "2026-05-25", end: "2026-05-29" },
      { label: "Week 13", start: "2026-06-01", end: "2026-06-05" },
      // Mid-year recess 29 Jun – 24 Jul
      { label: "Week 14", start: "2026-07-27", end: "2026-07-31" },
      { label: "Week 15", start: "2026-08-03", end: "2026-08-07" },
      { label: "Week 16", start: "2026-08-10", end: "2026-08-14" },
      { label: "Week 17", start: "2026-08-17", end: "2026-08-21" },
      { label: "Week 18", start: "2026-08-24", end: "2026-08-28" },
      { label: "Week 19", start: "2026-08-31", end: "2026-09-04" },
      { label: "Week 20", start: "2026-09-07", end: "2026-09-11" },
      { label: "Week 21", start: "2026-09-14", end: "2026-09-18" },
      { label: "Week 22", start: "2026-09-21", end: "2026-09-25" },
      // Mid-session recess 28 Sep – 2 Oct
      { label: "Week 23", start: "2026-10-05", end: "2026-10-09" },
      { label: "Week 24", start: "2026-10-12", end: "2026-10-16" },
      { label: "Week 25", start: "2026-10-19", end: "2026-10-23" },
      { label: "Week 26", start: "2026-10-26", end: "2026-10-30" },
    ],
    periods: [
      { label: "Mid-Session Recess", start: "2026-04-20", end: "2026-04-24" },
      { label: "Mid-Year Recess",    start: "2026-06-29", end: "2026-07-24" },
      { label: "Mid-Session Recess", start: "2026-09-28", end: "2026-10-02" },
      { label: "Study Recess",       start: "2026-11-02", end: "2026-11-06" },
      { label: "Final Exams",        start: "2026-11-07", end: "2026-11-19" },
    ]
  },
  {
    name: "Summer 2026/27",
    color: "#a78bfa",
    weeks: [
      { label: "Week 1", start: "2026-11-30", end: "2026-12-04" },
      { label: "Week 2", start: "2026-12-07", end: "2026-12-11" },
      { label: "Week 3", start: "2026-12-14", end: "2026-12-18" },
      // Mid-session recess 21 Dec – 1 Jan
      { label: "Week 4", start: "2027-01-05", end: "2027-01-09" },
      { label: "Week 5", start: "2027-01-12", end: "2027-01-16" },
      { label: "Week 6", start: "2027-01-19", end: "2027-01-23" },
      { label: "Week 7", start: "2027-01-26", end: "2027-01-30" },
    ],
    periods: [
      { label: "Mid-Session Recess", start: "2026-12-21", end: "2027-01-01" },
      { label: "Study Recess",       start: "2027-02-01", end: "2027-02-05" },
      { label: "Final Exams",        start: "2027-02-08", end: "2027-02-12" },
    ]
  },
  {
    name: "Trimester 1 2026",
    color: "#f0c040",
    weeks: [
      { label: "Week 1",  start: "2026-02-09", end: "2026-02-13" },
      { label: "Week 2",  start: "2026-02-16", end: "2026-02-20" },
      { label: "Week 3",  start: "2026-02-23", end: "2026-02-27" },
      { label: "Week 4",  start: "2026-03-02", end: "2026-03-06" },
      { label: "Week 5",  start: "2026-03-09", end: "2026-03-13" },
      { label: "Week 6",  start: "2026-03-16", end: "2026-03-20" },
      { label: "Week 7",  start: "2026-03-23", end: "2026-03-27" },
      { label: "Week 8",  start: "2026-03-30", end: "2026-04-03" },
      { label: "Week 9",  start: "2026-04-06", end: "2026-04-10" },
      { label: "Week 10", start: "2026-04-13", end: "2026-04-17" },
    ],
    periods: [
      { label: "Study Recess", start: "2026-04-20", end: "2026-04-24" },
      { label: "Final Exams",  start: "2026-04-25", end: "2026-05-01" },
    ]
  },
  {
    name: "Trimester 2 2026",
    color: "#f472b6",
    weeks: [
      { label: "Week 1",  start: "2026-05-18", end: "2026-05-22" },
      { label: "Week 2",  start: "2026-05-25", end: "2026-05-29" },
      { label: "Week 3",  start: "2026-06-01", end: "2026-06-05" },
      { label: "Week 4",  start: "2026-06-08", end: "2026-06-12" },
      { label: "Week 5",  start: "2026-06-15", end: "2026-06-19" },
      { label: "Week 6",  start: "2026-06-22", end: "2026-06-26" },
      { label: "Week 7",  start: "2026-06-29", end: "2026-07-03" },
      { label: "Week 8",  start: "2026-07-06", end: "2026-07-10" },
      { label: "Week 9",  start: "2026-07-13", end: "2026-07-17" },
      { label: "Week 10", start: "2026-07-20", end: "2026-07-24" },
    ],
    periods: [
      { label: "Study Recess", start: "2026-07-27", end: "2026-07-31" },
      { label: "Final Exams",  start: "2026-08-01", end: "2026-08-07" },
    ]
  },
  {
    name: "Trimester 3 2026",
    color: "#f87171",
    weeks: [
      { label: "Week 1",  start: "2026-08-24", end: "2026-08-28" },
      { label: "Week 2",  start: "2026-08-31", end: "2026-09-04" },
      { label: "Week 3",  start: "2026-09-07", end: "2026-09-11" },
      { label: "Week 4",  start: "2026-09-14", end: "2026-09-18" },
      { label: "Week 5",  start: "2026-09-21", end: "2026-09-25" },
      { label: "Week 6",  start: "2026-09-28", end: "2026-10-02" },
      { label: "Week 7",  start: "2026-10-05", end: "2026-10-09" },
      { label: "Week 8",  start: "2026-10-12", end: "2026-10-16" },
      { label: "Week 9",  start: "2026-10-19", end: "2026-10-23" },
      { label: "Week 10", start: "2026-10-26", end: "2026-10-30" },
    ],
    periods: [
      { label: "Study Recess", start: "2026-11-02", end: "2026-11-06" },
      { label: "Final Exams",  start: "2026-11-07", end: "2026-11-19" },
    ]
  }
];

// ─── Date Helpers ─────────────────────────────────────────────────────────────

function toDateObj(str) {
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function todayLocal() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function isBetween(date, start, end) {
  const s = toDateObj(start);
  const e = toDateObj(end);
  return date >= s && date <= e;
}

// ─── Session Status Logic ─────────────────────────────────────────────────────

function getSessionStatus(session, today) {
  // Check if in a teaching week
  for (const week of session.weeks) {
    if (isBetween(today, week.start, week.end)) {
      return { type: "teaching", label: week.label };
    }
  }
  // Check if in a named period (recess, exams etc.)
  for (const period of session.periods) {
    if (isBetween(today, period.start, period.end)) {
      return { type: "period", label: period.label };
    }
  }
  // Check if session hasn't started yet
  const firstDay = toDateObj(session.weeks[0].start);
  const lastPeriod = session.periods[session.periods.length - 1];
  const lastDay = toDateObj(lastPeriod ? lastPeriod.end : session.weeks[session.weeks.length - 1].end);

  if (today < firstDay || today > lastDay) {
    return null; // not active
  }

  return null;
}

// ─── Clock & Date Display ─────────────────────────────────────────────────────

function updateClock() {
  const now = new Date();

  const timeStr = now.toLocaleTimeString("en-AU", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });

  const dateStr = now.toLocaleDateString("en-AU", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  document.getElementById("clock").textContent = timeStr;
  document.getElementById("date").textContent = dateStr;
}

// ─── Render Sessions ──────────────────────────────────────────────────────────

function renderSessions() {
  const today = todayLocal();
  const container = document.getElementById("sessions");
  container.innerHTML = "";

  const active = [];

  for (const session of SESSIONS) {
    const status = getSessionStatus(session, today);
    if (status) {
      active.push({ session, status });
    }
  }

  if (active.length === 0) {
    const msg = document.createElement("div");
    msg.className = "no-sessions";
    msg.textContent = "No active sessions today.";
    container.appendChild(msg);
    return;
  }

  for (const { session, status } of active) {
    const card = document.createElement("div");
    card.className = "session-card";
    card.style.setProperty("--session-color", session.color);

    const dot = document.createElement("span");
    dot.className = "dot";

    const name = document.createElement("span");
    name.className = "session-name";
    name.textContent = session.name;

    const label = document.createElement("span");
    label.className = status.type === "teaching" ? "session-week" : "session-period";
    label.textContent = status.label;

    card.appendChild(dot);
    card.appendChild(name);
    card.appendChild(label);
    container.appendChild(card);
  }
}

// ─── Init ─────────────────────────────────────────────────────────────────────

updateClock();
renderSessions();
setInterval(updateClock, 1000);
