"use strict";
exports.id = 5795;
exports.ids = [5795];
exports.modules = {

/***/ 5795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hp": () => (/* binding */ dateTimeStringFunc),
/* harmony export */   "l_": () => (/* binding */ dateTimeStringFuncOneHourAhead),
/* harmony export */   "o$": () => (/* binding */ dateTimeStringFuncForReturn),
/* harmony export */   "tV": () => (/* binding */ convertDateToMilliSecond)
/* harmony export */ });
/* unused harmony export currentDate */
//!  'yyyy-mm-dd HH:MM'   FOR   transferDateTimeString
const dateTimeStringFunc = ()=>{
    let tmpDt = new Date(Date.now() + 1000 * 60 * 60 * 6); //6
    let year = tmpDt.getFullYear();
    let month = tmpDt.getMonth() + 1 < 10 ? `0${tmpDt.getMonth() + 1}` : tmpDt.getMonth() + 1;
    let date = tmpDt.getDate() < 10 ? `0${tmpDt.getDate()}` : tmpDt.getDate();
    let hours = tmpDt.getHours() < 10 ? `0${tmpDt.getHours()}` : tmpDt.getHours();
    let minute = "00";
    let currentDate = `${year}-${month}-${date} ${hours}:${minute}`;
    return currentDate;
};
const dateTimeStringFuncForReturn = ()=>{
    let tmpDt = new Date(Date.now() + 1000 * 60 * 60 * 9); //9
    let year = tmpDt.getFullYear();
    let month = tmpDt.getMonth() + 1 < 10 ? `0${tmpDt.getMonth() + 1}` : tmpDt.getMonth() + 1;
    let date = tmpDt.getDate() < 10 ? `0${tmpDt.getDate()}` : tmpDt.getDate();
    let hours = tmpDt.getHours() < 10 ? `0${tmpDt.getHours()}` : tmpDt.getHours();
    let minute = "00";
    let currentDate = `${year}-${month}-${date} ${hours}:${minute}`;
    return currentDate;
};
const currentDate = (par)=>{
    let tmpDt = new Date(Date.now());
    let year = tmpDt.getFullYear();
    let month = tmpDt.getMonth() + 1 < 10 ? `0${tmpDt.getMonth() + 1}` : tmpDt.getMonth() + 1;
    let date = tmpDt.getDate() < 10 ? `0${tmpDt.getDate()}` : tmpDt.getDate();
    let currentDate = `${year}-${month}-${date}`;
    return currentDate;
};
//if return date is behind transfer date it will show up error
//we used to compare date(with milliseconds)
const convertDateToMilliSecond = (data)=>{
    var myDate = data.split("-");
    var newDateWithMs = new Date(Number(myDate[0]), Number(myDate[1] - 1), Number(myDate[2]));
    return newDateWithMs.getTime();
};
//article lari getirende bir saat gabaga cekeceyikki error vermesin
const dateTimeStringFuncOneHourAhead = ()=>{
    let tmpDt = new Date(Date.now() + 1000 * 60 * 60 * 7); //6
    let year = tmpDt.getFullYear();
    let month = tmpDt.getMonth() + 1 < 10 ? `0${tmpDt.getMonth() + 1}` : tmpDt.getMonth() + 1;
    let date = tmpDt.getDate() < 10 ? `0${tmpDt.getDate()}` : tmpDt.getDate();
    let hours = tmpDt.getHours() < 10 ? `0${tmpDt.getHours()}` : tmpDt.getHours();
    let minute = "00";
    let currentDate = `${year}-${month}-${date} ${hours}:${minute}`;
    return currentDate;
}; //it is for redux transfer initial value (transferDateTime)
 //we didnt use
 // export const getTimeStampOfCurrentDate = () => {
 //   let timeWithMs = new Date(Date.now() + 1000 * 60 * 60 * 6).getTime();
 //   // console.log(timeWithMs);
 //   return timeWithMs;
 // };
 //*
 // if we have 1650643505001     with ms we convert it to 2022-04-30
 //we didnt use it
 // export const convertMsToDate = (ms) => {
 //   const dateObject = new Date(ms);
 //   let year = dateObject.getFullYear();
 //   let month =
 //     dateObject.getMonth() + 1 < 10 ? `0${dateObject.getMonth() + 1}` : " ";
 //   let date =
 //     dateObject.getDate() < 10
 //       ? `0${dateObject.getDate()}`
 //       : dateObject.getDate();
 //   let currentDate = `${year}-${month}-${date}`;
 //*
 //   return currentDate;
 // };
 // it is for input date
 // export const getDate = () => {
 //   let tempDate = new Date();
 //   let year = tempDate.getFullYear();
 //   let month =
 //     tempDate.getMonth() + 1 < 10 ? `0${tempDate.getMonth() + 1}` : " ";
 //   let date =
 //     tempDate.getDate() < 10 ? `0${tempDate.getDate()}` : tempDate.getDate();
 //   let currentDate = `${year}-${month}-${date}`;
 //   return currentDate;
 // };
 // export const dateSixHourAhead = (par) => {
 //   let newDate = new Date(Date.now() + 1000 * 60 * 60 * 6);
 //   return newDate;
 // };
 //*


/***/ })

};
;