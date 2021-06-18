export interface Cowin {

        center_id: number,
        name: string,
        address: string,
        state_name: string,
        district_name: string,
        pincode: number,
        from: string,
        to: string,
        date: string,
        available_capacity: number,
        available_capacity_dose1: number,
        available_capacity_dose2: number,
        min_age_limit: number,
        vaccine: string,
        slots: [Array<string>],
        

}