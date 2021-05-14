import { Spinner } from 'react-bootstrap';
const SelectedDataTable = ({ filteredData, label, isLoading }) => {
    if (isLoading) {
        return (<div className="text-center">
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="danger" />
            <Spinner animation="border" variant="warning" />
            <Spinner animation="border" variant="info" />
            <Spinner animation="border" variant="dark" />
        </div>)
    }
    return (
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 table-responsive tableBox">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 tableLabel">{label}</div>
            {
                filteredData.length > 0 &&
                (<table className="table table-striped table-bordered col-lg-12 col-md-12 col-sm-12 col-xs-12" id="tbl">
                    <thead className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <tr className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                            <th >Sr. No.</th>
                            <th >Center</th>
                            <th >Pincode</th>
                            {/* <th colSpan="4">Capacity</th> */}
                            <th >Available Dose</th>
                        </tr>
                        {/* <tr className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                            <th ></th>
                            <th ></th>
                            <th ></th>
                            <th >Age</th>
                            <th >Vaccine</th>
                            <th >Date</th>
                            <th >Available Capacity</th>
                            <th ></th>
                        </tr> */}
                    </thead>
                    <tbody>
                        {filteredData.map((data, index) => {
                            const sessionData = data.sessions
                            return (
                                <tr key={index} className="text-center">
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.pincode}</td>
                                    {/* <td>
                                        {
                                            sessionData.map((session, ind) => {
                                                return (
                                                    <div key={session.session_id}>
                                                        <tr>{session.min_age_limit}</tr>
                                                    </div>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        {
                                            sessionData.map((session, ind) => {
                                                return (
                                                    <div key={session.session_id}>
                                                        <tr>{session.vaccine}</tr>
                                                    </div>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        {
                                            sessionData.map((session, ind) => {
                                                return (
                                                    <div key={session.session_id}>
                                                        <tr>{session.date}</tr>
                                                    </div>
                                                )
                                            })
                                        }
                                    </td> 
                                    <td>
                                        {
                                            sessionData.map((session, ind) => {
                                                return (
                                                    <div key={session.session_id}>

                                                        <tr>{session.available_capacity}</tr>
                                                    </div>
                                                )
                                            })
                                        }
                                    </td>*/}
                                    <td>{data.total_available_capacity}</td>
                                </tr>)
                        })
                        }
                    </tbody>
                </table>)
            }
        </div>
    )
}

export default SelectedDataTable