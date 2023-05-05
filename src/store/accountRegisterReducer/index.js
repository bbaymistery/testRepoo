import SET_APPLICANT_FOR_CREADIT_DETAILS from "./SET_APPLICANT_FOR_CREADIT_DETAILS";
import SET_APPROXIMATE_DATA from "./SET_APPROXIMATE_DATA";
import SET_CONTACT_DETAILS from "./SET_CONTACT_DETAILS";
/*
    accountRegisterDatas: {
        applicantForCreditAccount: {
            companyName: "companyName",
            natureOfBusiness: "natureOfBusiness",
            companyFax: "companyFax",
            postCode: "postCode",
            address: "address",
            registrationNo: "registrationNo",
            companyTel: "companyTel"
        },
        contactDetails: {
            contactName: "test",
            jobTitle: "test",
            department: "test",
            email: "test@mail.ru",
            telephoneNo: "telephoneNo"
        },
        approximateSpend: "122"
    }

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
*/
const INITIAL_STATE = {
    accountRegisterDatas: {
        applicantForCreditAccount: {
            companyName: "companyName",
            natureOfBusiness: "natureOfBusiness",
            companyFax: "companyFax",
            postCode: "postCode",
            address: "address",
            registrationNo: "registrationNo",
            companyTel: "companyTel"
        },
        contactDetails: {
            contactName: "test",
            jobTitle: "test",
            department: "test",
            email: "test@mail.ru",
            telephoneNo: "telephoneNo"
        },
        approximateSpend: "122"
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