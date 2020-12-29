// Need implementation, but it would be nice to use datalist element for autocomplete forms
const DataList = () => {
    return (
        <>
            <input list="animals" name="animal" id="animal"/>
            <datalist id="animals">
                <option value="Cat"/>
                <option value="Dog"/>
                <option value="Chicken"/>
                <option value="Cow"/>
                <option value="Pig"/>
            </datalist>
        </>
    )
}

export default DataList
