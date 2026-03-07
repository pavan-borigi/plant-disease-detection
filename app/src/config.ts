// =============================================================================
// Plant Disease Detection - Site Configuration
// Edit ONLY this file to customize all content across the site.
// =============================================================================

// -- Site-wide settings -------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Plant Disease Detection - AI Powered Plant Health Analysis",
  description: "Detect plant diseases instantly using our advanced deep learning CNN model. Get fertilizer recommendations and prevention measures for healthier crops.",
  language: "en",
};

// -- Hero Section -------------------------------------------------------------
export interface HeroNavItem {
  label: string;
  sectionId: string;
  icon: "disc" | "play" | "calendar" | "music";
}

export interface HeroConfig {
  backgroundImage: string;
  brandName: string;
  decodeText: string;
  decodeChars: string;
  subtitle: string;
  ctaPrimary: string;
  ctaPrimaryTarget: string;
  ctaSecondary: string;
  ctaSecondaryTarget: string;
  cornerLabel: string;
  cornerDetail: string;
  navItems: HeroNavItem[];
}

export const heroConfig: HeroConfig = {
  backgroundImage: "/hero-bg.jpg",
  brandName: "Detection AI",
  decodeText: "DETECT. PROTECT. GROW.",
  decodeChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  subtitle: "Advanced CNN-powered plant disease detection for healthier crops and better yields",
  ctaPrimary: "Start Detection",
  ctaPrimaryTarget: "detection",
  ctaSecondary: "Learn More",
  ctaSecondaryTarget: "features",
  cornerLabel: "AI Powered",
  cornerDetail: "TensorFlow CNN Model",
  navItems: [
    { label: "Detection", sectionId: "detection", icon: "disc" },
    { label: "Features", sectionId: "features", icon: "play" },
    { label: "Diseases", sectionId: "diseases", icon: "calendar" },
  ],
};

