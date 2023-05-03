import SET_APPLICANT_FOR_CREADIT_DETAILS from "./SET_APPLICANT_FOR_CREADIT_DETAILS";
import SET_APPROXIMATE_DATA from "./SET_APPROXIMATE_DATA";
import SET_CONTACT_DETAILS from "./SET_CONTACT_DETAILS";

const INITIAL_STATE = {
    accountRegisterDatas: {
        applicantForCreditAccount: {
            companyName: "",
            natureOfBusiness: "",
            companyFax: "",
            postCode: "",
            address: "",
            registrationNo: "",
            companyTel: ""
        },
        contactDetails: {
            contactName: "",
            jobTitle: "",
            department: "",
            email: "",
            telephoneNo: ""
        },
        approximateSpend: ""
    }
}

export const accountRegisterActions = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CONTACT_DETAILS': {
            return SET_CONTACT_DETAILS({ state, action })
        }
        case 'SET_APPROXIMATE_DATA': {
            return SET_APPROXIMATE_DATA({ state, action })
        }
        case 'SET_APPLICANT_FOR_CREADIT_DETAILS': {
            return SET_APPLICANT_FOR_CREADIT_DETAILS({ state, action })
        }
        default:
            return state;
    }
}