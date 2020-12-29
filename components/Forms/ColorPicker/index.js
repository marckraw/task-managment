// TODO: Implement proper behaviour with react controlled inputs
const ColorPicker = () => {
    return (
        <>
            <label htmlFor="favcolor">Select your favorite color:</label>
            <input type="color" id="favcolor" name="favcolor" value="#e66465" />
        </>
    )
}

export default ColorPicker
