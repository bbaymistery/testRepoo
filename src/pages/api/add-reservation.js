import env from "../../resources/env";

function isJSON(string) {
  try {
    let json = JSON.parse(string);
    return true;
  } catch (error) {
    return false;
  }
}
export default function handler(req, res) {
  if (req.method === "POST") {
    let { body, reservations, vehicleTypes, transferTypes } = req.body;
    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reservation: body }),
    };

    fetch(`${env.apiDomain}/api/v1/reservation/`, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        response = isJSON(isJSON) ? JSON.parse(response) : response;
        if (typeof response === "object" && response.status === 200) {
          sendMail(
            response.data["reservations-ids"],
            reservations,
            vehicleTypes,
            transferTypes,
            (log) => {
              res.json({ status: 200, response, template: log.template });
            }
          );
        } else {
          // make one email for you, to collect error logs
          let ress = {
            msg: response?.message,
            type: response?.type,
            name: response?.name,
            note: "this message comes from add-reservation-api/else part",
          };
          errorEmail(ress);
          res.status(201).json({ status: 201, response });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  } else {
    res.status(200).json({ error: ["bad request"] });
  }
}

const sendMail = (
  reservId,
  reservations,
  vehicleTypes,
  transferTypes,
  callback = () => { }
) => {
  let reqOptions = {
    method: "POST",
    body: JSON.stringify({
      reservId,
      reservations,
      vehicleTypes,
      transferTypes,
    }),

    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  };

  fetch(`${env.websiteDomain}/api/send-email`, reqOptions)
    .then((res) => {
      callback(res);
    })
    .catch((e) => console.log(e.message, "from email error "));
};
