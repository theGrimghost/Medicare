import { useState, type ReactNode } from "react";

type Screen =
  | "home"
  | "doctors"
  | "booking"
  | "appointments"
  | "hospital"
  | "tips"
  | "staff"
  | "logout";

type IconName =
  | "arrow"
  | "calendar"
  | "check"
  | "clock"
  | "close"
  | "doctor"
  | "heart"
  | "home"
  | "location"
  | "logout"
  | "menu"
  | "phone"
  | "profile"
  | "search"
  | "tips";

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="m15 18-6-6 6-6" />,
    calendar: (
      <>
        <path d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1-1Z" />
        <path d="M8 13h3M8 16h6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    close: <path d="m6 6 12 12M18 6 6 18" />,
    doctor: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21a7 7 0 0 1 14 0M12 12v5M9.5 15h5" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    logout: (
      <>
        <path d="M10 4H4v16h6M14 8l4 4-4 4M8 12h10" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    phone: (
      <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-1-2 2c-4-1.5-7.5-5-9-9l2-2Z" />
    ),
    profile: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    tips: (
      <>
        <path d="M9 18h6M10 22h4" />
        <path d="M8.5 15.5A7 7 0 1 1 15.5 15.5c-1 .7-1.5 1.4-1.5 2.5h-4c0-1.1-.5-1.8-1.5-2.5Z" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

const doctors = [
  { name: "Dr. Sarah Mitchell", specialty: "General Practice", initials: "SM", available: "Today" },
  { name: "Dr. James Wilson", specialty: "Cardiology", initials: "JW", available: "Tomorrow" },
  { name: "Dr. Amina Patel", specialty: "Pediatrics", initials: "AP", available: "Today" },
  { name: "Dr. Daniel Lee", specialty: "Dental", initials: "DL", available: "Wed, 25 Sep" },
];

const dates = [
  ["Tue", "24"],
  ["Wed", "25"],
  ["Thu", "26"],
  ["Fri", "27"],
  ["Sat", "28"],
];
const times = ["9:00 AM", "9:30 AM", "10:30 AM", "11:00 AM", "2:00 PM", "3:30 PM"];

const navItems: { label: string; screen: Screen; icon: IconName }[] = [
  { label: "Home Dashboard", screen: "home", icon: "home" },
  { label: "Find a Doctor", screen: "doctors", icon: "doctor" },
  { label: "My Appointments", screen: "appointments", icon: "calendar" },
  { label: "Hospital Info & Location", screen: "hospital", icon: "location" },
  { label: "Health Tips", screen: "tips", icon: "tips" },
  { label: "Switch to Staff/Admin View", screen: "staff", icon: "profile" },
];

function Header({
  title,
  eyebrow,
  openMenu,
  back,
}: {
  title: string;
  eyebrow: string;
  openMenu?: () => void;
  back?: () => void;
}) {
  return (
    <header className="mb-7 flex items-start justify-between gap-3">
      <div className="flex min-w-0 items-start gap-3">
        {back && (
          <button
            aria-label="Go back"
            className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#d9e0e2] bg-white"
            onClick={back}
            type="button"
          >
            <Icon name="arrow" />
          </button>
        )}
        <div className="min-w-0">
          <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.11em] text-[#748086]">
            {eyebrow}
          </p>
          <h1 className="truncate text-[26px] font-semibold tracking-[-0.035em]">{title}</h1>
        </div>
      </div>
      {openMenu && (
        <button
          aria-label="Open navigation"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#d9e0e2] bg-white hover:bg-[#f3f6f6]"
          onClick={openMenu}
          type="button"
        >
          <Icon name="menu" />
        </button>
      )}
    </header>
  );
}

function BottomNav({ active, navigate }: { active: Screen; navigate: (screen: Screen) => void }) {
  const tabs: { label: string; screen: Screen; icon: IconName }[] = [
    { label: "Home", screen: "home", icon: "home" },
    { label: "Doctors", screen: "doctors", icon: "doctor" },
    { label: "Appointments", screen: "appointments", icon: "calendar" },
    { label: "Hospital", screen: "hospital", icon: "location" },
  ];
  return (
    <nav className="absolute inset-x-0 bottom-0 z-20 grid grid-cols-4 border-t border-[#dfe5e7] bg-white/95 px-2 pb-[max(10px,env(safe-area-inset-bottom))] pt-2 backdrop-blur">
      {tabs.map((tab) => {
        const selected =
          active === tab.screen || (active === "booking" && tab.screen === "doctors");
        return (
          <button
            aria-current={selected ? "page" : undefined}
            className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[9px] font-semibold ${
              selected ? "text-[#1e5965]" : "text-[#7b878c]"
            }`}
            key={tab.screen}
            onClick={() => navigate(tab.screen)}
            type="button"
          >
            <span className={`rounded-full px-3 py-1 ${selected ? "bg-[#e1edef]" : ""}`}>
              <Icon name={tab.icon} className="h-[18px] w-[18px]" />
            </span>
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}

function Drawer({
  open,
  active,
  close,
  navigate,
}: {
  open: boolean;
  active: Screen;
  close: () => void;
  navigate: (screen: Screen) => void;
}) {
  return (
    <div
      aria-hidden={!open}
      className={`absolute inset-0 z-50 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <button
        aria-label="Close navigation"
        className={`absolute inset-0 bg-[#172126]/35 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={close}
        tabIndex={open ? 0 : -1}
        type="button"
      />
      <aside
        aria-label="Main navigation"
        className={`absolute bottom-0 right-0 top-0 flex w-[84%] flex-col bg-white px-5 pb-6 pt-8 shadow-[-18px_0_50px_rgba(18,37,44,0.18)] transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-7 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#748086]">
              St. Anne
            </p>
            <h2 className="mt-1 text-lg font-semibold">Patient Portal</h2>
          </div>
          <button
            aria-label="Close navigation"
            className="grid h-9 w-9 place-items-center rounded-full bg-[#eff2f3]"
            onClick={close}
            type="button"
          >
            <Icon name="close" className="h-4 w-4" />
          </button>
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const selected = active === item.screen;
            return (
              <button
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-xs font-semibold transition ${
                  selected ? "bg-[#e3edef] text-[#1e5965]" : "text-[#4f5d62] hover:bg-[#f3f5f5]"
                }`}
                key={item.screen}
                onClick={() => navigate(item.screen)}
                type="button"
              >
                <Icon name={item.icon} className="h-[18px] w-[18px]" />
                {item.label}
              </button>
            );
          })}
        </nav>
        <button
          className="mt-auto flex w-full items-center gap-3 rounded-xl border border-[#e2d2cf] px-3 py-3 text-left text-xs font-semibold text-[#865a52]"
          onClick={() => navigate("logout")}
          type="button"
        >
          <Icon name="logout" className="h-[18px] w-[18px]" />
          Log Out
        </button>
      </aside>
    </div>
  );
}

function Home({ navigate, openMenu }: SharedProps) {
  return (
    <>
      <Header eyebrow="Good morning, Maria" title="Home Dashboard" openMenu={openMenu} />
      <section className="mb-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-[16px] font-semibold">Upcoming Appointment</h2>
          <button
            className="text-[11px] font-semibold text-[#326d7a]"
            onClick={() => navigate("appointments")}
            type="button"
          >
            View all
          </button>
        </div>
        <article className="rounded-2xl bg-[#dcebee] p-5">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#4e747c]">
                Tuesday
              </p>
              <p className="mt-1 text-lg font-semibold">24 September</p>
            </div>
            <span className="rounded-full bg-white/70 px-2 py-1 text-[9px] font-bold uppercase text-[#356e60]">
              Confirmed
            </span>
          </div>
          <div className="border-t border-[#bfd4d8] pt-4">
            <p className="text-sm font-semibold">Dr. James Wilson</p>
            <p className="mt-1 text-xs text-[#516a70]">Cardiology · 10:30 AM</p>
          </div>
        </article>
      </section>
      <button
        className="mb-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1e5965] py-4 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(30,89,101,0.18)]"
        onClick={() => navigate("doctors")}
        type="button"
      >
        <Icon name="calendar" className="h-5 w-5" />
        Book Appointment
      </button>
      <section>
        <h2 className="mb-3 text-[16px] font-semibold">Services &amp; Health Tips</h2>
        <div className="grid grid-cols-2 gap-3">
          <button
            className="rounded-2xl border border-[#dfe4e6] bg-white p-4 text-left"
            onClick={() => navigate("doctors")}
            type="button"
          >
            <Icon name="doctor" className="mb-7 text-[#326d7a]" />
            <p className="text-sm font-semibold">Find a specialist</p>
            <p className="mt-1 text-[10px] text-[#748086]">Browse available care</p>
          </button>
          <button
            className="rounded-2xl border border-[#dfe4e6] bg-white p-4 text-left"
            onClick={() => navigate("tips")}
            type="button"
          >
            <Icon name="heart" className="mb-7 text-[#4f7b70]" />
            <p className="text-sm font-semibold">Health tips</p>
            <p className="mt-1 text-[10px] text-[#748086]">Simple ways to feel well</p>
          </button>
        </div>
      </section>
    </>
  );
}

type SharedProps = { navigate: (screen: Screen) => void; openMenu: () => void };

function Doctors({
  navigate,
  openMenu,
  selectDoctor,
}: SharedProps & { selectDoctor: (doctor: (typeof doctors)[number]) => void }) {
  const [specialty, setSpecialty] = useState("All");
  const filtered =
    specialty === "All" ? doctors : doctors.filter((doctor) => doctor.specialty === specialty);
  return (
    <>
      <Header eyebrow="Appointments" title="Find a Doctor" openMenu={openMenu} />
      <div className="relative mb-4">
        <Icon className="absolute left-3.5 top-3 h-4 w-4 text-[#7c898e]" name="search" />
        <input
          aria-label="Search doctors"
          className="w-full rounded-xl border border-[#d9e0e2] bg-white py-2.5 pl-10 pr-3 text-xs outline-none"
          placeholder="Search doctor or specialty"
        />
      </div>
      <div className="-mx-5 mb-6 flex gap-2 overflow-x-auto px-5 pb-1">
        {["All", "General Practice", "Cardiology", "Pediatrics", "Dental"].map((item) => (
          <button
            className={`shrink-0 rounded-full border px-3 py-2 text-[10px] font-semibold ${
              specialty === item
                ? "border-[#1e5965] bg-[#1e5965] text-white"
                : "border-[#d9e0e2] bg-white text-[#657278]"
            }`}
            key={item}
            onClick={() => setSpecialty(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <h2 className="mb-3 text-[15px] font-semibold">Available doctors</h2>
      <div className="space-y-3">
        {filtered.map((doctor) => (
          <button
            className="flex w-full items-center gap-3 rounded-2xl border border-[#dfe4e6] bg-white p-4 text-left"
            key={doctor.name}
            onClick={() => {
              selectDoctor(doctor);
              navigate("booking");
            }}
            type="button"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#e5edef] text-[10px] font-bold text-[#4b6d75]">
              {doctor.initials}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold">{doctor.name}</span>
              <span className="mt-1 block text-[11px] text-[#4e747c]">{doctor.specialty}</span>
              <span className="mt-1 block text-[9px] font-bold uppercase text-[#4f7b70]">
                Available {doctor.available}
              </span>
            </span>
            <span className="text-lg text-[#889499]">›</span>
          </button>
        ))}
      </div>
    </>
  );
}

function Booking({
  doctor,
  navigate,
  addBooking,
}: {
  doctor: (typeof doctors)[number];
  navigate: (screen: Screen) => void;
  addBooking: (doctor: string, date: string, time: string) => void;
}) {
  const [date, setDate] = useState("24");
  const [time, setTime] = useState("10:30 AM");
  return (
    <>
      <Header eyebrow="Choose a time" title="Book Appointment" back={() => navigate("doctors")} />
      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-[#dfe4e6] bg-white p-4">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#e5edef] text-[10px] font-bold">
          {doctor.initials}
        </span>
        <div>
          <p className="text-sm font-semibold">{doctor.name}</p>
          <p className="mt-1 text-[11px] text-[#4e747c]">{doctor.specialty}</p>
        </div>
      </div>
      <h2 className="mb-3 text-sm font-semibold">Select a date</h2>
      <div className="-mx-5 mb-6 flex gap-2 overflow-x-auto px-5 pb-1">
        {dates.map(([day, number]) => (
          <button
            className={`flex h-16 min-w-14 flex-col items-center justify-center rounded-xl border ${
              date === number
                ? "border-[#1e5965] bg-[#1e5965] text-white"
                : "border-[#dfe4e6] bg-white"
            }`}
            key={number}
            onClick={() => setDate(number)}
            type="button"
          >
            <span className="text-[9px] font-bold uppercase">{day}</span>
            <span className="mt-1 text-base font-semibold">{number}</span>
          </button>
        ))}
      </div>
      <h2 className="mb-3 text-sm font-semibold">Available time</h2>
      <div className="mb-8 grid grid-cols-3 gap-2">
        {times.map((item) => (
          <button
            className={`rounded-full border py-2.5 text-[10px] font-semibold ${
              time === item
                ? "border-[#9ec0c7] bg-[#dcebee] text-[#245662]"
                : "border-[#dce2e4] text-[#59666c]"
            }`}
            key={item}
            onClick={() => setTime(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <button
        className="w-full rounded-xl bg-[#1e5965] py-4 text-sm font-semibold text-white"
        onClick={() => {
          addBooking(doctor.name, date, time);
          navigate("appointments");
        }}
        type="button"
      >
        Confirm Booking
      </button>
    </>
  );
}

type Appointment = { doctor: string; date: string; time: string; status: string };

function Appointments({
  navigate,
  openMenu,
  appointments,
  cancel,
}: SharedProps & { appointments: Appointment[]; cancel: (index: number) => void }) {
  const [tab, setTab] = useState<"Upcoming" | "History">("Upcoming");
  const visible =
    tab === "Upcoming"
      ? appointments
      : [{ doctor: "Dr. Sarah Mitchell", date: "12 Aug", time: "9:00 AM", status: "Completed" }];
  return (
    <>
      <Header eyebrow="Patient portal" title="My Appointments" openMenu={openMenu} />
      <div className="mb-5 grid grid-cols-2 rounded-xl bg-[#edf1f2] p-1">
        {(["Upcoming", "History"] as const).map((item) => (
          <button
            className={`rounded-lg py-2.5 text-xs font-semibold ${
              tab === item ? "bg-white text-[#1e5965] shadow-sm" : "text-[#748086]"
            }`}
            key={item}
            onClick={() => setTab(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {visible.map((appointment, index) => (
          <article
            className="rounded-2xl border border-[#dfe4e6] bg-white p-4"
            key={`${appointment.doctor}-${index}`}
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h2 className="text-sm font-semibold">{appointment.doctor}</h2>
                <p className="mt-1 text-[11px] text-[#4e747c]">Cardiology Department</p>
              </div>
              <span className="rounded-full bg-[#e1efea] px-2 py-1 text-[8px] font-bold uppercase text-[#356e60]">
                {appointment.status}
              </span>
            </div>
            <div className="border-y border-[#edf0f1] py-3 text-xs text-[#5d696e]">
              {appointment.date} September · {appointment.time}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {tab === "Upcoming" ? (
                <>
                  <button
                    className="rounded-xl border border-[#d2bcb8] py-2.5 text-[10px] font-semibold text-[#865a52]"
                    onClick={() => cancel(index)}
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="rounded-xl border border-[#779ba3] py-2.5 text-[10px] font-semibold text-[#285964]"
                    onClick={() => navigate("doctors")}
                    type="button"
                  >
                    Reschedule
                  </button>
                </>
              ) : (
                <button
                  className="col-span-2 rounded-xl bg-[#1e5965] py-2.5 text-[10px] font-semibold text-white"
                  onClick={() => navigate("doctors")}
                  type="button"
                >
                  Rebook
                </button>
              )}
            </div>
          </article>
        ))}
        {visible.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[#cad2d5] py-10 text-center">
            <p className="text-sm font-semibold">No upcoming appointments</p>
            <button
              className="mt-3 text-xs font-semibold text-[#326d7a]"
              onClick={() => navigate("doctors")}
              type="button"
            >
              Book an appointment
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function Toggle({ label }: { label: string }) {
  const [on, setOn] = useState(true);
  return (
    <button
      aria-label={`${label}: ${on ? "on" : "off"}`}
      className={`relative h-6 w-11 rounded-full ${on ? "bg-[#1e5965]" : "bg-[#cdd4d7]"}`}
      onClick={() => setOn(!on)}
      role="switch"
      type="button"
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${on ? "left-6" : "left-1"}`}
      />
    </button>
  );
}

function Hospital({ openMenu }: SharedProps) {
  return (
    <>
      <Header eyebrow="Profile & care center" title="Hospital Info" openMenu={openMenu} />
      <section className="mb-4 rounded-2xl border border-[#dfe4e6] bg-white p-4">
        <div className="mb-4 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-[#e3edef] text-[#326d7a]">
            <Icon name="profile" />
          </span>
          <div>
            <h2 className="text-sm font-semibold">Maria Thompson</h2>
            <p className="mt-1 text-[10px] text-[#788489]">Patient ID · HSP-48291</p>
          </div>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#879196]">
          Appointment reminders
        </p>
        <div className="mt-2 divide-y divide-[#edf0f1]">
          {["Push notifications", "SMS reminders", "Email reminders"].map((label) => (
            <div className="flex items-center justify-between py-3 text-xs" key={label}>
              {label}
              <Toggle label={label} />
            </div>
          ))}
        </div>
      </section>
      <section className="overflow-hidden rounded-2xl border border-[#dfe4e6] bg-white">
        <div className="p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#4e747c]">
            Your hospital
          </p>
          <h2 className="mt-1 text-base font-semibold">St. Anne Medical Center</h2>
          <p className="mt-2 text-xs leading-5 text-[#68747a]">
            1250 Health Avenue, Westbrook, CA 90210
          </p>
        </div>
        <div className="relative mx-4 h-28 overflow-hidden rounded-xl bg-[#e3e9eb]">
          <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(30deg,transparent_47%,#c6d0d3_48%,#c6d0d3_51%,transparent_52%),linear-gradient(120deg,transparent_47%,#d0d8da_48%,#d0d8da_51%,transparent_52%)] [background-size:55px_55px]" />
          <Icon
            name="location"
            className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 text-[#1e5965]"
          />
        </div>
        <div className="p-4">
          <a
            className="flex items-center justify-center gap-2 rounded-xl bg-[#8b3c36] py-3 text-xs font-semibold text-white"
            href="tel:911"
          >
            <Icon name="phone" className="h-4 w-4" />
            Emergency: Call 911
          </a>
          <p className="mt-4 text-xs font-semibold">Operating hours</p>
          <p className="mt-1 text-[11px] leading-5 text-[#737f84]">
            Mon–Fri: 7 AM–8 PM · Weekends: 8 AM–5 PM
            <br />
            Emergency department: Open 24/7
          </p>
        </div>
      </section>
    </>
  );
}

function Tips({ openMenu }: SharedProps) {
  const tips = [
    ["Heart health", "5 simple ways to care for your heart", "3 min read"],
    ["Everyday wellness", "Building a healthier sleep routine", "4 min read"],
    ["Nutrition", "A practical guide to balanced meals", "5 min read"],
  ];
  return (
    <>
      <Header eyebrow="Wellness library" title="Health Tips" openMenu={openMenu} />
      <article className="mb-5 rounded-2xl bg-[#dcebe7] p-5">
        <Icon name="heart" className="mb-8 h-7 w-7 text-[#376b60]" />
        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#4f756c]">Featured</p>
        <h2 className="mt-2 text-xl font-semibold tracking-[-0.025em]">
          Small habits, healthier days
        </h2>
        <p className="mt-2 text-xs leading-5 text-[#516e68]">
          Evidence-led guidance from the St. Anne care team.
        </p>
      </article>
      <div className="space-y-3">
        {tips.map(([category, title, duration], index) => (
          <button
            className="flex w-full gap-4 rounded-2xl border border-[#dfe4e6] bg-white p-4 text-left"
            key={title}
            type="button"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#edf1f1] text-[#567079]">
              <Icon name={index === 0 ? "heart" : "tips"} />
            </span>
            <span>
              <span className="text-[9px] font-bold uppercase tracking-[0.09em] text-[#788489]">
                {category}
              </span>
              <span className="mt-1 block text-sm font-semibold leading-5">{title}</span>
              <span className="mt-2 block text-[10px] text-[#7b878c]">{duration}</span>
            </span>
          </button>
        ))}
      </div>
    </>
  );
}

function Staff({ openMenu }: SharedProps) {
  const [role, setRole] = useState("Admin");
  const [tab, setTab] = useState("Queue");
  const [statuses, setStatuses] = useState(["Pending", "Pending", "Approved"]);
  const patients = ["Emma Thompson", "Michael Chen", "Olivia Martin"];
  return (
    <>
      <Header eyebrow="Hospital operations" title={`${role} Dashboard`} openMenu={openMenu} />
      <div className="mb-5 grid grid-cols-2 rounded-xl bg-[#e9edef] p-1">
        {["Admin", "Doctor"].map((item) => (
          <button
            className={`rounded-lg py-2.5 text-xs font-semibold ${role === item ? "bg-white text-[#1e5965] shadow-sm" : "text-[#748086]"}`}
            key={item}
            onClick={() => setRole(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mb-6 grid grid-cols-3 gap-2">
        {[
          ["Today's", "04"],
          ["Pending", statuses.filter((s) => s === "Pending").length],
          ["Cancelled", "01"],
        ].map(([label, value]) => (
          <div className="rounded-2xl border border-[#dfe4e6] bg-white p-3" key={label}>
            <p className="text-xl font-semibold">{value}</p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.06em] text-[#778388]">
              {label}
            </p>
          </div>
        ))}
      </div>
      <div className="mb-4 grid grid-cols-2 border-b border-[#dfe4e6]">
        {["Queue", "Manage Doctors"].map((item) => (
          <button
            className={`border-b-2 pb-3 text-[11px] font-semibold ${tab === item ? "border-[#1e5965] text-[#1e5965]" : "border-transparent text-[#829095]"}`}
            key={item}
            onClick={() => setTab(item)}
            type="button"
          >
            {item === "Queue" ? "Appointments Queue" : item}
          </button>
        ))}
      </div>
      {tab === "Queue" ? (
        <div className="space-y-3">
          {patients.map((patient, index) => (
            <article className="rounded-2xl border border-[#dfe4e6] bg-white p-4" key={patient}>
              <div className="mb-3 flex justify-between">
                <div>
                  <h2 className="text-sm font-semibold">{patient}</h2>
                  <p className="mt-1 text-[10px] text-[#748086]">
                    Cardiology review · {9 + index}:30 AM
                  </p>
                </div>
                <span className="h-fit rounded-full bg-[#f3ecd7] px-2 py-1 text-[8px] font-bold uppercase">
                  {statuses[index]}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["Approve", "Reschedule", "Cancel"].map((action) => (
                  <button
                    className={`rounded-lg py-2 text-[9px] font-semibold ${action === "Approve" ? "bg-[#1e5965] text-white" : "border border-[#ccd4d7] text-[#59666c]"}`}
                    key={action}
                    onClick={() =>
                      setStatuses((current) =>
                        current.map((status, i) =>
                          i === index
                            ? action === "Approve"
                              ? "Approved"
                              : action === "Cancel"
                                ? "Cancelled"
                                : "Rescheduled"
                            : status,
                        ),
                      )
                    }
                    type="button"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {doctors.slice(0, 3).map((doctor) => (
            <div
              className="flex items-center gap-3 rounded-2xl border border-[#dfe4e6] bg-white p-4"
              key={doctor.name}
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#e5edef] text-[10px] font-bold">
                {doctor.initials}
              </span>
              <div>
                <p className="text-sm font-semibold">{doctor.name}</p>
                <p className="mt-1 text-[10px] text-[#4e747c]">{doctor.specialty} · Available</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[1]);
  const [appointments, setAppointments] = useState<Appointment[]>([
    { doctor: "Dr. James Wilson", date: "24", time: "10:30 AM", status: "Confirmed" },
  ]);

  function navigate(next: Screen) {
    setDrawerOpen(false);
    setScreen(next);
  }

  const shared = { navigate, openMenu: () => setDrawerOpen(true) };

  return (
    <main className="min-h-screen bg-[#eef1f3] text-[#172126] sm:py-8">
      <div className="relative mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[#fbfcfc] shadow-[0_20px_70px_rgba(29,43,50,0.12)] sm:h-[880px] sm:min-h-0 sm:rounded-[32px] sm:border sm:border-[#dfe4e6]">
        {screen === "logout" ? (
          <div className="screen-enter flex h-full flex-col items-center justify-center px-8 text-center">
            <div className="mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-[#e1edef] text-[#1e5965]">
              <Icon name="check" className="h-8 w-8" />
            </div>
            <h1 className="text-2xl font-semibold tracking-[-0.03em]">You’re logged out</h1>
            <p className="mt-2 text-sm leading-6 text-[#748086]">
              Your patient information is safely protected.
            </p>
            <button
              className="mt-7 w-full rounded-xl bg-[#1e5965] py-4 text-sm font-semibold text-white"
              onClick={() => navigate("home")}
              type="button"
            >
              Return to demo
            </button>
          </div>
        ) : (
          <>
            <div className="screen-enter h-full overflow-y-auto px-5 pb-24 pt-8" key={screen}>
              {screen === "home" && <Home {...shared} />}
              {screen === "doctors" && <Doctors {...shared} selectDoctor={setSelectedDoctor} />}
              {screen === "booking" && (
                <Booking
                  addBooking={(doctor, date, time) =>
                    setAppointments((current) => [
                      ...current,
                      { doctor, date, time, status: "Confirmed" },
                    ])
                  }
                  doctor={selectedDoctor}
                  navigate={navigate}
                />
              )}
              {screen === "appointments" && (
                <Appointments
                  {...shared}
                  appointments={appointments}
                  cancel={(index) =>
                    setAppointments((current) =>
                      current.filter((_, itemIndex) => itemIndex !== index),
                    )
                  }
                />
              )}
              {screen === "hospital" && <Hospital {...shared} />}
              {screen === "tips" && <Tips {...shared} />}
              {screen === "staff" && <Staff {...shared} />}
            </div>
            {screen !== "staff" && <BottomNav active={screen} navigate={navigate} />}
            <Drawer
              active={screen}
              close={() => setDrawerOpen(false)}
              navigate={navigate}
              open={drawerOpen}
            />
          </>
        )}
      </div>
    </main>
  );
}
