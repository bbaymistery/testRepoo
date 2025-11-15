"use strict";
(() => {
var exports = {};
exports.id = 1120;
exports.ids = [1120];
exports.modules = {

/***/ 487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
    let htmlTemplate = null;
    if (req.method === "POST") {
        var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18;
        htmlTemplate = `
       <div style="float: left;width: 650px; print-color-adjust: exact;">
           <div style="float: left; width: 650px;">
                               <!--    transferrrrrr  -->
                                             <!-- passenger details  startttt-->
                                   <div style="float: left;width: 650px;">
                                      <table width="650" border="1" cellpadding="0" cellspacing="0"
                                          style="border-collapse:collapse;font-size: 12px;">
                                                 <tbody>
                                                       <tr style="width:100%;">
                                                           <th colspan="2" style="background-color:#056bb8;font-size:20px;padding:5px;color:white">
                                                               Passenger
                                                               Details
                                                           </th>
                                                       </tr>
                                                   </tbody>
                                                <tbody>
                                                 <tr style="width:100%;">
                                                     <td style="font-weight:bold;width: 200px !important;padding-left: 3px;">Reference Number
                                                     </td>
                                                     <td style="padding:2px;padding-left: 3px ;width: 450px !important">${req.body.reservId[0][0]}</td>
                                                 </tr>
                                                 <tr style="width:100%;">
                                                     <td style="font-weight:bold;width: 200px !important;padding-left: 3px">Lead Passenger Name
                                                     </td>
                                                     <td style="padding:2px;padding-left: 3px;width: 450px !important">${(ref = req.body.reservations[0]) === null || ref === void 0 ? void 0 : (ref1 = ref.passengerDetails) === null || ref1 === void 0 ? void 0 : ref1.firstname} </td>
                                                 </tr>
                                                 <tr style="width:100%;">
                                                     <td style="font-weight:bold;width: 200px !important;padding-left: 3px">Number of Passengers
                                                     </td>
                                                     <td style="padding:2px;width:450px !important">${(ref2 = req.body.reservations[0]) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.transferDetails) === null || ref3 === void 0 ? void 0 : ref3.passengersNumber} </td>
                                                 </tr>
                                                 <tr style="width:100%;">
                                                     <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                    Contact Number
                                                     </td>
                                                     <td style="padding:2px;padding-left: 3px;width: 450px !important">  ${(ref4 = req.body.reservations[0]) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.passengerDetails) === null || ref5 === void 0 ? void 0 : ref5.phone}</td>
                                                 </tr>
                                                 <tr style="width:100%;">
                                                     <td style="font-weight:bold;width: 200px !important;padding-left: 3px">Email Address</td>
                                                     <td style="padding:2px;padding-left: 3px;width: 450px !important"><a href="/compose?To=elgun1993%2d93@bk.ru">${(ref6 = req.body.reservations[0]) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.passengerDetails) === null || ref7 === void 0 ? void 0 : ref7.email}
                                                     </a>
                                                     </td>
                                                 </tr>
                                             </tbody>
                                      </table>
                                  </div>

<!--transfer pick drop pointssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss -->
                                    <div style="float: left;width: 650px; ">
                                        <table width="650" border="1" class="xtable_mr_css_attr" cellpadding="0" cellspacing="0"
                                            style="border-collapse:collapse;font-size: 12px;margin-top:10px;">
                                               <tbody>
                                                       <tr style="padding:5px;width:100%;background-color:#056bb8;font-size:20px;padding:5px;color:white">
                                                           <th colspan="2">
                                                               Booking Details
                                                           </th>
                                                       </tr>
                                                   </tbody>

                                            <tbody>
                                              ${req.body.reservations[0].selectedPickupPoints.map((point)=>{
            var ref, ref1, ref2, ref3, ref4, ref5;
            return `
                                                  <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                    Pickup Point
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                          ${point.address}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>

                                             ${(point === null || point === void 0 ? void 0 : (ref = point.flightDetails) === null || ref === void 0 ? void 0 : ref.flightNumber) ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                   Flight Number
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                              ${point === null || point === void 0 ? void 0 : (ref1 = point.flightDetails) === null || ref1 === void 0 ? void 0 : ref1.flightNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                            ${(point === null || point === void 0 ? void 0 : (ref2 = point.flightDetails) === null || ref2 === void 0 ? void 0 : ref2.waitingPickupTime) ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Requested Pickup Time
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point === null || point === void 0 ? void 0 : (ref3 = point.flightDetails) === null || ref3 === void 0 ? void 0 : ref3.waitingPickupTime}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                                ${(point === null || point === void 0 ? void 0 : (ref4 = point.postCodeDetails) === null || ref4 === void 0 ? void 0 : ref4.postCodeAddress) ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Postcode Address:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point === null || point === void 0 ? void 0 : (ref5 = point.postCodeDetails) === null || ref5 === void 0 ? void 0 : ref5.postCodeAddress}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                                ${(point === null || point === void 0 ? void 0 : point.roomNumber) ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Address Description:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point === null || point === void 0 ? void 0 : point.roomNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                       ${(point === null || point === void 0 ? void 0 : point.cruiseNumber) ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Cruise Number:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point === null || point === void 0 ? void 0 : point.cruiseNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                       ${(point === null || point === void 0 ? void 0 : point.trainNumber) ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                     Train Number:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point === null || point === void 0 ? void 0 : point.trainNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                       ${(point === null || point === void 0 ? void 0 : point.pcatId) === 8 && (point === null || point === void 0 ? void 0 : point["address-description"]) ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                     Cities:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                  ${point === null || point === void 0 ? void 0 : point["address-description"]}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                       ${(point === null || point === void 0 ? void 0 : point.pcatId) === 9 && (point === null || point === void 0 ? void 0 : point["address-description"]) ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                   Universities And Colleges:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                  ${point === null || point === void 0 ? void 0 : point["address-description"]}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                       ${(point === null || point === void 0 ? void 0 : point.pcatId) === 10 && (point === null || point === void 0 ? void 0 : point["address-description"]) ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                         Description:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                  ${point === null || point === void 0 ? void 0 : point["address-description"]}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}



                                                `;
        })}


                                              ${req.body.reservations[0].selectedDropoffPoints.map((point)=>{
            var ref, ref1, ref2, ref3, ref4, ref5;
            return `
                                                  <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                   Dropoff Point
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                          ${point.address}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>

                                             ${(point === null || point === void 0 ? void 0 : (ref = point.flightDetails) === null || ref === void 0 ? void 0 : ref.flightNumber) ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                   Flight Number
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                              ${point === null || point === void 0 ? void 0 : (ref1 = point.flightDetails) === null || ref1 === void 0 ? void 0 : ref1.flightNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                            ${(point === null || point === void 0 ? void 0 : (ref2 = point.flightDetails) === null || ref2 === void 0 ? void 0 : ref2.waitingPickupTime) > 0 ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Requested Pickup Time
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point === null || point === void 0 ? void 0 : (ref3 = point.flightDetails) === null || ref3 === void 0 ? void 0 : ref3.waitingPickupTime}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                                ${(point === null || point === void 0 ? void 0 : (ref4 = point.postCodeDetails) === null || ref4 === void 0 ? void 0 : ref4.postCodeAddress) ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Postcode Address:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point === null || point === void 0 ? void 0 : (ref5 = point.postCodeDetails) === null || ref5 === void 0 ? void 0 : ref5.postCodeAddress}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                                ${(point === null || point === void 0 ? void 0 : point.roomNumber) ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Address Description:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point === null || point === void 0 ? void 0 : point.roomNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                       ${(point === null || point === void 0 ? void 0 : point.cruiseNumber) ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                 Cruise Number:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point === null || point === void 0 ? void 0 : point.cruiseNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                       ${(point === null || point === void 0 ? void 0 : point.trainNumber) ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                     Train Number:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                ${point === null || point === void 0 ? void 0 : point.trainNumber}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                       ${(point === null || point === void 0 ? void 0 : point.pcatId) === 8 && (point === null || point === void 0 ? void 0 : point["address-description"]) ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                     Cities:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                  ${point === null || point === void 0 ? void 0 : point["address-description"]}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}

                                       ${(point === null || point === void 0 ? void 0 : point.pcatId) === 9 && (point === null || point === void 0 ? void 0 : point["address-description"]) ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                   Universities And Colleges:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                  ${point === null || point === void 0 ? void 0 : point["address-description"]}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}


                                       ${(point === null || point === void 0 ? void 0 : point.pcatId) === 10 && (point === null || point === void 0 ? void 0 : point["address-description"]) ? ` <tr>
                                                  <td style="font-weight:bold;width: 200px !important;padding-left: 3px">
                                                         Description:
                                                  </td>

                                                  <td style="padding:2px;">
                                                    <span>
                                                      <span style="float: left;width: 100%;list-style: none;padding: 0 0 0 0;">
                                                        <span style="float: left;width: 100%;margin-bottom: 1%;">
                                                                  ${point === null || point === void 0 ? void 0 : point["address-description"]}
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </td>
                                                </tr>
                                                ` : ""}



                                                `;
        })}



                                                <tr style="width:100%;">
                                                    <td style="font-weight:bold;width: 200px !important;padding:2px 3px;">${((ref8 = req.body.reservations[0].selectedPickupPoints[0]) === null || ref8 === void 0 ? void 0 : ref8.pcatId) === 1 ? "Flight" : ""} Landing Date and Time</td>
                                                      <td style="padding:2px"><span>
                                                    ${(ref9 = req.body.reservations[0].transferDetails) === null || ref9 === void 0 ? void 0 : ref9.transferDateTimeString.split(" ")[0]}

                                                    ${(ref10 = req.body.reservations[0].transferDetails) === null || ref10 === void 0 ? void 0 : ref10.transferDateTimeString.split(" ")[1]}
                                                    </span></td>
                                                </tr>

                                                <tr style="width:100%;">
                                                    <td style="font-weight:bold;width: 200px !important; padding:2px 3px;">Vehicle Type</td>
                                                       <td style="padding:2px">${req.body.vehicleTypes[0]}</td>
                                                </tr>
                                                <tr style="width:100%;">
                                                    <td style="font-weight:bold;width: 200px !important;padding:2px 3px;">Transfer Type</td>
                                                    <td style="padding:2px">
                                                    ${req.body.transferTypes[0]}
                                                    </td>
                                                </tr>
                                                <tr style="width:100%;">
                                                    <td style="font-weight:bold;width: 200px !important;padding:2px 3px;">Special Requests</td>
                                                    <td style="min-height: 29px;padding:2px">${(ref11 = req.body.reservations[0].transferDetails) === null || ref11 === void 0 ? void 0 : ref11.specialRequests}</td>
                                                </tr>
                                                <tr style="width:100%;">
                                                    <td style="font-weight:bold;width: 200px !important;padding:2px 3px;">Journey Price</td>
                                                     <td style="padding:2px">
                                                    GBP ${(ref13 = (ref12 = req.body) === null || ref12 === void 0 ? void 0 : ref12.reservations[0].quotation) === null || ref13 === void 0 ? void 0 : ref13.price} </td>
                                                </tr>
                                                <tr style="width:100%;">
                                                    <td style="font-weight:bold;width: 200px !important;padding:2px 3px;">Payment Method</td>
                                                    <td style="padding:2px">
                                                     ${((ref14 = req.body.reservations[0].paymentDetails) === null || ref14 === void 0 ? void 0 : ref14.paymentType) === 1 ? "Pay With Cash To Driver" : ""}
                                           ${((ref15 = req.body.reservations[0].paymentDetails) === null || ref15 === void 0 ? void 0 : ref15.paymentType) === 2 ? "Pay With Credit Card" : ""}
                                           ${((ref16 = req.body.reservations[0].paymentDetails) === null || ref16 === void 0 ? void 0 : ref16.paymentType) === 6 ? "Pay With American Express" : ""}
                                           ${((ref17 = req.body.reservations[0].paymentDetails) === null || ref17 === void 0 ? void 0 : ref17.paymentType) === 7 ? "Pay With Credit Card" : ""}
                                                    </td>
                                                </tr>
                                                      <tr style="width:100%;">
                                                    <td style="font-weight:bold;width: 200px !important;padding:2px 3px;">Surcharge</td>
                                                     <td style="padding:2px">
                                                    GBP ${((ref18 = req.body) === null || ref18 === void 0 ? void 0 : ref18.surcharge) ? req.body.surcharge : "0.00"} </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
<!--transfer pick drop pointsssssssssssssss-->
                                         <!-- adresss description  -->
                                     <div style="float:left;width: 650px;font-family:Arial, Helvetica,Verdana sans-serif !important ;color:#666;">
                                        <span><br>Heathrow Gatwick Transfers <br>Challenge House,
                                          <br>616 Mitcham Road ,
                                           <br>Croydon, Surrey ,
                                           <br>CR0 3AA
                                          <br>Tel: <span class="js-phone-number">+44 208 683 2330</span>,
                                          <br>Website:
                                          <a href="http://www.heathrow-gatwick-transfers.com" target="_blank">www.heathrow-gatwick-transfers.com</a>,
                                          <br>Email enquiries:
                                          <a href="#" target="_blank" rel=" noopener noreferrer">
                                           info@heathrow-gatwick-transfers.com
                                       </a>
                                     </span>
                                  </div>
           </div>
        </div>
    `;
        res.status(200).json({
            status: "OK",
            htmlTemplate
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(487));
module.exports = __webpack_exports__;

})();