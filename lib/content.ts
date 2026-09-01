export const frictionSignals = [
  {
    number: "01",
    title: "Follow-up depends on someone noticing",
    copy: "Enquiries, client requests, or internal tasks wait until the right person sees them and moves them forward.",
  },
  {
    number: "02",
    title: "The same information gets entered twice",
    copy: "Details are copied between inboxes, spreadsheets, and systems because the process is not connected.",
  },
  {
    number: "03",
    title: "Work slows when one person is away",
    copy: "A key process relies on one person knowing what happens next, where information lives, or who needs an update.",
  },
  {
    number: "04",
    title: "Reporting is assembled by hand",
    copy: "Your team spends useful time collecting updates and rebuilding a picture the business should already have.",
  },
] as const;

export const processSteps = [
  { title: "Understand the current system", copy: "We map how the business actually operates today — what happens, who handles it, and where information moves." },
  { title: "Find the friction", copy: "We identify repeated work, delays, weak handoffs, duplicated effort, and single-person dependencies." },
  { title: "Design practical improvements", copy: "We outline specific, buildable changes based on the real process rather than forcing a generic solution onto it." },
  { title: "Decide what makes sense", copy: "You get a clear view of what is worth improving, what should stay manual, and what the next step could be." },
] as const;

export const capabilities = [
  { number: "01", title: "Built Around Your Workflow", copy: "We start with the way your business operates and identify where a practical change would genuinely improve it." },
  { number: "02", title: "Practical Over Flashy", copy: "The goal is not to add more technology. It is to reduce unnecessary work and make the process easier to run." },
  { number: "03", title: "Clear Before Complex", copy: "You should understand what is changing, why it matters, and how it fits the business before anything is built." },
] as const;

export const industries = [
  { name: "Professional Services", examples: "Enquiries, onboarding, document collection" },
  { name: "Gyms & Fitness", examples: "Lead follow-up, membership enquiries, scheduling" },
  { name: "Local Services", examples: "Quote requests, job handoffs, customer updates" },
  { name: "Agencies", examples: "Client intake, approvals, reporting" },
  { name: "Property", examples: "Enquiries, document handling, progress updates" },
  { name: "Hospitality", examples: "Requests, bookings, internal coordination" },
  { name: "Healthcare Admin", examples: "Intake, reminders, administrative workflows" },
  { name: "B2B Services", examples: "Lead routing, onboarding, internal operations" },
] as const;

export const nextSteps = [
  { title: "Submit your audit request", copy: "Tell us a little about the business, your team, and the operational challenge you want to improve." },
  { title: "Book a short intro call", copy: "Choose a suitable time for a brief conversation about the current workflow and whether an audit makes sense." },
  { title: "We understand the context", copy: "The intro call helps establish what is happening now, who is involved, and where the pressure is felt." },
  { title: "The audit session", copy: "A focused 45-minute review of the workflow, friction, and realistic improvement opportunities." },
  { title: "You receive recommendations", copy: "Clear recommendations around what could be improved, automated, simplified, or left alone." },
  { title: "You decide", copy: "No follow-up pressure. The next step is always yours." },
] as const;
