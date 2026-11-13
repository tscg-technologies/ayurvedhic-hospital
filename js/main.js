/**
 * AarogyaVeda Ayurveda Hospital & Holistic Wellness Centre
 * Core JavaScript Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Treatment Data for Modal Popups
  // --------------------------------------------------------------------------
  const treatmentsData = {
    panchakarma: {
      name: "Panchakarma Detoxification",
      sanskrit: "पञ्चकर्म चिकित्सा (Panchakarma Chikitsa)",
      dosha: "Tri-Dosha Balancing (Vata, Pitta, Kapha)",
      duration: "7 to 21 Days (Personalised Regimen)",
      image: "assets/images/panchakarma.jpg",
      description: "Panchakarma is Ayurveda's quintessential fivefold cellular purification science designed to eliminate deeply lodged metabolic waste (Ama) and restore inherent biological equilibrium. Administered strictly under Vaidya supervision following comprehensive preliminary oleation (Snehana) and fomentation (Swedana).",
      indications: "Chronic digestive imbalances, seasonal metabolic sluggishness, lifestyle rejuvenation, and sustained vital energy restoration.",
      herbalOils: "Classical medicated decoctions including Dashamoola Kashayam, Dhanwantharam Thailam, and Triphala Ghrita.",
      procedure: "Conducted through three synchronized phases: Purvakarma (preparatory oil therapies and herbal steam), Pradhanakarma (five targeted cleansing actions), and Paschatkarma (nourishing dietary rehabilitation)."
    },
    abhyanga: {
      name: "Abhyanga Full-Body Therapy",
      sanskrit: "अभ्यङ्ग स्निग्धता (Abhyanga Snigdhata)",
      dosha: "Pacifies Vata & Promotes Ojas",
      duration: "45 - 60 Minutes",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80",
      description: "A synchronized, rhythmic full-body massage performed by two experienced therapists using warm, herb-infused classical oils chosen specifically according to your unique constitutional Prakriti. Gentle yet firm friction stimulates arterial circulation and lymphatic drainage.",
      indications: "Muscular fatigue, joint stiffness, nervous exhaustion, dry skin tissues, and disrupted sleep rhythms.",
      herbalOils: "Ksheerabala Thailam, Mahanarayana Thailam, and warm cold-pressed organic black sesame oil.",
      procedure: "Continuous long flowing strokes following the directions of somatic energy meridians (Nadis) and energy junctions (Marmas), concluding with warm towel compresses."
    },
    shirodhara: {
      name: "Shirodhara Bliss Pouring",
      sanskrit: "शिरोधरा प्रशमन (Shirodhara Prashamana)",
      dosha: "Pacifies Prana Vata & Sadhaka Pitta",
      duration: "45 - 60 Minutes",
      image: "assets/images/panchakarma.jpg",
      description: "A deeply tranquil Ayurvedic therapy wherein a continuous, rhythmic stream of warm medicated herbal oil or medicated buttermilk is poured across the forehead (Ajna chakra) from a hanging traditional brass vessel (Kindi / Dhara Patra).",
      indications: "Mental tension, cognitive fatigue, chronic sleep disturbances, emotional agitation, and sensory overstimulation.",
      herbalOils: "Brahmi Thailam, Chandanadi Thailam, or medicated Takra (buttermilk) infused with Amalaki.",
      procedure: "Begins with light head and neck conditioning, followed by continuous warm oil flow across the forehead while relaxing in a silent, soothing therapeutic environment."
    },
    swedana: {
      name: "Swedana Herbal Steam",
      sanskrit: "स्वेदन वाष्प स्वेद (Swedana Vashpa Sveda)",
      dosha: "Pacifies Kapha & Relieves Vata Rigidity",
      duration: "30 - 45 Minutes",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
      description: "An ancient therapeutic sudation process where the body is gently warmed in an aromatic herbal steam cabin infused with medicinal leaves and roots. The head remains cool outside to safeguard delicate sensory faculties.",
      indications: "Joint tightness, sluggish lymphatic movement, general physical heaviness, and seasonal chill.",
      herbalOils: "Herbal vapors generated from Nirgundi, Rasna, Tulsi, and Eucalyptus leaves in copper decoction kettles.",
      procedure: "Typically preceded by light Abhyanga; the individual rests comfortably inside a traditional teakwood steam chamber with regulated warmth."
    },
    nasya: {
      name: "Nasya Nasal Administration",
      sanskrit: "नस्य कर्म शोधन (Nasya Karma Shodhana)",
      dosha: "Balances Urdhva Jatrugata (Upper Body) Doshas",
      duration: "30 - 40 Minutes",
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=900&q=80",
      description: "Ayurveda recognizes the nasal passages as the gateway to the sensory faculties and cranium. Nasya involves the gentle instillation of purified medicinal herbal oils, herbal ghee, or botanical extracts into each nostril after light facial fomentation.",
      indications: "Sinus congestion, cervical tension, recurrent headaches, sensory fatigue, and vocal clarity.",
      herbalOils: "Anu Thailam, Shadbindu Thailam, or medicated Ghritham (clarified herbal butter).",
      procedure: "Mild facial pressure-point stimulation and warm herbal fomentation precede the carefully measured droplet administration, concluded with medicated herbal gargling."
    },
    consultation: {
      name: "Ayurvedic Prakriti Consultation",
      sanskrit: "प्रकृति निदान परीक्षा (Prakriti Nidana Pariksha)",
      dosha: "Comprehensive Tri-Dosha & Dhatu Analysis",
      duration: "45 - 60 Minutes",
      image: "assets/images/about-consultation.jpg",
      description: "A holistic consultation with our experienced Ayurvedic physicians focusing on identifying your baseline natural constitution (Prakriti) and transient doshic imbalances (Vikriti) using classical eightfold diagnostic tools (Ashtavidha Pariksha).",
      indications: "Anyone seeking personalized nutrition, daily routine guidance (Dinacharya), preventative longevity, or therapeutic treatment design.",
      herbalOils: "Individualized recommendations of herbal formulations, teas, diet charts, and daily practices.",
      procedure: "Detailed pulse assessment (Nadi Pariksha), tongue inspection (Jihva), physical observation, and in-depth lifestyle and dietary history dialogue."
    }
  };

  // --------------------------------------------------------------------------
  // 2. Doctor Profile Data
  // --------------------------------------------------------------------------
  const doctorsData = {
    madhavan: {
      name: "Dr. K. M. Madhavan Warrier",
      qual: "BAMS, MD (Ayurveda) • Senior Chief Vaidya",
      spec: "Classical Panchakarma & Constitutional Rejuvenation",
      experience: "28+ Years of Classical Practice (Fictional Profile)",
      image: "assets/images/doctor-03.jpg",
      bio: "Dr. Madhavan Warrier represents a distinguished lineage of traditional Ayurvedic Vaidyas. He specializes in intricate pulse diagnosis (Nadi Pariksha) and guiding long-term restorative Panchakarma retreats for chronic stress, metabolic rehabilitation, and joint wellness.",
      philosophy: "Ayurveda does not merely treat illness; it awakens the body's innate wisdom to restore its harmonious rhythm with nature."
    },
    ananya: {
      name: "Dr. Ananya Nambiar",
      qual: "BAMS, MS (Ayurveda) • Senior Physician",
      spec: "Panchakarma Detoxification & Women's Holistic Health",
      experience: "16+ Years Clinical Experience (Fictional Profile)",
      image: "assets/images/doctor-01.jpg",
      bio: "Dr. Ananya combines classical textual scholarship from Charaka Samhita with compassionate, patient-centered care. She leads customized detoxification regimens and therapeutic postpartum and hormonal balance programs.",
      philosophy: "When nutrition, seasonal awareness, and therapeutic care align, true vitality flourishes effortlessly."
    },
    rajeshwari: {
      name: "Dr. Rajeshwari Sharma",
      qual: "BAMS, PGD (Ayur-Nutrition) • Consultant Vaidya",
      spec: "Kayachikitsa, Gut Health & Ahara (Dietary) Science",
      experience: "12+ Years Clinical Practice (Fictional Profile)",
      image: "assets/images/doctor-02.jpg",
      bio: "Dr. Rajeshwari specializes in gastrointestinal harmony, metabolic vitality, and therapeutic dietetics. She conducts one-on-one lifestyle planning, guiding patients through sustainable dietary adjustments based on their primary dosha.",
      philosophy: "Food is the first medicine; proper Agni (digestive fire) is the cornerstone of all health."
    },
    arvind: {
      name: "Dr. Arvind Poduval",
      qual: "BAMS, MD (Shalakya Tantra) • Specialist Vaidya",
      spec: "Stress Therapeutics, Shirodhara & Sensory Wellness",
      experience: "14+ Years Clinical Experience (Fictional Profile)",
      image: "assets/images/doctor-04.jpg",
      bio: "Dr. Arvind brings focused expertise in sensory care, chronic stress alleviation, and sleep architecture. He is particularly revered for designing deeply restorative Shirodhara and herbal rejuvenation protocols.",
      philosophy: "A calm mind is the sanctuary wherein the biological forces regain their natural equilibrium."
    }
  };

  // --------------------------------------------------------------------------
  // 3. Header & Sticky Navigation
  // --------------------------------------------------------------------------
  const header = document.querySelector('.header');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Reading Scroll Progress Bar
    const scrollProgressBar = document.getElementById('scrollProgressBar');
    if (scrollProgressBar) {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      scrollProgressBar.style.width = `${pct}%`;
    }

    // Scroll spy for active link
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });

    // Back to top button visibility
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // --------------------------------------------------------------------------
  // Live Animated Heritage Impact Counters
  // --------------------------------------------------------------------------
  const statCounters = document.querySelectorAll('.stat-counter-number');
  let countersAnimated = false;
  const triggerCounterAnimation = () => {
    if (countersAnimated) return;
    const statsBar = document.querySelector('.hero-stats-bar');
    if (!statsBar) return;
    const rect = statsBar.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      countersAnimated = true;
      statCounters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
        const hasPercent = counter.textContent.includes('%');
        const hasPlus = counter.textContent.includes('+');
        const suffix = hasPercent ? '%' : (hasPlus ? '+' : '');
        const duration = 1800;
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(easeOut * target);
          counter.textContent = `${current}${suffix}`;
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            counter.textContent = `${target}${suffix}`;
          }
        };
        requestAnimationFrame(step);
      });
    }
  };
  window.addEventListener('scroll', triggerCounterAnimation, { passive: true });
  triggerCounterAnimation();

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      } else {
        navMenu.classList.add('open');
        mobileToggle.classList.add('open');
        mobileToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    });

    // Close mobile nav on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // --------------------------------------------------------------------------
  // 4. Back to Top Button
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 5. Treatment Learn More Modal
  // --------------------------------------------------------------------------
  const treatmentModalOverlay = document.getElementById('treatmentModalOverlay');
  const treatmentModalClose = document.getElementById('treatmentModalClose');
  const treatmentButtons = document.querySelectorAll('.js-treatment-more');

  const openTreatmentModal = (treatmentKey) => {
    const data = treatmentsData[treatmentKey];
    if (!data || !treatmentModalOverlay) return;

    document.getElementById('modalTreatmentImg').src = data.image;
    document.getElementById('modalTreatmentImg').alt = data.name;
    document.getElementById('modalTreatmentTitle').textContent = data.name;
    document.getElementById('modalTreatmentSanskrit').textContent = data.sanskrit;
    document.getElementById('modalTreatmentDesc').textContent = data.description;
    document.getElementById('modalTreatmentDosha').textContent = data.dosha;
    document.getElementById('modalTreatmentDuration').textContent = data.duration;
    document.getElementById('modalTreatmentIndications').textContent = data.indications;
    document.getElementById('modalTreatmentHerbs').textContent = data.herbalOils;
    document.getElementById('modalTreatmentProcedure').textContent = data.procedure;

    // Direct booking button inside modal
    const bookThisBtn = document.getElementById('modalBookTreatmentBtn');
    if (bookThisBtn) {
      bookThisBtn.onclick = () => {
        closeTreatmentModal();
        const selectElem = document.getElementById('bookingTreatment');
        if (selectElem) {
          selectElem.value = treatmentKey;
        }
        const bookingSection = document.getElementById('appointment');
        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
    }

    treatmentModalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeTreatmentModal = () => {
    if (treatmentModalOverlay) {
      treatmentModalOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  treatmentButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-treatment');
      openTreatmentModal(key);
    });
  });

  if (treatmentModalClose) {
    treatmentModalClose.addEventListener('click', closeTreatmentModal);
  }

  if (treatmentModalOverlay) {
    treatmentModalOverlay.addEventListener('click', (e) => {
      if (e.target === treatmentModalOverlay) {
        closeTreatmentModal();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 6. Panchakarma Interactive Steps Accordion
  // --------------------------------------------------------------------------
  const karmaCards = document.querySelectorAll('.karma-card');
  karmaCards.forEach(card => {
    card.addEventListener('click', () => {
      karmaCards.forEach(c => {
        if (c !== card) c.classList.remove('active');
      });
      card.classList.toggle('active');
    });
  });

  // --------------------------------------------------------------------------
  // 7. Doctor Profile Modal
  // --------------------------------------------------------------------------
  const doctorModalOverlay = document.getElementById('doctorModalOverlay');
  const doctorModalClose = document.getElementById('doctorModalClose');
  const doctorButtons = document.querySelectorAll('.js-doctor-profile');

  const openDoctorModal = (doctorKey) => {
    const doc = doctorsData[doctorKey];
    if (!doc || !doctorModalOverlay) return;

    const docImg = document.getElementById('modalDocImg');
    if (docImg && doc.image) {
      docImg.src = doc.image;
      docImg.alt = doc.name;
      docImg.style.display = 'block';
    } else if (docImg) {
      docImg.style.display = 'none';
    }

    document.getElementById('modalDocName').textContent = doc.name;
    document.getElementById('modalDocQual').textContent = doc.qual;
    document.getElementById('modalDocSpec').textContent = doc.spec;
    document.getElementById('modalDocBio').textContent = doc.bio;
    document.getElementById('modalDocExp').textContent = doc.experience;
    document.getElementById('modalDocPhilosophy').textContent = `"${doc.philosophy}"`;

    const bookDoctorBtn = document.getElementById('modalBookDoctorBtn');
    if (bookDoctorBtn) {
      bookDoctorBtn.onclick = () => {
        closeDoctorModal();
        const docSelect = document.getElementById('bookingDoctor');
        if (docSelect) {
          docSelect.value = doctorKey;
        }
        const bookingSection = document.getElementById('appointment');
        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
    }

    doctorModalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDoctorModal = () => {
    if (doctorModalOverlay) {
      doctorModalOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  doctorButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-doctor');
      openDoctorModal(key);
    });
  });

  if (doctorModalClose) {
    doctorModalClose.addEventListener('click', closeDoctorModal);
  }

  if (doctorModalOverlay) {
    doctorModalOverlay.addEventListener('click', (e) => {
      if (e.target === doctorModalOverlay) {
        closeDoctorModal();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 8. Facilities Filter Tabs & Lightbox
  // --------------------------------------------------------------------------
  const facilityTabBtns = document.querySelectorAll('.facility-tab-btn');
  const facilityCards = document.querySelectorAll('.facility-card');

  facilityTabBtns.forEach(tab => {
    tab.addEventListener('click', () => {
      facilityTabBtns.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterCategory = tab.getAttribute('data-filter');

      facilityCards.forEach(card => {
        const itemCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || itemCategory === filterCategory) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Lightbox for facility images
  const lightboxOverlay = document.getElementById('lightboxOverlay');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  facilityCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.querySelector('h4')?.textContent || '';
      const desc = card.querySelector('p')?.textContent || '';

      if (img && lightboxOverlay) {
        lightboxImg.src = img.src;
        lightboxImg.alt = title;
        lightboxCaption.innerHTML = `<strong>${title}</strong><br><small>${desc}</small>`;
        lightboxOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightboxOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', (e) => {
      if (e.target === lightboxOverlay) {
        lightboxOverlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // --------------------------------------------------------------------------
  // 9. FAQ Accordion (Expand / Collapse)
  // --------------------------------------------------------------------------
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isExpanded = item.classList.contains('active');

      // Close all others
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherAns = otherItem.querySelector('.faq-answer');
          if (otherAns) otherAns.style.maxHeight = null;
        }
      });

      if (isExpanded) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
        question.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 11. Appointment Booking Form Validation & Demo Modal
  // --------------------------------------------------------------------------
  const appointmentForm = document.getElementById('appointmentForm');
  const successModalOverlay = document.getElementById('successModalOverlay');
  const successModalClose = document.getElementById('successModalClose');
  const successModalDismiss = document.getElementById('successModalDismiss');
  const bookingDateInput = document.getElementById('bookingDate');

  // Set minimum date to today
  if (bookingDateInput) {
    const today = new Date().toISOString().split('T')[0];
    bookingDateInput.setAttribute('min', today);
  }

  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Fields
      const fullName = document.getElementById('bookingName');
      const phone = document.getElementById('bookingPhone');
      const email = document.getElementById('bookingEmail');
      const date = document.getElementById('bookingDate');
      const treatment = document.getElementById('bookingTreatment');
      const doctor = document.getElementById('bookingDoctor');
      const timeSlot = document.getElementById('bookingTimeSlot');
      const message = document.getElementById('bookingMessage');

      const validateField = (input, condition) => {
        if (!condition) {
          input.classList.add('error');
          isValid = false;
        } else {
          input.classList.remove('error');
        }
      };

      // Name check
      validateField(fullName, fullName.value.trim().length >= 3);

      // Phone check (at least 8 digits)
      const phoneRegex = /^[0-9+\s\-()]{8,15}$/;
      validateField(phone, phoneRegex.test(phone.value.trim()));

      // Email check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      validateField(email, emailRegex.test(email.value.trim()));

      // Date check
      validateField(date, date.value !== '');

      // Treatment check
      validateField(treatment, treatment.value !== '');

      if (!isValid) {
        // Focus first invalid input
        const firstError = appointmentForm.querySelector('.form-control.error');
        if (firstError) firstError.focus();
        return;
      }

      // Display Demo Success Confirmation Modal
      const summaryElem = document.getElementById('bookingSummaryDetails');
      if (summaryElem) {
        const treatmentText = treatment.options[treatment.selectedIndex].text;
        const doctorText = doctor.value ? doctor.options[doctor.selectedIndex].text : 'First Available Ayurvedic Vaidya';
        const timeSlotText = timeSlot.value ? timeSlot.options[timeSlot.selectedIndex].text : 'Morning Slot';

        summaryElem.innerHTML = `
          <p><strong>Patient Name:</strong> ${escapeHtml(fullName.value)}</p>
          <p><strong>Contact:</strong> ${escapeHtml(phone.value)} | ${escapeHtml(email.value)}</p>
          <p><strong>Therapy / Care:</strong> ${escapeHtml(treatmentText)}</p>
          <p><strong>Consulting Vaidya:</strong> ${escapeHtml(doctorText)}</p>
          <p><strong>Preferred Schedule:</strong> ${escapeHtml(date.value)} (${escapeHtml(timeSlotText)})</p>
          ${message.value ? `<p><strong>Health Notes:</strong> <em>${escapeHtml(message.value)}</em></p>` : ''}
        `;
      }

      if (successModalOverlay) {
        successModalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      }

      appointmentForm.reset();
    });

    // Real-time error removal on input
    appointmentForm.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('error');
      });
    });
  }

  const closeSuccessModal = () => {
    if (successModalOverlay) {
      successModalOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  if (successModalClose) successModalClose.addEventListener('click', closeSuccessModal);
  if (successModalDismiss) successModalDismiss.addEventListener('click', closeSuccessModal);
  if (successModalOverlay) {
    successModalOverlay.addEventListener('click', (e) => {
      if (e.target === successModalOverlay) closeSuccessModal();
    });
  }

  // --------------------------------------------------------------------------
  // 12. WhatsApp Demo Enquiry Modal
  // --------------------------------------------------------------------------
  const whatsappTriggers = document.querySelectorAll('.js-whatsapp-enquiry');
  const whatsappModalOverlay = document.getElementById('whatsappModalOverlay');
  const whatsappModalClose = document.getElementById('whatsappModalClose');

  whatsappTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (whatsappModalOverlay) {
        whatsappModalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (whatsappModalClose) {
    whatsappModalClose.addEventListener('click', () => {
      whatsappModalOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  if (whatsappModalOverlay) {
    whatsappModalOverlay.addEventListener('click', (e) => {
      if (e.target === whatsappModalOverlay) {
        whatsappModalOverlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // --------------------------------------------------------------------------
  // 13. Keyboard Accessibility (Escape key closes any open modal)
  // --------------------------------------------------------------------------
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeTreatmentModal();
      closeDoctorModal();
      closeSuccessModal();
      if (lightboxOverlay) {
        lightboxOverlay.classList.remove('open');
        document.body.style.overflow = '';
      }
      if (whatsappModalOverlay) {
        whatsappModalOverlay.classList.remove('open');
        document.body.style.overflow = '';
      }
      if (navMenu && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('open');
        document.body.style.overflow = '';
      }
    }
  });

  // --------------------------------------------------------------------------
  // 14. Scroll Reading Progress Bar
  // --------------------------------------------------------------------------
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  if (scrollProgressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollProgressBar.style.width = `${scrollPercent}%`;
    });
  }

  // --------------------------------------------------------------------------
  // 16. Treatments Instant Search & Filter Chips
  // --------------------------------------------------------------------------
  const treatmentSearchInput = document.getElementById('treatmentSearchInput');
  const treatmentFilterChips = document.querySelectorAll('.treatment-filter-chip');
  const treatmentCards = document.querySelectorAll('#treatmentsGrid .treatment-card');
  const treatmentNoResults = document.getElementById('treatmentNoResults');

  let activeTreatmentCategory = 'all';
  let activeSearchTerm = '';

  const filterTreatmentsList = () => {
    let visibleCount = 0;
    treatmentCards.forEach(card => {
      const category = card.getAttribute('data-category') || '';
      const keywords = (card.getAttribute('data-keywords') || '').toLowerCase();
      const title = (card.querySelector('.treatment-title')?.textContent || '').toLowerCase();
      const desc = (card.querySelector('.treatment-desc')?.textContent || '').toLowerCase();
      const allText = `${keywords} ${title} ${desc}`;

      const matchesCategory = activeTreatmentCategory === 'all' || category.includes(activeTreatmentCategory);
      const matchesSearch = !activeSearchTerm || allText.includes(activeSearchTerm);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        card.style.animation = 'fadeIn 0.35s ease-out';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (treatmentNoResults) {
      treatmentNoResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  };

  if (treatmentSearchInput) {
    treatmentSearchInput.addEventListener('input', (e) => {
      activeSearchTerm = e.target.value.trim().toLowerCase();
      filterTreatmentsList();
    });
  }

  treatmentFilterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      treatmentFilterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeTreatmentCategory = chip.getAttribute('data-filter') || 'all';
      filterTreatmentsList();
    });
  });

  // --------------------------------------------------------------------------
  // 17. Circadian Healing Rhythm (Dinacharya) Interactive Tabs
  // --------------------------------------------------------------------------
  const journeyTimelineData = {
    "0600": {
      tag: "06:00 AM • Brahma Muhurta",
      title: "Awakening & Medicated Herbal Warmth",
      desc: "The morning begins peacefully as natural light filters through Kerala timber louvers. You are served warm copper-steeped water infused with organic Tulsi, fresh ginger, and crushed cumin to gently kindle the internal digestive fire (Agni) and awaken metabolic clearance without stimulating caffeine.",
      wisdom: "Drinking 2 glasses of lukewarm herb-steeped water upon waking stimulates peristalsis, clears nocturnal metabolic residue, and grounds morning Vata.",
      icon: "🫖",
      featureTitle: "Ushapan & Dincharya",
      featureText: "Gentle tongue scraping with copper jihva nirlekhana followed by warm herbal mouth swishing (Gandusha)."
    },
    "0700": {
      tag: "07:00 AM • Morning Prana",
      title: "Courtyard Yoga & Nadi Shodhana Pranayama",
      desc: "Gentle therapeutic joint loosens (Sukshma Vyayama) and rhythmic alternate nostril breathing conducted in the open-air fragrant herbal courtyard. Guided by traditional yoga Vaidyas to expand respiratory capacity and oxygenate cellular tissues.",
      wisdom: "Gentle early morning stretching aligned with conscious breath expands prana throughout the 72,000 somatic nadis and clears sluggish Kapha accumulation.",
      icon: "🧘",
      featureTitle: "Pranic Renewal",
      featureText: "Slow, rhythmic alternate nostril breathing (Nadi Shodhana) to balance solar (Pingala) and lunar (Ida) channels."
    },
    "0830": {
      tag: "08:30 AM • Satvik Ahara",
      title: "Warm Medicated Morning Nutrition",
      desc: "A nourishing breakfast customized strictly to your baseline constitution. Featuring warm spiced red rice kanji, freshly stewed cinnamon-infused seasonal apples, coconut cardamom water, and sprouted moong broth formulated to nurture Ojas.",
      wisdom: "Ayurveda teaches that morning sustenance should be light, warm, and easily assimilable so digestive Agni can kindle smoothly toward midday peak.",
      icon: "🥣",
      featureTitle: "Satvik Nourishment",
      featureText: "Easily digestible wholesome grains seasoned with digestive cumin, coriander, and golden ghee."
    },
    "1000": {
      tag: "10:00 AM • Classical Chikitsa",
      title: "Synchronized Abhyanga & Herbal Fomentation",
      desc: "Two therapists administer a synchronous, warm medicated oil massage on hand-carved teakwood Droni tables. Infused with roots like Bala and Ashwagandha, followed by aromatic Swedana herbal steam chamber to dislodge deep-tissue metabolic impurities.",
      wisdom: "Abhyanga pacifies excess somatic Vata, nourishes the seven bodily tissues (Dhatus), tones muscular ligaments, and imparts natural skin luster.",
      icon: "🌿",
      featureTitle: "Therapeutic Droni Suite",
      featureText: "Classical Kerala warm oil application with medicated Nirgundi herbal vapor fomentation."
    },
    "1300": {
      tag: "01:00 PM • Peak Agni Meal",
      title: "Principal Therapeutic Satvik Lunch",
      desc: "Consuming your main meal when the solar fire is at its zenith. A classical balanced Kerala Ayurvedic platter featuring steamed red rice, digestive ginger-spiced kadi, boiled drumstick sambar, bitter gourd stir-fry, and cooling buttermilk.",
      wisdom: "Midday corresponds with Pitta predominance when digestive digestive bile and hydrochloric secretion peak. This is when nutrient assimilation is highest.",
      icon: "🍲",
      featureTitle: "6-Taste (Shad-Rasa) Plate",
      featureText: "Sweet, sour, salty, pungent, bitter, and astringent tastes thoughtfully balanced in every meal."
    },
    "1630": {
      tag: "04:30 PM • Mental Tranquility",
      title: "Shirodhara Bliss Forehead Stream",
      desc: "Continuous, rhythmic pouring of warm herbal Brahmi and Chandanadi thailam across the brow center (Ajna chakra). Induces profound stillness, dissolves psychological tension, and rejuvenates the autonomic nervous system.",
      wisdom: "Shirodhara stabilizes Prana Vata and Sadhaka Pitta, naturally triggering alpha and theta brainwave rhythms for deep emotional equilibrium.",
      icon: "💧",
      featureTitle: "Ajna Flow Chamber",
      featureText: "Rhythmic 45-minute continuous flow from traditional hanging brass Dhara Patra."
    },
    "1830": {
      tag: "06:30 PM • Sandhya Twilight",
      title: "Aromatherapy Walk in Oushadha Vanam",
      desc: "An unhurried sunset walk through the medicinal plant sanctuary. Inhaling volatile terpenes from Holy Basil, Neem, and Vetiver roots while enjoying a warm cup of digestion-harmonizing Dashamoola infusion.",
      wisdom: "Twilight walk in clean greenery settles evening transition from Pitta to Kapha, inviting mental contentment before nightfall.",
      icon: "🍵",
      featureTitle: "Herbal Grove Immersion",
      featureText: "Over 80 indigenous botanical species releasing aromatic natural phytoncides."
    },
    "2130": {
      tag: "09:30 PM • Deep Nidra",
      title: "Padabhyanga (Foot Oil Rub) & Restful Sleep",
      desc: "Warm foot massage with Ksheerabala oil on key marma points, followed by a warm cup of nutmeg-cardamom spiced golden milk to facilitate effortless slumber before the 10:00 PM Pitta nocturnal cycle begins.",
      wisdom: "Early restorative sleep (Nidra) is revered in classical texts as one of the three great pillars of life (Trayopastambha), critical for cellular repair.",
      icon: "🌙",
      featureTitle: "Padabhyanga Care",
      featureText: "Warm Ksheerabala oil massaged over the soles to draw excess mental heat downward and invite deep sleep."
    }
  };

  const journeyTabBtns = document.querySelectorAll('.daily-journey-tab-btn');
  const journeyTimeTag = document.getElementById('journeyTimeTag');
  const journeyTitle = document.getElementById('journeyTitle');
  const journeyDesc = document.getElementById('journeyDesc');
  const journeyTakeawayBox = document.getElementById('journeyTakeawayBox');
  const journeyFeatureIcon = document.getElementById('journeyFeatureIcon');
  const journeyFeatureTitle = document.getElementById('journeyFeatureTitle');
  const journeyFeatureText = document.getElementById('journeyFeatureText');

  journeyTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      journeyTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const timeKey = btn.getAttribute('data-time');
      const data = journeyTimelineData[timeKey];
      if (!data) return;

      const displayCard = document.getElementById('dailyJourneyDisplayCard');
      if (displayCard) {
        displayCard.style.opacity = '0.5';
        displayCard.style.transform = 'translateY(6px)';
        displayCard.style.transition = 'all 0.25s ease';

        setTimeout(() => {
          if (journeyTimeTag) journeyTimeTag.textContent = data.tag;
          if (journeyTitle) journeyTitle.textContent = data.title;
          if (journeyDesc) journeyDesc.textContent = data.desc;
          if (journeyTakeawayBox) {
            journeyTakeawayBox.innerHTML = `<strong>🌿 Ayurvedic Wisdom for Daily Life:</strong> ${data.wisdom}`;
          }
          if (journeyFeatureIcon) journeyFeatureIcon.textContent = data.icon;
          if (journeyFeatureTitle) journeyFeatureTitle.textContent = data.featureTitle;
          if (journeyFeatureText) journeyFeatureText.textContent = data.featureText;

          displayCard.style.opacity = '1';
          displayCard.style.transform = 'translateY(0)';
        }, 150);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 18. Comprehensive 4-Step Interactive Dosha & Prakriti Assessment
  // --------------------------------------------------------------------------
  const doshaQuizQuestions = [
    {
      step: 1,
      category: "Physical Frame & Energy Stamina",
      heading: "How would you describe your natural physical frame and daily energy stamina?",
      sub: "Select the statement that reflects your long-standing baseline constitution.",
      choices: [
        {
          dosha: "vata",
          icon: "💨",
          title: "Slender, Swift & Agile",
          element: "Vata (Air & Space)",
          desc: "Naturally lean or slender frame, finds weight gain difficult. Energetic bursts followed by rapid fatigue; sensitive to cold breezes."
        },
        {
          dosha: "pitta",
          icon: "🔥",
          title: "Medium, Muscular & Warm",
          element: "Pitta (Fire & Water)",
          desc: "Moderate, well-proportioned frame with good muscle tone. Strong stamina, runs warm, perspires easily, dislikes intense heat."
        },
        {
          dosha: "kapha",
          icon: "🌱",
          title: "Sturdy, Broad & Grounded",
          element: "Kapha (Earth & Water)",
          desc: "Solid, well-built frame with broad shoulders. High endurance and physical strength; gains weight easily and moves in a calm, methodical rhythm."
        }
      ]
    },
    {
      step: 2,
      category: "Digestion, Appetite & Metabolic Fire (Agni)",
      heading: "How does your digestion and appetite typically behave on a day-to-day basis?",
      sub: "Consider how comfortably your body processes regular meals without special diets.",
      choices: [
        {
          dosha: "vata",
          icon: "🍃",
          title: "Variable & Easily Bloated",
          element: "Vata (Vishamagni)",
          desc: "Appetite fluctuates wildly—hungry at odd hours, easily forgets meals. Tendency toward dry constipation, gas, or post-meal bloating."
        },
        {
          dosha: "pitta",
          icon: "⚡",
          title: "Intense, Fast & Impatient",
          element: "Pitta (Tikshnagni)",
          desc: "Strong, ferocious appetite; becomes irritable (hangry) if meals are delayed. Rapid digestion, occasional heartburn, or loose bowel movements."
        },
        {
          dosha: "kapha",
          icon: "🍲",
          title: "Steady, Slow & Methodical",
          element: "Kapha (Mandagni)",
          desc: "Moderate, predictable appetite; can easily skip a meal without distress. Digestion is heavy and slow; feels drowsy or lethargic after eating."
        }
      ]
    },
    {
      step: 3,
      category: "Mind, Stress Response & Emotional Cadence",
      heading: "When facing heavy deadlines or emotional stress, what is your primary reaction?",
      sub: "Notice your involuntary cognitive and emotional default state under pressure.",
      choices: [
        {
          dosha: "vata",
          icon: "🌪️",
          title: "Anxiety, Overthinking & Restlessness",
          element: "Vata Response",
          desc: "Mind races quickly with endless creative ideas or worries. Tendency toward sudden nervousness, restless pacing, or scattered concentration."
        },
        {
          dosha: "pitta",
          icon: "🎯",
          title: "Frustration, Intensity & Precision",
          element: "Pitta Response",
          desc: "Sharp, critical focus; eager to take charge and resolve matters instantly. Prone to irritability, impatience, or demanding perfection."
        },
        {
          dosha: "kapha",
          icon: "🛡️",
          title: "Calm, Withdrawn & Resistant to Change",
          element: "Kapha Response",
          desc: "Emotionally steady, compassionate, and patient under chaos. However, may retreat inward, procrastinate, or stubbornly resist sudden changes."
        }
      ]
    },
    {
      step: 4,
      category: "Sleep Architecture & Dream Patterns",
      heading: "What are your usual sleep quality and nocturnal dreaming habits?",
      sub: "Reflect on how easily you fall asleep and how refreshed you feel upon waking.",
      choices: [
        {
          dosha: "vata",
          icon: "🌌",
          title: "Light, Interrupted & Vivid",
          element: "Vata Sleep",
          desc: "Takes time to switch off mind; awakens easily at slight sounds or between 2-4 AM. Dreams of flying, running, or erratic movement."
        },
        {
          dosha: "pitta",
          icon: "🌟",
          title: "Moderate, Efficient & Colorful",
          element: "Pitta Sleep",
          desc: "Falls asleep easily; sleeps 6-7 sound hours. Awakens feeling warm; dreams are vivid, goal-driven, colorful, or adventurous."
        },
        {
          dosha: "kapha",
          icon: "🌙",
          title: "Deep, Heavy & Prolonged",
          element: "Kapha Sleep",
          desc: "Effortless, profound, unbroken 8+ hour sleep. Finds it difficult to shake off morning drowsiness; dreams are gentle, water-filled, or romantic."
        }
      ]
    }
  ];

  let currentQuizStep = 0;
  const userQuizSelections = {}; // { 0: 'vata', 1: 'pitta', ... }

  const quizStepNumber = document.getElementById('quizStepNumber');
  const quizStepCategory = document.getElementById('quizStepCategory');
  const quizProgressBar = document.getElementById('quizProgressBar');
  const doshaQuestionHeading = document.getElementById('doshaQuestionHeading');
  const doshaQuestionSub = document.getElementById('doshaQuestionSub');
  const doshaChoicesGrid = document.getElementById('doshaChoicesGrid');
  const btnQuizPrev = document.getElementById('btnQuizPrev');
  const btnQuizNext = document.getElementById('btnQuizNext');
  const quizChoiceNotice = document.getElementById('quizChoiceNotice');

  const doshaQuestionsContainer = document.getElementById('doshaQuestionsContainer');
  const doshaProgressWrapper = document.getElementById('doshaProgressWrapper');
  const doshaComprehensiveResult = document.getElementById('doshaComprehensiveResult');

  const renderQuizStep = (stepIdx) => {
    const qData = doshaQuizQuestions[stepIdx];
    if (!qData) return;

    if (quizStepNumber) quizStepNumber.textContent = qData.step;
    if (quizStepCategory) quizStepCategory.textContent = qData.category;
    if (quizProgressBar) quizProgressBar.style.width = `${(qData.step / doshaQuizQuestions.length) * 100}%`;
    if (doshaQuestionHeading) doshaQuestionHeading.textContent = qData.heading;
    if (doshaQuestionSub) doshaQuestionSub.textContent = qData.sub;

    if (btnQuizPrev) {
      btnQuizPrev.style.visibility = stepIdx === 0 ? 'hidden' : 'visible';
    }

    if (btnQuizNext) {
      btnQuizNext.textContent = stepIdx === doshaQuizQuestions.length - 1 ? 'Reveal My Prakriti Blueprint →' : 'Next Question →';
      btnQuizNext.disabled = !userQuizSelections[stepIdx];
    }

    if (quizChoiceNotice) {
      quizChoiceNotice.textContent = userQuizSelections[stepIdx] ? '✓ Selection recorded. Click next to proceed.' : 'Select an option to proceed';
    }

    if (doshaChoicesGrid) {
      doshaChoicesGrid.innerHTML = '';
      qData.choices.forEach(ch => {
        const isSelected = userQuizSelections[stepIdx] === ch.dosha;
        const card = document.createElement('div');
        card.className = `dosha-quiz-choice-card ${isSelected ? 'selected' : ''}`;
        card.setAttribute('tabindex', '0');
        card.setAttribute('data-dosha', ch.dosha);

        card.innerHTML = `
          <div class="choice-icon-wrap">${ch.icon}</div>
          <h5 class="choice-title">${ch.title}</h5>
          <span class="choice-dosha-indicator">${ch.element}</span>
          <p class="choice-desc">${ch.desc}</p>
        `;

        card.addEventListener('click', () => {
          userQuizSelections[stepIdx] = ch.dosha;
          doshaChoicesGrid.querySelectorAll('.dosha-quiz-choice-card').forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
          if (btnQuizNext) btnQuizNext.disabled = false;
          if (quizChoiceNotice) quizChoiceNotice.textContent = '✓ Selection recorded. Click next to proceed.';
        });

        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
          }
        });

        doshaChoicesGrid.appendChild(card);
      });
    }
  };

  const calculateDoshaResults = () => {
    let vataScore = 0;
    let pittaScore = 0;
    let kaphaScore = 0;

    Object.values(userQuizSelections).forEach(dosha => {
      if (dosha === 'vata') vataScore++;
      else if (dosha === 'pitta') pittaScore++;
      else if (dosha === 'kapha') kaphaScore++;
    });

    const total = vataScore + pittaScore + kaphaScore || 4;
    const vataPct = Math.round((vataScore / total) * 100);
    const pittaPct = Math.round((pittaScore / total) * 100);
    const kaphaPct = 100 - (vataPct + pittaPct);

    let primaryDosha = 'vata';
    if (pittaScore > vataScore && pittaScore >= kaphaScore) primaryDosha = 'pitta';
    else if (kaphaScore > vataScore && kaphaScore > pittaScore) primaryDosha = 'kapha';

    return {
      primary: primaryDosha,
      vataPct: Math.max(vataPct, 15),
      pittaPct: Math.max(pittaPct, 15),
      kaphaPct: Math.max(kaphaPct, 15)
    };
  };

  const displayQuizResults = () => {
    const results = calculateDoshaResults();

    if (doshaQuestionsContainer) doshaQuestionsContainer.style.display = 'none';
    if (doshaProgressWrapper) doshaProgressWrapper.style.display = 'none';
    if (doshaComprehensiveResult) doshaComprehensiveResult.classList.add('show');

    // Update Percentage Bars
    const barVata = document.getElementById('barVata');
    const barPitta = document.getElementById('barPitta');
    const barKapha = document.getElementById('barKapha');
    const pctVata = document.getElementById('pctVata');
    const pctPitta = document.getElementById('pctPitta');
    const pctKapha = document.getElementById('pctKapha');

    setTimeout(() => {
      if (barVata) barVata.style.width = `${results.vataPct}%`;
      if (barPitta) barPitta.style.width = `${results.pittaPct}%`;
      if (barKapha) barKapha.style.width = `${results.kaphaPct}%`;
    }, 100);

    if (pctVata) pctVata.textContent = `${results.vataPct}%`;
    if (pctPitta) pctPitta.textContent = `${results.pittaPct}%`;
    if (pctKapha) pctKapha.textContent = `${results.kaphaPct}%`;

    // Dynamic Texts Based on Primary Dosha
    const heading = document.getElementById('resultPrimaryHeading');
    const summary = document.getElementById('resultHeroSummary');
    const dietList = document.getElementById('resultDietList');
    const routineList = document.getElementById('resultRoutineList');
    const therapiesList = document.getElementById('resultTherapiesList');

    if (results.primary === 'vata') {
      if (heading) heading.textContent = 'Predominant Vata Constitution (Air & Space)';
      if (summary) {
        summary.textContent = 'Your constitutional responses display a predominance of Vata dosha. Governed by wind and space, you possess natural creative brilliance, agility, and enthusiasm. When unsettled, Vata leads to dry skin, anxiety, cold extremities, and restless sleep. Your healing journey requires warmth, grounding routines, and rich herbal oils.';
      }
      if (dietList) {
        dietList.innerHTML = `
          <li>Prioritize warm, moist, unctuous foods: red rice kanji, stewed fruit, and golden sesame ghee.</li>
          <li>Emphasize sweet, sour, and salty tastes to calm wind restlessness.</li>
          <li>Avoid iced beverages, dry crackers, raw leafy salads, and caffeinated stimulants.</li>
        `;
      }
      if (routineList) {
        routineList.innerHTML = `
          <li>Maintain disciplined waking, eating, and sleeping hours to stabilize erratic biological clock.</li>
          <li>Daily self-Abhyanga with warm organic black sesame oil before a warm morning bath.</li>
          <li>Practice slow, grounded diaphragmatic breathing (Nadi Shodhana Pranayama) at twilight.</li>
        `;
      }
      if (therapiesList) {
        therapiesList.innerHTML = `
          <li><strong>Synchronized Abhyanga:</strong> Deep neuromuscular grounding with warm Dhanwantharam oil.</li>
          <li><strong>Shirodhara:</strong> Continuous warm Brahmi oil forehead flow to silence racing thoughts.</li>
          <li><strong>Snigdha Swedana:</strong> Medicated Nirgundi steam to soften joint stiffness.</li>
        `;
      }
    } else if (results.primary === 'pitta') {
      if (heading) heading.textContent = 'Predominant Pitta Constitution (Fire & Water)';
      if (summary) {
        summary.textContent = 'Your constitution reflects the luminous, transformative fire of Pitta. You exhibit sharp intellect, radiant digestion, articulate leadership, and goal-directed endurance. When aggravated, Pitta manifests as internal inflammation, irritability, acidity, or skin flare-ups. Your path to balance centers on cooling botanicals and relaxed pacing.';
      }
      if (dietList) {
        dietList.innerHTML = `
          <li>Emphasize sweet, bitter, and astringent foods: cooling coconut water, fresh cucumbers, and basmati rice.</li>
          <li>Cook with cooling fats: organic cow ghee, extra virgin coconut oil, and cilantro garnishes.</li>
          <li>Minimize sour fermented foods, pungent hot chili peppers, raw garlic, and salty snacks.</li>
        `;
      }
      if (routineList) {
        routineList.innerHTML = `
          <li>Take evening walks under moonlight or through lush herbal gardens to dissipate solar heat.</li>
          <li>Apply cooling Chandanadi or coconut-infused Brahmi oil to the scalp and temples.</li>
          <li>Cultivate gentle non-competitive recreation; avoid exercising in direct midday sun.</li>
        `;
      }
      if (therapiesList) {
        therapiesList.innerHTML = `
          <li><strong>Takradhara:</strong> Cool, medicated buttermilk forehead stream to dissipate cerebral heat.</li>
          <li><strong>Abhyanga with Chandanadi Thailam:</strong> Soothes sensitive skin and relaxes arterial tension.</li>
          <li><strong>Virechana Karma:</strong> Classical supervised hepatic and small intestine purification.</li>
        `;
      }
    } else {
      if (heading) heading.textContent = 'Predominant Kapha Constitution (Earth & Water)';
      if (summary) {
        summary.textContent = 'Your constitution embodies the steady, lubricating resilience of Earth and Water. You possess admirable stamina, emotional generosity, deep restorative sleep, and natural immunity. When sluggish, Kapha manifests as fluid stagnation, sinus heaviness, weight gain, and lethargy. Your regimen emphasizes warming spices, invigorating massage, and lightness.';
      }
      if (dietList) {
        dietList.innerHTML = `
          <li>Enjoy warm, dry, and stimulating meals: roasted barley, mung dhal soup, and steamed greens.</li>
          <li>Accentuate pungent, bitter, and astringent spices: fresh ginger, black pepper, and turmeric.</li>
          <li>Reduce heavy dairy, unctuous fried foods, cold sweet desserts, and excess wheat products.</li>
        `;
      }
      if (routineList) {
        routineList.innerHTML = `
          <li>Rise early before sunrise (Brahma Muhurta, before 6:00 AM) to prevent morning grogginess.</li>
          <li>Engage in vigorous daily aerobic movement and active Surya Namaskars.</li>
          <li>Avoid daytime naps; swish warm ginger water to keep metabolic Agni bright.</li>
        `;
      }
      if (therapiesList) {
        therapiesList.innerHTML = `
          <li><strong>Udwarthanam:</strong> Deep dry herbal powder lymphatic exfoliation to kindle metabolism.</li>
          <li><strong>Swedana Herbal Steam:</strong> Aromatic eucalyptus & tulsi sudation to release fluid retention.</li>
          <li><strong>Nasya Karma:</strong> Purifying supraclavicular cleansing with warming Anu Thailam.</li>
        `;
      }
    }
  };

  if (btnQuizNext) {
    btnQuizNext.addEventListener('click', () => {
      if (currentQuizStep < doshaQuizQuestions.length - 1) {
        currentQuizStep++;
        renderQuizStep(currentQuizStep);
      } else {
        displayQuizResults();
      }
    });
  }

  if (btnQuizPrev) {
    btnQuizPrev.addEventListener('click', () => {
      if (currentQuizStep > 0) {
        currentQuizStep--;
        renderQuizStep(currentQuizStep);
      }
    });
  }

  // Pre-fill booking button from quiz
  const btnApplyDoshaToBooking = document.getElementById('btnApplyDoshaToBooking');
  if (btnApplyDoshaToBooking) {
    btnApplyDoshaToBooking.addEventListener('click', () => {
      const results = calculateDoshaResults();
      const bookingTreatment = document.getElementById('bookingTreatment');
      const bookingMessage = document.getElementById('bookingMessage');

      if (bookingTreatment) {
        if (results.primary === 'vata') bookingTreatment.value = 'shirodhara';
        else if (results.primary === 'pitta') bookingTreatment.value = 'abhyanga';
        else bookingTreatment.value = 'panchakarma';
      }

      if (bookingMessage) {
        const text = `Primary Dosha Assessment: ${results.primary.toUpperCase()} predominance (Vata: ${results.vataPct}%, Pitta: ${results.pittaPct}%, Kapha: ${results.kaphaPct}%). Interested in customized therapeutic plan.`;
        bookingMessage.value = text;
        const charCounterText = document.getElementById('charCounterText');
        if (charCounterText) charCounterText.textContent = `${text.length} / 400 characters`;
      }

      const bookingSec = document.getElementById('appointment');
      if (bookingSec) bookingSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const btnRetakeDoshaQuiz = document.getElementById('btnRetakeDoshaQuiz');
  if (btnRetakeDoshaQuiz) {
    btnRetakeDoshaQuiz.addEventListener('click', () => {
      currentQuizStep = 0;
      for (const k in userQuizSelections) delete userQuizSelections[k];
      if (doshaComprehensiveResult) doshaComprehensiveResult.classList.remove('show');
      if (doshaQuestionsContainer) doshaQuestionsContainer.style.display = 'block';
      if (doshaProgressWrapper) doshaProgressWrapper.style.display = 'block';
      renderQuizStep(0);
    });
  }

  // Initialize Quiz Step 1
  if (doshaChoicesGrid) {
    renderQuizStep(0);
  }

  // --------------------------------------------------------------------------
  // 19. Interactive Package & Retreat Stay Estimator
  // --------------------------------------------------------------------------
  const packageEstimatorData = {
    detox: {
      title: "Classical Panchakarma Detox & Bio-Purification",
      inclusions: [
        "Daily Physician (Vaidya) Pulse & Metabolic Monitoring",
        "Synchronized 4-Hand Abhyanga & Nirgundi Herbal Steam",
        "Classical 5-Action Purification (Virechana / Basti / Nasya)",
        "Organic Satvik Ahara & Dosha-Balancing Herbal Decoctions",
        "Private Teakwood Therapy Suite & Restorative Linen Suite"
      ],
      days: {
        "7": { label: "7 Days", desc: "Introductory Cellular Reset • Ideal for seasonal fatigue & digestive rebalancing." },
        "14": { label: "14 Days", desc: "Comprehensive Classical Regimen • Deep tissue Ama elimination & vitality reset." },
        "21": { label: "21 Days", desc: "Full Classical Rasayana Cycle • Complete cellular renewal, tissue rebuilding & chronic relief." }
      }
    },
    stress: {
      title: "Mental Serenity, Insomnia & Nervous System Renewal",
      inclusions: [
        "Daily Shirodhara with Warm Medicated Brahmi & Chandanadi Oils",
        "Synchronized Full-Body Abhyanga with Ksheerabala Thailam",
        "Evening Padabhyanga (Foot Marma Oil Therapy) for Deep Sleep",
        "Twice-Daily Guided Breathwork (Nadi Shodhana Pranayama)",
        "Organic Herbal Infusions (Ashwagandha, Shankhpushpi, Tulsi)"
      ],
      days: {
        "7": { label: "7 Days", desc: "Intensive Calm Retreat • Dissolves acute burnout & restores circadian sleep depth." },
        "14": { label: "14 Days", desc: "Profound Autonomic Reset • Restores nervous equilibrium & emotional stability." },
        "21": { label: "21 Days", desc: "Deep Neurological Rejuvenation • Sustained mental clarity, cognitive endurance & calm." }
      }
    },
    joints: {
      title: "Spine, Joint & Musculoskeletal Mobility Care",
      inclusions: [
        "Targeted Elakizhi (Warm Medicated Herbal Leaf Bolus Therapy)",
        "Kati Basti / Janu Basti (Warm Medicated Oil Well on Spine/Joints)",
        "Snigdha Swedana Steam with Dashamoola Decoctions",
        "Gentle Joint Mobility Protocols Guided by Yoga Therapists",
        "In-House Classical Oils: Mahanarayana, Kottamchukkadi & Sahacharadi"
      ],
      days: {
        "7": { label: "7 Days", desc: "Targeted Acute Joint Relief • Softens localized stiffness & eases spine compression." },
        "14": { label: "14 Days", desc: "Deep Tissue Rebuilding • Improves synovial lubrication & restores comfortable range." },
        "21": { label: "21 Days", desc: "Complete Structural Rasayana • Long-term cartilage nourishment & neuromuscular stamina." }
      }
    },
    immunity: {
      title: "Longevity, Ojas Rebuilding & Rasayana Rejuvenation",
      inclusions: [
        "In-Depth Ashtavidha Pariksha & Constitutional Blueprint Assessment",
        "Synchronized Abhyanga with Royal Ksheerabala 101 Thailam",
        "Nutritious Navarakizhi (Warm Medicated Rice & Cow Milk Poultice)",
        "Tailored Dinacharya & Ritucharya Longevity Consultation",
        "In-House Chyavanaprash & Herbal Rasayana Formulations"
      ],
      days: {
        "7": { label: "7 Days", desc: "Vitality Boost • Enhances natural cellular defense & relieves chronic dullness." },
        "14": { label: "14 Days", desc: "Substantial Ojas Fortification • Deep tissue nourishment and radiant vitality." },
        "21": { label: "21 Days", desc: "Quintessential Classical Rasayana • Comprehensive longevity and preventative wellness." }
      }
    }
  };

  let activeEstimatorFocus = 'detox';
  let activeEstimatorDays = '7';

  const estimatorFocusOptions = document.querySelectorAll('#estimatorFocusOptions .estimator-choice-pill');
  const estimatorDurationButtons = document.querySelectorAll('#estimatorDurationSelector .duration-chip');

  const updateEstimatorSummary = () => {
    const data = packageEstimatorData[activeEstimatorFocus];
    if (!data) return;

    const heading = document.getElementById('estPackageTitle');
    const desc = document.getElementById('estPackageDesc');
    const inclusionsList = document.getElementById('estInclusionsList');

    const dayData = data.days[activeEstimatorDays] || data.days["7"] || data.days["14"];
    if (heading) heading.textContent = `${activeEstimatorDays}-Day ${data.title}`;
    if (desc) desc.textContent = dayData ? dayData.desc : 'Personalized Ayurvedic wellness regimen.';

    if (inclusionsList) {
      inclusionsList.innerHTML = '';
      data.inclusions.forEach(inc => {
        const item = document.createElement('div');
        item.className = 'estimator-inclusion-item';
        item.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          <span>${escapeHtml(inc)}</span>
        `;
        inclusionsList.appendChild(item);
      });
    }
  };

  estimatorFocusOptions.forEach(pill => {
    pill.addEventListener('click', () => {
      estimatorFocusOptions.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeEstimatorFocus = pill.getAttribute('data-focus') || 'detox';
      updateEstimatorSummary();
    });
  });

  estimatorDurationButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      estimatorDurationButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeEstimatorDays = btn.getAttribute('data-days') || '7';
      updateEstimatorSummary();
    });
  });

  // Apply estimator to booking
  const btnSelectEstimatorPackage = document.getElementById('btnSelectEstimatorPackage');
  if (btnSelectEstimatorPackage) {
    btnSelectEstimatorPackage.addEventListener('click', () => {
      const data = packageEstimatorData[activeEstimatorFocus];
      const bookingTreatment = document.getElementById('bookingTreatment');
      const bookingMessage = document.getElementById('bookingMessage');

      if (bookingTreatment) {
        if (activeEstimatorFocus === 'detox') bookingTreatment.value = 'panchakarma';
        else if (activeEstimatorFocus === 'stress') bookingTreatment.value = 'shirodhara';
        else if (activeEstimatorFocus === 'joints') bookingTreatment.value = 'abhyanga';
        else bookingTreatment.value = 'consultation';
      }

      if (bookingMessage) {
        const text = `Interested in the ${activeEstimatorDays}-Day ${data.title}. Please advise available consultation dates, room availability, and pre-arrival preparations.`;
        bookingMessage.value = text;
        const charCounterText = document.getElementById('charCounterText');
        if (charCounterText) charCounterText.textContent = `${text.length} / 400 characters`;
      }

      const bookingSec = document.getElementById('appointment');
      if (bookingSec) bookingSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Initial estimator render
  updateEstimatorSummary();

  // --------------------------------------------------------------------------
  // 20. Booking Form Interactivity: Quick-Fill, Time Slots, Date Preview & Char Count
  // --------------------------------------------------------------------------
  const bookingMessage = document.getElementById('bookingMessage');
  const charCounterText = document.getElementById('charCounterText');
  const bookingDate = document.getElementById('bookingDate');
  const datePreviewText = document.getElementById('datePreviewText');

  const updateDatePreview = (dateStr) => {
    if (!datePreviewText) return;
    if (!dateStr) {
      datePreviewText.textContent = '';
      return;
    }
    const [year, month, day] = dateStr.split('-');
    const d = new Date(year, month - 1, day);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formatted = d.toLocaleDateString('en-US', options);
    datePreviewText.innerHTML = `🗓️ <strong>Scheduled Date:</strong> ${formatted} (Arrival recommended by 8:30 AM)`;
  };

  if (bookingDate) {
    bookingDate.addEventListener('change', (e) => {
      updateDatePreview(e.target.value);
    });
  }

  if (bookingMessage && charCounterText) {
    bookingMessage.addEventListener('input', () => {
      charCounterText.textContent = `${bookingMessage.value.length} / 400 characters`;
    });
  }

  const timeslotChips = document.querySelectorAll('.timeslot-chip');
  const bookingTimeSlot = document.getElementById('bookingTimeSlot');

  timeslotChips.forEach(chip => {
    chip.addEventListener('click', () => {
      timeslotChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const slot = chip.getAttribute('data-slot');
      if (bookingTimeSlot) {
        bookingTimeSlot.value = slot;
      }
    });
  });

  // Quick-Fill Demo Details for instant reviewer testing
  const btnQuickFillDemo = document.getElementById('btnQuickFillDemo');
  if (btnQuickFillDemo) {
    btnQuickFillDemo.addEventListener('click', () => {
      const nameInput = document.getElementById('bookingName');
      const phoneInput = document.getElementById('bookingPhone');
      const emailInput = document.getElementById('bookingEmail');
      const dateInput = document.getElementById('bookingDate');
      const treatmentSelect = document.getElementById('bookingTreatment');
      const doctorSelect = document.getElementById('bookingDoctor');
      const messageInput = document.getElementById('bookingMessage');
      const timeSlotSelect = document.getElementById('bookingTimeSlot');

      if (nameInput) nameInput.value = 'Siddharth Menon';
      if (phoneInput) phoneInput.value = '+91 98471 23456';
      if (emailInput) emailInput.value = 'siddharth.menon@example.com';

      // Set date to 3 days from today
      if (dateInput) {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 3);
        const yyyy = targetDate.getFullYear();
        const mm = String(targetDate.getMonth() + 1).padStart(2, '0');
        const dd = String(targetDate.getDate()).padStart(2, '0');
        const formattedDate = `${yyyy}-${mm}-${dd}`;
        dateInput.value = formattedDate;
        updateDatePreview(formattedDate);
      }

      if (treatmentSelect) treatmentSelect.value = 'panchakarma';
      if (doctorSelect) doctorSelect.value = 'madhavan';
      if (timeSlotSelect) timeSlotSelect.value = 'morning';

      timeslotChips.forEach(chip => {
        chip.classList.toggle('active', chip.getAttribute('data-slot') === 'morning');
      });

      const demoNote = 'Seeking a 7-day supervised Panchakarma retreat for chronic work fatigue and digestive sluggishness. Requesting preliminary Nadi Pariksha consultation with Dr. Madhavan Warrier.';
      if (messageInput) {
        messageInput.value = demoNote;
        if (charCounterText) {
          charCounterText.textContent = `${demoNote.length} / 400 characters`;
        }
      }

      // Remove error highlights
      document.querySelectorAll('#appointmentForm .form-control').forEach(el => el.classList.remove('error'));
    });
  }

  // --------------------------------------------------------------------------
  // 21. Sanctuary Temple Bell Ambient Soundscape (Web Audio API Synthesizer)
  // --------------------------------------------------------------------------
  const sanctuaryAudioWidget = document.getElementById('sanctuaryAudioWidget');
  const audioStatusText = document.getElementById('audioStatusText');
  let audioCtx = null;
  let isSoundscapePlaying = false;
  let soundscapeInterval = null;

  // Plays a rich meditative Tibetan / Kerala brass singing bowl harmonic chime
  const playSacredBellTone = () => {
    try {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        audioCtx = new AudioContextClass();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const fundamental = 261.63; // Middle C (Calming meditative drone)
      const harmonics = [1, 2.76, 5.4, 8.93]; // Classical singing bowl harmonic ratios
      const gains = [0.35, 0.18, 0.09, 0.04];
      const decays = [4.2, 3.1, 2.2, 1.4];

      const now = audioCtx.currentTime;

      harmonics.forEach((hRatio, idx) => {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(fundamental * hRatio, now);

        // Natural exponential decay envelope
        gainNode.gain.setValueAtTime(gains[idx], now);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + decays[idx]);

        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        osc.start(now);
        osc.stop(now + decays[idx] + 0.1);
      });
    } catch (err) {
      console.warn('Audio synthesis not supported or blocked:', err);
    }
  };

  if (sanctuaryAudioWidget) {
    sanctuaryAudioWidget.addEventListener('click', () => {
      isSoundscapePlaying = !isSoundscapePlaying;

      if (isSoundscapePlaying) {
        sanctuaryAudioWidget.classList.add('playing');
        if (audioStatusText) audioStatusText.textContent = 'Bell Chimes (Active)';
        playSacredBellTone();
        // Chime every 6.5 seconds
        soundscapeInterval = setInterval(() => {
          if (isSoundscapePlaying) playSacredBellTone();
        }, 6500);
      } else {
        sanctuaryAudioWidget.classList.remove('playing');
        if (audioStatusText) audioStatusText.textContent = 'Play Temple Bell';
        if (soundscapeInterval) {
          clearInterval(soundscapeInterval);
          soundscapeInterval = null;
        }
      }
    });

    sanctuaryAudioWidget.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        sanctuaryAudioWidget.click();
      }
    });
  }

  // Utility to prevent XSS
  function escapeHtml(string) {
    const div = document.createElement('div');
    div.textContent = string;
    return div.innerHTML;
  }
});


