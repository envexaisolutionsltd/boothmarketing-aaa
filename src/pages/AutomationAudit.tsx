import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { NumberedRows, PageHero } from '../components/sections/CommonSections'

const schema = z.object({
  name: z.string().min(2, 'Enter your name'),
  company: z.string().min(2, 'Enter your company name'),
  email: z.string().email('Enter a valid work email'),
  website: z.string().optional(),
  teamSize: z.string().min(1, 'Select a team size'),
  process: z.string().min(20, 'Give us a little more detail about the process'),
})
type FormData = z.infer<typeof schema>

export default function AutomationAudit() {
  const [sent, setSent] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) })

  return <>
    <PageHero
      eyebrow="Automation Audit"
      title="Start with the process your team should not still be doing this manually."
      copy="You do not need to know what technology you need. Tell us where work keeps getting copied, chased, delayed, repeated or held together by somebody remembering the next step."
    />

    <section className="page-section">
      <div className="site-container rule-grid">
        <div className="eyebrow">What the audit is for</div>
        <div>
          <h2 className="section-title">Turn a vague operational frustration into a clear next step.</h2>
          <p className="lead">The audit is designed for owners and operators who know a process is taking too much effort but do not yet know whether the answer is automation, a better system connection, a simpler workflow or leaving part of it human.</p>
          <NumberedRows items={[
            ['Bring one real workflow', 'Choose something your team repeatedly copies, chases, checks, updates or struggles to keep visible.'],
            ['We map what happens now', 'We look at the people, tools, inputs, decisions, handoffs and exceptions involved in the current process.'],
            ['We separate useful work from unnecessary handling', 'The aim is to identify where people add judgment and where they are simply moving information around.'],
            ['We identify what is worth changing', 'You get a clearer view of what could be simplified, connected, automated or deliberately kept manual.'],
            ['You decide what happens next', 'Requesting an audit does not commit you to a build. If there is a worthwhile project, it can be scoped afterwards.'],
          ]} />
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="site-container rule-grid">
        <div className="eyebrow">Good processes to bring</div>
        <div>
          <h2 className="section-title">If your team keeps saying one of these things, bring that process.</h2>
          <NumberedRows items={[
            ['We have to copy that into the CRM', 'Information is arriving in one place and then being manually entered somewhere else.'],
            ['Someone needs to chase that', 'The next step only happens when a person remembers to follow up.'],
            ['Ask the person who normally handles it', 'The process depends too heavily on individual knowledge or availability.'],
            ['I need to update the spreadsheet first', 'Visibility depends on somebody manually maintaining a second source of information.'],
            ['We do the same setup for every new client', 'Onboarding creates the same emails, folders, forms, documents and internal tasks every time.'],
          ]} />
        </div>
      </div>
    </section>

    <section id="request" className="page-section">
      <div className="site-container rule-grid">
        <div>
          <div className="eyebrow">Request your audit</div>
          <h2 className="section-title">Describe the friction, not the solution.</h2>
          <p className="body-copy">You do not need a technical brief. A clear description of what the team keeps doing manually, where work gets stuck and which systems are involved is enough to start.</p>
        </div>
        <div>
          {sent ? <div className="audit-success"><div className="eyebrow">Request captured</div><h3>That is enough to start the conversation.</h3><p>Your request has been captured in this frontend experience. The next production step is to connect this form to the agreed enquiry workflow.</p></div> :
          <form className="form-grid" onSubmit={handleSubmit(() => setSent(true))} noValidate>
            <div className="field"><label>Name</label><input {...register('name')} placeholder="Your name" />{errors.name && <span className="error">{errors.name.message}</span>}</div>
            <div className="field"><label>Company</label><input {...register('company')} placeholder="Company name" />{errors.company && <span className="error">{errors.company.message}</span>}</div>
            <div className="field"><label>Work email</label><input {...register('email')} type="email" placeholder="you@company.co.uk" />{errors.email && <span className="error">{errors.email.message}</span>}</div>
            <div className="field"><label>Website</label><input {...register('website')} placeholder="company.co.uk" /></div>
            <div className="field full"><label>Team size</label><select {...register('teamSize')} defaultValue=""><option value="" disabled>Select a range</option><option>1 to 10</option><option>11 to 25</option><option>26 to 50</option><option>51 to 100</option><option>100+</option></select>{errors.teamSize && <span className="error">{errors.teamSize.message}</span>}</div>
            <div className="field full"><label>What process is creating friction?</label><textarea {...register('process')} placeholder="For example: every new enquiry is copied into the CRM manually, assigned to somebody internally, followed up by email and then checked later in a spreadsheet..." />{errors.process && <span className="error">{errors.process.message}</span>}</div>
            <div className="field full"><button className="btn-primary" type="submit">Submit Audit Request</button></div>
          </form>}
        </div>
      </div>
    </section>
  </>
}
