// California DMV Class C practice question bank.
// Source: California Driver's Handbook (DL 600, Rev. 6/2025), appendix/8-11-25-DL-600-R6-2025-WWW.pdf
// IMPORTANT: the array below must remain STRICT JSON (double quotes, no trailing
// commas, no comments inside) so tools/validate.ps1 can parse and check it.
// CONVENTION: "answer" is ALWAYS 0 in this file (the correct choice is written
// first). The app shuffles choice order at display time, so test-takers never
// see a positional pattern. The optional "sign" field names an SVG road sign
// drawn by the app (see SIGN_ART in app.js).
const QUESTION_BANK =
[
  {
    "id": "LIC-01",
    "topic": "licensing",
    "drills": ["numbers"],
    "q": "If you move, you must notify DMV of your new address within:",
    "choices": ["10 days.","5 days.","30 days."],
    "answer": 0,
    "explain": "You must notify DMV of a new address within ten days of moving. You can submit the change online or by mail.",
    "ref": "Section 4: Change Your Address"
  },
  {
    "id": "LIC-02",
    "topic": "licensing",
    "q": "When applying for an original driver's license, how many attempts are you allowed to pass the knowledge test before you must reapply?",
    "choices": ["Three.","Two.","Unlimited attempts."],
    "answer": 0,
    "explain": "You are allowed three attempts to pass the knowledge test on one application before you must reapply.",
    "ref": "Section 3: Knowledge Test"
  },
  {
    "id": "LIC-03",
    "topic": "licensing",
    "q": "A minor who fails the knowledge test must wait how long before retaking it?",
    "choices": ["Seven days, not including the day of the failure.","Twenty-four hours.","Fourteen days, not including the day of the failure."],
    "answer": 0,
    "explain": "Minors must wait seven days to retake a failed knowledge test, not counting the day they failed. (For a failed behind-the-wheel test, the wait is 14 days.)",
    "ref": "Section 3: Knowledge Test"
  },
  {
    "id": "LIC-04",
    "topic": "licensing",
    "q": "A minor who fails the behind-the-wheel drive test must wait how long before retaking it?",
    "choices": ["Fourteen days, not including the day of the failure.","Seven days.","Thirty days."],
    "answer": 0,
    "explain": "Minors must wait 14 days to retake a failed behind-the-wheel drive test, not including the day of the failure.",
    "ref": "Section 3: Behind-the-Wheel Drive Test"
  },
  {
    "id": "LIC-05",
    "topic": "licensing",
    "drills": ["numbers"],
    "q": "During the first 12 months after getting a provisional license, a driver under 18 may NOT drive:",
    "choices": ["Between 11 p.m. and 5 a.m.","Between 10 p.m. and 6 a.m.","After 9 p.m. on school nights."],
    "answer": 0,
    "explain": "Provisional drivers cannot drive between 11 p.m. and 5 a.m. during the first 12 months, with limited exceptions that require carrying a signed note.",
    "ref": "Section 2: Minor's Restrictions and Exceptions"
  },
  {
    "id": "LIC-06",
    "topic": "licensing",
    "drills": ["numbers"],
    "q": "During the first 12 months of holding a provisional license, you may transport passengers under 20 years old only when:",
    "choices": ["A California-licensed driver 25 years old or older (or your parent or guardian) is with you.","You are driving directly to or from school.","The passengers are members of your family."],
    "answer": 0,
    "explain": "Provisional drivers cannot carry passengers under 20 unless accompanied by a parent, guardian, or other California-licensed driver at least 25 years old. Driving immediate family requires a signed note from a parent or guardian.",
    "ref": "Section 2: Minor's Restrictions and Exceptions"
  },
  {
    "id": "LIC-07",
    "topic": "licensing",
    "drills": ["numbers"],
    "q": "To apply for an instruction permit, a person under 18 must be at least:",
    "choices": ["15½ years old.","15 years old.","16 years old."],
    "answer": 0,
    "explain": "Applicants under 18 must be at least 15½ years old and complete a driver education program to get an instruction permit.",
    "ref": "Section 2: Applying For An Instruction Permit"
  },
  {
    "id": "LIC-08",
    "topic": "licensing",
    "drills": ["numbers"],
    "q": "Before scheduling the behind-the-wheel drive test, a driver under 18 must have held an instruction permit for at least:",
    "choices": ["Six months (or have turned 18).","Three months.","Twelve months."],
    "answer": 0,
    "explain": "Minors must hold an instruction permit from California or another state for at least six months (or turn 18) before scheduling the drive test.",
    "ref": "Section 2: Applying For A Driver's License"
  },
  {
    "id": "LIC-09",
    "topic": "licensing",
    "drills": ["numbers"],
    "q": "Before getting a license, a driver under 18 must practice driving for at least:",
    "choices": ["50 hours, including 10 hours at night.","30 hours, including 5 hours at night.","100 hours, all during daylight."],
    "answer": 0,
    "explain": "Minors must practice at least 50 hours with a California-licensed driver who is at least 25 years old, and 10 of those hours must be at night.",
    "ref": "Section 2: Applying For A Driver's License"
  },
  {
    "id": "LIC-10",
    "topic": "licensing",
    "drills": ["numbers"],
    "q": "An adult with an instruction permit must practice driving with a California-licensed driver who is at least:",
    "choices": ["18 years old.","21 years old.","25 years old."],
    "answer": 0,
    "explain": "Permit holders must practice with a California-licensed driver at least 18 years old (25 for minors) who sits close enough to take control of the vehicle if needed.",
    "ref": "Section 2: Applying For A Driver's License"
  },
  {
    "id": "LIC-11",
    "topic": "licensing",
    "q": "During the knowledge test, you are allowed to:",
    "choices": ["Use nothing. Testing aids such as the handbook or a cell phone are prohibited.","Refer to a paper copy of the California Driver's Handbook.","Use your cell phone to look up answers."],
    "answer": 0,
    "explain": "No testing aids are allowed during knowledge tests, including the California Driver's Handbook and cell phones.",
    "ref": "Section 3: Knowledge Test"
  },
  {
    "id": "LIC-12",
    "topic": "licensing",
    "q": "If you take your vision test wearing glasses or contact lenses, your driver's license will:",
    "choices": ["Have a corrective lenses restriction.","Be issued only for daytime driving.","Expire sooner than a regular license."],
    "answer": 0,
    "explain": "Taking the vision test with corrective or contact lenses places a corrective lenses restriction on your license.",
    "ref": "Section 3: Vision Test"
  },
  {
    "id": "LIC-13",
    "topic": "licensing",
    "q": "The vehicle you bring to a behind-the-wheel drive test must have at least:",
    "choices": ["Two rearview mirrors, one of them on the left side.","One rearview mirror inside the vehicle.","Three rearview mirrors, one on each side and one inside."],
    "answer": 0,
    "explain": "The test vehicle needs at least two rearview mirrors, and one must be on the left side of the vehicle.",
    "ref": "Section 3: Behind-the-Wheel Drive Test"
  },
  {
    "id": "LIC-14",
    "topic": "licensing",
    "q": "Which tire condition will keep a vehicle from being used for a drive test?",
    "choices": ["Using a donut (temporary spare) tire.","Tires with 1/2-inch of tread.","Recently replaced tires."],
    "answer": 0,
    "explain": "Drive test tires must have at least 1/32-inch of uniform tread depth, and a donut tire is not allowed during the test.",
    "ref": "Section 3: Behind-the-Wheel Drive Test"
  },
  {
    "id": "LIC-15",
    "topic": "licensing",
    "drills": ["numbers"],
    "q": "The horn on your drive test vehicle must be loud enough to be heard from at least:",
    "choices": ["200 feet.","100 feet.","500 feet."],
    "answer": 0,
    "explain": "The horn must be designed for the vehicle, work properly, and be audible from at least 200 feet.",
    "ref": "Section 3: Behind-the-Wheel Drive Test"
  },
  {
    "id": "LIC-16",
    "topic": "licensing",
    "q": "During the behind-the-wheel drive test, advanced driver assistance features such as automated parallel parking are:",
    "choices": ["Not permitted: the test evaluates your abilities, not the vehicle's technology.","Permitted if the vehicle came with them from the factory.","Required for vehicles that have them installed."],
    "answer": 0,
    "explain": "ADAS features like automated parallel parking, lane departure, and adaptive cruise control are not permitted. Backup cameras and blind spot monitors may be used but do not replace actual visual checks.",
    "ref": "Section 3: Other Things to Know for Your Behind-the-Wheel Test"
  },
  {
    "id": "LIC-17",
    "topic": "licensing",
    "q": "Who may accompany you during the behind-the-wheel drive test?",
    "choices": ["Only the DMV examiner, with limited exceptions.","One parent or guardian.","Your driving instructor and the examiner."],
    "answer": 0,
    "explain": "Only the examiner may accompany you during the drive test. Exceptions exist for training, service animals, and certain law enforcement situations.",
    "ref": "Section 3: Behind-the-Wheel Drive Test"
  },
  {
    "id": "LIC-18",
    "topic": "licensing",
    "q": "Using a video recording device during the behind-the-wheel drive test is:",
    "choices": ["Prohibited. If it cannot be turned off, it must be blocked from recording.","Allowed if the examiner is told first.","Encouraged so you can review your driving later."],
    "answer": 0,
    "explain": "Recording devices are prohibited during the drive test. If a device cannot be powered off, it must be blocked so there is no visual or audio recording.",
    "ref": "Section 3: Behind-the-Wheel Drive Test"
  },
  {
    "id": "LIC-19",
    "topic": "licensing",
    "q": "Driving with an expired driver's license is:",
    "choices": ["Against the law.","Allowed for up to 60 days after expiration.","Allowed as long as you have applied for renewal."],
    "answer": 0,
    "explain": "It is against the law to drive with an expired driver's license.",
    "ref": "Section 4: Replace or Renew Your Driver's License"
  },
  {
    "id": "LIC-20",
    "topic": "licensing",
    "q": "If you are out-of-state and cannot renew your license before it expires, you may request:",
    "choices": ["A one-year extension.","A five-year extension.","A waiver of all renewal requirements."],
    "answer": 0,
    "explain": "Drivers who are out-of-state may request a one-year extension by submitting a request to DMV before the license expires. Limited-term licenses are not eligible.",
    "ref": "Section 4: Extend Your Driver's License"
  },
  {
    "id": "LIC-21",
    "topic": "licensing",
    "q": "Beginning May 2025, you must have a REAL ID compliant driver's license or ID card if you use it to:",
    "choices": ["Board an airplane for a domestic flight.","Register to vote.","Cash a check at a bank."],
    "answer": 0,
    "explain": "A REAL ID is required to board domestic flights, enter military bases, and enter most federal facilities.",
    "ref": "Section 1: REAL ID Driver's License"
  },
  {
    "id": "LIC-22",
    "topic": "licensing",
    "q": "A California identification (ID) card:",
    "choices": ["Is for identification only and does not permit you to drive.","Permits you to drive if you are over 65.","Can be used as an instruction permit."],
    "answer": 0,
    "explain": "ID cards are issued for identification purposes only. They do not permit you to drive.",
    "ref": "Section 1: ID Cards"
  },
  {
    "id": "LIC-23",
    "topic": "licensing",
    "q": "A provisional driver with a medical need to drive during restricted hours must carry:",
    "choices": ["A note signed by their physician that includes the condition and expected recovery date.","A copy of their birth certificate.","Nothing. Medical needs are exempt automatically."],
    "answer": 0,
    "explain": "The exception for a medical need requires carrying a physician-signed note stating the medical condition and the date you are expected to recover.",
    "ref": "Section 2: Minor's Restrictions and Exceptions"
  },
  {
    "id": "LIC-24",
    "topic": "licensing",
    "q": "Most people who drive noncommercial passenger vehicles in California need which class of license?",
    "choices": ["Class C.","Class A.","Class B."],
    "answer": 0,
    "explain": "Most people need a noncommercial Class C driver's license. Commercial vehicles and motorcycles require different license classes.",
    "ref": "Section 1: The California Driver's License"
  },
  {
    "id": "INT-01",
    "topic": "intro-driving",
    "q": "While driving, wearing a headset or earplugs in both ears is:",
    "choices": ["Illegal.","Legal if the volume is low.","Legal on the freeway only."],
    "answer": 0,
    "explain": "It is illegal to wear a headset or earplugs in both ears while driving. You must be able to hear horns, sirens, and screeching tires that warn of hazards.",
    "ref": "Section 5: An Introduction to Driving"
  },
  {
    "id": "INT-02",
    "topic": "intro-driving",
    "drills": ["numbers"],
    "q": "For hand-to-hand (push/pull) steering, your hands should start at:",
    "choices": ["9 and 3 o'clock or 8 and 4 o'clock.","12 and 6 o'clock.","10 and 2 o'clock only."],
    "answer": 0,
    "explain": "Start hand-to-hand steering with your hands at 9 and 3 o'clock or 8 and 4 o'clock, and do not cross your hands over the middle of the wheel.",
    "ref": "Section 5: Hand-to-Hand Steering"
  },
  {
    "id": "INT-03",
    "topic": "intro-driving",
    "q": "Hand-over-hand steering is the appropriate method when:",
    "choices": ["Turning at low speeds, parking, or recovering from a skid.","Driving at highway speeds.","Backing up in a straight line."],
    "answer": 0,
    "explain": "Use hand-over-hand steering when you turn at low speeds, park, or need to recover from a skid.",
    "ref": "Section 5: Hand-Over-Hand Steering"
  },
  {
    "id": "INT-04",
    "topic": "intro-driving",
    "drills": ["numbers"],
    "q": "When backing up while turning to see behind you, place your hand at what position on the steering wheel?",
    "choices": ["12 o'clock.","6 o'clock.","9 o'clock."],
    "answer": 0,
    "explain": "When turning while backing up, steer with one hand placed at the 12 o'clock position so you can look behind you.",
    "ref": "Section 5: One-Hand Steering"
  },
  {
    "id": "INT-05",
    "topic": "intro-driving",
    "drills": ["numbers"],
    "q": "Before turning, you should signal at least:",
    "choices": ["100 feet before the turn.","50 feet before the turn.","25 feet before the turn."],
    "answer": 0,
    "explain": "Signal at least 100 feet before you turn.",
    "ref": "Section 5: Signaling"
  },
  {
    "id": "INT-06",
    "topic": "intro-driving",
    "q": "Before changing lanes on a freeway, you should signal for at least:",
    "choices": ["Five seconds.","Two seconds.","Ten seconds."],
    "answer": 0,
    "explain": "Signal at least five seconds before you change lanes on a freeway.",
    "ref": "Section 5: Signaling"
  },
  {
    "id": "INT-07",
    "topic": "intro-driving",
    "q": "You should use your turn signals:",
    "choices": ["Even when you do not see other vehicles around you.","Only when other vehicles are close by.","Only when required by a posted sign."],
    "answer": 0,
    "explain": "Always signal when turning, changing lanes, slowing, or stopping, even when you do not see other vehicles around you.",
    "ref": "Section 5: Signaling"
  },
  {
    "id": "INT-08",
    "topic": "intro-driving",
    "q": "If bright sunlight makes your signal lights hard to see, you should:",
    "choices": ["Use hand-and-arm signals.","Turn on your emergency flashers instead.","Skip signaling until the sun goes down."],
    "answer": 0,
    "explain": "If your signal lights are hard to see, or not functioning, use hand-and-arm signals.",
    "ref": "Section 5: Signaling"
  },
  {
    "id": "INT-09",
    "topic": "intro-driving",
    "q": "A driver's left arm bent upward at the elbow out the window means:",
    "choices": ["Right turn.","Left turn.","Slowing or stopping."],
    "answer": 0,
    "explain": "Hand-and-arm signals: straight out means left turn, bent upward means right turn, and bent downward means slow or stop.",
    "ref": "Section 5: Signaling"
  },
  {
    "id": "INT-10",
    "topic": "intro-driving",
    "q": "A driver's left arm held straight out the window means:",
    "choices": ["Left turn.","Right turn.","Slowing or stopping."],
    "answer": 0,
    "explain": "An arm held straight out signals a left turn. Bent upward signals a right turn; bent downward signals slowing or stopping.",
    "ref": "Section 5: Signaling"
  },
  {
    "id": "INT-11",
    "topic": "intro-driving",
    "q": "Use your horn to:",
    "choices": ["Alert oncoming traffic on a narrow mountain road where you cannot see at least 200 feet ahead.","Tell slower drivers to move out of your way.","Greet drivers you recognize."],
    "answer": 0,
    "explain": "Use the horn to avoid collisions and to alert oncoming traffic on narrow mountain roads where you cannot see at least 200 feet ahead.",
    "ref": "Section 5: Using Your Horn"
  },
  {
    "id": "INT-12",
    "topic": "intro-driving",
    "drills": ["numbers"],
    "q": "Dim your high-beam headlights to low beams within what distance of an oncoming vehicle?",
    "choices": ["500 feet.","300 feet.","1,000 feet."],
    "answer": 0,
    "explain": "Dim high beams within 500 feet of a vehicle coming toward you, and within 300 feet of a vehicle you are following.",
    "ref": "Section 5: Using Your Headlights"
  },
  {
    "id": "INT-13",
    "topic": "intro-driving",
    "drills": ["numbers"],
    "q": "Dim your high-beam headlights within what distance of a vehicle you are following?",
    "choices": ["300 feet.","500 feet.","100 feet."],
    "answer": 0,
    "explain": "Dim high beams within 300 feet of a vehicle you are following (500 feet for oncoming vehicles).",
    "ref": "Section 5: Using Your Headlights"
  },
  {
    "id": "INT-14",
    "topic": "intro-driving",
    "drills": ["numbers"],
    "q": "You must turn on your headlights:",
    "choices": ["Beginning 30 minutes after sunset until 30 minutes before sunrise.","Beginning at sunset until sunrise.","Only when other drivers turn theirs on."],
    "answer": 0,
    "explain": "Use headlights from 30 minutes after sunset until 30 minutes before sunrise, when it is too dark to see 1,000 feet away, and in adverse weather.",
    "ref": "Section 5: Using Your Headlights"
  },
  {
    "id": "INT-15",
    "topic": "intro-driving",
    "q": "If you must use your windshield wipers because of fog, rain, or snow, you must also:",
    "choices": ["Turn on your low-beam headlights.","Turn on your high-beam headlights.","Turn on your emergency flashers."],
    "answer": 0,
    "explain": "If weather requires your windshield wipers, the law requires your low-beam headlights to be on.",
    "ref": "Section 5: Using Your Headlights"
  },
  {
    "id": "INT-16",
    "topic": "intro-driving",
    "q": "Driving using only your parking lights is:",
    "choices": ["Illegal.","Legal at dusk.","Legal in well-lit city areas."],
    "answer": 0,
    "explain": "It is illegal to drive using only parking lights. Use headlights when lights are required.",
    "ref": "Section 5: Using Your Headlights"
  },
  {
    "id": "INT-17",
    "topic": "intro-driving",
    "q": "On mountain roads and in tunnels, you should drive with your headlights on:",
    "choices": ["Even on sunny days.","Only at night.","Only when posted signs require it."],
    "answer": 0,
    "explain": "Use your headlights on mountain roads and in tunnels even on sunny days, so other drivers can see you.",
    "ref": "Section 5: Using Your Headlights"
  },
  {
    "id": "INT-18",
    "topic": "intro-driving",
    "q": "If you see a collision or hazard ahead, you can warn the drivers behind you by:",
    "choices": ["Turning on your emergency flashers or lightly tapping your brake pedal three or four times.","Turning off your lights so they look ahead.","Swerving between lanes to get attention."],
    "answer": 0,
    "explain": "Warn drivers behind you by turning on emergency flashers, tapping the brake pedal three or four times, or using a hand signal when slowing or stopping.",
    "ref": "Section 5: Using Your Emergency Flashers"
  },
  {
    "id": "INT-19",
    "topic": "intro-driving",
    "q": "If vehicle trouble forces you to stop and you cannot get completely off the road, you should:",
    "choices": ["Stop where people can see you and your vehicle from behind, never just over a hill or around a curve.","Stop just past the top of a hill so you are out of the wind.","Stop in the traffic lane and walk for help."],
    "answer": 0,
    "explain": "Stop where you can be seen from behind. Do not stop just over a hill or around a curve where other drivers cannot see you in time. Call for roadside assistance and stay in your vehicle until help arrives.",
    "ref": "Section 5: Using Your Emergency Flashers"
  },
  {
    "id": "INT-20",
    "topic": "intro-driving",
    "q": "Fatigue and drowsiness while driving:",
    "choices": ["Can affect your vision and increase your reaction time to hazards.","Only matter on trips longer than four hours.","Can be safely offset by driving faster to finish sooner."],
    "answer": 0,
    "explain": "Fatigue and drowsiness affect your vision and increase your reaction time to hazards.",
    "ref": "Section 5: An Introduction to Driving"
  },
  {
    "id": "INT-21",
    "topic": "intro-driving",
    "q": "Which is true about prescription and over-the-counter medications?",
    "choices": ["They can make you an unsafe driver, and it is your responsibility to know their effects.","Only prescription medications can affect driving.","Medications from a pharmacy are always safe for driving."],
    "answer": 0,
    "explain": "Both prescription and over-the-counter medicines can make you an unsafe driver. Some cause sleepiness. Knowing their effects is your responsibility.",
    "ref": "Section 5: An Introduction to Driving"
  },
  {
    "id": "INT-22",
    "topic": "intro-driving",
    "q": "Physicians are required to report to DMV patients who are at least 14 years old and have:",
    "choices": ["Medical conditions that may affect safe driving, such as a lapse of consciousness.","Any prescription for medication.","Poor eyesight of any kind."],
    "answer": 0,
    "explain": "Physicians must report patients at least 14 years old with medical conditions that may affect their ability to drive safely, such as a lapse of consciousness.",
    "ref": "Section 5: An Introduction to Driving"
  },
  {
    "id": "INT-23",
    "topic": "intro-driving",
    "q": "A bicyclist may signal a turn by:",
    "choices": ["Holding their arm straight out, pointing in the direction they plan to turn.","Ringing a bell twice.","Standing up on the pedals."],
    "answer": 0,
    "explain": "Bicyclists may signal a turn with their arm held straight out, pointing in the direction of the turn.",
    "ref": "Section 5: Signaling"
  },
  {
    "id": "INT-24",
    "topic": "intro-driving",
    "q": "Before pulling next to the curb or away from the curb, you should:",
    "choices": ["Signal.","Sound your horn.","Turn on your emergency flashers."],
    "answer": 0,
    "explain": "Signal before pulling next to the curb or away from the curb.",
    "ref": "Section 5: Signaling"
  },
  {
    "id": "INT-25",
    "topic": "intro-driving",
    "q": "If you plan to turn shortly after crossing an intersection, you should signal:",
    "choices": ["When you are almost through the intersection.","Well before you enter the intersection.","Only after you have completed the turn."],
    "answer": 0,
    "explain": "Signal when you are almost through the intersection so drivers do not think you are turning at the intersection itself.",
    "ref": "Section 5: Signaling"
  },
  {
    "id": "INT-26",
    "topic": "intro-driving",
    "q": "Remember to turn off your turn signal:",
    "choices": ["When you no longer need it.","Only when another driver honks at you.","It always turns off by itself."],
    "answer": 0,
    "explain": "Turn off your signal when you no longer need it so you do not mislead other drivers.",
    "ref": "Section 5: Signaling"
  },
  {
    "id": "LAN-01",
    "topic": "lanes",
    "q": "A single solid yellow line down the center of a road means:",
    "choices": ["It marks the center of a road with two-way traffic.","Traffic on both sides travels in the same direction.","Passing is allowed from either direction."],
    "answer": 0,
    "explain": "A single solid yellow line marks the center of a two-way road. Do not pass when there is only one lane in your direction and a solid yellow line on your side.",
    "ref": "Section 6: Lane Markings"
  },
  {
    "id": "LAN-02",
    "topic": "lanes",
    "q": "You may cross a single set of double solid yellow lines to:",
    "choices": ["Turn left into a driveway, enter or exit a private road, or make a U-turn.","Pass a slow vehicle.","Get around any stopped traffic."],
    "answer": 0,
    "explain": "Do not pass over double solid yellow lines. You may cross them only to turn left into or out of a driveway or private road, make a U-turn, use a left-entrance HOV lane, or when signs direct you around a closure.",
    "ref": "Section 6: Double Solid Yellow Lines"
  },
  {
    "id": "LAN-03",
    "topic": "lanes",
    "q": "Two sets of double solid yellow lines spaced two or more feet apart are considered:",
    "choices": ["A barrier you may not drive on or over except at designated openings.","A carpool lane divider.","A suggestion to keep right when convenient."],
    "answer": 0,
    "explain": "Two sets of double solid yellow lines two or more feet apart are a barrier. Do not drive on or over it, or make a left turn or U-turn across it, except at designated openings.",
    "ref": "Section 6: Double Solid Yellow Lines"
  },
  {
    "id": "LAN-04",
    "topic": "lanes",
    "q": "A broken yellow line next to your driving lane means:",
    "choices": ["You may pass when it is safe.","Passing is never allowed.","The lane is for carpools only."],
    "answer": 0,
    "explain": "A broken yellow line indicates you may pass if the broken line is next to your driving lane, and only when it is safe.",
    "ref": "Section 6: Broken Yellow Line"
  },
  {
    "id": "LAN-05",
    "topic": "lanes",
    "q": "A single solid white line between lanes of traffic means:",
    "choices": ["The lanes are moving in the same direction.","The lanes are moving in opposite directions.","The road is closed ahead."],
    "answer": 0,
    "explain": "Single solid white lines mark traffic lanes going in the same direction, including on one-way streets.",
    "ref": "Section 6: Single Solid White Line"
  },
  {
    "id": "LAN-06",
    "topic": "lanes",
    "q": "You want to enter a carpool lane separated by double solid white lines. You should:",
    "choices": ["Wait until you see a single broken white line before changing lanes.","Cross the double white lines carefully.","Enter anywhere as long as you signal."],
    "answer": 0,
    "explain": "Never change lanes over double solid white lines. Wait for a single broken white line or a designated entrance.",
    "ref": "Section 6: Double Solid White Lines"
  },
  {
    "id": "LAN-07",
    "topic": "lanes",
    "q": "If you are driving in a freeway lane marked with large broken lines, you should be prepared to:",
    "choices": ["Exit the freeway or have the lane end.","Merge into the carpool lane.","Stop for a toll booth."],
    "answer": 0,
    "explain": "Ending freeway and street lanes are usually marked with large broken lines. Be ready for the lane to end or become an exit, and look for a sign telling you to exit or merge.",
    "ref": "Section 6: End of Lane Markings"
  },
  {
    "id": "LAN-08",
    "topic": "lanes",
    "q": "A line of solid white triangles painted across your lane (pointing toward you) means:",
    "choices": ["This is where you must yield or stop for approaching traffic.","A school zone begins here.","The pavement is grooved ahead."],
    "answer": 0,
    "explain": "A yield line is a line of solid white triangles showing approaching vehicles where to yield or stop. The triangles point toward approaching vehicles.",
    "ref": "Section 6: Yield Line"
  },
  {
    "id": "LAN-09",
    "topic": "lanes",
    "q": "The Number 1 Lane refers to:",
    "choices": ["The left (fast) lane.","The far right lane.","The shoulder."],
    "answer": 0,
    "explain": "Lanes are numbered from the left: the left (fast) lane is the Number 1 Lane, the next to its right is the Number 2 Lane, and so on.",
    "ref": "Section 6: Choosing a Lane"
  },
  {
    "id": "LAN-10",
    "topic": "lanes",
    "q": "You should use the left lane of a multilane road to:",
    "choices": ["Pass or turn left.","Enter the road from a curb.","Drive slower than surrounding traffic."],
    "answer": 0,
    "explain": "Use the left lane to pass or turn left. Use the right lane to enter or exit traffic or when entering the road from a curb or shoulder.",
    "ref": "Section 6: Choosing a Lane"
  },
  {
    "id": "LAN-11",
    "topic": "lanes",
    "q": "Before changing lanes, it is necessary to:",
    "choices": ["Check your mirrors and look over your shoulder to check your blind spot.","Slow down below the speed of traffic.","Honk to alert nearby drivers."],
    "answer": 0,
    "explain": "Before changing lanes: signal, check your mirrors, check traffic beside and behind you, and look over your shoulder to make sure the lane is clear. It is not necessary to slow down.",
    "ref": "Section 6: Changing Lanes"
  },
  {
    "id": "LAN-12",
    "topic": "lanes",
    "q": "If you miss your turn, you should:",
    "choices": ["Keep driving until you can safely and legally turn around.","Stop and back up to the turn.","Make an immediate U-turn wherever you are."],
    "answer": 0,
    "explain": "If you miss a turn, keep driving until you can safely and legally turn around. Last-minute direction changes increase the risk of collisions.",
    "ref": "Section 6: Changing Lanes"
  },
  {
    "id": "LAN-13",
    "topic": "lanes",
    "q": "Who may use a carpool/HOV lane?",
    "choices": ["Vehicles carrying the posted minimum number of people, motorcycles, or qualifying low-emission vehicles with a DMV decal.","Any vehicle passing slower traffic.","Only buses and taxis."],
    "answer": 0,
    "explain": "HOV lanes are for vehicles with the posted minimum number of occupants, motorcyclists (unless otherwise posted), and low- or zero-emission vehicles displaying a special DMV-issued decal.",
    "ref": "Section 6: Carpool/HOV Lanes"
  },
  {
    "id": "LAN-14",
    "topic": "lanes",
    "q": "The road surface of a carpool/HOV lane is marked with:",
    "choices": ["A diamond symbol and the words \"Carpool Lane.\"","A bicycle symbol.","Red curb paint."],
    "answer": 0,
    "explain": "HOV lanes are marked with a diamond symbol and the words Carpool Lane on the road surface.",
    "ref": "Section 6: Carpool/HOV Lanes"
  },
  {
    "id": "LAN-15",
    "topic": "lanes",
    "q": "A center left turn lane is marked on each side by:",
    "choices": ["Two painted lines: the inner line broken, the outer line solid.","A single solid white line.","Double solid white lines."],
    "answer": 0,
    "explain": "A center left turn lane is in the middle of a two-way street, marked on both sides by two painted lines: inner broken, outer solid.",
    "ref": "Section 6: Center Left Turn Lanes"
  },
  {
    "id": "LAN-16",
    "topic": "lanes",
    "drills": ["numbers"],
    "q": "You may drive in a center left turn lane for no more than:",
    "choices": ["200 feet.","500 feet.","100 feet."],
    "answer": 0,
    "explain": "You may only drive for 200 feet in the center left turn lane while preparing for a left turn or U-turn. It is not a regular traffic or passing lane.",
    "ref": "Section 6: Center Left Turn Lanes"
  },
  {
    "id": "LAN-17",
    "topic": "lanes",
    "q": "When turning left from a center left turn lane, you should:",
    "choices": ["Merge completely into the lane so you do not block traffic.","Keep half of your vehicle in the regular traffic lane.","Stop in the through lane and wait for a gap."],
    "answer": 0,
    "explain": "Merge completely into the center left turn lane so you do not block traffic, watch for oncoming vehicles using the same lane, signal, check your blind spot, and turn when safe.",
    "ref": "Section 6: Center Left Turn Lanes"
  },
  {
    "id": "LAN-18",
    "topic": "lanes",
    "q": "You are driving slowly on a two-lane road where passing is unsafe and five or more vehicles are following you. You must:",
    "choices": ["Use a turnout area or lane to let them pass.","Speed up to the posted limit no matter the conditions.","Wave the vehicles around your left side."],
    "answer": 0,
    "explain": "You must use a turnout area or lane to let vehicles pass when driving slowly on a two-lane road where passing is unsafe and five or more vehicles are following.",
    "ref": "Section 6: Turnout Areas or Lanes"
  },
  {
    "id": "LAN-19",
    "topic": "lanes",
    "drills": ["numbers"],
    "q": "It is legal to drive in a bicycle lane when:",
    "choices": ["Turning, within 200 feet of an intersection.","Traffic in the regular lanes is heavy.","You are driving slower than 25 mph."],
    "answer": 0,
    "explain": "Driving in a bike lane is illegal except when parking where permitted, entering or leaving the road, or turning within 200 feet of an intersection.",
    "ref": "Section 6: Bicycle Lanes"
  },
  {
    "id": "LAN-20",
    "topic": "lanes",
    "q": "A bike lane painted with chevrons or diagonal markings to add separation from traffic is called a:",
    "choices": ["Buffered bike lane.","Bicycle boulevard.","Bike route."],
    "answer": 0,
    "explain": "A buffered bike lane uses chevrons or diagonal markings to provide greater separation from traffic and on-street parking.",
    "ref": "Section 6: Bicycle Lanes"
  },
  {
    "id": "LAN-21",
    "topic": "lanes",
    "q": "A bikeway physically separated from motor vehicle traffic for the exclusive use of bicyclists is called a:",
    "choices": ["Separated bikeway (cycle track or protected bike lane).","Shared roadway.","Buffered bike lane."],
    "answer": 0,
    "explain": "A separated bikeway, also called a cycle track or protected bike lane, is physically separated from motor vehicle traffic by posts, barriers, grade separation, or parking.",
    "ref": "Section 6: Bicycle Lanes"
  },
  {
    "id": "LAN-22",
    "topic": "lanes",
    "q": "Shared roadway bicycle markings (sharrows) painted in a traffic lane alert drivers that:",
    "choices": ["Bicyclists can occupy the travel lane.","Bicycles are prohibited from the street.","A separated bike path runs nearby."],
    "answer": 0,
    "explain": "Shared roadway bicycle markings alert drivers that bicyclists can occupy the lane and help bicyclists maintain a safe lane position.",
    "ref": "Section 6: Bicycle Lanes"
  },
  {
    "id": "LAN-23",
    "topic": "lanes",
    "q": "Lanes posted for public transit buses only:",
    "choices": ["May be crossed to make a right turn, but you may not drive or park in them.","May be used by any vehicle during rush hour.","May be used for passing when clear."],
    "answer": 0,
    "explain": "It is illegal to drive, stop, park, or leave a vehicle in a bus-only lane, but you may cross one to make a right turn.",
    "ref": "Section 6: Right Turn at a Public Transit Bus Lane"
  },
  {
    "id": "LAN-24",
    "topic": "lanes",
    "q": "On a multilane road, the passing lane is:",
    "choices": ["The far left lane, closest to the center divider.","The far right lane, closest to the shoulder.","Any lane that is currently empty."],
    "answer": 0,
    "explain": "The passing lane is the far left lane, closest to the center divider.",
    "ref": "Section 6: Passing Lanes"
  },
  {
    "id": "LAN-25",
    "topic": "lanes",
    "q": "To enter or exit a carpool/HOV lane you should:",
    "choices": ["Use the designated entrances and exits.","Cross the double solid lines whenever there is a gap.","Drive on the shoulder until an opening appears."],
    "answer": 0,
    "explain": "Do not cross over double solid lines to enter or exit an HOV lane. Use the designated entrances and exits.",
    "ref": "Section 6: Carpool/HOV Lanes"
  },
  {
    "id": "LAN-26",
    "topic": "lanes",
    "q": "While driving, you should stay in one lane as much as possible because:",
    "choices": ["Weaving in and out of traffic increases the risk of collisions.","Lane changes are illegal on city streets.","It saves wear on your tires."],
    "answer": 0,
    "explain": "Stay in one lane as much as possible. Weaving in and out of traffic and last-minute changes increase collision risk.",
    "ref": "Section 6: Changing Lanes"
  },
  {
    "id": "LAN-27",
    "topic": "lanes",
    "q": "Before you change lanes, is it necessary to slow down?",
    "choices": ["No, but be sure there is enough space for your vehicle in the next lane.","Yes. Always slow at least 5 mph.","Yes, unless you are on a freeway."],
    "answer": 0,
    "explain": "It is not necessary to slow down before a lane change; make sure there is enough space for your vehicle and check your blind spots.",
    "ref": "Section 6: Changing Lanes"
  },
  {
    "id": "LAN-28",
    "topic": "lanes",
    "q": "Bicycle lanes are typically marked by:",
    "choices": ["A single solid white line, sometimes painted bright green.","A double yellow line.","Raised concrete curbs on both sides."],
    "answer": 0,
    "explain": "Bike lanes run alongside traffic and are typically marked by a single solid white line and signs; they are sometimes painted bright green for visibility.",
    "ref": "Section 6: Bicycle Lanes"
  },
  {
    "id": "TRN-01",
    "topic": "turns",
    "q": "To make a right turn, you should:",
    "choices": ["Drive close to the right edge of the road and complete the turn in the right lane.","Swing wide to the left before turning right.","Turn from any lane as long as you signal."],
    "answer": 0,
    "explain": "Drive close to the right edge of the road, watch for pedestrians and bicyclists, and complete your turn in the right lane without swinging wide into another lane.",
    "ref": "Section 6: Right Turns"
  },
  {
    "id": "TRN-02",
    "topic": "turns",
    "drills": ["numbers"],
    "q": "When preparing to turn right where there is a bike lane, you may drive in the bike lane:",
    "choices": ["Within 200 feet of the turn, after checking for bicyclists.","Within 500 feet of the turn.","Never. You must turn from the traffic lane across the bike lane."],
    "answer": 0,
    "explain": "You can drive in a bike lane within 200 feet of a turn. Check for bicyclists in your blind spots before merging.",
    "ref": "Section 6: Right Turns"
  },
  {
    "id": "TRN-03",
    "topic": "turns",
    "q": "A limit line is:",
    "choices": ["A wide white line showing drivers where to stop before an intersection or crosswalk.","A yellow line marking the center of the road.","The line separating a carpool lane from regular lanes."],
    "answer": 0,
    "explain": "A limit line is the wide white line that shows where to stop before an intersection or crosswalk.",
    "ref": "Section 6: Right Turns"
  },
  {
    "id": "TRN-04",
    "topic": "turns",
    "q": "You are stopping at an intersection that has no limit line and no crosswalk. Stop:",
    "choices": ["Before you enter the intersection.","With your front bumper even with the corner curb.","Anywhere within the intersection."],
    "answer": 0,
    "explain": "Stop behind the limit line if there is one; if not, stop before entering the crosswalk; if there is no crosswalk, stop before entering the intersection.",
    "ref": "Section 6: Right Turns"
  },
  {
    "id": "TRN-05",
    "topic": "turns",
    "q": "You may turn right at a red traffic light:",
    "choices": ["After a complete stop, unless a NO TURN ON RED sign is posted.","Without stopping if the way is clear.","Only where a sign says right turns are allowed."],
    "answer": 0,
    "explain": "You may turn right at a red light after a complete stop at the stop or limit line, yielding to pedestrians, unless a NO TURN ON RED sign is posted.",
    "ref": "Section 7: Solid Red Light"
  },
  {
    "id": "TRN-06",
    "topic": "turns",
    "q": "You are stopped at a red arrow and want to turn right. You may:",
    "choices": ["Not turn. Wait until the light changes to green.","Turn after a complete stop.","Turn if no traffic is coming."],
    "answer": 0,
    "explain": "You may not turn right at a red arrow. Remain stopped until a green traffic light or green arrow appears.",
    "ref": "Section 6: Right Turn Against a Red Arrow"
  },
  {
    "id": "TRN-07",
    "topic": "turns",
    "q": "A dedicated right turn lane (one that does not merge into another lane) allows you to:",
    "choices": ["Turn without stopping even if through traffic has a red light, unless a light or sign on the right curb says otherwise.","Ignore pedestrians in the crosswalk.","Pass slower traffic on the shoulder."],
    "answer": 0,
    "explain": "In a dedicated right turn lane you may turn without stopping even when through traffic has a red light, but you must obey any light or sign on the right curb and always yield to pedestrians.",
    "ref": "Section 6: Right Turn onto a Road with a Dedicated Lane"
  },
  {
    "id": "TRN-08",
    "topic": "turns",
    "q": "While waiting to turn left at an intersection, you should keep your front wheels:",
    "choices": ["Pointed straight ahead until it is safe to start the turn.","Turned toward the left so you can turn quickly.","Turned slightly right for balance."],
    "answer": 0,
    "explain": "Keep your wheels straight while waiting. If your wheels point left and you are hit from behind, you could be pushed into oncoming traffic.",
    "ref": "Section 6: Left Turns"
  },
  {
    "id": "TRN-09",
    "topic": "turns",
    "q": "You may turn left against a red light only when:",
    "choices": ["Turning from a one-way street onto a one-way street.","Turning from a two-way street onto a one-way street.","No traffic is visible in any direction."],
    "answer": 0,
    "explain": "A left turn against a red light is allowed only from a one-way street onto a one-way street, unless a sign prohibits it. Yield to traffic and pedestrians with a green light.",
    "ref": "Section 6: Left Turn Against a Red Light"
  },
  {
    "id": "TRN-10",
    "topic": "turns",
    "q": "You are turning left from a two-way street onto a one-way street with three lanes going your direction. You may end your turn in:",
    "choices": ["Any lane that is open.","Only the far left lane.","Only the center lane."],
    "answer": 0,
    "explain": "When turning onto a one-way street with three or more lanes in your direction, you may end the turn in any open lane.",
    "ref": "Section 6: Examples of Turns"
  },
  {
    "id": "TRN-11",
    "topic": "turns",
    "q": "When turning left from a two-way street onto another two-way street, you should start and end the turn:",
    "choices": ["Start in the lane closest to the middle and end in the left lane closest to the middle going your direction.","Start in any lane and end in the right lane.","Start at the right edge of the road."],
    "answer": 0,
    "explain": "Start the left turn in the lane closest to the middle of the street and end it in the left lane closest to the middle going your direction to reduce collision risk.",
    "ref": "Section 6: Examples of Turns"
  },
  {
    "id": "TRN-12",
    "topic": "turns",
    "q": "Where should you begin a left turn from a one-way street onto a one-way street?",
    "choices": ["The far-left lane.","The lane closest to the right curb.","Any lane."],
    "answer": 0,
    "explain": "Start the turn from the far-left lane. Note that bicyclists can legally use the left turn lane for their left turns.",
    "ref": "Section 6: Examples of Turns"
  },
  {
    "id": "TRN-13",
    "topic": "turns",
    "q": "When turning right from a one-way street onto a one-way street, start the turn in:",
    "choices": ["The far-right lane; if safe, you may end the turn in any lane.","The center lane only.","The far-left lane."],
    "answer": 0,
    "explain": "Start a right turn from a one-way street onto a one-way street in the far-right lane; if safe, you may end in any lane.",
    "ref": "Section 6: Examples of Turns"
  },
  {
    "id": "TRN-14",
    "topic": "turns",
    "q": "At a \"T\" intersection where you are on the ending (one-way) street, the traffic going straight through on the cross street:",
    "choices": ["Has the right-of-way.","Must stop for you.","Must slow to 15 mph."],
    "answer": 0,
    "explain": "At a T intersection, traffic going straight through has the right-of-way. You may turn right or left from the center lane.",
    "ref": "Section 6: Examples of Turns"
  },
  {
    "id": "TRN-15",
    "topic": "turns",
    "q": "You may legally make a U-turn:",
    "choices": ["At an intersection on a green light, unless a NO U-TURN sign is posted.","On a one-way street when clear.","At a railroad crossing when no train is visible."],
    "answer": 0,
    "explain": "U-turns are legal at intersections on a green light or green arrow (absent a NO U-TURN sign), across a double yellow line, in residential districts with no vehicle within 200 feet, and through divided-highway openings.",
    "ref": "Section 6: U-Turn"
  },
  {
    "id": "TRN-16",
    "topic": "turns",
    "drills": ["numbers"],
    "q": "You may make a U-turn in a residential district when:",
    "choices": ["No vehicles are approaching within 200 feet.","No vehicles are approaching within 50 feet.","You are within one block of your home."],
    "answer": 0,
    "explain": "In a residential district, you may U-turn when no vehicles are approaching you within 200 feet, or at an intersection when a traffic light protects you.",
    "ref": "Section 6: U-Turn"
  },
  {
    "id": "TRN-17",
    "topic": "turns",
    "q": "Which of these is a place where you must NEVER make a U-turn?",
    "choices": ["At or on a railroad crossing.","At an intersection with a green arrow.","Through an opening in a divided highway's center divider."],
    "answer": 0,
    "explain": "Never make a U-turn at or on a railroad crossing. Green-light intersections and provided divider openings are legal U-turn locations.",
    "ref": "Section 6: U-Turn"
  },
  {
    "id": "TRN-18",
    "topic": "turns",
    "drills": ["numbers"],
    "q": "Making a U-turn when you cannot see clearly in each direction is prohibited unless you can see at least:",
    "choices": ["200 feet each way.","100 feet each way.","500 feet each way."],
    "answer": 0,
    "explain": "Never make a U-turn when you cannot see clearly for 200 feet in each direction.",
    "ref": "Section 6: U-Turn"
  },
  {
    "id": "TRN-19",
    "topic": "turns",
    "q": "U-turns in front of a fire station are:",
    "choices": ["Never allowed, and never use the fire station driveway to turn around.","Allowed when the station doors are closed.","Allowed at night only."],
    "answer": 0,
    "explain": "Never make a U-turn in front of a fire station, and never use a fire station driveway to turn around.",
    "ref": "Section 6: U-Turn"
  },
  {
    "id": "TRN-20",
    "topic": "turns",
    "q": "In a business district, you may make a U-turn only:",
    "choices": ["At an intersection, or on a divided highway where an opening is provided.","Mid-block when traffic is light.","Wherever parking is allowed."],
    "answer": 0,
    "explain": "Business districts have the most restrictive U-turn rule: only at intersections or through provided openings on divided highways.",
    "ref": "Section 6: U-Turn"
  },
  {
    "id": "TRN-21",
    "topic": "turns",
    "q": "You are turning left and an oncoming vehicle is approaching with its right turn signal on. You should:",
    "choices": ["Wait until the vehicle actually starts its turn before you begin your left turn.","Turn immediately since the driver plans to turn.","Honk to tell the driver to hurry."],
    "answer": 0,
    "explain": "Do not assume a signaling vehicle will turn before reaching you: the signal may be on by mistake, or the driver may turn beyond you. Wait for the vehicle to start its turn.",
    "ref": "Section 6: Crossing or Entering Traffic"
  },
  {
    "id": "TRN-22",
    "topic": "turns",
    "q": "Once you have started moving through an intersection, you should:",
    "choices": ["Keep going; if you started a turn, follow through.","Stop and back up if you change your mind.","Stop in the middle to re-check traffic."],
    "answer": 0,
    "explain": "Once you start through an intersection, keep going. If you started a turn, follow through. Last-minute changes increase collision risk.",
    "ref": "Section 6: Changing Lanes"
  },
  {
    "id": "TRN-23",
    "topic": "turns",
    "q": "When stopping behind another vehicle, leave enough space to:",
    "choices": ["See its rear wheels.","Read its license plate.","Fit two more cars between you."],
    "answer": 0,
    "explain": "When stopping behind a vehicle, leave enough space to see its rear wheels; at a limit line, do not cross over the line.",
    "ref": "Section 6: Braking"
  },
  {
    "id": "TRN-24",
    "topic": "turns",
    "q": "Before making a right turn at an intersection, look both ways in this order:",
    "choices": ["Left-right-left, then turn when safe.","Right-left-right, then turn immediately.","Straight ahead only."],
    "answer": 0,
    "explain": "After stopping behind the limit line, look left-right-left and turn when it is safe.",
    "ref": "Section 6: Right Turns"
  },
  {
    "id": "TRN-25",
    "topic": "turns",
    "q": "To make a U-turn, you should use:",
    "choices": ["The left turn lane or the far-left lane, after signaling.","The right lane.","The shoulder of the road."],
    "answer": 0,
    "explain": "To make a U-turn, signal and use the left turn lane or the far-left lane.",
    "ref": "Section 6: U-Turn"
  },
  {
    "id": "TRN-26",
    "topic": "turns",
    "q": "When entering a designated left turn lane, you should enter:",
    "choices": ["At the opening, without crossing any solid line.","By crossing the solid white line wherever convenient.","From the opposite side of the road."],
    "answer": 0,
    "explain": "Enter a designated left turn lane at the opening. Do not cross any solid line to get in.",
    "ref": "Section 6: Left Turns"
  },
  {
    "id": "TRN-27",
    "topic": "turns",
    "q": "While making a left turn, you accidentally turn the steering wheel too soon. The danger is:",
    "choices": ["Entering the lane of oncoming vehicles.","Wearing out your tires.","Confusing the vehicle behind you."],
    "answer": 0,
    "explain": "Turning the wheel too soon can carry you into the lane of oncoming vehicles. Proceed into the intersection first, then complete the turn into the left lane.",
    "ref": "Section 6: Left Turns"
  },
  {
    "id": "TRN-28",
    "topic": "turns",
    "q": "When making any turn where pedestrians are present, you must:",
    "choices": ["Always yield to pedestrians in the crosswalk.","Yield only if they entered the crosswalk first.","Proceed if you make eye contact with them."],
    "answer": 0,
    "explain": "Always yield to pedestrians in a crosswalk when turning.",
    "ref": "Section 6: Right Turn onto a Road with a Dedicated Lane"
  },
  {
    "id": "TRN-29",
    "topic": "turns",
    "q": "Before turning left into a two-way center left turn lane, you should respect the right-of-way of:",
    "choices": ["Any vehicle, bicyclist, or motorcyclist already in the lane.","Only vehicles longer than yours.","No one: the first to signal owns the lane."],
    "answer": 0,
    "explain": "Enter a two-way center left turn lane within 200 feet of your turn and respect the right-of-way of anyone already in the lane. Always yield to pedestrians.",
    "ref": "Section 6: Left Turns"
  },
  {
    "id": "TRN-30",
    "topic": "turns",
    "q": "When completing a right turn, do NOT:",
    "choices": ["Turn wide into another lane of traffic.","Check for bicyclists between your vehicle and the curb.","Reduce your speed before the turn."],
    "answer": 0,
    "explain": "Begin and end a right turn in the lane closest to the right edge. Do not swing wide into another lane of traffic.",
    "ref": "Section 6: Examples of Turns"
  },
  {
    "id": "PRK-01",
    "topic": "parking",
    "q": "When parallel parking, look for a space that is at least:",
    "choices": ["Three feet longer than your vehicle.","Exactly the length of your vehicle.","Ten feet longer than your vehicle."],
    "answer": 0,
    "explain": "Find a space at least three feet longer than your vehicle, then signal to show you plan to park.",
    "ref": "Section 6: Parallel Parking"
  },
  {
    "id": "PRK-02",
    "topic": "parking",
    "q": "Which is the proper procedure for parallel parking?",
    "choices": ["Pull up alongside the vehicle in front of the space, then back into the space at about a 45-degree angle.","Drive forward into the space without stopping.","Stop next to the vehicle behind the space, then drive forward into it."],
    "answer": 0,
    "explain": "Pull alongside the vehicle in front of the open space (about two feet away), stop when your rear bumper aligns with the front of the space, then back in at about a 45-degree angle.",
    "ref": "Section 6: Parallel Parking"
  },
  {
    "id": "PRK-03",
    "topic": "parking",
    "drills": ["numbers"],
    "q": "When you finish parallel parking, your vehicle should be within what distance of the curb?",
    "choices": ["18 inches.","36 inches.","6 inches."],
    "answer": 0,
    "explain": "Your vehicle should end up parallel to and within 18 inches of the curb.",
    "ref": "Section 6: Parallel Parking"
  },
  {
    "id": "PRK-04",
    "topic": "parking",
    "q": "You are parking headed downhill next to a curb. Turn your front wheels:",
    "choices": ["Into the curb or toward the side of the road.","Away from the curb.","Straight ahead with the parking brake off."],
    "answer": 0,
    "explain": "Headed downhill, turn your front wheels into the curb or right toward the side of the road, set the parking brake, and leave the vehicle in park or in gear.",
    "ref": "Section 6: Parking on a Hill"
  },
  {
    "id": "PRK-05",
    "topic": "parking",
    "q": "You are parking headed uphill next to a curb. Turn your front wheels:",
    "choices": ["Away from the curb and let the vehicle roll back until the wheel gently touches the curb.","Sharply into the curb.","Straight, and rely on the parking brake."],
    "answer": 0,
    "explain": "Headed uphill, turn the wheels away from the curb (toward the center of the road) and let the vehicle roll back a few inches so the wheel gently touches the curb.",
    "ref": "Section 6: Parking on a Hill"
  },
  {
    "id": "PRK-06",
    "topic": "parking",
    "q": "You are parking on a hill where there is no curb. Turn your front wheels:",
    "choices": ["Toward the shoulder, so the vehicle will roll away from the center of the road if the brakes fail.","Toward the center of the road.","In any direction as long as the parking brake is set."],
    "answer": 0,
    "explain": "With no curb, uphill or downhill, turn the wheels to the right toward the shoulder so the vehicle rolls away from the center of the road if the brakes fail.",
    "ref": "Section 6: Parking on a Hill"
  },
  {
    "id": "PRK-07",
    "topic": "parking",
    "q": "In addition to setting the parking brake when parking on a hill, you should:",
    "choices": ["Leave the vehicle in park, or in gear for a manual transmission.","Leave the vehicle in neutral.","Leave the engine running."],
    "answer": 0,
    "explain": "When parked on a hill your vehicle could roll due to equipment failure. Set the parking brake and leave the vehicle in park, or in gear for a manual transmission.",
    "ref": "Section 6: Parking on a Hill"
  },
  {
    "id": "PRK-08",
    "topic": "parking",
    "q": "A curb painted white means:",
    "choices": ["Stop only long enough to pick up or drop off passengers.","Park for up to one hour.","No stopping at any time."],
    "answer": 0,
    "explain": "White curb: stop only long enough to pick up or drop off passengers.",
    "ref": "Section 6: Parking at Colored Curbs"
  },
  {
    "id": "PRK-09",
    "topic": "parking",
    "q": "A curb painted green means:",
    "choices": ["Park for a limited time, as posted on signs or the curb.","Parking for zero-emission vehicles only.","Loading zone for freight only."],
    "answer": 0,
    "explain": "Green curb: park for a limited time; the limit may be posted on a sign or painted on the curb.",
    "ref": "Section 6: Parking at Colored Curbs"
  },
  {
    "id": "PRK-10",
    "topic": "parking",
    "q": "A curb painted yellow means:",
    "choices": ["Load and unload passengers or freight, for no longer than the posted time.","Free parking for motorcycles.","Reserved for taxis at all times."],
    "answer": 0,
    "explain": "Yellow curb: load and unload passengers and freight for no longer than the posted time. Noncommercial drivers usually must stay with the vehicle.",
    "ref": "Section 6: Parking at Colored Curbs"
  },
  {
    "id": "PRK-11",
    "topic": "parking",
    "q": "A curb painted red means:",
    "choices": ["No stopping, standing, or parking (buses may stop at red zones marked for buses).","Reserved for emergency vehicles only, others may stop briefly.","Passenger loading for up to three minutes."],
    "answer": 0,
    "explain": "Red curb: no stopping, standing, or parking. Buses may stop at a red zone marked for buses only.",
    "ref": "Section 6: Parking at Colored Curbs"
  },
  {
    "id": "PRK-12",
    "topic": "parking",
    "q": "Who may legally park at a blue curb?",
    "choices": ["A disabled person, or the driver of a disabled person, displaying a special placard or license plate.","Anyone stopping for less than 15 minutes.","Anyone picking up or dropping off passengers."],
    "answer": 0,
    "explain": "Blue curbs are for parking by a disabled person or the driver of a disabled person with a special placard or special license plate.",
    "ref": "Section 6: Parking at Colored Curbs"
  },
  {
    "id": "PRK-13",
    "topic": "parking",
    "q": "Parking in the crosshatched (diagonal lines) area next to a designated disabled parking space is:",
    "choices": ["Never allowed.","Allowed for quick deliveries.","Allowed with your emergency flashers on."],
    "answer": 0,
    "explain": "Never park in the crosshatched area next to a disabled parking space. It is needed for wheelchair access.",
    "ref": "Section 6: Illegal Parking"
  },
  {
    "id": "PRK-14",
    "topic": "parking",
    "drills": ["numbers"],
    "q": "You may not park within what distance of a fire hydrant?",
    "choices": ["15 feet.","5 feet.","25 feet."],
    "answer": 0,
    "explain": "Never park within 15 feet of a fire hydrant or a fire station driveway.",
    "ref": "Section 6: Illegal Parking"
  },
  {
    "id": "PRK-15",
    "topic": "parking",
    "drills": ["numbers"],
    "q": "You may not park within what distance of a marked or unmarked crosswalk?",
    "choices": ["20 feet (15 feet where a curb extension is present).","10 feet in all cases.","50 feet in all cases."],
    "answer": 0,
    "explain": "Do not park within 20 feet of a marked or unmarked crosswalk, or within 15 feet of a crosswalk where a curb extension is present.",
    "ref": "Section 6: Illegal Parking"
  },
  {
    "id": "PRK-16",
    "topic": "parking",
    "q": "You may not park within what distance of a sidewalk ramp for disabled persons?",
    "choices": ["Three feet.","One foot.","Ten feet."],
    "answer": 0,
    "explain": "Never park within three feet of a sidewalk ramp for disabled persons, or in front of or on a curb that provides wheelchair access.",
    "ref": "Section 6: Illegal Parking"
  },
  {
    "id": "PRK-17",
    "topic": "parking",
    "q": "Which of the following parking positions is legal?",
    "choices": ["None of these. All are illegal.","Double parked, briefly.","Partially blocking a sidewalk."],
    "answer": 0,
    "explain": "It is illegal to park double parked, on or partially blocking a sidewalk, in front of a driveway, or on a marked or unmarked crosswalk.",
    "ref": "Section 6: Illegal Parking"
  },
  {
    "id": "PRK-18",
    "topic": "parking",
    "q": "Parking in a space designated for parking or fueling zero-emission vehicles is allowed only if:",
    "choices": ["You are driving a zero-emission vehicle.","You will be gone less than 10 minutes.","It is after business hours."],
    "answer": 0,
    "explain": "Those spaces are reserved. Do not park there unless you are driving a zero-emission vehicle.",
    "ref": "Section 6: Illegal Parking"
  },
  {
    "id": "PRK-19",
    "topic": "parking",
    "q": "If you must stop on a freeway in an emergency, you should:",
    "choices": ["Park completely off the pavement and stay in your vehicle with the doors locked until help arrives.","Stop in the nearest traffic lane with flashers on.","Leave your vehicle and walk to the next exit."],
    "answer": 0,
    "explain": "Park completely off the pavement and stay in your locked vehicle until help arrives. Parking on a freeway is otherwise illegal.",
    "ref": "Section 6: Illegal Parking"
  },
  {
    "id": "PRK-20",
    "topic": "parking",
    "drills": ["numbers"],
    "q": "A vehicle stopped, parked, or left standing on a freeway may be removed after:",
    "choices": ["Four hours.","24 hours.","72 hours."],
    "answer": 0,
    "explain": "A vehicle left on a freeway for more than four hours may be removed.",
    "ref": "Section 6: Illegal Parking"
  },
  {
    "id": "PRK-21",
    "topic": "parking",
    "q": "Parking in a tunnel or on a bridge is:",
    "choices": ["Illegal, unless permitted by signs.","Legal outside rush hour.","Legal if you stay with the vehicle."],
    "answer": 0,
    "explain": "Never park in a tunnel or on a bridge unless signs permit it.",
    "ref": "Section 6: Illegal Parking"
  },
  {
    "id": "PRK-22",
    "topic": "parking",
    "q": "Parking between a safety zone and the curb is:",
    "choices": ["Illegal.","Legal for under five minutes.","Legal for loading only."],
    "answer": 0,
    "explain": "Never park or leave your vehicle between a safety zone and the curb.",
    "ref": "Section 6: Illegal Parking"
  },
  {
    "id": "PRK-23",
    "topic": "parking",
    "q": "After parallel parking, before exiting your vehicle you should:",
    "choices": ["Look carefully for passing vehicles, bicycles, and motorcycles, and exit when safe.","Open the door quickly to claim the space.","Sound your horn twice."],
    "answer": 0,
    "explain": "Turn off the vehicle, set the parking brake, and look carefully for passing vehicles, bicycles, and motorcycles before exiting.",
    "ref": "Section 6: Parallel Parking"
  },
  {
    "id": "PRK-24",
    "topic": "parking",
    "q": "Local authorities can reserve parking spaces on public streets for:",
    "choices": ["Electric vehicle charging.","Residents with the oldest vehicles.","Vehicles with out-of-state plates."],
    "answer": 0,
    "explain": "Local authorities can reserve on-street parking spaces for electric vehicle charging.",
    "ref": "Section 6: Electric Vehicles"
  },
  {
    "id": "PRK-25",
    "topic": "parking",
    "q": "When backing up in a straight line along a curb, you should:",
    "choices": ["Back slowly while staying within three feet of the curb, checking behind you.","Back as quickly as possible to clear traffic.","Use only your mirrors and never look back."],
    "answer": 0,
    "explain": "Back in a straight line at a smooth, safe speed, remaining within three feet of the curb, and stay aware of what is behind you.",
    "ref": "Section 6: Straight Line Backing"
  },
  {
    "id": "PRK-26",
    "topic": "parking",
    "q": "When parking on a sloping driveway, you should:",
    "choices": ["Turn the wheels so the vehicle will not roll into the street, leave it in park, and set the parking brake.","Leave the wheels straight and the transmission in neutral.","Park only facing uphill."],
    "answer": 0,
    "explain": "On a sloping driveway, turn the wheels so the vehicle cannot roll into the street, leave the vehicle in park, and set the parking brake.",
    "ref": "Section 6: Parking on a Hill"
  },
  {
    "id": "PRK-27",
    "topic": "parking",
    "q": "Parking on the wrong side of the street (facing oncoming traffic) is:",
    "choices": ["Illegal, except in an emergency, when required by an officer, or where specifically permitted.","Legal on quiet residential streets.","Legal for less than 10 minutes."],
    "answer": 0,
    "explain": "Never park on the wrong side of the street or on a freeway except in an emergency, when a law enforcement officer requires it, or where a stop is specifically permitted.",
    "ref": "Section 6: Illegal Parking"
  },
  {
    "id": "PRK-28",
    "topic": "parking",
    "q": "When you pull up alongside the vehicle in front of your parallel parking space, leave about how much room between vehicles?",
    "choices": ["Two feet.","Six inches.","Five feet."],
    "answer": 0,
    "explain": "Pull up alongside the vehicle in front of the space leaving about two feet between vehicles, and stop once your rear bumper aligns with the front of the space.",
    "ref": "Section 6: Parallel Parking"
  },
  {
    "id": "MRG-01",
    "topic": "merging-passing",
    "q": "What speed should you be driving when merging onto a highway?",
    "choices": ["At or near the speed of traffic.","Slower than the speed of traffic.","Faster than the speed of traffic."],
    "answer": 0,
    "explain": "Enter the highway at or near the speed of traffic and merge into a space large enough for your vehicle. Do not stop unless absolutely necessary.",
    "ref": "Section 6: Merging"
  },
  {
    "id": "MRG-02",
    "topic": "merging-passing",
    "q": "When merging onto a highway, who has the right-of-way?",
    "choices": ["Highway traffic.","The merging vehicle.","Whoever is traveling faster."],
    "answer": 0,
    "explain": "Highway traffic has the right-of-way. Merge when it is safe to do so.",
    "ref": "Section 6: Merging"
  },
  {
    "id": "MRG-03",
    "topic": "merging-passing",
    "drills": ["numbers"],
    "q": "To merge, enter, or cross city street traffic from a full stop, you need a gap of about:",
    "choices": ["Half a block, which is about 150 feet.","Two car lengths.","A full block, which is about 500 feet."],
    "answer": 0,
    "explain": "You need a space of about half a block (150 feet) on city streets, and a full block (about 300 feet) on the highway.",
    "ref": "Section 6: Crossing or Entering Traffic"
  },
  {
    "id": "MRG-04",
    "topic": "merging-passing",
    "drills": ["numbers"],
    "q": "To enter highway traffic from a full stop, you need a gap of about:",
    "choices": ["A full block, which is about 300 feet.","Half a block, which is about 150 feet.","50 feet."],
    "answer": 0,
    "explain": "On the highway you need about a full block (300 feet) to get up to the speed of traffic safely.",
    "ref": "Section 6: Crossing or Entering Traffic"
  },
  {
    "id": "MRG-05",
    "topic": "merging-passing",
    "drills": ["numbers"],
    "q": "When exiting a highway, once you are in the proper lane you should signal:",
    "choices": ["Five seconds (approximately 400 feet) before you exit.","One second before the exit ramp.","Only if other vehicles are behind you."],
    "answer": 0,
    "explain": "Know your exit, change lanes one at a time, and signal five seconds (about 400 feet) before you exit at a safe speed.",
    "ref": "Section 6: Exiting"
  },
  {
    "id": "MRG-06",
    "topic": "merging-passing",
    "q": "If you need to cross several freeway lanes, you should:",
    "choices": ["Signal and cross them one at a time, checking your blind spots each time.","Cross them all at once to spend less time between lanes.","Wait for traffic to fully clear in all lanes."],
    "answer": 0,
    "explain": "Cross lanes one at a time, signaling and checking blind spots for vehicles, motorcyclists, bicyclists, and pedestrians each time.",
    "ref": "Section 6: Merging"
  },
  {
    "id": "MRG-07",
    "topic": "merging-passing",
    "drills": ["numbers"],
    "q": "To pass safely when approaching a hill or curve, the hill or curve should be at least how far ahead?",
    "choices": ["One-third of a mile.","100 feet.","One mile."],
    "answer": 0,
    "explain": "To safely pass near a hill, curve, intersection, or obstruction, the hill or curve should be at least one-third of a mile ahead so you can see oncoming traffic.",
    "ref": "Section 6: Passing"
  },
  {
    "id": "MRG-08",
    "topic": "merging-passing",
    "drills": ["numbers"],
    "q": "Do not pass within what distance of an intersection, bridge, tunnel, or railroad crossing?",
    "choices": ["100 feet.","50 feet.","300 feet."],
    "answer": 0,
    "explain": "Do not pass within 100 feet of an intersection, bridge, tunnel, railroad crossing, or other hazardous area.",
    "ref": "Section 6: Passing"
  },
  {
    "id": "MRG-09",
    "topic": "merging-passing",
    "q": "When is it legal to drive off the paved or main-traveled part of the road to pass another vehicle?",
    "choices": ["It is not legal under any conditions.","When the vehicle ahead is turning left.","When there are two or more lanes in your direction."],
    "answer": 0,
    "explain": "Never drive off the paved or main-traveled part of the road to pass. Under any conditions.",
    "ref": "Section 6: How to Pass"
  },
  {
    "id": "MRG-10",
    "topic": "merging-passing",
    "q": "You may pass on the right when:",
    "choices": ["An open highway has two or more lanes in your direction.","The vehicle ahead is signaling a right turn.","You are on a two-lane road with a solid line."],
    "answer": 0,
    "explain": "Passing on the right is allowed when a highway has two or more lanes in your direction, when the driver ahead is turning left and you can safely pass on the right, or on a one-way street.",
    "ref": "Section 6: How to Pass"
  },
  {
    "id": "MRG-11",
    "topic": "merging-passing",
    "q": "The driver ahead of you is signaling a left turn. You should never pass them:",
    "choices": ["On the left.","On the right when safe.","At all. Passing turning vehicles is always illegal."],
    "answer": 0,
    "explain": "Never pass on the left if the driver is signaling a left turn. You may pass safely on the right in that situation.",
    "ref": "Section 6: How to Pass"
  },
  {
    "id": "MRG-12",
    "topic": "merging-passing",
    "q": "Another vehicle is passing you on the left. You should:",
    "choices": ["Maintain your lane position and speed and allow the vehicle to pass.","Speed up so they finish passing sooner.","Pull onto the shoulder immediately."],
    "answer": 0,
    "explain": "If a vehicle is passing you or signals to pass, allow it. Maintain your lane position and your speed.",
    "ref": "Section 6: Being Passed"
  },
  {
    "id": "MRG-13",
    "topic": "merging-passing",
    "q": "When merging on a freeway, leave how much space between you and the vehicle ahead?",
    "choices": ["Three seconds.","One second.","One car length regardless of speed."],
    "answer": 0,
    "explain": "Make sure you can stop safely by leaving three seconds of space between you and the vehicle in front of you.",
    "ref": "Section 6: Merging"
  },
  {
    "id": "MRG-14",
    "topic": "merging-passing",
    "q": "The correct sequence for passing on an open highway is:",
    "choices": ["Signal, check your blind spot, move into the passing lane, speed up to pass, then signal and return to your lane.","Speed up first, then signal while moving over.","Move over without signaling so you do not alarm the other driver."],
    "answer": 0,
    "explain": "Signal your pass, check over your shoulder, move into the passing lane, speed up to pass, and signal when returning to your original lane.",
    "ref": "Section 6: How to Pass"
  },
  {
    "id": "MRG-15",
    "topic": "merging-passing",
    "q": "Before passing another vehicle, you should look ahead for:",
    "choices": ["Road conditions that may cause other vehicles to move into your lane.","A place to stop and rest.","The nearest gas station."],
    "answer": 0,
    "explain": "Before passing, look ahead for road conditions and obstructions that may cause other vehicles to move into your lane.",
    "ref": "Section 6: Passing"
  },
  {
    "id": "MRG-16",
    "topic": "merging-passing",
    "q": "Passing at crossroads and driveways is:",
    "choices": ["Not allowed.","Allowed at low speed.","Allowed if you honk first."],
    "answer": 0,
    "explain": "Do not pass at crossroads and driveways. Vehicles may enter the road unexpectedly.",
    "ref": "Section 6: Passing"
  },
  {
    "id": "MRG-17",
    "topic": "merging-passing",
    "q": "Stopping on a freeway on-ramp while merging is:",
    "choices": ["Something to avoid unless absolutely necessary.","Recommended so you can look for a gap.","Required before entering the freeway."],
    "answer": 0,
    "explain": "Merge into highway traffic when safe. Do not stop unless absolutely necessary, because you need speed to merge safely.",
    "ref": "Section 6: Merging"
  },
  {
    "id": "MRG-18",
    "topic": "merging-passing",
    "q": "Even when you have a green light, you should not start across an intersection if:",
    "choices": ["Pedestrians or vehicles are blocking your pathway.","The cross street has a green light too.","You are in a hurry."],
    "answer": 0,
    "explain": "Do not start across an intersection, even on green, if pedestrians or vehicles block your path, or if you cannot completely cross before the light turns red.",
    "ref": "Section 6: Crossing or Entering Traffic"
  },
  {
    "id": "MRG-19",
    "topic": "merging-passing",
    "q": "Passing is especially dangerous on one- and two-lane roads when:",
    "choices": ["You are approaching a hill or curve and cannot see oncoming traffic.","The road is straight and flat.","You have a passing lane available."],
    "answer": 0,
    "explain": "Do not pass when approaching a hill or curve where you cannot see whether other traffic is approaching. This is very dangerous on one- and two-lane roads.",
    "ref": "Section 6: Passing"
  },
  {
    "id": "MRG-20",
    "topic": "merging-passing",
    "q": "Before passing, you must be sure you have enough space to:",
    "choices": ["Return to your lane.","Accelerate past two vehicles at once.","Complete the pass on the shoulder if needed."],
    "answer": 0,
    "explain": "Do not pass unless you have enough space to return to your lane safely.",
    "ref": "Section 6: Passing"
  },
  {
    "id": "MRG-21",
    "topic": "merging-passing",
    "q": "When merging or exiting a freeway, crossing over solid painted lines is:",
    "choices": ["Not allowed.","Allowed when traffic is light.","Allowed for carpools."],
    "answer": 0,
    "explain": "Make sure you do not cross over any solid lines when merging onto or exiting a highway.",
    "ref": "Section 6: Merging"
  },
  {
    "id": "MRG-22",
    "topic": "merging-passing",
    "q": "Before merging into traffic, the final check should be:",
    "choices": ["Turning your head quickly to look over your shoulder.","Adjusting the radio volume down.","Flashing your headlights."],
    "answer": 0,
    "explain": "Use your mirrors and signals, and turn your head quickly to look over your shoulder before changing lanes or merging into traffic.",
    "ref": "Section 6: Merging"
  },
  {
    "id": "SIG-01",
    "topic": "signals-signs",
    "drills": ["signals"],
    "q": "A solid red traffic signal light means:",
    "choices": ["Stop. You may turn right after stopping unless a sign prohibits it.","Stop only if cross traffic is present.","Slow down and proceed with caution."],
    "answer": 0,
    "explain": "A solid red light means STOP. You may turn right at a red light only after a complete stop, when safe, and when no NO TURN ON RED sign is posted.",
    "ref": "Section 7: Solid Red Light"
  },
  {
    "id": "SIG-02",
    "topic": "signals-signs",
    "drills": ["signals"],
    "q": "A red arrow pointing right means:",
    "choices": ["Stop. Do not turn until a green light or green arrow appears.","Turn right after yielding.","Turn right after a complete stop."],
    "answer": 0,
    "explain": "A red arrow means STOP. Do not turn. Remain stopped until a green traffic signal light or green arrow appears.",
    "ref": "Section 7: Red Arrow"
  },
  {
    "id": "SIG-03",
    "topic": "signals-signs",
    "drills": ["signals"],
    "q": "A flashing red traffic signal light means:",
    "choices": ["Stop, then go when it is safe. Treat it like a stop sign.","The signal is broken; drive through normally.","Slow down without stopping."],
    "answer": 0,
    "explain": "A flashing red signal means STOP. After stopping, you may proceed when it is safe.",
    "ref": "Section 7: Flashing Red Light"
  },
  {
    "id": "SIG-04",
    "topic": "signals-signs",
    "drills": ["signals"],
    "q": "You are approaching an intersection and the light turns solid yellow. You should:",
    "choices": ["Stop if you can do so safely; if not, cautiously cross the intersection.","Always stop, no matter what.","Speed up to beat the red light."],
    "answer": 0,
    "explain": "A yellow light means CAUTION: the light is about to turn red. Stop if you can do so safely; otherwise cross the intersection cautiously.",
    "ref": "Section 7: Solid Yellow Light"
  },
  {
    "id": "SIG-05",
    "topic": "signals-signs",
    "drills": ["signals"],
    "q": "A yellow arrow means:",
    "choices": ["The protected turning time is ending. Be ready for the signal to change.","You now have a protected turn.","Turns are prohibited from this lane."],
    "answer": 0,
    "explain": "A yellow arrow means the protected turning time is ending. If you cannot stop safely or are already in the intersection, cautiously complete your turn.",
    "ref": "Section 7: Yellow Arrow"
  },
  {
    "id": "SIG-06",
    "topic": "signals-signs",
    "drills": ["signals"],
    "q": "A flashing yellow traffic signal light means:",
    "choices": ["Proceed with caution. Slow down and be alert; you do not need to stop.","Stop and wait for it to turn green.","The light is about to turn red."],
    "answer": 0,
    "explain": "A flashing yellow light is a warning to proceed with caution. Slow down and be alert. You do not need to stop.",
    "ref": "Section 7: Flashing Yellow Light"
  },
  {
    "id": "SIG-07",
    "topic": "signals-signs",
    "drills": ["signals"],
    "q": "A flashing yellow arrow for a left turn means:",
    "choices": ["You may turn, but your turn is not protected. Yield to oncoming traffic first.","Your turn is protected from oncoming traffic.","Left turns are prohibited."],
    "answer": 0,
    "explain": "A flashing yellow arrow means you can turn, but the turn is not protected. Yield to oncoming traffic, then proceed with caution.",
    "ref": "Section 7: Flashing Yellow Arrow"
  },
  {
    "id": "SIG-08",
    "topic": "signals-signs",
    "drills": ["signals"],
    "q": "At a green light, you should still:",
    "choices": ["Let any vehicle, bicyclist, or pedestrian remaining in the intersection get through before you go.","Go immediately. Green means the intersection is clear.","Honk to clear the intersection."],
    "answer": 0,
    "explain": "Green means GO, but you must still stop for any vehicle, bicyclist, or pedestrian in the intersection, and only enter if you can get completely across before the light turns red.",
    "ref": "Section 7: Solid Green Light"
  },
  {
    "id": "SIG-09",
    "topic": "signals-signs",
    "drills": ["signals"],
    "q": "A green arrow means:",
    "choices": ["You may make a protected turn in the direction of the arrow. Oncoming traffic is stopped by a red light.","You may turn only after yielding to oncoming traffic.","The lane ahead is closed."],
    "answer": 0,
    "explain": "A green arrow allows a protected turn in the direction the arrow points; oncoming vehicles are stopped by a red light.",
    "ref": "Section 7: Green Arrow"
  },
  {
    "id": "SIG-10",
    "topic": "signals-signs",
    "drills": ["signals"],
    "q": "You approach an intersection where the traffic lights are not working. You should:",
    "choices": ["Stop as if the intersection is controlled by STOP signs in all directions, then proceed cautiously when safe.","Proceed at normal speed since no signal applies.","Yield only to traffic on your left."],
    "answer": 0,
    "explain": "When a traffic light is not working, treat the intersection as an all-way STOP, then proceed cautiously when it is safe.",
    "ref": "Section 7: Traffic Light Not Working"
  },
  {
    "id": "SIG-11",
    "topic": "signals-signs",
    "drills": ["signals"],
    "q": "A flashing DON'T WALK or flashing raised hand signal means pedestrians:",
    "choices": ["Should not start crossing, but drivers must still yield to pedestrians already crossing.","Must run to finish crossing.","May begin crossing quickly."],
    "answer": 0,
    "explain": "Pedestrians should not start crossing when the signal flashes: the light is about to change. Drivers must yield to pedestrians even when DON'T WALK is flashing.",
    "ref": "Section 7: Pedestrian Signals or Signs"
  },
  {
    "id": "SIG-12",
    "topic": "signals-signs",
    "drills": ["signals"],
    "q": "The numbers counting down on a pedestrian signal show:",
    "choices": ["The seconds left for crossing the street.","The speed limit at the intersection.","How long the green light will last for cars."],
    "answer": 0,
    "explain": "Countdown numbers show pedestrians the seconds remaining to cross the street.",
    "ref": "Section 7: Pedestrian Signals or Signs"
  },
  {
    "id": "SIG-13",
    "topic": "signals-signs",
    "drills": ["signals"],
    "q": "Beeping, chirping, or verbal messages at a crosswalk are there to:",
    "choices": ["Help blind or visually impaired pedestrians cross the street.","Warn drivers the signal is changing.","Signal that the crosswalk is closed."],
    "answer": 0,
    "explain": "Sounds such as beeping or chirping help blind or visually impaired pedestrians cross the street.",
    "ref": "Section 7: Pedestrian Signals or Signs"
  },
  {
    "id": "SIG-14",
    "topic": "signals-signs",
    "drills": ["signals"],
    "q": "If an intersection has no pedestrian signals, pedestrians should:",
    "choices": ["Obey the vehicle traffic signals.","Cross whenever there is a gap.","Wait for a police officer."],
    "answer": 0,
    "explain": "Where there are no pedestrian signals, pedestrians obey the vehicle traffic signals.",
    "ref": "Section 7: Pedestrian Signals or Signs"
  },
  {
    "id": "SIG-15",
    "topic": "signals-signs",
    "drills": ["signs"],
    "sign": "stop",
    "q": "This eight-sided red sign means:",
    "choices": ["Make a full stop before entering the crosswalk or at the limit line, then check traffic in all directions before proceeding.","Slow down and proceed if clear.","Stop only when other vehicles are present."],
    "answer": 0,
    "explain": "A STOP sign always requires a full stop at the limit line or crosswalk (or before the intersection if there is neither), then check traffic in all directions before proceeding.",
    "ref": "Section 7: STOP Sign"
  },
  {
    "id": "SIG-16",
    "topic": "signals-signs",
    "drills": ["signs"],
    "sign": "yield",
    "q": "This red and white triangular sign means:",
    "choices": ["Slow down and be ready to stop to let any vehicle, bicyclist, or pedestrian pass before you proceed.","Come to a complete stop in all cases.","You have the right-of-way over cross traffic."],
    "answer": 0,
    "explain": "A YIELD sign means slow down and be ready to stop to let traffic, bicyclists, or pedestrians pass before you proceed.",
    "ref": "Section 7: Red YIELD Sign"
  },
  {
    "id": "SIG-17",
    "topic": "signals-signs",
    "drills": ["signs"],
    "sign": "rr",
    "q": "This round yellow sign with an X and the letters R R means:",
    "choices": ["You are approaching a railroad crossing. Look, listen, slow down, and prepare to stop.","A four-way intersection is ahead.","Road repairs are in progress."],
    "answer": 0,
    "explain": "A yellow and black circular sign (or X-shaped sign) warns you are approaching a railroad crossing. Look, listen, slow down, and prepare to stop. Let any trains pass before proceeding.",
    "ref": "Section 7: Yellow and Black Circular Sign"
  },
  {
    "id": "SIG-18",
    "topic": "signals-signs",
    "drills": ["signs"],
    "sign": "school",
    "q": "This five-sided sign means:",
    "choices": ["You are near a school. Drive slowly and stop for children in the crosswalk.","A hospital zone is ahead.","You are entering a construction zone."],
    "answer": 0,
    "explain": "A 5-sided (pentagon) sign means you are near a school. Drive slowly and stop for children in the crosswalk.",
    "ref": "Section 7: 5-sided Sign"
  },
  {
    "id": "SIG-19",
    "topic": "signals-signs",
    "drills": ["signs"],
    "sign": "warning",
    "q": "Diamond-shaped yellow signs are used to:",
    "choices": ["Warn you of specific road conditions and dangers ahead.","List traffic laws you must obey.","Give distances to the next town."],
    "answer": 0,
    "explain": "Diamond-shaped signs warn of specific road conditions and dangers ahead.",
    "ref": "Section 7: Diamond-shaped Sign"
  },
  {
    "id": "SIG-20",
    "topic": "signals-signs",
    "drills": ["signs"],
    "q": "White rectangular signs:",
    "choices": ["Communicate important rules you must obey.","Are only suggestions.","Mark scenic routes."],
    "answer": 0,
    "explain": "White rectangular (regulatory) signs communicate important rules you must obey.",
    "ref": "Section 7: White Rectangular Sign"
  },
  {
    "id": "SIG-21",
    "topic": "signals-signs",
    "drills": ["signs"],
    "sign": "dne",
    "q": "This sign, a red circle with a white horizontal bar, means:",
    "choices": ["Do not enter the road or ramp where the sign is posted.","No parking beyond this point.","The road ends ahead."],
    "answer": 0,
    "explain": "DO NOT ENTER means do not enter the road or ramp where the sign is posted.",
    "ref": "Section 7: Red and White Regulatory Sign"
  },
  {
    "id": "SIG-22",
    "topic": "signals-signs",
    "drills": ["signs"],
    "sign": "wrongway",
    "q": "You see this red WRONG WAY sign facing you as you enter a road. You should:",
    "choices": ["Back out or turn around when it is safe. You are driving against traffic.","Continue slowly to the next exit.","Turn on your emergency flashers and continue."],
    "answer": 0,
    "explain": "DO NOT ENTER and WRONG WAY signs mean you have entered a roadway against traffic. When safe, back out or turn around.",
    "ref": "Section 7: WRONG WAY Sign"
  },
  {
    "id": "SIG-23",
    "topic": "signals-signs",
    "drills": ["signs"],
    "q": "Driving at night, you notice the road reflectors shining RED in your headlights. This means:",
    "choices": ["You are going the wrong way.","A school zone is ahead.","The pavement is wet."],
    "answer": 0,
    "explain": "If you are driving the wrong way at night, road reflectors will shine red in your headlights.",
    "ref": "Section 7: WRONG WAY Sign"
  },
  {
    "id": "SIG-24",
    "topic": "signals-signs",
    "drills": ["signs"],
    "q": "A sign showing a picture inside a red circle with a red line through it means:",
    "choices": ["The pictured action is not allowed.","The pictured action is required.","The pictured hazard is ahead."],
    "answer": 0,
    "explain": "A red circle with a red line through it shows what you cannot do; it may also be shown with words.",
    "ref": "Section 7: Red Circle with a Red Line Through It"
  },
  {
    "id": "SIG-25",
    "topic": "signals-signs",
    "drills": ["signs"],
    "sign": "slowmoving",
    "q": "An orange and red triangle displayed on the back of a vehicle means it is:",
    "choices": ["A slow-moving vehicle that usually travels at 25 mph or less.","Carrying hazardous materials.","An emergency vehicle."],
    "answer": 0,
    "explain": "The orange and red triangle marks slow-moving vehicles, such as road maintenance vehicles, which usually travel at 25 mph or less.",
    "ref": "Section 7: Slow-moving Vehicles"
  },
  {
    "id": "SIG-26",
    "topic": "signals-signs",
    "drills": ["signs"],
    "q": "A diamond-shaped placard on a truck means:",
    "choices": ["The truck's load may be dangerous, and the truck must stop before crossing railroad tracks.","The truck is oversized.","The truck is a slow-moving vehicle."],
    "answer": 0,
    "explain": "A diamond-shaped hazardous load placard means the load may be dangerous (gas, explosives, etc.). These vehicles must stop before crossing railroad tracks.",
    "ref": "Section 7: Vehicles with Hazardous Loads"
  },
  {
    "id": "SIG-27",
    "topic": "signals-signs",
    "drills": ["signs"],
    "sign": "slippery",
    "q": "This yellow warning sign showing a car with wavy skid marks means:",
    "choices": ["The road may be slippery when wet.","Drunk drivers are common in this area.","The road curves sharply ahead."],
    "answer": 0,
    "explain": "The Slippery When Wet warning sign means the road surface may be unusually slippery in wet weather. Slow down.",
    "ref": "Section 7: Warning Signs"
  },
  {
    "id": "SIG-28",
    "topic": "signals-signs",
    "drills": ["signs"],
    "sign": "merge",
    "q": "This yellow warning sign means:",
    "choices": ["Traffic is merging into your lane ahead.","The road divides ahead.","A sharp curve is ahead."],
    "answer": 0,
    "explain": "The Merging Traffic warning sign tells you traffic will be merging into your lane ahead. Adjust your speed and position.",
    "ref": "Section 7: Warning Signs"
  },
  {
    "id": "SIG-29",
    "topic": "signals-signs",
    "drills": ["signs"],
    "sign": "signalahead",
    "q": "This yellow warning sign showing a traffic signal means:",
    "choices": ["A traffic signal is ahead. Be prepared to stop.","The signal ahead is broken.","You must turn at the signal ahead."],
    "answer": 0,
    "explain": "The Traffic Signal Ahead warning sign warns you a signal is ahead so you can prepare to stop if it is red.",
    "ref": "Section 7: Warning Signs"
  },
  {
    "id": "SIG-30",
    "topic": "signals-signs",
    "drills": ["signs"],
    "sign": "laneends",
    "q": "You see this yellow warning sign posted along the road. It tells you:",
    "choices": ["Your lane ends ahead. Prepare to merge.","A one-way road begins.","The shoulder is soft."],
    "answer": 0,
    "explain": "The Lane Ends warning sign means the lane you are in ends ahead; prepare to merge safely into the continuing lane.",
    "ref": "Section 7: Warning Signs"
  },
  {
    "id": "SIG-31",
    "topic": "signals-signs",
    "drills": ["signs"],
    "sign": "dividedhwy",
    "q": "This diamond-shaped yellow sign is warning you that:",
    "choices": ["You are approaching a divided highway. Traffic travels on both sides of a divider.","A winding road is ahead.","Two lanes become four ahead."],
    "answer": 0,
    "explain": "The Divided Highway warning sign means the road ahead is divided. Keep to the right of the divider.",
    "ref": "Section 7: Warning Signs"
  },
  {
    "id": "SIG-32",
    "topic": "signals-signs",
    "drills": ["signs"],
    "sign": "pedestrian",
    "q": "This yellow sign showing a person walking means:",
    "choices": ["Watch for pedestrians crossing ahead.","Sidewalk closed ahead.","Hitchhiking is allowed."],
    "answer": 0,
    "explain": "The Pedestrian Crossing warning sign means watch for people crossing the road ahead and be prepared to stop.",
    "ref": "Section 7: Warning Signs"
  },
  {
    "id": "SIG-33",
    "topic": "signals-signs",
    "drills": ["signs"],
    "q": "You should obey warning signs:",
    "choices": ["Regardless of their shape or color.","Only when they are yellow.","Only during daylight hours."],
    "answer": 0,
    "explain": "Obey all warning signs regardless of their shape or color.",
    "ref": "Section 7: Signs"
  },
  {
    "id": "SIG-34",
    "topic": "signals-signs",
    "drills": ["signs"],
    "q": "Many railroad crossings have a blue and white sign posted. It tells you:",
    "choices": ["What to do if there is an emergency on or near the tracks, or if your vehicle stalls on the tracks.","The train schedule for that crossing.","The speed limit for trains."],
    "answer": 0,
    "explain": "The blue and white sign at railroad crossings tells you what to do in an emergency on or near the tracks, including who to call if your vehicle stalls on the tracks.",
    "ref": "Section 7: Yellow and Black Circular Sign"
  },
  {
    "id": "ROW-01",
    "topic": "right-of-way",
    "q": "Right-of-way rules work best when you:",
    "choices": ["Never assume other drivers will give you the right-of-way, and give up yours when it prevents a collision.","Always insist on going first when you have the right-of-way.","Wave other drivers through against the rules."],
    "answer": 0,
    "explain": "Never assume other drivers will give you the right-of-way, and give yours up when it helps prevent collisions.",
    "ref": "Section 7: Right-of-Way Rules"
  },
  {
    "id": "ROW-02",
    "topic": "right-of-way",
    "q": "Two vehicles arrive at an uncontrolled intersection (no signs or signals) at the same time. Who goes first?",
    "choices": ["The vehicle on the right.","The vehicle on the left.","The faster vehicle."],
    "answer": 0,
    "explain": "The first to arrive has the right-of-way; if you arrive at the same time as another vehicle, bicyclist, or pedestrian, yield to the one on your right.",
    "ref": "Section 7: Intersections"
  },
  {
    "id": "ROW-03",
    "topic": "right-of-way",
    "q": "At a T intersection without STOP or YIELD signs, the right-of-way belongs to:",
    "choices": ["Vehicles, bicyclists, and pedestrians on the through (continuing) road.","The vehicle on the ending road.","Whoever arrives last."],
    "answer": 0,
    "explain": "At T intersections without signs, traffic on the through road has the right-of-way.",
    "ref": "Section 7: Intersections"
  },
  {
    "id": "ROW-04",
    "topic": "right-of-way",
    "q": "A driver stopped at an intersection who wants to turn left should:",
    "choices": ["Give the right-of-way to any approaching vehicle that is close enough to be dangerous.","Take the right-of-way before oncoming traffic arrives.","Turn immediately if no pedestrians are present."],
    "answer": 0,
    "explain": "When turning left, check for pedestrians and give the right-of-way to any approaching vehicle close enough to be dangerous.",
    "ref": "Section 7: Intersections"
  },
  {
    "id": "ROW-05",
    "topic": "right-of-way",
    "q": "When entering traffic from a stop, you must:",
    "choices": ["Proceed with caution and yield to traffic already occupying the lanes.","Expect moving traffic to make room for you.","Enter as soon as your light turns green regardless of space."],
    "answer": 0,
    "explain": "Yield to traffic already in the lanes. It is also against the law to enter an intersection you cannot completely cross before the light turns red.",
    "ref": "Section 7: Intersections"
  },
  {
    "id": "ROW-06",
    "topic": "right-of-way",
    "q": "Before entering a roundabout, you must:",
    "choices": ["Slow down and yield to all traffic already in the roundabout.","Stop completely even when empty.","Speed up to merge ahead of circulating traffic."],
    "answer": 0,
    "explain": "Slow down as you approach and yield to all traffic already in the roundabout, entering when there is a big enough gap.",
    "ref": "Section 7: Roundabouts"
  },
  {
    "id": "ROW-07",
    "topic": "right-of-way",
    "q": "Traffic in a roundabout travels:",
    "choices": ["Counterclockwise, without stopping or passing.","Clockwise, yielding at each exit.","In both directions around the island."],
    "answer": 0,
    "explain": "Travel in a counterclockwise direction in a roundabout. Do not stop or pass.",
    "ref": "Section 7: Roundabouts"
  },
  {
    "id": "ROW-08",
    "topic": "right-of-way",
    "q": "If you miss your exit in a roundabout, you should:",
    "choices": ["Continue around until you return to your exit.","Stop and back up to the exit.","Cut across the central island."],
    "answer": 0,
    "explain": "If you miss your exit, continue around the roundabout until you return to it.",
    "ref": "Section 7: Roundabouts"
  },
  {
    "id": "ROW-09",
    "topic": "right-of-way",
    "q": "To turn right at a multi-lane roundabout, you should enter from:",
    "choices": ["The right lane and exit in the right lane.","The left lane and spiral outward.","Either lane, exiting wherever is open."],
    "answer": 0,
    "explain": "Choose your lane by destination: right turns use the right lane; going straight can use either lane; left turns enter and continue until reaching the exit.",
    "ref": "Section 7: Roundabouts"
  },
  {
    "id": "ROW-10",
    "topic": "right-of-way",
    "q": "A pedestrian is crossing your street where there is no crosswalk. You should:",
    "choices": ["Use caution, reduce your speed, or stop to let the pedestrian finish crossing safely.","Continue. Pedestrians outside crosswalks have no protection.","Honk so they hurry across."],
    "answer": 0,
    "explain": "When a pedestrian is crossing with or without a crosswalk, use caution, reduce speed, or stop to allow them to finish crossing safely.",
    "ref": "Section 7: Pedestrians"
  },
  {
    "id": "ROW-11",
    "topic": "right-of-way",
    "q": "A vehicle is stopped at a crosswalk ahead of you. You should:",
    "choices": ["Not pass it: a pedestrian you cannot see may be crossing.","Pass on the left quickly.","Honk and pass slowly."],
    "answer": 0,
    "explain": "Do not pass a vehicle stopped at a crosswalk. You may not be able to see a pedestrian crossing the street.",
    "ref": "Section 7: Pedestrians"
  },
  {
    "id": "ROW-12",
    "topic": "right-of-way",
    "q": "Pedestrians have the right-of-way in:",
    "choices": ["Both marked and unmarked crosswalks.","Marked crosswalks only.","Crosswalks with flashing lights only."],
    "answer": 0,
    "explain": "Pedestrians have the right-of-way in marked or unmarked crosswalks. Not all crosswalks are marked.",
    "ref": "Section 7: Crosswalks"
  },
  {
    "id": "ROW-13",
    "topic": "right-of-way",
    "q": "A person using a guide dog or carrying a white cane has the right-of-way:",
    "choices": ["At all times.","Only in marked crosswalks.","Only when a signal shows WALK."],
    "answer": 0,
    "explain": "Pedestrians using guide dogs or white canes are partially or totally blind and have the right-of-way at all times.",
    "ref": "Section 7: Pedestrians Who Are Blind"
  },
  {
    "id": "ROW-14",
    "topic": "right-of-way",
    "q": "When driving near a blind pedestrian, you should NOT:",
    "choices": ["Stop in the middle of a crosswalk or honk your horn at them.","Wait quietly while they cross.","Be extra careful when turning or backing up."],
    "answer": 0,
    "explain": "Do not stop in the middle of a crosswalk (it could force them into traffic) and do not honk at a blind person. Take special care in hybrid or electric vehicles, which they may not hear.",
    "ref": "Section 7: Pedestrians Who Are Blind"
  },
  {
    "id": "ROW-15",
    "topic": "right-of-way",
    "q": "A blind pedestrian pulls in their cane and steps away from the intersection. This usually means:",
    "choices": ["You may go.","They are about to cross.","They need assistance."],
    "answer": 0,
    "explain": "When a blind person pulls in their cane and steps away from the intersection, this gesture usually means you may go.",
    "ref": "Section 7: Pedestrians Who Are Blind"
  },
  {
    "id": "ROW-16",
    "topic": "right-of-way",
    "q": "Two vehicles meet on a steep, narrow mountain road where neither can pass. Which vehicle must back up?",
    "choices": ["The vehicle facing downhill, because it has more control backing up the hill.","The vehicle facing uphill.","The larger vehicle."],
    "answer": 0,
    "explain": "The vehicle facing downhill must back up until the vehicle going uphill can pass: the downhill vehicle has more control when backing.",
    "ref": "Section 7: Mountain Roads"
  },
  {
    "id": "ROW-17",
    "topic": "right-of-way",
    "q": "An emergency vehicle approaches you using its siren and red lights. You must:",
    "choices": ["Drive to the right edge of the road and stop until it has passed.","Speed up and get out of the area.","Stop immediately wherever you are, even in an intersection."],
    "answer": 0,
    "explain": "Give the right-of-way: drive to the right edge of the road and stop until the emergency vehicle(s) have passed. Failure to pull over may result in a ticket.",
    "ref": "Section 7: Emergency Vehicles"
  },
  {
    "id": "ROW-18",
    "topic": "right-of-way",
    "q": "You are inside an intersection when you notice an emergency vehicle approaching with its siren on. You should:",
    "choices": ["Continue through the intersection, then drive to the right and stop as soon as it is safe.","Stop immediately in the intersection.","Back out of the intersection."],
    "answer": 0,
    "explain": "If you are in an intersection, continue through it first, then drive to the right as soon as it is safe and stop.",
    "ref": "Section 7: Emergency Vehicles"
  },
  {
    "id": "ROW-19",
    "topic": "right-of-way",
    "drills": ["numbers"],
    "q": "Following within what distance of an emergency vehicle with its siren or flashing lights on is illegal?",
    "choices": ["300 feet.","100 feet.","500 feet."],
    "answer": 0,
    "explain": "It is against the law to follow within 300 feet of any fire engine, law enforcement vehicle, ambulance, or other emergency vehicle with its siren or flashing lights on.",
    "ref": "Section 7: Emergency Vehicles"
  },
  {
    "id": "ROW-20",
    "topic": "right-of-way",
    "q": "Driving to the scene of a fire, collision, or other disaster to watch:",
    "choices": ["Can get you arrested. You interfere with rescue and emergency personnel.","Is allowed if you park far away.","Is allowed if you offer to help."],
    "answer": 0,
    "explain": "You can be arrested for driving to the scene of a fire, collision, or disaster. You get in the way of firefighters, ambulance crews, and rescue personnel.",
    "ref": "Section 7: Emergency Vehicles"
  },
  {
    "id": "ROW-21",
    "topic": "right-of-way",
    "q": "A law enforcement officer directs you to do something that conflicts with a traffic signal. You should:",
    "choices": ["Follow the officer's direction.","Obey the signal.","Stop and stay where you are."],
    "answer": 0,
    "explain": "Obey any direction, order, or signal from a law enforcement officer or firefighter, even if it conflicts with existing signs, signals, or laws.",
    "ref": "Section 7: Emergency Vehicles"
  },
  {
    "id": "ROW-22",
    "topic": "right-of-way",
    "q": "A funeral procession led by a traffic officer:",
    "choices": ["Has the right-of-way. You can be ticketed for interrupting it.","Must yield to all other traffic.","May be crossed if you are careful."],
    "answer": 0,
    "explain": "A funeral procession has the right-of-way. Vehicles in it have windshield markers and headlights on; interrupting it can get you ticketed.",
    "ref": "Section 7: Other Important Roadway Information"
  },
  {
    "id": "ROW-23",
    "topic": "right-of-way",
    "q": "When approaching a stationary emergency vehicle showing flashing emergency or hazard lights, you must:",
    "choices": ["Move over into another lane when possible, and slow down.","Stop next to the vehicle.","Continue at your normal speed in your lane."],
    "answer": 0,
    "explain": "Move over and slow down when approaching stationary emergency vehicles, tow trucks, or road work vehicles displaying flashing or amber warning lights.",
    "ref": "Section 7: Move Over and Slow Down"
  },
  {
    "id": "ROW-24",
    "topic": "right-of-way",
    "q": "Pedestrians who make eye contact with you at a crossing:",
    "choices": ["Are ready to cross the street. Yield to them.","Are letting you go first.","Must wait for you to pass."],
    "answer": 0,
    "explain": "If a pedestrian makes eye contact with you, they are ready to cross. Yield to them.",
    "ref": "Section 7: Pedestrians"
  },
  {
    "id": "ROW-25",
    "topic": "right-of-way",
    "q": "Which road users may need extra time to cross the street?",
    "choices": ["Seniors, people with small children, and people with disabilities.","Joggers.","People walking dogs."],
    "answer": 0,
    "explain": "Always allow enough time. Seniors, people with small children, and people with disabilities may require extra time to cross.",
    "ref": "Section 7: Pedestrians"
  },
  {
    "id": "ROW-26",
    "topic": "right-of-way",
    "q": "Which of these is considered a pedestrian?",
    "choices": ["A person with a disability using a wheelchair, tricycle, or quadricycle for transportation.","A person riding a bicycle.","A person driving a golf cart."],
    "answer": 0,
    "explain": "Pedestrians include people walking, people on skates or skateboards, and people with disabilities using wheelchairs, tricycles, or quadricycles for transportation.",
    "ref": "Section 7: Pedestrians"
  },
  {
    "id": "SHR-01",
    "topic": "sharing-road",
    "q": "Which of the following is true about large trucks?",
    "choices": ["They have large blind spots that make it difficult for the driver to see other vehicles.","They can stop more quickly than passenger vehicles.","They are more maneuverable than passenger vehicles."],
    "answer": 0,
    "explain": "Large vehicles have big blind spots called No Zones. If you cannot see the truck's side mirrors, the truck driver cannot see you.",
    "ref": "Section 7: Blind Spots (the No Zone)"
  },
  {
    "id": "SHR-02",
    "topic": "sharing-road",
    "q": "How can you tell if you are in a truck driver's blind spot?",
    "choices": ["If you cannot see the truck's side mirrors, the driver cannot see you.","If the truck's brake lights flash twice.","You cannot. Trucks have no blind spots."],
    "answer": 0,
    "explain": "The rule of thumb: if you cannot see the truck's side mirrors, the truck driver cannot see you.",
    "ref": "Section 7: Blind Spots (the No Zone)"
  },
  {
    "id": "SHR-03",
    "topic": "sharing-road",
    "drills": ["numbers"],
    "q": "A passenger vehicle traveling at 55 mph can stop within about 300 feet. A large truck at the same speed can take up to:",
    "choices": ["400 feet.","300 feet.","200 feet."],
    "answer": 0,
    "explain": "A large vehicle at 55 mph can take up to 400 feet to stop. The heavier and faster the vehicle, the longer it takes: a loaded truck takes longer than an empty one.",
    "ref": "Section 7: Braking"
  },
  {
    "id": "SHR-04",
    "topic": "sharing-road",
    "q": "Why should you never move in front of a large truck and suddenly slow down or stop?",
    "choices": ["The truck cannot stop fast enough to avoid crashing into you.","It is rude but not dangerous.","The truck will honk at you."],
    "answer": 0,
    "explain": "Trucks create extra space ahead of them to stop. If you cut in and slow suddenly, the truck will not be able to stop fast enough to avoid hitting you.",
    "ref": "Section 7: Braking"
  },
  {
    "id": "SHR-05",
    "topic": "sharing-road",
    "q": "A large truck ahead of you appears to be turning left, but its right turn signal is on. The most likely explanation is:",
    "choices": ["It is swinging wide to the left in order to complete a right turn.","The signal is broken.","The driver is confused."],
    "answer": 0,
    "explain": "Long vehicles often swing wide to complete turns because rear wheels follow a shorter path. Look at the turn signals before you try to pass.",
    "ref": "Section 7: Turning"
  },
  {
    "id": "SHR-06",
    "topic": "sharing-road",
    "q": "On a divided highway with four or more lanes in one direction, large trucks may be driven in:",
    "choices": ["The two lanes farthest to the right.","Any lane.","The far left lane only."],
    "answer": 0,
    "explain": "Large vehicles and trucks may be driven in the two lanes farthest to the right on divided highways with four or more lanes in one direction.",
    "ref": "Section 7: Maneuvering"
  },
  {
    "id": "SHR-07",
    "topic": "sharing-road",
    "q": "When passing a large vehicle, you should:",
    "choices": ["Always pass on the left side and move ahead of it once past. Do not linger alongside.","Pass on the right where the driver expects you.","Pass slowly and stay beside the truck."],
    "answer": 0,
    "explain": "Always pass a large vehicle on the left, then move ahead of it. Driving alongside makes it hard for the driver to avoid dangers in the road.",
    "ref": "Section 7: Maneuvering"
  },
  {
    "id": "SHR-08",
    "topic": "sharing-road",
    "q": "Safety zones, spaces set aside for pedestrians waiting for buses, streetcars, or trolleys, are marked by:",
    "choices": ["Raised buttons or markers on the road.","Green painted curbs.","Orange traffic cones."],
    "answer": 0,
    "explain": "Safety zones are marked by raised buttons or markers on the road. Never drive through a safety zone under any condition.",
    "ref": "Section 7: Buses, Streetcars, Trolleys"
  },
  {
    "id": "SHR-09",
    "topic": "sharing-road",
    "drills": ["numbers"],
    "q": "A streetcar is stopped at a safety zone where a pedestrian is boarding. You may pass at no more than:",
    "choices": ["10 mph.","25 mph.","15 mph."],
    "answer": 0,
    "explain": "When a bus, streetcar, or trolley is stopped at a safety zone or at an intersection controlled by a traffic light, you may pass at no more than 10 mph.",
    "ref": "Section 7: Buses, Streetcars, Trolleys"
  },
  {
    "id": "SHR-10",
    "topic": "sharing-road",
    "q": "You may pass a light rail vehicle or streetcar on the left when:",
    "choices": ["The tracks are so close to the right side that you cannot pass on the right.","It is traveling slower than 15 mph.","Never. Passing on the left is always illegal."],
    "answer": 0,
    "explain": "Do not pass a streetcar or light rail vehicle on the left unless the tracks are too close to the right side, you are on a one-way street, or a traffic officer directs you to.",
    "ref": "Section 7: Buses, Streetcars, Trolleys"
  },
  {
    "id": "SHR-11",
    "topic": "sharing-road",
    "q": "When driving near light rail vehicles, you should:",
    "choices": ["Never turn in front of an approaching light rail vehicle.","Expect them to stop for you at crossings.","Race them to intersections since they are slow."],
    "answer": 0,
    "explain": "Never turn in front of an approaching light rail vehicle, maintain a safe distance, and be aware they can interrupt traffic lights.",
    "ref": "Section 7: Light Rail Vehicles"
  },
  {
    "id": "SHR-12",
    "topic": "sharing-road",
    "q": "When following a motorcyclist, allow a following distance of at least:",
    "choices": ["Three seconds.","One second.","One car length."],
    "answer": 0,
    "explain": "Allow a three-second following distance so you can avoid hitting a motorcyclist who brakes suddenly or falls.",
    "ref": "Section 7: Motorcycles"
  },
  {
    "id": "SHR-13",
    "topic": "sharing-road",
    "q": "Motorcyclists sharing a lane with cars (lane splitting) is:",
    "choices": ["Legal in California. When possible, move to one side of your lane to give them room.","Illegal in California.","Legal only on surface streets."],
    "answer": 0,
    "explain": "It is legal for motorcycles to share lanes (lane splitting). Whenever possible, give a motorcycle the full lane and move over to give them room to pass, but never try to pass a motorcycle within the same lane.",
    "ref": "Section 7: Motorcycles"
  },
  {
    "id": "SHR-14",
    "topic": "sharing-road",
    "q": "Before opening your car door next to traffic, you should check for:",
    "choices": ["Motorcyclists and bicyclists approaching from behind.","Parking enforcement officers.","Nothing. Passing traffic must avoid your door."],
    "answer": 0,
    "explain": "Check for motorcyclists (and bicyclists) before you open your door next to traffic.",
    "ref": "Section 7: Motorcycles"
  },
  {
    "id": "SHR-15",
    "topic": "sharing-road",
    "drills": ["numbers"],
    "q": "Neighborhood electric vehicles (NEVs) and low-speed vehicles (LSVs) reach a maximum speed of 25 mph and are restricted from roads with speed limits greater than:",
    "choices": ["35 mph.","45 mph.","55 mph."],
    "answer": 0,
    "explain": "NEVs and LSVs top out at 25 mph and are restricted from roads where the speed limit is greater than 35 mph.",
    "ref": "Section 7: NEVs and LSVs"
  },
  {
    "id": "SHR-16",
    "topic": "sharing-road",
    "q": "Intentionally scaring horses or livestock being ridden or driven along a road is:",
    "choices": ["Against the law.","Legal if they are blocking traffic.","Only discouraged, not illegal."],
    "answer": 0,
    "explain": "Horse-drawn vehicles and riders share the road; it is against the law to intentionally scare horses or livestock.",
    "ref": "Section 7: Animal-drawn Vehicles"
  },
  {
    "id": "SHR-17",
    "topic": "sharing-road",
    "q": "You see livestock near the roadway and a person in charge of the animals. You should:",
    "choices": ["Slow down or stop and follow directions from the person in charge of the animals.","Honk to move the animals along.","Speed past before they enter the road."],
    "answer": 0,
    "explain": "Slow down or stop, proceed when safe, and follow directions from the person in charge of the animals.",
    "ref": "Section 7: Near Animals"
  },
  {
    "id": "SHR-18",
    "topic": "sharing-road",
    "q": "Bicyclists on public roads:",
    "choices": ["Have the same rights and responsibilities as other drivers.","Must always yield to cars.","Are only allowed in bike lanes."],
    "answer": 0,
    "explain": "Bicyclists have the same rights and responsibilities as vehicle drivers, including obeying all signs, signals, and right-of-way rules.",
    "ref": "Section 7: Bicycles"
  },
  {
    "id": "SHR-19",
    "topic": "sharing-road",
    "drills": ["numbers"],
    "q": "A bicyclist riding at night must have a front lamp with a white light visible from:",
    "choices": ["300 feet.","100 feet.","50 feet."],
    "answer": 0,
    "explain": "At night a bicycle needs a front white lamp visible from 300 feet, a rear red reflector or light visible from 500 feet, and pedal/ankle reflectors visible from 200 feet.",
    "ref": "Section 7: Bicycling at Night"
  },
  {
    "id": "SHR-20",
    "topic": "sharing-road",
    "q": "A bicyclist traveling slower than traffic may leave the right edge of the road when:",
    "choices": ["Passing, preparing for a left turn, avoiding a hazard, or when the lane is too narrow to share.","Never. Bicyclists must always hug the right curb.","Only when accompanied by another rider."],
    "answer": 0,
    "explain": "Bicyclists may move left when passing, preparing a left turn, avoiding hazards, approaching a right-turn area, or when the lane is too narrow for a bicycle and vehicle side-by-side.",
    "ref": "Section 7: Bicycling in Travel Lanes"
  },
  {
    "id": "SHR-21",
    "topic": "sharing-road",
    "q": "You want to pass a bicyclist in your lane but cannot change lanes. You must allow at least:",
    "choices": ["Three feet between your vehicle and the bicyclist, or wait until you can.","One foot of clearance.","Enough room to avoid contact."],
    "answer": 0,
    "explain": "Allow at least three feet of clearance to pass a bicyclist. If you cannot give three feet, do not pass until you can do so safely.",
    "ref": "Section 7: Passing a Bicyclist"
  },
  {
    "id": "SHR-22",
    "topic": "sharing-road",
    "q": "When preparing to turn right across a bike lane, you should merge:",
    "choices": ["Safely behind any bicyclist, entering the bike lane no more than 200 feet before the turn.","Into the bike lane as early as possible.","Across the bike lane at the last moment without entering it."],
    "answer": 0,
    "explain": "Merge safely behind bicyclists and enter the bike lane no more than 200 feet before starting your turn.",
    "ref": "Section 7: Passing a Bicyclist"
  },
  {
    "id": "SHR-23",
    "topic": "sharing-road",
    "q": "When driving through a work zone, you should:",
    "choices": ["Slow down, allow extra space between vehicles, and expect sudden slowing or stopping.","Maintain freeway speed to keep traffic moving.","Change lanes frequently to find the fastest lane."],
    "answer": 0,
    "explain": "Go through work zones carefully: slow down, allow extra space, expect sudden stops, watch for lane changes, and avoid distractions. Obey flaggers.",
    "ref": "Section 7: Road Workers and Work Zones"
  },
  {
    "id": "SHR-24",
    "topic": "sharing-road",
    "drills": ["numbers"],
    "q": "Fines for traffic violations in a highway construction or maintenance zone when workers are present are:",
    "choices": ["Doubled, and can be $1,000 or more.","The same as normal.","Waived for first offenses."],
    "answer": 0,
    "explain": "Work zone fines can be $1,000 or more, and fines are doubled in construction or maintenance zones when workers are present and in Safety Enhanced-Double Fine Zones.",
    "ref": "Section 7: Fines and Double Fine Zones"
  },
  {
    "id": "SHR-25",
    "topic": "sharing-road",
    "drills": ["numbers"],
    "q": "Anyone convicted of assaulting a highway worker faces:",
    "choices": ["Fines of up to $2,000 and imprisonment for up to one year.","A warning letter.","A $100 fine."],
    "answer": 0,
    "explain": "Assaulting a highway worker carries fines up to $2,000 and imprisonment for up to one year.",
    "ref": "Section 7: Fines and Double Fine Zones"
  },
  {
    "id": "SHR-26",
    "topic": "sharing-road",
    "q": "A school bus ahead is flashing its yellow lights. This means you should:",
    "choices": ["Slow down and prepare to stop: the bus is preparing to stop for children.","Stop immediately and remain stopped.","Pass quickly before the lights turn red."],
    "answer": 0,
    "explain": "Flashing yellow lights warn that the bus is preparing to stop to let children off. Slow down and prepare to stop.",
    "ref": "Section 7: Around Children"
  },
  {
    "id": "SHR-27",
    "topic": "sharing-road",
    "q": "A school bus is stopped ahead on your side of an undivided road with its red lights flashing. You must:",
    "choices": ["Stop until the children are safely across and the lights stop flashing.","Slow to 10 mph and pass carefully.","Change lanes and drive past slowly."],
    "answer": 0,
    "explain": "When a school bus flashes red lights, traffic from either direction must stop until the children are safely across and the lights stop flashing. Failure to stop: a fine up to $1,000 and possible one-year license suspension.",
    "ref": "Section 7: Around Children"
  },
  {
    "id": "SHR-28",
    "topic": "sharing-road",
    "q": "If you fail to stop for a school bus with flashing red lights, you may be fined up to $1,000 and:",
    "choices": ["Your driving privilege could be suspended for one year.","Receive a written warning.","Be required to retake the vision test."],
    "answer": 0,
    "explain": "Failing to stop for a school bus with flashing red lights can bring a fine of up to $1,000 and a one-year suspension of your driving privilege.",
    "ref": "Section 7: Around Children"
  },
  {
    "id": "SHR-29",
    "topic": "sharing-road",
    "q": "A school bus with flashing red lights is stopped on the other side of a divided highway. You:",
    "choices": ["Do not need to stop.","Must stop until the lights stop flashing.","Must slow to 25 mph."],
    "answer": 0,
    "explain": "You do not need to stop if the school bus is on the other side of a divided or multilane highway (two or more lanes in each direction).",
    "ref": "Section 7: Around Children"
  },
  {
    "id": "SHR-30",
    "topic": "sharing-road",
    "q": "Which vehicles must stop before crossing railroad tracks?",
    "choices": ["Buses, school buses, and vehicles with hazardous materials placards.","All commercial vehicles.","Only trains may use the tracks."],
    "answer": 0,
    "explain": "Watch for vehicles that must stop before crossing train tracks: buses, school buses, and vehicles marked with hazardous materials placards.",
    "ref": "Section 7: Near Railroad or Light Rail Tracks"
  },
  {
    "id": "SHR-31",
    "topic": "sharing-road",
    "q": "At a railroad crossing with flashing red warning lights, you must:",
    "choices": ["Stop and wait. Do not proceed until the lights stop flashing, even if the gate rises.","Proceed as soon as the train passes, even if lights still flash.","Drive around the gate if no train is visible."],
    "answer": 0,
    "explain": "Flashing red lights at a crossing mean stop and wait. Do not proceed until the red lights stop flashing, even if the gate rises. Another train may be coming.",
    "ref": "Section 7: Near Railroad or Light Rail Tracks"
  },
  {
    "id": "SHR-32",
    "topic": "sharing-road",
    "drills": ["numbers"],
    "q": "When crossing devices or a person warns a train is coming, stop at least how far from the nearest track?",
    "choices": ["15 feet.","5 feet.","50 feet."],
    "answer": 0,
    "explain": "Stop at least 15 feet from the nearest track when crossing devices or a flagman warn a train is coming.",
    "ref": "Section 7: Near Railroad or Light Rail Tracks"
  },
  {
    "id": "SHR-33",
    "topic": "sharing-road",
    "q": "At railroad tracks, you should never begin crossing unless:",
    "choices": ["You have enough room to completely cross the tracks without stopping.","The gates are less than halfway down.","You can cross within 30 seconds."],
    "answer": 0,
    "explain": "Never stop on railroad tracks. Do not begin crossing unless there is room to get completely across. Expect a train on any track, at any time, in either direction.",
    "ref": "Section 7: Near Railroad or Light Rail Tracks"
  },
  {
    "id": "SHR-34",
    "topic": "sharing-road",
    "q": "When it is dark, a bicyclist should avoid:",
    "choices": ["Wearing dark clothing.","Using a front lamp.","Riding with reflectors."],
    "answer": 0,
    "explain": "At night bicyclists should avoid dark clothing and must use the required lamp and reflectors to stay visible.",
    "ref": "Section 7: Bicycling at Night"
  },
  {
    "id": "SPD-01",
    "topic": "speed",
    "q": "California's Basic Speed Law says you may never drive:",
    "choices": ["Faster than is safe for current conditions.","Faster than the posted speed limit.","Slower than the posted speed limit."],
    "answer": 0,
    "explain": "The Basic Speed Law: never drive faster than is safe for current conditions, regardless of the posted limit.",
    "ref": "Section 8: Manage Your Speed"
  },
  {
    "id": "SPD-02",
    "topic": "speed",
    "drills": ["numbers"],
    "q": "Unless otherwise posted, the maximum speed limit on most California highways is:",
    "choices": ["65 mph.","70 mph.","55 mph."],
    "answer": 0,
    "explain": "Unless otherwise posted, the ideal maximum on most California highways is 65 mph; it is 55 mph on two-lane undivided highways and for vehicles towing trailers.",
    "ref": "Section 8: Manage Your Speed"
  },
  {
    "id": "SPD-03",
    "topic": "speed",
    "drills": ["numbers"],
    "q": "Unless otherwise posted, the speed limit on a two-lane undivided highway is:",
    "choices": ["55 mph.","65 mph.","45 mph."],
    "answer": 0,
    "explain": "The limit is 55 mph on a two-lane undivided highway and for vehicles towing trailers, unless otherwise posted.",
    "ref": "Section 8: Manage Your Speed"
  },
  {
    "id": "SPD-04",
    "topic": "speed",
    "drills": ["numbers"],
    "q": "Unless otherwise posted, the speed limit in business or residential districts is:",
    "choices": ["25 mph.","35 mph.","15 mph."],
    "answer": 0,
    "explain": "The speed limit in business or residential districts is 25 mph unless otherwise posted.",
    "ref": "Section 7: Business or Residential Districts"
  },
  {
    "id": "SPD-05",
    "topic": "speed",
    "drills": ["numbers"],
    "q": "The speed limit within 500 feet of a school while children are outside or crossing the street is:",
    "choices": ["25 mph, and some school zones post limits as low as 15 mph.","35 mph at all times.","20 mph during school hours only."],
    "answer": 0,
    "explain": "The limit is 25 mph within 500 feet of a school while children are outside or crossing; some school zones post limits as low as 15 mph.",
    "ref": "Section 7: Around Children"
  },
  {
    "id": "SPD-06",
    "topic": "speed",
    "drills": ["numbers"],
    "q": "The speed limit at a blind intersection (no stop signs at any corner and limited view) is:",
    "choices": ["15 mph.","25 mph.","10 mph."],
    "answer": 0,
    "explain": "The speed limit for a blind intersection is 15 mph. If your view is blocked, move slowly forward until you can see.",
    "ref": "Section 7: Blind Intersections"
  },
  {
    "id": "SPD-07",
    "topic": "speed",
    "drills": ["numbers"],
    "q": "The speed limit in an alley is:",
    "choices": ["15 mph.","25 mph.","20 mph."],
    "answer": 0,
    "explain": "The speed limit in an alley (a road no wider than 25 feet accessing rear or side entrances) is 15 mph.",
    "ref": "Section 7: Alleys"
  },
  {
    "id": "SPD-08",
    "topic": "speed",
    "drills": ["numbers"],
    "q": "Within 100 feet of a railroad crossing where you cannot see the tracks for 400 feet in both directions, the speed limit is:",
    "choices": ["15 mph, unless the crossing is controlled by gates, a warning signal, or a flagman.","25 mph in all cases.","10 mph in all cases."],
    "answer": 0,
    "explain": "The limit is 15 mph within 100 feet of a crossing when you cannot see 400 feet down the tracks both ways. You may go faster if the crossing is controlled by gates, a warning signal, or a flagman.",
    "ref": "Section 7: Near Railroad or Light Rail Tracks"
  },
  {
    "id": "SPD-09",
    "topic": "speed",
    "drills": ["numbers"],
    "q": "On a wet road, you should reduce your speed by about:",
    "choices": ["5 to 10 mph.","One quarter.","Half."],
    "answer": 0,
    "explain": "Reduce speed 5 to 10 mph on a wet road, by half on packed snow, and to no more than 5 mph on ice.",
    "ref": "Section 8: Slippery Roads"
  },
  {
    "id": "SPD-10",
    "topic": "speed",
    "drills": ["numbers"],
    "q": "On packed snow, you should reduce your speed:",
    "choices": ["By half.","By 5 mph.","To 45 mph."],
    "answer": 0,
    "explain": "On packed snow, cut your speed in half. On ice, slow to no more than 5 mph.",
    "ref": "Section 8: Slippery Roads"
  },
  {
    "id": "SPD-11",
    "topic": "speed",
    "drills": ["numbers"],
    "q": "On ice, you should reduce your speed to:",
    "choices": ["No more than 5 mph.","No more than 25 mph.","Half the posted limit."],
    "answer": 0,
    "explain": "On ice, reduce your speed to no more than 5 mph.",
    "ref": "Section 8: Slippery Roads"
  },
  {
    "id": "SPD-12",
    "topic": "speed",
    "drills": ["numbers"],
    "q": "In a heavy rainstorm or snowstorm, if you cannot see farther than 100 feet, it is not safe to drive faster than:",
    "choices": ["30 mph.","45 mph.","20 mph."],
    "answer": 0,
    "explain": "If you cannot see farther than 100 feet, it is not safe to drive faster than 30 mph.",
    "ref": "Section 8: Slippery Roads"
  },
  {
    "id": "SPD-13",
    "topic": "speed",
    "q": "Driving much slower than the flow of traffic:",
    "choices": ["Can get you cited for blocking normal and reasonable traffic flow.","Is always the safest choice.","Is required in the left lane."],
    "answer": 0,
    "explain": "You must drive slower in heavy traffic or bad weather, but blocking normal and reasonable traffic flow by driving too slowly can also get you cited.",
    "ref": "Section 7: Heavy Traffic or Bad Weather"
  },
  {
    "id": "SPD-14",
    "topic": "speed",
    "q": "If you choose to drive slower than other traffic, you should drive:",
    "choices": ["In the right lane.","In the center lane.","With your emergency flashers on."],
    "answer": 0,
    "explain": "Drive in the right lane if you are slower than other traffic, and move right when a driver behind you wishes to drive faster.",
    "ref": "Section 7: Heavy Traffic or Bad Weather"
  },
  {
    "id": "SPD-15",
    "topic": "speed",
    "q": "When towing a vehicle or trailer, or driving a truck with three or more axles, you must drive:",
    "choices": ["In the far-right lane or a lane marked for slower vehicles.","In the carpool lane.","In the far-left lane."],
    "answer": 0,
    "explain": "Tow vehicles and 3+ axle trucks must use the far-right lane or a marked slow-vehicle lane; if 4+ unmarked lanes, only the two closest to the right edge.",
    "ref": "Section 7: Towing"
  },
  {
    "id": "SPD-16",
    "topic": "speed",
    "drills": ["numbers"],
    "q": "When towing a trailer on a California highway, the maximum speed limit is:",
    "choices": ["55 mph.","65 mph.","45 mph."],
    "answer": 0,
    "explain": "The limit for vehicles towing trailers is 55 mph, the same as two-lane undivided highways.",
    "ref": "Section 8: Manage Your Speed"
  },
  {
    "id": "SPD-17",
    "topic": "speed",
    "q": "Which parts of the road tend to freeze FIRST on cold, wet days?",
    "choices": ["Bridges, overpasses, and shaded areas.","Sunny straightaways.","Freshly paved sections."],
    "answer": 0,
    "explain": "Bridges and overpasses tend to freeze before the rest of the road, and shade from trees or buildings can hide icy spots that freeze first and dry out last.",
    "ref": "Section 8: Slippery Roads"
  },
  {
    "id": "SPD-18",
    "topic": "speed",
    "q": "At what point during a rainfall are roads often the most slippery on a hot day?",
    "choices": ["When it first starts to rain, because oil and dust have not washed away.","After several hours of rain.","Immediately after the rain stops."],
    "answer": 0,
    "explain": "When rain first starts, pavement can be very slippery. Oil and dust on the surface have not yet washed away. Slow down at the first sign of rain.",
    "ref": "Section 8: Slippery Roads"
  },
  {
    "id": "SPD-19",
    "topic": "speed",
    "q": "Regardless of the posted limit, your speed should depend on:",
    "choices": ["The number and speed of vehicles, road surface, pedestrians, and weather.","How much of a hurry you are in.","Your vehicle's top speed."],
    "answer": 0,
    "explain": "Adjust speed for traffic, road surface, bicyclists and pedestrians, weather, and congestion. Conditions control what speed is safe.",
    "ref": "Section 8: Manage Your Speed"
  },
  {
    "id": "SPD-20",
    "topic": "speed",
    "q": "A driver behind you is tailgating and wants to go faster. You should:",
    "choices": ["Maintain your course and speed, then merge right when safe to let them pass.","Brake hard to warn them off.","Speed up to stay ahead of them."],
    "answer": 0,
    "explain": "With a tailgater behind you, maintain your course and speed, then when safe, move right and allow them to pass.",
    "ref": "Section 8: Tailgating"
  },
  {
    "id": "SPD-21",
    "topic": "speed",
    "drills": ["numbers"],
    "q": "An alley is defined as a road no wider than:",
    "choices": ["25 feet.","40 feet.","15 feet."],
    "answer": 0,
    "explain": "An alley is any road no wider than 25 feet used to access the rear or side entrances of buildings or properties. Its speed limit is 15 mph.",
    "ref": "Section 7: Alleys"
  },
  {
    "id": "SPD-22",
    "topic": "speed",
    "q": "If you drive faster OR slower than the posted speed limit, you:",
    "choices": ["May be cited either way.","Can only be cited for speeding.","Cannot be cited if traffic is light."],
    "answer": 0,
    "explain": "If you drive faster or slower than what is safe and reasonable, you may be cited. Slower drivers must not block normal traffic flow.",
    "ref": "Section 7: Heavy Traffic or Bad Weather"
  },
  {
    "id": "SPD-23",
    "topic": "speed",
    "q": "To help traffic congestion, the handbook recommends:",
    "choices": ["Avoiding weaving in and out of freeway lanes.","Using the shoulder to bypass slowdowns.","Following closely to compress traffic."],
    "answer": 0,
    "explain": "Small changes in driving habits help reduce congestion. Avoid weaving in and out of freeway lanes.",
    "ref": "Section 8: Manage Your Speed"
  },
  {
    "id": "SPD-24",
    "topic": "speed",
    "drills": ["numbers"],
    "q": "You approach a blind intersection where your view is blocked. You should:",
    "choices": ["Move slowly forward at no more than 15 mph until you can see.","Honk and proceed at normal speed.","Stop and wait for a gap in sound."],
    "answer": 0,
    "explain": "At a blind intersection, the limit is 15 mph. Move slowly forward until you can see before proceeding.",
    "ref": "Section 7: Blind Intersections"
  },
  {
    "id": "SAF-01",
    "topic": "safe-driving",
    "drills": ["numbers"],
    "q": "To give yourself time to react and avoid hazards, scan the road at least how far ahead of your vehicle?",
    "choices": ["10 seconds.","3 seconds.","1 city block at most."],
    "answer": 0,
    "explain": "Keep your eyes moving and scan the road at least 10 seconds ahead of your vehicle to avoid last-minute moves.",
    "ref": "Section 8: Scan Your Surroundings"
  },
  {
    "id": "SAF-02",
    "topic": "safe-driving",
    "q": "The three-second rule helps you:",
    "choices": ["Keep a safe following distance behind other vehicles.","Time traffic lights.","Judge when to change lanes."],
    "answer": 0,
    "explain": "When the vehicle ahead passes a fixed point, count three seconds. If you pass the same point before finishing, you are following too closely.",
    "ref": "Section 8: Tailgating / Section 14: Glossary"
  },
  {
    "id": "SAF-03",
    "topic": "safe-driving",
    "q": "A vehicle merges in front of you too closely. You should:",
    "choices": ["Take your foot off the accelerator to rebuild space ahead of you.","Brake hard immediately.","Honk and flash your lights."],
    "answer": 0,
    "explain": "If a vehicle merges in too closely, ease off the accelerator. This creates space between you and the vehicle ahead.",
    "ref": "Section 8: Tailgating"
  },
  {
    "id": "SAF-04",
    "topic": "safe-driving",
    "q": "You should create MORE space in front of your vehicle when:",
    "choices": ["Following motorcyclists on metal surfaces or gravel, or when a tailgater is behind you.","Driving in light traffic.","Approaching a green light."],
    "answer": 0,
    "explain": "Add space when a tailgater is behind you and when following motorcyclists on metal surfaces (bridge gratings, railroad tracks) or gravel, where they may fall.",
    "ref": "Section 8: Tailgating"
  },
  {
    "id": "SAF-05",
    "topic": "safe-driving",
    "q": "The correct way to check your blind spots is to:",
    "choices": ["Turn only your head and look over your right or left shoulder out the side windows.","Rely on your mirrors alone.","Turn your whole body and the steering wheel."],
    "answer": 0,
    "explain": "Look over your shoulders out of your side windows, turning only your head, not your whole body or the steering wheel.",
    "ref": "Section 8: Blind Spots"
  },
  {
    "id": "SAF-06",
    "topic": "safe-driving",
    "q": "For most vehicles, blind spots are located:",
    "choices": ["At the sides, slightly behind the driver.","Directly in front of the hood.","Directly behind the rear bumper only."],
    "answer": 0,
    "explain": "Blind spots are areas a driver cannot see when looking ahead or in mirrors. For most vehicles, at the sides slightly behind the driver.",
    "ref": "Section 8: Blind Spots"
  },
  {
    "id": "SAF-07",
    "topic": "safe-driving",
    "q": "At night on open country roads or dark city streets, you should:",
    "choices": ["Use your high-beam headlights where legal, and make sure you can stop within the distance they light.","Use parking lights to reduce glare.","Use your emergency flashers for visibility."],
    "answer": 0,
    "explain": "Use high beams on open country roads and dark city streets where legal, and make sure you can stop within the distance lit by your headlights.",
    "ref": "Section 8: Darkness"
  },
  {
    "id": "SAF-08",
    "topic": "safe-driving",
    "q": "An oncoming vehicle's headlights are blinding you. You should:",
    "choices": ["Look toward the right edge of your lane and watch the vehicle out of the corner of your eye.","Look directly at the headlights to stay oriented.","Turn on your high beams to signal the driver."],
    "answer": 0,
    "explain": "Do not look into oncoming headlights. Look toward the right edge of your lane. Never retaliate with your own high beams; it makes it harder for both of you.",
    "ref": "Section 8: Darkness"
  },
  {
    "id": "SAF-09",
    "topic": "safe-driving",
    "q": "When you leave a brightly lit place at night, you should:",
    "choices": ["Drive slowly until your eyes adjust to the darkness.","Turn on the interior dome light.","Drive faster to reach lit areas sooner."],
    "answer": 0,
    "explain": "Drive slowly after leaving a brightly lit place until your eyes adjust to the darkness.",
    "ref": "Section 8: Darkness"
  },
  {
    "id": "SAF-10",
    "topic": "safe-driving",
    "q": "A vehicle with only ONE visible light drives toward you at night. You should:",
    "choices": ["Drive as far to the right as possible. It could be a bicyclist, motorcyclist, or a vehicle with a missing headlight.","Assume it is a motorcycle and hold your position.","Flash your high beams to warn it."],
    "answer": 0,
    "explain": "When a one-light vehicle approaches, drive as far right as possible. It could be a bicyclist, motorcyclist, or vehicle missing a headlight.",
    "ref": "Section 8: Darkness"
  },
  {
    "id": "SAF-11",
    "topic": "safe-driving",
    "q": "To manage sun glare, the handbook recommends:",
    "choices": ["Keeping your windshield clean, wearing polarized sunglasses, and trying to avoid driving at sunrise and sunset.","Following other vehicles closely so they block the sun.","Wearing any dark glasses and driving faster."],
    "answer": 0,
    "explain": "Keep the windshield clean inside and out, wear polarized sunglasses, keep space around your vehicle, and try to avoid driving during sunrise and sunset.",
    "ref": "Section 8: Sun Glare"
  },
  {
    "id": "SAF-12",
    "topic": "safe-driving",
    "q": "Your vehicle starts to skid on a slippery surface. You should:",
    "choices": ["Slowly remove your foot from the accelerator, avoid braking, and steer in the direction of the skid.","Brake hard and steer opposite the skid.","Accelerate out of the skid."],
    "answer": 0,
    "explain": "In a slippery-surface skid: ease off the accelerator, do not use the brakes, turn the steering wheel in the direction of the skid, and try to get a wheel on dry pavement.",
    "ref": "Section 8: Slippery Surface Skids"
  },
  {
    "id": "SAF-13",
    "topic": "safe-driving",
    "q": "A locked wheel skid is usually caused by:",
    "choices": ["Braking too hard when going too fast.","Underinflated tires.","Turning at low speed."],
    "answer": 0,
    "explain": "Locked wheel skids come from braking too hard at speed: the vehicle skids no matter which way you steer.",
    "ref": "Section 8: Locked Wheel Skids"
  },
  {
    "id": "SAF-14",
    "topic": "safe-driving",
    "q": "Your vehicle has a four-wheel antilock braking system (ABS) and enters a locked wheel skid. You should:",
    "choices": ["Apply firm pressure on the brake pedal.","Pump the brakes rapidly.","Release the brakes entirely and coast."],
    "answer": 0,
    "explain": "With four-wheel ABS, apply firm pressure to the brake pedal. Without ABS, quickly pump the brakes until at a safe speed.",
    "ref": "Section 8: Locked Wheel Skids"
  },
  {
    "id": "SAF-15",
    "topic": "safe-driving",
    "q": "If your vehicle does NOT have ABS and begins to skid while braking, you should:",
    "choices": ["Quickly pump your brakes until you are at a safe speed.","Hold the brake pedal to the floor.","Shift into park."],
    "answer": 0,
    "explain": "Without ABS, quickly pump the brakes. If the pedal sinks to the floor, pump the brakes, downshift to a lower gear, and try the emergency brake.",
    "ref": "Section 8: Locked Wheel Skids"
  },
  {
    "id": "SAF-16",
    "topic": "safe-driving",
    "q": "If your brakes get wet, you can dry them by:",
    "choices": ["Lightly pressing the accelerator and brake pedals at the same time, only until the brakes dry.","Driving faster so wind dries them.","Pulling over and waiting an hour."],
    "answer": 0,
    "explain": "Dry wet brakes by lightly pressing the accelerator and brake at the same time. Only until they dry.",
    "ref": "Section 8: Locked Wheel Skids"
  },
  {
    "id": "SAF-17",
    "topic": "safe-driving",
    "q": "Hydroplaning happens when:",
    "choices": ["Your tires lose all contact with the road and ride on water.","Your engine floods in deep water.","Your windshield fogs over in rain."],
    "answer": 0,
    "explain": "Hydroplaning is when the vehicle rides on water because the tires lose contact with the road: a slight steering change, braking, or wind gust can throw the vehicle into a skid.",
    "ref": "Section 8: Hydroplaning"
  },
  {
    "id": "SAF-18",
    "topic": "safe-driving",
    "q": "If your vehicle starts to hydroplane, you should:",
    "choices": ["Slow down gradually and not apply the brakes.","Brake firmly to cut through the water.","Accelerate to regain traction."],
    "answer": 0,
    "explain": "Slow down gradually. Do not brake. Sudden braking while hydroplaning can cause you to lose control.",
    "ref": "Section 8: Hydroplaning"
  },
  {
    "id": "SAF-19",
    "topic": "safe-driving",
    "q": "You hear sloshing sounds from your tires in the rain. You should:",
    "choices": ["Slow down. You may be close to hydroplaning.","Speed up to push the water away.","Turn on cruise control for steadiness."],
    "answer": 0,
    "explain": "Slow down if you hear sloshing from the tires, steer around standing water when possible, and slow before changing lanes or direction.",
    "ref": "Section 8: Hydroplaning"
  },
  {
    "id": "SAF-20",
    "topic": "safe-driving",
    "q": "If your vehicle is stuck in snow or mud, you should:",
    "choices": ["Shift into low gear, keep the wheels straight, and rock the vehicle gently forward and backward without spinning the wheels.","Floor the accelerator until the wheels grip.","Turn the wheels fully to one side and accelerate."],
    "answer": 0,
    "explain": "Use a gentle forward-backward rocking motion in low gear with wheels straight. Avoid spinning the wheels. Place boards or branches under tires only while the vehicle is stopped.",
    "ref": "Section 8: Stuck in Snow or Mud"
  },
  {
    "id": "SAF-21",
    "topic": "safe-driving",
    "q": "You encounter a flooded stretch of road. The handbook says it is best to:",
    "choices": ["Find another route. Depth is hard to judge and the road may be too dangerous to cross.","Cross quickly to minimize time in the water.","Follow the vehicle ahead closely through the water."],
    "answer": 0,
    "explain": "It may be impossible to judge flood depth by looking. It is best to find another route; if you have no option, drive slowly and test your brakes afterward.",
    "ref": "Section 8: Flooded Roads"
  },
  {
    "id": "SAF-22",
    "topic": "safe-driving",
    "q": "When driving in high winds, you should:",
    "choices": ["Reduce speed, keep a firm grip on the wheel, and avoid using cruise control.","Use cruise control for stability.","Drive close behind large trucks for shelter."],
    "answer": 0,
    "explain": "In high winds: slow down, maintain a firm hand position, watch for debris, do not use cruise control, and consider pulling over until the storm passes.",
    "ref": "Section 8: High Winds"
  },
  {
    "id": "SAF-23",
    "topic": "safe-driving",
    "q": "In heavy fog, you should drive with your:",
    "choices": ["Low-beam headlights, because high beams reflect back and cause glare.","High-beam headlights for maximum distance.","Parking lights only."],
    "answer": 0,
    "explain": "Use low beams in fog. High beams reflect back and cause glare. Never drive using only parking or fog lights. If fog is too thick, pull off the road and use your emergency flashers.",
    "ref": "Section 8: Fog or Heavy Smoke"
  },
  {
    "id": "SAF-24",
    "topic": "safe-driving",
    "q": "During a law enforcement traffic break (an officer weaving across lanes with emergency lights on), you should:",
    "choices": ["Turn on your emergency flashers, slow gradually to the officer's speed, and never pass the patrol vehicle.","Pass the patrol vehicle on the right.","Stop immediately in your lane."],
    "answer": 0,
    "explain": "Turn on your flashers to warn others, decrease speed gradually to match the officer, keep a safe distance, and do not pass or speed up until the officer turns off their emergency lights.",
    "ref": "Section 8: Law Enforcement Traffic Breaks"
  },
  {
    "id": "SAF-25",
    "topic": "safe-driving",
    "q": "Your passenger is 15 years old and not wearing a seat belt. Who can be ticketed?",
    "choices": ["You, the driver.","Only the passenger.","No one. Seat belts are optional for passengers."],
    "answer": 0,
    "explain": "You and all passengers must wear seat belts. If a passenger is under 16 and unbelted, you (the driver) can be ticketed.",
    "ref": "Section 8: Seat Belts"
  },
  {
    "id": "SAF-26",
    "topic": "safe-driving",
    "q": "In a collision, if you are not wearing a seat belt, your body:",
    "choices": ["Keeps moving at the vehicle's previous speed until it hits the dashboard or windshield.","Stops at the same instant as the vehicle.","Is safest if braced against the dashboard."],
    "answer": 0,
    "explain": "When the vehicle stops in a collision, you keep moving at the speed you were traveling until you hit the dashboard or windshield. That is why belts matter.",
    "ref": "Section 8: Seat Belts"
  },
  {
    "id": "SAF-27",
    "topic": "safe-driving",
    "q": "The correct way to wear a seat belt's shoulder harness is:",
    "choices": ["Across your shoulder and chest with little to no slack, never under your arm or behind your back.","Under your arm for comfort.","Behind your back if you are tall."],
    "answer": 0,
    "explain": "Wear the shoulder harness across your shoulder and chest, snug, and the lap belt low across your hips, never the shoulder belt under your arm or behind your back.",
    "ref": "Section 8: Seat Belts"
  },
  {
    "id": "SAF-28",
    "topic": "safe-driving",
    "q": "If you are pregnant, wear the lap belt:",
    "choices": ["As low as possible under your abdomen.","Across the middle of your abdomen.","Not at all. Pregnant drivers are exempt."],
    "answer": 0,
    "explain": "Pregnant drivers should wear the lap belt as low as possible under the abdomen, with the shoulder strap between the breasts and to the side of the abdomen's bulge.",
    "ref": "Section 8: Seat Belts"
  },
  {
    "id": "SAF-29",
    "topic": "safe-driving",
    "q": "A child who is under 2 years old, under 40 pounds, and under 3 feet 4 inches tall must ride in:",
    "choices": ["A rear-facing child passenger restraint system.","A forward-facing booster seat.","A regular seat belt in the back seat."],
    "answer": 0,
    "explain": "Children under 2 years old, under 40 pounds, and under 3'4\" must be secured in a rear-facing child passenger restraint system.",
    "ref": "Section 8: Child Restraint System and Safety Seats"
  },
  {
    "id": "SAF-30",
    "topic": "safe-driving",
    "q": "A child in a rear-facing child passenger restraint system may NOT ride:",
    "choices": ["In the front seat of an airbag-equipped vehicle.","In the back seat of a two-door car.","In any vehicle with side airbags."],
    "answer": 0,
    "explain": "A rear-facing child seat may not be placed in the front seat of a vehicle equipped with an airbag.",
    "ref": "Section 8: Child Restraint System and Safety Seats"
  },
  {
    "id": "SAF-31",
    "topic": "safe-driving",
    "q": "Children under 8 years old (or shorter than 4 feet 9 inches) generally must be secured:",
    "choices": ["In a child passenger restraint system in a rear seat.","With a regular seat belt in any seat.","In the front seat where you can watch them."],
    "answer": 0,
    "explain": "Children under 8 or under 4'9\" must ride in a child passenger restraint system in a rear seat, with limited exceptions (no rear seat, all rear seats occupied by younger children, medical reasons, etc.).",
    "ref": "Section 8: Child Restraint System and Safety Seats"
  },
  {
    "id": "SAF-32",
    "topic": "safe-driving",
    "drills": ["numbers"],
    "q": "A child may use a regular safety belt (instead of a child restraint) once they are:",
    "choices": ["8 years old or older, or at least 4 feet 9 inches tall.","6 years old.","Tall enough to see out the window."],
    "answer": 0,
    "explain": "Children 8 or older, or at least 4'9\" tall, may use a properly secured safety belt meeting federal standards.",
    "ref": "Section 8: Child Restraint System and Safety Seats"
  },
  {
    "id": "SAF-33",
    "topic": "safe-driving",
    "drills": ["numbers"],
    "q": "You should sit at least how far from the steering wheel's airbag cover?",
    "choices": ["10 inches, measured from the center of the steering wheel to your breastbone.","4 inches.","20 inches, even if you cannot reach the pedals."],
    "answer": 0,
    "explain": "Ride at least 10 inches from the airbag cover (measured to your breastbone) while keeping full control. Passengers should also sit 10 inches from the passenger airbag.",
    "ref": "Section 8: Air Bags"
  },
  {
    "id": "SAF-34",
    "topic": "safe-driving",
    "drills": ["numbers"],
    "q": "It is illegal to leave a child unattended in a vehicle if the child is:",
    "choices": ["Six years old or younger, unless supervised by someone at least 12 years old.","Under 10, in all cases.","Any age, if the windows are up."],
    "answer": 0,
    "explain": "A child six or younger may not be left unattended; they may be left under the supervision of a person at least 12 years old. Hot vehicles are deadly. Temperatures rise rapidly even with a window open.",
    "ref": "Section 8: Unattended Children and Pets"
  },
  {
    "id": "SAF-35",
    "topic": "safe-driving",
    "q": "While driving, an adult may use a cell phone:",
    "choices": ["Only in hands-free mode, mounted correctly, using a single swipe or touch.","Held in one hand for short calls.","For texting at red lights."],
    "answer": 0,
    "explain": "Driving with a handheld phone is illegal. Adults should use hands-free only when necessary. Mounted on the windshield, dashboard, or center console, operated with a single swipe or touch.",
    "ref": "Section 8: Cell Phones and Texting"
  },
  {
    "id": "SAF-36",
    "topic": "safe-driving",
    "q": "A driver under 18 may use a cell phone while driving:",
    "choices": ["Only to make a call for emergency assistance.","In hands-free mode.","For navigation apps only."],
    "answer": 0,
    "explain": "Minors may not use a cell phone or electronic wireless device while driving, even hands-free, except to call for emergency assistance.",
    "ref": "Section 8: Minors and Cell Phones"
  },
  {
    "id": "SAF-37",
    "topic": "safe-driving",
    "q": "Your phone rings while you are driving. The handbook says you should:",
    "choices": ["Let the call go to voicemail; if you must call back, pull safely off the road.","Answer quickly to get it over with.","Answer only if the caller is family."],
    "answer": 0,
    "explain": "Do not answer your phone while driving. Let it go to voicemail. If you must return or make a call, pull safely off the road first.",
    "ref": "Section 8: Cell Phones and Texting"
  },
  {
    "id": "SAF-38",
    "topic": "safe-driving",
    "q": "Carbon monoxide from a vehicle's exhaust is dangerous because it is:",
    "choices": ["A deadly gas you cannot smell.","Visible only at night.","Only produced by old vehicles."],
    "answer": 0,
    "explain": "Carbon monoxide is a deadly, odorless gas. Never start your vehicle inside a closed garage. Symptoms of poisoning include tiredness, dizziness, nausea, headache, and ringing in the ears.",
    "ref": "Section 8: Be Aware of Carbon Monoxide"
  },
  {
    "id": "SAF-39",
    "topic": "safe-driving",
    "q": "You have a tire blowout at speed. You should:",
    "choices": ["Hold the wheel with both hands, gradually release the accelerator, and pull off the road once the vehicle stabilizes.","Brake hard immediately.","Take your foot off the accelerator abruptly and steer to the shoulder."],
    "answer": 0,
    "explain": "Do not panic: hold the wheel firmly, maintain speed briefly if safe, gradually release the accelerator, steer where you want to go, then slow and pull off when stable. Sudden braking can cause loss of control.",
    "ref": "Section 8: Tire Blowouts"
  },
  {
    "id": "SAF-40",
    "topic": "safe-driving",
    "q": "Your wheels drift off the pavement onto the shoulder. You should:",
    "choices": ["Grip the wheel firmly, ease off the gas, brake gently, then steer back onto the pavement after checking traffic.","Yank the wheel back toward the road immediately.","Accelerate to climb back onto the pavement."],
    "answer": 0,
    "explain": "Grip the wheel firmly, remove your foot from the accelerator, brake gently, check for traffic, and carefully steer back on. Jerking the wheel can send you into oncoming traffic.",
    "ref": "Section 8: Driving Off the Pavement"
  },
  {
    "id": "SAF-41",
    "topic": "safe-driving",
    "q": "Your engine is overheating in extreme heat. The handbook recommends:",
    "choices": ["Watching the temperature gauge, avoiding long high-speed driving, and turning off the air conditioner.","Turning the air conditioner to maximum.","Ignoring it. Modern engines cannot overheat."],
    "answer": 0,
    "explain": "In extreme heat: watch the temperature gauge, avoid driving at high speeds for long periods, and turn off the air conditioner.",
    "ref": "Section 8: Overheating Conditions"
  },
  {
    "id": "SAF-42",
    "topic": "safe-driving",
    "q": "Your vehicle breaks down on the freeway. After pulling onto the right shoulder, you should:",
    "choices": ["Exit on the right side away from traffic if you must get out, call 511 or use a call box, and wait inside with your seat belt on.","Stand behind your vehicle to wave traffic around.","Walk along the shoulder to the nearest exit."],
    "answer": 0,
    "explain": "Pull to the right shoulder, exit on the right side away from traffic if needed, dial 511 or find a call box, then return and stay in your vehicle with your seat belt on until help arrives.",
    "ref": "Section 8: If Your Vehicle Becomes Disabled on the Freeway"
  },
  {
    "id": "SAF-43",
    "topic": "safe-driving",
    "q": "Your vehicle stalls on railroad tracks and warning lights show a train approaching. You should:",
    "choices": ["Get everyone out immediately and run diagonally away from the tracks toward the direction the train is coming from, then call 911.","Try to restart the engine until the last moment.","Push the vehicle off the tracks yourself."],
    "answer": 0,
    "explain": "Exit immediately and run diagonally away from the tracks in the direction the train is coming from (so debris flies away from you), then call 911. If no train is coming, call the posted railroad emergency number, then 911.",
    "ref": "Section 8: Disabled Vehicles on Railroad Tracks"
  },
  {
    "id": "SAF-44",
    "topic": "safe-driving",
    "q": "You face two hazards at once: an oncoming vehicle to your left and a bicyclist ahead on your right. The best strategy is to:",
    "choices": ["Take one danger at a time. Slow down, let the oncoming vehicle pass, then move left to give the bicyclist at least three feet.","Split the difference and drive between them.","Stop in your lane until both are gone."],
    "answer": 0,
    "explain": "Give the most dangerous hazard the most space, and take dangers one at a time: let the oncoming vehicle pass first, then pass the bicyclist with plenty of room.",
    "ref": "Section 8: Choose Between Hazards"
  },
  {
    "id": "SAF-45",
    "topic": "safe-driving",
    "q": "Common driving distractions listed in the handbook include:",
    "choices": ["Looking at a phone, changing music, applying makeup, and attending to children or pets.","Checking your mirrors and blind spots.","Scanning the road 10 seconds ahead."],
    "answer": 0,
    "explain": "Avoid distractions: phones, navigation systems, children and pets, changing music or volume, applying makeup, or shaving. Cell phones are the main source of distracted driving.",
    "ref": "Section 8: Do Not Drive Distracted"
  },
  {
    "id": "SAF-46",
    "topic": "safe-driving",
    "q": "Make room for vehicles entering a freeway:",
    "choices": ["Even if you have the right-of-way.","Only when they signal.","Never. Merging traffic must always wait."],
    "answer": 0,
    "explain": "Be aware of what is at your side: make space for vehicles entering freeways even when you technically have the right-of-way.",
    "ref": "Section 8: Know What Is at Your Side"
  },
  {
    "id": "DUI-01",
    "topic": "alcohol-drugs",
    "q": "California's DUI laws apply to:",
    "choices": ["Both alcohol and any drug that affects your ability to drive safely, including prescription and over-the-counter medications.","Alcohol and illegal drugs only.","Alcohol only."],
    "answer": 0,
    "explain": "The law makes no difference between illegal drugs and medications from a doctor or pharmacy. Anything that affects your ability to drive safely counts.",
    "ref": "Section 9: Alcohol and Drugs"
  },
  {
    "id": "DUI-02",
    "topic": "alcohol-drugs",
    "drills": ["numbers"],
    "q": "It is illegal for a driver 21 or older to drive with a blood alcohol concentration (BAC) of:",
    "choices": ["0.08% or higher.","0.05% or higher.","0.10% or higher."],
    "answer": 0,
    "explain": "The limit for drivers over 21 is 0.08%. You can still be arrested for DUI below that if you are impaired.",
    "ref": "Section 9: BAC Limits"
  },
  {
    "id": "DUI-03",
    "topic": "alcohol-drugs",
    "drills": ["numbers"],
    "q": "For drivers under 21, it is illegal to drive with a BAC of:",
    "choices": ["0.01% or higher.","0.05% or higher.","0.08% or higher."],
    "answer": 0,
    "explain": "California has zero tolerance for underage drinking and driving: 0.01% or higher is illegal for drivers under 21 (and for anyone on DUI probation).",
    "ref": "Section 9: BAC Limits"
  },
  {
    "id": "DUI-04",
    "topic": "alcohol-drugs",
    "drills": ["numbers"],
    "q": "For a driver operating a vehicle that requires a commercial driver's license, the BAC limit is:",
    "choices": ["0.04%.","0.08%.","0.01%."],
    "answer": 0,
    "explain": "The limit is 0.04% for commercial-license vehicles and for driving a passenger for hire.",
    "ref": "Section 9: BAC Limits"
  },
  {
    "id": "DUI-05",
    "topic": "alcohol-drugs",
    "q": "Your BAC is below the legal limit. Can you still be convicted of DUI?",
    "choices": ["Yes. If you are impaired, you may be arrested and convicted even without a BAC measurement.","No: a legal BAC is a complete defense.","Only if you fail a written test."],
    "answer": 0,
    "explain": "Almost everyone feels negative effects below the legal limit. Depending on impairment, you can be arrested and convicted of DUI even without a BAC measurement.",
    "ref": "Section 9: BAC Limits"
  },
  {
    "id": "DUI-06",
    "topic": "alcohol-drugs",
    "q": "You are carrying a previously opened bottle of an alcoholic beverage in your vehicle. It must be kept:",
    "choices": ["In the trunk or a place where passengers do not sit, not the glove box.","In the glove box.","Under a seat."],
    "answer": 0,
    "explain": "Open containers must go in the trunk or somewhere passengers do not sit. Keeping an open container of alcohol in the glove box is specifically illegal.",
    "ref": "Section 9: Alcohol or Cannabis Products in a Vehicle"
  },
  {
    "id": "DUI-07",
    "topic": "alcohol-drugs",
    "q": "Drinking alcohol or smoking/eating cannabis products while riding as a PASSENGER in a regular vehicle is:",
    "choices": ["Illegal, though an exception exists for passengers in a bus, taxi, camper, or motorhome.","Legal as long as the driver stays sober.","Legal in the back seat only."],
    "answer": 0,
    "explain": "It is illegal to drink alcohol or smoke or eat cannabis while driving OR riding as a passenger. The law does not apply to passengers in a bus, taxi, camper, or motorhome.",
    "ref": "Section 9: Alcohol or Cannabis Products in a Vehicle"
  },
  {
    "id": "DUI-08",
    "topic": "alcohol-drugs",
    "q": "By driving in California, you consent to:",
    "choices": ["A breath, blood, or urine test if an officer suspects you of DUI.","Vehicle searches at any time.","Weekly driving record reviews."],
    "answer": 0,
    "explain": "When you drive in California you consent to chemical testing when an officer suspects DUI. Even after a breath test you may still be required to take a blood or urine test to detect drugs.",
    "ref": "Section 9: DUI Arrests"
  },
  {
    "id": "DUI-09",
    "topic": "alcohol-drugs",
    "q": "If you refuse to take a blood or urine test when an officer suspects you of DUI:",
    "choices": ["DMV will suspend or revoke your driving privilege for one year.","Nothing happens if you were not drinking.","You get a $50 fine."],
    "answer": 0,
    "explain": "Refusing a chemical test leads DMV to suspend or revoke your driving privilege for one year.",
    "ref": "Section 9: Alcohol and Drugs"
  },
  {
    "id": "DUI-10",
    "topic": "alcohol-drugs",
    "drills": ["numbers"],
    "q": "If you are arrested for DUI, the officer may take your driver's license and issue you a temporary license valid for:",
    "choices": ["30 days.","10 days.","90 days."],
    "answer": 0,
    "explain": "Under the Administrative Per Se law, the officer may take your license and give you a 30-day temporary license. You may request a DMV hearing within 10 days of arrest.",
    "ref": "Section 9: DUI Arrests"
  },
  {
    "id": "DUI-11",
    "topic": "alcohol-drugs",
    "drills": ["numbers"],
    "q": "After a DUI arrest, how long do you have to request a DMV administrative hearing?",
    "choices": ["10 days from the date of your arrest.","30 days from your court date.","One year."],
    "answer": 0,
    "explain": "You may request a DMV administrative hearing within 10 days from the date of your DUI arrest.",
    "ref": "Section 9: DUI Arrests"
  },
  {
    "id": "DUI-12",
    "topic": "alcohol-drugs",
    "q": "If you are convicted of a DUI, DMV will suspend or revoke your driving privilege for:",
    "choices": ["One year.","Six months.","Thirty days."],
    "answer": 0,
    "explain": "A DUI conviction brings a one-year suspension or revocation, plus a required DUI program, an SR 22/SR 1P insurance certificate, fees, and possibly an ignition interlock device.",
    "ref": "Section 9: DUI Convictions"
  },
  {
    "id": "DUI-13",
    "topic": "alcohol-drugs",
    "q": "In addition to license suspension, a DUI conviction can include:",
    "choices": ["Up to six months in jail, a fine, and vehicle impoundment with storage fees.","Community service only.","A warning for first offenses."],
    "answer": 0,
    "explain": "Additional DUI penalties include up to six months in jail, fines, impoundment with storage fees, and civil lawsuits if you caused serious injury or death.",
    "ref": "Section 9: DUI Convictions"
  },
  {
    "id": "DUI-14",
    "topic": "alcohol-drugs",
    "drills": ["numbers"],
    "q": "A DUI conviction stays on your driver's record for:",
    "choices": ["10 years.","3 years.","5 years."],
    "answer": 0,
    "explain": "All DUI convictions remain on your record for 10 years. Additional DUIs during that time bring additional penalties.",
    "ref": "Section 9: DUI Convictions"
  },
  {
    "id": "DUI-15",
    "topic": "alcohol-drugs",
    "q": "A driver under 21 may carry an alcoholic beverage in their vehicle only when:",
    "choices": ["The container is full, sealed, and unopened AND a person 21 or older is in the vehicle (or a work exception applies).","The container is hidden from view.","They are driving directly home from a store."],
    "answer": 0,
    "explain": "Under-21 drivers may not carry alcohol unless accompanied by someone 21+, with the container full, sealed, and unopened, or when working for someone with an off-site liquor sales license.",
    "ref": "Section 9: Drivers Under 21"
  },
  {
    "id": "DUI-16",
    "topic": "alcohol-drugs",
    "drills": ["numbers"],
    "q": "A driver under 21 caught with alcohol in their vehicle may have the vehicle impounded for up to:",
    "choices": ["30 days.","10 days.","6 months."],
    "answer": 0,
    "explain": "Law enforcement can impound the vehicle for up to 30 days; the court may fine the driver and suspend their license for one year, or delay their first license for up to one year.",
    "ref": "Section 9: Drivers Under 21"
  },
  {
    "id": "DUI-17",
    "topic": "alcohol-drugs",
    "q": "A driver under 21 whose preliminary alcohol screening (PAS) shows a BAC of 0.05% or higher:",
    "choices": ["May be required to take a breath or blood test and can be arrested for DUI.","Gets a warning only.","Is within the legal limit for their age."],
    "answer": 0,
    "explain": "If the PAS shows 0.05% or higher, the officer may require a breath or blood test; a confirming result can mean arrest and suspension.",
    "ref": "Section 9: Drivers Under 21"
  },
  {
    "id": "DUI-18",
    "topic": "alcohol-drugs",
    "q": "A person 13 to 20 years old convicted of operating a BICYCLE under the influence:",
    "choices": ["May have their driving privilege suspended or delayed for one year.","Faces no driving consequences.","Loses bicycle privileges only."],
    "answer": 0,
    "explain": "A bicycle DUI conviction at ages 13-20 can suspend or delay your driving privilege for one year once you are eligible to drive.",
    "ref": "Section 9: Alcohol and Drugs"
  },
  {
    "id": "DUI-19",
    "topic": "alcohol-drugs",
    "drills": ["numbers"],
    "q": "According to the handbook's BAC information, one drink equals:",
    "choices": ["1.5 oz of 80-proof liquor, 12 oz of 5% beer, or 5 oz of 12% wine.","Any glass of alcohol regardless of size.","8 oz of any beer."],
    "answer": 0,
    "explain": "One drink = 1.5 oz of 80-proof liquor, 12 oz of 5% beer, or 5 oz of 12% wine, and even one drink can affect your driving.",
    "ref": "Section 9: BAC Limits"
  },
  {
    "id": "DUI-20",
    "topic": "alcohol-drugs",
    "q": "As you age, your tolerance to alcohol:",
    "choices": ["Decreases, increasing the risk of alcohol-related driving problems.","Increases steadily.","Stays exactly the same."],
    "answer": 0,
    "explain": "Tolerance to alcohol decreases with age, which increases the risk of alcohol-related driving problems.",
    "ref": "Section 9: Alcohol and Drugs"
  },
  {
    "id": "DUI-21",
    "topic": "alcohol-drugs",
    "q": "Which statement about alcohol and boating is true?",
    "choices": ["It is illegal to drink alcohol or take drugs while operating a boat, jet ski, or similar vessel.","BAC laws do not apply on the water.","Only the boat owner must stay sober."],
    "answer": 0,
    "explain": "It is illegal to drink alcohol or take drugs when operating a boat, jet ski, water skis, aquaplane, or similar vessels.",
    "ref": "Section 9: BAC Limits"
  },
  {
    "id": "DUI-22",
    "topic": "alcohol-drugs",
    "q": "Drinking 'excessive amounts of alcohol in any form' before driving includes:",
    "choices": ["Medications like cough syrup.","Only beer, wine, and liquor.","Only drinks bought at a bar."],
    "answer": 0,
    "explain": "It is illegal to drive after drinking excessive alcohol in ANY form, including medications like cough syrup.",
    "ref": "Section 9: Alcohol and Drugs"
  },
  {
    "id": "DUI-23",
    "topic": "alcohol-drugs",
    "q": "A DUI conviction may require installing what device on your vehicle?",
    "choices": ["An ignition interlock device (IID).","A GPS tracker.","A speed limiter."],
    "answer": 0,
    "explain": "A DUI conviction may require an ignition interlock device (IID), which prevents the vehicle from starting if alcohol is detected.",
    "ref": "Section 9: DUI Convictions"
  },
  {
    "id": "DUI-24",
    "topic": "alcohol-drugs",
    "q": "After a DUI conviction, before driving again you must file a:",
    "choices": ["California Insurance Proof Certificate (SR 22/SR 1P).","Report of Traffic Accident (SR 1).","Notice of Transfer and Release of Liability."],
    "answer": 0,
    "explain": "A DUI conviction requires completing a DUI program and filing a California Insurance Proof Certificate (SR 22/SR 1P), plus applicable fees.",
    "ref": "Section 9: DUI Convictions"
  },
  {
    "id": "DUI-25",
    "topic": "alcohol-drugs",
    "drills": ["numbers"],
    "q": "The BAC table subtracts how much for each 40 minutes that lapse between drinks?",
    "choices": ["0.01%.","0.05%.","0.10%."],
    "answer": 0,
    "explain": "Subtract 0.01% from estimated BAC for each 40 minutes between drinks, but remember, even one drink can affect your driving.",
    "ref": "Section 9: BAC Limits"
  },
  {
    "id": "DUI-26",
    "topic": "alcohol-drugs",
    "drills": ["numbers"],
    "q": "For a driver transporting a passenger for hire (such as a rideshare driver with a passenger), the BAC limit is:",
    "choices": ["0.04%.","0.08%.","0.06%."],
    "answer": 0,
    "explain": "It is illegal to drive with a BAC of 0.04% or higher when driving a passenger for hire.",
    "ref": "Section 9: BAC Limits"
  },
  {
    "id": "DUI-27",
    "topic": "alcohol-drugs",
    "drills": ["numbers"],
    "q": "A driver on DUI probation may not drive with a BAC of:",
    "choices": ["0.01% or higher, at any age.","0.04% or higher.","0.08% or higher."],
    "answer": 0,
    "explain": "On DUI probation the limit is 0.01% or higher at any age.",
    "ref": "Section 9: BAC Limits"
  },
  {
    "id": "DUI-28",
    "topic": "alcohol-drugs",
    "q": "If a driver under 21 is convicted of DUI with a BAC of 0.01% or higher, DMV may:",
    "choices": ["Revoke their driving privilege for one year and require a licensed DUI program.","Issue a warning letter for a first offense.","Reduce their speed limit."],
    "answer": 0,
    "explain": "An under-21 DUI conviction at 0.01%+ can bring a one-year revocation and a required DUI education program.",
    "ref": "Section 9: Drivers Under 21"
  },
  {
    "id": "REC-01",
    "topic": "records-penalties",
    "drills": ["numbers"],
    "q": "As an adult, your license may be suspended if your record shows:",
    "choices": ["4 points in 12 months, 6 points in 24 months, or 8 points in 36 months.","2 points in any year.","10 points in 5 years."],
    "answer": 0,
    "explain": "DMV may consider you a negligent driver at 4 points in 12 months, 6 in 24 months, or 8 in 36 months.",
    "ref": "Section 7: Points on Your Driver's Record"
  },
  {
    "id": "REC-02",
    "topic": "records-penalties",
    "drills": ["numbers"],
    "q": "Traffic convictions and collisions stay on your driving record for:",
    "choices": ["36 months or longer, depending on the type of conviction.","12 months.","24 months in all cases."],
    "answer": 0,
    "explain": "Convictions and collisions stay on your record for 36 months or longer depending on the conviction type (DUIs stay 10 years).",
    "ref": "Section 7: Points on Your Driver's Record"
  },
  {
    "id": "REC-03",
    "topic": "records-penalties",
    "drills": ["numbers"],
    "q": "How often can you attend traffic violator school to keep a one-point citation from being reported to your insurance company?",
    "choices": ["Once in any 18-month period.","Once per year.","As often as a judge allows."],
    "answer": 0,
    "explain": "A judge may offer traffic violator school for a one-point violation once in any 18-month period. The citation stays on your record but is not reported to your insurance company.",
    "ref": "Section 7: Traffic Violator School"
  },
  {
    "id": "REC-04",
    "topic": "records-penalties",
    "q": "When you sign a traffic ticket, you are:",
    "choices": ["Promising to appear in traffic court.","Admitting guilt.","Paying the fine."],
    "answer": 0,
    "explain": "Signing the ticket is a promise to appear in court. Failing to appear (FTA) goes on your record, and DMV may suspend your license until you appear.",
    "ref": "Section 7: Points on Your Driver's Record"
  },
  {
    "id": "REC-05",
    "topic": "records-penalties",
    "q": "If you fail to appear (FTA) in court after signing a traffic ticket:",
    "choices": ["DMV may suspend your driving privilege until you appear.","The ticket is dismissed automatically.","You get one extra month to appear."],
    "answer": 0,
    "explain": "An FTA goes on your driver's record and DMV may suspend your driving privilege until you appear in court.",
    "ref": "Section 7: Points on Your Driver's Record"
  },
  {
    "id": "REC-06",
    "topic": "records-penalties",
    "q": "DMV will revoke your driving privilege if you are convicted of:",
    "choices": ["Hit-and-run, or reckless driving that resulted in injury.","Two parking tickets.","One speeding violation."],
    "answer": 0,
    "explain": "DMV revokes your driving privilege for a hit-and-run conviction or reckless driving that resulted in injury.",
    "ref": "Section 7: Suspension or Revocation"
  },
  {
    "id": "REC-07",
    "topic": "records-penalties",
    "q": "Using a motor vehicle to flee or evade law enforcement is:",
    "choices": ["A misdemeanor punishable by up to one year in county jail.","An infraction with a small fine.","Legal if you later prove innocence."],
    "answer": 0,
    "explain": "Evading law enforcement is a misdemeanor punishable by imprisonment in a county jail for one year or less, with much harsher penalties if someone is hurt.",
    "ref": "Section 7: Evading Law Enforcement"
  },
  {
    "id": "REC-08",
    "topic": "records-penalties",
    "drills": ["numbers"],
    "q": "A driver who willfully flees law enforcement, and during the pursuit someone is seriously injured, is subject to:",
    "choices": ["Imprisonment in a state prison for up to seven years.","A fine of less than $1,000.","Attending an anger-management class."],
    "answer": 0,
    "explain": "Causing serious bodily injury during a law enforcement pursuit carries up to seven years in state prison (or a county jail term).",
    "ref": "Section 7: Evading Law Enforcement"
  },
  {
    "id": "REC-09",
    "topic": "records-penalties",
    "drills": ["numbers"],
    "q": "A person convicted of manslaughter resulting from evading law enforcement faces state prison for:",
    "choices": ["A minimum of 4 to 10 years.","Up to 1 year.","Exactly 2 years."],
    "answer": 0,
    "explain": "Manslaughter resulting from a law-enforcement pursuit carries a state prison term of 4 to 10 years minimum.",
    "ref": "Section 7: Evading Law Enforcement"
  },
  {
    "id": "REC-10",
    "topic": "records-penalties",
    "drills": ["numbers"],
    "q": "If an unlicensed person is caught driving your vehicle, the vehicle may be:",
    "choices": ["Impounded for 30 days.","Sold at auction immediately.","Ticketed but not impounded."],
    "answer": 0,
    "explain": "A vehicle driven by an unlicensed person may be impounded for 30 days.",
    "ref": "Section 7: Evading Law Enforcement"
  },
  {
    "id": "REC-11",
    "topic": "records-penalties",
    "drills": ["numbers"],
    "q": "A minor with TWO at-fault collisions or traffic convictions (or one of each) in the first 12 months:",
    "choices": ["Cannot drive for 30 days unless accompanied by a licensed adult at least 25 years old.","Loses their license permanently.","Gets a warning letter only."],
    "answer": 0,
    "explain": "Two at-fault collisions or convictions: no driving for 30 days unless a licensed adult 25+ rides along. Three: six-month suspension and one-year probation.",
    "ref": "Section 7: Maintaining Your Minor's (Provisional) Driver's License"
  },
  {
    "id": "REC-12",
    "topic": "records-penalties",
    "drills": ["numbers"],
    "q": "A minor with THREE at-fault collisions or traffic convictions faces:",
    "choices": ["A six-month suspension and one year of probation.","A 30-day restriction.","A larger fine but no suspension."],
    "answer": 0,
    "explain": "Three at-fault collisions, convictions, or a combination brings a six-month suspension and one year of probation.",
    "ref": "Section 7: Maintaining Your Minor's (Provisional) Driver's License"
  },
  {
    "id": "REC-13",
    "topic": "records-penalties",
    "q": "Does turning 18 erase existing license restrictions, suspensions, or probation from your minor's license?",
    "choices": ["No. They continue until their scheduled end.","Yes. Everything resets at 18.","Only probation ends at 18."],
    "answer": 0,
    "explain": "Turning 18 does not erase or end existing restrictions, suspensions, or probation sentences.",
    "ref": "Section 7: Maintaining Your Minor's (Provisional) Driver's License"
  },
  {
    "id": "REC-14",
    "topic": "records-penalties",
    "drills": ["numbers"],
    "q": "You received notice that DMV proposes action against your driving privilege, served to you in person. To keep your hearing rights, request a hearing within:",
    "choices": ["10 days of being served (14 days if the notice was mailed).","30 days in all cases.","48 hours."],
    "answer": 0,
    "explain": "Request an administrative hearing within 10 days of being served or 14 days from the mailing date, or the right to a hearing is lost.",
    "ref": "Section 7: Administrative Hearing"
  },
  {
    "id": "REC-15",
    "topic": "records-penalties",
    "q": "If you know someone who no longer drives safely, you can ask DMV to review their driving qualifications by submitting a:",
    "choices": ["Request for Driver Reexamination (DS 699).","Notice of Transfer and Release of Liability.","Report of Traffic Accident (SR 1)."],
    "answer": 0,
    "explain": "Submit a Request for Driver Reexamination (DS 699) to have DMV review someone's driving qualifications.",
    "ref": "Section 7: Unsafe Driver"
  },
  {
    "id": "REC-16",
    "topic": "records-penalties",
    "q": "Which information in your driver's record is NOT available to the public?",
    "choices": ["Physical or mental conditions, your address, and your social security number.","Your traffic convictions.","Your license class."],
    "answer": 0,
    "explain": "Most of the record is public, except physical or mental conditions, address, and social security number.",
    "ref": "Section 7: Record Confidentiality"
  },
  {
    "id": "REC-17",
    "topic": "records-penalties",
    "q": "A person convicted of reckless driving or a speed contest that injures another person is subject to:",
    "choices": ["Imprisonment, a fine, or both.","Traffic school only.","A point on their record but no other penalty."],
    "answer": 0,
    "explain": "Reckless driving or engaging in a speed contest that causes injury is punishable by imprisonment, a fine, or both.",
    "ref": "Section 7: Speed Contests and Reckless Driving"
  },
  {
    "id": "REC-18",
    "topic": "records-penalties",
    "q": "If DMV declares you a negligent driver for too many points, you have the right to:",
    "choices": ["A hearing before or about the action taken.","Erase two points per year.","An automatic restricted license."],
    "answer": 0,
    "explain": "DMV notifies you in writing of any action and informs you of your right to a hearing when placed on probation, suspended, or revoked as a negligent driver.",
    "ref": "Section 7: Suspension or Revocation"
  },
  {
    "id": "REC-19",
    "topic": "records-penalties",
    "q": "After a suspension or revocation ends, to get a replacement license you must show:",
    "choices": ["Proof of financial responsibility, such as an SR 22/SR 1P.","A letter from your employer.","Twenty hours of community service."],
    "answer": 0,
    "explain": "At the end of a suspension or revocation, apply for a replacement license with proof of financial responsibility (SR 22/SR 1P).",
    "ref": "Section 7: Suspension or Revocation"
  },
  {
    "id": "REC-20",
    "topic": "records-penalties",
    "q": "A driver aged 15-20 convicted of using alcohol or a controlled substance (even not while driving) faces:",
    "choices": ["A one-year driving privilege suspension or delayed eligibility for a license.","No driving consequences.","A fine but no license action."],
    "answer": 0,
    "explain": "For ages 15-20, a conviction for using alcohol or a controlled substance leads the court to order DMV to suspend driving privileges for one year or delay license eligibility.",
    "ref": "Section 7: Maintaining Your Minor's (Provisional) Driver's License"
  },
  {
    "id": "REC-21",
    "topic": "records-penalties",
    "q": "If you receive a Notice of Priority Reexamination from law enforcement, you must contact DMV within:",
    "choices": ["Five working days, or your driving privilege is automatically suspended.","Thirty days.","One year."],
    "answer": 0,
    "explain": "You have five working days to contact DMV to begin the priority reexamination process, or your driving privilege is automatically suspended.",
    "ref": "Section 12: Priority Reexamination"
  },
  {
    "id": "REC-22",
    "topic": "records-penalties",
    "q": "Convictions for moving violations reported by other states and juvenile courts:",
    "choices": ["Are added to your California driver's record.","Do not affect your California record.","Only count if they happened in California."],
    "answer": 0,
    "explain": "Each conviction is reported to DMV and placed on your record, including convictions reported by other states and juvenile court.",
    "ref": "Section 7: Points on Your Driver's Record"
  },
  {
    "id": "INS-01",
    "topic": "insurance-collisions",
    "drills": ["numbers"],
    "q": "California's minimum liability insurance must cover at least how much for a single death or injury?",
    "choices": ["$30,000.","$15,000.","$5,000."],
    "answer": 0,
    "explain": "Minimum coverage: $30,000 for a single death or injury, $60,000 for death or injury to more than one person, and $15,000 for property damage.",
    "ref": "Section 10: Insurance Requirements"
  },
  {
    "id": "INS-02",
    "topic": "insurance-collisions",
    "drills": ["numbers"],
    "q": "California's minimum insurance coverage for property damage is:",
    "choices": ["$15,000.","$30,000.","$60,000."],
    "answer": 0,
    "explain": "The minimums are $30,000 (single death/injury), $60,000 (multiple), and $15,000 (property damage).",
    "ref": "Section 10: Insurance Requirements"
  },
  {
    "id": "INS-03",
    "topic": "insurance-collisions",
    "drills": ["numbers"],
    "q": "You are in a collision while driving without insurance. Your driving privilege will be suspended:",
    "choices": ["For up to four years, no matter who was at fault.","Only if you caused the collision.","For 30 days."],
    "answer": 0,
    "explain": "A collision without proper insurance brings a suspension of up to four years regardless of fault. You can restore it during the last three years by providing and maintaining an SR 22/SR 1P.",
    "ref": "Section 10: Driving Without Insurance"
  },
  {
    "id": "INS-04",
    "topic": "insurance-collisions",
    "q": "Who takes on financial responsibility for a driver younger than 18?",
    "choices": ["Their parents or guardians.","The driver alone.","The state of California."],
    "answer": 0,
    "explain": "Parents or guardians accept financial responsibility for drivers under 18 and pay for damages if the minor is in a collision. At 18, drivers take on their own responsibility.",
    "ref": "Section 10: Insurance Requirements"
  },
  {
    "id": "INS-05",
    "topic": "insurance-collisions",
    "q": "If you cannot afford liability insurance, you may be eligible for:",
    "choices": ["The California Low Cost Automobile Insurance Program.","A state exemption from insurance.","Driving with a reduced speed limit instead."],
    "answer": 0,
    "explain": "The California Low Cost Automobile Insurance Program helps drivers who cannot afford standard liability insurance.",
    "ref": "Section 10: Low-cost Insurance"
  },
  {
    "id": "INS-06",
    "topic": "insurance-collisions",
    "q": "What is one of the most common causes of traffic collisions?",
    "choices": ["Driver distractions.","Paying attention to your surroundings.","Better traffic flow."],
    "answer": 0,
    "explain": "The most common causes of collisions include driver distractions, unsafe speed, improper turns, right-of-way violations, ignoring signs, and driving on the wrong side of the road.",
    "ref": "Section 10: Causes of Collisions"
  },
  {
    "id": "INS-07",
    "topic": "insurance-collisions",
    "q": "If you are in a collision, the FIRST rule is:",
    "choices": ["You must stop. Leaving the scene is a hit-and-run with severe punishment.","Drive to the nearest police station.","Continue if the damage looks minor."],
    "answer": 0,
    "explain": "You must stop. Failing to stop or leaving the scene is a hit-and-run, which carries severe punishment if convicted.",
    "ref": "Section 10: What to Do if You Are in a Collision"
  },
  {
    "id": "INS-08",
    "topic": "insurance-collisions",
    "q": "You are in a collision and no one is hurt. Your vehicle is drivable. You should:",
    "choices": ["Move your vehicle out of traffic, then call 911 if needed and exchange information.","Leave everything exactly where it stopped and block traffic.","Leave the scene since no one is hurt."],
    "answer": 0,
    "explain": "If no one is hurt, move your vehicle out of traffic. Call 911 right away if anyone is hurt. Show your license, registration, insurance, and current address to the others involved.",
    "ref": "Section 10: What to Do if You Are in a Collision"
  },
  {
    "id": "INS-09",
    "topic": "insurance-collisions",
    "drills": ["numbers"],
    "q": "If anyone is injured or killed in a collision, you must report it to law enforcement within:",
    "choices": ["24 hours.","10 days.","72 hours."],
    "answer": 0,
    "explain": "Make a report to law enforcement within 24 hours of a collision if anyone is injured or killed. Your insurance agent, broker, or legal representative can file it.",
    "ref": "Section 10: What to Do if You Are in a Collision"
  },
  {
    "id": "INS-10",
    "topic": "insurance-collisions",
    "drills": ["numbers"],
    "q": "You must file a Report of Traffic Accident (SR 1) with DMV within 10 days if the collision caused:",
    "choices": ["More than $1,000 in property damage, or any injury or death.","More than $500 in damage.","Damage to your vehicle only."],
    "answer": 0,
    "explain": "File an SR 1 with DMV within 10 days when damage exceeds $1,000 or anyone was injured or killed. Whether or not you caused it, even on private property.",
    "ref": "Section 10: Reporting a Collision"
  },
  {
    "id": "INS-11",
    "topic": "insurance-collisions",
    "q": "Who files the SR 1 accident report with DMV if law enforcement responded to your collision?",
    "choices": ["You (or your representative). Law enforcement will not file it for you.","The responding officer.","Only the at-fault driver."],
    "answer": 0,
    "explain": "Each driver must file the SR 1 regardless of fault. Law enforcement will not make the DMV report for you, and your license will be suspended if you fail to file.",
    "ref": "Section 10: Reporting a Collision"
  },
  {
    "id": "INS-12",
    "topic": "insurance-collisions",
    "q": "Your parked, unattended vehicle rolls into another parked car and you cannot find the owner. You must:",
    "choices": ["Leave a note with your name, phone number, and address securely attached, and report it to law enforcement.","Wait one hour, then leave.","Do nothing if there are no witnesses."],
    "answer": 0,
    "explain": "Try to find the owner; if you cannot, securely attach a note with your name, phone number, and address, and report the collision to law enforcement.",
    "ref": "Section 10: What to Do if You Are in a Collision"
  },
  {
    "id": "INS-13",
    "topic": "insurance-collisions",
    "q": "You hit or injure an animal with your vehicle. You should:",
    "choices": ["Call the nearest humane society or law enforcement. Do not try to move the injured animal.","Move the animal off the road yourself.","Continue driving if it was wild."],
    "answer": 0,
    "explain": "If you kill or injure an animal, call the nearest humane society or law enforcement, and do not try to move an injured animal.",
    "ref": "Section 10: What to Do if You Are in a Collision"
  },
  {
    "id": "INS-14",
    "topic": "insurance-collisions",
    "q": "A reportable collision goes on your driving record:",
    "choices": ["Even if it was not your fault.","Only if you were cited.","Only if damage exceeded $10,000."],
    "answer": 0,
    "explain": "If a collision meets reporting thresholds ($1,000+ damage, injury, or death), DMV adds it to your record no matter who caused it.",
    "ref": "Section 10: Collisions on Your Driver's Record"
  },
  {
    "id": "INS-15",
    "topic": "insurance-collisions",
    "q": "When must you be able to show proof of insurance?",
    "choices": ["When you drive, at a behind-the-wheel drive test, and to other drivers after a collision.","Only when buying a vehicle.","Only at annual registration."],
    "answer": 0,
    "explain": "You must have proof of financial responsibility whenever you drive and for a drive test, and show it to others involved after a collision.",
    "ref": "Section 10: Financial Responsibility"
  },
  {
    "id": "INS-16",
    "topic": "insurance-collisions",
    "q": "You see a vehicle's emergency flashers ahead on the road. You should:",
    "choices": ["Slow down, there may be a collision or road emergency ahead, and pass carefully.","Change lanes and speed past.","Stop behind the vehicle and wait."],
    "answer": 0,
    "explain": "Emergency flashers ahead may mean a collision or emergency: slow down and pass carefully. Avoid driving near collisions so emergency crews can reach them.",
    "ref": "Section 10: Causes of Collisions"
  },
  {
    "id": "INS-17",
    "topic": "insurance-collisions",
    "q": "The SR 1 collision report must be filed with DMV even when:",
    "choices": ["The collision happened on private property.","Both drivers agree not to file.","Your insurance company was already notified."],
    "answer": 0,
    "explain": "The SR 1 requirement applies even when the collision happened on private property. Filing with your insurer does not replace the DMV report.",
    "ref": "Section 10: Reporting a Collision"
  },
  {
    "id": "INS-18",
    "topic": "insurance-collisions",
    "q": "Before buying insurance, you should make sure the agent, broker, or insurer is:",
    "choices": ["Licensed by the California Department of Insurance.","Recommended by your mechanic.","Based in California."],
    "answer": 0,
    "explain": "Verify that the agent, broker, or insurance provider is licensed by the California Department of Insurance.",
    "ref": "Section 10: Insurance Requirements"
  },
  {
    "id": "REG-01",
    "topic": "registration",
    "drills": ["numbers"],
    "q": "When you buy a vehicle, you have how many days to transfer ownership to your name?",
    "choices": ["10 days.","5 days.","30 days."],
    "answer": 0,
    "explain": "When you buy a vehicle, you have 10 days to transfer ownership to your name.",
    "ref": "Section 11: Buying or Selling a Vehicle"
  },
  {
    "id": "REG-02",
    "topic": "registration",
    "drills": ["numbers"],
    "q": "You must notify DMV within 5 days if you:",
    "choices": ["Sell or transfer ownership of your vehicle.","Paint your vehicle a different color.","Receive a traffic violation."],
    "answer": 0,
    "explain": "When you sell a vehicle, notify DMV within five days by completing a Notice of Transfer and Release of Liability.",
    "ref": "Section 11: Buying or Selling a Vehicle"
  },
  {
    "id": "REG-03",
    "topic": "registration",
    "drills": ["numbers"],
    "q": "After becoming a California resident or getting a job in California, you must register your out-of-state vehicle within:",
    "choices": ["20 days.","10 days.","6 months."],
    "answer": 0,
    "explain": "You have 20 days to register your vehicle after you become a resident or get a job in California.",
    "ref": "Section 11: Out-of-State Vehicles"
  },
  {
    "id": "REG-04",
    "topic": "registration",
    "q": "All vehicles registered in California must meet:",
    "choices": ["California requirements including vehicle emission controls.","Federal standards only.","The standards of the state where they were built."],
    "answer": 0,
    "explain": "Vehicles registered in California must meet California requirements including emission controls; DMV cannot register a vehicle that does not qualify.",
    "ref": "Section 11: Out-of-State Vehicles"
  },
  {
    "id": "REG-05",
    "topic": "registration",
    "q": "Driving a vehicle with an illegible or altered license plate is:",
    "choices": ["Against the law.","Allowed if the registration sticker is current.","Allowed for older vehicles."],
    "answer": 0,
    "explain": "You may not operate a vehicle with an illegible license plate or alter a license plate in any way.",
    "ref": "Section 7: Other Important Roadway Information"
  },
  {
    "id": "REG-06",
    "topic": "registration",
    "q": "To use a vehicle on California roads, it must be:",
    "choices": ["Registered in California (for residents).","Washed and inspected monthly.","Less than 25 years old."],
    "answer": 0,
    "explain": "You need to register your vehicle in California to use it in the state.",
    "ref": "Section 11: Vehicle Registration Requirements"
  },
  {
    "id": "MSC-01",
    "topic": "vehicle-misc",
    "q": "During a law enforcement stop, you should first:",
    "choices": ["Turn on your right turn signal to acknowledge the officer, and move completely onto the right shoulder.","Stop immediately in your lane.","Slow down and wait for the officer to pass."],
    "answer": 0,
    "explain": "Acknowledge the officer with your right turn signal and move completely onto the right shoulder, even if you are in the carpool/HOV lane. Stop in a well-lit area when possible.",
    "ref": "Section 6: Law Enforcement Stops"
  },
  {
    "id": "MSC-02",
    "topic": "vehicle-misc",
    "q": "After stopping for law enforcement, you should:",
    "choices": ["Remain inside your vehicle unless directed otherwise, roll down your window, and keep hands in clear view.","Step out to meet the officer.","Keep the engine running and doors locked with windows up."],
    "answer": 0,
    "explain": "Remain inside unless the officer directs you out, roll down your window after stopping, and the driver and passengers should place their hands in clear view.",
    "ref": "Section 6: Law Enforcement Stops"
  },
  {
    "id": "MSC-03",
    "topic": "vehicle-misc",
    "q": "During a traffic stop, a law enforcement officer must generally:",
    "choices": ["State the reason for the stop before questioning you about a violation or investigation.","Search your vehicle before speaking.","Issue a ticket in every stop."],
    "answer": 0,
    "explain": "Officers must state the reason for a stop before questioning (unless withholding it is necessary to protect life or property), and document the reason on any citation.",
    "ref": "Section 6: Law Enforcement Stops"
  },
  {
    "id": "MSC-04",
    "topic": "vehicle-misc",
    "q": "An officer asks permission to search your vehicle. You:",
    "choices": ["Have the right to decline, but you may not physically resist if the officer says they will search anyway.","Must always consent.","May physically block the search if you said no."],
    "answer": 0,
    "explain": "You can clearly decline a search request, but you do not have a right to interfere or resist if the officer proceeds under their legal authority.",
    "ref": "Section 6: Your Rights During the Enforcement Stop"
  },
  {
    "id": "MSC-05",
    "topic": "vehicle-misc",
    "q": "When stopped by law enforcement, the driver must produce:",
    "choices": ["Driver's license, proof of insurance, and vehicle registration.","Only a driver's license.","A passport or birth certificate."],
    "answer": 0,
    "explain": "The driver must produce a driver's license, proof of insurance, and vehicle registration when stopped.",
    "ref": "Section 6: Your Rights During the Enforcement Stop"
  },
  {
    "id": "MSC-06",
    "topic": "vehicle-misc",
    "q": "In California, questions about your immigration status during a traffic stop:",
    "choices": ["May only be asked by federal officers. State and local officers are prohibited from asking.","May be asked by any officer.","Must always be answered."],
    "answer": 0,
    "explain": "California law prohibits state and local officers from asking about immigration status; only federal law enforcement can, and you may decline to answer a state or local officer.",
    "ref": "Section 6: Your Rights During the Enforcement Stop"
  },
  {
    "id": "MSC-07",
    "topic": "vehicle-misc",
    "q": "Recording your interaction with law enforcement in public:",
    "choices": ["Is generally protected. Make it clear you are recording, and do not interfere with the officer's duties.","Is illegal in California.","Requires the officer's written consent."],
    "answer": 0,
    "explain": "The First Amendment generally protects recording police in public. Make it clear immediately, do not reach into concealed areas without permission, and do not interfere with lawful duties.",
    "ref": "Section 6: Your Rights During the Enforcement Stop"
  },
  {
    "id": "MSC-08",
    "topic": "vehicle-misc",
    "q": "Smoking in a vehicle when a minor is present is:",
    "choices": ["Illegal. You can be fined.","Legal with the windows down.","A ticketable offense only on freeways."],
    "answer": 0,
    "explain": "You must not smoke when a minor is in the vehicle. You can be fined.",
    "ref": "Section 7: Other Important Roadway Information"
  },
  {
    "id": "MSC-09",
    "topic": "vehicle-misc",
    "drills": ["numbers"],
    "q": "Dumping or abandoning an animal on a highway is punishable by:",
    "choices": ["A fine of up to $1,000, six months in jail, or both.","A verbal warning.","A $50 fine."],
    "answer": 0,
    "explain": "Dumping or abandoning animals on a highway is a crime punishable by up to $1,000 in fines, six months in jail, or both.",
    "ref": "Section 7: Other Important Roadway Information"
  },
  {
    "id": "MSC-10",
    "topic": "vehicle-misc",
    "drills": ["numbers"],
    "q": "Cargo may extend beyond your vehicle's right fenders by no more than:",
    "choices": ["6 inches.","12 inches.","2 feet."],
    "answer": 0,
    "explain": "Cargo may not extend beyond the left fenders at all, and no more than 6 inches beyond the right fenders.",
    "ref": "Section 7: Other Important Roadway Information"
  },
  {
    "id": "MSC-11",
    "topic": "vehicle-misc",
    "drills": ["numbers"],
    "q": "Cargo extending more than 4 feet beyond your rear bumper must display:",
    "choices": ["A 12-inch red or fluorescent orange square flag by day, and two red lights at night.","A white towel.","Nothing, if you drive slowly."],
    "answer": 0,
    "explain": "Cargo extending more than 4 feet beyond the rear bumper needs a 12-inch red or fluorescent orange square flag, and two red lights at night.",
    "ref": "Section 7: Other Important Roadway Information"
  },
  {
    "id": "MSC-12",
    "topic": "vehicle-misc",
    "q": "A person may ride in the back of a pickup truck only when:",
    "choices": ["The vehicle has secure seats and seat belts that are used.","The tailgate is closed.","The trip is under five miles."],
    "answer": 0,
    "explain": "People may not ride in the back of a pickup or other truck unless it has secure seats with seat belts in use. Animals in truck beds must also be properly secured.",
    "ref": "Section 7: Other Important Roadway Information"
  },
  {
    "id": "MSC-13",
    "topic": "vehicle-misc",
    "q": "A video monitor visible to the driver while driving is legal only if it displays:",
    "choices": ["Vehicle information, a navigation system, a media player, or radio.","Movies at low brightness.","Video calls in hands-free mode."],
    "answer": 0,
    "explain": "Do not drive a vehicle with a video monitor visible to the driver unless it only displays vehicle information, navigation, a media player, or radio.",
    "ref": "Section 7: Other Important Roadway Information"
  },
  {
    "id": "MSC-14",
    "topic": "vehicle-misc",
    "q": "Throwing a cigarette, cigar, or other flaming or glowing substance from your vehicle is:",
    "choices": ["Illegal.","Legal if fully extinguished.","Legal on rainy days."],
    "answer": 0,
    "explain": "Never throw a cigarette, cigar, or any flaming or glowing substance from a vehicle. It is illegal and a fire hazard.",
    "ref": "Section 7: Other Important Roadway Information"
  },
  {
    "id": "MSC-15",
    "topic": "vehicle-misc",
    "drills": ["numbers"],
    "q": "An electronic toll payment device may be mounted:",
    "choices": ["In a 5-inch square in the center uppermost portion of the windshield.","Anywhere on the windshield.","On the steering wheel."],
    "answer": 0,
    "explain": "Windshield objects are restricted: a 7-inch square in the lower passenger corner, a 5-inch square in the lower driver corner, and a 5-inch square at the center top for a toll device.",
    "ref": "Section 7: Other Important Roadway Information"
  },
  {
    "id": "MSC-16",
    "topic": "vehicle-misc",
    "q": "Hanging objects from your rearview mirror or posting signs that block your view:",
    "choices": ["Is prohibited.","Is fine if they are small.","Is allowed on side windows only."],
    "answer": 0,
    "explain": "Do not put signs or objects on the windshield or side windows that block your view, and do not hang objects on the mirror.",
    "ref": "Section 7: Other Important Roadway Information"
  },
  {
    "id": "MSC-17",
    "topic": "vehicle-misc",
    "q": "If you are 70 years old or older when your license expires, you must:",
    "choices": ["Renew in person and pass a vision test.","Surrender your license.","Renew by mail only."],
    "answer": 0,
    "explain": "Drivers 70+ must renew in person and pass a vision test; other exams may sometimes be required. There are no restrictions based on age alone.",
    "ref": "Section 13: Driver's License Renewal"
  },
  {
    "id": "MSC-18",
    "topic": "vehicle-misc",
    "q": "The Mature Driver Improvement Program is:",
    "choices": ["An eight-hour course for drivers 55 and older that may earn an insurance discount, with a certificate valid three years.","A mandatory course for drivers over 70.","A driving test for seniors."],
    "answer": 0,
    "explain": "The Mature Driver Program is an eight-hour course for drivers 55+. Insurers may offer discounts; the certificate lasts three years and renews with a four-hour course.",
    "ref": "Section 13: Mature Driver Program"
  },
  {
    "id": "MSC-19",
    "topic": "vehicle-misc",
    "q": "DMV license restrictions for older drivers are based on:",
    "choices": ["Conditions, not age. There are no specific restrictions for seniors.","Age 75 and above automatically.","Years since the last drive test."],
    "answer": 0,
    "explain": "There are no specific restrictions for seniors. All restrictions (like corrective lenses or no freeway driving) are based on conditions, not age.",
    "ref": "Section 12: Driver's License Restrictions"
  },
  {
    "id": "MSC-20",
    "topic": "vehicle-misc",
    "q": "A common DMV-imposed license restriction is:",
    "choices": ["Requiring eyeglasses or corrective contact lenses.","Banning radio use.","Requiring a companion at all times."],
    "answer": 0,
    "explain": "Restrictions may include corrective lenses, mechanical devices like hand controls, extra mirrors, or limits such as no night or freeway driving.",
    "ref": "Section 12: Driver's License Restrictions"
  },
  {
    "id": "MSC-21",
    "topic": "vehicle-misc",
    "q": "To maximize fuel efficiency and lower emissions, the handbook recommends:",
    "choices": ["Driving at a steady speed, keeping tires inflated, and removing extra weight.","Coasting downhill in neutral.","Warming up the engine for 15 minutes."],
    "answer": 0,
    "explain": "Drive green: speed up and slow down smoothly, drive at a steady speed, keep tires inflated, do oil changes, and remove extra weight.",
    "ref": "Section 6: Driving Green"
  },
  {
    "id": "MSC-22",
    "topic": "vehicle-misc",
    "q": "Driving a vehicle so overloaded that you cannot control it or see ahead and to the sides is:",
    "choices": ["Illegal.","Legal below 25 mph.","Legal for moving day."],
    "answer": 0,
    "explain": "Do not drive a vehicle so overloaded you cannot control it or see ahead and to the sides, or with an unsecured load that is a safety hazard.",
    "ref": "Section 7: Other Important Roadway Information"
  },
  {
    "id": "MSC-23",
    "topic": "vehicle-misc",
    "q": "During a law enforcement stop at night, you should try to stop:",
    "choices": ["In a well-lit area when possible.","Under an overpass.","As far from streetlights as possible."],
    "answer": 0,
    "explain": "Move completely onto the right shoulder and stop in a well-lit area when possible.",
    "ref": "Section 6: Law Enforcement Stops"
  },
  {
    "id": "MSC-24",
    "topic": "vehicle-misc",
    "q": "When renewing your license, the 'eLearning' option is:",
    "choices": ["A no-fail, self-paced interactive course with quizzes, available for eligible renewals.","A paid tutoring service.","A version of the drive test taken online."],
    "answer": 0,
    "explain": "For renewals, eLearning may be an alternative to the knowledge test: a no-fail, self-paced course with quizzes after each module, taken on a computer, tablet, or phone.",
    "ref": "Section 3: Knowledge Test"
  },
  {
    "id": "MSC-25",
    "topic": "vehicle-misc",
    "q": "If you are 62 or older, you are eligible for:",
    "choices": ["A no-fee Senior ID card.","A free driver's license renewal.","An unrestricted license for life."],
    "answer": 0,
    "explain": "At 62+, you are eligible for a no-fee Senior ID card. It serves as identification only.",
    "ref": "Section 13: Senior ID Cards"
  },
  {
    "id": "MSC-26",
    "topic": "vehicle-misc",
    "q": "Warning signs that a driver may no longer be safe include:",
    "choices": ["Getting lost in familiar places, frequent close calls, and unexplained dents and scrapes.","Driving mostly during the day.","Taking longer routes to avoid freeways."],
    "answer": 0,
    "explain": "Warning signs of an unsafe driver: getting lost in familiar places; dents and scrapes on the car, fences, mailbox, or garage; frequent close calls or collisions.",
    "ref": "Section 13: Seniors and Driving"
  }
];
