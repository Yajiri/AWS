import { Api } from './Api'

export const appointmentApi = {
  getAppointments: (clinicId : number) => {
    Api.get(`/clinics/${clinicId}/appointments`);
  },
  makeAppointment: () => {
    Api.post(`/appointments`);
  }
}