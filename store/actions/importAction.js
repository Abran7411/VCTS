export const TRANSPORTER_DATA = 'TOGGLE_DATA';
export const VEHICLE_DATA = 'TOGGLE_DATA';
export const VESSELONE_DATA = 'TOGGLE_DATA';
export const VESSELTWO_DATA = 'TOGGLE_DATA';
export const CONTAINERONE_DATA = 'TOGGLE_DATA';
export const CONTAINERTWO_DATA = 'TOGGLE_DATA';


// export const SET_FILTERS = 'SET_FILTERS';

export const transporterData = (transporterID) => {
    return { type: TRANSPORTER_DATA, TRANSPORTERID: transporterID };
};

export const vehicleData = (transporterID) => {
    return { type: VEHICLE_DATA, TRANSPORTERID: transporterID };
};

export const vesselData = (transporterID) => {
    return { type: VESSELONE_DATA, TRANSPORTERID: transporterID };
};

export const containerData = (transporterID) => {
    return { type: CONTAINERONE_DATA, TRANSPORTERID: transporterID };
};


// export const setFilters = filtersettings => {
//     return { type: SET_FILTERS, filters: filtersettings };
// };