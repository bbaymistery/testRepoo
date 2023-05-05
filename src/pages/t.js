
const AccountRegister = (props) => {
    const [inpValue, setInpValue] = useState('')

    const handleChange = (e) => {
        setInpValue(e.target.value)
    }
    return (
        <>
            <input type="text" value={inpValue} onChange={handleChange} />
            <p dangerouslySetInnerHTML={{ __html: appData?.words["strAppNoteTwoAddAccountForm"].replace("_AMOUNT_", `<input value=${inpValue} type="text" />`) }}></p>
        </>
    )
}

export default AccountRegister