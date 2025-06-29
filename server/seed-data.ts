import { storage } from './storage';
import type { 
  InsertProject, 
  InsertSkill, 
  InsertCertificate, 
  InsertSocialLink, 
  InsertBio, 
  InsertGithubStats,
  InsertAsciiArt 
} from '@shared/schema';

const sampleProjects: InsertProject[] = [
  {
    title: "Terminal Portfolio",
    description: "Interactive Linux terminal emulator portfolio with ASCII animations and Firebase backend",
    techStack: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Express.js"],
    liveDemo: "https://portfolio.christopher-joshy.dev",
    github: "https://github.com/christopher-joshy/terminal-portfolio",
    asciiArt: "████████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     \n╚══██╔══╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     \n   ██║   ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     \n   ██║   ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     \n   ██║   ██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗\n   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝",
    status: "production",
    featured: true
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and inventory management",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    github: "https://github.com/christopher-joshy/ecommerce-app",
    asciiArt: "███████╗███████╗██╗  ██╗ ██████╗ ██████╗ \n██╔════╝██╔════╝██║  ██║██╔═══██╗██╔══██╗\n█████╗  ███████╗███████║██║   ██║██████╔╝\n██╔══╝  ╚════██║██╔══██║██║   ██║██╔═══╝ \n███████╗███████║██║  ██║╚██████╔╝██║     \n╚══════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝",
    status: "development",
    featured: false
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather monitoring dashboard with location-based forecasts",
    techStack: ["React", "Chart.js", "OpenWeatherMap API", "CSS3"],
    liveDemo: "https://weather.christopher-joshy.dev",
    github: "https://github.com/christopher-joshy/weather-dashboard",
    asciiArt: "██╗    ██╗███████╗ █████╗ ████████╗██╗  ██╗███████╗██████╗ \n██║    ██║██╔════╝██╔══██╗╚══██╔══╝██║  ██║██╔════╝██╔══██╗\n██║ █╗ ██║█████╗  ███████║   ██║   ███████║█████╗  ██████╔╝\n██║███╗██║██╔══╝  ██╔══██║   ██║   ██╔══██║██╔══╝  ██╔══██╗\n╚███╔███╔╝███████╗██║  ██║   ██║   ██║  ██║███████╗██║  ██║\n ╚══╝╚══╝ ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝",
    status: "production",
    featured: true
  }
];

const sampleSkills: InsertSkill[] = [
  // Frontend
  { name: "React", category: "Frontend", proficiency: 90, yearsOfExperience: 3 },
  { name: "TypeScript", category: "Frontend", proficiency: 85, yearsOfExperience: 2 },
  { name: "JavaScript", category: "Frontend", proficiency: 95, yearsOfExperience: 4 },
  { name: "HTML/CSS", category: "Frontend", proficiency: 90, yearsOfExperience: 5 },
  { name: "Tailwind CSS", category: "Frontend", proficiency: 80, yearsOfExperience: 2 },
  
  // Backend
  { name: "Node.js", category: "Backend", proficiency: 85, yearsOfExperience: 3 },
  { name: "Express.js", category: "Backend", proficiency: 80, yearsOfExperience: 3 },
  { name: "Python", category: "Backend", proficiency: 75, yearsOfExperience: 2 },
  { name: "PostgreSQL", category: "Backend", proficiency: 70, yearsOfExperience: 2 },
  { name: "MongoDB", category: "Backend", proficiency: 75, yearsOfExperience: 2 },
  
  // Cloud & DevOps
  { name: "Firebase", category: "Cloud & DevOps", proficiency: 80, yearsOfExperience: 2 },
  { name: "AWS", category: "Cloud & DevOps", proficiency: 70, yearsOfExperience: 1 },
  { name: "Docker", category: "Cloud & DevOps", proficiency: 65, yearsOfExperience: 1 },
  { name: "Git", category: "Cloud & DevOps", proficiency: 90, yearsOfExperience: 4 }
];

const sampleSocialLinks: InsertSocialLink[] = [
  {
    platform: "GitHub",
    username: "christopher-joshy",
    displayName: "Christopher Joshy",
    url: "https://github.com/christopher-joshy"
  },
  {
    platform: "LinkedIn",
    username: "christopher-joshy",
    displayName: "Christopher Joshy",
    url: "https://linkedin.com/in/christopher-joshy"
  },
  {
    platform: "Twitter",
    username: "christopher_dev",
    displayName: "@christopher_dev",
    url: "https://twitter.com/christopher_dev"
  },
  {
    platform: "Email",
    username: "hello@christopher-joshy.dev",
    displayName: "Email Me",
    url: "mailto:hello@christopher-joshy.dev"
  }
];

const sampleCertificates: InsertCertificate[] = [
  {
    title: "AWS Certified Developer Associate",
    description: "AWS certification for developing and maintaining applications on the AWS platform",
    issuer: "Amazon Web Services",
    dateIssued: new Date("2024-01-15"),
    credentialUrl: "https://aws.amazon.com/verification/christopher-joshy"
  },
  {
    title: "Google Cloud Professional Developer",
    description: "Google Cloud certification for designing, building, and deploying cloud applications",
    issuer: "Google Cloud",
    dateIssued: new Date("2023-09-20"),
    credentialUrl: "https://cloud.google.com/certification/verify/christopher-joshy"
  }
];

const sampleBio: InsertBio = {
  content: "Christopher Joshy is a passionate full-stack developer with expertise in modern web technologies. Experienced in building scalable applications using React, Node.js, and cloud platforms. Always eager to learn new technologies and solve complex problems through innovative solutions.\n\nWith over 4 years of experience in web development, I specialize in creating user-friendly applications that solve real-world problems. My journey started with curiosity about how websites work, and it has evolved into a passion for crafting digital experiences that make a difference.\n\nWhen I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."
};

const sampleGithubStats: InsertGithubStats = {
  stars: 127,
  commits: 1542,
  repos: 23,
  followers: 89,
  pullRequests: 156,
  issues: 45
};

const sampleAsciiArt: InsertAsciiArt[] = [
  {
    name: "welcome",
    content: "██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗\n██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝\n██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  \n██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  \n╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗\n ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝"
  },
  {
    name: "portfolio",
    content: "██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ \n██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗\n██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║\n██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║\n██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝\n╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝"
  }
];

export async function seedDatabase() {
  try {
    console.log('Starting database seeding...');
    
    // Seed projects
    console.log('Seeding projects...');
    for (const project of sampleProjects) {
      await storage.createProject(project);
    }
    
    // Seed skills
    console.log('Seeding skills...');
    for (const skill of sampleSkills) {
      await storage.createSkill(skill);
    }
    
    // Seed social links
    console.log('Seeding social links...');
    for (const link of sampleSocialLinks) {
      await storage.createSocialLink(link);
    }
    
    // Seed certificates
    console.log('Seeding certificates...');
    for (const cert of sampleCertificates) {
      await storage.createCertificate(cert);
    }
    
    // Seed bio
    console.log('Seeding bio...');
    await storage.updateBio(sampleBio);
    
    // Seed GitHub stats
    console.log('Seeding GitHub stats...');
    await storage.updateGithubStats(sampleGithubStats);
    
    // Seed ASCII art
    console.log('Seeding ASCII art...');
    for (const art of sampleAsciiArt) {
      await storage.createAsciiArt(art);
    }
    
    console.log('✅ Database seeding completed successfully!');
    return true;
  } catch (error) {
    console.error('❌ Database seeding failed:', error);
    return false;
  }
}