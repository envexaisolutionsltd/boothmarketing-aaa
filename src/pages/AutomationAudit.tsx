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
    <PageHero eyebrow="Automation Audit" title="Start with the process that should not still take this much human effort." copy="You do not need to know what technology you need. Tell us where the business is repetitive, slow, difficult to track, or overly dependent on someone remembering the next step." />

    <section className="page-section">
      <div className="site-container rule-grid">
        <div className="eyebrow">What happens</div>
        <div>
          <h2 className="section-title">The audit is designed to create clarity before a project exists.</h2>
          <NumberedRows items={[
            ['Bring one real workflow', 'Choose something your team does repeatedly, chases manually, or struggles to keep visible.'],
            ['We understand the current process', 'The people, tools, inputs, decisions, and handoffs matter more than the buzzwords.'],
            ['We identify the opportunity', 'We separate what could be simplified, automated, connected, or deliberately left human.'],
            ['You decide what happens next', 'An audit is not a commitment to a build. If there is a worthwhile project, it can be scoped afterwards.'],
          ]} />
        </div>
      </div>
    </section>

    <section id="request" className="page-section">
      <div className="site-container rule-grid">
        <div>
          <div className="eyebrow">Request your audit</div>
          <h2 className="section-title">Describe the operational friction, not the solution.</h2>
          <p className="body-copy">You do not need a technical brief. A clear description of what your team keeps doing manually is enough to start.</p>
        </div>
        <div>
          {sent ? <div className="audit-success"><div className="eyebrow">Prototype request captured</div><h3>That is enough to start the conversation.</h3><p>This frontend prototype does not transmit form data yet.</p></div> :
          <form className="form-grid" onSubmit={handleSubmit(() => setSent(true))} noValidate>
            <div className="field"><label>Name</label><input {...register('name')} placeholder="Daniel Mercer" />{errors.name && <span className="error">{errors.name.message}</span>}</div>
            <div className="field"><label>Company</label><input {...register('company')} placeholder="Mercer Commercial Services" />{errors.company && <span className="error">{errors.company.message}</span>}</div>
            <div className="field"><label>Work email</label><input {...register('email')} type="email" placeholder="daniel@company.co.uk" />{errors.email && <span className="error">{errors.email.message}</span>}</div>
            <div className="field"><label>Website</label><input {...register('website')} placeholder="company.co.uk" /></div>
            <div className="field full"><label>Team size</label><select {...register('teamSize')} defaultValue=""><option value="" disabled>Select a range</option><option>1 to 10</option><option>11 to 25</option><option>26 to 50</option><option>51 to 100</option><option>100+</option></select>{errors.teamSize && <span className="error">{errors.teamSize.message}</span>}</div>
            <div className="field full"><label>What process is creating friction?</label><textarea {...register('process')} placeholder="For example: every new enquiry is copied into HubSpot manually, assigned in Teams, followed up by email, and then checked later in a spreadsheet..." />{errors.process && <span className="error">{errors.process.message}</span>}</div>
            <div className="field full"><button className="btn-primary" type="submit">Submit Audit Request</button></div>
          </form>}
        </div>
      </div>
    </section>
  </>
}
