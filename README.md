# AarogyaVeda Ayurveda Hospital & Holistic Wellness Centre

A modern, responsive, healthcare website for a fictional Indian Ayurveda Hospital and Research Retreat, crafted with HTML5, CSS3, and Vanilla JavaScript.

## 🌿 Design Concept: Ancient Healing. Modern Wellness.

The website reflects a blend of traditional Ayurvedic healing, natural wellness, and modern clinical hygiene.

### Strict Color Palette
- **Forest Green:** `#244B38` (Primary brand color, headers, accent backgrounds)
- **Herbal Green:** `#66845B` (Secondary brand color, nature accents, subheadings)
- **Terracotta:** `#B87550` (Warm clay accents, CTAs, interactive highlights)
- **Warm Ivory:** `#F7F4EA` (Base background, warm parchment feel)
- **Soft Cream:** `#EFEBDD` (Secondary container background)
- **Deep Charcoal:** `#292F29` (High-contrast typography)
- **White:** `#FFFFFF` (Card surfaces, clean structure)

### Typography
- **Headings:** *Playfair Display* (Serif, elegant classical feel)
- **Body:** *Lato* (Clean, modern readability)

---

## 🏛️ Website Architecture & Features

1. **Header & Navigation**
   - Fictional hospital wordmark with stylized botanical emblem
   - Sticky navigation with scroll-sensitive blur and padding transition
   - Full mobile navigation drawer with hamburger animation and accessibility controls
   - Direct "Book Appointment" CTA button

2. **Hero Section (Split Layout)**
   - Headline: *"Rediscover Balance. Reconnect With Nature."*
   - Supporting narrative on authentic, personalized Ayurvedic care
   - Dual CTAs: *Explore Treatments* & *Book a Consultation*
   - Premium Kerala architecture & wellness therapy photography
   - Trust indicators (Authentic Vaidya Lineage, In-house Pure Botanicals, Serene Sanctuary) without fabricated clinical claims

3. **About Us (Editorial Narrative)**
   - Headline: *"A Holistic Approach to Better Wellbeing"*
   - Editorial split layout introducing Tridosha balance (Vata, Pitta, Kapha) and modern patient care
   - Diagnostic highlights: *Nadi Pariksha* & *Herbal Aushadha*

4. **Ayurvedic Treatments (6 Key Categories)**
   - Panchakarma (Cellular Detoxification)
   - Abhyanga (Synchronised Warm Oil Massage)
   - Shirodhara (Continuous Forehead Pouring)
   - Swedana (Herbal Medicinal Steam)
   - Nasya (Purifying Nasal Administration)
   - Ayurvedic Consultation (Prakriti & Nadi Assessment)
   - **Interactive Modal:** Clicking *"Learn More"* displays full details (classical Sanskrit names, Dosha affinities, herbal oils used, session durations, and procedure notes) with direct booking links.

5. **Panchakarma Dedicated Section**
   - Classical fivefold cleansing breakdown (*Vamana, Virechana, Basti, Nasya, Raktamokshana*)
   - Interactive accordion cards highlighting Dosha targets
   - Medical disclaimer regarding qualified Vaidya assessment

6. **Why Choose Us**
   - Asymmetric 6-card grid highlighting personalized consultations, Samhita principles, experienced practitioners, hygienic treatment spaces, patient-centered care, and peaceful environment.

7. **Interactive Dosha Self-Assessment Quiz**
   - Instant 3-card assessment revealing Vata, Pitta, or Kapha tendencies with tailored lifestyle and herbal therapy guidance.

8. **Our Doctors (Fictional Vaidya Profiles)**
   - Profile cards for Dr. K. M. Madhavan Warrier, Dr. Ananya Nambiar, Dr. Rajeshwari Sharma, and Dr. Arvind Poduval
   - Interactive bio modal with physician philosophy, clinical focus, and direct consultation booking hook

