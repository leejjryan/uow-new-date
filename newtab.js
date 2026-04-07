// ─── UOW Session Date Data ────────────────────────────────────────────────────

const SESSIONS = [
  {
    name: "Autumn 2026",
    color: "#e4002b",
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
    ],
    periods: [
      { label: "Mid-Session Recess", start: "2026-04-20", end: "2026-04-24" },
      { label: "Study Recess",       start: "2026-06-08", end: "2026-06-12" },
      { label: "Final Exams",        start: "2026-06-13", end: "2026-06-25" },
      { label: "Mid-Year Recess",    start: "2026-06-29", end: "2026-07-24" },
    ],
    keyDates: [
      { label: "Last day to enrol / add subjects (self)",            date: "2026-03-13" },
      { label: "Last day to enrol / add subjects (HoS approval)",    date: "2026-03-20" },
      { label: "⚠️ Census Date",                                     date: "2026-03-31" },
      { label: "SSAF due",                                           date: "2026-04-01" },
      { label: "Last day to withdraw without academic penalty",       date: "2026-05-08" },
      { label: "Release of results",                                 date: "2026-07-09" },
      { label: "Supplementary & deferred exams start",               date: "2026-07-20" },
      { label: "Supplementary & deferred exams end",                 date: "2026-07-24" },
    ]
  },
  {
    name: "Spring 2026",
    color: "#00adef",
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
      { label: "Week 10", start: "2026-10-05", end: "2026-10-09" },
      { label: "Week 11", start: "2026-10-12", end: "2026-10-16" },
      { label: "Week 12", start: "2026-10-19", end: "2026-10-23" },
      { label: "Week 13", start: "2026-10-26", end: "2026-10-30" },
    ],
    periods: [
      { label: "Mid-Session Recess", start: "2026-09-28", end: "2026-10-02" },
      { label: "Study Recess",       start: "2026-11-02", end: "2026-11-06" },
      { label: "Final Exams",        start: "2026-11-07", end: "2026-11-19" },
    ],
    keyDates: [
      { label: "Last day to enrol / add subjects (self)",            date: "2026-08-07" },
      { label: "Last day to enrol / add subjects (HoS approval)",    date: "2026-08-14" },
      { label: "⚠️ Census Date",                                     date: "2026-08-31" },
      { label: "SSAF due",                                           date: "2026-09-01" },
      { label: "Last day to withdraw without academic penalty",       date: "2026-09-25" },
      { label: "Release of results",                                 date: "2026-12-03" },
      { label: "Supplementary & deferred exams start",               date: "2026-12-14" },
      { label: "Supplementary & deferred exams end",                 date: "2026-12-18" },
    ]
  },
  {
    name: "Annual 2026",
    color: "#001641",
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
      { label: "Week 14", start: "2026-07-27", end: "2026-07-31" },
      { label: "Week 15", start: "2026-08-03", end: "2026-08-07" },
      { label: "Week 16", start: "2026-08-10", end: "2026-08-14" },
      { label: "Week 17", start: "2026-08-17", end: "2026-08-21" },
      { label: "Week 18", start: "2026-08-24", end: "2026-08-28" },
      { label: "Week 19", start: "2026-08-31", end: "2026-09-04" },
      { label: "Week 20", start: "2026-09-07", end: "2026-09-11" },
      { label: "Week 21", start: "2026-09-14", end: "2026-09-18" },
      { label: "Week 22", start: "2026-09-21", end: "2026-09-25" },
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
    ],
    keyDates: [
      { label: "Last day to enrol / add subjects (self)",            date: "2026-03-13" },
      { label: "Last day to enrol / add subjects (HoS approval)",    date: "2026-03-20" },
      { label: "⚠️ Census Date",                                     date: "2026-04-27" },
      { label: "SSAF due",                                           date: "2026-04-28" },
      { label: "Last day to withdraw without academic penalty",       date: "2026-08-07" },
      { label: "Release of results",                                 date: "2026-12-03" },
      { label: "Supplementary & deferred exams start",               date: "2026-12-14" },
      { label: "Supplementary & deferred exams end",                 date: "2026-12-18" },
    ]
  },
  {
    name: "Summer 2026/27",
    color: "#007ab8",
    weeks: [
      { label: "Week 1", start: "2026-11-30", end: "2026-12-04" },
      { label: "Week 2", start: "2026-12-07", end: "2026-12-11" },
      { label: "Week 3", start: "2026-12-14", end: "2026-12-18" },
      { label: "Week 4", start: "2027-01-05", end: "2027-01-09" },
      { label: "Week 5", start: "2027-01-12", end: "2027-01-16" },
      { label: "Week 6", start: "2027-01-19", end: "2027-01-23" },
      { label: "Week 7", start: "2027-01-26", end: "2027-01-30" },
    ],
    periods: [
      { label: "Mid-Session Recess", start: "2026-12-21", end: "2027-01-01" },
      { label: "Study Recess",       start: "2027-02-01", end: "2027-02-05" },
      { label: "Final Exams",        start: "2027-02-08", end: "2027-02-12" },
    ],
    keyDates: [
      { label: "Last day to enrol / add subjects (self)",            date: "2026-12-04" },
      { label: "Last day to enrol / add subjects (HoS approval)",    date: "2026-12-11" },
      { label: "⚠️ Census Date",                                     date: "2026-12-14" },
      { label: "SSAF due",                                           date: "2026-12-15" },
      { label: "Last day to withdraw without academic penalty",       date: "2026-12-18" },
      { label: "Release of results",                                 date: "2027-02-22" },
      { label: "Supplementary & deferred exams start",               date: "2027-03-03" },
      { label: "Supplementary & deferred exams end",                 date: "2027-03-05" },
    ]
  },
  {
    name: "Trimester 1 2026",
    color: "#00875a",
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
    ],
    keyDates: [
      { label: "Last day to enrol / add subjects (self)",            date: "2026-02-20" },
      { label: "Last day to enrol / add subjects (HoS approval)",    date: "2026-02-27" },
      { label: "⚠️ Census Date",                                     date: "2026-03-02" },
      { label: "SSAF due",                                           date: "2026-03-03" },
      { label: "Last day to withdraw without academic penalty",       date: "2026-03-20" },
      { label: "Release of results",                                 date: "2026-05-13" },
      { label: "Supplementary & deferred exams start",               date: "2026-05-19" },
      { label: "Supplementary & deferred exams end",                 date: "2026-05-22" },
    ]
  },
  {
    name: "Trimester 2 2026",
    color: "#6554c0",
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
    ],
    keyDates: [
      { label: "Last day to enrol / add subjects (self)",            date: "2026-05-29" },
      { label: "Last day to enrol / add subjects (HoS approval)",    date: "2026-06-05" },
      { label: "⚠️ Census Date",                                     date: "2026-06-08" },
      { label: "SSAF due",                                           date: "2026-06-09" },
      { label: "Last day to withdraw without academic penalty",       date: "2026-06-26" },
      { label: "Release of results",                                 date: "2026-08-19" },
      { label: "Supplementary & deferred exams start",               date: "2026-08-25" },
      { label: "Supplementary & deferred exams end",                 date: "2026-08-28" },
    ]
  },
  {
    name: "Trimester 3 2026",
    color: "#ff5630",
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
    ],
    keyDates: [
      { label: "Last day to enrol / add subjects (self)",            date: "2026-09-04" },
      { label: "Last day to enrol / add subjects (HoS approval)",    date: "2026-09-11" },
      { label: "⚠️ Census Date",                                     date: "2026-09-14" },
      { label: "SSAF due",                                           date: "2026-09-15" },
      { label: "Last day to withdraw without academic penalty",       date: "2026-10-02" },
      { label: "Release of results",                                 date: "2026-12-03" },
      { label: "Supplementary & deferred exams start",               date: "2026-12-14" },
      { label: "Supplementary & deferred exams end",                 date: "2026-12-18" },
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
  return date >= toDateObj(start) && date <= toDateObj(end);
}

