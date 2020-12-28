// TODO: Implement meter functionality
const Meter = () => {
    return (
        <>
            <label htmlFor="disk_g">Disk usage G:</label>
            <meter id="disk_g" value="2" min="0" max="10">2 out of 10</meter>
            <br/>
            <label htmlFor="disk_h">Disk usage H:</label>
            <meter id="disk_h" value="0.7">70%</meter>
        </>
    )
}

export default Meter
