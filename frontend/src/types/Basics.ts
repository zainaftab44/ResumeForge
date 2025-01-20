export interface Basics {
  name: string;
  label?: string;
  image?: string;
  email: string;
  phone?: string;
  url?: string;
  summary?: string;
  location?: {
    address?: string;
    postalCode?: string;
    city?: string;
    countryCode?: string;
    region?: string;
  };
  profiles?: Array<{
    network: string;
    username: string;
    url?: string;
  }>;
}
