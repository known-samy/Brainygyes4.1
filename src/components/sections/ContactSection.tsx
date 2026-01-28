
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm, ContactFormData } from '@/utils/supabaseClient';
import { Upload, X, MessageSquare, Briefcase } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isResumeForm, setIsResumeForm] = useState(false);

  useEffect(() => {
    // Check if this is a resume submission from URL params
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('type') === 'resume') {
      setIsResumeForm(true);
    }
  }, []);

  const toggleFormType = (isResume: boolean) => {
    setIsResumeForm(isResume);
    // Reset form when switching
    setContactForm({ name: '', email: '', message: '' });
    setResumeFile(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type and size
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document.",
          variant: "destructive"
        });
        return;
      }

      if (file.size > maxSize) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB.",
          variant: "destructive"
        });
        return;
      }

      setResumeFile(file);
    }
  };

  const removeFile = () => {
    setResumeFile(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({
        title: "Error",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (isResumeForm && !resumeFile) {
      toast({
        title: "Error",
        description: "Please upload your resume.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await submitContactForm(contactForm);
      toast({
        title: "Success!",
        description: isResumeForm ? "Your resume has been submitted. We'll review it and get back to you soon." : "Your message has been sent. We'll get back to you soon.",
      });
      
      // Reset form
      setContactForm({ name: '', email: '', message: '' });
      setResumeFile(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };




// const form = document.getElementById("form");
// const result = document.getElementById("result");

// form.addEventListener("submit", function (e) {
//   const formData = new FormData(form as HTMLFormElement);
//   e.preventDefault();
//   var object = {};
//   formData.forEach((value, key) => {
//     object[key] = value;
//   });
//   var json = JSON.stringify(object);
//   result.innerHTML = "Please wait...";

//   fetch("https://api.web3forms.com/submit", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: json
//   })
//     .then(async (response) => {
//       let json = await response.json();
//       if (response.status == 200) {
//         result.innerHTML = json.message;
//         result.classList.remove("text-gray-500");
//         result.classList.add("text-green-500");
//       } else {
//         console.log(response);
//         result.innerHTML = json.message;
//         result.classList.remove("text-gray-500");
//         result.classList.add("text-red-500");
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//       result.innerHTML = "Something went wrong!";
//     })
//     .then(function () {
//       (form as HTMLFormElement).reset();
//       setTimeout(() => {
//         result.style.display = "none";
//       }, 5000);
//     });
// });






  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/20" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Toggle Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="glass-card p-1.5 sm:p-2 rounded-xl flex gap-1 sm:gap-2">
            <button
              onClick={() => toggleFormType(false)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-xs sm:text-sm ${
                !isResumeForm
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-medium">Contact</span>
            </button>
            <button
              onClick={() => toggleFormType(true)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-xs sm:text-sm ${
                isResumeForm
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-medium">Apply</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-accent font-medium mb-2 block text-sm sm:text-base">
              {isResumeForm ? 'CAREERS' : 'CONTACT US'}
            </span>
            <h2 id="contact-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gradient">
              {isResumeForm ? 'Submit Your Resume' : 'Get In Touch'}
            </h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base  leading-relaxed">
              {isResumeForm 
                ? "Join our team! Upload your resume and tell us why you'd be a great fit for our company."
                : "Ready to start your project? Contact us today to discuss your requirements and how we can help bring your vision to life."
              }
            </p>
            
            <address className="space-y-4 sm:space-y-6 not-italic">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-full bg-accent/20 text-accent flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-sm sm:text-base">Phone</h3>
                  <a href="tel:+918581917757" className="text-muted-foreground text-xs sm:text-sm hover:text-accent transition-colors">
                    +91 8581917757
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-full bg-accent/20 text-accent flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-sm sm:text-base">Email</h3>
                  <a href="mailto:Contact@brainygyes.com" className="text-muted-foreground text-xs sm:text-sm hover:text-accent transition-colors">
                    Contact@brainygyes.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-full bg-accent/20 text-accent flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-sm sm:text-base">Location</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">Advant Business Park, Noida, India</p>
                </div>
              </div>
            </address>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* <form onSubmit={handleSubmit} className="glass-card p-6 rounded-xl"> */}
            <form action="https://api.web3forms.com/submit" method="POST" id="form" className="glass-card p-4 sm:p-6 rounded-xl">
              <input type="hidden" name="access_key" value="af00660e-ceeb-4fa2-b1dc-f8c229e07133" />
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1">
                    {isResumeForm ? 'Cover Letter / Message' : 'Message'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base resize-none"
                    placeholder={isResumeForm ? "Tell us about yourself and why you're interested in joining our team..." : "Tell us about your project..."}
                    required
                  ></textarea>
                </div>

                {isResumeForm && (
                  <div>
                    <label htmlFor="resume" className="block text-xs sm:text-sm font-medium mb-1">
                      Resume *
                    </label>
                    <div className="space-y-2">
                      <div className="relative">
                        <input
                          type="file"
                          id="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <label
                          htmlFor="resume"
                          className="flex items-center justify-center w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary/50 border border-border rounded-lg hover:bg-secondary/70 transition-colors cursor-pointer text-sm"
                        >
                          <Upload className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          <span className="text-xs sm:text-sm truncate">
                            {resumeFile ? resumeFile.name : 'Upload Resume (PDF, DOC, DOCX)'}
                          </span>
                        </label>
                      </div>
                      
                      {resumeFile && (
                        <div className="flex items-center justify-between bg-secondary/50 border border-border rounded-lg px-2 sm:px-3 py-2">
                          <div className="flex items-center min-w-0">
                            <Upload className="w-4 h-4 mr-2 text-accent flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-muted-foreground truncate">{resumeFile.name}</span>
                            <span className="text-xs text-muted-foreground ml-2 flex-shrink-0">
                              ({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="text-muted-foreground hover:text-destructive transition-colors ml-2 flex-shrink-0"
                            aria-label="Remove file"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                      
                      <p className="text-xs text-muted-foreground">
                        Maximum file size: 5MB. Supported formats: PDF, DOC, DOCX
                      </p>
                    </div>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm sm:text-base font-medium hover-lift hover:shadow-lg transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : (isResumeForm ? 'Submit Resume' : 'Send Message')}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
