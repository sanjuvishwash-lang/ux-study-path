/* UX Study Path — course content, study links, summaries and study notes */
const MODULES = [
{t:"Foundations", phase:"Foundations", d:"What UX is, the process, and the principles everything else rests on.", lessons:[
 {id:"what-is-ux", t:"What UX design is", min:10,
  what:"UX design shapes how a product works for the people who use it: whether they can find what they need, finish their task, and feel confident doing it. It covers research, structure, interaction, visuals and content, not only screens.",
  when:"Before anything else. You need a clear definition to explain your role to clients, developers and stakeholders.",
  steps:["Separate the layers: UX is the whole experience, UI is the visible interface, product design is UX plus business outcomes.","Learn the core loop: understand, define, design, test, iterate.","Map who you work with: product managers, engineers, researchers, content designers and stakeholders.","Read three published case studies and note where research changed the design."],
  out:"A one-paragraph definition of UX, in your own words, that you can say in an interview.",
  avoid:["Treating UX as “making screens look nice”.","Assuming you are the user."],
  try:"Pick an app you use daily. Write down one task that frustrates you and why it does."},
 {id:"double-diamond", t:"Design thinking and the Double Diamond", min:15,
  what:"The Double Diamond (UK Design Council, 2005) splits a project into four phases. Discover and Define find the right problem: first widen, then narrow. Develop and Deliver find the right solution in the same way. Design thinking is the mindset behind it: empathise, define, ideate, prototype, test.",
  when:"Planning any project, so the team agrees which phase it is in and doesn't jump to solutions.",
  steps:["Discover: research users and context without judging.","Define: synthesise findings into one clear problem statement.","Develop: generate many solutions and prototype the promising ones.","Deliver: test, refine, ship, then measure.","Loop back whenever testing shows the problem was framed wrongly."],
  out:"A project plan with activities grouped under the four phases.",
  avoid:["Skipping the first diamond because the brief “already says what to build”.","Treating the model as a strict one-way sequence."],
  try:"Sort everything you did on a past project into the four phases. Which phase was the thinnest?",
  ref:["Design Council: The Double Diamond","https://www.designcouncil.org.uk/our-resources/the-double-diamond/"]},
 {id:"heuristics", t:"Nielsen's 10 usability heuristics", min:20,
  what:"Ten broad rules (Jakob Nielsen, 1994) for judging an interface: visibility of system status; match with the real world; user control and freedom; consistency and standards; error prevention; recognition rather than recall; flexibility and efficiency; aesthetic and minimalist design; help users recover from errors; help and documentation.",
  when:"Reviewing a design quickly, critiquing your own work, and explaining why something feels wrong.",
  steps:["Learn all ten, each with one real example.","Walk through a key task screen by screen.","Log every issue against the heuristic it breaks.","Rate severity from 0 (not a problem) to 4 (usability catastrophe).","Fix the most severe issues first."],
  out:"An issue log with columns for screen, issue, heuristic, severity and fix.",
  avoid:["Citing heuristics as proof instead of testing with users.","Listing problems without severity."],
  try:"Audit the checkout flow of any shopping site against all ten heuristics.",
  ref:["NN/g: 10 Usability Heuristics","https://www.nngroup.com/articles/ten-usability-heuristics/"]},
 {id:"psychology", t:"Psychology laws for designers", min:20,
  what:"A few findings explain much of how people use interfaces. Hick's law: more choices mean slower decisions. Fitts's law: large, close targets are faster to hit. Miller: working memory is small, so chunk information. Jakob's law: people expect your product to work like the ones they already use. Add cognitive load, the serial position effect and the aesthetic-usability effect.",
  when:"Making decisions about layout, menus, forms and buttons, and defending those decisions.",
  steps:["Learn one law at a time with a real UI example.","Count the choices on a key screen, then cut or group them (Hick).","Make primary actions large and close to the thumb or cursor (Fitts).","Chunk long numbers and lists (Miller).","Use familiar patterns before inventing new ones (Jakob)."],
  out:"A cheat sheet of 6–8 laws, each with one screenshot.",
  avoid:["Quoting “7 ± 2” as a hard limit on menu items.","Treating tendencies as rules that ignore context."],
  try:"Redesign a 12-item menu into groups and explain which laws you applied.",
  ref:["Laws of UX","https://lawsofux.com/"]},
 {id:"accessibility-basics", t:"Accessibility fundamentals", min:20,
  what:"Accessible design works for people with visual, motor, hearing and cognitive differences, whether permanent, temporary or situational. WCAG 2.2 groups its requirements under POUR: Perceivable, Operable, Understandable, Robust. Level AA is the usual target.",
  when:"From the first wireframe. Retrofitting accessibility late costs far more.",
  steps:["Check text contrast: 4.5:1 for body text, 3:1 for large text and UI components.","Make every action reachable by keyboard, with a visible focus state.","Never use colour alone to carry meaning.","Give inputs visible labels and images meaningful alt text.","Make touch targets at least 24 × 24 CSS px (WCAG 2.2 AA); 44 × 44 is better."],
  out:"An accessibility checklist you run on every design.",
  avoid:["Placeholder text as the only label.","Treating accessibility as a final QA step."],
  try:"Use a website with only Tab, Enter and Space for five minutes. Note where you get stuck.",
  ref:["W3C: WCAG 2.2","https://www.w3.org/TR/WCAG22/"]}
]},
{t:"Research planning", phase:"Discover", d:"Decide what you need to learn, from whom, and how to do it responsibly.", lessons:[
 {id:"research-plan", t:"Writing a research plan", min:20,
  what:"A one-page plan stating what the team needs to learn, why, from whom and how. It keeps research focused and gets stakeholder buy-in before you spend the time.",
  when:"Before any study, even a small one.",
  steps:["Write the background and the decision this research will inform.","List 3–5 research questions: what you want to learn, not what you will ask.","Choose methods that answer those questions.","Define participants: who, how many, and recruiting criteria.","Add the timeline, deliverables and who needs the results."],
  out:"A one-page research plan.",
  avoid:["Research questions that are really interview questions.","Studies with no decision attached to them."],
  try:"Write a plan for “Why do people abandon our sign-up?”"},
 {id:"stakeholder-interviews", t:"Stakeholder interviews", min:15,
  what:"Short conversations with the people who own, fund, build or sell the product. They surface business goals, constraints, assumptions and politics before you design anything.",
  when:"At project kickoff, and whenever a new decision-maker joins.",
  steps:["List stakeholders across business, tech, sales and support.","Ask about goals, success metrics, constraints, past attempts and worries.","Ask what they believe about users, and record those beliefs as assumptions to test.","Summarise where they agree and where they conflict.","Share the summary back so everyone sees the same picture."],
  out:"A stakeholder map and a list of goals, constraints and assumptions.",
  avoid:["Treating stakeholder opinions as user research.","Skipping support and sales teams, who hear from users every day."],
  try:"Interview someone who runs a business about their biggest customer problem."},
 {id:"recruiting", t:"Recruiting participants", min:15,
  what:"Finding the right people to study. A screener survey filters candidates on behaviour (what they do), not only demographics.",
  when:"Once you know who you need to learn from.",
  steps:["Define must-have and must-not criteria.","Write screener questions that don't reveal the “right” answer.","Recruit through your customers, panels, social media or tools like User Interviews and Respondent.","Overbook by about 20% to cover no-shows.","Plan incentives and scheduling."],
  out:"A screener and a confirmed participant schedule.",
  avoid:["Testing only with colleagues or friends.","Leading screener questions such as “Do you love shopping online?”"],
  try:"Write a five-question screener for people who order food delivery every week."},
 {id:"research-ethics", t:"Research ethics and consent", min:10,
  what:"Participants trust you with their time and data. Informed consent, privacy and honesty are required, and data laws such as GDPR and India's Digital Personal Data Protection Act 2023 apply to personal data.",
  when:"Every study that involves people.",
  steps:["Explain the purpose, duration and recording before you start.","Get written or recorded consent.","Store data securely and anonymise it in reports.","Let participants stop at any time.","Delete raw recordings when you no longer need them."],
  out:"A consent form template.",
  avoid:["Recording without permission.","Showing names or faces in decks when you don't need to."],
  try:"Draft a consent script you can read aloud in 60 seconds."}
]},
{t:"Research methods", phase:"Discover", d:"Interviews, observation, surveys, diaries, competitors and data.", lessons:[
 {id:"user-interviews", t:"User interviews", min:25,
  what:"One-to-one conversations that uncover people's goals, behaviours, pain points and context. The core qualitative method.",
  when:"Early, to understand a problem space, or any time you need the “why” behind behaviour.",
  steps:["Write a discussion guide: warm-up, core topics, wrap-up.","Ask open questions about past behaviour: “Tell me about the last time you…”","Follow up with “Why?” and “Can you show me?”","Stay quiet and let silences work.","Talk to 5–8 people per user group, and debrief within an hour of each session."],
  out:"Interview notes or transcripts, plus a short debrief per session.",
  avoid:["Leading or hypothetical questions like “Would you use…?”","Pitching your idea during the interview."],
  try:"Interview two people about how they plan their weekly groceries."},
 {id:"contextual-inquiry", t:"Contextual inquiry", min:15,
  what:"Observing people doing real work in their own environment and asking questions as they go. It reveals workarounds and context that interviews miss.",
  when:"Complex workflows, B2B and enterprise tools, and physical environments.",
  steps:["Arrange to visit, or screen-share, during real work.","Take a master–apprentice stance: they teach, you learn.","Note tools, interruptions, sticky notes and workarounds.","Ask about anything surprising in the moment.","Summarise into observations about the flow, the artefacts and the culture."],
  out:"Observation notes with photos or screenshots of the work environment.",
  avoid:["Staging a fake task.","Interrupting so often that the work stops."],
  try:"Watch someone pay a utility bill and note every tool they touch."},
 {id:"surveys", t:"Surveys", min:20,
  what:"Structured questionnaires that measure how common an attitude or behaviour is across many people. They add quantitative breadth to qualitative depth.",
  when:"After interviews, to check how widespread a finding is, or to segment users.",
  steps:["Define what you will decide with the results.","Keep it under 10 minutes.","Write clear, neutral questions that ask one thing each.","Pilot it with 3–5 people.","Analyse with counts, cross-tabs and coding of open answers."],
  out:"Survey results with charts and key takeaways.",
  avoid:["Double-barrelled questions such as “Was it fast and easy?”","Asking people to predict their future behaviour."],
  try:"Find five badly written survey questions online and rewrite them."},
 {id:"diary-studies", t:"Diary studies", min:10,
  what:"Participants log their experiences over days or weeks, capturing behaviour that unfolds over time.",
  when:"Habits, long journeys such as onboarding, travel or health, and infrequent events.",
  steps:["Define the time span and what should trigger an entry.","Choose a tool: WhatsApp, dscout or a simple form.","Send prompts and reminders.","Read entries daily and ask follow-up questions.","Close with a follow-up interview."],
  out:"A time-based log of experiences and a summary of patterns.",
  avoid:["So many prompts that people drop out.","No incentive tied to completing the study."],
  try:"Run a three-day diary study on your own phone use."},
 {id:"competitive-analysis", t:"Competitive analysis", min:20,
  what:"A structured review of direct and indirect competitors to find conventions, gaps and opportunities.",
  when:"Early in discovery, and when entering a new market.",
  steps:["Pick 3–5 direct and 2–3 indirect competitors.","Define criteria: features, flows, pricing, content and UX quality.","Complete the same key task on each, taking screenshots.","Compare them in a matrix.","Summarise patterns to adopt and gaps to use."],
  out:"A comparison matrix and a summary of opportunities.",
  avoid:["Copying a competitor without knowing whether it works for their users.","Listing features without judging the experience."],
  try:"Compare onboarding in three fitness apps."},
 {id:"analytics", t:"Reading analytics", min:15,
  what:"Product data from tools such as GA4, Mixpanel, Hotjar or Microsoft Clarity shows what people do at scale: where they drop off, what they click and how they move.",
  when:"Finding where problems are, before research explains why.",
  steps:["Agree on the key events and funnels.","Look for drop-offs, rage clicks and dead ends.","Segment by device, traffic source, and new versus returning users.","Watch session recordings of the worst steps.","Turn what you find into research questions."],
  out:"A list of problem areas with numbers attached.",
  avoid:["Reading cause from correlation.","Vanity metrics such as total page views."],
  try:"Open the GA4 demo account (Google Merchandise Store) and find the biggest funnel drop."}
]},
{t:"Synthesis", phase:"Define", d:"Turn raw research into insights, people, journeys and a clear problem.", lessons:[
 {id:"affinity-mapping", t:"Affinity mapping", min:20,
  what:"Turning raw research notes into themes by clustering individual observations from the bottom up.",
  when:"Right after a round of research.",
  steps:["Write one observation per sticky note: a quote, a behaviour or a pain point.","Cluster notes that belong together, without predefined categories.","Name each cluster with an insight statement.","Group clusters into higher-level themes.","Prioritise by frequency and impact."],
  out:"Themes with supporting evidence and insight statements.",
  avoid:["Starting with categories and forcing notes into them.","Labels that are topics (“Payments”) instead of insights (“People don't trust saving their card”)."],
  try:"Affinity-map 30 app store reviews of an app you use."},
 {id:"personas", t:"Personas", min:20,
  what:"Archetypes of key user groups, built from research, describing their goals, behaviours, pain points and context. They keep the team designing for real people.",
  when:"After research, when there are distinct user groups with different needs.",
  steps:["Find behaviour patterns that split users into groups.","Create 2–4 personas and choose one as primary.","Include goals, frustrations, context, behaviours and a real quote.","Keep demographics to a minimum.","Put them where decisions get made."],
  out:"Two to four research-based personas.",
  avoid:["Presenting assumption-based proto-personas as research.","Decorative details that don't affect design."],
  try:"Write a persona from your grocery-planning interviews."},
 {id:"empathy-maps", t:"Empathy maps", min:10,
  what:"A four-quadrant view of what a user Says, Thinks, Does and Feels, used to align a team on one user's perspective.",
  when:"Workshops, early alignment, or summarising a single interview.",
  steps:["Pick a user or persona.","Fill each quadrant from research data.","Note contradictions, such as what people say versus what they do.","Add pains and gains.","Use it to spot unmet needs."],
  out:"An empathy map per persona or interview.",
  avoid:["Filling it with guesses instead of evidence."],
  try:"Make an empathy map of yourself buying a new phone."},
 {id:"journey-maps", t:"Customer journey maps", min:25,
  what:"A timeline of a user's experience across stages and touchpoints, showing actions, thoughts, emotions and pain points. A service blueprint extends it with the behind-the-scenes processes.",
  when:"Seeing the end-to-end experience and deciding where to intervene.",
  steps:["Choose one persona and a scenario with a clear goal.","Define stages, for example aware, consider, buy, use, get support.","Add actions, touchpoints, thoughts and an emotion curve for each stage.","Mark pain points and moments that matter.","List opportunities under each stage."],
  out:"A journey map with prioritised opportunities.",
  avoid:["Mapping the ideal journey instead of the current one.","Cramming several personas into one map."],
  try:"Map the journey of ordering food for a family dinner."},
 {id:"jobs-to-be-done", t:"Jobs to be done", min:15,
  what:"A framework that focuses on the progress people are trying to make rather than who they are. A job story reads: “When [situation], I want to [motivation], so I can [outcome].”",
  when:"Framing features and messaging around real motivations, and finding competitors you didn't know you had.",
  steps:["Interview people about a recent purchase or switch.","Identify the situation that triggered it.","Write job stories.","Note the functional, emotional and social sides of each job.","Prioritise jobs that are important and poorly served today."],
  out:"A set of job stories.",
  avoid:["Writing features as jobs, such as “I want a filter button”."],
  try:"Write three job stories for why someone uses a ride-hailing app."},
 {id:"problem-statements", t:"Problem statements and “How might we”", min:15,
  what:"A problem statement names who has the problem, what it is and why it matters. “How might we…” questions reframe it into prompts for ideas.",
  when:"Bridging research and ideation.",
  steps:["Write: [user] needs a way to [need] because [insight].","Check that it rests on evidence.","Reframe it into 3–5 “How might we” questions.","Make them neither too broad nor too narrow.","Vote on which ones to ideate on."],
  out:"One problem statement and a prioritised set of “How might we” questions.",
  avoid:["Embedding a solution: “How might we add a chatbot?”","Questions so broad they're useless: “How might we make users happy?”"],
  try:"Turn one affinity theme into a problem statement and three “How might we” questions."}
]},
{t:"Information architecture", phase:"Define", d:"Organise content and structure so people can find things.", lessons:[
 {id:"content-audit", t:"Content inventory and audit", min:15,
  what:"An inventory lists all the content a product has. An audit judges its quality and usefulness.",
  when:"Redesigns and migrations, before restructuring.",
  steps:["List every page or screen in a spreadsheet.","Record URL, title, type, owner and last update.","Mark each as keep, update, merge or remove.","Spot duplicates and gaps.","Use the findings to shape the new structure."],
  out:"A content spreadsheet with a decision for every item.",
  avoid:["Skipping the audit and migrating everything as-is."],
  try:"Inventory 20 pages of a small website."},
 {id:"card-sorting", t:"Card sorting", min:15,
  what:"Participants group content items into categories that make sense to them. In an open sort they name the groups; in a closed sort they use yours.",
  when:"Designing or fixing navigation and categories.",
  steps:["Pick 30–60 representative items.","Run an open sort to discover mental models; aim for 15 or more participants.","Analyse with a similarity matrix or dendrogram.","Draft categories and labels.","Validate them with a closed sort or a tree test."],
  out:"Proposed categories and labels backed by data.",
  avoid:["Internal jargon on the cards.","Treating the results as the final structure without testing it."],
  try:"Run a card sort with five friends using 30 kitchen items."},
 {id:"tree-testing", t:"Tree testing", min:15,
  what:"Testing a text-only hierarchy by asking people where they would look to complete tasks. It measures findability without any visual design.",
  when:"After drafting navigation, before visual design.",
  steps:["Build the hierarchy as a tree, for example in Optimal Workshop's Treejack.","Write 8–10 realistic tasks.","Recruit 30–50 participants.","Measure success rate, directness and time.","Fix the labels and locations that fail."],
  out:"Findability scores per task and a revised tree.",
  avoid:["Task wording that repeats the label you are testing."],
  try:"Build a tree for a banking app and write five tasks for it."},
 {id:"sitemaps", t:"Sitemaps", min:10,
  what:"A diagram of a product's pages and how they nest.",
  when:"After card sorting and before wireframes.",
  steps:["Start from the home or root page.","Add primary sections, then their sub-pages.","Mark global elements: header, footer, account.","Note page types and templates.","Review it with the development and content teams."],
  out:"A sitemap diagram.",
  avoid:["Going deeper than three levels without a reason."],
  try:"Sketch the sitemap of a university website."},
 {id:"user-flows", t:"User flows and task flows", min:20,
  what:"Diagrams of the steps someone takes to reach a goal, including decisions, screens and system responses. A task flow shows one path; a user flow includes branches and errors.",
  when:"Before wireframing a feature.",
  steps:["Define the entry point and the success state.","Map each step and decision.","Add branches for errors and edge cases.","Count the steps and remove the unnecessary ones.","Use consistent shapes for screens, decisions and actions."],
  out:"A flow diagram for each key task.",
  avoid:["Drawing only the happy path."],
  try:"Flow a password reset, including an expired link and a mistyped email."},
 {id:"navigation-patterns", t:"Navigation patterns", min:15,
  what:"The standard ways to move through a product: top navigation, sidebar, tab bar, hamburger menu, breadcrumbs, search and progressive disclosure.",
  when:"Choosing a structure for web or mobile, simple or complex products.",
  steps:["Match the pattern to the number of top-level sections; a mobile tab bar holds 3–5.","Keep primary destinations visible.","Show people where they are with active states and breadcrumbs.","Support search for large sets of content.","Validate with a tree test."],
  out:"A navigation spec for each breakpoint.",
  avoid:["Hiding key destinations in a hamburger menu on desktop."],
  try:"Compare the navigation of three shopping apps."}
]},
{t:"Ideation and interaction", phase:"Develop", d:"Generate ideas, sketch, wireframe, and define how things behave.", lessons:[
 {id:"ideation", t:"Ideation techniques", min:15,
  what:"Structured ways to generate many solutions quickly: brainstorming, Crazy 8s (eight sketches in eight minutes), SCAMPER, the worst-possible-idea exercise, and dot voting.",
  when:"Once you have clear “How might we” questions.",
  steps:["Work alone first, then share; this avoids groupthink.","Aim for quantity before quality.","Run Crazy 8s on one “How might we” question.","Share and build on each other's ideas.","Dot-vote and choose ideas to prototype."],
  out:"A wall of ideas and 2–3 selected concepts.",
  avoid:["Judging ideas while generating them.","Letting the loudest person decide."],
  try:"Run Crazy 8s on “How might we make splitting bills less awkward?”"},
 {id:"sketching", t:"Sketching and storyboards", min:15,
  what:"Quick, cheap drawings of screens (sketches) or of the user's story over time (storyboards). They test ideas before you spend time on pixels.",
  when:"Exploring concepts and showing the context of use.",
  steps:["Use pen and paper or a tablet.","Draw boxes, lines and labels, and skip detail.","For a storyboard, draw six frames from trigger to outcome.","Annotate the key interactions.","Share early and collect reactions."],
  out:"Concept sketches and a storyboard.",
  avoid:["Polishing sketches."],
  try:"Storyboard someone discovering and first using your product."},
 {id:"wireframing", t:"Wireframing", min:25,
  what:"Low- to mid-fidelity layouts that define structure, content priority and functionality without visual styling.",
  when:"After flows and before visual design.",
  steps:["Start from content priority, not layout trends.","Use greyscale and realistic content.","Lay out each key screen.","Annotate behaviour and states.","Review early with stakeholders and developers."],
  out:"Annotated wireframes for the key flows.",
  avoid:["Lorem ipsum hiding real content problems.","Adding colour too soon, which shifts feedback to looks."],
  try:"Wireframe the detail screen of a recipe app for mobile."},
 {id:"interaction-design", t:"Interaction patterns and microinteractions", min:20,
  what:"Interaction design defines how the interface responds to what people do. Microinteractions are the small moments, such as a like, a toggle or pull-to-refresh, each with a trigger, rules, feedback, and loops and modes (Dan Saffer).",
  when:"Detailing behaviour once the layout is set.",
  steps:["Start from established patterns, such as Material Design and Apple's Human Interface Guidelines.","Define every state: default, hover, focus, pressed, disabled, loading, error, empty, success.","Give feedback within about 100 ms of a direct action.","Use motion to explain change, not to decorate.","Respect people's reduced-motion settings."],
  out:"A state spec for each interactive component.",
  avoid:["Missing loading and empty states.","UI feedback animations longer than about 300 ms."],
  try:"Spec every state of a “Save” button."},
 {id:"form-design", t:"Form design", min:20,
  what:"Forms are where people give you data, and where many conversions fail. Good forms are short, clear and forgiving.",
  when:"Sign-up, checkout, onboarding and settings.",
  steps:["Ask only for what you need, and cut every optional field you can.","Use a single column with labels above fields.","Use the right input types so the right keyboard appears.","Validate inline once someone leaves a field.","Write errors that say how to fix the problem."],
  out:"A form with annotated validation rules.",
  avoid:["Placeholder text as the only label.","Clearing the form after an error."],
  try:"Redesign a 15-field sign-up form into the fewest possible steps."},
 {id:"ux-writing", t:"UX writing and microcopy", min:15,
  what:"The words on buttons, labels, errors, empty states and onboarding. Clear copy is often the cheapest usability fix.",
  when:"Throughout design, not at the end.",
  steps:["Label buttons with verbs that describe the result, such as “Save draft”.","Use the words people used in research.","Keep sentences short and put the key words first.","Make error messages specific and helpful.","Build a voice and tone guide."],
  out:"A copy document for the key screens.",
  avoid:["Generic “Submit”, “OK” or “An error occurred”.","Blaming the user."],
  try:"Rewrite five error messages from apps you use."}
]},
{t:"Visual and UI design", phase:"Develop", d:"Hierarchy, type, colour, layout and the systems that scale them.", lessons:[
 {id:"visual-hierarchy", t:"Visual hierarchy and Gestalt", min:20,
  what:"Visual hierarchy guides the eye with size, weight, colour, contrast and spacing. Gestalt principles (proximity, similarity, continuity, closure, figure–ground, common region) explain how people group what they see.",
  when:"Every screen.",
  steps:["Decide the one thing each screen must communicate.","Make it the most prominent element.","Group related items by proximity.","Style elements that behave the same way alike.","Squint test: blur the screen and check what stands out."],
  out:"Screens with clear primary, secondary and tertiary levels.",
  avoid:["Making everything bold and big."],
  try:"Run a squint test on three landing pages."},
 {id:"typography", t:"Typography for UI", min:20,
  what:"Choosing and setting type for readability and hierarchy: typeface, scale, weight, line height and line length.",
  when:"Setting up a design system or a new product's look.",
  steps:["Choose one or two families with the weights you need.","Set a type scale, for example a 1.25 ratio.","Use at least 16 px for body text on the web, with line height around 1.5.","Keep lines between 45 and 75 characters.","Define text styles in Figma and reuse them."],
  out:"A type scale and a set of text styles.",
  avoid:["Too many sizes.","Light weights at small sizes."],
  try:"Build a type scale for a dashboard."},
 {id:"colour", t:"Colour and contrast", min:20,
  what:"A UI colour system has brand colours, neutrals and semantic colours (success, warning, error, info), each with tints and shades that meet contrast requirements.",
  when:"Setting up a design system, adding dark mode, or visualising data.",
  steps:["Build primary and neutral ramps from 50 to 900.","Define semantic colours.","Check contrast with a tool such as WebAIM or Stark.","Use 60-30-10 as a starting balance.","Design light and dark themes with tokens."],
  out:"A colour palette with tokens and contrast ratios.",
  avoid:["Red and green as the only signal.","Picking colours by mood without checking contrast."],
  try:"Create a palette and check every text pairing against AA."},
 {id:"grids-spacing", t:"Grids, layout and spacing", min:15,
  what:"Grids and a spacing scale give layouts rhythm and consistency. Common choices: 12 columns on desktop, 4 on mobile, and an 8-point spacing system.",
  when:"Every layout.",
  steps:["Define breakpoints and columns.","Use an 8 pt (or 4 pt) spacing scale.","Use Auto Layout in Figma.","Keep margins and gutters consistent.","Align to the grid, and break it only on purpose."],
  out:"Layout grid styles and spacing tokens.",
  avoid:["Random values such as 13 px and 27 px."],
  try:"Rebuild a cluttered screen on an 8 pt grid."},
 {id:"design-systems", t:"Design systems and components", min:25,
  what:"A design system is the shared source of truth: tokens (colour, type, spacing), components, patterns and guidelines, mirrored in code. Atomic design (Brad Frost) builds from atoms to molecules, organisms, templates and pages.",
  when:"Any product with more than a few screens or more than one designer.",
  steps:["Audit the existing UI for inconsistencies.","Define tokens first.","Build components with variants and properties in Figma.","Document usage, with do's and don'ts.","Sync with code (Storybook, Code Connect) and version the system."],
  out:"A documented component library.",
  avoid:["Building components nobody uses.","Letting design and code drift apart."],
  try:"Build a button component with every variant and state."},
 {id:"responsive", t:"Responsive and mobile design", min:20,
  what:"Designing layouts that adapt to screen sizes and input methods. Mobile-first starts with the tightest constraints and scales up.",
  when:"Any web product, and most products in general.",
  steps:["Start with the smallest breakpoint.","Prioritise content for small screens.","Place key actions within thumb reach.","Define how each component reflows at each breakpoint.","Test on real devices."],
  out:"Key screens at mobile, tablet and desktop sizes.",
  avoid:["Shrinking the desktop layout.","Interactions that only work on hover."],
  try:"Take a desktop page and design its mobile version."}
]},
{t:"Prototyping", phase:"Develop", d:"Make ideas testable at the right fidelity, with every state covered.", lessons:[
 {id:"prototype-fidelity", t:"Prototype fidelity", min:10,
  what:"Prototypes range from paper (low fidelity) to clickable wireframes (mid) to realistic interactive UI (high). Match fidelity to the question you are asking.",
  when:"Deciding how much to build before testing.",
  steps:["Write down what you want to learn.","For concept or flow questions, use low fidelity.","For detailed interaction or visual questions, use high fidelity.","Build only the screens the test needs.","Time-box the work."],
  out:"A prototype scoped to your test plan.",
  avoid:["Spending weeks on a prototype before getting any feedback."],
  try:"Make a paper prototype of a to-do app and test it with one person."},
 {id:"figma-prototyping", t:"Prototyping in Figma", min:25,
  what:"Connecting frames with interactions, Smart Animate, overlays, variables and conditional logic to simulate a working product.",
  when:"Testing flows and interactions, and presenting to stakeholders.",
  steps:["Set a starting frame and a flow.","Connect interactions: on tap, while hovering, after delay.","Use component variants for interactive states.","Use variables for realistic logic, such as cart counts and toggles.","Test on a phone with the Figma mobile app."],
  out:"A clickable prototype link.",
  avoid:["Dead ends: everything tappable on the test path should work."],
  try:"Prototype a login screen with an error state, using variables."},
 {id:"states-edge-cases", t:"States and edge cases", min:15,
  what:"Real products have empty, loading, error, partial, offline and overflow states. Designing them separates a concept from a design that can ship.",
  when:"Before handoff, for every screen.",
  steps:["List the states for each screen: empty, loading, partial, ideal, error.","Test long names, zero results and a thousand results.","Design first-use empty states that guide the next action.","Handle permission and network errors.","Add all of these to the handoff file."],
  out:"A state matrix for each screen.",
  avoid:["Designing only with perfect data."],
  try:"Design all five states of a notifications screen."}
]},
{t:"Testing and validation", phase:"Deliver", d:"Find out whether it works, with people and with numbers.", lessons:[
 {id:"usability-testing", t:"Usability testing", min:25,
  what:"Watching real people try realistic tasks on your design to find where they struggle. Five participants usually reveal most of the major issues in a round (Nielsen), so test in small, repeated rounds.",
  when:"As soon as you have a prototype, and again after every round of changes.",
  steps:["Write a test plan with goals and 5–7 tasks.","Write tasks as scenarios, not instructions.","Ask participants to think aloud.","Don't help; ask “What would you do next?”","Record success, errors, time and quotes, then debrief."],
  out:"A findings report with severity-rated issues and recommendations.",
  avoid:["Leading tasks such as “Click the Profile tab”.","Defending the design during the session."],
  try:"Test a competitor's app with three people on one task.",
  ref:["NN/g: Why you only need to test with 5 users","https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/"]},
 {id:"unmoderated-testing", t:"Unmoderated and remote testing", min:15,
  what:"Participants complete tasks on their own in a tool such as Maze, Lyssna or UserTesting, which records screens and metrics. It is fast and scales, but you can't ask follow-up questions.",
  when:"Validating flows at scale, and quick preference or first-click tests.",
  steps:["Keep tasks short and unambiguous.","Define success criteria for each task.","Add follow-up questions.","Run a pilot first.","Combine the metrics with the recordings."],
  out:"Task success rates, heatmaps and recordings.",
  avoid:["Complex tasks that need a moderator."],
  try:"Run a five-second test on your portfolio homepage."},
 {id:"ab-testing", t:"A/B testing", min:15,
  what:"Showing two versions to random groups of users and comparing a metric. It tells you which version performs better, not why.",
  when:"Live products with enough traffic, optimising a specific metric.",
  steps:["Write a hypothesis tied to one metric.","Change one meaningful thing.","Calculate the sample size before you start.","Run for full weeks and don't stop early.","Check statistical significance and guardrail metrics."],
  out:"A test result with a decision.",
  avoid:["Stopping as soon as the result looks good (peeking).","Testing trivial changes on low traffic."],
  try:"Write three hypotheses for a pricing page."},
 {id:"measuring-ux", t:"Measuring UX", min:20,
  what:"Numbers that track experience quality: task success, time on task, error rate, the System Usability Scale (SUS, where about 68 is average), the Single Ease Question, NPS, and Google's HEART framework (Happiness, Engagement, Adoption, Retention, Task success).",
  when:"Benchmarking, proving the impact of design, and setting goals.",
  steps:["Pick metrics tied to goals, using HEART's goals–signals–metrics method.","Benchmark the current design.","Measure the same way after changes.","Combine behavioural and attitudinal measures.","Report the change with context."],
  out:"A UX scorecard.",
  avoid:["Using NPS as the only measure of UX."],
  try:"Run SUS on an app with five people and calculate the score."},
 {id:"heuristic-evaluation", t:"Heuristic evaluation", min:15,
  what:"Several reviewers check a design against heuristics independently, then combine their findings. It is cheap and fast, and complements testing with users.",
  when:"Before testing, or when you can't reach users.",
  steps:["Use 3–5 evaluators.","Each reviews alone against the ten heuristics.","Log issues with severity ratings.","Merge and de-duplicate the lists.","Prioritise the fixes."],
  out:"A merged, severity-rated issue list.",
  avoid:["Relying on a single evaluator, who finds far fewer issues."],
  try:"Run one with two classmates on a government website."},
 {id:"accessibility-testing", t:"Accessibility testing", min:20,
  what:"Checking a design or build against WCAG with automated tools, manual checks and assistive technology.",
  when:"In design review, and before every release.",
  steps:["Run automated checks with axe, Lighthouse or WAVE.","Test keyboard-only navigation.","Test with a screen reader: VoiceOver, NVDA or TalkBack.","Zoom to 200% and check reflow at 320 px wide.","Log issues against WCAG success criteria."],
  out:"An accessibility audit report.",
  avoid:["Relying only on automated tools, which catch a minority of issues."],
  try:"Complete a purchase on any site using VoiceOver or TalkBack."}
]},
{t:"Delivery and iteration", phase:"Deliver", d:"Hand off, build it right together, present it, and keep improving.", lessons:[
 {id:"design-handoff", t:"Design handoff", min:20,
  what:"Giving developers everything they need to build accurately: specs, assets, states, behaviour and tokens.",
  when:"Before and during development.",
  steps:["Organise the Figma file with clear pages, sections, names and “Ready for dev” status.","Use components and tokens, not detached layers.","Annotate behaviour, states and edge cases.","Export assets correctly, for example SVG for icons.","Walk developers through it live."],
  out:"A development-ready file with annotations.",
  avoid:["Throwing files over the wall."],
  try:"Annotate one screen as if a new developer had to build it alone."},
 {id:"working-with-devs", t:"Working with developers", min:15,
  what:"Collaborating with engineering from discovery through build: understanding constraints, sharing ownership and solving problems together.",
  when:"Throughout the project.",
  steps:["Involve developers in research and ideation.","Ask about technical constraints early.","Learn basic HTML and CSS concepts.","Join stand-ups and sprint reviews.","Agree on how design changes are handled during the build."],
  out:"A shared workflow agreement.",
  avoid:["Designing something that can't be built in the timeline without discussing it."],
  try:"Ask a developer which part of your last design was hardest to build, and why."},
 {id:"design-qa", t:"Design QA", min:15,
  what:"Reviewing the built product against the design before release: layout, states, interactions, copy and accessibility.",
  when:"After each feature is built and before release.",
  steps:["Test on real devices and browsers.","Compare against the spec, screen by screen.","Check every state and edge case.","Log issues with screenshots and severity.","Re-test the fixes."],
  out:"A QA issue list.",
  avoid:["Letting pixel-level nitpicks crowd out serious issues."],
  try:"QA a live page of your own site against its Figma file."},
 {id:"presenting-design", t:"Presenting work and handling feedback", min:15,
  what:"Sharing work so stakeholders understand the reasoning and give useful feedback.",
  when:"Reviews, critiques and sign-offs.",
  steps:["Start with the problem and the goals.","Show the evidence from research.","Walk through the user's flow rather than a tour of features.","Ask for specific feedback against the goals.","Record decisions and next steps."],
  out:"A review deck and a decision log.",
  avoid:["Asking “What do you think?” and getting opinions about taste."],
  try:"Present one design to a friend in five minutes and ask three targeted questions."},
 {id:"iterate", t:"Measure and iterate after launch", min:10,
  what:"Shipping is a checkpoint, not the end. Post-launch data and feedback feed the next round of discovery.",
  when:"After every release.",
  steps:["Define success metrics before launch.","Monitor analytics and support tickets.","Research whatever is underperforming.","Prioritise improvements by impact and effort.","Share what you learned."],
  out:"A post-launch report and an updated backlog.",
  avoid:["Moving on without checking whether the design worked."],
  try:"Write success metrics for a feature you designed."}
]},
{t:"Portfolio and career", phase:"Career", d:"Turn your work into case studies, a portfolio and interview answers.", lessons:[
 {id:"case-studies", t:"Writing a UX case study", min:25,
  what:"A case study tells the story of a project: the problem, your role, the process, your decisions and the outcome. Hiring managers skim, so lead with the impact.",
  when:"After every significant project.",
  steps:["Open with a summary: problem, role, team, timeline and result.","Show 3–4 key decisions and why you made them.","Include research evidence and iterations, not every artefact.","Show the final designs in context.","End with outcomes and what you learned."],
  out:"A case study that takes under ten minutes to read.",
  avoid:["Listing every method in order: “Then I made personas…”","Leaving out results and reflection."],
  try:"Write a 150-word summary of your strongest project."},
 {id:"portfolio", t:"Building a portfolio", min:20,
  what:"Your portfolio is a product whose user is the hiring manager. Three or four strong case studies beat ten thin ones.",
  when:"Job searches, freelancing and promotions.",
  steps:["Pick projects that show range and depth.","Put your best case study first.","Make the site fast, clear and responsive.","State your role on every project.","Get feedback from designers and recruiters, and iterate."],
  out:"A live portfolio with three or four case studies.",
  avoid:["Pretty shots with no process.","Password-protected work with no explanation."],
  try:"Ask three people to find your contact details and your best project within 30 seconds."},
 {id:"whiteboard-challenge", t:"Whiteboard challenges", min:20,
  what:"A live exercise where you solve a design problem in 30–60 minutes while thinking aloud. Interviewers judge your process, not the final drawing.",
  when:"Design interviews.",
  steps:["Clarify the users, goals, constraints and what success means.","State your assumptions.","Pick one user and one scenario.","Draw the flow first, then sketch the key screens.","Summarise the trade-offs and next steps."],
  out:"A practised framework you can run under pressure.",
  avoid:["Jumping straight to screens.","Working in silence."],
  try:"Do a 30-minute challenge: design an ATM for people with low vision."},
 {id:"interview-prep", t:"UX interview preparation", min:15,
  what:"Design interviews usually include a portfolio presentation, a behavioural round, a design exercise and a team-fit conversation.",
  when:"Before you apply.",
  steps:["Prepare a 30–45-minute portfolio walkthrough.","Prepare STAR stories about conflict, failure, influence and ambiguity.","Research the company's product and users.","Prepare questions for the interviewers.","Practise out loud with a timer."],
  out:"A ready interview kit.",
  avoid:["Reading your slides aloud.","Not knowing the company's product."],
  try:"Record yourself presenting one case study in ten minutes, then watch it back."}
]}
];