// -- Album Cube Section (Features Showcase) -----------------------------------
export interface Album {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface AlbumCubeConfig {
  albums: Album[];
  cubeTextures: string[];
  scrollHint: string;
}

export const albumCubeConfig: AlbumCubeConfig = {
  albums: [
    {
      id: 1,
      title: "38 Diseases",
      subtitle: "PLANTVILLAGE DATASET",
      image: "/feature-1.jpg"
    },
    {
      id: 2,
      title: "99% Accuracy",
      subtitle: "CNN MODEL",
      image: "/feature-2.jpg"
    },
    {
      id: 3,
      title: "Instant Results",
      subtitle: "REAL-TIME",
      image: "/feature-3.jpg"
    },
    {
      id: 4,
      title: "Smart Care",
      subtitle: "AI RECOMMENDATIONS",
      image: "/feature-4.jpg"
    },
  ],
  cubeTextures: [
    "/cube-1.jpg",
    "/cube-2.jpg",
    "/cube-3.jpg",
    "/cube-4.jpg",
    "/cube-5.jpg",
    "/cube-6.jpg",
  ],
  scrollHint: "Scroll to explore features",
};

// -- Parallax Gallery Section (Disease Gallery) -------------------------------
export interface ParallaxImage {
  id: number;
  src: string;
  alt: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  date: string;
}

export interface ParallaxGalleryConfig {
  sectionLabel: string;
  sectionTitle: string;
  galleryLabel: string;
  galleryTitle: string;
  marqueeTexts: string[];
  endCtaText: string;
  parallaxImagesTop: ParallaxImage[];
  parallaxImagesBottom: ParallaxImage[];
  galleryImages: GalleryImage[];
}

export const parallaxGalleryConfig: ParallaxGalleryConfig = {
  sectionLabel: "Disease Gallery",
  sectionTitle: "Common Plant Diseases",
  galleryLabel: "Supported Crops",
  galleryTitle: "Apple, Tomato, Potato & More",
  marqueeTexts: [
    "LATE BLIGHT",
    "EARLY BLIGHT",
    "BACTERIAL SPOT",
    "POWDERY MILDEW",
    "LEAF MOLD",
    "TARGET SPOT",
  ],
  endCtaText: "Detect Your Plant Disease Now",
  parallaxImagesTop: [
    { id: 1, src: "/disease-1.jpg", alt: "Tomato Late Blight" },
    { id: 2, src: "/disease-2.jpg", alt: "Potato Early Blight" },
    { id: 3, src: "/disease-3.jpg", alt: "Apple Scab" },
    { id: 4, src: "/disease-4.jpg", alt: "Grape Black Rot" },
    { id: 5, src: "/disease-5.jpg", alt: "Corn Rust" },
    { id: 6, src: "/disease-6.jpg", alt: "Pepper Spot" },
  ],
  parallaxImagesBottom: [
    { id: 1, src: "/healthy-1.jpg", alt: "Healthy Tomato" },
    { id: 2, src: "/healthy-2.jpg", alt: "Healthy Potato" },
    { id: 3, src: "/healthy-3.jpg", alt: "Healthy Apple" },
    { id: 4, src: "/healthy-4.jpg", alt: "Healthy Grape" },
    { id: 5, src: "/healthy-5.jpg", alt: "Healthy Corn" },
    { id: 6, src: "/healthy-6.jpg", alt: "Healthy Pepper" },
  ],
  galleryImages: [
    { id: 1, src: "/crop-tomato.jpg", title: "Tomato", date: "14 Diseases" },
    { id: 2, src: "/crop-apple.jpg", title: "Apple", date: "4 Diseases" },
    { id: 3, src: "/crop-potato.jpg", title: "Potato", date: "3 Diseases" },
    { id: 4, src: "/crop-grape.jpg", title: "Grape", date: "4 Diseases" },
    { id: 5, src: "/crop-corn.jpg", title: "Corn", date: "4 Diseases" },
    { id: 6, src: "/crop-pepper.jpg", title: "Pepper", date: "2 Diseases" },
  ],
};

// -- Tour Schedule Section (How It Works) -------------------------------------
export interface TourDate {
  id: number;
  date: string;
  time: string;
  city: string;
  venue: string;
  status: "on-sale" | "sold-out" | "coming-soon";
  image: string;
}

export interface TourStatusLabels {
  onSale: string;
  soldOut: string;
  comingSoon: string;
  default: string;
}

export interface TourScheduleConfig {
  sectionLabel: string;
  sectionTitle: string;
  vinylImage: string;
  buyButtonText: string;
  detailsButtonText: string;
  bottomNote: string;
  bottomCtaText: string;
  statusLabels: TourStatusLabels;
  tourDates: TourDate[];
}

export const tourScheduleConfig: TourScheduleConfig = {
  sectionLabel: "How It Works",
  sectionTitle: "Detection Process",
  vinylImage: "/process-icon.png",
  buyButtonText: "Try Now",
  detailsButtonText: "Learn More",
  bottomNote: "Powered by TensorFlow and OpenCV",
  bottomCtaText: "Start Free Detection",
  statusLabels: {
    onSale: "Active",
    soldOut: "Popular",
    comingSoon: "New",
    default: "Available",
  },
  tourDates: [
    {
      id: 1,
      date: "STEP 01",
      time: "Upload",
      city: "Upload Image",
      venue: "Take a clear photo of the plant leaf",
      status: "on-sale",
      image: "/step-1.jpg",
    },
    {
      id: 2,
      date: "STEP 02",
      time: "Process",
      city: "AI Analysis",
      venue: "CNN model processes the image",
      status: "on-sale",
      image: "/step-2.jpg",
    },
    {
      id: 3,
      date: "STEP 03",
      time: "Detect",
      city: "Get Results",
      venue: "Receive disease diagnosis instantly",
      status: "on-sale",
      image: "/step-3.jpg",
    },
    {
      id: 4,
      date: "STEP 04",
      time: "Care",
      city: "Treatment Plan",
      venue: "Get fertilizer & prevention tips",
      status: "on-sale",
      image: "/step-4.jpg",
    },
  ],
};

// -- Footer Section -----------------------------------------------------------
export interface FooterImage {
  id: number;
  src: string;
}

export interface SocialLink {
  icon: "instagram" | "twitter" | "youtube" | "music" | "linkedin" | "github";
  label: string;
  href: string;
}

export interface FooterConfig {
  portraitImage: string;
  portraitAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  artistLabel: string;
  artistName: string;
  artistSubtitle: string;
  brandName: string;
  brandDescription: string;
  quickLinksTitle: string;
  quickLinks: string[];
  contactTitle: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  addressLabel: string;
  address: string;
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  subscribeAlertMessage: string;
  copyrightText: string;
  bottomLinks: string[];
  socialLinks: SocialLink[];
  galleryImages: FooterImage[];
}

export const footerConfig: FooterConfig = {
  portraitImage: "/footer-bg.jpg",
  portraitAlt: "Healthy Plants",
  heroTitle: "GROW HEALTHIER",
  heroSubtitle: "With AI-Powered Plant Care",
  artistLabel: "Technology",
  artistName: "Deep Learning CNN",
  artistSubtitle: "TensorFlow & Keras",
  brandName: "Detection AI",
  brandDescription: "Advanced plant disease detection using convolutional neural networks. Protect your crops with AI-powered diagnostics.",
  quickLinksTitle: "Quick Links",
  quickLinks: ["Home", "Detection", "Features", "API Docs", "Contact"],
  contactTitle: "Contact",
  emailLabel: "Email",
  email: "pavan42c2@gmail.com",
  phoneLabel: "Phone",
  phone: "6303195632",
  addressLabel: "Address",
  address: "andhra pradesh, India",
  newsletterTitle: "Stay Updated",
  newsletterDescription: "Get the latest updates on plant disease detection technology.",
  newsletterButtonText: "Subscribe",
  subscribeAlertMessage: "Thank you for subscribing!",
  copyrightText: " ",
  bottomLinks: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  socialLinks: [
    { icon: "instagram", label: "Instagram", href: "https://www.instagram.com/acc_pavan?igsh=MWFueG11YjRlM3JscA==" },
    { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/pavan-b-7b092836b" },
    { icon: "github", label: "GitHub", href: "https://github.com/pavan-borigi" },
  ],
  galleryImages: [
    { id: 1, src: "/gallery-1.jpg" },
    { id: 2, src: "/gallery-2.jpg" },
    { id: 3, src: "/gallery-3.jpg" },
    { id: 4, src: "/gallery-4.jpg" },
  ],
};
