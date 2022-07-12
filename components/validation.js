import * as Yup from "yup";

// https://github.com/jquense/yup
export const validationSchema = Yup.object().shape({
    transportername: Yup.string().required("Transporter Name is required"),
    vehicleno: Yup.string().required("Vehicle No. is required").length(10),
    vesselno: Yup.string().required("Vessel No. is required"),
    containerno: Yup.string().required("Container.No is required"),
});