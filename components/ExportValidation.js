import * as Yup from "yup";

// https://github.com/jquense/yup
export const exportvalidation = Yup.object().shape({
    vehicleno: Yup.string().required("Vehicle No. is required").length(10),
});