// Returns Monday of the week containing `date`
function startOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay(); // 0=Sun, 1=Mon...
  const diff = (day === 0) ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d;
}

// Returns Sunday of the week containing `date`
function endOfWeek(date) {
  const mon = startOfWeek(date);
  const sun = new Date(mon);
  sun.setDate(mon.getDate() + 6);
  return sun;
}

function formatDate(str) {
  const d = toDateObj(str);
  return d.toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short" });
}

// ─── Session Status Logic ─────────────────────────────────────────────────────

function getSessionStatus(session, today) {
  for (const week of session.weeks) {
    if (isBetween(today, week.start, week.end)) {
      return { type: "teaching", label: week.label };
    }
  }
  for (const period of session.periods) {
    if (isBetween(today, period.start, period.end)) {
      return { type: "period", label: period.label };
    }
  }
  const firstDay = toDateObj(session.weeks[0].start);
  const lastPeriod = session.periods[session.periods.length - 1];
  const lastDay = toDateObj(lastPeriod ? lastPeriod.end : session.weeks[session.weeks.length - 1].end);
  if (today < firstDay || today > lastDay) return null;
  return null;
}

// ─── Key Dates Logic ─────────────────────────────────────────────────────────

function getUpcomingKeyDates(today) {
  const thisWeekStart = startOfWeek(today);
  const thisWeekEnd   = endOfWeek(today);
  const nextWeekStart = new Date(thisWeekStart); nextWeekStart.setDate(thisWeekStart.getDate() + 7);
  const nextWeekEnd   = new Date(thisWeekEnd);   nextWeekEnd.setDate(thisWeekEnd.getDate() + 7);

  const results = []; // { label, date (str), session, color, when: 'today'|'this-week'|'next-week' }

  for (const session of SESSIONS) {
    for (const kd of session.keyDates) {
      const d = toDateObj(kd.date);

      let when = null;
      if (d.getTime() === today.getTime()) {
        when = "today";
      } else if (d >= thisWeekStart && d <= thisWeekEnd) {
        when = "this-week";
      } else if (d >= nextWeekStart && d <= nextWeekEnd) {
        when = "next-week";
      }

      if (when) {
        results.push({
          label:   kd.label,
          date:    kd.date,
          session: session.name,
          color:   session.color,
          when,
          dateObj: d
        });
      }
    }
  }

  // Sort by date, then session name
  results.sort((a, b) => a.dateObj - b.dateObj || a.session.localeCompare(b.session));
  return results;
}

