const Template = () => {
    return (
        <>
            <p className="template">
                Just thought of making a small application which can be run from any machine without having to install any additional software. It will display real-time Vaccine Availability on Selected pincodes as well as other nearby pincodes.

                Please note - this provide very limited functionality. I just developed it to help people find vaccines more easily.
            </p>
            <p className="template">
                All you have to do is -
                </p>
            <p className="template">
                <ul>
                    <li>Step 1 : Select State. It shall show you the list of cities in next dropdown.</li>
                    <li>Step 2 : Select City/ District. It shall show you the list pincodes where the vaccines are currently available in that district.</li>
                    <li>Step 3 : Select multiple pincodes that is closest to your location.</li>
                    <li>Step 4 : Hit 'Track' button. It should start fetching the data from Cowin website every 2 seconds. and the table will get reflected in real-time and notification with sound will pop up</li>
                    <li>Step 5 : Hit 'Stop Notification' button. It should stop notification pop-up and sound.</li>
                </ul>
            </p>
            <p className="template">
                *Note -
                Notification pop-up will only appear for selected pincode data. But user will be able to see both filtered and unfiltered data.
            </p>
        </>
    )
}

export default Template
