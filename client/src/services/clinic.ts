import { Api } from './Api'
import axios, { AxiosError, AxiosResponse } from 'axios';

import ClinicType from '../Types/ClinicType'

const responseBody = <T>(response: AxiosResponse<T>) => response.data;


export const clinicApi = {
  getAllClinics: async <ClinicType>() => {
    return await Api.get<ClinicType[]>(`/clinics`);
  },
  getClinic: (clinicId : number) => {
    Api.get(`clinics/${clinicId}`);
  }
}