// ─── Clock ────────────────────────────────────────────────────────────────────

function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-AU", {
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true
  });
  const parts = timeStr.match(/^(\d{1,2}:\d{2}:\d{2})\s*(am|pm)$/i);
  if (parts) {
    document.getElementById("clock").innerHTML =
      parts[1] + '<span class="clock-ampm">' + parts[2].toUpperCase() + '</span>';
  } else {
    document.getElementById("clock").textContent = timeStr;
  }
  document.getElementById("date").textContent = now.toLocaleDateString("en-AU", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  });
}

// ─── Render Active Sessions ───────────────────────────────────────────────────

function renderSessions() {
  const today = todayLocal();
  const container = document.getElementById("sessions");
  container.innerHTML = "";

  const active = SESSIONS.map(s => ({ session: s, status: getSessionStatus(s, today) }))
                         .filter(x => x.status !== null);

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

    const stripe = document.createElement("div");
    stripe.className = "card-stripe";

    const body = document.createElement("div");
    body.className = "card-body";

    const name = document.createElement("span");
    name.className = "session-name";
    name.textContent = session.name;

    const badge = document.createElement("span");
    badge.className = status.type === "teaching" ? "session-badge" : "session-badge period";
    badge.textContent = status.label;

    body.appendChild(name);
    body.appendChild(badge);
    card.appendChild(stripe);
    card.appendChild(body);
    container.appendChild(card);
  }
}

// ─── Render Key Dates ─────────────────────────────────────────────────────────

function renderKeyDates() {
  const today = todayLocal();
  const container = document.getElementById("key-dates");
  container.innerHTML = "";

  const dates = getUpcomingKeyDates(today);

  if (dates.length === 0) {
    const msg = document.createElement("div");
    msg.className = "no-sessions";
    msg.textContent = "No key dates this week or next.";
    container.appendChild(msg);
    return;
  }

  // Group by when
  const groups = { "today": [], "this-week": [], "next-week": [] };
  for (const d of dates) groups[d.when].push(d);

  const groupLabels = { "today": "Today", "this-week": "This Week", "next-week": "Next Week" };

  let delay = 0;
  for (const [key, items] of Object.entries(groups)) {
    if (items.length === 0) continue;

    const groupHeader = document.createElement("div");
    groupHeader.className = "kd-group-header";
    groupHeader.textContent = groupLabels[key];
    container.appendChild(groupHeader);

    for (const item of items) {
      const row = document.createElement("div");
      row.className = "kd-row";
      row.style.setProperty("--session-color", item.color);
      row.style.animationDelay = `${delay * 0.04}s`;

      const left = document.createElement("div");
      left.className = "kd-left";

      const dot = document.createElement("span");
      dot.className = "kd-dot";

      const info = document.createElement("div");
      info.className = "kd-info";

      const label = document.createElement("span");
      label.className = "kd-label";
      label.textContent = item.label;

      const session = document.createElement("span");
      session.className = "kd-session";
      session.textContent = item.session;

      info.appendChild(label);
      info.appendChild(session);
      left.appendChild(dot);
      left.appendChild(info);

      const dateEl = document.createElement("span");
      dateEl.className = "kd-date";
      dateEl.textContent = formatDate(item.date);

      row.appendChild(left);
      row.appendChild(dateEl);
      container.appendChild(row);
      delay++;
    }
  }
}

// ─── Init ─────────────────────────────────────────────────────────────────────

updateClock();
renderSessions();
renderKeyDates();
setInterval(updateClock, 1000);
