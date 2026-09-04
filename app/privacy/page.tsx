import SiteFooter from '../../components/SiteFooter'
import SiteHeader from '../../components/SiteHeader'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#090a0b] text-[#f4f4f3]">
      <SiteHeader />
      <section className="py-12 sm:py-16">
        <div className="mx-auto w-[min(900px,calc(100%-28px))]">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d8cbb7]">Privacy</p>
          <h1 className="mt-4 text-[clamp(38px,8vw,58px)] font-semibold tracking-[-0.05em]">Privacy Policy</h1>
          <div className="mt-7 space-y-6 text-[14px] leading-7 text-[#929399]">
            <p>Booth Marketing only collects personal information when you choose to provide it, for example through a contact or audit form once those forms are connected to a live submission service.</p>
            <p>Information may include your name, business email address, company name, website URL and any details you choose to provide about your website or business.</p>
            <p>We use submitted information to respond to enquiries, assess your request, arrange relevant conversations and provide the service you have asked about. We do not sell personal data.</p>
            <p>Where third-party services are used to host, transmit or process enquiries, those providers may process data on our behalf under their own security and privacy terms.</p>
            <p>You may request access, correction or deletion of personal information we hold about you. Contact details for privacy requests will be added alongside the production enquiry system.</p>
            <p>This policy may be updated as Booth Marketing's systems and service providers change.</p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
