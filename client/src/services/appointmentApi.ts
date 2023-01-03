import ITimeSlots from '../Types/ITimeSlots'
import { Api } from './Api'

export const appointmentApi = {
  getAppointments: async (clinicId: string, date: string)  => {
    const result = await Api.get<ITimeSlots>(`/schedule/${clinicId}/${date}`);
    return result;
  }
//   makeAppointment: clinicId => {
//     Api.post(`clinics/${clinicId}/appointments`)
//   },
//   deleteAppointment: (clinicId, appointmentId) => {
//     Api.delete(`clinics/${clinicId}/appointments/${appointmentId}`)
//   }
}