export interface Skill {
  name: string;
  level: string;
  animatedLevel?: number;

}

export interface Education {
  institution: string;
  duration: string;
  degree: string;
  description: string;
}

export interface Experience {
  company: string;
  location: string;
  duration: string;
  position: string;
  description: string;
}

export interface Hobie {
  name: string;
  level: string;
  animatedLevel?: number;
}

export interface Language {
  name: string;
  level: number;
}

export interface Contact {
  telephone: string;
  site: string;
  map: string;
}

export interface Reference {
  name: string;
  address: string;
  phone: string;
  email: string;
}
