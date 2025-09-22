import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const FlightWaitingTimeContent = () => {

    const { appData } = useSelector(state => state.initialReducer)
    const [content, setContent] = useState("")

    useEffect(() => {
        setContent(appData?.words["seParkingNote"]);
    }, [appData])

    return (
        <div >
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}

export default FlightWaitingTimeContent