/* ---------- study material: [type, title, url] ---------- */
const NN = "https://www.nngroup.com/";
const RES = {
"what-is-ux":[["Article","The Definition of User Experience (UX)",NN+"articles/definition-user-experience/"],["Video","UX vs. UI",NN+"videos/ux-vs-ui/"],["Article","Usability 101: Introduction to Usability",NN+"articles/usability-101-introduction-to-usability/"],["Guide","UX Basics: Study Guide",NN+"articles/ux-basics-study-guide/"]],
"double-diamond":[["Guide","Design Council: The Double Diamond","https://www.designcouncil.org.uk/our-resources/the-double-diamond/"],["Article","Design Thinking 101",NN+"articles/design-thinking/"],["Video","Design Thinking 101 (3 min)",NN+"videos/design-thinking/"],["Guide","Design Thinking: Study Guide",NN+"articles/design-thinking-study-guide/"]],
"heuristics":[["Article","10 Usability Heuristics for User Interface Design",NN+"articles/ten-usability-heuristics/"],["Article","How to Conduct a Heuristic Evaluation",NN+"articles/how-to-conduct-a-heuristic-evaluation/"],["Article","Severity Ratings for Usability Problems",NN+"articles/how-to-rate-the-severity-of-usability-problems/"],["Template","Heuristic Evaluation Workbook (PDF)","https://media.nngroup.com/media/articles/attachments/Heuristic_Evaluation_Workbook_1_Fillable.pdf"]],
"psychology":[["Guide","Laws of UX","https://lawsofux.com/"],["Article","Hick's Law","https://lawsofux.com/hicks-law/"],["Article","Fitts's Law and Its Applications in UX",NN+"articles/fitts-law/"],["Guide","Psychology for UX: Study Guide",NN+"articles/psychology-study-guide/"]],
"accessibility-basics":[["Article","Introduction to Web Accessibility (W3C)","https://www.w3.org/WAI/fundamentals/accessibility-intro/"],["Guide","WCAG 2 at a Glance","https://www.w3.org/WAI/standards-guidelines/wcag/glance/"],["Guide","How to Meet WCAG 2.2 (Quick Reference)","https://www.w3.org/WAI/WCAG22/quickref/"],["Article","Touch Targets on Touchscreens",NN+"articles/touch-target-size/"]],
"research-plan":[["Article","UX Research Cheat Sheet",NN+"articles/ux-research-cheat-sheet/"],["Article","When to Use Which UX Research Methods",NN+"articles/which-ux-research-methods/"],["Article","From Research Goals to Usability-Testing Scenarios",NN+"articles/ux-research-goals-to-scenarios/"],["Template","NN/g Free UX Templates and Guides",NN+"articles/free-ux-templates/"]],
"stakeholder-interviews":[["Article","Stakeholder Interviews 101",NN+"articles/stakeholder-interviews/"],["Article","Stakeholder Analysis for UX Projects",NN+"articles/stakeholder-analysis/"],["Guide","UX Stakeholders: Study Guide",NN+"articles/stakeholders-study-guide/"]],
"recruiting":[["Article","Screening Participants for User-Research Studies",NN+"articles/screening-participants/"],["Article","How to Use Screening Questions to Select the Right Participants",NN+"articles/screening-questions-select-research-participants/"],["PDF","How to Recruit Participants for Usability Studies (free report)","https://media.nngroup.com/media/reports/free/How_To_Recruit_Participants_for_Usability_Studies.pdf"]],
"research-ethics":[["Guide","Getting informed consent for user research (GOV.UK)","https://www.gov.uk/service-manual/user-research/getting-users-consent-for-research"],["Article","Ethical Maturity in User Research",NN+"articles/user-research-ethics/"],["Article","5 Common Ethical Dilemmas in User Research",NN+"articles/ethical-dilemmas/"],["Guide","UXPA Code of Professional Conduct","https://uxpa.org/uxpa-code-of-professional-conduct/"]],
"user-interviews":[["Article","User Interviews 101",NN+"articles/user-interviews/"],["Article","Writing an Effective Guide for a UX Interview",NN+"articles/interview-guide/"],["Article","Why User Interviews Fail",NN+"articles/why-user-interviews-fail/"],["Article","6 Mistakes When Crafting Interview Questions",NN+"articles/interview-questions-mistakes/"]],
"contextual-inquiry":[["Article","Contextual Inquiry: Observing and Interviewing Users in Context",NN+"articles/contextual-inquiry/"],["Article","Field Studies",NN+"articles/field-studies/"],["Article","Remote Contextual Inquiry: Lessons Learned",NN+"articles/remote-contextual-inquiry/"]],
"surveys":[["Article","28 Tips for Creating Great Qualitative Surveys",NN+"articles/qualitative-surveys/"],["Article","How to Run Surveys at Every Stage of the Design Cycle",NN+"articles/surveys-design-cycle/"],["Article","Analyze Qualitative Data: Thematic Analysis",NN+"articles/thematic-analysis/"]],
"diary-studies":[["Article","Diary Studies: Understanding Long-Term User Behavior",NN+"articles/diary-studies/"],["Article","Designing Diary Study Entries",NN+"articles/diary-study-entries/"],["Article","6 Tips for Better Participant Engagement in Diary Studies",NN+"articles/better-diary-studies/"]],
"competitive-analysis":[["Article","Competitive Usability Evaluations: Definition",NN+"articles/competitive-usability-evaluations/"],["Article","Competitive Usability Testing to Discover Better Designs",NN+"articles/redesign-competitive-testing/"]],
"analytics":[["Article","3 Uses for Analytics in User Experience Practice",NN+"articles/analytics-user-experience/"],["Video","Turning Analytics Findings Into Usability Studies",NN+"videos/turning-analytics-findings-usability-studies/"],["Article","Quantitative User-Research Methodologies: An Overview",NN+"articles/quantitative-user-research-methods/"]],
"affinity-mapping":[["Article","Affinity Diagramming for Sorting UX Findings and Ideas",NN+"articles/affinity-diagram/"],["Video","Affinity Diagramming in Workshops",NN+"videos/affinity-diagramming-in-workshops/"],["Article","Analyze Qualitative Data: Thematic Analysis",NN+"articles/thematic-analysis/"]],
"personas":[["Article","Personas Make Users Memorable",NN+"articles/persona/"],["Article","UX Mapping Methods Compared: A Cheat Sheet",NN+"articles/ux-mapping-cheat-sheet/"],["Article","UX Deliverables: Glossary",NN+"articles/ux-deliverables-glossary/"]],
"empathy-maps":[["Article","Empathy Mapping: The First Step in Design Thinking",NN+"articles/empathy-mapping/"],["Article","When to Empathy Map: 3 Options",NN+"articles/using-empathy-maps/"],["PDF","Empathy Mapping poster","https://media.nngroup.com/media/articles/attachments/Empathy_Mapping_Poster_A4-compressed.pdf"]],
"journey-maps":[["Article","Journey Mapping 101",NN+"articles/journey-mapping-101/"],["Article","How to Conduct Research for Customer Journey Mapping",NN+"articles/research-journey-mapping/"],["Article","Service Blueprints: Definition",NN+"articles/service-blueprints-definition/"],["Guide","UX Mapping Methods: Study Guide",NN+"articles/ux-mapping-methods-study-guide/"]],
"jobs-to-be-done":[["Article","Designing Features Using Job Stories (Intercom)","https://www.intercom.com/blog/using-job-stories-design-features-ui/"],["Book","Intercom on Jobs-to-be-Done","https://www.intercom.com/blog/jobs-to-be-done-book"]],
"problem-statements":[["Article","Using “How Might We” Questions",NN+"articles/how-might-we-questions/"],["Article","Problem Statements in UX Discovery",NN+"articles/problem-statements/"],["Article","User Need Statements: The Define Stage",NN+"articles/user-need-statements/"]],
"content-audit":[["Article","Content Inventory and Auditing 101",NN+"articles/content-audits/"],["Article","Content Strategy 101",NN+"articles/content-strategy/"]],
"card-sorting":[["Article","Card Sorting: Uncover Users' Mental Models",NN+"articles/card-sorting-definition/"],["Article","Card Sorting vs. Tree Testing",NN+"articles/card-sorting-tree-testing-differences/"],["Guide","Information Architecture: Study Guide",NN+"articles/ia-study-guide/"]],
"tree-testing":[["Article","Tree Testing: Evaluate Menu Labels and Categories",NN+"articles/tree-testing/"],["Video","Tree Testing to Evaluate IA Categories",NN+"videos/tree-testing/"],["Article","Low Findability: Four Testing Methods to Find the Causes",NN+"articles/navigation-ia-tests/"]],
"sitemaps":[["Article","Information Architecture vs. Sitemaps",NN+"articles/information-architecture-sitemaps/"],["Guide","Information Architecture: Study Guide",NN+"articles/ia-study-guide/"]],
"user-flows":[["Article","User Journeys vs. User Flows",NN+"articles/user-journeys-vs-user-flows/"],["Article","Wireflows: A UX Deliverable for Workflows and Apps",NN+"articles/wireflows/"]],
"navigation-patterns":[["Article","Basic Patterns for Mobile Navigation",NN+"articles/mobile-navigation-patterns/"],["Article","Menu-Design Checklist: 17 UX Guidelines",NN+"articles/menu-design/"],["Article","Breadcrumbs: 11 Design Guidelines",NN+"articles/breadcrumbs/"],["Article","Mega Menus Work Well for Site Navigation",NN+"articles/mega-menus-work-well/"]],
"ideation":[["Article","Facilitating an Effective Design Studio Workshop",NN+"articles/facilitating-design-studio-workshop/"],["Article","Foundational UX Workshop Activities",NN+"articles/workshop-activities/"],["Article","Scenario Mapping: Design Ideation Using Personas",NN+"articles/scenario-mapping-personas/"]],
"sketching":[["Article","Storyboards Help Visualize UX Ideas",NN+"articles/storyboards-visualize-ideas/"],["Article","How to Draw a Wireframe (Even if You Can't Draw)",NN+"articles/draw-wireframe-even-if-you-cant-draw/"]],
"wireframing":[["Article","How to Draw a Wireframe (Even if You Can't Draw)",NN+"articles/draw-wireframe-even-if-you-cant-draw/"],["Article","Wireflows: A UX Deliverable for Workflows and Apps",NN+"articles/wireflows/"],["Course","Learn UI Design in Figma (Community file)","https://www.figma.com/community/file/1214843299831883608/learn-ui-design-in-figma"]],
"interaction-design":[["Article","Microinteractions in User Experience",NN+"articles/microinteractions/"],["Article","Response Time Limits",NN+"articles/response-times-3-important-limits/"],["Article","Executing UX Animations: Duration and Motion",NN+"articles/animation-duration/"],["Article","Button States: Communicate Interaction",NN+"articles/button-states-communicate-interaction/"]],
"form-design":[["Article","Website Forms Usability: Top 10 Recommendations",NN+"articles/web-form-design/"],["Article","10 Design Guidelines for Reporting Errors in Forms",NN+"articles/errors-forms-design-guidelines/"],["Article","4 Principles to Reduce Cognitive Load in Forms",NN+"articles/4-principles-reduce-cognitive-load/"]],
"ux-writing":[["Article","The 3 I's of Microcopy",NN+"articles/3-is-of-microcopy/"],["Article","Error-Message Guidelines",NN+"articles/error-message-guidelines/"],["Article","The Four Dimensions of Tone of Voice",NN+"articles/tone-of-voice-dimensions/"],["Video","Writing for Interfaces (Apple WWDC22)","https://developer.apple.com/videos/play/wwdc2022/10037/"]],
"visual-hierarchy":[["Article","5 Principles of Visual Design in UX",NN+"articles/principles-visual-design/"],["Article","Proximity Principle in Visual Design",NN+"articles/gestalt-proximity/"],["Article","Similarity Principle in Visual Design",NN+"articles/gestalt-similarity/"],["Article","The Principle of Common Region",NN+"articles/common-region/"]],
"typography":[["Article","How Typography Fundamentals Shape How People Read (Figma)","https://www.figma.com/resource-library/typography-in-design/"],["Guide","Material Design 3: Applying Type","https://m3.material.io/styles/typography/applying-type"],["Article","Kick-start Your Typography System in Figma","https://www.figma.com/best-practices/typography-systems-in-figma/"],["Article","WebAIM: Typefaces and Fonts","https://webaim.org/techniques/fonts/"]],
"colour":[["Guide","Material Design 3: Color System","https://m3.material.io/styles/color/system/overview"],["Guide","Material Design 3: Color Roles","https://m3.material.io/styles/color/roles"],["Article","WebAIM: Evaluating Contrast and Color Use","https://webaim.org/articles/contrast/evaluating"],["Tool","WebAIM Color Contrast Checker","https://webaim.org/blog/webaim-color-contrast-checker/"]],
"grids-spacing":[["Article","Everything You Need to Know About Layout Grids in Figma","https://www.figma.com/best-practices/everything-you-need-to-know-about-layout-grids/"],["Guide","Create Layout Guides (Figma Help)","https://help.figma.com/hc/en-us/articles/360040450513-Create-layout-guides"],["Template","8-Point Grid System Layout Template","https://www.figma.com/community/file/1342415305553231324/8-point-grid-system-layout-template"]],
"design-systems":[["Article","Design Systems 101",NN+"articles/design-systems-101/"],["Book","Atomic Design by Brad Frost (free online)","https://atomicdesign.bradfrost.com/"],["Book","Atomic Design, Chapter 2: The Methodology","https://atomicdesign.bradfrost.com/chapter-2/"],["Course","Figma: Introduction to Design Systems","https://help.figma.com/hc/en-us/articles/14552901442839-Overview-Introduction-to-design-systems"]],
"responsive":[["Guide","Mobile UX: Study Guide",NN+"articles/mobile-ux-study-guide/"],["Article","Touch Targets on Touchscreens",NN+"articles/touch-target-size/"],["Article","Basic Patterns for Mobile Navigation",NN+"articles/mobile-navigation-patterns/"]],
"prototype-fidelity":[["Article","UX Prototypes: Low Fidelity vs. High Fidelity",NN+"articles/ux-prototype-hi-lo-fidelity/"],["Template","Paper Prototyping: A Cutout Kit",NN+"articles/paper-prototyping-cutout-kit/"],["Article","Test Paper Prototypes to Save Time and Money (Mozilla)",NN+"articles/mozilla-paper-prototype/"]],
"figma-prototyping":[["Guide","Guide to Prototyping in Figma","https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma"],["Guide","Use Variables in Prototypes","https://help.figma.com/hc/en-us/articles/14506587589399-Use-variables-in-prototypes"],["Guide","Create Interactive Components with Variants","https://help.figma.com/hc/en-us/articles/360061175334-Create-interactive-components-with-variants"],["Guide","Advanced Prototyping Examples","https://help.figma.com/hc/en-us/articles/17146044893591-Advanced-prototyping-examples"]],
"states-edge-cases":[["Article","Designing Empty States in Complex Applications",NN+"articles/empty-state-interface-design/"],["Article","Skeleton Screens 101",NN+"articles/skeleton-screens/"],["Article","Progress Indicators Make a Slow System Less Insufferable",NN+"articles/progress-indicators/"]],
"usability-testing":[["Article","Usability (User) Testing 101",NN+"articles/usability-testing-101/"],["Article","Thinking Aloud: The #1 Usability Tool",NN+"articles/thinking-aloud-the-1-usability-tool/"],["Article","Checklist for Moderating a Usability Test",NN+"articles/usability-checklist/"],["Article","Why You Only Need to Test with 5 Users",NN+"articles/why-you-only-need-to-test-with-5-users/"],["Guide","Qualitative Usability Testing: Study Guide",NN+"articles/qual-usability-testing-study-guide/"]],
"unmoderated-testing":[["Article","Unmoderated User Tests: How and Why",NN+"articles/unmoderated-usability-testing/"],["Article","Remote Usability Tests: Moderated and Unmoderated",NN+"articles/remote-usability-tests/"],["Article","Tools for Unmoderated Usability Testing",NN+"articles/unmoderated-user-testing-tools/"]],
"ab-testing":[["Article","A/B Testing 101",NN+"articles/ab-testing/"],["Video","A/B Testing 101",NN+"videos/ab-testing-101/"],["Article","Putting A/B Testing in Its Place",NN+"articles/putting-ab-testing-in-its-place/"]],
"measuring-ux":[["Article","Beyond NPS: SUS, NASA-TLX, and the Single Ease Question",NN+"articles/measuring-perceived-usability/"],["Article","Usability Metrics",NN+"articles/usability-metrics/"],["PDF","Google's HEART framework paper (Rodden et al.)","https://research.google.com/pubs/archive/36299.pdf"],["Article","7 Steps to Benchmark Your Product's UX",NN+"articles/product-ux-benchmarks/"]],
"heuristic-evaluation":[["Article","How to Conduct a Heuristic Evaluation",NN+"articles/how-to-conduct-a-heuristic-evaluation/"],["Template","Heuristic Evaluation Workbook (PDF)","https://media.nngroup.com/media/articles/attachments/Heuristic_Evaluation_Workbook_1_Fillable.pdf"],["Article","UX Expert Reviews",NN+"articles/ux-expert-reviews/"]],
"accessibility-testing":[["Guide","WebAIM: Web Accessibility Evaluation Guide","https://webaim.org/articles/evaluationguide/"],["Article","WebAIM: Keyboard Accessibility","https://webaim.org/techniques/keyboard/"],["Article","WebAIM: Using VoiceOver to Evaluate Accessibility","https://webaim.org/articles/voiceover/"],["Guide","WebAIM: Testing Web Content for Accessibility (Quick Reference)","https://webaim.org/resources/evalquickref/"]],
"design-handoff":[["Article","The Designer's Handbook for Developer Handoff (Figma)","https://www.figma.com/blog/the-designers-handbook-for-developer-handoff/"],["Guide","Guide to Dev Mode","https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode"],["Guide","Optimize Design Files for Developer Handoff","https://help.figma.com/hc/en-us/articles/360040521453-Optimize-design-files-for-developer-handoff"],["Article","Use Good Prototype Specifications",NN+"articles/prototype-specifications/"]],
"working-with-devs":[["Article","The Product Triad: Design's Role",NN+"articles/the-product-triad-designs-role/"],["Article","Collaborative Agile Activities Reduce Silos",NN+"articles/collaborative-agile-activities/"],["Article","5 Things Designers Need to Know for a Smooth Handoff","https://www.figma.com/blog/5-things-designers-need-to-know-for-a-smooth-handoff/"]],
"design-qa":[["Guide","Dev Mode Statuses and Notifications","https://help.figma.com/hc/en-us/articles/26781702258583-Dev-Mode-statuses-and-notifications"],["Article","Use Good Prototype Specifications",NN+"articles/prototype-specifications/"],["Guide","WebAIM: Testing Web Content for Accessibility","https://webaim.org/resources/evalquickref/"]],
"presenting-design":[["Article","Design Critiques: Encourage a Positive Culture",NN+"articles/design-critiques/"],["PDF","UX Design Critiques: Cheat Sheet","https://media.nngroup.com/media/articles/attachments/NNg_UXCritiqueCheatsheet.pdf"],["Video","How to Get Helpful Feedback",NN+"videos/get-helpful-feedback/"],["Article","Closing the Loop: After a Design Critique Ends",NN+"articles/after-design-critique/"]],
"iterate":[["Article","Iterative Design of User Interfaces",NN+"articles/iterative-design/"],["Article","Establishing Baselines for Impact",NN+"articles/establishing-baselines/"],["Article","Calculating ROI for Design Projects in 4 Steps",NN+"articles/calculating-roi-design-projects/"]],
"case-studies":[["Article","5 Steps to Creating a UX-Design Portfolio",NN+"articles/ux-design-portfolios/"],["Video","UX Portfolios",NN+"videos/ux-portfolios/"],["Article","How to Maintain a UX Portfolio Over Time",NN+"articles/maintain-ux-portfolio/"]],
"portfolio":[["Article","5 Steps to Creating a UX-Design Portfolio",NN+"articles/ux-design-portfolios/"],["Article","UX Hiring: Insights from a Design Recruiter",NN+"articles/ux-hiring-insights/"],["Article","Portfolios for UX Researchers: Top 10",NN+"articles/ux-researcher-portfolio/"]],
"whiteboard-challenge":[["Article","The Ultimate Guide to Acing a UX Whiteboard Challenge (CareerFoundry)","https://careerfoundry.com/en/blog/ux-design/whiteboard-challenge"],["Article","Whiteboard Design Challenge Framework (UX Collective)","https://uxdesign.cc/whiteboard-design-challenge-framework-cd7bdb589855"],["Book","Land Your Dream Design Job: Whiteboard Challenge (Holloway)","https://holloway.com/g/land-your-dream-design-job/sections/whiteboard-challenge"]],
"interview-prep":[["Article","How to Apply and Secure a UX Job",NN+"articles/apply-secure-ux-job/"],["Video","UX Portfolios: Preparing for Interviews",NN+"videos/ux-portfolios-interviews/"],["PDF","User Experience Careers report, 2nd edition (free)","https://media.nngroup.com/media/reports/free/UserExperienceCareers_2nd_Edition.pdf"]]
};
const SUM = {
"https://www.nngroup.com/articles/definition-user-experience/": {
"s": "UX covers every interaction a person has with a company, its services and its products. Good UX meets real needs simply and depends on engineering, marketing and design working together. It is much broader than the interface or usability alone.",
"k": [
"Usability is one quality of the interface; UX is much broader.",
"Meeting real user needs matters more than shipping every requested feature.",
"Great experiences need engineering, marketing and design to work as one."
]
},
"https://www.nngroup.com/videos/ux-vs-ui/": {
"s": "A three-minute video by Sarah Gibbons explaining why UX and UI are related but not the same, and why people mix them up.",
"k": [
"UX is everything a person experiences with an organisation and its products.",
"UI is the visible surface people touch: screens, buttons and controls.",
"Both matter, and good UI is one part of good UX."
]
},
"https://www.nngroup.com/articles/usability-101-introduction-to-usability/": {
"s": "Usability is how easily people can complete tasks with an interface, and it depends on the users, their tasks and their context. You improve it by watching representative users attempt realistic tasks, early and repeatedly. Usability plus utility makes a design useful.",
"k": [
"Five components: learnability, efficiency, memorability, errors and satisfaction.",
"Usability depends on who the users are, what they do and where.",
"Test with about five users per round and repeat across iterations."
]
},
"https://www.nngroup.com/articles/ux-basics-study-guide/": {
"s": "A curated reading list of beginner articles and videos: what UX means, user-centred thinking, research and planning methods, interface design basics, and starting a UX career.",
"k": [
"Start with the core definitions of UX and usability.",
"Design for real users, not yourself, and back decisions with research.",
"Apply principles such as simplicity, hierarchy and heuristics to every design."
]
},
"https://www.designcouncil.org.uk/our-resources/the-double-diamond/": {
"s": "The Design Council’s own explanation of the Double Diamond: a flexible visual model of the design process with four phases. It is meant as a guide, not a rigid manual, and works with any tools.",
"k": [
"Two diamonds, four phases: Discover, Define, Develop, Deliver.",
"Discover means understanding the problem by engaging the people affected.",
"Deliver tests small-scale solutions, dropping weak ones and refining strong ones."
]
},
"https://www.nngroup.com/articles/design-thinking/": {
"s": "Design thinking is a user-focused way of solving problems: a mindset plus a six-phase process of empathise, define, ideate, prototype, test and implement. It is iterative and can scale from a small team to a whole organisation.",
"k": [
"It starts from research with real users, not assumptions.",
"Expect to loop back to research after prototyping and testing.",
"Teams often forget the last step: actually building and shipping the solution."
]
},
"https://www.nngroup.com/videos/design-thinking/": {
"s": "A three-minute explainer introducing design thinking as a user-centred process for understanding needs, generating ideas and testing solutions, broken into six stages.",
"k": [
"Design thinking is centred on understanding real user needs.",
"Teams generate many ideas, then test them to drive innovation.",
"The six stages give beginners a clear structure to follow."
]
},
"https://www.nngroup.com/articles/design-thinking-study-guide/": {
"s": "A reading list ordered for beginners covering each design thinking phase: empathise, define, ideate, prototype, test and implement, with articles for each stage.",
"k": [
"Design thinking is a hands-on, user-centred approach to innovation.",
"Empathise and Define turn user research into clear opportunities.",
"Prototype and test repeatedly with real users until the solution improves."
]
},
"https://www.nngroup.com/articles/ten-usability-heuristics/": {
"s": "Jakob Nielsen’s ten broad rules of thumb for interface design: show system status, speak the user’s language, offer exits and undo, stay consistent, prevent errors, favour recognition over memory, support shortcuts, keep it minimal, help recovery from errors, and provide help.",
"k": [
"Keep people informed with timely, clear feedback.",
"Use familiar words and real-world logic, not internal jargon.",
"Prevent errors first, then make recovery easy with clear messages and undo."
]
},
"https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/": {
"s": "How to run a heuristic evaluation: evaluators judge an interface against usability guidelines, working alone first and then merging findings. It is cheap and works early, but it does not replace testing with users.",
"k": [
"Judge the design against established heuristics.",
"Use 3–5 evaluators who work independently before combining results.",
"Treat it as a complement to user research, never a substitute."
]
},
"https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/": {
"s": "How to rate usability problems so fixing effort goes where it matters. Severity combines how often a problem happens, how hard it is to overcome, whether it keeps recurring, and its market impact.",
"k": [
"Severity = frequency + impact + persistence (+ market impact).",
"Use a 0–4 scale; 4 means fix before release.",
"Average the ratings of about three evaluators for reliability."
]
},
"https://media.nngroup.com/media/articles/attachments/Heuristic_Evaluation_Workbook_1_Fillable.pdf": {
"s": "A fillable workbook that walks you through all ten heuristics. For each one you check the interface for failures, note the specific problem and draft a fix, guided by prompts.",
"k": [
"Use it as a structured checklist during an evaluation.",
"Write down the exact problem and a proposed fix for each heuristic.",
"Prompts cover feedback, language, errors, memory load, flexibility and help."
]
},
"https://lawsofux.com/": {
"s": "A visual collection of psychology-based design principles such as Hick’s, Fitts’s, Miller’s and Jakob’s laws, each explaining how people perceive, decide and remember when using products.",
"k": [
"Good design accounts for how people’s minds process information.",
"Fewer options and simpler layouts reduce decision time and effort.",
"People expect your product to work like the ones they already use."
]
},
"https://lawsofux.com/hicks-law/": {
"s": "Hick’s law: the time to make a decision grows with the number and complexity of choices. Reduce options when speed matters, break tasks into steps, highlight recommended choices and reveal features gradually.",
"k": [
"Fewer choices mean faster decisions.",
"Split complex tasks into smaller steps.",
"Introduce features progressively, but don’t oversimplify."
]
},
"https://www.nngroup.com/articles/fitts-law/": {
"s": "Fitts’s law predicts that pointing at a target takes longer the farther away and smaller it is. Apply it by making targets bigger, keeping related controls close together and using screen edges and corners.",
"k": [
"Bigger targets are faster and cause fewer mistakes.",
"Put related controls near each other to cut pointer travel.",
"Screen edges act as huge targets for a mouse, but not on touchscreens."
]
},
"https://www.nngroup.com/articles/psychology-study-guide/": {
"s": "A reading list on the psychology behind UX: attention, memory, decision-making, motivation, cognitive biases, persuasion and emotion. You don’t need a psychology degree to apply it.",
"k": [
"Design for how people actually think, not how we wish they behaved.",
"Attention and memory are limited, so reduce load and guide people.",
"Too many choices raise mental effort; simplify decisions."
]
},
"https://www.w3.org/WAI/fundamentals/accessibility-intro/": {
"s": "W3C’s starting point on accessibility: why websites and tools must work for people with disabilities, and how the same work helps older people, people on slow connections and people in difficult situations. It also covers the business case and the WCAG standards.",
"k": [
"Accessible design lets everyone perceive, understand, navigate and interact.",
"Alt text, keyboard support and transcripts reach far more people.",
"Build accessibility in from the start to avoid costly rework."
]
},
"https://www.w3.org/WAI/standards-guidelines/wcag/glance/": {
"s": "A one-page overview of WCAG 2, grouped under its four principles: perceivable, operable, understandable and robust. It applies across versions 2.1 and 2.2.",
"k": [
"Perceivable: text alternatives, captions, and layouts that adapt.",
"Operable: keyboard access, enough time, nothing that triggers seizures.",
"Understandable and robust: readable, predictable, forgiving, and compatible with assistive tech."
]
},
"https://www.w3.org/WAI/WCAG22/quickref/": {
"s": "The interactive WCAG 2.2 checklist. You can filter success criteria by level (A, AA, AAA), tags and technology, and each criterion links to techniques, common failures and a detailed explanation.",
"k": [
"Criteria are grouped under the four POUR principles.",
"Filter by level AA to see what most projects must meet.",
"Each criterion links to how to pass it and how people fail it."
]
},
"https://www.nngroup.com/articles/touch-target-size/": {
"s": "Touch controls need to be big enough physically, at least about 1 cm square, and spaced apart to prevent mis-taps. Small targets are a design problem, not a ‘fat finger’ problem.",
"k": [
"Size targets by physical size, at least 1 × 1 cm, not just pixels.",
"Leave space between targets to avoid accidental taps.",
"Make primary actions larger for people on the move or distracted."
]
},
"https://www.nngroup.com/articles/ux-research-cheat-sheet/": {
"s": "Shows how user research fits every stage of a product, grouped into discover, explore, test and listen. If you can only do one thing to improve an existing product, run qualitative usability tests.",
"k": [
"Research can start at any stage; earlier has more impact.",
"Think-aloud usability testing is the single most valuable activity.",
"Analytics shows what people do; interviews and tests show why."
]
},
"https://www.nngroup.com/articles/which-ux-research-methods/": {
"s": "Maps 20 research methods on three dimensions: attitudinal vs behavioural, qualitative vs quantitative, and context of use. It also links methods to product stages so you pick the right one rather than the familiar one.",
"k": [
"Behavioural methods show what people do; self-reports often differ.",
"Qualitative finds the cause of problems; quantitative measures their size.",
"Explore early, refine during development, benchmark after launch."
]
},
"https://www.nngroup.com/articles/ux-research-goals-to-scenarios/": {
"s": "A seven-step method for turning study goals into usability-test scenarios: identify top tasks and stakeholder concerns, rank them, write problem statements and research goals, define the behaviours to observe, then write scenarios.",
"k": [
"Start from the most important user tasks and stakeholder concerns.",
"Involve stakeholders in prioritising to build buy-in.",
"Write scenarios about outcomes, never interface steps or labels."
]
},
"https://www.nngroup.com/articles/free-ux-templates/": {
"s": "NN/g’s free downloadable templates: research plans, consent forms, interview guides, usability testing kits, workshop agendas, journey maps, service blueprints, critique guides, team role charts and career resources.",
"k": [
"Discovery templates: research plan, consent form, interview guide.",
"Mapping templates: journey maps, service blueprints, empathy maps.",
"Team and career templates: critiques, RACI roles, skill maps."
]
},
"https://www.nngroup.com/articles/stakeholder-interviews/": {
"s": "Stakeholder interviews are one-on-one conversations with people invested in the project. Held early with a semi-structured guide, they uncover history, constraints, business goals and success metrics, and build trust.",
"k": [
"They reveal project history, politics and constraints before design starts.",
"Ask about success metrics, priorities and how they want updates.",
"End by asking who else you should talk to."
]
},
"https://www.nngroup.com/articles/stakeholder-analysis/": {
"s": "How to identify and map stakeholders by power and interest (and attitude), then plan how to communicate with each group. Maps should be revisited as the project changes.",
"k": [
"A stakeholder is anyone interested in the project or needed to deliver it.",
"A power–interest grid gives four groups needing different handling.",
"Revisit the map often; power and interest shift over time."
]
},
"https://www.nngroup.com/articles/screening-participants/": {
"s": "A screener is a short questionnaire that checks whether a candidate fits your study. Good screeners focus on past behaviour, use funnel and open questions, avoid jargon, and are piloted before launch.",
"k": [
"Screen on what people have done, not what they say they’d do.",
"Avoid yes/no questions that let people guess the ‘right’ answer.",
"Pilot every screener to catch confusing wording and logic errors."
]
},
"https://www.nngroup.com/articles/screening-questions-select-research-participants/": {
"s": "How to write screening questions that find the right people without revealing what the study is about, using open questions and believable distractor answers.",
"k": [
"Don’t signal the study’s topic in your questions.",
"Open questions reveal real experience and are hard to fake.",
"Distractor options must be plausible, or they give the game away."
]
},
"https://media.nngroup.com/media/reports/free/How_To_Recruit_Participants_for_Usability_Studies.pdf": {
"s": "A free, detailed NN/g report on recruiting: planning, screening, incentives, scheduling, using agencies, session logistics and keeping a participant database.",
"k": [
"Wrong participants ruin results; recruit people who match real users.",
"Pay incentives that respect people’s time; it reduces no-shows.",
"Always plan backup participants."
]
},
"https://www.gov.uk/service-manual/user-research/getting-users-consent-for-research": {
"s": "The UK government’s rules for informed consent in user research: what participants must understand, information sheets, recording consent, adapting for disabled people and children, and deleting data when someone withdraws.",
"k": [
"Every participant needs informed consent, including colleagues.",
"Share an accessible information sheet explaining data, recording and rights.",
"If someone withdraws, stop and delete all their data."
]
},
"https://www.nngroup.com/articles/user-research-ethics/": {
"s": "Explains what teams need to protect participants’ rights, wellbeing and dignity, with a checklist to score your organisation’s research-ethics maturity.",
"k": [
"Anyone who researches with people needs ethics knowledge, whatever their title.",
"Standard consent forms and guidance keep practice consistent.",
"Sensitive topics and vulnerable groups need extra safeguards and review."
]
},
"https://www.nngroup.com/articles/ethical-dilemmas/": {
"s": "Five common ethical problems in user research (how much to disclose, concealment and deception, distressing topics, vulnerable participants, and sensitive disclosures and confidentiality) with good practice for each.",
"k": [
"Concealment or deception should be rare, and always followed by a debrief.",
"Warn people about sensitive topics and identification risks up front.",
"Protect vulnerable participants and remove sensitive personal data quickly."
]
},
"https://uxpa.org/uxpa-code-of-professional-conduct/": {
"s": "The UX Professionals Association’s code of conduct: seven principles covering duties to the public, clients, employers and colleagues, overseen by an ethics committee.",
"k": [
"Weigh risks and benefits for every stakeholder, including participants.",
"Only take on work within your education and experience.",
"Breaches can lead to expulsion from the association."
]
},
"https://www.nngroup.com/articles/user-interviews/": {
"s": "An introduction to user interviews: a discovery method where you ask open questions, listen and probe. Covers setting goals, writing a guide, building rapport, how interviews differ from usability tests, and their limits.",
"k": [
"Interviews capture attitudes and needs; usability tests observe behaviour.",
"Set specific goals, then write open questions and follow-ups.",
"Build rapport and probe, but remember memory and self-report are unreliable."
]
},
"https://www.nngroup.com/articles/interview-guide/": {
"s": "How to build a semi-structured interview guide: write research questions first, brainstorm, turn closed questions into open ones, order them logically, add probes, and pilot it.",
"k": [
"Research questions come first and shape every interview question.",
"Swap yes/no questions for prompts about specific past events.",
"Pilot the guide to catch missing, unclear or badly ordered questions."
]
},
"https://www.nngroup.com/articles/why-user-interviews-fail/": {
"s": "Why interviews often go wrong: using them to learn about behaviour, leaving stakeholders out, weak planning and sloppy analysis, and how to fix each.",
"k": [
"Interviews reveal beliefs and experiences, not reliable behaviour.",
"Observe behaviour; interview for perceptions and mental models.",
"Involve stakeholders, pilot the guide, record, transcribe and analyse as a team."
]
},
"https://www.nngroup.com/articles/interview-questions-mistakes/": {
"s": "Six common mistakes when writing interview questions, with fixes: too many closed questions, hypotheticals, leading wording, presuming reasons, compound questions and unclear phrasing.",
"k": [
"Ask open questions about real past experiences.",
"Avoid hypotheticals; people predict their own behaviour badly.",
"Keep each question single, neutral and clear."
]
},
"https://www.nngroup.com/articles/contextual-inquiry/": {
"s": "Contextual inquiry means watching a few people do their real work in their own environment, then discussing why they act as they do. It reveals habits and hidden steps that surveys and lab tests miss.",
"k": [
"Watching people in context shows habits they forget to mention.",
"Asking during the work uncovers their mental models.",
"Best for complex systems and expert users."
]
},
"https://www.nngroup.com/articles/field-studies/": {
"s": "Field studies take research out of the lab and into people’s real environments, revealing context, interruptions and workarounds. Great for discovery, but they need planning for permissions and logistics.",
"k": [
"Real settings produce findings you can apply directly.",
"Context exposes hidden problems such as noise, interruptions and other tools.",
"Plan permissions, observer rules and clear research questions."
]
},
"https://www.nngroup.com/articles/remote-contextual-inquiry/": {
"s": "Ten lessons for running contextual inquiry over video calls. It works for desk-based computer tasks and still reveals distractions and workarounds.",
"k": [
"Use screen sharing to watch real work in the person’s own setup.",
"Keep sessions to 2–3 hours; separate the intro from observation.",
"Turn your camera off while observing so they stay focused."
]
},
"https://www.nngroup.com/articles/qualitative-surveys/": {
"s": "28 tips for open-ended surveys that collect rich feedback, often before a larger quantitative survey: drafting, piloting, wording, analysing and presenting results.",
"k": [
"Pilot the survey repeatedly with real target users.",
"Keep it short and neutral to avoid skewed or abandoned answers.",
"Results are opinions, not statistics; code open text to analyse it."
]
},
"https://www.nngroup.com/articles/surveys-design-cycle/": {
"s": "Surveys fit every design stage: discovery, stakeholder, diary, competitor and persona surveys early; usability questionnaires in testing; and satisfaction metrics after launch.",
"k": [
"Choose the survey type based on where you are in the cycle.",
"Early surveys give context before you define the problem.",
"NPS, CSAT and CES monitor experience, but NPS alone is never enough."
]
},
"https://www.nngroup.com/articles/thematic-analysis/": {
"s": "A six-step way to analyse qualitative data such as interviews and field notes: tag observations with codes, group them and find recurring themes, using software, journaling or affinity diagrams.",
"k": [
"Coding labels pieces of text so similar material can be grouped.",
"A theme is a pattern that recurs across participants or sources.",
"Analyse with teammates and take breaks to reduce bias."
]
},
"https://www.nngroup.com/articles/diary-studies/": {
"s": "Diary studies are remote, long-running studies where participants log activities and experiences over days or weeks, showing context, habits and change over time.",
"k": [
"They capture behaviour in people’s real contexts, asynchronously.",
"Choose event-, interval- or signal-based logging to fit your goals.",
"Recruit extra people, use milestone incentives and pilot first."
]
},
"https://www.nngroup.com/articles/diary-study-entries/": {
"s": "How to design diary entries: closed, open and multimedia questions each trade participant effort against analysis effort. Combine formats, keep entries short and pilot them.",
"k": [
"Mix closed, open and photo/video questions for consistency plus depth.",
"Protect participant effort first; fatigue causes skipped answers.",
"Aim for 5–10 minutes per entry."
]
},
"https://www.nngroup.com/articles/better-diary-studies/": {
"s": "Six ways to keep diary-study participants engaged: recruit the right people, choose easy tools, onboard well, keep entries brief, stay in touch and use smart incentives.",
"k": [
"Screen carefully and be clear about the time commitment.",
"Short entries stop people abandoning the study.",
"Pay in instalments, with bonuses for consistency."
]
},
"https://www.nngroup.com/articles/competitive-usability-evaluations/": {
"s": "Compare your design with 2–4 competitors using expert reviews or user testing to find strengths, weaknesses and opportunities. The aim is to improve your design, not to crown a winner.",
"k": [
"Compare 2–4 competitors with expert review or competitive testing.",
"Study strong competitors, not just weak ones.",
"Use insights to improve, not to copy."
]
},
"https://www.nngroup.com/articles/redesign-competitive-testing/": {
"s": "Before a redesign, test your current site alongside one or two competitors. Participants do the same tasks while thinking aloud, showing what works, what fails and why.",
"k": [
"Treat your old site as a working prototype to learn from.",
"Test competitors with users instead of just browsing them.",
"Alternate site order and limit each participant to three sites."
]
},
"https://www.nngroup.com/articles/analytics-user-experience/": {
"s": "Three ways UX people can use analytics to support qualitative work: spotting issues, investigating their causes and verifying usability findings at scale.",
"k": [
"Fit analytics into your existing UX workflow.",
"A measurement plan links goals, desired actions and metrics.",
"Use analytics to confirm what small usability studies found."
]
},
"https://www.nngroup.com/videos/turning-analytics-findings-usability-studies/": {
"s": "A short video on turning problems found in analytics into usability studies. Numbers show behaviour but not motives, so pair them with research.",
"k": [
"Metrics show what happens, not why.",
"Combining data with user research gives sharper answers.",
"Turn analytics red flags into focused test tasks."
]
},
"https://www.nngroup.com/articles/quantitative-user-research-methods/": {
"s": "An overview of quantitative UX methods (benchmarking, analytics, A/B tests, card sorting, tree testing, surveys, eyetracking) with the use, cost and difficulty of each.",
"k": [
"Numbers persuade stakeholders and let you compare designs statistically.",
"Pick the method by research question, then by cost.",
"Use adequate samples and statistics, or results may be flukes."
]
},
"https://www.nngroup.com/articles/affinity-diagram/": {
"s": "Affinity diagramming clusters research findings or ideas into themes in three steps: generate notes, cluster them, and prioritise next actions. Includes workshop dos and don’ts.",
"k": [
"Grouping related notes reveals shared themes.",
"Have people write notes alone first to avoid dominant voices.",
"Vote on clusters, then assign actions and an owner."
]
},
"https://www.nngroup.com/videos/affinity-diagramming-in-workshops/": {
"s": "A four-minute video showing how sorting scattered notes into groups surfaces trends and aligns a team on next steps.",
"k": [
"Grouping notes reveals patterns single notes hide.",
"It’s a foundational way to build shared understanding.",
"Clusters turn dense research into actionable insights."
]
},
"https://www.nngroup.com/articles/persona/": {
"s": "Personas are fictional but realistic users built from research. They make user groups memorable, build empathy and guide design, reviews, recruiting and analytics segments.",
"k": [
"Personas must rest on real research, not assumptions.",
"A specific character is easier to remember than statistics.",
"Include only details that affect design decisions."
]
},
"https://www.nngroup.com/articles/ux-mapping-cheat-sheet/": {
"s": "Compares empathy maps, customer journey maps, experience maps and service blueprints, and gives a three-step way to choose the right one.",
"k": [
"Empathy map: what a user says, thinks, does and feels.",
"Journey map: one persona’s steps, emotions and pain points over time.",
"Service blueprint: the staff and processes behind each touchpoint."
]
},
"https://www.nngroup.com/articles/ux-deliverables-glossary/": {
"s": "A glossary of common UX deliverables, from personas and journey maps to roadmaps and wireframes: what each is, how it’s used and related methods.",
"k": [
"Deliverables document UX work for different audiences.",
"Many overlap; pick the right one for the situation.",
"Maps, personas and prioritisation frameworks each have distinct jobs."
]
},
"https://www.intercom.com/blog/jobs-to-be-done-book": {
"s": "Intercom’s book on applying Jobs-to-be-Done to software, drawn from years of use across product, design and marketing. It offers principles rather than a rigid how-to.",
"k": [
"Understand why customers switch to and away from products.",
"Identify your real competitors and what your product actually does.",
"Job stories can work better than personas for software research."
]
},
"https://www.intercom.com/blog/using-job-stories-design-features-ui/": {
"s": "Alan Klement argues that personas and user stories hide why people act, and proposes job stories instead. Using a car-loan example, he shows how focusing on situation, motivation and anxiety led to a design that built buyer trust.",
"k": [
"Demographic personas ignore why people actually choose products.",
"Job stories separate motivation from implementation, so failures are easier to diagnose.",
"Every design element should trace back to a specific situational job."
]
},
"https://media.nngroup.com/media/articles/attachments/Empathy_Mapping_Poster_A4-compressed.pdf": {
"s": "A one-page poster explaining empathy maps: a team tool that organises what you know about a user type into says, thinks, does and feels, revealing gaps and acting as a shared reference.",
"k": [
"Empathy maps condense qualitative research into one view.",
"Four quadrants: says, thinks, does, feels.",
"Keep updating it during research as a living source of truth."
]
},
"https://www.nngroup.com/articles/empathy-mapping/": {
"s": "Empathy maps visualise what a team knows about users in four quadrants. They build shared understanding and expose research gaps, but should be based on evidence, not assumptions.",
"k": [
"They put user attitudes and behaviours in one shared visual.",
"Base each note on research; label anything unsupported as an assumption.",
"Revisit and update the map as research grows."
]
},
"https://www.nngroup.com/articles/using-empathy-maps/": {
"s": "Three ways to use empathy maps: before research to find knowledge gaps, during research to capture observations, and after research to share findings in a workshop.",
"k": [
"Before research: rate your confidence to see what you really know.",
"During research: log observations into the quadrants.",
"After research: workshops build team buy-in and ownership."
]
},
"https://www.nngroup.com/articles/journey-mapping-101/": {
"s": "Journey maps visualise the steps someone takes to reach a goal, combining actions, thoughts and emotions into a story. They reveal pain points and opportunities and align teams; the article also explains how they differ from experience maps, service blueprints and story maps.",
"k": [
"Core parts: actor, scenario, phases, emotions and opportunities.",
"Making the map together builds one shared view of the experience.",
"Journey maps are for discovery; blueprints and story maps serve other goals."
]
},
"https://www.nngroup.com/articles/research-journey-mapping/": {
"s": "Journey maps need evidence. Start with data your company already has, then use interviews, field studies and diary studies, and add quantitative metrics.",
"k": [
"Assumption-based maps get dismissed and lead to bad decisions.",
"Interviews, field and diary studies reveal thoughts, feelings and actions over time.",
"What people do often differs from what they say; combine methods."
]
},
"https://www.nngroup.com/articles/service-blueprints-definition/": {
"s": "Service blueprints show how people, physical evidence and internal processes support a customer journey, helping you find weak points, remove redundancy and align departments.",
"k": [
"They reveal the hidden processes behind customer touchpoints.",
"Mapping dependencies reduces duplicated work across teams.",
"Tie each blueprint to one journey and a clear business goal."
]
},
"https://www.nngroup.com/articles/ux-mapping-methods-study-guide/": {
"s": "A reading list on UX mapping: journey maps, service blueprints, UX roadmaps, design exploration techniques and research synthesis, in a suggested order.",
"k": [
"Journey maps reveal improvement opportunities in the user’s experience.",
"Service blueprints connect people, props and processes across departments.",
"UX roadmaps are living plans that align teams on priorities."
]
},
"https://www.nngroup.com/articles/how-might-we-questions/": {
"s": "Turn discovery findings into open ‘How might we’ prompts so ideation targets real problems rather than pet solutions. Five tips: start from insights, leave out solutions, stay broad, aim at outcomes, phrase positively.",
"k": [
"Ground every HMW in a research insight.",
"Keep solutions out of the question.",
"Target outcomes (user confidence), not symptoms (call volume)."
]
},
"https://www.nngroup.com/articles/problem-statements/": {
"s": "Problem statements frame what a discovery is investigating. They set scope, focus research and build stakeholder buy-in. A good one names who is affected and the impact, without proposing a solution.",
"k": [
"Define the problem before looking for solutions.",
"Keep it to one focused problem, briefly, with no solution.",
"Say who is affected, how, and what it costs the organisation."
]
},
"https://www.nngroup.com/articles/user-need-statements/": {
"s": "User need statements (point-of-view statements) describe a specific user, their goal and the insight behind it. They align the team before ideation and give you a way to judge success.",
"k": [
"Write needs as verbs (goals), not nouns (solutions).",
"Format: persona + research-based need + insight.",
"Set success measures early."
]
},
"https://www.nngroup.com/articles/content-audits/": {
"s": "A content inventory lists every digital asset with key details; an audit judges its quality. Do both before content strategy work, then decide what to keep, update or remove, and maintain it.",
"k": [
"Inventory lists; audit evaluates.",
"An inventory alone tells you little; pair it with an audit.",
"Mark each item keep, update or remove, and give it an owner."
]
},
"https://www.nngroup.com/articles/content-strategy/": {
"s": "Content strategy is the high-level plan for creating, maintaining and eventually removing content so every piece has a purpose. It comes before tactics like copywriting or video.",
"k": [
"Strategy first; tactics follow from clear goals.",
"Content has a lifecycle: plan, create, maintain, unpublish.",
"Plan real content early instead of leaving placeholders until launch."
]
},
"https://www.nngroup.com/articles/card-sorting-definition/": {
"s": "In card sorting, participants group labelled cards into categories that make sense to them. Results shape an information architecture that matches users’ mental models, though the method ignores wider site context.",
"k": [
"It shows how users categorise content, not how you assume they do.",
"Open sorts suit discovery; predefined categories can bias results.",
"Use about 30–50 cards and 15+ participants."
]
},
"https://www.nngroup.com/articles/card-sorting-tree-testing-differences/": {
"s": "Card sorting and tree testing are both IA methods but answer different questions. Card sorting shows how people group content and generates ideas early; tree testing checks whether people can find content in a proposed or existing structure.",
"k": [
"Card sorting is for discovery and generating structure ideas.",
"Tree testing evaluates findability in a navigation structure.",
"One card sort rarely settles the final structure; follow up with more research."
]
},
"https://www.nngroup.com/articles/ia-study-guide/": {
"s": "A reading list on information architecture: organisation principles, card sorting and tree testing, and navigation design for desktop and mobile, ordered from basics up.",
"k": [
"IA is the underlying structure; navigation is its visible layer.",
"Card sorting shows how users group; tree testing checks findability.",
"Hidden navigation such as desktop hamburgers can hurt usability."
]
},
"https://www.nngroup.com/articles/tree-testing/": {
"s": "Tree testing checks whether people can find things in a proposed navigation hierarchy before visual design. Participants click through a text-only tree to locate items.",
"k": [
"Test the structure early, with labels only.",
"Don’t repeat category labels in task wording.",
"Pair the numbers with pilots and follow-up questions for context."
]
},
"https://www.nngroup.com/videos/tree-testing/": {
"s": "A short video explaining tree testing as a complement to card sorting for evaluating the categories in website navigation, proposed or existing.",
"k": [
"Tree testing complements card sorting.",
"It is ideal for checking navigation menu structures.",
"Use it on both proposed and existing menus."
]
},
"https://www.nngroup.com/articles/navigation-ia-tests/": {
"s": "When people can’t find things, is it the structure or the interface? Combine tree testing, closed card sorting, click testing and usability testing to find the real cause before an expensive redesign.",
"k": [
"Test both IA and UI to avoid guessing at the cause.",
"Tree tests and closed sorts evaluate structure and category names.",
"Click and usability tests show whether navigation is noticed and used."
]
},
"https://www.nngroup.com/articles/information-architecture-sitemaps/": {
"s": "Information architecture is the practice of organising and structuring content; a sitemap is just a diagram of that structure, useful for planning and discussion.",
"k": [
"IA is an ongoing process, not one deliverable.",
"A sitemap shows hierarchy; IA is the thinking behind it.",
"IA also covers labels, navigation, taxonomies, audits and research."
]
},
"https://www.nngroup.com/articles/user-journeys-vs-user-flows/": {
"s": "User journeys are broad, cross-channel experiences over time, usually shown in journey maps with emotions. User flows are short, step-by-step paths within one product, drawn as diagrams or wireflows.",
"k": [
"Journeys span channels and touchpoints over days or months.",
"Flows capture the steps of one task in one product.",
"Use flows to zoom into parts of a larger journey."
]
},
"https://www.nngroup.com/articles/wireflows/": {
"s": "Wireflows combine wireframe screens with flowchart arrows to show how an interface changes during a task. They suit apps where a few screens update dynamically.",
"k": [
"Screens plus arrows show interaction paths.",
"Best for apps with few, dynamic screens.",
"Less useful for sites with many static pages."
]
},
"https://www.nngroup.com/articles/mobile-navigation-patterns/": {
"s": "Mobile navigation must be easy to find while saving space for content. Compares visible navigation bars, tab bars, hamburger menus and hub homepages, each trading discoverability against space.",
"k": [
"Nav bars and tab bars work with about five options or fewer.",
"Hamburger menus hold many items but hide them.",
"Hub homepages suit task-focused apps."
]
},
"https://www.nngroup.com/articles/menu-design/": {
"s": "A 17-point checklist for usable menus: keep them visible, show where people are, use clear labels, and make them easy to operate, avoiding hidden desktop menus, low contrast and cascading submenus.",
"k": [
"Keep navigation visible on desktop.",
"Show the current location with breadcrumbs or highlighted items.",
"Use large, clickable links; avoid hover-only and multi-level cascades."
]
},
"https://www.nngroup.com/articles/breadcrumbs/": {
"s": "Breadcrumbs show where a page sits in the site hierarchy, which helps people arriving from search. Covers placement, linking, misuse on flat sites, and mobile adaptations.",
"k": [
"Show the page’s place in the hierarchy, not browsing history.",
"Link every crumb except the current page.",
"On mobile, avoid wrapping and tiny targets; consider showing only the parent."
]
},
"https://www.nngroup.com/articles/mega-menus-work-well/": {
"s": "Mega menus suit large sites by showing many grouped options at once. Good grouping, clear labels and simple content make them scannable; hover timing and accessibility need care.",
"k": [
"They show many options without scrolling or memorising.",
"Group options into labelled sets ordered by importance.",
"Delay hover-open about half a second and keep them accessible."
]
},
"https://www.nngroup.com/articles/facilitating-design-studio-workshop/": {
"s": "A design studio is a short workshop combining ideation, critique and prioritisation: individual sketching, group feedback, merging ideas and reaching consensus.",
"k": [
"Sketch alone first to generate many rough ideas fast.",
"Critique against user needs, not personal taste.",
"Prioritise with a pretend budget to reach consensus."
]
},
"https://www.nngroup.com/articles/workshop-activities/": {
"s": "Seven building blocks behind almost every UX workshop exercise: generating ideas on sticky notes, clustering, mapping relationships, storyboarding, ranking, role-playing and sharing progress.",
"k": [
"Combine these seven activities to build almost any workshop.",
"Time-boxes and quantity goals keep everyone contributing.",
"Choose anonymity or accountability deliberately."
]
},
"https://www.nngroup.com/articles/scenario-mapping-personas/": {
"s": "Scenario mapping is a workshop method that uses short persona-based task stories to spark design ideas. Covers how to write scenarios, run a sticky-note session and converge on one solution for several personas.",
"k": [
"A scenario is a short story of a persona doing one key task.",
"Keep scenarios high-level so they don’t push premature solutions.",
"Map the same scenario for each persona, then merge the ideas."
]
},
"https://www.nngroup.com/articles/storyboards-visualize-ideas/": {
"s": "Storyboards are sequences of simple illustrated panels telling a user’s story. Covers their three parts (scenario, visuals, captions), how they differ from journey maps, their uses, and a six-step process.",
"k": [
"Simple sequential images plus short captions tell the story.",
"Unlike journey maps, they focus on one narrow path, visually.",
"Rough sketches or sticky notes are enough; shared understanding is the goal."
]
},
"https://www.nngroup.com/articles/draw-wireframe-even-if-you-cant-draw/": {
"s": "Anyone can sketch a wireframe using a few standard conventions for frames, navigation, headers, images, buttons and dialogs. Keep it messy and time-boxed.",
"k": [
"Start with a rough device or browser frame.",
"Draw images as a box with an X; headers as thick lines.",
"Messy and quick keeps the focus on ideas, not looks."
]
},
"https://www.nngroup.com/articles/microinteractions/": {
"s": "Microinteractions are small, single-purpose feedback moments triggered by the user or the system. They show status, prevent errors and express brand personality.",
"k": [
"Every microinteraction starts with a trigger: a user action or system change.",
"Feedback shows status, such as progress or loading.",
"Undo and validation cues prevent mistakes and rework."
]
},
"https://www.nngroup.com/articles/response-times-3-important-limits/": {
"s": "Three response-time limits based on human perception: 0.1 second feels instant, 1 second keeps the flow of thought, 10 seconds is the limit of attention. Longer waits need progress feedback.",
"k": [
"Under 0.1 s feels like direct manipulation.",
"Over 1 s breaks flow; show that the system is working.",
"Over 10 s needs a percent-done indicator and a way to cancel."
]
},
"https://www.nngroup.com/articles/animation-duration/": {
"s": "How to specify UI animations: trigger, the properties that change (opacity, position, scale), duration, and easing. Also covers reduced-motion preferences and handoff specs.",
"k": [
"Every animation needs a trigger, properties, duration and easing.",
"Most UI animations should run about 100–400 ms; shorter is usually better.",
"Respect reduced-motion settings."
]
},
"https://www.nngroup.com/articles/button-states-communicate-interaction/": {
"s": "The five core button states (enabled, disabled, hover, focus, pressed) plus loading and selected, and how subtle visual changes tell people what a button will do.",
"k": [
"Visual changes show whether a button can be clicked.",
"Focus and pressed feedback should appear within about 100–150 ms.",
"Pair states with specific labels instead of vague ‘Continue’."
]
},
"https://www.nngroup.com/articles/web-form-design/": {
"s": "Ten guidelines for usable web forms that help people finish faster with fewer errors, which raises conversion.",
"k": [
"Remove fields that are unnecessary or can wait.",
"Don’t include reset or clear buttons.",
"State format rules up front and show specific, visible errors."
]
},
"https://www.nngroup.com/articles/errors-forms-design-guidelines/": {
"s": "Ten guidelines for form error flows that help people notice, understand and fix mistakes: inline validation, placement, colour and icons, timing, and extra help for repeated errors.",
"k": [
"Validate inline so people can fix problems immediately.",
"Put messages next to the field they describe.",
"Don’t rely on tooltips or a summary as the only error signal."
]
},
"https://www.nngroup.com/articles/4-principles-reduce-cognitive-load/": {
"s": "Four principles to make forms less mentally demanding: structure, transparency, clarity and support, shown with real good and bad examples.",
"k": [
"Group related questions and avoid multi-column layouts.",
"State requirements up front and mark optional fields.",
"Keep labels outside inputs and show errors beside fields."
]
},
"https://www.nngroup.com/articles/3-is-of-microcopy/": {
"s": "Microcopy has three jobs: inform people, influence their decisions or perception of the brand, and support smooth interaction. Judge each piece by its main purpose, not its format.",
"k": [
"Informational copy helps people decide and use the interface.",
"Influential copy drives conversion while respecting user needs.",
"Classify copy by goal and context, not element type."
]
},
"https://www.nngroup.com/articles/error-message-guidelines/": {
"s": "Good error messages are visible, placed near the problem, written in plain and polite language, offer a fix, keep the user’s input and never blame them.",
"k": [
"Show errors beside the field, using more than colour.",
"Explain in plain words and give a concrete fix.",
"Preserve input and prevent errors before submission."
]
},
"https://www.nngroup.com/articles/tone-of-voice-dimensions/": {
"s": "Tone of voice can be described on four scales: formal–casual, serious–funny, respectful–irreverent and matter-of-fact–enthusiastic.",
"k": [
"Tone shapes how people feel about your message.",
"Adjust the four dimensions to brand, audience and emotional context.",
"Test with users to check the tone lands as intended."
]
},
"https://developer.apple.com/videos/play/wwdc2022/10037/": {
"s": "An Apple WWDC session on treating interface text as design. It introduces four principles (Purpose, Anticipation, Context, Empathy) with examples from screens, alerts, empty states, localisation and accessibility labels.",
"k": [
"Define each screen’s purpose and cut text that doesn’t serve it.",
"Make alerts and empty states specific, contextual and actionable.",
"Write for everyone: translation length, plain language, clear accessibility labels."
]
},
"https://www.nngroup.com/articles/principles-visual-design/": {
"s": "Five visual design principles (scale, visual hierarchy, balance, contrast and Gestalt) that help people understand layouts and move through interfaces.",
"k": [
"Size signals importance; larger things get noticed first.",
"Hierarchy guides the eye using size, colour and spacing.",
"Keep text contrast high for legibility and accessibility."
]
},
"https://www.nngroup.com/articles/gestalt-proximity/": {
"s": "Things placed close together look related; things far apart look separate. Use whitespace to group content and clarify function, and watch responsive layouts that pull related items apart.",
"k": [
"Nearby elements read as a group.",
"Spacing can outweigh similarity in colour or shape.",
"Controls placed far from their content get overlooked."
]
},
"https://www.nngroup.com/articles/gestalt-similarity/": {
"s": "Elements that share colour, shape or size are seen as related, even when far apart. Apply consistent visual rules so people can predict behaviour.",
"k": [
"Consistent colour can mark all clickable links.",
"Reserve a unique colour for primary buttons.",
"Don’t style unrelated things alike; people will assume a link."
]
},
"https://www.nngroup.com/articles/common-region/": {
"s": "Items inside a shared boundary (a border or background) are seen as related. Containers clarify structure, but too many add clutter and false ‘end of page’ signals.",
"k": [
"Containers signal that items belong together.",
"Containers beat proximity when spacing alone can’t separate groups.",
"Too many borders create clutter and discourage scrolling."
]
},
"https://www.figma.com/resource-library/typography-in-design/": {
"s": "An introduction to typography: typeface categories, alignment, kerning, leading, hierarchy, weights, case and size, plus practical steps for choosing type.",
"k": [
"Good type improves readability and strengthens brand recognition.",
"Test typefaces with real content at several sizes before choosing.",
"Keep lines roughly 40–60 characters with generous line height."
]
},
"https://m3.material.io/styles/typography/applying-type": {
"s": "Material Design 3’s guidance on using its type scale: five roles (display, headline, title, body, label), each in large, medium and small sizes, applied consistently to create hierarchy. (Summary written from the published guidelines; the page couldn’t be read automatically.)",
"k": [
"Use roles by purpose: display and headline for emphasis, body for reading, label for UI.",
"Fewer, consistent styles create clearer hierarchy.",
"Map each role to a reusable text style or token."
]
},
"https://www.figma.com/best-practices/typography-systems-in-figma/": {
"s": "How to set up text styles in Figma: save font, size and line height as shared styles, define a type scale and line-height rules early, name styles clearly, and make text boxes grow vertically for accurate handoff.",
"k": [
"Keep text styles simple and manage colour separately.",
"Body copy needs more line spacing than headlines.",
"Set text boxes to ‘grow vertically’ so specs match code."
]
},
"https://webaim.org/techniques/fonts/": {
"s": "How typeface choices affect readability: prefer simple, familiar fonts, limit variations, use generous spacing and sensible sizes, and use real text rather than images of text.",
"k": [
"No single font is best; simplicity and familiarity matter most.",
"Avoid fonts where I, l and 1 look alike.",
"Real text adapts to user settings; images of text don’t."
]
},
"https://m3.material.io/styles/color/system/overview": {
"s": "Material Design 3’s colour system: a source colour generates tonal palettes, which map to colour roles for light and dark themes, including dynamic colour from a user’s wallpaper. (Summary written from the published guidelines; the page couldn’t be read automatically.)",
"k": [
"Colours come from tonal palettes generated from a source colour.",
"Roles, not raw hex values, are applied to components.",
"The same roles produce matching light and dark themes."
]
},
"https://m3.material.io/styles/color/roles": {
"s": "Explains Material 3 colour roles such as primary, secondary, tertiary, error and surface, each with matching ‘on’ colours for text and icons and ‘container’ variants for lower emphasis. (Summary written from the published guidelines; the page couldn’t be read automatically.)",
"k": [
"Each role pairs with an ‘on’ colour that guarantees readable contrast.",
"Containers give lower-emphasis versions of a role.",
"Surface roles define backgrounds and layered elevation."
]
},
"https://webaim.org/articles/contrast/evaluating": {
"s": "How to test text and colour contrast with online checkers, WAVE, colour pickers and Office’s checker, plus a repeatable workflow mixing automated and manual testing.",
"k": [
"Automated tools miss text over images, gradients and transparency.",
"Check that links have enough contrast with surrounding text.",
"Manual testing is still essential."
]
},
"https://webaim.org/blog/webaim-color-contrast-checker/": {
"s": "Introduces WebAIM’s Color Contrast Checker: enter or pick two colours, adjust shades and see the ratio with WCAG AA and AAA pass/fail results.",
"k": [
"Test any foreground/background pair.",
"Results show WCAG AA and AAA pass or fail.",
"Large text has a lower contrast requirement than normal text."
]
},
"https://www.figma.com/best-practices/everything-you-need-to-know-about-layout-grids/": {
"s": "Figma layout grids can be stacked on any frame, toggled and saved as styles. Shows baseline grids, nested grids, constraints relative to columns, padding visualisation and team sharing.",
"k": [
"Grids work on any frame, including components.",
"Row grids set to Top can create baseline grids.",
"Share grid styles through team libraries."
]
},
"https://help.figma.com/hc/en-us/articles/360040450513-Create-layout-guides": {
"s": "Figma’s help article on layout guides (uniform grid, columns and rows): their settings, toggling visibility, saving them as styles and how they work with constraints.",
"k": [
"Layout guides help align objects and keep designs consistent.",
"Uniform grids suit icons; columns and rows suit responsive layouts.",
"Save guides as styles and combine them with constraints."
]
},
"https://www.figma.com/community/file/1214843299831883608/learn-ui-design-in-figma": {
"s": "A free interactive course you duplicate into your own Figma account and work through inside the file. (Description only; Figma Community files can’t be read automatically.)",
"k": []
},
"https://www.figma.com/community/file/1342415305553231324/8-point-grid-system-layout-template": {
"s": "A free Figma Community template with layout grids and spacing set up on an 8-point system, ready to duplicate. (Description only; Figma Community files can’t be read automatically.)",
"k": []
},
"https://www.nngroup.com/articles/design-systems-101/": {
"s": "A design system is a set of standards, reusable components and patterns for managing design at scale. It speeds up work, keeps visuals consistent and builds a shared vocabulary, but needs dedicated upkeep.",
"k": [
"Reusable components make screens faster to build and more consistent.",
"Designers spend time on hard problems instead of visual details.",
"Systems need owners, maintenance and usage guidance."
]
},
"https://atomicdesign.bradfrost.com/": {
"s": "Brad Frost’s free online book on building and maintaining design systems: thinking of interfaces as layered hierarchies, what makes pattern libraries work, and better designer–developer workflows.",
"k": [
"Design systems help teams ship consistent interfaces faster.",
"Interfaces are layered hierarchies of reusable components.",
"Good pattern libraries and workflows keep a system maintainable."
]
},
"https://atomicdesign.bradfrost.com/chapter-2/": {
"s": "Introduces atomic design’s five stages: atoms, molecules, organisms, templates and pages. You move back and forth between small parts and full screens, and it applies to any software.",
"k": [
"Interfaces are built from small reusable blocks up to full pages.",
"Design the parts and the whole together; it isn’t a linear process.",
"Test components with real content, because content shapes them."
]
},
"https://help.figma.com/hc/en-us/articles/14552901442839-Overview-Introduction-to-design-systems": {
"s": "Figma’s free course on design systems: core concepts, foundations like colour and typography, Figma styles and libraries, documentation and maintenance.",
"k": [
"A design system combines a style guide and component library.",
"Foundations such as colour, type and icons drive consistency.",
"Documentation, versioning and feedback keep the system useful."
]
},
"https://www.nngroup.com/articles/mobile-ux-study-guide/": {
"s": "A reading list on mobile UX grouped by topic: navigation, content, gestures, responsive design and ecommerce.",
"k": [
"Small screens make basic usability guidelines matter even more.",
"Keep mobile content concise and defer secondary material.",
"Avoid early login walls and long onboarding."
]
},
"https://www.nngroup.com/articles/ux-prototype-hi-lo-fidelity/": {
"s": "Prototypes are testable hypotheses, and testing them early saves money. Compares high- and low-fidelity prototypes, interactive and static testing, and how to facilitate sessions.",
"k": [
"Watching people use a prototype tests your design hypothesis.",
"Testing early is far cheaper than fixing after launch.",
"Low fidelity speeds iteration; high fidelity adds realism."
]
},
"https://www.nngroup.com/articles/paper-prototyping-cutout-kit/": {
"s": "Introduces paper prototyping and offers a free cutout kit with device frames and placeholder pages, plus tips for simulating scrolling, dropdowns and overlays.",
"k": [
"Paper catches fundamental problems while changes are cheap.",
"The kit includes frames, loading and ‘under construction’ screens.",
"Simulate scrolling and overlays with long strips and layered sheets."
]
},
"https://www.nngroup.com/articles/mozilla-paper-prototype/": {
"s": "A case study: Mozilla redesigned its support site using paper prototypes tested with Firefox users, quickly finding which navigation and wording worked.",
"k": [
"Cheap, frequent paper iterations found good designs before coding.",
"Fewer choices and task-based paths helped people find answers.",
"Don’t mix polished visuals into low-fidelity prototypes."
]
},
"https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma": {
"s": "Figma’s guide to interactive prototypes: flows, starting points, connections, animations, device settings and sharing for feedback.",
"k": [
"Flows map journeys; each has one starting frame.",
"Connections link hotspots to destinations with transitions.",
"Share prototype links and collect comments."
]
},
"https://help.figma.com/hc/en-us/articles/14506587589399-Use-variables-in-prototypes": {
"s": "Figma variables store text, number, colour or true/false values that prototype actions can change, so prototypes can update content, sizes and visibility. Requires a paid plan.",
"k": [
"Variables hold reusable values for text, colour, size and visibility.",
"‘Set variable’ actions change values on clicks and other triggers.",
"Bind variables to components so changes update everywhere."
]
},
"https://help.figma.com/hc/en-us/articles/360061175334-Create-interactive-components-with-variants": {
"s": "Interactive components wire up variant switching inside a component set, so every instance already behaves interactively. Also covers overrides, shared states and variables.",
"k": [
"Link variants once to automate state changes.",
"Instances keep their interactions, so you need fewer frames.",
"Custom fonts may fall back for viewers; Google Fonts are safer."
]
},
"https://help.figma.com/hc/en-us/articles/17146044893591-Advanced-prototyping-examples": {
"s": "Worked examples of variables, conditionals and expressions for realistic prototypes with fewer frames: required checkboxes, form errors, counters, click tracking and volume controls.",
"k": [
"Bind a true/false variable so ticking a box enables a button.",
"Conditionals can validate a form and show an error on submit.",
"Expressions let counters and sliders update dynamically."
]
},
"https://www.nngroup.com/articles/empty-state-interface-design/": {
"s": "Empty states in complex software should be designed, not left blank. A good one shows system status, teaches the feature in context and offers a direct way to start the task.",
"k": [
"Make clear whether content is loading or simply missing.",
"Use the empty space to teach the feature briefly.",
"Add a button or link that starts the key task."
]
},
"https://www.nngroup.com/articles/skeleton-screens/": {
"s": "Skeleton screens are wireframe-like placeholders that show a page is loading and preview its layout, reducing perceived wait. They suit full-page loads, not uploads or downloads.",
"k": [
"Skeletons mimic the layout so people anticipate content.",
"Spinners for short waits; progress bars for over 10 seconds.",
"Skip placeholders for loads under one second."
]
},
"https://www.nngroup.com/articles/progress-indicators/": {
"s": "Progress indicators reassure people the system is working and make waits easier to tolerate. Use looping spinners for short delays and percent-done bars for longer ones.",
"k": [
"Give visual feedback the moment someone acts.",
"Spinners for about 2–10 seconds; percent-done bars beyond that.",
"Static ‘please wait’ text doesn’t work; show progress."
]
},
"https://www.nngroup.com/articles/usability-testing-101/": {
"s": "In a usability test a facilitator watches participants try realistic tasks and listens to their thoughts. It reveals problems, opportunities and user habits, and works best in repeated cycles.",
"k": [
"Watching real users reveals problems designers can’t predict.",
"Five participants find most common problems in one group.",
"Simple testing is cheap; elaborate studies cost far more."
]
},
"https://www.nngroup.com/articles/thinking-aloud-the-1-usability-tool/": {
"s": "Thinking aloud, where people say their thoughts as they work, is cheap, flexible and forgiving. It reveals misconceptions and reasons behind behaviour, though it isn’t statistical and facilitators can bias it.",
"k": [
"It needs no special equipment, just a few users.",
"Even imperfect facilitation still produces useful insight.",
"It lacks statistics and can be skewed by interruptions."
]
},
"https://www.nngroup.com/articles/usability-checklist/": {
"s": "A 10-step checklist for moderating usability tests: welcome, consent, tasks, follow-up questions, handling observers and closing the session.",
"k": [
"Use a facilitator guide so nothing is forgotten.",
"Tell participants you’re testing the design, not them.",
"Give one task at a time; ask open follow-ups before specific ones."
]
},
"https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/": {
"s": "Jakob Nielsen’s classic argument: about five users reveal most usability problems, with diminishing returns after that, so run several small iterative tests instead of one big study.",
"k": [
"Five users find roughly 85% of problems.",
"Spend budget on several small rounds, not one large one.",
"Add participants when user groups behave very differently."
]
},
"https://www.nngroup.com/articles/qual-usability-testing-study-guide/": {
"s": "A reading list on qualitative usability testing: planning, recruiting, writing tasks, facilitating, remote testing and special user groups.",
"k": [
"A facilitator observes participants doing tasks.",
"Recruit about five typical people per group and order tasks carefully.",
"Skilled, neutral facilitation and think-aloud keep sessions unbiased."
]
},
"https://www.nngroup.com/articles/unmoderated-usability-testing/": {
"s": "Unmoderated remote tests run without a researcher, so they’re fast and scalable but need careful planning: goals, tool choice, precise tasks, piloting, recruiting and analysis.",
"k": [
"Fast and broad, but no live guidance.",
"Tasks must be precise because people can’t ask questions.",
"Pilot and screen to exclude disengaged or professional testers."
]
},
"https://www.nngroup.com/articles/remote-usability-tests/": {
"s": "Remote testing observes participants in other locations, cutting cost and speeding recruitment. Moderated sessions allow live dialogue; unmoderated ones are recorded for later. In person is still better when feasible.",
"k": [
"Remote suits tight budgets, deadlines and spread-out users.",
"Moderated allows follow-up questions.",
"Unmoderated suits focused checks but offers no live help."
]
},
"https://www.nngroup.com/articles/unmoderated-user-testing-tools/": {
"s": "Compares 11 unmoderated testing tools: common basics, pricing, special features and integrations, to help you choose.",
"k": [
"Participants complete tasks alone with no facilitator.",
"Cost is usually the deciding factor.",
"Check for needs like webcam capture, AI analysis or randomisation."
]
},
"https://www.nngroup.com/articles/ab-testing/": {
"s": "A/B testing compares two or more versions with live traffic to see which better meets a metric. Change one thing, plan the sample size and pair results with qualitative research.",
"k": [
"Change one element so you know what caused the result.",
"Set hypothesis, metrics and sample size first; don’t stop early.",
"Track guardrail metrics to catch harmful side effects."
]
},
"https://www.nngroup.com/videos/ab-testing-101/": {
"s": "A two-minute introduction to A/B testing as a way to measure how design changes affect business outcomes.",
"k": [
"Compare two versions with live users.",
"Measure design value with data, not opinion.",
"Explore multivariate testing next."
]
},
"https://www.nngroup.com/articles/putting-ab-testing-in-its-place/": {
"s": "A/B tests measure real behaviour and small differences cheaply, but they focus on short-term single metrics, need finished designs and don’t explain why. Combine them with qualitative research.",
"k": [
"They detect small differences in real behaviour.",
"They only suit single, measurable goals on built designs.",
"Qualitative research explains the why and finds bigger problems."
]
},
"https://www.nngroup.com/articles/measuring-perceived-usability/": {
"s": "How to measure perceived usability with questionnaires: post-test tools like SUS rate the whole system, while post-task tools like SEQ and NASA-TLX pinpoint problem tasks. Use standard instruments and enough participants.",
"k": [
"SUS rates the whole system; SEQ and NASA-TLX rate individual tasks.",
"SUS scores aren’t percentages; about 68 is average.",
"Ratings need roughly 20–30 users; five can mislead."
]
},
"https://www.nngroup.com/articles/usability-metrics/": {
"s": "Usability metrics cost about four times more than qualitative studies but help track progress, compare competitors and make launch decisions. Covers success rate, time, errors and satisfaction.",
"k": [
"Metrics are expensive; use them when the decision justifies it.",
"Measure success, time on task, errors and satisfaction.",
"Combine improvements with a geometric mean."
]
},
"https://www.nngroup.com/articles/product-ux-benchmarks/": {
"s": "Seven steps to benchmark UX: choose tasks and metrics, pick a method, measure a baseline, redesign, measure again, interpret statistically, and optionally calculate ROI.",
"k": [
"Benchmark against competitors, norms or goals, not only past versions.",
"Track 2–4 metrics tied to business KPIs.",
"Use statistics to confirm differences aren’t random."
]
},
"https://www.nngroup.com/articles/ux-expert-reviews/": {
"s": "In an expert review a UX specialist inspects a design for problems and strengths, based on experience and guidelines rather than taste, usually with severity ratings and fixes.",
"k": [
"Outsiders spot issues the team is too close to see.",
"Every finding should rest on principles, not preference.",
"Expert reviews complement, not replace, usability testing."
]
},
"https://webaim.org/articles/evaluationguide/": {
"s": "WebAIM’s step-by-step accessibility evaluation by content type: images, headings, forms, tables, contrast, links, keyboard and ARIA, combining automated tools like WAVE with manual testing.",
"k": [
"Automated tools catch only some issues.",
"Use a keyboard and screen reader to check focus, order and labels.",
"Check contrast, zoom and clear headings."
]
},
"https://webaim.org/techniques/keyboard/": {
"s": "Why keyboard access matters (for motor-impaired, blind and power users) and how to get it right: visible focus, logical order, no traps, accessible custom widgets and fewer tab stops.",
"k": [
"Never remove focus outlines.",
"Use native HTML controls; avoid tabindex hacks.",
"No keyboard traps; test every interaction with the keyboard."
]
},
"https://webaim.org/articles/voiceover/": {
"s": "A beginner’s guide to testing websites with VoiceOver on Apple devices: turning it on, reading, navigating by headings and links, using the rotor, and checking images, tables and forms.",
"k": [
"Expect a learning curve; practise regularly.",
"Screen reader users navigate by keyboard, not mouse.",
"Headings, alt text, labels and table headers make content usable."
]
},
"https://webaim.org/resources/evalquickref/": {
"s": "A quick-reference workflow for accessibility testing: scan with WAVE, use a WCAG checklist, navigate by keyboard only, zoom, test with a screen reader, and check media, colour and motion.",
"k": [
"Run automated scans, then verify manually.",
"Test keyboard-only, checking focus visibility and order.",
"Use screen readers and zoom to check the real experience."
]
},
"https://www.figma.com/blog/the-designers-handbook-for-developer-handoff/": {
"s": "Figma’s handbook for developer handoff: collaborate early, design responsively and accessibly, share design-system language, and prepare well-organised files to reduce rework.",
"k": [
"Involve developers early to catch constraints.",
"Design for screen sizes, edge-case content and accessibility.",
"Use shared components and clearly named, annotated files."
]
},
"https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode": {
"s": "Dev Mode is Figma’s developer workspace for inspecting designs, reading generated code, downloading assets, comparing versions and managing handoff. Available on paid plans.",
"k": [
"Switch to Dev Mode from the toolbar or with Shift+D.",
"The inspect panel shows specs, code, styles, variables and exports.",
"Ready-for-dev statuses coordinate handoff."
]
},
"https://help.figma.com/hc/en-us/articles/360040521453-Optimize-design-files-for-developer-handoff": {
"s": "Tips for preparing Figma files before handoff: organise pages, sections and components with clear names and descriptions, and give collaborators the right access.",
"k": [
"Name pages, layers and styles descriptively.",
"Document components with variants, states and accessibility notes.",
"View access is enough for most collaborators."
]
},
"https://www.nngroup.com/articles/prototype-specifications/": {
"s": "Prototype specifications are short annotations explaining ambiguous details such as interactions, states and copy. They reduce back-and-forth and preserve design reasoning.",
"k": [
"Specs cover elements, functionality and content.",
"Use specs alongside a prototype, never instead of it.",
"Skip them for simple projects or standard components."
]
},
"https://www.nngroup.com/articles/the-product-triad-designs-role/": {
"s": "The product triad is a designer, product manager and engineering lead working as equal partners to make products desirable, viable and feasible.",
"k": [
"Design, product and engineering share ownership.",
"The designer is the authority on user needs.",
"Deciding together early avoids handoff rework and surprises."
]
},
"https://research.google.com/pubs/archive/36299.pdf": {
"s": "Google’s CHI 2010 paper introducing the HEART framework (Happiness, Engagement, Adoption, Retention, Task success) and the Goals–Signals–Metrics process for turning product goals into measurable UX indicators, with real product examples.",
"k": [
"Page views and similar business metrics miss the user experience.",
"Measure engagement and retention per user, not raw totals.",
"Define goals, then signals, then metrics, and triangulate with research."
]
},
"https://www.nngroup.com/articles/collaborative-agile-activities/": {
"s": "Three low-cost activities that let a whole Agile team contribute to design: 6-up/1-up sketching, whiteboard sessions and a telephone-style relay. They break down silos and fit different sprint timings.",
"k": [
"Sketch several ideas alone, then discuss and refine together.",
"Whiteboard sessions align developers, PMs and designers on scope.",
"Fewer people for this sprint’s work; more for future backlog."
]
},
"https://www.figma.com/blog/5-things-designers-need-to-know-for-a-smooth-handoff/": {
"s": "Handoff is an ongoing process, not a single event. Reduce back-and-forth by annotating what can’t be inferred, agreeing on shared names, organising files, archiving old work and documenting components.",
"k": [
"Annotate only what developers can’t infer.",
"Agree on shared names for elements, colours and spacing.",
"Use sections, status labels, archive pages and component descriptions."
]
},
"https://help.figma.com/hc/en-us/articles/26781702258583-Dev-Mode-statuses-and-notifications": {
"s": "Designers mark sections, frames or components as ‘ready for dev’ or ‘completed’, and developers are notified when statuses change.",
"k": [
"Statuses show whether designs are ready or finished.",
"A ‘changed’ flag appears when a marked design is edited.",
"Some notifications need higher-tier plans."
]
},
"https://www.nngroup.com/articles/design-critiques/": {
"s": "Design critiques are group conversations aimed at improving work, not judging it. Covers presenter and critic roles, facilitation, presentation tips and pitfalls.",
"k": [
"Set a clear scope and objectives; discuss, don’t command.",
"Rotate facilitators to keep discussion balanced.",
"Start with short, regular critiques to build a feedback culture."
]
},
"https://media.nngroup.com/media/articles/attachments/NNg_UXCritiqueCheatsheet.pdf": {
"s": "A one-page cheat sheet for running critiques: scope and time-box sessions, share materials beforehand, tie feedback to personas and goals, then record actions and follow up.",
"k": [
"Keep critiques to about an hour, strictly time-boxed.",
"Frame feedback around personas and goals, not the designer.",
"Record decisions and follow up on actions."
]
},
"https://www.nngroup.com/videos/get-helpful-feedback/": {
"s": "A short video on getting useful feedback: brief stakeholders on context before the review and ask explicitly for the type of feedback you need.",
"k": [
"Share context before showing work.",
"Ask for the specific kinds of feedback you need.",
"Structured requests produce actionable critique."
]
},
"https://www.nngroup.com/articles/after-design-critique/": {
"s": "Critiques need follow-up: show what changed because of feedback, explain what you didn’t act on and why, and check in at key moments such as handoff.",
"k": [
"Credit people by linking changes to their feedback.",
"Be open about rejected feedback and your reasoning.",
"Skipping follow-up makes future critiques shallow."
]
},
"https://www.nngroup.com/articles/iterative-design/": {
"s": "Interfaces should be refined through repeated testing, because perfect first designs are virtually impossible. Four case studies show large usability gains over successive versions.",
"k": [
"Redesign around the problems test users actually hit.",
"Early iterations give the biggest gains.",
"Plan for at least three versions; some metrics may dip temporarily."
]
},
"https://www.nngroup.com/articles/establishing-baselines/": {
"s": "Collect baseline metrics before a project starts so you can show real impact later. Choose one behaviour-based metric tied to the user problem and document how you measured it.",
"k": [
"Measure before design starts to have a comparison point.",
"Pick one behaviour-linked metric.",
"Document the method and share the baseline early."
]
},
"https://www.nngroup.com/articles/calculating-roi-design-projects/": {
"s": "Four steps to show design’s return on investment: benchmark a UX metric, choose a business KPI, convert the change into money, and report the estimate transparently.",
"k": [
"Measure a UX metric before and after the change.",
"Choose a KPI stakeholders care about, usually money.",
"Report ROI as a transparent estimate, not a forecast."
]
},
"https://www.nngroup.com/articles/ux-design-portfolios/": {
"s": "Five steps to a UX portfolio that shows your process, not just polished screens: choose relevant projects, write case studies, pick a format, get feedback and handle NDAs.",
"k": [
"Show research, messiness and iterations, not just final visuals.",
"Pick three to five projects that match the job you want.",
"Include context, role, decisions, outcomes and lessons."
]
},
"https://www.nngroup.com/videos/ux-portfolios/": {
"s": "A video on building UX portfolios for experienced, entry-level and career-changing designers: show projects and deliverables, told as a story for the hiring manager.",
"k": [
"Include projects and the deliverables they produced.",
"Structure each piece as a narrative.",
"Design every decision around the hiring manager."
]
},
"https://www.nngroup.com/articles/maintain-ux-portfolio/": {
"s": "Review your year’s work annually to keep your portfolio and CV current. Collect deliverables, feedback and context in one place while memories are fresh.",
"k": [
"A yearly review breaks portfolio upkeep into small tasks.",
"Save all deliverables, plus feedback and metrics.",
"Write context for each visual and capture ‘before’ states."
]
},
"https://www.nngroup.com/articles/stakeholders-study-guide/": {
"s": "A reading list on working with stakeholders: engagement, involving them in research, workshops and persuasive communication.",
"k": [
"A stakeholder is anyone with interest in or influence over the project.",
"Involve stakeholders in research and workshops to build buy-in.",
"Translate UX work into business value and use evidence such as video clips."
]
},
"https://www.nngroup.com/articles/ux-hiring-insights/": {
"s": "A design recruiter (and former designer) explains why applications get rejected, how hiring teams judge craft, and how the job market has shifted toward employers.",
"k": [
"Tailor materials for non-designer reviewers such as recruiters and PMs.",
"‘Craft’ means different things to different teams.",
"Fast rejections usually come from manual reviews and fixed criteria, not bots."
]
},
"https://www.nngroup.com/articles/ux-researcher-portfolio/": {
"s": "Ten recommendations for UX researcher portfolios: know your audience, choose three to five recent projects, share key artefacts, explain your role and impact, and write plainly.",
"k": [
"Show hiring managers your research types, approach and results.",
"Choose three to five recent, impactful projects.",
"Explain context, your role and measurable impact in plain language."
]
},
"https://careerfoundry.com/en/blog/ux-design/whiteboard-challenge": {
"s": "Whiteboard challenges are timed design exercises (usually 30–60 minutes) done in front of interviewers, who watch your thinking, questions, assumptions and collaboration rather than the final sketch.",
"k": [
"You’re judged on process, not polished sketches.",
"Ask clarifying questions and state assumptions aloud.",
"Practise a framework, rehearse with feedback and reflect afterwards."
]
},
"https://uxdesign.cc/whiteboard-design-challenge-framework-cd7bdb589855": {
"s": "A UX Collective article offering a step-by-step framework for whiteboard design challenges. (Description only; this page couldn’t be read automatically.)",
"k": []
},
"https://holloway.com/g/land-your-dream-design-job/sections/whiteboard-challenge": {
"s": "A chapter from the Holloway guide on design job interviews: how whiteboard challenges are assessed, setting context, narrowing the problem, sketching journeys, common mistakes and how to practise.",
"k": [
"Spend less than half the time on context; leave most for solutions.",
"Think in user journeys and flows, not isolated components.",
"Clarify expectations, think aloud and welcome interviewer input."
]
},
"https://www.nngroup.com/articles/apply-secure-ux-job/": {
"s": "A guide for UX job seekers: polishing portfolio and CV, using AI to tailor applications, practising interviews, researching employers, handling assessments and negotiating offers.",
"k": [
"Send fewer, better-targeted applications.",
"AI drafts help, but verify and personalise everything.",
"Don’t accept immediately; take time and negotiate."
]
},
"https://www.nngroup.com/videos/ux-portfolios-interviews/": {
"s": "A short video on the two jobs of a UX portfolio: getting you the interview, and supporting you during it.",
"k": [
"First, the portfolio must win the interview.",
"Second, it should guide the conversation in the interview.",
"Design it with both moments in mind."
]
},
"https://media.nngroup.com/media/reports/free/UserExperienceCareers_2nd_Edition.pdf": {
"s": "NN/g’s free report surveying UX practitioners worldwide about their careers: backgrounds, skills, satisfaction and how they entered the field.",
"k": [
"Most UX professionals are satisfied with their careers.",
"Degrees help but aren’t required; soft skills and experience matter most.",
"Mentorship, internships and community speed up entry into the field."
]
},
"https://www.coursera.org/professional-certificates/google-ux-design": {
"s": "Google’s beginner UX certificate on Coursera: eight courses, about six months at ten hours a week, covering the design process, research, Figma, prototyping and usability studies, ending with three portfolio projects.",
"k": [
"Covers the full process from empathising to testing.",
"Hands-on practice with Figma, wireframes, prototypes and studies.",
"Ends with three portfolio projects and job-search support."
]
},
"https://help.figma.com/hc/en-us/articles/30848209492887-Course-overview-Figma-Design-for-beginners-2025": {
"s": "Figma’s free beginner course: build a responsive, interactive portfolio website step by step, learning shapes, text, frames, auto layout, components and prototyping. Works on the free plan.",
"k": [
"You build a portfolio site from your first layer.",
"Moves from basics to responsive layouts, components and prototypes.",
"The free Starter plan is enough."
]
},
"https://www.w3.org/WAI/tutorials/": {
"s": "W3C’s free accessibility tutorials for designers, developers and writers on images, tables, forms, menus and carousels, each mapped to WCAG criteria.",
"k": [
"Practical, task-based guidance for accessible content.",
"Tools and CMSs can help authors create accessible content.",
"Each tutorial lists the WCAG criteria it covers."
]
},
"https://media.nngroup.com/media/articles/attachments/User_Research_Methods_A4-compressed.pdf": {
"s": "A printable guide mapping 20 research methods on three dimensions: attitudinal vs behavioural, qualitative vs quantitative, and context of use, to help you choose the right method.",
"k": [
"Attitudinal = what people say; behavioural = what they do.",
"Qualitative explains why; quantitative measures how much.",
"Choose by product stage and research question."
]
},
"https://ixdf.org/literature/topics": {
"s": "The Interaction Design Foundation’s free library of design articles and videos, organised by topic, from design thinking and UX research to UI design and accessibility.",
"k": [
"Browse by topic for any UX concept.",
"Large sections on UX design and usability.",
"Paid courses and certificates are also offered."
]
},
"https://www.nngroup.com/articles/": {
"s": "Nielsen Norman Group’s full library of free articles and videos on UX research and design, searchable by topic. (Reference site.)",
"k": []
},
"https://m3.material.io/": {
"s": "Google’s Material Design 3 guidelines: foundations, styles (colour, type, shape, motion) and component specs for Android and the web. (Reference site.)",
"k": []
},
"https://developer.apple.com/design/human-interface-guidelines/": {
"s": "Apple’s Human Interface Guidelines: design principles, patterns and component guidance for iOS, iPadOS, macOS, watchOS and visionOS. (Reference site.)",
"k": []
}
};
Object.assign(SUM, {"https://www.nngroup.com/videos/prioritize-ux-findings-severity/": {"s": "Evan Sunwall shows how to rate issues from usability tests or heuristic evaluations on a severity scale built from a few consistent criteria, so the team knows what to fix first.", "k": ["Severity ratings decide which problems get fixed first.", "Use a small, consistent set of criteria for every rating.", "Works for both usability-study and heuristic-evaluation findings."]}, "https://www.nngroup.com/videos/heuristic-evaluation/": {"s": "Jakob Nielsen introduces heuristic evaluation: checking an interface against ten broad principles of interaction design as a quick, low-cost review.", "k": ["Heuristics are broad rules of thumb, not detailed guidelines.", "Evaluators check the design against ten proven principles.", "Fast and cheap, so it’s useful early."]}, "https://www.nngroup.com/videos/microinteractions/": {"s": "Explains microinteractions, the brief moments that give feedback, prevent errors and express brand, and why getting these small details right lifts the whole experience.", "k": ["Microinteractions are small, single-purpose moments triggered by user or system.", "Small details like feedback and status shape perceived quality.", "Good ones prevent errors and add personality."]}, "https://www.nngroup.com/videos/3-response-time-limits-interaction-design/": {"s": "Why speed matters and how acceptable delays depend on context, falling at roughly 0.1, 1 and 10 seconds.", "k": ["Slow interfaces drive people away.", "The right limit depends on the situation.", "Remember the three thresholds: 0.1 s, 1 s, 10 s."]}, "https://www.nngroup.com/videos/proximity-gestalt/": {"s": "Elements placed close together look related; elements far apart look like they do different jobs. Use spacing deliberately to show structure.", "k": ["Nearby elements are seen as a group.", "Distance signals different roles.", "Use spacing to communicate relationships."]}, "https://www.nngroup.com/videos/similarity-gestalt-principle/": {"s": "Kate Moran explains how elements that share shape, colour or size are perceived as related.", "k": ["Shared visual traits make elements feel related.", "Shape, colour and size can all signal grouping.", "Consistent styling shows what belongs together."]}, "https://www.nngroup.com/videos/system-usability-scale/": {"s": "Explains SUS, a ten-question survey given at the end of a usability test to measure perceived usability of the whole product and compare it with others.", "k": ["SUS is ten questions asked after a test.", "It rates the whole product, not individual tasks.", "Scores let you benchmark against other products."]}, "https://www.nngroup.com/videos/seq-vs-sus/": {"s": "Contrasts SUS, for benchmarking a whole system, with the Single Ease Question, asked after each task to find specific problem areas.", "k": ["SUS measures overall perceived usability.", "SEQ rates each task’s difficulty right after it.", "Interpret both alongside qualitative findings."]}, "https://www.nngroup.com/videos/empty-states-in-application-design-guidelines/": {"s": "How well-designed empty containers reassure people, teach how the system works and guide them to start key tasks.", "k": ["Show what the system is doing.", "Use empty states to teach the feature.", "Add a direct call to action."]}, "https://www.nngroup.com/videos/skeleton-screens-vs-progress-bars-vs-spinners/": {"s": "Compares three loading indicators and when each fits.", "k": ["Skeleton screens reduce perceived wait for full-page loads.", "Progress bars and spinners also signal loading.", "Choose the indicator based on the situation and wait length."]}, "https://www.nngroup.com/videos/4-key-components-service-blueprints/": {"s": "Sarah Gibbons explains the four core components of a service blueprint and how they connect staff, physical objects and workflows.", "k": ["Blueprints show how staff, objects and workflows connect.", "Four core elements form the framework.", "It scales to projects of any size."]}, "https://www.nngroup.com/videos/tone-of-voice-dimensions/": {"s": "Kate Moran explains how interface wording shapes personality and how to tune tone on four scales: humour, formality, respectfulness and enthusiasm.", "k": ["Every word carries tone beyond its meaning.", "Tune humour, formality, respect and enthusiasm.", "Match tone to brand, audience and context."]}, "https://www.nngroup.com/videos/remote-card-sorting/": {"s": "Five steps for running a card sort remotely to learn how people group content.", "k": ["Remote card sorting follows five steps.", "Groupings reveal people’s mental models.", "Results guide a navigation structure that matches expectations."]}, "https://www.nngroup.com/videos/research-journey-mapping/": {"s": "Kate Kaplan recommends hands-on qualitative research for journey maps: interviews, field visits and diary studies.", "k": ["Choose methods where you talk to or watch users.", "Interviews, field visits and diaries all fit.", "Watching real behaviour shows the steps people actually take."]}, "https://www.nngroup.com/videos/using-empathy-maps/": {"s": "Sarah Gibbons shows how empathy mapping gathers what you know about users into one place and produces a quick picture of their attitudes and behaviours.", "k": ["It gathers scattered user knowledge in one place.", "The map gives a quick read on attitudes and behaviours.", "Use it to plan research, capture insights and share findings."]}, "https://www.nngroup.com/videos/when-to-empathy-map/": {"s": "Kate Kaplan explains three moments to use empathy maps: planning research, capturing insights during it, and sharing findings afterwards.", "k": ["Before research: plan what to learn.", "During research: capture insights.", "After research: communicate findings."]}, "https://www.nngroup.com/videos/think-aloud/": {"s": "Kate Kaplan explains how to get participants to keep talking during a usability test: introduce the technique, explain why it matters, reinforce it and prompt gently.", "k": ["Explain think-aloud and why it matters before starting.", "Encourage ongoing commentary during tasks.", "Use gentle, well-timed prompts when people go quiet."]}, "https://www.nngroup.com/videos/paper-prototyping-101/": {"s": "How cheap paper mockups let you test layouts with users early and revise them on the spot, before any code.", "k": ["Paper prototypes give fast, cheap feedback.", "Early testing catches confusing structure before development.", "You can change sketches during the session."]}, "https://www.nngroup.com/videos/paper-prototyping-tutorial/": {"s": "A full tutorial on making paper prototypes and running test sessions where a person swaps screens in response to users’ taps.", "k": ["Paper mockups get feedback before coding.", "A ‘computer’ person swaps screens as users tap.", "Different fidelity levels reveal different problems."]}});
const VINFO = {"https://www.nngroup.com/videos/prioritize-ux-findings-severity/": ["Communicating UX Findings Using a Severity Scale", "3 min"], "https://www.nngroup.com/videos/heuristic-evaluation/": ["Heuristic Evaluation", "3 min"], "https://www.nngroup.com/videos/microinteractions/": ["Why Microinteractions are Important for UX", "3 min"], "https://www.nngroup.com/videos/3-response-time-limits-interaction-design/": ["The 3 Response Time Limits in Interaction Design", "4 min"], "https://www.nngroup.com/videos/proximity-gestalt/": ["Proximity: Gestalt Principle for UI Design", "3 min"], "https://www.nngroup.com/videos/similarity-gestalt-principle/": ["Similarity: Gestalt Principle for UI Design", "3 min"], "https://www.nngroup.com/videos/system-usability-scale/": ["The System Usability Scale (SUS)", "7 min"], "https://www.nngroup.com/videos/seq-vs-sus/": ["SEQ vs. SUS", "4 min"], "https://www.nngroup.com/videos/empty-states-in-application-design-guidelines/": ["Empty States in Application Design: 3 Guidelines", "3 min"], "https://www.nngroup.com/videos/skeleton-screens-vs-progress-bars-vs-spinners/": ["Skeleton Screens vs. Progress Bars vs. Spinners", "4 min"], "https://www.nngroup.com/videos/4-key-components-service-blueprints/": ["4 Key Components of Service Blueprints", "2 min"], "https://www.nngroup.com/videos/tone-of-voice-dimensions/": ["The Four Dimensions of Tone of Voice in UX Writing", "3 min"], "https://www.nngroup.com/videos/remote-card-sorting/": ["Remote Card Sorting", "6 min"], "https://www.nngroup.com/videos/research-journey-mapping/": ["How to Conduct Research for Customer Journey Mapping", "4 min"], "https://www.nngroup.com/videos/using-empathy-maps/": ["How to Use Empathy Maps", "4 min"], "https://www.nngroup.com/videos/when-to-empathy-map/": ["When to Empathy Map", "3 min"], "https://www.nngroup.com/videos/think-aloud/": ["Help Users Think Aloud", "4 min"], "https://www.nngroup.com/videos/paper-prototyping-101/": ["Paper Prototyping 101", "3 min"], "https://www.nngroup.com/videos/paper-prototyping-tutorial/": ["Paper Prototyping: How to Create & Usability-Test Simple UI Prototypes", "40 min"], "https://www.nngroup.com/videos/ux-vs-ui/": [null, "3 min"], "https://www.nngroup.com/videos/design-thinking/": [null, "3 min"], "https://www.nngroup.com/videos/affinity-diagramming-in-workshops/": [null, "4 min"], "https://www.nngroup.com/videos/ab-testing-101/": [null, "2 min"]};
const ATTACH = {"https://www.nngroup.com/articles/definition-user-experience/": ["https://www.nngroup.com/videos/ux-vs-ui/"], "https://www.nngroup.com/articles/design-thinking/": ["https://www.nngroup.com/videos/design-thinking/"], "https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/": ["https://www.nngroup.com/videos/prioritize-ux-findings-severity/"], "https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/": ["https://www.nngroup.com/videos/heuristic-evaluation/"], "https://www.nngroup.com/articles/analytics-user-experience/": ["https://www.nngroup.com/videos/turning-analytics-findings-usability-studies/"], "https://www.nngroup.com/articles/affinity-diagram/": ["https://www.nngroup.com/videos/affinity-diagramming-in-workshops/"], "https://www.nngroup.com/articles/empathy-mapping/": ["https://www.nngroup.com/videos/using-empathy-maps/"], "https://www.nngroup.com/articles/using-empathy-maps/": ["https://www.nngroup.com/videos/when-to-empathy-map/"], "https://www.nngroup.com/articles/research-journey-mapping/": ["https://www.nngroup.com/videos/research-journey-mapping/"], "https://www.nngroup.com/articles/service-blueprints-definition/": ["https://www.nngroup.com/videos/4-key-components-service-blueprints/"], "https://www.nngroup.com/articles/card-sorting-definition/": ["https://www.nngroup.com/videos/remote-card-sorting/"], "https://www.nngroup.com/articles/tree-testing/": ["https://www.nngroup.com/videos/tree-testing/"], "https://www.nngroup.com/articles/microinteractions/": ["https://www.nngroup.com/videos/microinteractions/"], "https://www.nngroup.com/articles/response-times-3-important-limits/": ["https://www.nngroup.com/videos/3-response-time-limits-interaction-design/"], "https://www.nngroup.com/articles/tone-of-voice-dimensions/": ["https://www.nngroup.com/videos/tone-of-voice-dimensions/"], "https://www.nngroup.com/articles/gestalt-proximity/": ["https://www.nngroup.com/videos/proximity-gestalt/"], "https://www.nngroup.com/articles/gestalt-similarity/": ["https://www.nngroup.com/videos/similarity-gestalt-principle/"], "https://www.nngroup.com/articles/paper-prototyping-cutout-kit/": ["https://www.nngroup.com/videos/paper-prototyping-101/", "https://www.nngroup.com/videos/paper-prototyping-tutorial/"], "https://www.nngroup.com/articles/empty-state-interface-design/": ["https://www.nngroup.com/videos/empty-states-in-application-design-guidelines/"], "https://www.nngroup.com/articles/skeleton-screens/": ["https://www.nngroup.com/videos/skeleton-screens-vs-progress-bars-vs-spinners/"], "https://www.nngroup.com/articles/thinking-aloud-the-1-usability-tool/": ["https://www.nngroup.com/videos/think-aloud/"], "https://www.nngroup.com/articles/measuring-perceived-usability/": ["https://www.nngroup.com/videos/system-usability-scale/", "https://www.nngroup.com/videos/seq-vs-sus/"], "https://www.nngroup.com/articles/ab-testing/": ["https://www.nngroup.com/videos/ab-testing-101/"], "https://www.nngroup.com/articles/design-critiques/": ["https://www.nngroup.com/videos/get-helpful-feedback/"], "https://www.nngroup.com/articles/ux-design-portfolios/": ["https://www.nngroup.com/videos/ux-portfolios/"], "https://www.nngroup.com/articles/apply-secure-ux-job/": ["https://www.nngroup.com/videos/ux-portfolios-interviews/"]};
const ATTACHED = new Set(Object.values(ATTACH).flat());
const NOTES = {"https://www.nngroup.com/articles/definition-user-experience/":{"o":"UX covers everything a person experiences when dealing with a company, its services and its products. Strong UX solves real needs simply and pleasantly, which takes several disciplines working together. The article also separates UX from the interface itself and from usability.","i":[["Broad scope","UX includes every point of contact between a customer and an organisation, not only the screens people tap or click."],["Needs first","A good experience starts by solving the user’s actual problem efficiently, rather than delivering whatever features were requested."],["Cross-disciplinary work","Engineering, marketing, graphic and industrial design, and interface design have to blend into one coherent experience."],["UI is not UX","A polished interface can still fail people if the content or data behind it is lacking."],["Usability is narrower","Usability describes how learnable, efficient and pleasant an interface is; UX covers a much wider set of factors."],["Movie database example","A well-designed film search still frustrates someone if the catalogue doesn’t include the obscure titles they want."]],"a":["Map every customer touchpoint to find gaps beyond the interface.","Ask what users need to accomplish before committing to feature requests.","Involve engineering, marketing and design early so decisions align.","Test the interface’s usability, then check whether the content behind it meets expectations."],"t":[["User experience (UX)","A person’s overall interactions with a company, its services and its products, taken as a whole."],["User interface (UI)","The visible, interactive layer people use to operate a system; an important but partial piece of UX."],["Usability","How easy an interface is to learn, how efficient to use and how pleasant."]]},"https://www.nngroup.com/videos/ux-vs-ui/":{"o":"A three-minute video by Sarah Gibbons on how user experience and user interface relate and differ. They overlap so much that people confuse them, but they cover different scopes.","i":[["Closely linked","UX and UI overlap heavily, which is why they get mixed up, but each covers a different scope."],["UX is broad","UX spans a person’s whole relationship with a company, including services and products, not just screens."],["UI is the touchable layer","UI is the visible, interactive surface where people read, tap and control a product."],["Disciplines involved","Interaction design and visual design both shape how an interface looks and behaves."],["Small details count","Microinteractions and button states feed into the larger experience despite their size."]],"a":["Map the whole journey before judging individual screens.","Review layout, labels and controls on their own, then check how they fit the flow.","Confirm every control gives clear feedback when used."],"t":[["User experience","The overall impression of how a person engages with an organisation and its products."]]},"https://www.nngroup.com/articles/usability-101-introduction-to-usability/":{"o":"Usability measures how smoothly people finish tasks with a design, and it depends on the users, their goals and their setting. The article explains why it matters, how testing with real people drives improvement, and how AI is changing evaluation.","i":[["Five components","Learnability, efficiency once trained, memorability after a break, number and severity of errors, and satisfaction."],["Weighting varies","Which component matters most depends on the product: a yearly tax site needs easy learning; an all-day tool needs speed."],["Context shapes results","The same screen can work for one person, task or device and fail for another, so name the who, what and where."],["Utility plus usability","A product needs the right features and needs to be easy to use; missing either makes it far less valuable."],["UX is broader","User experience includes support, pricing and after-sale experience; usability is one important part."],["Test early and often","Watching representative people try realistic tasks on prototypes, fixing problems and retesting is the core method."]],"a":["Recruit participants who closely match your real users.","Write realistic task scenarios and don’t hint at answers.","Test rough prototypes early, fix what you find, then retest.","Track success rate, time on task, errors and satisfaction to compare versions."],"t":[["Usability","How smoothly and successfully someone can get a job done with an interface."],["Utility","Whether a product has the functions people need."],["Usefulness","The value a product has when it offers both utility and usability."]]},"https://www.nngroup.com/articles/ux-basics-study-guide/":{"o":"A curated beginner path through NN/g’s articles and videos on UX: foundations, the user-centred mindset, research planning, interface design and building a career.","i":[["Purpose of UX","UX aims to improve how people experience products and services, usually digital, though the thinking applies to physical things too."],["UX versus usability","A product can work well and still leave people with a poor overall impression; usability is only one part."],["User-first mindset","Design for real people, not your own preferences, and observe behaviour instead of guessing."],["Research before design","Interviews, personas and testing reduce guesswork and lead to better early decisions."],["Interface fundamentals","Visual hierarchy, consistent design systems and usability heuristics help people find features and finish tasks."],["Career entry","A focused portfolio, a tailored CV and hands-on practice help newcomers get into UX."]],"a":["Read the core definitions first, then the short videos.","Interview a few real users before sketching screens.","Run a small usability test on an app you use often.","Write a case study showing research, decisions and results."],"t":[["Interaction cost","The mental and physical effort a user spends to reach a goal."],["Mental model","What a user believes about how a system works, shaping what they expect."]]},"https://www.designcouncil.org.uk/our-resources/the-double-diamond/":{"o":"The Design Council’s explanation of the Double Diamond, a visual model of how design and innovation projects unfold. Four phases sit in two diamonds: one for understanding the problem, one for shaping the solution. It is a flexible outline, not a fixed method.","i":[["Origins","Created around 2003 to give the Design Council a shared, named structure for describing design work."],["Two diamonds","Each diamond widens then narrows: the first clarifies the real problem, the second narrows toward a workable solution."],["Research before answers","The early phase relies on talking with and observing affected people, so assumptions get tested."],["Reframing","Research insights can be used to restate the challenge before any solutions are generated."],["Many options first","Development encourages a wide range of answers, drawing on outside inspiration and varied collaborators."],["Small tests","Delivery means trying solutions at small scale, dropping weak ideas and improving promising ones."]],"a":["Interview people affected by the issue before writing a problem statement.","Rewrite the challenge several ways using what research revealed.","Generate many candidate solutions with diverse collaborators.","Prototype cheaply, keep what works and drop what doesn’t."],"t":[["Discover","The first phase: understanding the real problem by spending time with affected people."],["Deliver","The final phase: testing solutions at small scale and refining the ones that work."]]},"https://www.nngroup.com/articles/design-thinking/":{"o":"Design thinking is both a user-focused mindset and a six-phase method for solving problems. The article explains why teams benefit from it, notes that it works in flexible cycles, and traces its roots to earlier design practice.","i":[["Mindset plus method","A belief that hands-on, user-centred work fuels innovation, paired with a concrete sequence of steps."],["Start with real people","Research must come from watching users; solutions built on assumptions miss what people struggle with."],["Solve the right problem","A polished answer to the wrong problem still fails, so defining the problem matters as much as designing."],["Diverge, then converge","Generate many unconventional ideas without judging early, then narrow through prototypes and testing."],["Loop, don’t march","Phases repeat; testing often reveals gaps that send the team back to research."],["Execution decides results","Implementation is the most-skipped phase, yet insights only create value once a solution reaches users."]],"a":["Observe several real users and record their frustrations before proposing fixes.","Cluster research notes and write the core user need in one sentence.","Sketch many rough options, then build quick, low-detail prototypes.","Retest revised prototypes and schedule time to actually ship."],"t":[["Design thinking","A user-centred problem-solving approach supported by a six-phase process."],["Empathize","The first phase: studying how users behave, speak, think and feel."],["Prototype","Making rough, tangible versions of ideas to learn which parts work."]]},"https://www.nngroup.com/videos/design-thinking/":{"o":"A three-minute explainer introducing design thinking as a people-centred way to solve problems, organised into six stages.","i":[["People at the centre","Decisions rest on what users actually need rather than on team assumptions."],["Empathy first","Understanding users, for example with empathy maps, comes before generating solutions."],["Test before committing","Ideas are tried with users before they are treated as final, lowering risk."],["Iterate with prototypes","Designs improve through repeated rounds of prototype testing."],["Collaboration matters","The process depends on teams working well together."]],"a":["Interview or observe users before proposing features.","Build an empathy map of what users think, feel and do.","Brainstorm several solutions instead of taking the first.","Prototype roughly, test with users and revise."],"t":[["Design thinking","A people-centred method for understanding needs, generating ideas and testing solutions."]]},"https://www.nngroup.com/articles/design-thinking-study-guide/":{"o":"An ordered reading path through NN/g’s design thinking material, organised around six phases from understanding users to building, testing and launching.","i":[["Practical user focus","Hands-on, people-centred problem solving is presented as a route to ideas that make a product stand out."],["Six-phase cycle","Empathize, define, ideate, prototype, test, implement, with frequent loops back."],["Research before solutions","Early stages study behaviour and feelings, then turn findings into need statements."],["Maps organise insight","Empathy maps, journey maps and service blueprints each suit different questions."],["Alone, then together","Brainstorm individually first, then converge as a group."],["Test with real people","Prototypes of any fidelity should be evaluated by actual users, repeatedly."]],"a":["Interview a few target users and note what they do, say, think and feel.","Write a user need statement before brainstorming.","Sketch alone, then combine ideas in a workshop.","Build a paper prototype, test it and revise after each round."],"t":[["Define","Synthesising research to pinpoint needs and opportunities."],["Ideate","Producing a range of possible ideas for the needs identified."]]},"https://www.nngroup.com/articles/ten-usability-heuristics/":{"o":"Jakob Nielsen’s ten interaction-design principles are called heuristics because they are broad rules of thumb, not detailed standards. Reviewers use them to inspect interfaces, and the set has stayed essentially unchanged since 1994.","i":[["1. Visibility of system status","Keep people informed about what the product is doing with prompt feedback, so they understand results and next steps."],["2. Match with the real world","Use words your audience already knows and order information the way it appears in everyday life."],["3. User control and freedom","Give an easy way out of mistakes, such as undo, redo or cancel, so nobody feels trapped."],["4. Consistency and standards","Use the same words and behaviours throughout and follow familiar platform conventions."],["5. Error prevention","Make mistakes hard to make by removing risky conditions or confirming consequential actions."],["6. Recognition rather than recall","Show options and labels on screen so people choose rather than remember."],["7. Flexibility and efficiency","Offer shortcuts and customisation for experts while keeping a simple path for newcomers."],["8. Aesthetic and minimalist design","Clutter competes with essential information, so keep each screen focused."],["9. Help users recover from errors","Error messages should be plain, pinpoint the problem and suggest a fix."],["10. Help and documentation","Ideally none is needed, but when it is, make it searchable, task-focused and close to where people work."]],"a":["Review each screen of a key flow against all ten heuristics with several reviewers.","Log each problem with its heuristic, severity and suggested fix.","Test key flows with real users to confirm your wording matches theirs.","Fix costly errors first, then smaller frustrations."],"t":[["Heuristic evaluation","An inspection where evaluators judge an interface against broad usability principles."],["Natural mapping","Arranging controls so their layout suggests the outcome they produce."]]},"https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/":{"o":"A heuristic evaluation is an inexpensive way to find usability flaws by checking an interface against established design principles. It works best with several independent reviewers and complements, never replaces, testing with users.","i":[["Several reviewers","Each reviewer misses different problems, so several working separately find far more than one expert."],["Cheap and early","No recruiting is needed, so teams can flag likely problems quickly, even on early prototypes."],["Findings are predictions","Issues are educated guesses; watching real users shows which ones actually matter."],["Breaking a rule can be right","A design that departs from a guideline may still be the right trade-off, like hiding navigation on a small phone."],["Practice builds instinct","Reviewing many products trains you to spot common issues without the checklist."]],"a":["Gather three to five reviewers and practise on a simple app first.","Limit scope to one task, section, device or user group.","Review alone for one to two hours, logging each issue with the heuristic it breaks.","Merge findings, group similar issues and test the uncertain ones with users."],"t":[["Heuristics","Broad rules of thumb describing qualities that make a system easy to use."]]},"https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/":{"o":"How to score usability problems so teams fix the most important ones first. Severity combines how often a problem appears, how hard it is to overcome and whether it keeps recurring, plus its effect on market success.","i":[["Three core drivers","Frequency, impact and persistence together make up a problem’s severity."],["Business impact","Some problems deserve urgent attention for commercial reasons even if users can get past them."],["0–4 scale","0 is not a problem, 1 cosmetic, 2 minor, 3 major, 4 a catastrophe to fix before launch."],["Rate after the review","Evaluators rate severity afterwards from a full problem list, since each only saw some issues."],["Average independent ratings","One rater is unreliable; averaging about three independent ratings works well."],["Release decisions","Several catastrophes argue against shipping; only cosmetic issues may be acceptable."]],"a":["Score each finding on frequency, impact and persistence.","Add a judgement about market effect where relevant.","Send evaluators the full list and collect ratings independently.","Average about three ratings and treat top-rated issues as release blockers."],"t":[["Persistence","Whether a problem is a one-off hurdle or keeps bothering users after they learn about it."],["Usability catastrophe","Severity 4: a problem that must be fixed before release."]]},"https://media.nngroup.com/media/articles/attachments/Heuristic_Evaluation_Workbook_1_Fillable.pdf":{"o":"A fillable workbook for running a heuristic evaluation. Each of Nielsen’s ten principles comes with guiding questions and space to record problems and proposed fixes, so it works as a checklist for any interface.","i":[["Status awareness","Interfaces should show what is happening and respond promptly so people never guess whether an action worked."],["Familiar language","Wording and order should match the user’s world, not internal system terms."],["Escape routes","Products need obvious ways to cancel, go back or undo without long detours."],["Consistent behaviour","Similar elements should look and act alike and follow platform norms."],["Prevention over cure","Removing error-prone conditions or confirming risky steps beats explaining failures later."],["Reduced memory load","Show options and help where they’re needed instead of making people remember."]],"a":["Walk a realistic task and note every moment the system is silent or slow.","For each problem, name the heuristic and write a practical fix beside it.","Check that users can cancel, undo or go back at every step.","Find risky actions and add confirmations or clearer labels."],"t":[["Heuristic","A broad rule of thumb for design quality, not a precise specification."]]},"https://lawsofux.com/":{"o":"Laws of UX collects design principles drawn from psychology and human perception, covering decision-making, memory, grouping and response time. Each law is a lens for building clearer, more usable interfaces.","i":[["Hick’s law","Decision time grows with the number and complexity of options, so fewer choices help people move faster."],["Fitts’s law","Reaching a target takes longer when it’s farther away or smaller, so key controls should be large and close."],["Miller’s law","Working memory holds roughly 7 ± 2 items, so chunk information into groups."],["Jakob’s law","People expect your product to work like the ones they already use, so familiar conventions reduce confusion."],["Doherty threshold","Productivity rises when system and user respond within about 400 ms, so neither waits on the other."],["Law of proximity","Elements placed near each other are seen as related, so spacing communicates grouping."],["Peak-end rule","People judge an experience mostly by its most intense moment and its end, so design those carefully."],["Zeigarnik effect","Unfinished tasks are remembered better, so progress indicators keep people engaged."]],"a":["Limit the options shown at once and highlight a sensible default.","Make frequently used controls bigger and easy to reach.","Follow common patterns so people can rely on what they know.","Use spacing and shared backgrounds to show what belongs together."],"t":[["Working memory","A short-term mental workspace that holds information needed for the current task."],["Cognitive load","The mental effort needed to understand and use an interface."]]},"https://lawsofux.com/hicks-law/":{"o":"Hick’s law says decision time grows as the number and complexity of options increase. William Hick and Ray Hyman studied the relationship in 1952 by measuring how the number of stimuli affected reaction time.","i":[["Core relationship","More options and more complicated choices make people take longer to decide."],["Cognitive load","Every option has to be interpreted and weighed, adding mental work people would rather avoid."],["Minimal interfaces","Google’s homepage strips everything away so the only real decision is what to search for."],["Offloading complexity","Simple TV remotes keep the hardware minimal and let on-screen menus reveal organised options gradually."],["Progressive onboarding","Slack first shows only the message box, then introduces other features one at a time."]],"a":["Remove unnecessary options where speed matters most.","Break complex tasks into smaller sequential steps.","Highlight a recommended option.","Introduce advanced features gradually."],"t":[["Progressive onboarding","Introducing features gradually so new users aren’t overwhelmed."]]},"https://www.nngroup.com/articles/fitts-law/":{"o":"Fitts’s law predicts how long a pointer or finger takes to reach a target based on its distance and size. It explains why some layouts feel faster than others and guides button size and placement.","i":[["Distance slows selection","Farther targets take longer, but time grows gradually; doubling distance doesn’t double time."],["Size speeds selection","Larger targets are quicker to hit and cause fewer misses."],["Two movement phases","A fast rough movement is followed by a slower correction; target size mostly governs the correction."],["Screen edges act as walls","A mouse stops at the screen edge, so edge items behave like huge targets; touchscreens don’t get this benefit."],["Labels enlarge targets","An icon plus a text label makes a bigger clickable area than the icon alone."],["Layout changes travel","Menu shape and control placement change average movement distance."]],"a":["Make clickable areas generous and visibly so.","Place frequent controls near where the pointer or finger already is.","Group related controls, with enough space to avoid mis-clicks.","Put primary actions such as Submit next to the last field."],"t":[["Index of difficulty","A value from target distance and width, in bits, describing how hard a pointing task is."]]},"https://www.nngroup.com/articles/psychology-study-guide/":{"o":"A reading list on the psychology that matters for UX: attention, memory, perception, decision-making, motivation, biases, persuasion and emotion, and how normal human tendencies should shape design choices.","i":[["Limited attention","People filter out anything that looks unhelpful, so important items can be missed even when on screen."],["Gestalt grouping","People see order by grouping nearby, similar or enclosed elements, so layout signals what belongs together."],["Memory limits","Short-term memory is small, so show information rather than make people memorise it."],["Choice and effort","More options mean more mental work; many people take the first option that’s good enough."],["Motivation and ethics","Autonomy, relatedness and competence drive engagement; deceptive patterns harm people and businesses."],["Biases and trust","Anchoring, halo effects and negativity bias shape judgements; credibility decides whether people commit."]],"a":["Reduce visible options and simplify decisions.","Group related elements with containers, spacing and shared styling.","Keep needed information visible so people recognise rather than recall.","Test with real users to check assumptions about how people think."],"t":[["Interaction cost","Total mental and physical effort for an action; higher cost makes people less likely to act."]]},"https://www.w3.org/WAI/fundamentals/accessibility-intro/":{"o":"Web accessibility means sites and tools work for people with disabilities, and the same work helps many others. W3C advises building it in from the start, guided by international standards and checked by knowledgeable people.","i":[["Universal goal","The web is meant to work for everyone, whatever their device, language, location or ability; poor design is what excludes."],["Wide range of needs","Accessibility covers hearing, movement, sight, speech, cognitive and neurological differences, plus temporary and situational limits."],["Benefits beyond disability","Older users, people on slow connections and people using phones in bright sunlight all gain."],["Business and social value","Accessible design widens reach, improves satisfaction and is legally required in many places."],["Standards","W3C’s WAI publishes guidelines such as WCAG, which is also an ISO standard."],["Human judgement","Automated tools help, but only a knowledgeable person can confirm a site meets the guidelines."]],"a":["Add meaningful alt text to informative images.","Make every feature usable with a keyboard.","Provide transcripts for audio.","Check accessibility early and repeatedly."],"t":[["Alt text","A written description of an image’s purpose for people who can’t see it."],["Assistive technology","Software or hardware, such as screen readers, that lets people use the web differently."]]},"https://www.w3.org/WAI/standards-guidelines/wcag/glance/":{"o":"W3C’s one-page summary of WCAG 2 under its four principles. Versions 2.1 and 2.2 share the same guidelines; the full specifications hold the details.","i":[["Perceivable","People must be able to take in content with the senses they have: text alternatives, captions, adaptable layouts, enough contrast."],["Operable","Everything works from a keyboard, people get enough time, nothing triggers seizures, and navigation is easy."],["Understandable","Text is readable, interfaces behave predictably, and people are helped to avoid and fix mistakes."],["Robust","Content works reliably with current and future assistive technologies."],["Version notes","2.1 and 2.2 add guidance missing from 2.0, such as non-keyboard input."]],"a":["Add text alternatives to images and captions to videos.","Test every interactive feature with only a keyboard.","Avoid flashing content and let people extend time limits.","Use clear labels, predictable behaviour and helpful errors in forms."],"t":[["Guideline","A broad WCAG goal that groups specific requirements under one principle."]]},"https://www.w3.org/WAI/WCAG22/quickref/":{"o":"An interactive list of every WCAG 2 success criterion with the techniques that meet it. Filters for version, level, tags and technology narrow it to what matters for your work.","i":[["Four principles","Perceivable, operable, understandable and robust form the top-level structure."],["Conformance levels","Each criterion is A, AA or AAA; AA is the usual target and AAA the strictest."],["Guidelines and criteria","Each principle holds guidelines, and each guideline holds numbered, testable pass/fail criteria."],["Techniques","Each criterion lists sufficient techniques (reliably meet it) and advisory ones (extra help)."],["Failures","Common mistakes that cause a criterion to fail, useful as a ‘what not to do’ list."],["Filters and sharing","Filter by version, level and technology, then share the filtered view as a link."]],"a":["Pick your WCAG version and target level first.","Filter by the technologies you use.","Check sufficient techniques against your own component.","Review the failures list during testing."],"t":[["Success criterion","A testable requirement content must meet."],["Sufficient technique","A method that reliably satisfies a success criterion."]]},"https://www.nngroup.com/articles/touch-target-size/":{"o":"Touch controls must be physically large and well spaced to be used accurately. The article blames small, crowded targets, not people’s fingers, with examples from real apps and sites.","i":[["Physical size matters","Size targets in real units, not pixels: about 1 cm square for a fingertip, more for thumbs."],["Small targets slow people","Under Fitts’s law tiny targets need more precision, causing repeated taps and frustration."],["Spacing prevents mis-taps","Even decent-sized targets cause errors when crowded; size and spacing work together."],["Visible but untappable","Carousel dots and colour swatches carried over from desktop are often seeable but not tappable."],["Context changes needs","People walking, driving or with reduced dexterity need larger, more forgiving controls."],["Fewer elements, bigger targets","Showing less lets key controls grow and spread out."]],"a":["Aim for at least 1 × 1 cm touch targets.","Add space between neighbouring links and buttons.","Test dots, markers and swatches on real phones.","Enlarge primary actions and reduce clutter."],"t":[["View–tap asymmetry","Elements are visible and readable but too small or crowded to tap reliably."]]},"https://www.nngroup.com/articles/ux-research-cheat-sheet/":{"o":"A cheat sheet of research methods and ongoing activities grouped by stage: discover, explore, test and listen. Research is useful at any point, and mixing methods beats a fixed sequence.","i":[["Timing","Research pays off at every stage, but earlier findings shape the product more, so start where you are."],["Discover","Interviews and field visits check assumptions about needs and whether a project is worth doing."],["Explore","Personas, journey maps, task analysis and prototype feedback define the problem and compare options."],["Test","Usability, accessibility and benchmark tests show whether people can complete tasks and track progress."],["Listen","Surveys, analytics, search logs and feedback show patterns over time, mainly what rather than why."],["Ongoing habits","Find allies, design for accessibility and share bad news early."]],"a":["If you can do only one thing, run a think-aloud usability test.","Pair analytics with interviews or tests to learn the why.","Vary methods each product cycle.","Invite stakeholders to sessions so they act on findings."],"t":[["Benchmark testing","Measuring speed, success and errors on the current system to track improvement."]]},"https://www.nngroup.com/articles/which-ux-research-methods/":{"o":"Maps 20 research methods on three dimensions (attitudinal vs behavioural, qualitative vs quantitative, and context of use) and shows which suit each stage of product development.","i":[["Said vs done","Attitudinal research captures what people say; behavioural research watches what they do, which often differs."],["Why vs how many","Qualitative methods answer why and how to fix; quantitative methods answer how many and how much."],["Context of use","Studies range from natural use to scripted tasks to no product at all, trading realism for control."],["Stage matters","Generative research explores direction, formative research improves designs, summative research measures results."],["Blend methods","Most projects benefit from combining several methods instead of the familiar one."]],"a":["Decide whether your question is about motivation or measurement.","Use interviews or field studies when direction is unclear.","Use usability tests or card sorting during design.","After launch, add benchmarking, analytics or A/B tests."],"t":[["Formative evaluation","Research during design to find ways to improve it."],["Summative evaluation","Research measuring a finished product against earlier versions or competitors."]]},"https://www.nngroup.com/articles/ux-research-goals-to-scenarios/":{"o":"A seven-step method for turning vague concerns into a focused usability-test plan, from key tasks and stakeholder worries to scenarios participants can act out.","i":[["1. Identify key tasks","List what users must accomplish, using analytics, search logs, surveys or competitor reviews."],["2. Find stakeholder worries","Collect concerns from support, sales, trainers, FAQs and design reviews."],["3. Group and rank","Combine tasks and concerns into themes, then score each for user and business importance."],["4. Write problem statements","Summarise each top issue: the problem, its cost and open questions."],["5. Set research goals","Define what the study must learn for each problem; route some to surveys or analytics."],["6. Map behaviours","List observable actions and success or failure signals for each goal."],["7. Write scenarios","Turn goals into plain-language outcomes, with no interface terms or step-by-step directions."]],"a":["Involve stakeholders in planning so they accept the findings.","Score issues for users and the organisation before choosing.","Break each priority problem into observable goals.","Write scenarios around outcomes, not button labels."],"t":[["Top task","A critical action users must be able to complete."]]},"https://www.nngroup.com/articles/free-ux-templates/":{"o":"NN/g’s free downloadable templates and guides for research, workshops, mapping, design review, team planning and careers, each linked to an explanatory article.","i":[["Research and discovery","Research plans, consent forms, interview guides, usability-test checklists and card-sorting scripts for preparing studies."],["Workshops","Workshop briefs, agenda guides and alignment matrices for group sessions."],["UX mapping","Canvases for empathy maps, journey maps, service blueprints and storyboards."],["Content and UI","Checklists and rubrics for content audits, menus, error messages and design critiques."],["Teams and roles","DesignOps layouts, RACI matrices and skill maps that clarify responsibilities."],["Careers","CV formats, interview analysis sheets and job-search aids."]],"a":["Pick templates that match your current project stage.","Read the linked article to understand when each fits.","Adapt templates instead of starting from scratch.","Practise a mapping or critique template on a small product."],"t":[]},"https://www.nngroup.com/articles/stakeholder-interviews/":{"o":"How to talk with stakeholders early to learn the project’s background, uncover business goals and build support. These are flexible, semi-structured conversations guided by topics rather than a script.","i":[["Project background","Early conversations reveal a project’s origins, past attempts, constraints and politics, so there are fewer surprises later."],["Business and user focus","Stakeholders think in organisational terms, so interviews reveal which business metrics matter alongside user outcomes."],["Aligned vision","Comparing your vision with theirs exposes differences you can resolve before work begins."],["Feeling heard","Being listened to makes stakeholders more invested and keeps communication open."],["Timing","Best at kickoff, when a new stakeholder joins, or when a project resets."],["Analysis depth","Five or fewer interviews can be summarised informally; larger sets need thematic coding."]],"a":["Set a specific goal for each interview.","Prepare a guide covering success measures, priorities, history and communication preferences.","Open with easy questions, then probe with open follow-ups.","End by asking who else to talk to, then send thanks."],"t":[["Stakeholder","Anyone with an interest in a project or whose cooperation it needs."]]},"https://www.nngroup.com/articles/stakeholder-analysis/":{"o":"How to map the people who affect your project and plan how to engage each one. Stakeholder analysis is a structured way to build support for research and design.","i":[["Who counts","Anyone with a stake in the project, inside or outside the company, including people who control resources or decisions."],["Power–interest grid","Plot influence against involvement to get four groups, each needing a different engagement approach."],["Manage closely","High-power, high-interest people can speed up or derail your work, so they need deliberate attention."],["Quiet powerful people","Influential but uninterested people may step in when work touches their goals; keep them satisfied."],["Attitude matters","Mark each person as supportive, neutral or negative to see where winning over sceptics matters most."],["Maps change","Leadership shifts and new priorities move people around, so revisit the map regularly."]],"a":["List everyone with influence or interest, including people you haven’t met.","Plot each person by power and interest and note their attitude.","Interview key stakeholders about what they value.","Write a communication plan and review it regularly."],"t":[["Latent stakeholder","A high-power person not yet engaged who may step in if the work affects their goals."]]},"https://www.nngroup.com/articles/screening-questions-select-research-participants/":{"o":"How to write screening questions that find suitable participants without revealing the study’s purpose. Open prompts and believable wrong answers reduce exaggeration and guessing.","i":[["Two goals at once","Screeners must collect accurate information while hiding the study’s focus, or people overstate their fit."],["Open-ended prompts","Asking people to describe past activities makes the ‘right’ answer hard to guess and shows real experience."],["Probe expertise","Ask for specifics, such as favourite items and why, to separate real enthusiasts from claimers."],["Ask about jobs","Ask people’s occupation instead of listing excluded roles they might not recognise themselves in."],["Plausible distractors","Hide the target behaviour among realistic alternatives in multiple-choice items."],["Trade-offs","Open answers take longer to review; multiple choice suits automated recruiting but needs care."]],"a":["Replace yes/no questions with ‘describe a recent time when…’.","Mix your target answer with believable alternatives.","Screen out people who select every option.","Treat vague or inflated answers as warning signs."],"t":[["Distractor","A plausible but wrong answer option that hides the one you’re screening for."]]},"https://media.nngroup.com/media/reports/free/How_To_Recruit_Participants_for_Usability_Studies.pdf":{"o":"A free NN/g report on finding, screening, paying, scheduling and following up with usability-study participants, combining a practitioner survey with practical tips and sample forms.","i":[["Know your users first","Learn the real audience from stakeholders, current users and marketing data before writing criteria."],["Size the sample","Small qualitative tests need about five people per user group; statistical studies need more per condition."],["Criteria become a screener","Put quick disqualifiers first and avoid wording that reveals the target profile."],["Match incentives to effort","Pay enough to respect people’s time and reduce no-shows."],["Plan for no-shows","Expect about one in ten not to show; recruit backups and run a pilot session."],["Agencies","Useful for broad consumer studies or tight schedules, but give them your own screener."]],"a":["Write a user profile before drafting the screener.","Order the screener with disqualifiers first, in neutral wording.","Recruit backups and a pilot participant.","Set incentives by participant type and session length."],"t":[["Pilot participant","A near-match participant in a trial session that checks timing and tasks."]]},"https://www.gov.uk/service-manual/user-research/getting-users-consent-for-research":{"o":"The UK government’s guidance on informed consent in user research: what participants must understand, how to share information sheets, how to keep proof of consent, and how to handle withdrawal.","i":[["Informed consent","You need a record that participants understand the study and agree, including colleagues from your own organisation."],["What people must know","Who runs the study and why, what data is collected, who sees it, how long it’s kept, their rights, and that it’s voluntary."],["Information sheets","Share a plain-language sheet before the session in a format the person can use."],["Evidence of consent","Keep signed forms, emails or recorded verbal agreement, matched to the data it covers."],["Accessibility and vulnerable groups","Adapt materials to people’s needs; children and vulnerable adults need consent from them and a responsible adult."],["Withdrawal","People can stop at any time; remind them, and delete their data if they withdraw."]],"a":["Write an information sheet and check it with your data-protection contact.","Send it before each session in an accessible format.","Store each consent record with its data and a participant ID.","Remind people they can withdraw at the start and end."],"t":[["Data controller","The organisation responsible for participants’ personal data."]]},"https://www.nngroup.com/articles/user-research-ethics/":{"o":"Everyone who runs research with people needs a solid grasp of ethics, not only trained researchers. The article includes a checklist to score your organisation’s ethical maturity.","i":[["Ethics basics","Protect participants’ welfare and dignity from planning through how their data is handled later."],["Higher stakes","Sensitive subjects like grief or illness, and vulnerable groups, need extra expertise."],["Lean UX risk","Many people running studies lack training, so corners get cut."],["Organisational supports","A code of conduct, training, guidance, standard consent forms, ethics experts and a data policy."],["Consent and welfare","Plain-language consent, voluntary participation, debriefs after deception, and support for distressing topics."],["Self-assessment","Score the checklist to see whether your practice is excellent, good or poor."]],"a":["Standardise consent forms and data handling.","Adopt a code of conduct and share it with everyone who researches.","Train all staff who run research.","Fix every checklist item you answered no or unsure."],"t":[["Research ethics","Safeguarding participants’ interests, welfare and dignity throughout a study."]]},"https://www.nngroup.com/articles/ethical-dilemmas/":{"o":"Five recurring ethical dilemmas in user research (concealment, sensitive topics, vulnerable participants, accidental disclosures and small-group confidentiality) with safeguards for each.","i":[["Concealment and deception","Withholding or misstating details can undermine consent; use rarely, only when harmless, and always debrief."],["Sensitive topics","Illness, bereavement or addiction can re-traumatise; warn people, let them skip questions and have support ready."],["Vulnerable groups","Children or people with dementia may not consent alone; get adult consent plus their assent after a risk assessment."],["Accidental disclosures","If people reveal private details such as bank data on a recording, delete it promptly, even at a cost to the data."],["Small-pool confidentiality","In small groups people can be identified from quotes; never promise confidentiality you can’t guarantee."]],"a":["Use concealment only when no alternative exists and no harm follows.","Explain what will and won’t be discussed before sensitive sessions.","Do a risk assessment before recruiting vulnerable participants.","Be honest about how identifiable people might be."],"t":[["Concealment","Withholding some study information during consent, often to prevent behaviour changes."],["Deception","Misleading participants about a study’s purpose, followed by a debrief."]]},"https://uxpa.org/uxpa-code-of-professional-conduct/":{"o":"The UX Professionals Association’s ethical code: practitioners must weigh how their actions affect everyone involved. Principles come with practical examples, and an ethics committee reviews violations.","i":[["Act in everyone’s best interest","Stay current on methods, take only work you’re qualified for and keep developing skills."],["Be truthful","Don’t mislead clients about what a product can do, advise objectively and credit others’ work."],["Prevent harm","Avoid undue stress for participants and attend to vulnerable groups’ needs."],["Maintain integrity","Collaborate respectfully, avoid discrimination and public put-downs."],["Avoid conflicts of interest","Disclose ties that could sway judgement and decline conflicting work."],["Protect privacy","Keep identities confidential and get informed consent for data."],["Report all results","Choose valid participants and tasks, disclose limitations and share negative findings."]],"a":["Read the full code before starting a UX project.","Confirm informed consent and protections before every study.","Report negative findings and limitations alongside positive ones."],"t":[]},"https://www.nngroup.com/articles/user-interviews/":{"o":"User interviews are conversations where the interviewer asks open questions, listens and follows up to learn about people’s experiences, needs and motivations. They are most useful in discovery, where they build empathy and feed personas and journey maps.","i":[["Purpose","Reveal who users are, what their days involve and what frustrates or motivates them."],["Versus usability tests","Interviews collect what people say, without a design; usability tests watch people use a design."],["Treat it as research","Set specific goals; vague aims like ‘learn about users’ give insights that are hard to act on."],["Question craft","Ask about specific past events, then follow up on timing, feelings and frequency."],["Rapport","Earn trust with attentive listening, a relaxed pace and easy opening questions."],["Limitations","Memory is faulty, details get lost and people want to look good; leading questions make it worse."]],"a":["Write concrete research goals before drafting questions.","Pilot the guide with a colleague or target user.","Ask about recent, specific events, then probe reasons and feelings.","Check findings against observation or behavioural data."],"t":[["Interview guide","Main open questions with nested follow-ups that steer toward research goals while staying flexible."],["Attitudinal research","Methods that collect what people report, rather than observing behaviour."]]},"https://www.nngroup.com/articles/interview-guide/":{"o":"How to build an interview guide that keeps conversations on track with your research goals while leaving room for surprises, in seven steps from research questions to piloting.","i":[["Research goals first","Define what you need to learn before writing any questions."],["Invite stories","Reframe closed questions as broad prompts that let people describe experiences."],["Ask about specific moments","A recent, concrete memory reveals real behaviour that general opinions miss."],["Sequence matters","Start with easy warm-ups, follow events in order and save reflective questions for later."],["Plan follow-ups","Prepared probes help you dig into motivations behind what people say."],["Pilot first","A trial interview exposes unclear wording, awkward order and timing problems."]],"a":["Write research questions before interview prompts.","Rewrite closed questions as ‘tell me about the last time…’.","Start with a warm-up and move through topics logically.","Pilot and revise before recruiting."],"t":[["Probing question","A follow-up asking someone to elaborate or explain their reasoning."]]},"https://www.nngroup.com/articles/why-user-interviews-fail/":{"o":"Why interviews often disappoint: the wrong goal, no stakeholder support, weak planning and sloppy analysis, with practical fixes for each.","i":[["Understanding, not behaviour","Interviews reveal thoughts and experiences, but what people say about their behaviour is unreliable; observe instead."],["Question picks the method","Write the research question first; task success calls for observation, perceptions suit interviews."],["Involve stakeholders","Colleagues who help prioritise questions are more likely to accept findings."],["Short, open guide","A few broad prompts with neutral follow-ups beat long lists of closed questions."],["Analyse transcripts as a team","Transcripts catch nuance memory misses; theming together reduces bias."],["Review your sessions","Rewatching recordings exposes weak questions and builds skill."]],"a":["Write explicit research questions before scheduling.","If a question is about behaviour, observe instead.","Run a workshop where stakeholders prioritise questions.","Pilot the guide and spread interviews over several days."],"t":[["Query effect","When asking about a topic prompts people to invent an opinion they didn’t have."]]},"https://www.nngroup.com/articles/screening-participants/":{"o":"A screener is a short set of questions confirming that a prospective participant fits your study. Good screeners protect data quality, save time and money, and reduce bias by filtering out poor matches before sessions.","i":[["Relevance","Test with people who resemble your real users; feedback from random people rarely applies."],["Behaviour over prediction","Ask what people have done, not what they say they would do."],["Hide the purpose","Yes/no questions are easy to game; use layered questions that don’t reveal the study’s topic."],["Funnel questions","Start broad about habits and tools, then narrow toward specifics."],["Avoid over-screening","Too many criteria shrink the pool until nobody qualifies; keep only what matters."],["Include diverse users","Recruit people with disabilities, varied literacy and different tech comfort."]],"a":["List the behaviours and traits that truly matter for your questions.","Replace yes/no items with frequency or multi-select questions.","Add an open question to gauge how articulate candidates are.","Pilot the screener to catch confusing wording and broken logic."],"t":[["Exclusion criteria","Traits that rule a candidate out, such as working in UX or marketing."]]},"https://www.nngroup.com/articles/interview-questions-mistakes/":{"o":"Six common mistakes when writing interview questions and how each distorts what participants share, with fixes that favour stories, real experiences and neutral wording.","i":[["Opening with closed factual questions","They shut down storytelling; move facts to the screener and open with a recent experience."],["Asking only about typical behaviour","What people think they usually do differs from what they do; ask for specific episodes."],["Hypothetical questions","People forecast their own choices badly; ask what they actually did."],["Interpretation built into questions","Suggesting a cause pushes people toward your hunch; ask ‘what made you…’ instead."],["Compound questions","Two questions at once overload memory; ask one, then probe."],["Ambiguous wording","Vague words like ‘environment’ leave people guessing; pilot to catch them."]],"a":["Move factual questions into the screener.","Start each topic by asking for a recent example.","Split double-barrelled questions.","Pilot the guide with one participant and fix unclear wording."],"t":[]},"https://www.nngroup.com/articles/contextual-inquiry/":{"o":"Contextual inquiry is an ethnographic field method: watch a few expert users work in their real environment and ask questions as they go. It reveals habits, workarounds and reasoning that interviews and surveys miss.","i":[["Observe in the real setting","Studying people where they work captures habits and workarounds labs miss."],["Recall gaps","When people summarise a process afterwards they drop motivation, reasoning and mental models."],["Apprenticeship model","The researcher learns like an apprentice, watching and asking as the work unfolds."],["Shared interpretation","The participant corrects the researcher’s assumptions, building a common understanding."],["Best fit","Complex systems and expert workflows, not simple tasks like a checkout page."],["Pitfalls","Sessions can slip into interviews or venting, or behaviour changes to match the researcher’s guesses."]],"a":["Watch first, then ask about surprising steps.","Explain you’ll mostly observe so people work normally.","Limit how often you test interpretations.","Share findings with affinity mapping and task analysis."],"t":[["Mental model","A person’s internal picture of how something works and why they act as they do."]]},"https://www.nngroup.com/articles/field-studies/":{"o":"Field studies examine people in their everyday settings instead of labs, revealing context other methods miss. Approaches range from pure observation to observation mixed with questions.","i":[["Realistic evidence","Watching tasks where they normally happen shows how a design copes with distraction, noise and interruptions."],["Hidden issues","Context exposes problems people wouldn’t think to mention."],["Range of approaches","Some studies only observe; others mix watching with evolving questions."],["Best timing","Most valuable in discovery, while the team is still defining the problem."],["Field testing","An existing prototype can be tested in its real setting."],["Remote limits","A video call only shows what the camera sees; environmental clues get lost."]],"a":["Write research questions and a facilitator guide before visiting.","Pick times when users naturally do the tasks.","Limit observers and give them clear rules.","Get approval from participants, supervisors and site managers."],"t":[["Field study","Research done where people normally carry out their activities."]]},"https://www.nngroup.com/articles/remote-contextual-inquiry/":{"o":"How to run contextual inquiry over a video call with screen sharing, observing participants in their usual environment, with ten practical lessons.","i":[["Suitable work","Desk-based work on one shareable screen fits best."],["Only the participant is in place","It’s less a true field study, but their setting still reveals distractions and workarounds."],["Protect the natural setting","Ask people to work where they normally do, interruptions included."],["Keep sessions short","About two to three hours; run several rather than one long session."],["Camera off while observing","A constant video feed pulls attention toward the researcher."],["Ask in the moment","Clarifying questions during the work usually suit remote sessions better."]],"a":["Test webcam, mic and screen sharing in a short setup call.","Get consent and recording permission early; employers may restrict them.","Note background sounds and ask about them if relevant.","Schedule a follow-up if a workflow gets cut off."],"t":[["Active inquiry","Interrupting the work to ask clarifying questions as points arise."]]},"https://www.nngroup.com/articles/qualitative-surveys/":{"o":"Qualitative surveys use open questions to explore opinions and ideas, often before a larger quantitative survey. You don’t need to be a statistician, as long as you test and refine the questions.","i":[["Test before launch","Pilot with real target users thinking aloud, and revise across several rounds."],["Neutral and precise","Don’t hint at a preferred answer; define key terms and avoid vague judgement words."],["Keep it short","Every extra question lowers completion and quality; put important items first."],["Show what’s required","Label each question optional or required; asterisks are easy to miss."],["Design for skimming","Put instructions beside the answer area; people skim and pick early options."],["Plan analysis early","Decide goals and charts up front and code free text into countable categories."]],"a":["Pilot with about four target users and revise between rounds.","Ask why and how; leave behavioural trends to analytics.","Cut questions that won’t affect decisions.","Code open answers into categories and chart them."],"t":[["Coding","Turning free-text answers into countable categories."]]},"https://www.nngroup.com/articles/surveys-design-cycle/":{"o":"Surveys are usually tied to the final ‘listen’ stage, but they can support research in every phase. The article maps survey types to each stage, with sample questions and common scoring methods.","i":[["Discover","Broad, often open surveys give background on users; stakeholder surveys reach busy leaders; diary-style surveys capture behaviour over days."],["Explore","Surveys of competitors’ customers reveal what rivals do well; large-sample surveys can support data-driven personas."],["Test","A short ease question after each task, plus a longer questionnaire at the end for overall perceived usability."],["Listen","Loyalty, satisfaction and effort measures track sentiment over time and flag emerging problems."],["Percentage scoring","Several listening metrics report the share of top-range answers rather than an average."],["Limits of loyalty scores","Loyalty measures relate only loosely to usability, so never use them alone."]],"a":["Pick the survey type by project phase before writing questions.","Follow surprising open answers with interviews.","Ask an ease question after each test task and a questionnaire at the end.","Run listening surveys at key journey moments and track them over time."],"t":[["Single Ease Question","A one-item, seven-point rating of how easy a task was, asked right after it."],["Customer Effort Score","The share of respondents choosing one of the top ease options."]]},"https://www.nngroup.com/articles/thematic-analysis/":{"o":"Thematic analysis turns messy qualitative data such as interviews and field notes into clear themes. It prevents superficial skimming, stays tied to research goals and copes with rich or contradictory data.","i":[["1. Gather the data","Collect transcripts, field notes and diary entries; transcribe recordings rather than relying on memory."],["2. Read everything","Read every source fully before analysing; a team highlighting workshop works well."],["3. Code","Label highlighted segments with short descriptive codes, keeping research questions in view."],["4. Find themes","Compare codes for patterns, links and contradictions; drop weak candidate themes."],["5. Step away","Take a day off so you return with fresh eyes."],["6. Test the themes","Look for counter-examples and check whether colleagues reach the same conclusions."]],"a":["Post your research questions where everyone can see them.","Read all sessions, not only the ones you observed.","Ask teammates to code and challenge your themes.","Budget as much analysis time as collection time."],"t":[["Code","A short label describing what a piece of text is about."]]},"https://www.nngroup.com/articles/diary-studies/":{"o":"Diary studies are remote, qualitative studies where participants log activities and experiences as they happen over days or weeks, capturing everyday behaviour in context that one-off sessions miss.","i":[["Long view","Following people over time shows how habits, moods and needs shift in their own settings."],["Cheaper than field visits","Participants log asynchronously, avoiding the cost of in-person observation."],["Three logging rhythms","Entries can be triggered by events, fixed intervals or random signals; many studies combine them."],["Study length","Match the length to how often the behaviour happens and how long the process takes."],["Sample size","More diverse users and broader questions need more participants."],["Incentives","Pay should match the commitment; milestone payments keep people motivated."]],"a":["Choose the logging method that fits how often the activity happens.","Pilot instructions and tools first.","Review entries as they arrive and ask follow-ups.","Over-recruit and finish with a post-study interview."],"t":[["Saturation","The point where new data stops changing your understanding."]]},"https://www.nngroup.com/articles/diary-study-entries/":{"o":"How to design diary entries. Closed, open and multimedia prompts each trade participant effort against analysis effort and depth; mix them and keep entries short.","i":[["Closed entries","Multiple choice and ratings are quick and easy to trend but can’t explain why."],["Open entries","Free text reveals context, reasoning and surprises, but takes more effort and is harder to analyse."],["Multimedia","Photos, screenshots, audio and video capture visual detail but add effort and coding work."],["Mix question types","Pair structured questions with short ‘why’ follow-ups."],["Participant effort first","Tired participants give rushed or incomplete answers."],["Keep it brief","Aim for five to ten minutes per entry."]],"a":["Time the template in a pilot.","Add a short open follow-up after key ratings.","Make long open or media prompts optional.","Ask for photos when visual evidence matters."],"t":[]},"https://www.nngroup.com/articles/better-diary-studies/":{"o":"Diary studies suffer from forgetfulness, fatigue and fading interest. Six practical ways to keep participants committed and submitting useful entries.","i":[["Recruit wisely","Choose people with time who enjoy recording their thoughts; screen for commitment and writing comfort."],["Choose the right tool","Make logging fast on participants’ own devices; voice or video notes ease effort. Pilot it."],["Onboard properly","A kickoff session demonstrates the tool, explains rules and rewards, and builds rapport."],["Keep entries short","Ask only what the research needs; over about 15 minutes is too much."],["Stay in touch","Respond to entries, thank people and send reminders without flooding them."],["Creative incentives","Pay in instalments and add consistency bonuses to reduce dropouts."]],"a":["Screen on time commitment before enrolling.","Keep each entry under 15 minutes.","Stagger payments and send gentle reminders."],"t":[]},"https://www.nngroup.com/articles/competitive-usability-evaluations/":{"o":"Competitive usability evaluations compare your product with rival designs to find relative strengths and weaknesses, using expert reviews or user testing.","i":[["Purpose","See how others handle the same problems, so decisions rest on evidence."],["Choosing rivals","Pick two to four, including strong or innovative ones, some better than yours."],["Two methods","Expert review relies on a practitioner’s judgement; competitive testing has users try the same tasks on each site."],["Testing safeguards","Rotate site order so learning effects don’t skew results; compare key tasks fairly."],["Improve, don’t crown","Metrics show how much better or worse; observations explain why."],["Design variations","The same approach can compare internal design options, even on paper."]],"a":["Define the design questions you need answered first.","Choose a small set of strong or closely matched competitors.","Rotate site order across participants.","Turn observations into specific improvements, not copies."],"t":[]},"https://www.nngroup.com/articles/redesign-competitive-testing/":{"o":"Before redesigning a site, test both your current site and a few competitors with real users, so you know what works, what fails and why.","i":[["Old site as prototype","Your current site already targets the same problem, so it shows what to keep and fix."],["Protect valued features","Redesigns often remove features people rely on; testing reveals them."],["Competitors as prototypes","Rival sites solve nearly the same problem and are already refined."],["Test before copying","An appealing idea from elsewhere may still be hard to use."],["Evidence over opinion","Observed behaviour replaces debates about personal taste."],["Short and focused","About two days and one or two competitors is enough."]],"a":["Test your current site before designing anything.","Pick one or two competitors with different approaches.","Vary order and keep each person to three sites or fewer.","Ask why people prefer a design, not just which."],"t":[["Competitive usability testing","Comparing your site with competitors using the same tasks and participants."]]},"https://www.nngroup.com/articles/analytics-user-experience/":{"o":"How UX professionals can use web analytics to support their work: flagging problems, investigating causes and checking qualitative findings against large datasets.","i":[["Pitfall","Analytics can swallow time with interesting numbers that lead nowhere; start from a UX question."],["Flag issues","Track goals, the steps leading to them and metrics showing whether those steps happen."],["Investigate","When a metric drops, test hypotheses about traffic, technical faults, content, design or navigation."],["Triangulate","Small usability studies find likely problems; analytics shows how widespread they are."],["Common hurdles","Choosing meaningful metrics and navigating complex tools are the main beginner struggles."]],"a":["Start with a specific UX question.","Define the goal, supporting actions and the metrics that show them.","Review goal metrics regularly and form hypotheses when they dip.","Use analytics to confirm usability findings before redesigning."],"t":[["Macro conversion","A major outcome such as a purchase or lead."],["Micro conversion","A smaller action that moves people toward a macro conversion."]]},"https://www.nngroup.com/articles/quantitative-user-research-methods/":{"o":"An introduction to quantitative UX research: numbers persuade stakeholders and guide trade-offs. It surveys common methods with each one’s cost, difficulty and whether it captures behaviour or attitudes.","i":[["Quantitative benchmarking","People do realistic tasks while you log time and success, ideally with 35+ participants, to track progress or compare competitors."],["Analytics","Live usage data shows where people go, click and leave, cheaply."],["A/B and multivariate tests","Split live traffic between versions; short runs and small samples mislead."],["Card sorting","The share of similar groupings shows which categories make sense to most people."],["Tree testing","People find items using only the hierarchy, testing your information architecture."],["Surveys","Rating scales and standard instruments like SUS produce trackable scores."],["Counting qualitative themes","Tallying themes from interviews or open answers shows how common they are."]],"a":["Start from the research question, then choose the method.","Weigh cost; digital methods suit tight budgets.","Plan minimum sample sizes early.","Learn basic statistics before collecting data."],"t":[["Statistical significance","Evidence that a difference is unlikely to be due to chance."]]},"https://www.nngroup.com/articles/affinity-diagram/":{"o":"Affinity diagramming is a team method for grouping related notes, such as observations or ideas, into themes, in three phases: generate notes, cluster them, then rank clusters to decide next steps.","i":[["Flexible timing","Useful from early research synthesis to strategy and late design refinement."],["Silent first pass","People write notes alone first, reducing the influence of louder voices."],["Labels come last","Group by similarity first, then name each cluster so the label reflects its notes."],["Small clusters matter","A group of only a few notes can hold a perspective the big groups missed."],["Priorities need owners","Dot voting breaks deadlocks; each chosen cluster needs a next step and an owner."],["Conversation over artefact","The discussion while sorting is often more valuable than the finished board."]],"a":["Set a short timer for writing notes.","Sort as a group and duplicate notes that fit two themes.","Dot-vote when the team disagrees and assign owners.","Photograph or save the board and the agreed next steps."],"t":[["Affinity diagramming","Organising related observations or ideas into clusters to reveal shared themes."]]},"https://www.nngroup.com/articles/persona/":{"o":"Personas are invented but realistic user profiles built from research. The article covers how teams create them, why they keep design focused on people, and how they stay useful after launch.","i":[["Vivid characters stick","One concrete person is easier to remember than numeric ranges."],["Research first","A persona may be fictional, but it must rest on interviews, surveys, field or diary studies."],["Trim the profile","Name and photo help memory; any detail that won’t shape a decision should go."],["Shared shorthand","Saying a persona’s name brings their goals and habits to mind for the whole team."],["Not everyone","Focusing on a few specific people stops teams designing for every possible visitor."],["Value beyond design","Personas guide expert reviews, recruiting and analytics segments, and evolve over time."]],"a":["Do research before drafting any persona.","Create personas together so the team trusts them.","Cluster observed traits and drop groups that matter little.","Remove details that won’t influence design."],"t":[["Persona","A made-up but realistic profile of a target user, grounded in research."]]},"https://www.nngroup.com/articles/ux-mapping-cheat-sheet/":{"o":"Compares four UX mapping methods (empathy maps, customer journey maps, experience maps and service blueprints) and lists three decisions to make before mapping.","i":[["Empathy maps","Four quadrants for what one user type says, thinks, feels and does; not sequential; good at project start."],["Journey maps","Chronological view of one persona using a specific product or service, tracking actions, thoughts and emotions."],["Experience maps","Product-neutral view of a generic person’s path toward a goal, for background understanding."],["Service blueprints","Show front-stage and back-stage staff actions and processes behind each touchpoint."],["Three upfront decisions","Current or future state; hypothesis or research-based; low or high fidelity."],["Shared value","Making a map sparks conversation and leaves an artefact everyone can reference."]],"a":["Start projects with an empathy map.","Use a journey map to locate pain points and delights.","Blueprint services when several departments must coordinate.","Update maps as research arrives."],"t":[["Service blueprint","A diagram linking touchpoints to the people, props and processes that deliver them."]]},"https://www.intercom.com/blog/jobs-to-be-done-book":{"o":"Intercom’s book on applying Jobs-to-be-Done to software, where most published examples involve physical products. It offers principles rather than a step-by-step method.","i":[["Switching behaviour","People move to and from products for specific reasons; those triggers reveal what the product really does."],["Real competitors","Your true rivals are whatever else people might ‘hire’ for the same need."],["Product scope","Clear boundaries stop teams overreaching or neglecting the core job."],["The exact job","Focus on the outcome people want, not features or demographics."],["Job stories over personas","Situation, motivation and outcome give a more practical design basis."],["Research","The framework guides questions about why people act, not just what they want."]],"a":["Interview recent customers about when they started looking.","Map what they used before and what replaced it.","Write job stories for each key task.","List real alternatives, including manual workarounds."],"t":[]},"https://www.intercom.com/blog/using-job-stories-design-features-ui/":{"o":"Alan Klement argues that personas and standard user stories don’t explain why people act, and proposes job stories to uncover situations, motivations and anxieties, illustrated with a car-loan profile feature.","i":[["Personas miss the reason","Demographics say who someone is, not why they behave as they do."],["User stories blur cause and outcome","When a feature fails, you can’t tell if the design or the assumption was wrong."],["Job stories capture context","They describe the situation, the motivation and the worries in a moment of need."],["Break big goals down","Split the main outcome into smaller jobs and study how people handle each today."],["Trust drives design","Car buyers sharing financial data needed reassurance: a photo, work history and easy contact."],["Every element earns its place","Each interface piece should trace to a job or worry it resolves."]],"a":["Observe how people solve the problem today.","Write job stories with situation, motivation and anxiety.","Split large goals into smaller jobs.","Link each interface element to the need it addresses."],"t":[["Job story","When [situation], I want to [motivation], so I can [outcome]."],["Jobs to be done","The idea that people ‘hire’ products to make progress in their lives."]]},"https://media.nngroup.com/media/articles/attachments/Empathy_Mapping_Poster_A4-compressed.pdf":{"o":"A one-page poster on empathy maps: a shared visual that organises what a team has learned about a type of user, helping sort findings, spot gaps and explain user attitudes.","i":[["Four zones","Says, thinks, does and feels each capture a different layer of experience."],["Evidence vs interpretation","Says and does come straight from research; thinks and feels are inferred and need justification."],["Feelings as labels","Summarise emotions with one word plus context, such as ‘impatient: pages load slowly’."],["Gaps signal next steps","Thin sections show where more research is needed."],["Living document","Revise the map as new research comes in."],["Communication aid","Stakeholders grasp user attitudes without reading full reports."]],"a":["Collect interview notes and observations first.","Keep observed actions under Does and quotes under Says.","Label feelings with one word and supporting evidence.","Revise after each research round."],"t":[]},"https://www.nngroup.com/articles/empathy-mapping/":{"o":"Empathy maps are shared visuals of what a team knows about a user or segment, organised into says, thinks, does and feels. They reveal missing evidence and keep teams aligned early.","i":[["Four-part layout","Spoken remarks, private thoughts, observed actions and emotions around the persona."],["Specific beats vague","Precise remarks show exactly where an experience breaks down."],["Mindset, not timeline","Unlike journey maps, quadrants can be filled in any order."],["Empty spaces signal gaps","A blank quadrant means you need more research."],["Evidence vs assumption","Trace each note to a source; label the rest as hypotheses."],["Individual, then group","Write notes alone before clustering together to limit groupthink."]],"a":["Map one user or persona at a time.","Base notes on interviews, diaries or support tickets and note sources.","Cluster as a team and discuss contradictions.","Date the map and update it with new research."],"t":[["Aggregated empathy map","A combined map from similar users, often a step toward personas."]]},"https://www.nngroup.com/articles/using-empathy-maps/":{"o":"Empathy maps are a flexible four-section tool (says, thinks, does, feels) around a persona or user group. Use them before research to plan, during research to record observations, and after research to share findings.","i":[["Four sections","A shared picture of who you design for: spoken remarks, inner thoughts, actions and emotions."],["Planning research","Write down what you believe, rate confidence in each note, and turn the gaps into study questions."],["Capturing observations","Colour-coded notes let non-researchers log one observation each during sessions."],["Participant input","Sometimes users fill in the map themselves, surfacing attitudes you hadn’t asked about."],["Shared sense-making","Workshops sorting data into sections build buy-in better than a finished report."],["Theme extraction","Follow with affinity diagramming to cluster notes into recurring themes."]],"a":["Before a study, map current beliefs and mark confidence.","During sessions, give observers colour-coded notes, one observation each.","After research, build maps together from transcripts.","Cluster the notes into shared themes."],"t":[]},"https://www.nngroup.com/articles/journey-mapping-101/":{"o":"A journey map is a visual timeline of the steps a person takes toward one goal, with their thoughts and feelings at each point. It builds shared understanding and shows where improvement matters most.","i":[["Build from a timeline","Start with what the user does in order, add thinking and feeling to make a story, then polish the visual."],["One actor per map","Each map follows one persona; different user groups need separate maps."],["Scenario sets the frame","One situation tied to a goal and expectations, for a current or future product."],["Phases organise details","Stages like discover, buy and use group actions, mindsets and emotions."],["Emotion line","A single line across phases shows highs and lows."],["Opportunities drive decisions","Each insight needs an owner, a priority and a success measure."]],"a":["Choose one user type and one realistic goal.","Base actions and quotes on real research.","Mark emotional peaks and dips and flag key pain points.","Give each opportunity an owner and a measurable target."],"t":[["Service blueprint","The business-side companion showing internal people and processes behind each touchpoint."]]},"https://www.nngroup.com/articles/research-journey-mapping/":{"o":"Journey maps need research. Maps built only on stakeholder assumptions lack credibility, so check internal data, run qualitative studies, then add quantitative evidence.","i":[["Assumptions are risky","Few people see the whole journey; assumption-based maps look anecdotal and mislead."],["Mine internal data first","Support logs, analytics, past focus groups and satisfaction scores hint at what to investigate."],["Favour qualitative methods","Numbers miss the emotions and motivations behind each step."],["Said vs done","Field observation exposes workarounds people never mention in interviews."],["Diary studies span the journey","Near-real-time logs over weeks cover every phase and channel with less memory bias."],["Study rivals if needed","For new products, watch people use competitors’ services."]],"a":["Review existing data before new research.","Combine interviews, field observation and diaries.","Run a diary study in the background while other work continues.","Quantify findings with surveys or analytics, keeping stakeholders involved."],"t":[]},"https://www.nngroup.com/articles/service-blueprints-definition/":{"o":"Service blueprints map the people, physical evidence and internal processes behind a specific customer journey, showing both what customers see and what happens behind the scenes.","i":[["Journey-specific","Each blueprint covers one journey and goal; a restaurant may need one for takeaway and one for dine-in."],["Root causes","Blueprints expose hidden dependencies, tracing poor experiences to systemic weak points."],["Less redundancy","Information collected early can be reused backstage instead of asking again."],["Cross-department alignment","Customers don’t care who owns a touchpoint; blueprints reveal overlaps and gaps."],["Layered structure","Customer actions on top, then front stage, back stage and support processes, grounded by evidence such as signs and websites."]],"a":["List customer actions from research or a journey map.","Add front-stage and back-stage steps beneath each action.","Use arrows for dependencies and hand-offs.","Add time, policy or metrics where they reveal opportunities."],"t":[["Line of visibility","The divider between what customers can and can’t see."],["Moment of truth","A point where the customer judges the quality of the service."]]},"https://www.nngroup.com/articles/how-might-we-questions/":{"o":"How to write ‘How might we’ questions after discovery so brainstorming stays focused on real user problems rather than pet solutions.","i":[["Origin","Introduced at Procter & Gamble in the 1970s and popularised by IDEO in design thinking."],["Start from findings","Build each question from agreed discovery insights, not vague goals."],["Leave solutions out","Naming a fix narrows brainstorming; neutral wording invites wider ideas."],["Broad but bounded","Wide questions give more options, but too sweeping loses the problem."],["Target the goal","Aim at outcomes like user confidence, not symptoms like call volume."],["Positive verbs","‘Increase’ or ‘create’ motivate building; ‘reduce’ or ‘prevent’ push only toward removing."]],"a":["Agree the key discovery insights as a team.","Turn each into a ‘How might we…’ question.","Check each for solution-free wording, breadth, outcome and positive framing.","Merge overlaps and rank by impact before ideating."],"t":[["How might we (HMW)","A question format framing a problem as an open challenge."]]},"https://www.nngroup.com/articles/problem-statements/":{"o":"A problem statement is a short description of the issue a discovery aims to solve. It focuses the team, marks what’s out of scope and wins stakeholder support early.","i":[["Purpose","Without a clear target, teams wander or jump to solutions."],["Core elements","Background, the people affected and the cost of doing nothing; root causes can come later."],["The 5 Ws","Who, what, where, when and why gather the facts, ideally in a kickoff workshop."],["One focus","Keep it to a single problem; a list of unrelated issues means the scope is too wide."],["Solution-free","Leave solutions out until discovery produces insights."],["Positive framing","Describe the gap between today and a better future as an opportunity."]],"a":["Draft the statement early, in a kickoff workshop.","Answer the 5 Ws and turn unknowns into research questions.","Keep it brief and redraft it together.","Refine it as findings emerge."],"t":[["Opportunity statement","A problem statement framed as the gap between now and a desired future."]]},"https://www.nngroup.com/articles/user-need-statements/":{"o":"User need statements (also called point-of-view statements) sum up a specific user, what they need and why it matters. Teams write them in the define stage so everyone agrees on the problem before ideating.","i":[["Problem before solutions","Defining the problem first stops teams polishing a fix for the wrong issue."],["Needs as goals","Frame needs as outcomes, such as comparing options easily, not as a dropdown or dashboard."],["Three parts","A specific user, a real need, and the deeper motivation behind it."],["Grounded in research","Needs come from interviews, diaries or journey maps; expertise helps infer motivation."],["Success benchmark","Each statement implies what success looks like after launch."],["Scope","Broad statements guide long-term vision; narrow ones suit a sprint."]],"a":["Draft several users, needs and insights, then combine them.","Rewrite solution wording as a user goal.","Ask ‘why’ repeatedly to find the motivation.","Pair each statement with a measurable success metric."],"t":[["User need statement","A short, actionable summary of a user, their goal and why it matters."]]},"https://www.nngroup.com/articles/ux-deliverables-glossary/":{"o":"A glossary of the documents UX practitioners produce to record work, share findings and explain context, to help you decode the jargon across a project.","i":[["Affinity diagram","Notes clustered by theme, used after research to make sense of observations."],["Analytics report","A summary of live behaviour such as paths and exits, to spot weak features."],["Persona","A realistic fictional profile of a target user, keeping decisions tied to needs."],["Journey map","Steps toward a goal, revealing pain points across an experience."],["Prototype","An early testable version of a design."],["Impact–effort matrix","A chart comparing user value with build effort to decide what comes first."],["Research plan","A study blueprint of goals and methods agreed before fieldwork."],["Usability report","Condensed test results with recommendations."]],"a":["Match each deliverable to the decision it supports before making it.","Keep early work rough; polish only what others rely on.","Ask a colleague to summarise your document and fix what confuses them."],"t":[]},"https://www.nngroup.com/articles/ux-mapping-methods-study-guide/":{"o":"A reading path through NN/g’s material on UX mapping methods, which turn research and ideas into visual models: journey maps, service blueprints, roadmaps, design-exploration maps and synthesis techniques.","i":[["Journey maps","Timelines of user actions plus thoughts and emotions, giving teams a shared picture of an experience."],["Service blueprints","Link people, evidence and internal processes to touchpoints; ideal for multichannel, multi-department work."],["UX roadmaps","Living strategic artefacts that prioritise and communicate upcoming work."],["Design-exploration maps","Scenario mapping imagines persona use; cognitive mapping captures a person’s mental model."],["Synthesis techniques","Affinity diagrams cluster findings; empathy maps capture what you know about a user type."]],"a":["Start with the overview video and comparison cheat sheet.","Pick one map type that matches your goal.","Follow the reading order before running a workshop.","Practise affinity diagramming on your own research notes."],"t":[["UX roadmap","A living plan that aligns and prioritises a UX team’s future work."]]},"https://www.nngroup.com/articles/content-audits/":{"o":"Before improving digital content, build an inventory (a catalogue of every item) and an audit (a judgement of its quality). Together they show what to keep, update or remove, and they need ongoing upkeep.","i":[["Inventory vs audit","The inventory records titles, links, owners, formats and dates; the audit judges how well each item serves users."],["Why pair them","An inventory shows quantity, not quality; the audit adds the evaluation."],["Getting started","Assign ownership, involve stakeholders and start with high-value content."],["Evaluation criteria","Combine writing best practice with user tasks, tone, metadata standards and performance data."],["Deciding fate","Mark each item keep, update or remove, with tasks and a named owner."],["Ongoing maintenance","Content changes constantly, so share the upkeep across a group."]],"a":["Build a spreadsheet of name, link, owner, format and dates.","Define scoring criteria mixing standards, needs and metrics.","Start with a small, high-impact subset and time-box it.","Review decisions with stakeholders and keep the file current."],"t":[["Content inventory","A catalogue of all digital content with details like format, owner and URL."],["Content audit","An evaluation of inventoried content flagging items to update, gaps to fill or content to remove."]]},"https://www.nngroup.com/articles/content-strategy/":{"o":"Content strategy is a high-level plan for deliberately creating and maintaining the information in a product: why each piece exists, who owns it and how it reaches users.","i":[["Strategy first","Decide purpose before writing, editing or filming; tactics carry out the strategy."],["Lifecycle","Plan, create, maintain, and eventually unpublish."],["Check-up","Inventory existing content, judge how it serves users and the business, and test it with people."],["Content early","Develop content alongside design instead of filling placeholders late."],["Keep reviewing","Scheduled reviews and a governance group keep content accurate and findable."],["Retire deliberately","Removing pages needs decisions about archives, redirects and search impact."]],"a":["Inventory content and test it with real users.","Write what each content area must accomplish.","Assign owners for creation, review, approval and publishing.","Involve content planning from the first design kickoff."],"t":[["Content strategy","A high-level plan guiding the intentional creation and upkeep of information in a product."]]},"https://www.nngroup.com/articles/card-sorting-definition/":{"o":"In card sorting, participants group labelled cards into categories that make sense to them. Results reveal mental models so teams can build an information architecture that’s easier to navigate.","i":[["Core purpose","Shows how people naturally classify content instead of guessing category names."],["Open vs closed","Open sorts let people create and name groups; closed sorts use your categories and suit validation."],["Hybrid caution","Mixing predefined and custom categories nudges people toward your structure."],["Card design","Use about 30–50 cards and avoid repeated words that cause superficial grouping."],["Sample size","About 15 people for qualitative insight; 30–50 for quantitative patterns."],["Limitations","Only one level of grouping, no page context, and large sets tire people."]],"a":["Draft 30–50 cards from real content.","Pilot to check card count and clarity.","Run an open sort and ask people to name their groups.","Analyse with a similarity matrix, then validate with a tree test."],"t":[["Mental model","A person’s internal picture of how information is organised."],["Information architecture","The structure and labels that organise content so people can find it."]]},"https://www.nngroup.com/articles/card-sorting-tree-testing-differences/":{"o":"Card sorting and tree testing both shape information architecture but answer different questions: card sorting suggests groupings; tree testing measures whether a structure helps people find things.","i":[["Shared goal","Both improve navigation and structure, which is why they’re confused."],["Card sorting","People group cards by their own logic, revealing how they organise content mentally."],["Timing","Card sorts come early and produce options, not a final answer."],["Tree testing","People hunt for items in a text-only hierarchy, testing findability."],["Missing context","Tree tests strip layout and imagery, so results can differ from a finished site."],["Use both","Sort to generate options; tree test to validate them."]],"a":["Run a card sort early to gather groupings.","Draft a hierarchy from the strongest patterns.","Tree test it to find confusing labels.","Revise and retest until key tasks succeed."],"t":[]},"https://www.nngroup.com/articles/ia-study-guide/":{"o":"A learning path through NN/g’s information architecture material: core principles, then research methods, then navigation patterns.","i":[["Structure vs navigation","IA is the hidden organisation of content; navigation is the visible menus and links. Sites need navigation even with search."],["Findability vs discoverability","Findability serves people who know what they want; discoverability helps people stumble on relevant content."],["Hierarchy shape","Flat structures show more at once but can overload; deep ones hide content behind steps."],["Clear labels","Vague link text like ‘Learn more’ gives weak cues about where links lead."],["Research methods","Card sorting reveals mental groupings; tree testing checks findability."],["Navigation patterns","Mega menus, side menus, breadcrumbs and footers suit different needs; hidden menus often hurt usability."]],"a":["Group content into categories before designing menus.","Card sort with real users.","Tree test labels before building.","Check menus are clear and visible on desktop and mobile."],"t":[["Findability","How easily people locate content they expect to exist."],["Discoverability","How likely people are to come across content they didn’t know existed."]]},"https://www.nngroup.com/articles/tree-testing/":{"o":"Tree testing checks whether people can find things in a proposed navigation hierarchy. It needs only the category structure and tasks, so menus can be tested before any visual design.","i":[["Purpose","Verify labels and structure instead of guessing."],["Minimal prototype","Only the tree and tasks are needed, so revisions are quick."],["Task wording","Describe a realistic goal without reusing label words that give away the answer."],["Leaf-only answers","Most tools only score bottom-level items as correct."],["Between-subjects comparisons","When comparing label versions, each person should see only one."],["Qual and quant","Small moderated sessions show why; larger samples give success rates and times."]],"a":["Map the full hierarchy in a spreadsheet, one category per row.","Write goal-based tasks without category names.","Pilot with a few moderated sessions.","Add a follow-up question about confusing labels."],"t":[["Directness","Whether people go straight to the answer without backtracking."]]},"https://www.nngroup.com/articles/navigation-ia-tests/":{"o":"How to tell whether poor findability comes from information architecture or from navigation design, by pairing research methods that each target one layer.","i":[["Root cause split","People may struggle because of weak structure or weak visual navigation; each needs a different fix."],["Example","A section may be ignored because its label doesn’t attract or because its link is hard to spot."],["Tree testing","Direct and indirect success rates show whether categories and depth make sense."],["Closed card sorting","Shows whether labels are clear and items sit where people expect."],["Click testing","Heatmaps on screenshots show whether navigation stands out."],["Usability testing","Watching real tasks shows how people search and where they hesitate."]],"a":["Run tree tests and closed sorts to check structure and labels.","Use click tests to check navigation is noticed.","Combine methods; conflicts often reveal the real issue.","Follow up with usability sessions to learn why."],"t":[]},"https://www.nngroup.com/articles/information-architecture-sitemaps/":{"o":"Information architecture and sitemaps are related but different. A sitemap is a diagram of how pages nest, mostly for planning; IA is the ongoing work of organising content, naming things and shaping navigation.","i":[["Sitemap","A tiered diagram of pages with parent–child lines, usually internal rather than shown to visitors."],["IA is continuous","Organising content and maintaining that system is ongoing, not one file you finish."],["Partial picture","Sitemaps show structure but not labels or UI details like search, breadcrumbs or pagination."],["Model first","Settle the underlying organisation before drawing it."],["Abstraction vs artefact","IA is the conceptual model; the sitemap is a simpler, shareable picture of it."],["Research feeds structure","Inventories, audits, taxonomies, card sorts and tree tests shape both."]],"a":["Inventory and audit content before proposing structure.","Build a taxonomy and test labels with card sorting or tree testing.","Draw the sitemap after validating the structure.","Revise both as research reveals problems."],"t":[["Sitemap","A diagram of how a site’s pages and sections nest."]]},"https://www.nngroup.com/articles/user-journeys-vs-user-flows/":{"o":"User journeys cover a broad experience across channels and over time; user flows zoom in on the short, specific steps inside one product.","i":[["Shared traits","Both centre on a user goal, take the user’s view and are shown as maps."],["Scope","Journeys span channels and longer periods; flows stay inside one product."],["Journey maps","Add thoughts and feelings at each step, often informed by field and diary studies."],["Flow artefacts","Drawn as wireflows, flowcharts or task diagrams, mainly informed by usability testing."],["Combine them","A flow can zoom into one stage of a journey."],["Choosing","Journeys for multi-day, multi-channel goals; flows for quick tasks in one product."]],"a":["Identify the channels and timeframe before choosing a tool.","Use a journey map for emotions and decisions across touchpoints.","Use flows and usability tests for short tasks.","Link detailed flows to the matching journey stage."],"t":[["User journey","Steps a person takes across channels and time toward a goal."],["User flow","The typical steps within a product to complete one task."]]},"https://www.nngroup.com/articles/wireflows/":{"o":"Wireflows combine wireframe screens with flowchart arrows to show how a person moves through a task. They suit apps with a few core screens whose content changes with interaction, and work well for team sketching.","i":[["Why they exist","Wireframes miss how dynamic apps change; flowcharts miss the screen context."],["Screens replace symbols","Each step shows the actual screen instead of an abstract shape."],["Arrows mark exact targets","Point arrows at the specific element that triggers each step."],["Same page, new state","A step can be the same screen with updated content, a confirmation or an error."],["Show only what changes","On desktop, crop to the panel or dialog that changes."],["Team sketching","Rough versions help cross-functional teams agree on flows quickly."]],"a":["List every step of the core task.","Sketch one screen per step, marking the triggering element.","Crop large layouts to the changing area.","Sketch roughly with your team before polishing."],"t":[["Wireflow","Wireframe screens joined by flowchart arrows showing how interactions lead to new states."]]},"https://www.nngroup.com/articles/mobile-navigation-patterns/":{"o":"Mobile navigation must be easy to find while leaving room for content. Each pattern trades discoverability against space, so the right choice depends on whether people mostly browse or complete tasks.","i":[["Top navigation bar","Familiar and scannable but fits only a few links and uses prime space."],["Tab bar","Persistent and clear, but holds about five options at most."],["Hamburger menu","Stores many options compactly but is less discoverable; suits browse-heavy content sites."],["Gesture-only menu","Saves the most space, but most people never find it and it clashes with system gestures."],["Navigation hub","A home screen listing every section; frees space but needs return trips."]],"a":["Count main sections; five or fewer can use a visible bar.","Hide navigation only when people mainly browse.","If you hide it, add cross-links inside content.","Keep utility links and search compact."],"t":[["Chrome","Interface elements that frame content rather than being content."]]},"https://www.nngroup.com/articles/menu-design/":{"o":"A 17-point checklist for usable menus covering visibility, location cues, clear labels and easy interaction, warning against hidden, cluttered or overly clever navigation.","i":[["Visibility","Keep main navigation visible on desktop and place menus where people expect them."],["Contrast and coverage","Make menu text stand out and avoid menus that blanket the page."],["Location cues","Show where people are with highlights or breadcrumbs; many arrive on deep pages."],["Clear labels","Familiar, specific words with key terms first; icons support text, not replace it."],["Interaction","Large, spaced targets; carets for submenus; click-triggered submenus for touch and keyboard users."],["Structure","Limit dropdowns to two levels and keep menus sticky on long pages."]],"a":["Keep primary navigation visible on desktop.","Highlight the current section and add breadcrumbs on deep pages.","Check contrast and spacing.","Use mega menus or landing pages for deep content."],"t":[]},"https://www.nngroup.com/articles/breadcrumbs/":{"o":"Breadcrumbs are a secondary navigation aid showing where a page sits in the site’s structure, usually a linked trail under the main menu. Eleven guidelines for desktop and mobile.","i":[["Purpose","Help people orient, especially when they land on a deep page from search."],["Structure, not history","Mirror the hierarchy, not the pages someone clicked through."],["One primary path","If a page has several parents, show one canonical route."],["Links and current page","Link every crumb except the current page, which should look different."],["Only real pages","Skip labels without their own page, and skip breadcrumbs on flat sites."],["Mobile","Avoid wrapping trails and tiny links; a shortened trail is often better."]],"a":["On desktop, start the trail with Home below the global navigation.","Make the current page last and unlinked.","Pick one canonical path for multi-parent pages.","On mobile, keep it to one line or just the parent."],"t":[["Wayfinding","People’s ability to know where they are and how to get elsewhere."],["Polyhierarchy","A structure where one page has more than one parent."]]},"https://www.nngroup.com/articles/mega-menus-work-well/":{"o":"Mega menus are large two-dimensional panels that show many grouped options at once. They work well on large sites when timing, grouping, simplicity and accessibility are handled carefully.","i":[["Everything visible","People compare options directly instead of remembering earlier ones."],["Grouping adds meaning","Headings show how links relate."],["Hover timing","A delay of about half a second stops the menu flashing as the cursor passes."],["Forgiving paths","Keep the panel open while the cursor moves diagonally toward it."],["Keep it light","Simple links only, no forms or search boxes."],["Accessibility","Magnifier and touch users can miss content; strong borders and fallback pages help."]],"a":["Group links into medium-sized, research-based clusters.","Put the most-used group top-left.","Show each option only once.","Give each top-level item a plain landing page."],"t":[["Diagonal problem","When the pointer briefly leaves the menu area and it closes before the user reaches it."]]},"https://www.nngroup.com/articles/facilitating-design-studio-workshop/":{"o":"A design studio is a short workshop blending idea generation, group critique and prioritisation. Because everyone contributes, the team leaves with a shared direction and ownership.","i":[["Four stages","Sketch alone, present and critique, merge strong parts, then prioritise themes."],["Quantity over polish","Count targets stop non-designers freezing and reduce self-censoring."],["Crazy 8s","Eight quick variations, then one bigger idea, then a storyboard, about five minutes each."],["Criteria-based critique","Judge against agreed goals and user needs, not taste, in timed turns."],["Six Thinking Hats","Each segment applies one perspective, such as caution or optimism."],["Budget prioritisation","Spread a pretend budget across ideas and record why."]],"a":["Restate the problem before sketching.","Run timed sketch rounds with count targets.","Critique against shared criteria and mark strengths visibly.","Finish with a prioritisation vote and document the reasoning."],"t":[["Divergent thinking","Generating many ideas without judging them."],["Convergent thinking","Narrowing and combining options into one direction."]]},"https://www.nngroup.com/articles/workshop-activities/":{"o":"Seven foundational activities sit underneath nearly every collaborative UX workshop exercise. Facilitators combine, adjust and sequence them to build almost any session.","i":[["Post up","People silently write ideas on sticky notes and post them, giving diverse input and limiting dominant voices."],["Affinity diagramming","Group related notes by theme to reveal patterns and a shared vocabulary."],["Landscape mapping","Arrange grouped content into a preset structure, such as a journey map or matrix."],["Storyboarding","Sketched panels add context, showing a user’s situation and steps."],["Forced ranking","Weigh options against each other for a strict priority order, as in dot voting or the $100 test."],["Role playing","Take a user’s, system’s or stakeholder’s view to challenge assumptions."],["Playback","Share progress with the wider group to keep everyone aligned."]],"a":["Time-box idea generation to five to ten minutes.","Decide deliberately whether input is anonymous.","Chain activities, such as post up → cluster → rank."],"t":[]},"https://www.nngroup.com/articles/scenario-mapping-personas/":{"o":"Scenario mapping is a workshop method that uses short persona-based stories to generate design ideas early. Scenarios focus on one key task and stay general enough not to lock in solutions.","i":[["Scenario structure","Actor, motivator, intention, action and resolution; a specific persona as actor adds context."],["Right level of detail","Too many specifics push the team toward narrow answers."],["Workshop setup","Four to six people from varied roles, a facilitator, one or two scenarios and a wall split by step."],["Three note types","Design ideas, open questions and considerations on different colours under each step."],["Quick debrief","Cluster related ideas, park long debates and photograph the map."],["Converge across personas","Map the same task for several personas and merge shared needs into one solution."]],"a":["Choose your top one or two personas and their key task.","Write a short scenario without interface details.","Run the mapping workshop early.","Compare across personas and merge into one direction."],"t":[]},"https://www.nngroup.com/articles/storyboards-visualize-ideas/":{"o":"Storyboards show a user’s experience as a sequence of illustrated panels. The article covers their parts, how they differ from journey maps, when to use them and how to make them quickly.","i":[["Core parts","A scenario tied to a persona, a visual per step, and short captions for actions, setting and feelings."],["Versus journey maps","Storyboards are image-first, narrow and quick; journey maps are broad, text-heavy organisational tools."],["Uses","Summarise usability sessions, add context to journey maps, set priorities and kick off brainstorming."],["Shared understanding","A visual story helps teams remember situations and can change which fix comes first."],["One path each","Split complex experiences so each storyboard follows one route."],["Low fidelity is enough","Sticky notes and stick figures work; the goal is discussion, not art."]],"a":["Base it on research, or label it as ideation.","Pick one persona and one path.","Map steps on sticky notes with the user’s emotion at each.","Add captions, share and revise."],"t":[["Storyboard","A sequence of panels showing a user story’s main events in order."]]},"https://www.nngroup.com/articles/draw-wireframe-even-if-you-cant-draw/":{"o":"Wireframes map flows, layouts, hierarchy and interactions. You don’t need drawing skill: a few standard symbols let anyone sketch useful wireframes, and accepting messiness keeps the focus on ideas.","i":[["Frame","Draw a rough rectangle at a common screen size, with browser bar or phone details."],["Navigation and search","A bar at top or side, the current link boxed, search as an icon plus field."],["Text","Thick lines for headers, thin lines for body copy, so hierarchy reads at a glance."],["Images","A rectangle with an X through it."],["Form controls","A box with a caret for dropdowns, ticks for checkboxes, filled circles for radios."],["Buttons and dialogs","Labelled rectangles; dialogs with a header, short text, buttons and a close icon."]],"a":["Draw the frame at a realistic size first.","Sketch the biggest blocks, then smaller controls.","Label the main call to action.","Use thick pens and time limits to avoid polishing."],"t":[]},"https://www.nngroup.com/articles/microinteractions/":{"o":"Microinteractions are small, focused responses a product gives when someone acts or the system changes. They show status, prevent mistakes and express brand personality.","i":[["Trigger and feedback","Each starts with a trigger (a user action or system condition) followed by a small response."],["Single purpose","Each handles one narrow job, like confirming a click or showing progress."],["System status","Progress and standby cues show the system is working or waiting."],["Error prevention","Live password checklists and undo catch problems early."],["Brand expression","Sounds and playful animation can carry tone, but must still serve a purpose."],["Restraint","Subtle, brief animation draws attention without distracting."]],"a":["Define trigger and feedback for each interaction.","Keep each microinteraction to one job.","Show progress or standby states when people wait.","Use short, subtle animation."],"t":[["Trigger","The user action or system condition that starts a microinteraction."]]},"https://www.nngroup.com/articles/response-times-3-important-limits/":{"o":"Three response-time limits based on human perception: about 0.1 s feels instant, about 1 s keeps the flow of thought, about 10 s is the limit of attention. Also covers progress feedback.","i":[["Instant","Under 0.1 s the result itself is enough feedback."],["Flow of thought","Up to about 1 s is noticeable but tolerable; beyond that people lose the sense of direct control."],["Attention ceiling","Around 10 s is the most people will wait focused; longer waits need an estimate of completion."],["Progress feedback","A percent-done bar reassures people and makes waiting easier."],["Fallback signals","When progress can’t be measured, show a spinner or a list of completed steps."],["Speed can backfire","Animations tied to processor speed can become unusable on fast machines."]],"a":["Make direct actions respond within 0.1 s.","Keep commands like sorting under 1 s.","Show progress and a cancel option for anything over 10 s.","Time animations to a real clock."],"t":[["Percent-done indicator","A progress display showing how much of an operation is complete."]]},"https://www.nngroup.com/articles/animation-duration/":{"o":"How to execute UI animation once its purpose is clear: trigger, changing properties, duration and easing, plus warnings about motion that frustrates people or harms those with vestibular disorders.","i":[["Trigger","The event that starts motion, such as a tap, hover or scroll."],["Properties","Opacity, position, scale, colour, shape, blur and rotation cover most needs."],["Duration","Most animations fit 100–500 ms; small feedback near 100 ms, larger changes 200–300 ms."],["Enter vs exit","Elements arriving need slightly more time than elements leaving."],["Easing","Ease-out suits most entrances: responsive, then settling gently."],["Accessibility","Flashing, parallax and scroll hijacking can cause seizures or nausea; honour reduced-motion settings."]],"a":["Specify trigger, properties, duration and easing for each animation.","Keep frequent animations brief and subtle.","Hand developers a millisecond timeline with easing values.","Honour reduced-motion preferences."],"t":[["Easing","How motion speeds up or slows down over its duration."]]},"https://www.nngroup.com/articles/button-states-communicate-interaction/":{"o":"Small visual changes tell people whether a button is available, hovered, focused or pressed. Clear labels and states like loading make controls easier to use.","i":[["Enabled","The ready-to-use look; primary actions need strong contrast."],["Disabled","Muted but still readable, and announced as unavailable to screen readers."],["Hover","Appears under the pointer; a short delay avoids flicker."],["Focus","Marks the control reached by keyboard; use an outline, not colour alone."],["Pressed","Near-instant feedback that discourages repeated taps."],["Loading","A spinner beside the label for slow actions, sometimes ending in a tick."],["Selected","Belongs to checkboxes and radios, not button states."]],"a":["Test that each state looks distinct and readable.","Use a visible outline for keyboard focus.","Mark inactive buttons so screen readers announce them.","Replace vague labels like ‘Next’ with specific actions."],"t":[]},"https://www.nngroup.com/articles/web-form-design/":{"o":"Ten guidelines for usable web forms, opening with a government complaint form whose risky Clear button shows what goes wrong. Following them reduces errors and speeds completion.","i":[["Keep forms short","Remove every field you can derive, collect later or drop; each cut tends to raise completion."],["Labels near fields","Put each label close to its input and tag sections for screen readers."],["Single column","One field per row keeps people moving down, except short related fields like city and postcode."],["Logical order","Use standard field order, list common choices first and check tab order."],["No placeholder labels","Placeholder hints cause usability problems; use visible, persistent labels."],["Mark optional fields","Limit them and label them clearly."],["No reset buttons","Accidental deletion risk outweighs the rare need to start over."],["Prominent errors","Use more than colour, explain each issue and keep what people typed."]],"a":["Delete every field you can derive, postpone or omit.","Remove reset buttons; keep Cancel weaker and away from Submit.","Test with keyboard tabbing and a screen reader."],"t":[]},"https://www.nngroup.com/articles/errors-forms-design-guidelines/":{"o":"Ten guidelines for form error flows that help people notice, understand and fix mistakes, covering timing, placement, visual cues and help for repeated errors.","i":[["Inline validation","Check each field when the person leaves it and show problems right beside it."],["Messages beside fields","Specific, polite, actionable text next to the field, so nobody has to remember the error."],["Colour plus icons","Never rely on colour alone."],["Modals sparingly","Dialogs interrupt and force memory; keep them for simple warnings."],["Wait until finished","Don’t flag a field while someone is still typing."],["Summaries supplement","A top-of-form summary helps but must not replace inline messages."],["Tooltips hide errors","Messages shown only on hover or focus are easy to miss."],["Repeated errors","Three or more repeats signal a design flaw; review analytics and test."]],"a":["Validate on leaving a field, with the message beside it.","Show errors inline with colour and an icon.","Investigate repeated errors with analytics and testing."],"t":[]},"https://www.nngroup.com/articles/4-principles-reduce-cognitive-load/":{"o":"Form design affects the mental work of reading, recalling and deciding. Four principles reduce it: structure, transparency, clarity and support.","i":[["Structure","Group related fields under headings, keep spacing consistent and use one column."],["Transparency","Say up front how long it takes, what documents are needed and whether progress saves."],["Clarity","Everyday wording, no negatively worded checkboxes or double-barrelled questions, and example formats."],["Support","Constraints prevent mistakes; avoid placeholder instructions; show errors beside fields."],["Progressive disclosure","Show only relevant questions and prefill later answers from earlier ones."]],"a":["Group fields under clear headings in one column.","State time, materials and saving before the form.","Mark optional fields and keep labels outside inputs.","Place errors next to fields and test the wording."],"t":[]},"https://www.nngroup.com/articles/3-is-of-microcopy/":{"o":"Microcopy is short interface text with one of three main purposes: inform, influence or help people interact. Decide each snippet’s main goal before writing it.","i":[["Inform","Headings, summaries and tooltips keep people aware and help them decide."],["Influence","Taglines, calls to action and banners nudge toward conversion or brand connection."],["Interact","Labels and feedback show what an element does, where a link goes and what state the system is in."],["Goal over location","The same element type can serve different purposes, so classify by job."],["Context shapes purpose","Subject lines and notifications can inform or persuade depending on use."]],"a":["Define each snippet’s main goal first.","Write headings and summaries that preview content accurately.","Label buttons and links so people know what will happen.","Keep field labels visible instead of placeholders."],"t":[["Microcopy","Very short interface text that guides scanning and interaction."]]},"https://www.nngroup.com/articles/error-message-guidelines/":{"o":"How to design error messages people notice, understand and recover from. Good error handling protects people’s time and effort even when something goes wrong.","i":[["Place errors nearby","Show the message beside the responsible field so the fix is obvious."],["Make them stand out","Combine contrast, icons and borders; never colour or motion alone."],["Match severity","Subtle banners for minor issues; blocking dialogs only for serious ones."],["Wait before flagging","Don’t complain when someone simply passes through a field."],["Plain language","Replace jargon and codes with everyday words."],["Specific and helpful","Name the exact problem and suggest the next step."],["Protect effort","Keep what people typed and offer one-click fixes where possible."]],"a":["Audit error screens for placement, contrast and colour-only signals.","Rewrite vague or blaming messages with cause and next step.","Preserve input and add quick fixes."],"t":[]},"https://www.nngroup.com/articles/tone-of-voice-dimensions/":{"o":"Tone of voice can be mapped on four spectrums: formality, humour, respectfulness and enthusiasm. Copy can sit anywhere between the extremes.","i":[["Tone as personality","Tone shows how an organisation feels about its message and shapes how users feel; every word, including button labels, counts."],["Formal vs casual","How stiff or conversational the writing sounds."],["Serious vs funny","Whether the writer tries to be humorous."],["Respectful vs irreverent","How the writer treats the subject; irreverence targets the topic, not the reader."],["Matter-of-fact vs enthusiastic","Whether the writer sounds excited or dry."],["Same message, different tones","Rewriting one error message on each dimension changes the feel, not the information."]],"a":["Choose a dimension profile for your brand and users.","Add a few tone words and a list of words to avoid.","Adjust humour and emotion to each situation.","Test with users using reaction words or ratings."],"t":[["Tone of voice","The writer’s attitude toward a subject, revealed through word choice."]]},"https://developer.apple.com/videos/play/wwdc2022/10037/":{"o":"An Apple WWDC22 session by two interface writers on how word choice shapes usability and tone, organised around PACE: Purpose, Anticipation, Context and Empathy.","i":[["Purpose","Each screen serves one goal; order content by importance and cut distractions."],["Anticipation","Treat interface text as a conversation and predict what people need next; set a consistent voice, then adjust tone to the moment."],["Context","Consider whether people are walking, driving or multitasking; limited attention means less text and bigger controls."],["Empathy","Plain language without idioms, room for translation and right-to-left layouts, and VoiceOver labels that convey intent."],["Alerts and empty states","Name the action, use descriptive buttons, mark destructive choices, and guide the next step."]],"a":["Write copy alongside wireframes.","State each screen’s purpose in one sentence.","Read strings aloud to catch awkward phrasing.","Test with longer translations and VoiceOver."],"t":[]},"https://www.nngroup.com/articles/principles-visual-design/":{"o":"Five visual design principles that affect usability (scale, visual hierarchy, balance, contrast and Gestalt) help people notice what matters and understand layouts quickly.","i":[["Scale","Bigger elements get noticed first; keep to about three distinct sizes."],["Visual hierarchy","Guide the eye in order of importance using size, colour, spacing and placement."],["Balance","Spread visual weight symmetrically, asymmetrically or radially; symmetry feels calm, asymmetry energetic."],["Contrast","Clear differences signal distinct elements; dimming text can hurt readability."],["Gestalt","People organise parts into wholes; proximity groups nearby items, closure completes shapes."]],"a":["Limit layouts to about three sizes.","Combine size, colour and spacing for a clear reading order.","Check text contrast before muting copy.","Keep labels near their inputs and separate groups with space."],"t":[]},"https://www.nngroup.com/articles/gestalt-proximity/":{"o":"The proximity principle: items placed near each other look related, distant items look separate. Spacing shapes grouping in interfaces, forms, text and responsive layouts, and poor spacing can hide useful controls.","i":[["Whitespace groups","Empty space signals what belongs together, often outweighing colour or shape differences."],["Separate functions","A search tool spaced apart from navigation reads as a different kind of function."],["Chunk long forms","Clustering fields into meaningful groups makes a form feel shorter and easier to scan."],["Camouflaged controls","An important button among unrelated actions gets judged by the cluster and lost."],["Distant items get missed","Task-focused people look at a narrow area, so far-away links and instructions are overlooked."],["Responsive reshuffling","Stacking columns on phones can push related options apart."]],"a":["Keep labels close to fields and use bigger gaps between sections.","Group related buttons and keep unrelated actions apart.","Put calls to action near the content they support.","Check groupings at several screen sizes."],"t":[]},"https://www.nngroup.com/articles/gestalt-similarity/":{"o":"The similarity principle: elements that share colour, shape or size are assumed to be related, even when scattered. Use it to signal shared function, but look-alikes with different purposes mislead.","i":[["Shared traits group","Items that look alike read as one group even far apart."],["Colour as signal","One consistent colour for clickable items helps people spot them."],["Reserve an accent","If every button shares one colour, the primary action is hard to find."],["Shape signals function","Matching shapes suggest similar roles; identical icons for unrelated things imply false links."],["Size conveys importance","Same-sized items look equally important; ads sized like articles get mistaken or ignored."],["Consistency builds expectations","Consistent visual rules teach people how new items will behave."]],"a":["Give each interactive element type one consistent style.","Reserve a unique colour for primary actions.","Avoid near-identical icons for unrelated categories.","Size real content distinctly from ads."],"t":[]},"https://www.nngroup.com/articles/common-region/":{"o":"Common region: items inside a shared boundary are seen as belonging together. Containers organise interfaces and can beat spacing, but extra borders add clutter.","i":[["Shared outlines","A border or tinted background makes items read as one unit."],["Containers map the interface","Coloured headers, footers and side menus separate navigation from content."],["Connect labels to content","Keep a tab or accordion heading in the same region as its panel."],["Borders beat closeness","When spacing is tight, a boundary keeps groups distinct."],["Cards prevent confusion","Wrapping each item’s image, title and details in a card shows what belongs together."],["Excess boxes add noise","Too many borders and full-width bands clutter and can look like the end of the page."]],"a":["Try whitespace first; add borders only if grouping is still unclear.","Keep related labels, images and controls in one container.","Give persistent areas a consistent background.","Avoid full-width bands that look like page endings."],"t":[]},"https://www.figma.com/resource-library/typography-in-design/":{"o":"Figma’s introduction to typography as a design discipline: why type affects clarity and brand, the main typeface categories, core elements like spacing and hierarchy, and how to choose and test fonts.","i":[["First impressions","People decide quickly whether to stay; good type holds attention and conveys personality."],["Serif vs sans serif","Serifs feel traditional and formal; sans serifs feel clean and modern."],["Hierarchy guides the eye","Size, weight and colour show what matters most."],["Spacing affects readability","Kerning, tracking and leading control how letters and lines sit together."],["Line length","Around 40–60 characters is comfortable; longer lines need more line height."],["Consistent placement","Aligning elements and keeping titles in the same spot builds order."]],"a":["Define audience, channel and competitors before choosing a typeface.","Make a mood board to settle the tone.","Test fonts with real content at several sizes.","Check colour pairings on light and dark backgrounds."],"t":[["Leading","Vertical distance between lines of text."],["Tracking","Overall letter spacing across a word or line."]]},"https://www.figma.com/best-practices/typography-systems-in-figma/":{"o":"How to build a consistent type system in Figma with shared text styles: what styles store, choosing fonts and line heights, sizing scales, naming, and resizing for handoff.","i":[["Style scope","Text styles hold font, size, line height, spacing and decoration, not colour or alignment, keeping libraries lean."],["Font choices","Weigh performance, brand personality and whether one family covers everything."],["Line height","Start body text near 1.5× the size; tighten headlines; light-on-dark may need more spacing."],["Scale methods","8-point grid with 4-point baseline, a modular scale, or percentage line heights."],["Naming","Name by size, HTML semantics or function, with prefixes to group them."],["Resizing for handoff","Set text boxes to grow vertically so developers measure spacing accurately."]],"a":["Agree style names with engineers first.","Apply colour through separate colour styles.","Compare scale options in real layouts.","Set text boxes to grow vertically before handoff."],"t":[]},"https://webaim.org/techniques/fonts/":{"o":"How typeface choices affect reading and visual accessibility: simplicity, confusable characters, spacing, weight, contrast, size, and why live text beats text in images.","i":[["No perfect font","Choose familiar, simple fonts that fit the tone; no single font suits every dyslexic reader."],["Look-alike characters","Capital I, lowercase l and 1 should be clearly different."],["Limit variety","Each extra typeface adds effort; keep families few and consistent."],["Spacing and weight","Tight spacing and very thin strokes hurt readability; text should survive increased spacing."],["Moderate contrast","Enough to pass standards, though pure black on white can feel harsh."],["Real text","Live text can be resized, restyled, translated and copied; image text pixelates."]],"a":["Pick simple, familiar typefaces.","Check confusable characters in your font.","Test with increased spacing and larger text.","Keep text as real text and check contrast."],"t":[]},"https://webaim.org/articles/contrast/evaluating":{"o":"Practical ways to check whether text and interface colours have enough contrast: online checkers, browser extensions, eyedroppers and Office’s checker, plus why manual review is still needed.","i":[["Contrast checkers","Compare two colours, report the ratio and show pass/fail for text and non-text thresholds."],["Link colours","Colour-only links need contrast against both the background and surrounding text."],["Scanner limits","WAVE misses gradients, background images, transparency and text in images."],["Eyedroppers","Sample on-screen pixels to test text over images or outside the browser."],["Office checking","Word, PowerPoint and Excel flag hard-to-read text."],["Adjust lightness first","Darken text or lighten backgrounds to pass while keeping the hue."]],"a":["Run WAVE or Office’s checker first.","Sample text over images with an eyedropper.","Test link and body colours together.","Adjust lightness until each pair passes, then retest."],"t":[["Contrast ratio","A comparison of luminance between foreground and background colours."]]},"https://www.figma.com/best-practices/everything-you-need-to-know-about-layout-grids/":{"o":"How Figma layout grids add structure and rhythm: stacking grids on frames, nesting them and tying constraints to columns speeds up resizing, spacing and padding.","i":[["Grid types","Uniform grids for even squares; column and row grids for more control."],["Baseline grids","A top-aligned row grid with a small unit, often 4 pt in an 8-pt system, aligns type."],["Stacked and nested","A frame can hold several grids, and child frames can have their own."],["Constraints in grids","Constraints pin elements to the nearest column, keeping gutters steady on resize."],["Padding visualisation","A one-column, one-row grid with zero gutter shows internal padding."],["Grid styles","Bundle grids into styles and share them through team libraries."]],"a":["Add column, row and baseline grids to one frame.","Pin child constraints to columns.","Make a padding grid using your spacing value.","Save device-specific grid styles to the library."],"t":[]},"https://m3.material.io/styles/typography/applying-type":{"o":"Material Design 3’s guidance on applying its type scale. Fifteen styles sit in five roles (display, headline, title, body and label), each in large, medium and small. (Notes written from the published guidelines; this page couldn’t be read automatically.)","i":[["Display","The largest text, for short, important numbers or phrases on big screens."],["Headline","High-emphasis text for short passages, such as screen titles."],["Title","Medium-emphasis text for section or component titles."],["Body","Text for longer passages; the main reading style."],["Label","Small text for UI elements like buttons, chips and tabs."],["Consistency","Apply roles by purpose, not size, so hierarchy stays consistent across screens."]],"a":["Map your content to roles before choosing sizes.","Use body styles for reading and label styles for controls.","Define each role as a reusable text style or token."],"t":[]},"https://m3.material.io/styles/color/system/overview":{"o":"Material Design 3’s colour system: a source colour generates tonal palettes, which are mapped to colour roles for light and dark schemes, including dynamic colour from a user’s wallpaper. (Notes written from the published guidelines; this page couldn’t be read automatically.)","i":[["Source colour","One key colour seeds the whole scheme."],["Tonal palettes","Each key colour expands into a palette of tones from dark to light."],["Roles, not hex","Components use roles such as primary or surface, not raw colour values."],["Light and dark","The same roles map to different tones, producing matching light and dark themes."],["Dynamic colour","On supported devices, schemes can be generated from the user’s wallpaper."],["Accessible by default","Role pairings are designed to keep text contrast accessible."]],"a":["Pick a source colour and generate palettes with Material’s tools.","Style components with roles, not hex values.","Check both light and dark schemes."],"t":[["Tonal palette","A range of tones of one colour from dark to light."]]},"https://m3.material.io/styles/color/roles":{"o":"Material Design 3 colour roles such as primary, secondary, tertiary, error and surface, each with matching ‘on’ colours for text and icons and ‘container’ variants for lower emphasis. (Notes written from the published guidelines; this page couldn’t be read automatically.)","i":[["Primary","The main brand colour for key components and high-emphasis actions."],["Secondary and tertiary","Supporting and contrasting accents for less prominent components."],["On colours","Each role has an ‘on’ colour for text and icons placed on it, ensuring contrast."],["Containers","Lower-emphasis fills such as primary container, for chips or cards."],["Surfaces","Background roles with different levels for layering and elevation."],["Error","A dedicated role for error states."]],"a":["Use ‘on’ roles for anything placed on a coloured surface.","Use containers for medium-emphasis elements.","Reserve primary for the most important actions."],"t":[]},"https://webaim.org/blog/webaim-color-contrast-checker/":{"o":"WebAIM’s free colour contrast checker compares text and background colours using the WCAG formula and reports whether the pair meets AA or AAA for normal and large text.","i":[["Contrast ratio","A number comparing how light or dark the foreground and background are."],["Conformance levels","Pass or fail is shown separately for AA and AAA, normal and large text."],["Large text","Roughly 18 pt and up, or 14 pt bold, which has a lower required ratio."],["Stricter AAA","Normal text needs 7:1 for AAA; a 5.7:1 pair passes AA but fails AAA."],["Adjusting","The tool can lighten or darken colours slightly to reach a passing ratio."]],"a":["Enter text and background colours and read the ratio.","Adjust until the pair passes the level your text size needs.","Use a colour-picker extension to test colours in images."],"t":[["AA / AAA","WCAG conformance levels; AA is the usual target, AAA is stricter."]]},"https://help.figma.com/hc/en-us/articles/360040450513-Create-layout-guides":{"o":"Figma layout guides are visual aids on frames that help objects line up and keep designs consistent across sizes. (Figma renamed ‘layout grids’ to layout guides in 2025.)","i":[["Uniform grid","Equal square cells for precise work like icons."],["Columns and rows","Guides spanning the frame, suited to responsive layouts."],["Fixed vs stretch","Fixed guides start from an edge with set widths; stretch guides adapt when the frame resizes."],["Margin and gutter","Margin is outer space; gutter is space between columns or rows."],["Combined guides","A frame can hold several guides for horizontal and vertical control."],["8-point system","Multiples of eight can be used as a hard grid or as spacing rules."]],"a":["Select a frame and add a layout guide.","Use a uniform grid for icons, columns and rows for pages.","Save finished guides as styles.","Toggle visibility with Shift+G if guides don’t appear."],"t":[["Gutter","The space between columns or rows."]]},"https://www.figma.com/community/file/1214843299831883608/learn-ui-design-in-figma":{"o":"A free interactive course file from the Figma Community: duplicate it into your Figma account and work through the UI design lessons inside the file. (Figma Community files can’t be read automatically, so this is a description only.)","i":[["How to use it","Open the link, choose ‘Open in Figma’ to duplicate the file, then follow the lessons page by page."],["Why it helps","You practise directly in the tool while learning, instead of switching between a video and Figma."]],"a":["Duplicate the file into your drafts.","Work through one section at a time.","Recreate an exercise from scratch afterwards to check you’ve learned it."],"t":[]},"https://www.figma.com/community/file/1342415305553231324/8-point-grid-system-layout-template":{"o":"A free Figma Community template with layout grids and spacing set up on an 8-point system. (Figma Community files can’t be read automatically, so this is a description only.)","i":[["What it gives you","Ready-made frames with column grids and 8-point spacing for common screen sizes."],["8-point system","Spacing and sizes use multiples of eight (8, 16, 24, 32…) for consistent rhythm."]],"a":["Duplicate the template into your drafts.","Build one screen on it using only 8-point spacing values.","Compare it with a screen built without the grid."],"t":[]},"https://www.nngroup.com/articles/design-systems-101/":{"o":"Design systems are shared standards that help teams build consistent interfaces across many products. The article covers benefits, drawbacks, core parts and the staff needed to maintain one.","i":[["Faster at scale","Reusable elements let teams assemble screens quickly and focus on harder problems."],["Shared vocabulary","Named elements with defined behaviour reduce debate, especially in distributed teams."],["Cohesive brand","One source of components keeps products related and lets rebrands roll out at once."],["Onboarding","Usage rules and style guides teach newcomers how things are done."],["Real costs","Building and maintaining needs dedicated staff, feedback and training; it pays off for long-term work."],["Parts","A style guide for brand and standards, a component library for elements, a pattern library for layouts."]],"a":["Look for repeated screens and elements worth standardising.","Document each component’s name, purpose, options, states and code.","Decide whether to adopt, adapt or build a system.","Confirm the work will repeat before investing heavily."],"t":[["Component library","A catalogue of UI elements with usage notes, options, states and code."],["Pattern library","Reusable groups of elements and layouts such as headers or templates."]]},"https://atomicdesign.bradfrost.com/":{"o":"Brad Frost’s free online book on design systems: how teams ship consistent interfaces across many devices, a method for seeing interfaces as layered hierarchies, and what makes pattern libraries useful.","i":[["Design systems","Shared rules and reusable components keep interfaces consistent as products grow."],["Interfaces as hierarchies","Treat a UI as nested levels, from small building blocks to full pages."],["Pattern libraries","What makes a component collection effective and easy to search."],["Workflow change","How designers and developers can collaborate so a system is actually used."],["Maintenance","Ongoing care keeps a system accurate as products and teams change."]],"a":["List your product’s interface parts from small to large.","Group them into levels and note inconsistent rebuilds.","Build a documented pattern library and review it regularly."],"t":[]},"https://atomicdesign.bradfrost.com/chapter-2/":{"o":"Introduces atomic design, a five-stage mental model for building design systems borrowed from chemistry: atoms, molecules, organisms, templates and pages.","i":[["Atoms","The smallest functional pieces, such as labels, inputs and buttons."],["Molecules","Small groups of atoms working as one unit, such as a search form."],["Organisms","Complex sections built from molecules, such as a header or product grid."],["Templates","Page layouts showing where components sit and the content structure, without final content."],["Pages","Templates filled with real content to test whether the system holds up."],["Non-linear","Use the stages together, moving between parts and the whole."],["Content and structure","Content and design shape each other, so test patterns with real content."]],"a":["Catalogue basic elements and define their properties.","Combine atoms into single-purpose molecules.","Check each organism inside a full layout.","Test templates with short, long and missing content."],"t":[["Single responsibility","Each component does one job well, making it easier to test and reuse."]]},"https://help.figma.com/hc/en-us/articles/14552901442839-Overview-Introduction-to-design-systems":{"o":"Figma’s free course on design systems, from core concepts to building and documenting one. It suits designers who know styles and components, and managers who want design to scale.","i":[["Lesson 1: Welcome","What a design system is, whether you need one, benefits, challenges and auditing a product."],["Lesson 2: Define","Principles, foundations (colour, type, spacing, icons), patterns, documentation and process."],["Lesson 3: Build","A sample team sets up a library, naming, atomic design, styles and components with variants."],["Lesson 4: Document and maintain","Documentation, feedback, contributions, versioning and advocacy."],["Update: tokens and variables","Design tokens, organising them, migrating styles to variables and theming with modes."]],"a":["Audit an existing product for repeated elements.","Build colour and text styles before components.","Adopt a naming convention from the start."],"t":[["Design token","A named value, such as a colour or spacing, shared between design and code."]]},"https://www.nngroup.com/articles/mobile-ux-study-guide/":{"o":"A reading path through NN/g’s mobile UX material: navigation, content, gestures, onboarding, responsive design, ecommerce and testing on phones and tablets.","i":[["Small-screen basics","Less space and attention make core usability rules matter even more."],["Touch interaction","Targets need size and spacing; accordions, sliders and carousels need care."],["Navigation","Hidden menus reduce findability; add crosslinks or visible lists."],["Reading on phones","Comprehension drops; trim to essentials and tuck away secondary details."],["First run","Early login walls and long tutorials drive people away."],["Across devices","Responsive design reshapes layouts rather than shrinking desktop pages."]],"a":["Make tap targets large and well spaced.","Trim pages to essential content.","Delay account creation until people see value.","Test on real devices."],"t":[]},"https://www.nngroup.com/articles/ux-prototype-hi-lo-fidelity/":{"o":"Why teams should test prototypes before building, comparing clickable and static prototypes and high and low fidelity.","i":[["Prototype as hypothesis","A prototype is a candidate answer; watching people use it is the most direct test."],["Early saves money","Changing a sketch costs far less than rewriting shipped code."],["Clickable vs static","Clickable prototypes respond on their own; static ones need a person acting as the system."],["Simulated responses","Facilitators can imitate system behaviour live, useful for testing AI features."],["Three dimensions of fidelity","Interactivity, visual realism and content completeness can each be high or low."],["Trade-offs","Low fidelity invites honest criticism and is quick; high fidelity feels real and shows timing."]],"a":["Build the simplest prototype that answers your question.","Pilot it and fix broken paths.","Rehearse the ‘human computer’ role.","Keep facilitator comments brief and observe."],"t":[["Wizard of Oz testing","A hidden person controls the system’s responses during a test."]]},"https://www.nngroup.com/articles/paper-prototyping-cutout-kit/":{"o":"Paper prototyping means sketching early screens by hand and testing them with users before building anything digital. NN/g offers a free cutout kit with device frames, placeholder pages and blank sheets.","i":[["Core idea","Sketch screens, then have a helper swap pages as the ‘device’ responding to the participant."],["Kit contents","Phone and browser frames, an out-of-scope page, a loading page and blank sheets."],["Frame sizing","Print frames slightly larger and use heavier card for handheld mockups."],["Consistent fidelity","Mixing polished and rough screens skews attention and feedback."],["Simulating interactions","Long strips for scrolling; layered sheets for dropdowns and overlays."],["Iterate between sessions","Redraw problem screens between participants and test fixes quickly."]],"a":["Rehearse screen order with your helper.","Keep all screens at similar detail.","Draw long pages on continuous paper.","Revise problem screens between sessions."],"t":[]},"https://www.nngroup.com/articles/mozilla-paper-prototype/":{"o":"A case study of Mozilla redesigning its Firefox support site with cheap paper prototypes and quick user tests, fixing confusing labels and layouts before any HTML was built.","i":[["Rapid revision","Frequent small test rounds let designs evolve fast, some changing seven times in two weeks."],["Fewer choices","Limiting first-level options helped people reach the right article faster."],["Two entry routes","Starting from a task or a product matched how people framed their problem."],["Progressive disclosure","Collapsing product lists kept the page clean but options close."],["Label wording","Several phrasings were tested before one worked."],["Visual weight","Bright, detailed elements stole attention, so keep prototypes at one level of detail."]],"a":["Test low-fidelity prototypes before coding.","Test a few alternatives every week.","Keep fidelity and colour consistent across versions.","Revise immediately where people hesitate."],"t":[]},"https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma":{"o":"Figma’s prototyping tools link frames into clickable flows that show how people move through a design: flows, connections, animations and device settings, on all plans.","i":[["Flows","A connected chain of frames; one page can hold several flows for different journeys."],["Starting points","Each flow begins at one starting frame."],["Hotspots and connections","Drag from a clickable element to a destination frame to create a connection."],["Triggers and actions","A trigger (tap, hover) starts a change; the action decides what happens."],["Animation","Transition type, direction, duration and easing shape how frames change."],["Overlays and scrolling","Overlays float menus or alerts; overflow lets content scroll."]],"a":["Map each journey as its own flow.","Drag hotspots to destinations.","Add interactions and animations, then preview.","Set device, background and start frame before sharing."],"t":[["Hotspot","The clickable object where an interaction begins."]]},"https://help.figma.com/hc/en-us/articles/14506587589399-Use-variables-in-prototypes":{"o":"Figma variables are saved values (text, numbers, colours or true/false) that prototype actions can change, so a few frames can show dynamic behaviour.","i":[["Variable types","Strings for text, numbers for sizes, booleans for visibility, colours for fills."],["Set variable action","A click or tap assigns a new value to a variable."],["Matching types","The new value must match the variable’s type."],["Expressions","Simple maths or text joins compute values from other variables."],["Component bindings","Bind variables to variant or component properties to swap states."],["Binding scope","A variant property affects one instance; a component property updates all."]],"a":["Create a variable collection with sensible defaults.","Bind variables to text, size or visibility.","Add a Set variable action to a click or tap.","Play the prototype to check updates."],"t":[["Variable","A saved value reused across a design."]]},"https://help.figma.com/hc/en-us/articles/360061175334-Create-interactive-components-with-variants":{"o":"Interactive components link variants within one component set so prototypes switch states automatically, and every instance already carries the behaviour.","i":[["Component set","Related versions of one component (default, hover, pressed) grouped together."],["Change to","An action that swaps an instance to another variant when triggered."],["Built-in defaults","Interactions live on the main component, so copies behave correctly without wiring."],["Nested switching","A child instance can change its parent’s variant, such as expanding a panel."],["Trigger priority","If a frame interaction and a variant interaction share a trigger, the frame one wins."],["State persistence","Figma remembers the last variant unless reset is enabled."]],"a":["Build every state before linking.","Add Change to actions between variants.","Check results in presentation view.","Enable reset when each frame should start fresh."],"t":[]},"https://help.figma.com/hc/en-us/articles/17146044893591-Advanced-prototyping-examples":{"o":"Figma’s worked examples of variables, conditionals and expressions that make prototypes more realistic with fewer frames.","i":[["Required checkbox","A checkbox toggles a true/false variable; Continue activates only when it’s true."],["Empty-answer error","Choices store text; a conditional shows an error overlay if any answer is unset."],["Item counter","Each selection adds or subtracts from a number shown in a bound text layer."],["Click reward","A count increases with each tap; at five, a hidden message appears."],["Volume bar","A number drives a bar’s width; plus and minus change it by five."]],"a":["Bind a boolean to a two-variant toggle.","Add a conditional that shows an error when inputs are empty.","Build a counter with a number variable and test it."],"t":[]},"https://www.nngroup.com/articles/empty-state-interface-design/":{"o":"Empty states are the blank screens people see when content doesn’t exist yet or can’t be shown. Designed deliberately, they explain status, teach features and offer routes into key tasks.","i":[["Status feedback","A blank panel leaves people guessing whether it’s loading, failed or empty."],["Premature messages","Showing ‘no records’ while loading makes people give up."],["In-context teaching","Empty areas can explain a feature at the moment it’s relevant."],["Pull-style help","Guidance that appears on interaction supports learning without interrupting."],["Direct task paths","Add a button or link to the setup step."],["Actionable wording","Explain how to fill the space, not just that it’s empty."]],"a":["Audit flows for unexplained blank screens.","Show a clear message when a process returns nothing.","Use progress indicators while loading.","Add a short explanation and a direct action."],"t":[]},"https://www.nngroup.com/articles/skeleton-screens/":{"o":"Skeleton screens are wireframe-like placeholders shown during full-page loads. They make waiting feel shorter, and work better than spinners or progress bars in some situations.","i":[["Purpose","Grey blocks mimic the layout so people see what’s coming."],["Static vs animated","Animated shimmer shows activity but can distract or cause accessibility issues."],["Frame-only variant","Showing only header and footer gives no hints and can look broken."],["Perceived speed","Previewing structure makes waiting feel shorter."],["Cognitive load","A gradual reveal hints at content types without overwhelming."],["Choosing an indicator","Skeletons for full-page waits under 10 s; spinners for modules; progress bars for long waits."]],"a":["Use skeletons only for full-page loads.","Match placeholder shapes to the real layout.","Skip them for loads under a second.","Keep animation subtle and honour reduced motion."],"t":[["Skeleton screen","A placeholder showing a page’s expected layout while content loads."]]},"https://www.nngroup.com/articles/progress-indicators/":{"o":"Progress indicators reduce anxiety during slow responses. Match the indicator to the wait: spinners for shorter waits, percent-done bars for longer ones.","i":[["System status","Showing the system is working reassures people their input registered."],["Immediate acknowledgement","Change the interface right after input; silence makes people retry."],["Spinners for brief waits","Looping animation suits about 2–10 seconds but says nothing about time left."],["Bars for long waits","Percent-done bars show progress and remaining work."],["Static messages fall short","Generic ‘loading’ text and ‘don’t click again’ warnings add little."],["Clear cues for children","Keep the main progress indicator distinct from any loading-screen games."]],"a":["Give feedback immediately after every action.","Use spinners for short waits and bars beyond about 10 s.","Offer rough time estimates or step counts.","Replace vague loading text with real progress."],"t":[]},"https://www.nngroup.com/articles/usability-testing-101/":{"o":"Usability testing is an observational method: a facilitator watches people try realistic tasks and listens to their comments, to find problems, spot opportunities and learn how people behave.","i":[["Why test","Even skilled designers can’t predict every reaction; watching real people reveals what expertise misses."],["Iterate","Test, observe, revise and repeat for much better results than intuition."],["Core elements","A facilitator, realistic tasks and a participant."],["Think-aloud","Participants narrate thoughts, revealing goals, confusion and motivation."],["Qual vs quant","Qualitative explains why; quantitative measures success and time."],["Remote formats","Moderated remote sessions mirror in-person; unmoderated ones run alone on a platform."]],"a":["Write realistic tasks that don’t hint at answers.","Recruit people who resemble real users.","Ask them to think aloud and avoid leading questions.","Test about five per group, revise and retest."],"t":[["Facilitator","The person who guides tasks and observes without biasing results."]]},"https://www.nngroup.com/articles/thinking-aloud-the-1-usability-tool/":{"o":"Thinking aloud, where participants say their thoughts while doing tasks, is Jakob Nielsen’s top usability method: cheap, adaptable and easy to learn, though it has limits.","i":[["Core setup","Representative users, realistic tasks, and a facilitator who mostly stays quiet."],["Reveals reasoning","Misconceptions show where a design misleads."],["Low cost","No special equipment; a handful of people surface the biggest problems in about a day."],["Forgiving","Even imperfect sessions yield insight, unless the facilitator steers answers."],["Persuasive","Watching real struggles convinces sceptical colleagues and executives."],["Limits","Hard to analyse statistically, unnatural for some people, and prompts can skew behaviour."]],"a":["Test your design with about five users.","Write realistic tasks without hints.","Prompt gently and note when you may have influenced behaviour.","Invite teammates to observe."],"t":[]},"https://www.nngroup.com/articles/usability-checklist/":{"o":"A ten-step checklist for moderating qualitative usability tests, plus a facilitator guide. Put participants at ease, avoid bias and evaluate the design, not the person.","i":[["Welcome","Introduce yourself, call it research rather than a test, and check how to say their name."],["Observers and recording","Remind people who is watching and whether you’re recording."],["Consent","Let them read and sign at their own pace and answer questions."],["Short background interview","Brief questions to tailor tasks, without priming behaviour."],["Set expectations","Tasks come one at a time; you’ll mostly take notes; think aloud honestly."],["One task at a time","Have them read each task aloud and confirm they understand."],["Follow-up questions","Ask broad questions after each task before specific ones."],["Close","Take observer questions, thank them, give the incentive, stop recording."]],"a":["Write a facilitator guide with your script and checklist.","Pilot the script for timing and wording.","Rehearse the closing steps."],"t":[]},"https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/":{"o":"Small usability studies beat large ones: about five participants uncover most problems, and several small test-and-fix rounds improve a product more than one big study.","i":[["Diminishing returns","The first person reveals a lot; later people mostly repeat what you’ve seen."],["Iterate","Splitting budget into rounds of five lets you fix, retest and catch failed fixes."],["Not just one","One person may be unrepresentative; a few separate quirks from patterns."],["Fixed setup costs","Spreading setup over several people makes each finding cheaper."],["Distinct groups","For very different audiences, test three or four per group."],["Limits of the rule","Quantitative metrics and card sorting need larger samples."]],"a":["Recruit about five representative users per round.","Fix problems, then retest with a new group.","Test three or four people from each distinct audience."],"t":[]},"https://www.nngroup.com/articles/qual-usability-testing-study-guide/":{"o":"A reading list on qualitative usability testing: planning, recruiting, writing tasks, facilitating, remote formats and special user groups.","i":[["Core method","A facilitator watches participants do tasks and listens to their feedback."],["Participants","About five realistic users per group; be careful reusing testers or coworkers."],["Informed consent","People agree after understanding the session and how data is used."],["Task writing","Realistic scenarios without hints; move from open to focused tasks."],["Facilitation","Encourage think-aloud, stay neutral and manage observers."],["Remote and special cases","Moderated vs unmoderated; adjust for minors, older adults, accessibility and international studies."]],"a":["Read the intro article and videos before planning.","Draft tasks and pilot them with a colleague.","Prepare a checklist and consent form, and rehearse prompts."],"t":[]},"https://www.nngroup.com/articles/unmoderated-usability-testing/":{"o":"In unmoderated testing participants complete tasks alone while software instructs and records them. It is fast and broad but needs careful planning, since nobody can clarify mid-session.","i":[["Speed and reach","No scheduling, many people at once, no time-zone trouble."],["Weak spots","Early prototypes are hard to test, and people engage less realistically in imaginative tasks."],["Goals drive tools","Decide what you need, then choose software with the right features."],["Task wording","Specific, realistic, hint-free, with a clear point to stop."],["Pilot before launch","Run it yourself and with a few real participants on their own devices."],["Recruiting and analysis","Screen by behaviour, watch for professional testers and review recordings with audio."]],"a":["Write goals and criteria before comparing platforms.","Replace template tasks with tailored ones.","Pilot yourself, then with real participants.","Exclude people who rush or ignore tasks."],"t":[]},"https://www.nngroup.com/articles/remote-usability-tests/":{"o":"Remote usability testing puts participant and facilitator in different places, useful for tight budgets, schedules or participant pools. It can be moderated (live) or unmoderated (recorded).","i":[["Core difference","People use their own devices and spaces, revealing real setups but making tech issues harder."],["In-person preferred","Body language and timing are easier face to face."],["Moderated","Live conversation allows clarifying questions, but knowing when to speak is harder remotely."],["Unmoderated","Flexible timing and predefined questions, but no live help."],["Best use of unmoderated","Focused studies of a few elements, run in parallel."],["Recruiting","Wider reach but more no-shows."]],"a":["Rehearse tools with an outside person.","Write tasks that stand alone.","Stay reachable during unmoderated sessions.","Recruit extra participants."],"t":[]},"https://www.nngroup.com/articles/unmoderated-user-testing-tools/":{"o":"Compares 11 popular unmoderated testing platforms, where participants complete tasks alone while the tool records screens and voices, and explains which features, costs and integrations should guide a choice.","i":[["Core traits","Remote, no facilitator, task-focused, with recordings to check success."],["Baseline features","Screen and audio recording, timestamped notes, transcripts and clip downloads."],["Participant sourcing","Some tools have their own panels; others connect to recruiting services."],["Cost drivers","Older, feature-rich platforms cost more; pricing is pay-as-you-go, subscription or enterprise."],["Advanced extras","Randomisation, skip logic, statistics, webcam capture and AI analysis."],["Workflow fit","Check integrations and support for other methods like card sorts."]],"a":["List the methods and features you need first.","Compare price, participant access and prototype support.","Pilot a small study before committing."],"t":[]},"https://www.nngroup.com/articles/ab-testing/":{"o":"A/B testing compares two or more live versions to find which better achieves a goal, based on measured behaviour. It suits incremental improvements but needs traffic, a clear hypothesis and patience.","i":[["Core method","Split visitors between the original and a variant and compare predefined metrics."],["Single change","Change one element so any effect can be traced."],["Decision rule","Adopt the variant only if it clearly and statistically wins."],["Evidence-based hypotheses","Strong tests come from research such as usability findings."],["Metric pairing","A primary metric plus guardrail metrics that catch harm elsewhere."],["Planning and timing","Sample size depends on baseline rate, minimum effect and confidence; run at least one to two weeks."]],"a":["Write a hypothesis tied to one goal.","Change only one element.","Calculate sample size and don’t stop early.","Check guardrails and combine with qualitative insight."],"t":[["Control","The original design used as the baseline."],["Guardrail metric","A secondary measure confirming a win doesn’t harm other outcomes."],["A/A test","Comparing identical versions to check the tool is set up correctly."]]},"https://www.nngroup.com/articles/putting-ab-testing-in-its-place/":{"o":"A/B testing measures real behaviour cheaply and precisely, but it can’t explain why results happen or reveal deeper usability problems, so it works best alongside qualitative research.","i":[["Live split tests","Traffic is divided between versions and the better performer wins."],["Strengths","Real behaviour, tiny differences detected with big traffic, low cost once built."],["Single-metric limits","Needs one countable goal; brand reputation or reading quality are hard to measure."],["Late-stage only","Designs must be built and debugged, so few ideas get tested."],["Short-term bias","Favours immediate actions and can miss long-term costs like clutter."],["No reasons why","Shows which wins, not why; big issues like trust are missed."]],"a":["Do qualitative research first to generate strong ideas.","Split-test only finished designs with one measurable goal.","Check overall business effects before declaring a winner."],"t":[]},"https://www.nngroup.com/articles/measuring-perceived-usability/":{"o":"How UX researchers collect self-reported ratings in usability tests, separating questionnaires after each task from those after the whole session, and how to interpret them.","i":[["SUS","Ten items after a session, giving a 0–100 score you can benchmark."],["SEQ","One seven-point question after each task to find the hardest workflows."],["NASA-TLX","Six workload dimensions for high-stakes, complex work."],["Timing","Session-end ratings reflect memory skewed to peaks and endings; task-end ratings are fresher."],["NPS","One recommendation question tied to business; less sensitive to UX issues."],["Sample size","Ratings need about 20–30 participants; small rounds should focus on the reasons behind scores."]],"a":["Give SUS at session end.","Ask SEQ after each task.","Follow every score with ‘why?’."],"t":[["Peak-end effect","The most intense moment and the ending dominate how an experience is remembered."]]},"https://www.nngroup.com/articles/usability-metrics/":{"o":"Measuring usability costs roughly four times more than qualitative studies, but metrics help track progress, benchmark competitors and decide when to launch. Which measures to collect and how to combine them.","i":[["Why measure","Track improvement between releases, compare with rivals and judge launch readiness."],["Core measures","Task success, time on task, error rate and satisfaction."],["Choosing users","Study novices for public sites, experienced users for professional tools."],["Sample size","About 20 people per design for reliable metrics, versus five for qualitative work."],["Combining times","Only add task times when tasks happen in sequence."],["Geometric mean","Average improvement ratios with a geometric mean so one extreme doesn’t dominate."]],"a":["Start with cheap qualitative testing.","Pick measures and user groups that fit your goals.","Combine per-task improvements with a weighted geometric mean."],"t":[]},"https://www.nngroup.com/articles/product-ux-benchmarks/":{"o":"UX benchmarking measures a product’s experience with consistent metrics, then repeats the same study after each release to track progress and show the value of design.","i":[["1. Choose what to measure","Product, user group, key tasks and two to four metrics tied to goals."],["2. Pick a method","Usability testing, analytics or surveys, ideally pairing attitude and behaviour."],["3. Measure the baseline","Pilot first, then capture the baseline and note outside events."],["4. Redesign","You need a changed version to compare."],["5. Measure again","Same method after launch, after people have adjusted."],["6. Interpret","Use statistics to check differences are real."],["7. Calculate ROI","Optionally link gains to business measures."]],"a":["Pick five to ten tasks and two to four KPI-linked metrics.","Pilot, then repeat the same method each release.","Document confounding factors and tell the story with data."],"t":[]},"https://www.nngroup.com/articles/ux-expert-reviews/":{"o":"In an expert review a UX specialist inspects a product to find problems and strengths, using guidelines, experience and an outsider’s view, then delivers prioritised findings.","i":[["Review family","Includes heuristic evaluation; expert reviews are broader."],["Beyond checklists","Draws on heuristics, guidelines, cognitive psychology and the reviewer’s experience."],["Expertise","Built by running research and watching real users."],["Fresh eyes","Outsiders see obvious issues creators miss and feel no need to defend."],["Objective findings","Each issue cites a principle, gets a severity and a fix; taste doesn’t count."],["Reviews plus testing","Reviews catch obvious flaws cheaply; tests reveal surprises."]],"a":["Use a reviewer outside the design team and share goals and users.","Cite the principle, severity and fix for each finding.","Alternate expert reviews with usability tests."],"t":[]},"https://webaim.org/articles/evaluationguide/":{"o":"WebAIM’s guide to checking accessibility by content type, combining the WAVE tool with manual keyboard and screen-reader testing. It covers the most common problems rather than every WCAG requirement.","i":[["Alt text","Meaningful images need useful descriptions; decorative images need empty alt."],["Headings and regions","One clear top heading, no skipped levels, and proper landmarks."],["Forms","Each control has a label; required fields and errors are announced."],["Tables","Header cells with correct scope and a caption; no header markup in layout tables."],["Zoom","At 400% zoom, no content is lost and no sideways scrolling."],["Contrast","4.5:1 for body text; 3:1 for large text, icons, borders and focus outlines."],["Keyboard","Visible focus, logical order, working skip link, nothing mouse-only."]],"a":["Run WAVE and fix errors before alerts.","Navigate a page with only Tab, Shift+Tab, Enter and Escape.","Test one dialog with a screen reader."],"t":[]},"https://webaim.org/techniques/keyboard/":{"o":"Every part of a website must work with a keyboard alone, because many people with motor or visual impairments, and power users, rely on it. Covers common barriers and the standard keystrokes for testing.","i":[["Visible focus","People need a clear marker of what is selected; never remove outlines without a replacement."],["Logical tab order","Focus follows the visual layout; it comes from source order, so avoid positive tabindex."],["Native elements first","Links, buttons and form controls already work; custom widgets must fully support keyboard."],["No fake focus stops","Non-interactive content shouldn’t take focus."],["Shortcuts past long menus","Skip links, headings and landmarks cut Tab presses."],["Escape from traps","Dialogs can hold focus, but Esc must let people leave."]],"a":["Tab through each page and check focus is always visible.","Check focus order and that dialogs close with Esc and return focus.","Test phones and tablets with an external keyboard."],"t":[["Keyboard trap","A place where focus gets stuck and can’t move away using the keyboard."]]},"https://webaim.org/articles/voiceover/":{"o":"An introduction to testing web accessibility with VoiceOver, Apple’s built-in screen reader: starting it, reading and navigating by keyboard, and checking images, tables and forms.","i":[["Activation","Triple-click Touch ID or press Cmd+F5; the VO keys are Control+Option."],["Reading","VO+A reads everything; Control stops; VO+P, VO+S and VO+W read paragraph, sentence and word."],["Navigation","Tab moves between links and fields; VO+Cmd+H, L, T or X jumps to headings, links, tables or lists."],["Rotor","VO+U opens a menu of headings, links and other elements for a quick overview."],["Images, tables, forms","Need alt text, proper headers and explicit labels; VoiceOver doesn’t guess labels from position."],["Practice setup","Use Safari with full keyboard access; VO+Shift+F11 turns on Screen Curtain."]],"a":["Enable full keyboard access in Safari.","Move through a page using headings, links and the rotor.","Check images, tables and fields are announced correctly."],"t":[]},"https://webaim.org/resources/evalquickref/":{"o":"A quick walkthrough for checking whether a page works for people with disabilities, combining automated scanning with manual keyboard, zoom and screen-reader tests.","i":[["Automated scan","Run WAVE and review errors, alerts, headings, contrast and ARIA."],["Keyboard only","Tab, Shift+Tab, Enter, Space and arrows should do everything, with visible focus."],["Zoom and reflow","At high zoom and narrow width, text stays readable without sideways scrolling."],["Screen readers","Check that forms, labels, errors and dynamic updates are announced."],["Colour and motion","Meaning isn’t conveyed by colour alone; motion can be paused."],["Descriptive text","Useful alt text, links that make sense alone, a page language and a clear title."]],"a":["Scan automatically, then test keyboard, zoom and screen reader.","Record each problem with location, who it affects and a fix.","Retest after fixes against the WCAG checklist."],"t":[]},"https://www.figma.com/blog/the-designers-handbook-for-developer-handoff/":{"o":"Figma’s guide to designer–developer collaboration from early planning to final handoff, organised into aligning on scope, deciding how to build, sharing a language and preparing files.","i":[["Early developer input","Engineers in wireframing reveal limits and opportunities while change is cheap."],["Responsive thinking","Layouts must work at every width, not just set breakpoints."],["Hidden edge cases","Long words, incomplete profiles and poor images expose problems; test with messy data."],["Accessibility in structure","Designs shape semantic HTML: heading levels, links vs buttons, tab order."],["Shared system language","Tokens and components should match code; detaching causes drift."],["Clean files","Clear layer names, no clutter and preset exports mean fewer questions."]],"a":["Share wireframes with a developer before polishing.","Annotate layout rules, interactions and accessibility in Dev Mode.","Use system components and explain detached ones.","Name layers clearly and mark frames ready for dev."],"t":[]},"https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode":{"o":"Dev Mode is Figma’s developer workspace for inspecting designs, reading generated code, downloading assets and managing handoff, on paid plans.","i":[["Entering","Toolbar toggle or Shift+D; Dev Mode links open straight into it."],["Ready for dev","Designers flag frames or sections, which collect in a panel."],["Inspect panel","Layer properties, metadata and comparisons with earlier versions."],["Code and list views","Properties as generated code or a copyable list, with language and unit options."],["Code Connect","Real component code from the design system replaces auto-generated snippets."],["Assets","Icons are detected for download; layers export as PNG, JPG, SVG or PDF."]],"a":["Open a file in Dev Mode and browse ready frames.","Compare a component in code and list views.","Compare a frame with its previous version before building."],"t":[]},"https://help.figma.com/hc/en-us/articles/360040521453-Optimize-design-files-for-developer-handoff":{"o":"How to prepare Figma files before handing them to developers, organising files, pages, sections and components early so collaborators can build from them.","i":[["Descriptive naming","Clear names show what each part is for and whether it’s ready."],["Thumbnails and notes","Custom thumbnails show status; sticky notes record decisions beside the work."],["Component page","Instances of every component on one page give a single place to check."],["Documented components","Usage, variants, states and accessibility guidance help developers."],["Sections and status","Group content into sections and mark them ready for build."],["Viewer vs editor","Most collaborators only need view access to inspect and comment."]],"a":["Name pages, sections, styles and components before sharing.","Write component descriptions with usage, states and accessibility.","Give most teammates view access only."],"t":[]},"https://www.nngroup.com/articles/prototype-specifications/":{"o":"Prototype specifications are short notes beside wireframes or prototypes that clarify what visuals can’t show alone. Three note types, and when they’re worth the effort.","i":[["Purpose","Annotations answer predictable questions and reduce meetings, especially for remote teams."],["Element notes","Visual attributes such as type, size, colour and spacing."],["Functionality notes","Behaviour: clicks, states, input limits and multi-step flows."],["Content notes","Text still to be written, such as tips, errors or promotional copy."],["Quality standards","Concise, paired with sketched examples and using the team’s vocabulary."],["When to skip","Simple flows and familiar components may not need notes."]],"a":["Sketch examples next to every note.","Annotate behaviour, states and copy only where ambiguous.","Use your team’s terms and design system."],"t":[]},"https://www.nngroup.com/articles/the-product-triad-designs-role/":{"o":"The product triad is a designer, product manager and engineering lead working as equal partners, built on the desirable–viable–feasible framework, with design contributing to all three.","i":[["Origins","A product must attract people, sustain a business and be buildable."],["Shared ownership","The group decides together rather than each owning one aspect."],["Engineering lead","Estimates complexity and shapes what is realistically achievable."],["Product manager","Links to the business, defines metrics and decides scope and timing."],["Design and desirability","The designer becomes the expert on user needs through research."],["Viability and feasibility","Designers connect the experience to business goals and involve engineers early."]],"a":["Work with engineers from the start, not after mockups.","Learn business goals and metrics.","Bring research into stakeholder discussions before committing."],"t":[["Desirable, viable, feasible","A product people want, that sustains the business and that can be built."]]},"https://research.google.com/pubs/archive/36299.pdf":{"o":"Google’s CHI 2010 paper introducing HEART, a framework of user-centred metrics for web products, and the Goals–Signals–Metrics process for choosing them. It combines attitudinal surveys with large-scale behavioural data.","i":[["Happiness","Attitudes like satisfaction and perceived ease, tracked over time with regular surveys."],["Engagement","Depth of involvement, such as visit frequency, averaged per user."],["Adoption","How many new users start using a product in a period."],["Retention","Whether users from one period are still active later."],["Task success","Efficiency, effectiveness and errors, often estimated from logs."],["Goals → Signals → Metrics","Define goals, identify behaviours or attitudes showing success, then turn those into normalised metrics."],["Versus PULSE","Page views, uptime, latency, users and earnings track health indirectly; HEART links to design decisions."]],"a":["Agree goals as a team before choosing metrics.","Identify behavioural and survey signals for each goal and check logging captures them.","Normalise metrics per user and cross-check with usability findings."],"t":[["HEART","Happiness, Engagement, Adoption, Retention, Task success."]]},"https://www.nngroup.com/articles/collaborative-agile-activities/":{"o":"Three low-cost brainstorming methods that let a whole Agile team, not only designers, shape a feature, plus how timing and team size guide which to use.","i":[["6-up 1-up","Everyone sketches six ideas in five minutes, discusses, then refines one into a shared choice or hybrid."],["Whiteboard session","A small cross-functional group builds one design together; suits current-sprint features."],["Telephone","Paper concepts pass person to person, each adding to the last; suits large teams."],["Timing by urgency","Urgent work pairs closely with one person; backlog items allow wider sessions."],["Gradual adoption","Introduce techniques inside existing meetings before asking for new ones."]],"a":["Run a 6-up 1-up on an upcoming backlog feature.","Hold a quick whiteboard session when a technical issue changes the design.","Add a short brainstorm slot to an existing meeting."],"t":[]},"https://www.figma.com/blog/5-things-designers-need-to-know-for-a-smooth-handoff/":{"o":"Handoff is an ongoing process, not one event. Five habits help designers share intent, keep terms consistent, organise files and reduce back-and-forth with developers.","i":[["Annotate selectively","Add notes only where developers need context, such as new components or platform differences."],["Agree on naming early","Use the same terms and variable names as developers (toggle vs switch)."],["Group and flag files","Sections and status labels separate finished work from drafts."],["Archive past iterations","Move old explorations to a labelled archive page or use branching."],["Document inside components","Put usage details in component descriptions so developers needn’t search."]],"a":["Ask developers what they want annotated.","Sort files into sections, label finished frames and archive old pages.","Write component descriptions."],"t":[]},"https://help.figma.com/hc/en-us/articles/26781702258583-Dev-Mode-statuses-and-notifications":{"o":"Dev Mode statuses show whether a section, frame or component is ready to build, and notifications alert people when statuses change. Requires paid plans and specific seats.","i":[["Ready for dev","Marks designs as prepared for developers."],["Completed","Shows development is finished (higher-tier plans)."],["Changed","Applied automatically when a marked design is edited."],["Status notes","Explanations added to status changes appear in history and notifications."],["Notifications","Email, desktop, mobile, Slack or Teams alerts when designs become ready or change."]],"a":["Mark a finished frame as ready for dev.","After editing, update its status with a reason.","Choose notification settings in Dev Mode."],"t":[]},"https://www.nngroup.com/articles/design-critiques/":{"o":"A design critique is a group conversation to improve work in progress, not judge it. Success depends on clear scope, agreed goals and open dialogue; frequent critiques catch problems while they’re cheap.","i":[["Critique vs review","A critique improves one piece of work; a review checks against standards or seeks approval."],["Three success themes","Firm boundaries, shared objectives tied to user needs, and conversation instead of commands."],["Why critique","Catches mistakes, builds buy-in and reveals inconsistencies across a product."],["Facilitator duties","Manage time, reframe opinions around goals, take notes and send actions."],["Structured participation","Round-robin turns ensure everyone speaks."],["Presenter mindset","Restate goals, share work in advance, tell the story briefly and don’t defend everything."]],"a":["Start a 30-minute weekly round-robin critique.","Agree scope and share work beforehand.","Rotate the facilitator and circulate action items."],"t":[["Design critique","A structured discussion aimed at improving work, not approving it."]]},"https://media.nngroup.com/media/articles/attachments/NNg_UXCritiqueCheatsheet.pdf":{"o":"A one-page cheat sheet for running useful critiques before, during and after the meeting, and giving feedback that centres on the work and its goals rather than the designer.","i":[["Tight scope","Define what’s in and out, small enough for about an hour."],["Advance preparation","Use a consistent slot and share goals and designs beforehand."],["Time boxing","Time limits per agenda item so nothing stalls."],["Storytelling opener","The presenter explains problems, inspirations and decision points first."],["Goal-based questioning","Ask why after gut reactions and link comments to personas, scenarios or goals."],["Shared records","Keep notes and actions in a shared place and revisit parked issues."]],"a":["Send a one-hour scope and agenda with designs.","Tie every comment to a persona, scenario or goal.","Record decisions and follow up individually."],"t":[]},"https://www.nngroup.com/articles/after-design-critique/":{"o":"A critique isn’t finished when the meeting ends. Report back on which feedback shaped the work, which didn’t, and why; skipping this wears down people’s willingness to contribute.","i":[["Follow-through","Feedback has value only when people see how it was used or set aside."],["Two kinds of follow-up","A quick recap right after, then a fuller update showing how the design changed."],["Attribution builds trust","Link each change to the comment that prompted it, with annotated before-and-after visuals."],["Report declined ideas","Explaining deferred or rejected suggestions stops people assuming they were ignored."],["Four-part structure","Feedback, decision, reason, next step."],["When to follow up","After major shifts, before handoff and when a comment changed direction."]],"a":["Send a recap within a day of each critique.","Link visible changes to the feedback behind them.","Explain declined suggestions with the four-part structure."],"t":[]},"https://www.nngroup.com/articles/iterative-design/":{"o":"Jakob Nielsen argues interfaces should be refined through repeated testing because first designs almost always have usability problems. Four case studies show large gains, biggest early on.","i":[["Iteration as refinement","Each round fixes problems, then retests to confirm fixes work and don’t create new ones."],["Diminishing returns","Early versions remove severe problems; later rounds give smaller gains."],["Several dimensions","Learnability, efficiency, memorability, errors and satisfaction each need measures."],["Baseline scoring","Compare metrics against the first version."],["At least three versions","A change can hurt one metric while helping another, so test three or more."],["Targeted fixes, fresh testers","Fix what caused difficulty and use new participants each round."]],"a":["Retest each revision with new users.","Track several measures against the first version.","Plan at least three rounds."],"t":[]},"https://www.nngroup.com/articles/establishing-baselines/":{"o":"UX teams should measure a baseline before a project starts. Without a starting point, post-launch results can’t show whether a design change helped, so early measurement builds both proof and credibility.","i":[["Baseline purpose","A starting benchmark that gives later numbers meaning."],["Proof through comparison","Improvement shows only when before and after are compared, with a meaningful gap."],["Discovery bonus","Measuring the current experience often reveals struggles that shape the project."],["Relevance over convenience","Choose a metric tied to the behaviour you’re changing, not the easiest to pull."],["One metric, fixed early","Committing in advance avoids cherry-picking whichever number improved."],["Behaviour vs attitude","Behavioural data is harder to dispute than survey feelings."]],"a":["Pick one behaviour-linked metric before kickoff.","Record method, sample, date and result.","Share the baseline with stakeholders before design starts."],"t":[["Baseline","A measurement of current performance used as the comparison point."]]},"https://www.nngroup.com/articles/calculating-roi-design-projects/":{"o":"How UX designers can show the value of their work by estimating return on investment, linking a UX metric to a business measure leadership already tracks and reporting with clear assumptions.","i":[["Benchmark a UX metric","Measure something like task success or support tickets before and after."],["Choose a KPI","Pick the business measure your audience cares about, such as cost or revenue."],["Convert the metric","Translate the UX result into money, such as tickets avoided × cost per ticket."],["Report honestly","Present strategic estimates, not forecasts, with sources for each number."],["Recurring gains","Project returns over two to five years against the project’s cost."],["Build credibility","Quantified impact earns UX respect and resources."]],"a":["Record a baseline metric before changing the design.","Ask stakeholders which business measure matters most.","Share the estimate with stated assumptions."],"t":[["ROI","Return on investment: the value gained relative to the cost."]]},"https://www.nngroup.com/articles/ux-design-portfolios/":{"o":"How to build a UX design portfolio that shows your whole process, not just polished screens: curate a few strong case studies, tailor them to hiring audiences and choose a fitting format.","i":[["Audience and focus","Recruiters, hiring managers and peers skim, so make it scannable with three key takeaways about you."],["Project inventory","List past work, then pick projects that show your strengths."],["Case study structure","Problem, role, approach, results, rejected ideas, business impact and lessons."],["Show the process","Sketches, research, whiteboards and iterations show how you think."],["Format","Websites are findable; PDFs and decks can be tailored; physical artefacts help in interviews."],["Confidentiality","Under NDA, show process, redact details or recreate with generic branding."]],"a":["Choose three to five projects matching the roles you want.","Write each with problem, role, decisions, outcomes and lessons.","Get peer feedback and revise after interviews."],"t":[["Case study","A structured story of a project: problem, process, decisions and outcomes."]]},"https://www.nngroup.com/articles/maintain-ux-portfolio/":{"o":"Review your UX work once a year so your portfolio and CV don’t go stale, breaking a big clean-up into small tasks: gather materials, reflect, and save the best with context.","i":[["Yearly habit","Memory fades and projects go undocumented, so review annually."],["Broad deliverables","Save rough sketches, whiteboard photos and research notes, not just prototypes."],["Supporting documents","Job descriptions, certificates and mentoring evidence show growth."],["Outside feedback","Emails, reviews, awards and metrics show how work performed."],["Guided reflection","Ask about new skills, results, satisfaction and setbacks."],["Context over polish","Add a few sentences per item and keep it compact, around 30 slides."]],"a":["Block two hours each new year.","Gather deliverables and feedback into one file with context.","Redact confidential details and flag items for later."],"t":[]},"https://www.nngroup.com/articles/ux-hiring-insights/":{"o":"A former designer turned recruiter explains why UX applications get rejected, how hiring teams interpret ‘craft’, and how bargaining power has shifted toward employers.","i":[["Shifting leverage","In the 2021–22 boom companies dropped take-home tests; as hiring cooled, long processes returned."],["Craft is subjective","Veterans mean invisible detail; newer designers often mean polished visuals. Ask what the team means."],["Real audience","Reviewers are often recruiters, PMs or founders without design backgrounds."],["Strategic tailoring","Focus effort on your primary target audience."],["ATS myths","Tracking systems mostly store data; humans decide, and fast rejections come from knockout questions or closed posts."],["Plain-text CVs","CVs built in design tools can confuse parsers; simple text formats apply faster."]],"a":["Research each team’s idea of craft and who reviews applications.","Build your CV in a text-based editor.","Adapt your portfolio for non-designer reviewers."],"t":[]},"https://www.nngroup.com/articles/ux-researcher-portfolio/":{"o":"Ten guidelines for UX researcher portfolios: choosing projects and artefacts, telling project stories, highlighting impact and handling confidentiality.","i":[["Know your audience","Show what hiring managers need: research types, approach and results."],["Select a few projects","Three to five recent, high-impact studies with sound methods."],["Show real artefacts","Study plans, tasks, affinity diagrams and report excerpts."],["Context and role","Explain goals, users and findings as a story, and state exactly what you did."],["Show range","Qualitative and quantitative, large and small studies."],["Plain language","Assume readers lack your context and avoid jargon."],["Lead with impact","One or two key findings per project, backed by metrics."]],"a":["Rank three to five projects by impact, method and recency.","Draft each in plain language with role and key findings.","Get feedback and update regularly."],"t":[]},"https://www.nngroup.com/articles/stakeholders-study-guide/":{"o":"A reading path on working with UX stakeholders (anyone interested in a project or able to influence it), grouped into research involvement, workshops and communication.","i":[["Basics","Stakeholders can be inside or outside the organisation; find them by asking who cares and who has power."],["Involve them in research","Watching usability sessions builds empathy and a stake in decisions."],["Collaborative workshops","Group sketching yields more ideas; good facilitation keeps it productive."],["Speak business","Link findings to business outcomes and use stories and video to make users real."],["Share early","Low-fidelity prototypes invite feedback and secure buy-in."],["Push back with evidence","Risk statements and ROI framing help resist unreasonable requests."]],"a":["Map who is interested and who holds influence.","Invite key stakeholders to sessions or a sketching workshop.","Present findings as business outcomes with short clips."],"t":[]},"https://careerfoundry.com/en/blog/ux-design/whiteboard-challenge":{"o":"CareerFoundry’s guide to UX whiteboard challenges, timed design exercises done in front of interviewers: why employers use them, common obstacles and how to prepare.","i":[["What it is","A 30–60 minute live design task showing how you approach problems."],["Purpose","Interviewers watch reasoning, questions, assumptions, pacing and collaboration."],["Prompt variety","Hypothetical apps, real company problems or everyday objects; clarify and go step by step."],["Remote formats","A board on video, a take-home window or an online tool like Miro."],["Common mistake","Fixating on polished sketches when interviewers care about the process."],["Framework","A practised structure, such as early design-thinking stages, gives a starting point under pressure."],["Practice and reflection","Rehearse prompts, trade challenges with peers and review your mistakes."]],"a":["Build a repeatable framework and rehearse it.","Practise thinking aloud.","Get feedback from a peer or mentor and note improvements."],"t":[]},"https://uxdesign.cc/whiteboard-design-challenge-framework-cd7bdb589855":{"o":"A UX Collective article offering a step-by-step framework for whiteboard design challenges. (This page couldn’t be read automatically, so these notes summarise the common framework it belongs to rather than the article itself.)","i":[["Clarify","Ask about users, goals, constraints and what success looks like."],["Assume out loud","State assumptions so interviewers can correct them."],["Focus","Pick one user and one scenario."],["Flow, then screens","Map the journey before sketching key screens."],["Wrap up","Summarise trade-offs, risks and next steps."]],"a":["Practise the framework on timed prompts.","Think aloud throughout.","Leave time for a summary at the end."],"t":[]},"https://holloway.com/g/land-your-dream-design-job/sections/whiteboard-challenge":{"o":"A chapter from Holloway’s guide to design job interviews: how whiteboard challenges are judged, a structured approach and common mistakes.","i":[["Evaluation criteria","Problem framing, generating options, interaction thinking and teamwork."],["Time budgeting","Spend under half on context; most time on sketching and refining, with a buffer at the end."],["Double Diamond flow","Understand, define, explore and converge, compressing steps as time requires."],["Board planning","Match board space to time, leave room to draw and stay visible."],["Pitfalls","Too much context, jumping to solutions, copying one app, focusing on components, getting defensive."],["Collaboration","Think aloud, pause for input and confirm objectives at start and end."]],"a":["Record a timed practice session and review it.","Practise with a peer who probes your decisions.","Confirm expectations and scope up front."],"t":[]},"https://www.nngroup.com/articles/apply-secure-ux-job/":{"o":"Advice for landing a UX job: polished application materials, responsible use of AI, employer research, interview preparation and offer negotiation, favouring a selective search over mass applications.","i":[["Work chronicle","A private record of every job, skill and achievement; pair it with a posting in an AI tool to draft a tailored CV, then refine it yourself."],["Quality over quantity","A few well-matched roles keep motivation high."],["Judge requirements separately","Postings are wish lists; don’t rule yourself out on a general impression."],["Practise aloud","Rehearse with a mentor or record mock sessions and trim answers."],["Screen assessments","Do relevant, time-boxed ones; skip those demanding many unpaid hours."],["Negotiate","Take time, request reverse interviews and make precise, researched requests."]],"a":["Build a detailed work chronicle.","Track applications in one spreadsheet and send thank-you notes.","Rehearse three common questions aloud with a mentor."],"t":[]},"https://media.nngroup.com/media/reports/free/UserExperienceCareers_2nd_Edition.pdf":{"o":"NN/g’s 2019 report on UX careers, based on nearly 700 survey responses plus interviews and focus groups, covering backgrounds, roles, skills, mentorship, satisfaction and hiring.","i":[["Most are satisfied","People value meaningful, stimulating work; frustration comes from low support and little time for real UX."],["Many entry paths","Degrees vary widely and many arrived from unrelated jobs."],["Inconsistent titles","134 distinct job titles; designers in immature teams often do research too."],["Soft skills matter most","Communication, empathy, listening and collaboration rank above software skills."],["Mentorship helps","Most with mentors found them valuable, often via work or local groups."],["Past experience transfers","Customer service, writing and teaching build relevant skills."]],"a":["Map skills from previous work onto UX tasks.","Build a portfolio through projects or volunteering and find a mentor.","Practise communication and collaboration."],"t":[]},"https://media.nngroup.com/media/articles/attachments/User_Research_Methods_A4-compressed.pdf":{"o":"A printable guide that sorts UX research methods on three dimensions (attitudinal vs behavioural, qualitative vs quantitative, and context of use) to help you pick the right method for each stage.","i":[["Attitudinal vs behavioural","What people report versus what they actually do; the two often disagree."],["Qualitative vs quantitative","Direct observation explains why; indirect measurement shows how many."],["Context of use","From natural use to scripted lab sessions to no product at all."],["Middle ground","Usability and field studies mix reported and observed data."],["Examples","Interviews gather attitudes; analytics and A/B tests capture behaviour; surveys measure attitudes at scale."],["IA tools","Card sorting reveals mental models; tree testing checks findability."]],"a":["Define the research question, then match the method.","Use qualitative to diagnose and quantitative to size.","Combine attitudinal and behavioural data."],"t":[]},"https://www.coursera.org/professional-certificates/google-ux-design":{"o":"Google’s beginner UX Design certificate on Coursera: eight courses, about six months at ten hours a week, ending with three portfolio projects. (Notes based on the course page.)","i":[["Foundations","What UX is, the design process and core concepts like accessibility and equity."],["Research and empathy","Interviews, personas, user stories and journey maps."],["Ideation and wireframes","Competitive audits, sketching and paper and digital wireframes."],["Prototyping in Figma","Low- and high-fidelity prototypes with interactions."],["Usability studies","Planning, running and synthesising studies."],["Portfolio","Three projects (mobile app, responsive site, cross-platform) plus job-search support."]],"a":["Pair each course module with the matching lesson in this path.","Build the portfolio projects alongside your real work.","Use the course as structure and the readings here for depth."],"t":[]},"https://help.figma.com/hc/en-us/articles/30848209492887-Course-overview-Figma-Design-for-beginners-2025":{"o":"Figma’s free beginner course (2025): build a responsive, interactive portfolio website step by step. Works on the free Starter plan. (Notes based on the course overview.)","i":[["Project-based","You build a portfolio site from your first layer."],["Basics","Shapes, text, frames and layers."],["Layout","Auto layout and responsive resizing."],["Reusable elements","Components and variants."],["Prototyping","Linking frames with interactions."]],"a":["Follow the lessons in order with your own content.","Rebuild one screen from memory after each lesson.","Publish the finished site as a portfolio draft."],"t":[]},"https://www.w3.org/WAI/tutorials/":{"o":"W3C’s free accessibility tutorials for designers, developers, trainers and writers, covering images, tables, forms, menus, carousels and page structure, each mapped to WCAG criteria. (Notes based on the tutorials index.)","i":[["Images","How to write alt text for informative, decorative, functional and complex images."],["Tables","Headers, captions and structure for simple and complex data tables."],["Forms","Labels, grouping, instructions, validation and multi-page forms."],["Menus and carousels","Accessible fly-out menus and carousels with keyboard and screen-reader support."],["Page structure","Headings, landmarks and regions so people can navigate quickly."],["Linked to WCAG","Each tutorial lists the success criteria it helps meet."]],"a":["Start with the Images and Forms tutorials.","Apply one tutorial to a real component you’re designing.","Check the linked WCAG criteria afterwards."],"t":[]},"https://ixdf.org/literature/topics":{"o":"The Interaction Design Foundation’s free library of design articles and videos, organised by topic, from design thinking and UX research to UI design and accessibility. (Notes based on the library index.)","i":[["Topic index","Every major UX concept has its own page with articles and videos."],["Depth","Large sections on UX design, usability, design thinking and research."],["Encyclopedia","A free online encyclopedia of human–computer interaction."],["Paid extras","Courses, master classes and certificates are offered separately."]],"a":["Look up any unfamiliar term from a lesson here.","Read one topic page alongside each module.","Compare its explanations with NN/g’s to see different views."],"t":[]},"https://www.nngroup.com/articles/":{"o":"Nielsen Norman Group’s full library of free articles and videos on UX research and design, searchable by topic. Most study material in this path comes from here. (Reference site.)","i":[["Topics","Browse by research methods, interaction design, navigation, writing, accessibility and more."],["Study guides","Curated reading orders on major topics are a good next step after each module."],["Videos","Short explainer videos accompany many articles."]],"a":["Search a lesson topic to find more articles.","Follow a study guide after finishing each module."],"t":[]},"https://m3.material.io/":{"o":"Google’s Material Design 3 guidelines: foundations, styles (colour, typography, shape, motion, elevation) and component specs for Android and the web. (Reference site.)","i":[["Foundations","Accessibility, layout, interaction and content design principles."],["Styles","Colour system, type scale, shape, motion and elevation."],["Components","Specs and guidance for buttons, navigation, dialogs, lists and more."]],"a":["Check a component’s guidance before designing your own.","Use the colour and type pages when setting up a design system."],"t":[]},"https://developer.apple.com/design/human-interface-guidelines/":{"o":"Apple’s Human Interface Guidelines: design principles, patterns and component guidance for iOS, iPadOS, macOS, watchOS and visionOS. (Reference site.)","i":[["Foundations","Accessibility, colour, typography, layout, motion and writing."],["Patterns","Onboarding, navigation, searching, settings and more."],["Components","Guidance for buttons, menus, sheets, tab bars and other controls."],["Platforms","Differences in conventions across Apple devices."]],"a":["Read the platform page for the device you’re designing for.","Follow native patterns before inventing new ones."],"t":[]}};
const LIBRARY = [
 {h:"Courses", items:[
  ["Course","Google UX Design Professional Certificate (Coursera)","https://www.coursera.org/professional-certificates/google-ux-design"],
  ["Course","Figma Design for Beginners (official course)","https://help.figma.com/hc/en-us/articles/30848209492887-Course-overview-Figma-Design-for-beginners-2025"],
  ["Course","Figma: Introduction to Design Systems","https://help.figma.com/hc/en-us/articles/14552901442839-Overview-Introduction-to-design-systems"],
  ["Course","W3C WAI accessibility tutorials","https://www.w3.org/WAI/tutorials/"]]},
 {h:"Free books and reports", items:[
  ["Book","Atomic Design by Brad Frost","https://atomicdesign.bradfrost.com/"],
  ["PDF","NN/g: UX Research Methods guide","https://media.nngroup.com/media/articles/attachments/User_Research_Methods_A4-compressed.pdf"],
  ["PDF","NN/g: User Experience Careers, 2nd edition","https://media.nngroup.com/media/reports/free/UserExperienceCareers_2nd_Edition.pdf"],
  ["Book","Intercom on Jobs-to-be-Done","https://www.intercom.com/blog/jobs-to-be-done-book"]]},
 {h:"References to keep open", items:[
  ["Guide","NN/g articles library","https://www.nngroup.com/articles/"],
  ["Template","NN/g free UX templates and guides","https://www.nngroup.com/articles/free-ux-templates/"],
  ["Guide","IxDF design knowledge library","https://ixdf.org/literature/topics"],
  ["Guide","Laws of UX","https://lawsofux.com/"],
  ["Guide","Material Design 3","https://m3.material.io/"],
  ["Guide","Apple Human Interface Guidelines","https://developer.apple.com/design/human-interface-guidelines/"]]}
];
