
import Head from 'next/head'

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Head>
        <title>Another Test Clinic</title>
        <meta name="description" content="Professional dental services" />
      </Head>
      
      <header style={{ 
        backgroundColor: '#2E6BB0', 
        color: 'white', 
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Another Test Clinic</h1>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.2rem' }}>
          Professional dental care you can trust
        </p>
      </header>

      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2>About Our Practice</h2>
          <p>We provide comprehensive dental care with a focus on patient comfort and advanced treatment options.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2>Contact Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div>
              <h3>Address</h3>
              <p>Prins Mauritslaan 3<br />
              Bussum, NH 1405CS</p>
            </div>
            <div>
              <h3>Phone</h3>
              <p>0652569613</p>
            </div>
            <div>
              <h3>Email</h3>
              <p>floris.keyzer@gmail.com</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Schedule Your Appointment</h2>
          <p>Call us today at 0652569613 to schedule your next visit!</p>
        </section>
      </main>

      <footer style={{ 
        backgroundColor: '#f8f9fa', 
        textAlign: 'center', 
        padding: '2rem',
        marginTop: '3rem'
      }}>
        <p>&copy; 2024 Another Test Clinic. All rights reserved.</p>
      </footer>
    </div>
  )
}