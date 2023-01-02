import { Api } from './Api'

export const clinicApi = {
  getAllClinics: () => {
    Api.get(`/clinics`);
  },
  getClinic: (clinicId : number) => {
    Api.get(`clinics/${clinicId}`);
  }
}