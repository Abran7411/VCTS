export const UPDATE_TRANSPORT = 'UPDATE_TRANSPORT';
export const updateTransporter = (transporterID) => {
    return {
        type: UPDATE_TRANSPORT,
        transId: transporterID,
    };
};