export interface JobHeroProps {
  title: string;
  city: string;
  state: string;
  country: string;
  employmentType: string;
  workplace: string;
  salary: {
    min: number;
    max: number;
    currency: string;
    period: string;
  };
  company: {
    name: string;
    logo?: string;
  };
  slug: string;
}
export interface JobSidebarProps {
  slug: string;
  title: string;
  company: {
    name: string;
    logo?: string;
  };
  city: string;
  state: string;
  country: string;
  employmentType: string;
  workplace: string;
  salary: {
    min: number;
    max: number;
    currency: string;
    period: string;
  };
  postedDate?: string;
  expiresAt?: string;
  vacancies?: number;
}
export interface JobSectionProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}
export interface AnimatedChecklistProps {
  items: string[];
  className?: string;
  iconColor?: string;
}

export interface Salary {
  min: number;
  max: number;
  currency: string;
  period: string;
}

export interface Company {
  name: string;
  logo?: string;
}

export interface Job {
  id: string;
  slug: string;
  title: string;
  city: string;
  state: string;
  country: string;
  employmentType: string;
  workplace: string;
  salary: Salary;
  company: Company;
  postedDate?: string;
  expiresAt?: string;
  vacancies?: number;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}