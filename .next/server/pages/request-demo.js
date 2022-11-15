"use strict";
(() => {
var exports = {};
exports.id = 242;
exports.ids = [242];
exports.modules = {

/***/ 1738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);



const PageMeta = ({ title  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
            children: title
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageMeta);


/***/ }),

/***/ 1468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ request_demo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/common/PageMeta.js
var PageMeta = __webpack_require__(1738);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@emailjs/browser"
var browser_ = __webpack_require__(7163);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser_);
;// CONCATENATED MODULE: ./src/components/contact/ContactsForm.js




function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}
const ContactsForm = ()=>{
    const { 0: inputValue , 1: setInputValue  } = (0,external_react_.useState)("");
    const { 0: submitting , 1: setSubmitting  } = (0,external_react_.useState)("Get Started");
    const handlePhoneInput = (e)=>{
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setInputValue(formattedPhoneNumber);
    };
    const form = (0,external_react_.useRef)();
    const sendEmail = (e)=>{
        e.preventDefault();
        browser_default().sendForm("service_oebog49", "template_umswx8m", form.current, "9W-xgroL596bRE0WK").then((result)=>{
            console.log(result.text);
            console.log("message sent");
        }, (error)=>{
            console.log(error.text);
            console.log("message NOT sent");
        });
        e.target.reset();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "col-xl-5 col-lg-7 col-md-12 order-0 order-lg-1",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "register-wrap p-5 bg-white shadow rounded-custom mt-5 mt-lg-0 mt-xl-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "fw-medium h4",
                        children: "Fill out the form and we'll be in touch as soon as possible."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("form", {
                        action: "#",
                        className: "mt-4 register-form",
                        ref: form,
                        onSubmit: sendEmail,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-sm-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "input-group mb-3",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            required: true,
                                            name: "first_name",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "First Name",
                                            "aria-label": "firstName"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-sm-6 ",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "input-group mb-3",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            required: true,
                                            name: "last_name",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Last Name",
                                            "aria-label": "lastName"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-sm-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "input-group mb-3",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            required: true,
                                            name: "phone",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Phone",
                                            "aria-label": "phone",
                                            onChange: (e)=>handlePhoneInput(e),
                                            value: inputValue
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-sm-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "input-group mb-3",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            required: true,
                                            name: "email",
                                            type: "email",
                                            className: "form-control",
                                            placeholder: "Email",
                                            "aria-label": "email"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-sm-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "input-group mb-3",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                            className: "form-control form-select",
                                            name: "budget",
                                            id: "budget",
                                            required: true,
                                            "data-msg": "Please select your budget.",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "",
                                                    children: "Budget"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "None, just getting started",
                                                    children: "None, just getting started"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "Less than $10,000",
                                                    children: "Less than $10,000"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "$10,000 to $20,000",
                                                    children: "$10,000 to $20,000"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "$20,000 to $50,000",
                                                    children: "$20,000 to $50,000"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "$50,000 to $100,000",
                                                    children: "$50,000 to $100,000"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "More than $100,000",
                                                    children: "More than $100,000"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-sm-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "input-group mb-3",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                            className: "form-control form-select",
                                            name: "country",
                                            id: "country",
                                            required: true,
                                            "data-msg": "Please select your country.",
                                            defaultValue: "Default",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    children: "Country"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AF",
                                                    children: "Afghanistan"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AX",
                                                    children: "\xc5land Islands"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AL",
                                                    children: "Albania"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "DZ",
                                                    children: "Algeria"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AS",
                                                    children: "American Samoa"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AD",
                                                    children: "Andorra"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AO",
                                                    children: "Angola"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AI",
                                                    children: "Anguilla"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AQ",
                                                    children: "Antarctica"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AG",
                                                    children: "Antigua and Barbuda"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AR",
                                                    children: "Argentina"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AM",
                                                    children: "Armenia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AW",
                                                    children: "Aruba"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AU",
                                                    children: "Australia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AT",
                                                    children: "Austria"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AZ",
                                                    children: "Azerbaijan"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BS",
                                                    children: "Bahamas"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BH",
                                                    children: "Bahrain"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BD",
                                                    children: "Bangladesh"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BB",
                                                    children: "Barbados"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BY",
                                                    children: "Belarus"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BE",
                                                    children: "Belgium"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BZ",
                                                    children: "Belize"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BJ",
                                                    children: "Benin"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BM",
                                                    children: "Bermuda"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BT",
                                                    children: "Bhutan"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BO",
                                                    children: "Bolivia, Plurinational State of"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BQ",
                                                    children: "Bonaire, Sint Eustatius and Saba"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BA",
                                                    children: "Bosnia and Herzegovina"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BW",
                                                    children: "Botswana"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BV",
                                                    children: "Bouvet Island"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BR",
                                                    children: "Brazil"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "IO",
                                                    children: "British Indian Ocean Territory"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BN",
                                                    children: "Brunei Darussalam"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BG",
                                                    children: "Bulgaria"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BF",
                                                    children: "Burkina Faso"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BI",
                                                    children: "Burundi"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "KH",
                                                    children: "Cambodia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CM",
                                                    children: "Cameroon"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CA",
                                                    children: "Canada"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CV",
                                                    children: "Cape Verde"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "KY",
                                                    children: "Cayman Islands"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CF",
                                                    children: "Central African Republic"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "TD",
                                                    children: "Chad"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CL",
                                                    children: "Chile"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CN",
                                                    children: "China"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CX",
                                                    children: "Christmas Island"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CC",
                                                    children: "Cocos (Keeling) Islands"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CO",
                                                    children: "Colombia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "KM",
                                                    children: "Comoros"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CG",
                                                    children: "Congo"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CD",
                                                    children: "Congo, the Democratic Republic of the"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CK",
                                                    children: "Cook Islands"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CR",
                                                    children: "Costa Rica"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CI",
                                                    children: "C\xf4te d'Ivoire"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "HR",
                                                    children: "Croatia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CU",
                                                    children: "Cuba"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CW",
                                                    children: "Cura\xe7ao"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CY",
                                                    children: "Cyprus"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CZ",
                                                    children: "Czech Republic"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "DK",
                                                    children: "Denmark"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "DJ",
                                                    children: "Djibouti"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "DM",
                                                    children: "Dominica"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "DO",
                                                    children: "Dominican Republic"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "EC",
                                                    children: "Ecuador"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "EG",
                                                    children: "Egypt"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "SV",
                                                    children: "El Salvador"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GQ",
                                                    children: "Equatorial Guinea"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "ER",
                                                    children: "Eritrea"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "EE",
                                                    children: "Estonia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "ET",
                                                    children: "Ethiopia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "FK",
                                                    children: "Falkland Islands (Malvinas)"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "FO",
                                                    children: "Faroe Islands"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "FJ",
                                                    children: "Fiji"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "FI",
                                                    children: "Finland"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "FR",
                                                    children: "France"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GF",
                                                    children: "French Guiana"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "PF",
                                                    children: "French Polynesia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "TF",
                                                    children: "French Southern Territories"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GA",
                                                    children: "Gabon"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GM",
                                                    children: "Gambia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GE",
                                                    children: "Georgia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "DE",
                                                    children: "Germany"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GH",
                                                    children: "Ghana"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GI",
                                                    children: "Gibraltar"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GR",
                                                    children: "Greece"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GL",
                                                    children: "Greenland"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GD",
                                                    children: "Grenada"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GP",
                                                    children: "Guadeloupe"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GU",
                                                    children: "Guam"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GT",
                                                    children: "Guatemala"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GG",
                                                    children: "Guernsey"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GN",
                                                    children: "Guinea"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GW",
                                                    children: "Guinea-Bissau"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GY",
                                                    children: "Guyana"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "HT",
                                                    children: "Haiti"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "HM",
                                                    children: "Heard Island and McDonald Islands"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "VA",
                                                    children: "Holy See (Vatican City State)"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "HN",
                                                    children: "Honduras"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "HK",
                                                    children: "Hong Kong"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "HU",
                                                    children: "Hungary"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "IS",
                                                    children: "Iceland"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "IN",
                                                    children: "India"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "ID",
                                                    children: "Indonesia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "IR",
                                                    children: "Iran, Islamic Republic of"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "IQ",
                                                    children: "Iraq"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "IE",
                                                    children: "Ireland"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "IM",
                                                    children: "Isle of Man"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "IL",
                                                    children: "Israel"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "IT",
                                                    children: "Italy"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "JM",
                                                    children: "Jamaica"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "JP",
                                                    children: "Japan"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "JE",
                                                    children: "Jersey"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "JO",
                                                    children: "Jordan"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "KZ",
                                                    children: "Kazakhstan"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "KE",
                                                    children: "Kenya"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "KI",
                                                    children: "Kiribati"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "KP",
                                                    children: "Korea, Democratic People's Republic of"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "KR",
                                                    children: "Korea, Republic of"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "KW",
                                                    children: "Kuwait"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "KG",
                                                    children: "Kyrgyzstan"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "LA",
                                                    children: "Lao People's Democratic Republic"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "LV",
                                                    children: "Latvia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "LB",
                                                    children: "Lebanon"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "LS",
                                                    children: "Lesotho"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "LR",
                                                    children: "Liberia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "LY",
                                                    children: "Libya"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "LI",
                                                    children: "Liechtenstein"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "LT",
                                                    children: "Lithuania"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "LU",
                                                    children: "Luxembourg"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MO",
                                                    children: "Macao"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MK",
                                                    children: "Macedonia, the former Yugoslav Republic of"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MG",
                                                    children: "Madagascar"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MW",
                                                    children: "Malawi"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MY",
                                                    children: "Malaysia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MV",
                                                    children: "Maldives"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "ML",
                                                    children: "Mali"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MT",
                                                    children: "Malta"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MH",
                                                    children: "Marshall Islands"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MQ",
                                                    children: "Martinique"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MR",
                                                    children: "Mauritania"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MU",
                                                    children: "Mauritius"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "YT",
                                                    children: "Mayotte"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MX",
                                                    children: "Mexico"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "FM",
                                                    children: "Micronesia, Federated States of"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MD",
                                                    children: "Moldova, Republic of"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MC",
                                                    children: "Monaco"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MN",
                                                    children: "Mongolia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "ME",
                                                    children: "Montenegro"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MS",
                                                    children: "Montserrat"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MA",
                                                    children: "Morocco"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MZ",
                                                    children: "Mozambique"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MM",
                                                    children: "Myanmar"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "NA",
                                                    children: "Namibia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "NR",
                                                    children: "Nauru"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "NP",
                                                    children: "Nepal"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "NL",
                                                    children: "Netherlands"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "NC",
                                                    children: "New Caledonia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "NZ",
                                                    children: "New Zealand"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "NI",
                                                    children: "Nicaragua"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "NE",
                                                    children: "Niger"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "NG",
                                                    children: "Nigeria"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "NU",
                                                    children: "Niue"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "NF",
                                                    children: "Norfolk Island"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MP",
                                                    children: "Northern Mariana Islands"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "NO",
                                                    children: "Norway"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "OM",
                                                    children: "Oman"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "PK",
                                                    children: "Pakistan"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "PW",
                                                    children: "Palau"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "PS",
                                                    children: "Palestinian Territory, Occupied"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "PA",
                                                    children: "Panama"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "PG",
                                                    children: "Papua New Guinea"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "PY",
                                                    children: "Paraguay"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "PE",
                                                    children: "Peru"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "PH",
                                                    children: "Philippines"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "PN",
                                                    children: "Pitcairn"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "PL",
                                                    children: "Poland"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "PT",
                                                    children: "Portugal"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "PR",
                                                    children: "Puerto Rico"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "QA",
                                                    children: "Qatar"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "RE",
                                                    children: "R\xe9union"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "RO",
                                                    children: "Romania"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "RU",
                                                    children: "Russian Federation"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "RW",
                                                    children: "Rwanda"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "BL",
                                                    children: "Saint Barth\xe9lemy"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "SH",
                                                    children: "Saint Helena, Ascension and Tristan da Cunha"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "KN",
                                                    children: "Saint Kitts and Nevis"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "LC",
                                                    children: "Saint Lucia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MF",
                                                    children: "Saint Martin (French part)"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "PM",
                                                    children: "Saint Pierre and Miquelon"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "VC",
                                                    children: "Saint Vincent and the Grenadines"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "WS",
                                                    children: "Samoa"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "SM",
                                                    children: "San Marino"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "ST",
                                                    children: "Sao Tome and Principe"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "SA",
                                                    children: "Saudi Arabia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "SN",
                                                    children: "Senegal"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "RS",
                                                    children: "Serbia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "SC",
                                                    children: "Seychelles"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "SL",
                                                    children: "Sierra Leone"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "SG",
                                                    children: "Singapore"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "SX",
                                                    children: "Sint Maarten (Dutch part)"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "SK",
                                                    children: "Slovakia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "SI",
                                                    children: "Slovenia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "SB",
                                                    children: "Solomon Islands"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "SO",
                                                    children: "Somalia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "ZA",
                                                    children: "South Africa"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GS",
                                                    children: "South Georgia and the South Sandwich Islands"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "SS",
                                                    children: "South Sudan"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "ES",
                                                    children: "Spain"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "LK",
                                                    children: "Sri Lanka"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "SD",
                                                    children: "Sudan"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "SR",
                                                    children: "Suriname"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "SJ",
                                                    children: "Svalbard and Jan Mayen"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "SZ",
                                                    children: "Swaziland"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "SE",
                                                    children: "Sweden"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CH",
                                                    children: "Switzerland"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "SY",
                                                    children: "Syrian Arab Republic"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "TW",
                                                    children: "Taiwan, Province of China"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "TJ",
                                                    children: "Tajikistan"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "TZ",
                                                    children: "Tanzania, United Republic of"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "TH",
                                                    children: "Thailand"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "TL",
                                                    children: "Timor-Leste"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "TG",
                                                    children: "Togo"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "TK",
                                                    children: "Tokelau"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "TO",
                                                    children: "Tonga"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "TT",
                                                    children: "Trinidad and Tobago"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "TN",
                                                    children: "Tunisia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "TR",
                                                    children: "Turkey"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "TM",
                                                    children: "Turkmenistan"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "TC",
                                                    children: "Turks and Caicos Islands"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "TV",
                                                    children: "Tuvalu"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "UG",
                                                    children: "Uganda"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "UA",
                                                    children: "Ukraine"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AE",
                                                    children: "United Arab Emirates"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GB",
                                                    children: "United Kingdom"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "US",
                                                    children: "United States"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "UM",
                                                    children: "United States Minor Outlying Islands"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "UY",
                                                    children: "Uruguay"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "UZ",
                                                    children: "Uzbekistan"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "VU",
                                                    children: "Vanuatu"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "VE",
                                                    children: "Venezuela, Bolivarian Republic of"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "VN",
                                                    children: "Viet Nam"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "VG",
                                                    children: "Virgin Islands, British"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "VI",
                                                    children: "Virgin Islands, U.S."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "WF",
                                                    children: "Wallis and Futuna"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "EH",
                                                    children: "Western Sahara"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "YE",
                                                    children: "Yemen"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "ZM",
                                                    children: "Zambia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "ZW",
                                                    children: "Zimbabwe"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-12",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "input-group mb-3",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                            name: "message",
                                            className: "form-control",
                                            placeholder: "Tell us more about your inquiry",
                                            style: {
                                                height: "120px"
                                            }
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-check",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                id: "flexCheckChecked"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                className: "form-check-label small",
                                                htmlFor: "flexCheckChecked",
                                                children: [
                                                    "Yes, I'd like to receive occasional marketing emails from us. I have the right to opt out at any time.",
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/privacy-policy",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "View privacy policy"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-12",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "submit",
                                        className: "btn btn-primary mt-4 d-block w-100",
                                        children: submitting
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const contact_ContactsForm = (ContactsForm);

;// CONCATENATED MODULE: ./src/layout/Footer/FooterSocial.js



const FooterSocial = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: "footer-section",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer-bottom bg-crypto text-white py-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row justify-content-between align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-7 col-lg-7",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "copyright-text",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "mb-lg-0 mb-md-0",
                                        children: [
                                            "\xa9 2022 EV Initiative Rights Reserved. Designed By",
                                            "",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://www.instagram.com/simpeto/",
                                                target: "_blank",
                                                rel: "noreferrer noopener",
                                                className: "text-decoration-none ms-2",
                                                children: "Simpeto"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-4 col-lg-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-single-col text-start text-lg-end text-md-end",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "list-unstyled list-inline footer-social-list mb-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "list-inline-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-facebook-f"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "list-inline-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-instagram"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "list-inline-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-dribbble"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "list-inline-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-github"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const Footer_FooterSocial = (FooterSocial);

// EXTERNAL MODULE: ./src/layout/Layout.js
var Layout = __webpack_require__(9608);
;// CONCATENATED MODULE: ./src/pages/request-demo.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/tabs/ReviewTabTwo'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@layout/Header/Navbar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());








const RequestDemo = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PageMeta/* default */.Z, {
                title: "Request for Deomo - Software & IT Solutions HTML Template"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@layout/Header/Navbar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                navDark: true,
                posAbsolute: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "sign-up-in-section bg-crypto ptb-120",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center justify-content-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(contact_ContactsForm, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/tabs/ReviewTabTwo'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                reqPage: true
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_FooterSocial, {})
        ]
    });
};
/* harmony default export */ const request_demo = (RequestDemo);


/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@emailjs/browser");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2791:
/***/ ((module) => {

module.exports = require("react-helmet");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [699,676,664,608], () => (__webpack_exec__(1468)));
module.exports = __webpack_exports__;

})();