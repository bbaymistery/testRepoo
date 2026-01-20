import { convertDateToMilliSecond } from "../../helpers/getDates";
import { splitDateTimeStringIntoDate, splitDateTimeStringIntoHourAndMinute } from "../../helpers/splitHelper";

// Tarihleri karşılaştırma fonksiyonu (Burası kalabilir, mantık doğru)
const isReturnDateLessThanTransferDate = (transferDate, returnDate) => {
    // Return tarihi yoksa işlem yapma
    if (!returnDate) return false;
    
    const TRANSFER_DATE_IN_MILLISECONDS = convertDateToMilliSecond(transferDate.split(" ")[0])
    const RETURN_DATE_IN_MILLI_SECONDS = convertDateToMilliSecond(returnDate?.split(" ")[0])

    return TRANSFER_DATE_IN_MILLISECONDS >= RETURN_DATE_IN_MILLI_SECONDS
}

// 🛠️ DÜZELTİLEN FONKSİYON BURASI
const putReturnDateTimeOneHourForward = (params = {}) => {
    let { newState, value, DateTimeString, splitedMinute, splitedHour } = params

    // value => "2026-01-22" (Transfer Tarihi)
    let trDate = value
    // Mevcut return tarihi (Sadece YYYY-MM-DD kısmını al)
    let returnDate = newState?.reservations[1]?.transferDetails?.transferDateTimeString?.split(" ")[0]

    // Eğer Return tarihi, Transfer tarihinden geride kaldıysa:
    if (isReturnDateLessThanTransferDate(trDate, returnDate)) {

        // 1. Transfer tarihini parçalarına ayır (Yıl, Ay, Gün)
        // value formatı: "2026-01-22"
        let [yearStr, monthStr, dayStr] = trDate.split("-");
        
        // 2. Yeni bir Date objesi oluştur.
        // DİKKAT: Javascript'te aylar 0'dan başlar (Ocak=0, Şubat=1). O yüzden (monthStr - 1) yapıyoruz.
        let dateObj = new Date(Number(yearStr), Number(monthStr) - 1, Number(dayStr));

        // 3. GÜVENLİ EKLEME: Date objesine 1 gün ekle.
        // Bu yöntem ay sonlarını, yıl sonlarını ve saat farklarını (DST) otomatik halleder.
        dateObj.setDate(dateObj.getDate() + 1);

        // 4. Tekrar String Formatına Çevir ("YYYY-MM-DD")
        let nextYear = dateObj.getFullYear();
        // Ay bilgisini tekrar 1-12 formatına çevirip başına 0 ekliyoruz
        let nextMonth = String(dateObj.getMonth() + 1).padStart(2, '0');
        let nextDay = String(dateObj.getDate()).padStart(2, '0');

        let newDatee2 = `${nextYear}-${nextMonth}-${nextDay}`;

        // Backend'in istediği formatı oluştur: "yyyy-mm-dd HH:MM"
        let returnDateTimeString = `${newDatee2} ${splitedHour}:${splitedMinute}`;

        // State'i güncelle
        newState.reservations[1].transferDetails.transferDateTimeString = returnDateTimeString
    }
    return newState
}

function SET_JOURNEY_DATETIME(params = {}) {
    let { state, action } = params
    let { data: { journeyType, hourOrMinute, value } } = action

    let newState = JSON.parse(JSON.stringify(state))

    // Önceki tarih stringine ulaş
    let DateTimeString = newState.reservations[journeyType].transferDetails.transferDateTimeString
    
    // Parçala
    const [splitedHour, splitedMinute] = splitDateTimeStringIntoHourAndMinute(DateTimeString) || []
    const [splitedDate] = splitDateTimeStringIntoDate(DateTimeString) || []

    // Yeni değerleri set et ("yyyy-mm-dd HH:MM" formatını koruyarak)
    if (hourOrMinute === "hour") DateTimeString = `${splitedDate} ${value}:${splitedMinute}`;
    if (hourOrMinute === "minute") DateTimeString = `${splitedDate} ${splitedHour}:${value}`;
    if (hourOrMinute === "date") DateTimeString = `${value} ${splitedHour}:${splitedMinute}`;

    // Eğer gidiş-dönüş ise ve tarih değiştiyse, dönüş tarihini kontrol et
    if (newState.reservations.length > 1 && hourOrMinute === "date") {
        newState = putReturnDateTimeOneHourForward({ newState, value, DateTimeString, splitedHour, splitedMinute })
    }

    // State'e kaydet
    newState.reservations[journeyType].transferDetails.transferDateTimeString = DateTimeString
    return newState;
}

export default SET_JOURNEY_DATETIME;