9. **Wellness Facilities (Interactive Gallery & Lightbox)**
   - Categories: Consultation Rooms, Panchakarma Suites, Herbal Preparation (*Aushadhashala*), Wellness Garden (*Oushadha Vanam*), and Courtyards
   - Interactive filter tabs and lightbox modal viewer

10. **Patient Testimonials**
    - 3 clearly labelled demonstration patient testimonials with Dosha context

11. **Appointment Booking Form**
    - Form fields: Full Name, Phone, Email, Preferred Date (with past-date prevention), Treatment Selection, Doctor Choice, Time Slot, and Health Notes
    - Client-side validation with real-time feedback
    - Simulation Confirmation Modal showing submitted summary and demo disclaimers

12. **FAQ Accordion**
    - Five detailed answers regarding consultation expectations, Panchakarma duration, diet restrictions, and medicated oils

13. **Contact Section & Map**
    - Fictional Kerala sanctuary address, telephone helpline, email, and consultation hours
    - Stylized map coordinate card
    - WhatsApp quick inquiry button with demo dialogue modal

14. **Footer**
    - Complete hospital branding, quick links, therapy links, social links, and demo legal notice
    - Floating WhatsApp button and Back-to-Top smooth scrolling button

## 📷 Visual Assets & Image Mapping

The website integrates authentic, high-definition Ayurveda and traditional Kerala architecture imagery generated with Google Flow:

| Section | Image File | Description |
| :--- | :--- | :--- |
| **Hero Section** | `assets/images/hero-architecture.jpg` (`Ayurveda_wellness_hospital_building_35989fe8.jpg`) | Traditional Kerala Ayurveda hospital architecture with gabled tile roofs, lotus pond, and morning sunlight |
| **About Us** | `assets/images/about-consultation.jpg` | Indian Ayurvedic doctor conducting personalized constitutional pulse consultation with patient |
| **Treatments (Panchakarma & Shirodhara)** | `assets/images/panchakarma.jpg` | Traditional wooden Droni therapy suite with brass Dhara Patra pouring warm herbal oil, Kerala therapists |
| **Treatments (Ayurvedic Consultation)** | `assets/images/hero-ayurveda.jpg` | Senior Ayurvedic physician consulting patient with herbal jars, mortar & pestle |
| **Panchakarma Section** | `assets/images/panchakarma.jpg` | In-section therapy room preview showcasing classical Droni suite setup |
| **Our Doctors: Dr. K. M. Madhavan Warrier** | `assets/images/doctor-03.jpg` | Senior Chief Vaidya in cream kurta and forest green Nehru vest with stethoscope |
| **Our Doctors: Dr. Ananya Nambiar** | `assets/images/doctor-01.jpg` | Chief Vaidya in white coat, green kurti with stethoscope and herbal pharmacy background |
| **Our Doctors: Dr. Rajeshwari Sharma** | `assets/images/doctor-02.jpg` | Consultant Vaidya in olive saree and white coat with clipboard and clinic jars |
| **Our Doctors: Dr. Arvind Poduval** | `assets/images/doctor-04.jpg` | Specialist Vaidya portrait in green Nehru vest with stethoscope |
| **Wellness Facilities** | `about-consultation.jpg`, `panchakarma.jpg`, `hero-architecture.jpg`, `hospital-exterior.jpg`, `hero-ayurveda.jpg` | Interactive filtered gallery covering consultation suites, Panchakarma rooms, medicinal garden, and courtyards |
| **Patient Experience** | `assets/images/hero-ayurveda.jpg` | Featured patient care journey card highlighting unhurried Vaidya dialogue |
| **Contact Section** | `assets/images/hospital-exterior.jpg` (`Ayurveda_wellness_hospital_build._9f07de03.jpg`) | Hospital retreat exterior with stone pathway, courtyard, and location pin overlay |

---

## 🚀 How to Run

Open `index.html` in any modern web browser, or serve it via a local static server:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

