import { Api } from './Api'

interface Clinic {
    clinicId: {N: string},
    name: {S: string},
    address: {S: string},
    city: {S: string},
    coordinate: {S: string},
    openinghours: {S: string},
    dentists: {S: string},
    owner: {S: string},
  };

export const clinicApi = {
  getAllClinics: () => {
    Api.get(`/clinics`)
  },

  getClinic: async (clinicId: string) => {

    let result;
    result = await Api.get<Clinic>(`clinics/${clinicId}`);
    return result;
  }
}