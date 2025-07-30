import React, { useRef } from 'react';
import { SiLinkedin, SiGithub, SiMaildotru } from 'react-icons/si';
import { FaLocationDot } from 'react-icons/fa6';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

function Contact() {
  const form = useRef();
  const [submitting, setSubmitting] = React.useState(false);
  const [result, setResult] = React.useState("");
  const [resultColor, setResultColor] = React.useState("text-gray-400");
  const [captchaToken, setCaptchaToken] = React.useState("");

  React.useEffect(() => {
    window.hcaptchaCallback = function(token) {
      setCaptchaToken(token);
    };
    // Load hCaptcha script if not present
    if (!document.getElementById('hcaptcha-script')) {
      const script = document.createElement('script');
      script.id = 'hcaptcha-script';
      script.src = 'https://js.hcaptcha.com/1/api.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setResult("Please wait...");
    setResultColor("text-gray-400");
    const formData = new FormData(form.current);
    let object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    object["h-captcha-response"] = captchaToken;
    const json = JSON.stringify(object);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const data = await response.json();
      if (response.status === 200) {
        setResult(data.message);
        setResultColor("text-green-500");
        form.current.reset();
      } else {
        setResult(data.message);
        setResultColor("text-red-500");
      }
    } catch (error) {
      setResult("Something went wrong!");
      setResultColor("text-red-500");
    }
    setSubmitting(false);
    setTimeout(() => setResult(""), 5000);
  };

  return (
    <section id="contact" className="w-full min-h-screen bg-gradient-to-br from-[#0a1026] via-[#1e2746] to-[#232946] py-16 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#7f5af0] via-[#2cb67d] to-[#00cfff] drop-shadow-lg text-center">
        Contact
      </h2>
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 items-center justify-center">
        {/* Glassy Contact Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl border-2 border-[#7f5af0]/30 p-8 shadow-xl flex flex-col items-center w-full md:w-1/2 mb-8 md:mb-0">

          <div className="flex flex-col items-center mb-6">
            <span className="text-xl font-bold text-[#eaeaea] mb-1">Abhishek Kumar</span>
            <span className="text-md text-[#7f5af0] mb-1 flex items-center gap-2"><FaLocationDot /> Delhi, India</span>
            <span className="text-md text-[#2cb67d] mb-1 flex items-center gap-2"><FaPhone /> +91 9661762620</span>
            <span className="text-md text-[#2cb67d] mb-1 flex items-center gap-2"><SiMaildotru /> krabhisheke@gmail.com</span>
          </div>
          <div className="flex gap-6 text-3xl mb-4">
            <a href="https://linkedin.com/in/abhishek293" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 hover:bg-[#7f5af0] p-3 text-[#7f5af0] hover:text-white transition-all shadow-lg" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
            <a href="https://github.com/abhisheksingh293" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 hover:bg-[#232946] p-3 text-[#232946] hover:text-white transition-all shadow-lg" aria-label="GitHub"><FaGithub size={24} /></a>
            <a href="mailto:krabhisheke@gmail.com" className="rounded-full bg-white/10 hover:bg-[#2cb67d] p-3 text-[#2cb67d] hover:text-white transition-all shadow-lg" aria-label="Email"><FaEnvelope size={24} /></a>
            <a href="https://twitter.com/z_abhisheksingh" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 hover:bg-[#00cfff] p-3 text-[#00cfff] hover:text-white transition-all shadow-lg" aria-label="Twitter"><FaTwitter size={24} /></a>
            <a href="https://thekrabhishek.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 hover:bg-[#b8c1ec] p-3 text-[#b8c1ec] hover:text-white transition-all shadow-lg" aria-label="Website"><FaMapMarkerAlt size={24} /></a>
          </div>
        </div>
        {/* Glassy Contact Form */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-white/10 backdrop-blur-lg rounded-3xl border-2 border-[#2cb67d]/30 p-8 shadow-xl flex flex-col gap-6"
          aria-label="Contact form"
        >
          <input type="hidden" name="access_key" value="740db28e-29ae-4fda-a319-e7652bcf4233" />
          <input type="hidden" name="subject" value="New Submission from Portfolio Contact" />
          <input type="text" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />
          <div className="relative">
            <input
              name="name"
              type="text"
              required
              className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-transparent border-2 border-[#7f5af0]/30 text-[#eaeaea] focus:border-[#2cb67d] outline-none transition-all"
              placeholder=" "
            />
            <label className="absolute left-4 top-2 text-[#7f5af0] text-md pointer-events-none transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-[#b8c1ec] peer-focus:top-2 peer-focus:text-[#2cb67d]">Name</label>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative w-full md:w-1/2">
              <input
                name="phone"
                type="text"
                className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-transparent border-2 border-[#7f5af0]/30 text-[#eaeaea] focus:border-[#2cb67d] outline-none transition-all"
                placeholder=" "
              />
              <label className="absolute left-4 top-2 text-[#7f5af0] text-md pointer-events-none transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-[#b8c1ec] peer-focus:top-2 peer-focus:text-[#2cb67d]">Mobile No </label>
            </div>
            <div className="relative w-full md:w-1/2">
              <input
                name="email"
                type="email"
                required
                className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-transparent border-2 border-[#7f5af0]/30 text-[#eaeaea] focus:border-[#2cb67d] outline-none transition-all"
                placeholder=" "
              />
              <label className="absolute left-4 top-2 text-[#7f5af0] text-md pointer-events-none transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-[#b8c1ec] peer-focus:top-2 peer-focus:text-[#2cb67d]">Email</label>
            </div>
          </div>
          <div className="relative">
            <textarea
              name="message"
              required
              rows={4}
              className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-transparent border-2 border-[#7f5af0]/30 text-[#eaeaea] focus:border-[#2cb67d] outline-none transition-all resize-none"
              placeholder=" "
            />
            <label className="absolute left-4 top-2 text-[#7f5af0] text-md pointer-events-none transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-[#b8c1ec] peer-focus:top-2 peer-focus:text-[#2cb67d]">Message</label>
          </div>
          <div className="flex justify-center my-4">
            <div
              className="h-captcha"
              data-sitekey="63cc8d0a-1906-465e-bee4-8c04e32c61f8"
              data-theme="dark"
              data-callback="hcaptchaCallback"
            ></div>
          </div>
          <button
            type="submit"
            className={`bg-gradient-to-r from-[#2cb67d] to-[#7f5af0] text-white font-bold px-8 py-3 rounded-xl shadow-lg mt-2 transition-all hover:from-[#7f5af0] hover:to-[#2cb67d] focus:outline-none focus:ring-2 focus:ring-[#7f5af0] ${submitting ? 'opacity-60 cursor-not-allowed' : ''}`}
            aria-label="Send message"
            disabled={submitting || !captchaToken}
          >
            {submitting ? 'Sending...' : 'Send'}
          </button>
          <p className={`text-base text-center mt-4 ${resultColor}`} id="result">{result}</p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
