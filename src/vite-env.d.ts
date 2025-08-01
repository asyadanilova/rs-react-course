/// <reference types="vite/client" />

interface University {
  domains: string[];
  country: string;
  stateProvince: string | null;
  name: string;
  web_pages: string[];
  alpha_two_code: string;
}

interface OutletContext {
  universities: University[];
  handleCloseDetailsPage: () => void;
}
