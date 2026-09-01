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
  issueType: z.string().min(1, 'Select the closest match'),
  process: z.string().min(20, 'Give us a little more detail about the process'),
})
type FormData = z.infer<typeof schema>

export default function AutomationAudit() {
  const [sent, setSent] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) })

  return <>
    <PageHero
      eyebrow="Automation Audit"
      title="You do not need an automation brief. You need one process that is taking too much human effort."
      copy="Tell us where work keeps getting copied, chased, delayed, repeated or held together by somebody remembering the next step. We will help determine whether it should be simplified, connected, automated or left human."
    />

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">A good process to bring</div>
        <h2 className="content-heading">Start with something your team already complains about.</h2>
        <NumberedRows items={[
          ['Leads need manually assigning or chasing', 'The next step depends on somebody noticing the enquiry and moving it forward.'],
          ['Client onboarding repeats the same tasks', 'Every new client triggers the same emails, documents, folders, reminders and internal setup.'],
          ['Information is copied between systems', 'The same details are re-entered because the workflow is disconnected.'],
          ['Reporting takes too much manual effort', 'Management visibility depends on somebody collecting and rebuilding information.'],
          ['The process depends on one person', 'Progress slows when the person who knows the workflow is busy or away.'],
        ]} />
      </div>
    </section>

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">What we look for</div>
        <h2 className="content-heading">The audit separates useful human work from unnecessary handling.</h2>
        <NumberedRows items={[
          ['Repeated steps', 'Work that happens in the same pattern every day, week or time a customer reaches a certain stage.'],
          ['Duplicated information', 'Details that are copied, reformatted or re-entered between tools.'],
          ['Weak handoffs', 'Work that waits because ownership or the next step is not clear enough.'],
          ['Predictable decisions', 'Rules-based choices that do not require commercial judgment every time.'],
          ['Exceptions that need people', 'Places where unusual cases should be surfaced clearly instead of forced through automation.'],
        ]} />
      </div>
    </section>

    <section id="request" className="content-section">
      <div className="site-container rule-grid">
        <div>
          <div className="eyebrow">Request your audit</div>
          <h2 className="section-title">Describe the friction, not the solution.</h2>
          <p className="body-copy">A clear description of what your team keeps doing manually, where work gets stuck and which systems are involved is enough to start.</p>
        </div>
        <div>
          {sent ? <div className="audit-success"><div className="eyebrow">Request captured</div><h3>That is enough to start the conversation.</h3><p>We have the operational context needed for the next step.</p></div> :
          <form className="form-grid" onSubmit={handleSubmit(() => setSent(true))} noValidate>
            <div className="field"><label>Name</label><input {...register('name')} placeholder="Your name" />{errors.name && <span className="error">{errors.name.message}</span>}</div>
            <div className="field"><label>Company</label><input {...register('company')} placeholder="Company name" />{errors.company && <span className="error">{errors.company.message}</span>}</div>
            <div className="field"><label>Work email</label><input {...register('email')} type="email" placeholder="you@company.co.uk" />{errors.email && <span className="error">{errors.email.message}</span>}</div>
            <div className="field"><label>Website</label><input {...register('website')} placeholder="company.co.uk" /></div>
            <div className="field"><label>Team size</label><select {...register('teamSize')} defaultValue=""><option value="" disabled>Select a range</option><option>1 to 10</option><option>11 to 25</option><option>26 to 50</option><option>51 to 100</option><option>100+</option></select>{errors.teamSize && <span className="error">{errors.teamSize.message}</span>}</div>
            <div className="field"><label>What best describes the issue?</label><select {...register('issueType')} defaultValue=""><option value="" disabled>Select the closest match</option><option>Too much repetitive admin</option><option>Leads or requests are being missed</option><option>Information is duplicated between systems</option><option>A process depends on one person</option><option>Reporting takes too much manual effort</option><option>Growth is creating more admin</option><option>Something else</option></select>{errors.issueType && <span className="error">{errors.issueType.message}</span>}</div>
            <div className="field full"><label>Which process is creating the most friction?</label><textarea {...register('process')} placeholder="For example: every new enquiry is copied into the CRM manually, assigned to somebody internally, followed up by email and then checked later in a spreadsheet..." />{errors.process && <span className="error">{errors.process.message}</span>}</div>
            <div className="field full"><button className="btn-primary" type="submit">Submit Audit Request</button></div>
          </form>}
        </div>
      </div>
    </section>
  </>
}
