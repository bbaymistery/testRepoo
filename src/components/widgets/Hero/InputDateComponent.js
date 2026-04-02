import React from 'react';
import { currentDate } from '../../../helpers/getDates';
import styles from "./styles.module.scss";

/**
 * Renders a date input component for selecting journey dates with support for RTL and LTR directions.
 */
const InputDateComponent = ({
    islinknamecomponent,
    splitedDate,
    index,
    selectedPickupPoints,
    direction,
    appData,
    onChangeSetDateTimeHandler,
    reservations,
}) => {
    const [today, setToday] = React.useState("");
    const inputRef = React.useRef(null);

    React.useEffect(() => {
        setToday(currentDate());
    }, []);

    const minDate =
        index === 0
            ? today
            : reservations?.[0]?.transferDetails?.transferDateTimeString?.split(" ")?.[0] || today;

    const handleOpenPicker = () => {
        if (!inputRef.current) return;

        inputRef.current.focus();

        if (typeof inputRef.current.showPicker === "function") {
            inputRef.current.showPicker();
        } else {
            inputRef.current.click();
        }
    };

    const formatDateForDisplay = (dateString) => {
        if (!dateString) return "dd/mm/yyyy";

        const parts = dateString.split("-");
        if (parts.length !== 3) return "dd/mm/yyyy";

        const [year, month, day] = parts;
        return `${day}/${month}/${year}`;
    };

    const displayedDate = formatDateForDisplay(splitedDate);
    const isEmpty = !splitedDate;

    return (
        <div className={`${styles.search_menu} ${styles.book_input_date} ${styles.third_column}`}>
            <p className={direction}>
                {selectedPickupPoints[0]?.pcatId === 1
                    ? appData?.words["seLandingDate"]
                    : appData?.words["sePickUpDate"]}
            </p>

            <div
                className={`${styles.date_div} ${direction === 'rtl' ? styles.date_div_rtl : ''}`}
                onClick={handleOpenPicker}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleOpenPicker();
                    }
                }}
            >
                <input
                    ref={inputRef}
                    aria-label="date"
                    type="date"
                    name="pickup-date"
                    className={direction === "rtl" ? styles.rtl : ""}
                    value={splitedDate || ""}
                    min={minDate}
                    onChange={(e) =>
                        onChangeSetDateTimeHandler({
                            value: e.target.value,
                            hourOrMinute: "date",
                            journeyType: index
                        })
                    }
                />

                <span
                    className={`${styles.date_display_text} ${isEmpty ? styles.date_placeholder : ""} ${direction === "rtl" ? styles.rtl : ""}`}
                >
                    {displayedDate}
                </span>

                <i
                    className={`fa-solid fa-calendar-days ${styles.date_picker_icon} ${islinknamecomponent ? styles.date_picker_icon_on_linkame : ""}`}
                ></i>
            </div>
        </div>
    );
};

export default InputDateComponent;