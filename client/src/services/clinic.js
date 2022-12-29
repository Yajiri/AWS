import { Api } from './Api'

export const clinicApi = {
  getAllClinics: () => {
    Api.get(`/clinics`)
  },
  getClinic: (clinicId) => {
    let result ;
    Api.get(`clinics/${clinicId}`).then(
      resp => {
        //console.log(resp.data);
        result = resp.data;

      }
    ).catch(
      err => {
        console.log(JSON.stringify(err));
        result = "Clinic not found."
      }
    )
    return result;
  }

  // const getClinic = async (clinicId: any) => {
  //   const response = await Api.get(clinics/${clinicId})
  //   return response.data;
  // }
}