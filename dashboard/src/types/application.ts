export interface Application {
  userId: string;
  jobId: string;
  jobSlug: string;

  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;

  addressInformation: {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };

  compliance: {
    compliance1: string;
    compliance2: string;
    compliance3: string;
    compliance4: string;
    compliance5: string;
  };

  otherInformation: {
    coverLetter?: string;
    experience?: string;
    availability?: string;
  };

  resumeUrl: string;
}

export type Applications = Application[];