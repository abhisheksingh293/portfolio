import React, { useState } from 'react';

// Example certificate data (replace with real data or dynamic import as needed)
const certificatesData = [
  {
    title: 'Wordpress full course',
    issuer: 'Udemy',
    date: '2023-01',
    domain: 'WordPress',
    image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-4e5465ee-8013-4167-9ffe-9112e59a0a64.jpg?v=1674842672000',
    link: 'https://www.udemy.com/certificate/UC-4e5465ee-8013-4167-9ffe-9112e59a0a64/',
    credentialId: 'UC-4e5465ee-8013-4167-9ffe-9112e59a0a64',
  },
  {
    title: 'Foundations of Digital Marketing and E-commerce',
    issuer: 'Coursera',
    date: '2024-02',
    domain: 'Digital Marketing', // Skills: Digital Marketing · Web Analytics and SEO · Email Marketing · Content Performance Analysis · Business Metrics · Branding · Data Storytelling · Customer Engagement · Data-driven Decision Making · Target Audience · Digital Advertising · Performance Measurement
    image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~HXTJGGHFJQ6M/CERTIFICATE_LANDING_PAGE~HXTJGGHFJQ6M.jpeg',
    link: 'https://www.coursera.org/account/accomplishments/certificate/HXTJGGHFJQ6M',
    credentialId: 'HXTJGGHFJQ6M',
  },
  {
    title: 'C Programming Basics',
    issuer: 'Simplilearn',
    date: '2024-02',
    domain: 'C (Programming Language)',
    image: 'https://certificates.simplicdn.net/share/thumb_4875172_1707931671.png',
    link: 'https://certificates.simplicdn.net/share/thumb_4875172_1707931671.png',
  },
  {
    title: 'SIH 2024',
    issuer: 'KCCITM',
    date: '2024-09-06',
    domain: 'Hackathon',
    image: 'https://internshipstudio-prod-data-bucket.s3.ap-south-1.amazonaws.com/certificates/certificate_67b77918dc3241.86113800.jpeg',
    link: 'https://internshipstudio-prod-data-bucket.s3.ap-south-1.amazonaws.com/certificates/certificate_67b77918dc3241.86113800.jpeg'
  },
  {
    title: 'Google Cloud Computing Foundations: Cloud Computing Fundamentals',
    issuer: 'Google Cloud Skills Boost',
    date: '2025-07',
    domain: 'Cloud',
    image: 'https://cdn.qwiklabs.com/q48Ha5zDHeG%2F5vYgH5OmkLgRYeLlHtbLgOawB7wJgo8%3D',
    link: 'https://www.cloudskillsboost.google/public_profiles/80c3837d-88b0-461b-a919-35c62c048b11/badges/15187929?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share'
  },
];

function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="w-full min-h-screen bg-gradient-to-br from-[#0a1026] via-[#1e2746] to-[#232946] py-16 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#7f5af0] via-[#2cb67d] to-[#00cfff] drop-shadow-lg text-center">
        Certificates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
        {certificatesData.map((cert, idx) => (
          <div
            key={idx}
            className="relative rounded-3xl bg-white/10 backdrop-blur-xl border-2 border-[#7f5af0]/40 shadow-2xl px-8 py-6 min-w-[350px] md:min-w-[480px] max-w-[650px] w-full cursor-pointer hover:scale-[1.03] hover:shadow-2xl hover:border-[#2cb67d] hover:bg-white/20 transition-all flex flex-col md:flex-row items-center md:items-stretch focus:outline-none focus:ring-2 focus:ring-[#7f5af0] group"
            onClick={() => setSelected(cert)}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') ? setSelected(cert) : null}
            tabIndex={0}
            aria-label={`View details for ${cert.title}`}
            role="button"
          >
            {/* Vertical Accent Bar */}
            <span className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-[#7f5af0] via-[#2cb67d] to-[#00cfff] opacity-80" aria-hidden="true"></span>
            {/* Certificate Image */}
            <div className="flex-shrink-0 flex items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow-lg border-4 border-[#2cb67d]/60 bg-white mb-4 md:mb-0 md:mr-7">
              <img src={cert.image} alt={cert.title} className="object-contain w-full h-full" />
            </div>
            {/* Info Section */}
            <div className="flex-1 flex flex-col justify-center items-center md:items-start">
              <h3 className="text-xl md:text-2xl font-extrabold text-center md:text-left mb-2 bg-gradient-to-r from-[#a084fa] via-[#2cb67d] to-[#00cfff] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(44,182,125,0.25)]">
                {cert.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-2">
                <span className="px-3 py-1 rounded-full bg-[#232946]/80 text-[#7f5af0] font-semibold text-xs border border-[#7f5af0]/30">
                  {cert.issuer}
                </span>
                {cert.date && (
                  <span className="px-3 py-1 rounded-full bg-[#232946]/80 text-[#2cb67d] font-semibold text-xs border border-[#2cb67d]/30">
                    {cert.date}
                  </span>
                )}
                {cert.domain && (
                  <span className="px-3 py-1 rounded-full bg-[#232946]/80 text-[#00cfff] font-semibold text-xs border border-[#00cfff]/30">
                    {cert.domain}
                  </span>
                )}
              </div>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2cb67d] to-[#7f5af0] text-white font-semibold text-xs shadow hover:from-[#7f5af0] hover:to-[#2cb67d] transition-colors"
                  onClick={e => e.stopPropagation()}
                  tabIndex={-1}
                  aria-label={`View certificate for ${cert.title}`}
                >
                  View
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Modal for certificate */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center" onClick={() => setSelected(null)}>
          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 max-w-xl w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-2xl" onClick={() => setSelected(null)}>&times;</button>
            <img src={selected.image} alt={selected.title} className="w-full h-80 object-contain rounded mb-4" />
            <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
            <p className="mb-2">Issued by: {selected.issuer}</p>
            <p className="mb-2">Date: {selected.date}</p>
            <span className="text-xs text-slate-500 dark:text-slate-300">Domain: {selected.domain}</span>
            {selected.link && (
              <div className="mt-4">
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[#2cb67d] text-white rounded-full font-semibold hover:bg-[#7f5af0] transition-colors"
                >
                  View Certificate
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
