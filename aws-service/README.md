# AWS Cloud

## API Specification

| Resource        | Method        | Parameters    | Response             |
| --------------- | ------------- | ------------- | -------------------- |
| /clinics | GET || 200: return all clinics |
| /clinics/:id | GET | Clinic ID | 200: return all clinics |
| /schedule| POST || 201: data for newly created appointment |
| /schedule/:date/:clinicId | GET | Date, Clinic ID | 200: return appointments schedule for clinic for specific date

## Database Specification

### DentistimoClinicsTable

```
{
  clinicId : number,	
  name: string,
  owner: string,
  dentists: number,
  address: string,
  city: string,
  coordinate: {
    latitude: number,
    longitude: number
  },
  openingHours: {
    monday: string,
    tuesday: string,
    wednesday: string,
    thursday: string,
    friday: string,
    saturday: string,
    sunday: string
  }
}
```

### DentistimoAppointmentsTable

```
  { 
      clinicId : number,	
      date: string,
      timeSlots: Array<{
        bookings: Array<string>, 
        time: string
        }>
}
```
