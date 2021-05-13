import './style.css';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import Select from 'react-select';
import addNotification from 'react-push-notification';
import SelectedDataTable from './SelectedDataTable'
import Template from './Template'

const Moment = require("moment")

function App() {
  const [stateData, setStateData] = useState([])
  const [districtData, setDistrictData] = useState([])
  const [pinCodeArray, setPinCodeArray] = useState([])
  const [selectedPinCodes, setSelectedPincodes] = useState([])
  const [selectedState, setSelectedState] = useState([])
  const [centerData, setCenterData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [filteredPincodeData, setFilteredPincodeData] = useState([])
  const [keepAPICalling, setKeepAPICalling] = useState()
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState(false)
  const [selectedDistrict, setSelectedDistrict] = useState([])

  const selectDataForAge = (data, age) => {
    if (!age) {
      return data
    }
    return data.filter(({ min_age_limit }) => min_age_limit === age);
  };


  const sendNotificationForSelected = (pincode, name, filteredPinCodes) => {
    if (filteredPinCodes.includes(pincode)) {
      const soundId = document.getElementById("notif_sound");
      if (soundId) {
        soundId.play();
      }
      addNotification({
        title: pincode,
        subtitle: name,
        message: name,
        theme: "darkblue",
        silent: false,
        native: true
      });
    }
  }

  const getSelectedPincodeData = (centers, selectedPinCodes) => {
    setLoading(true)
    const { selectedOption } = selectedPinCodes
    const filteredPinCodes = [];
    selectedOption && selectedOption.length > 0 && selectedOption.filter((element, i) => {
      filteredPinCodes.push(element.value)
    })
    const filteredData = centers.reduce((newData, { name, pincode, sessions }) => {
      if (filteredPinCodes.includes(pincode)) {
        const selectedAgeData = selectDataForAge(sessions);
        if (selectedAgeData.length) {
          const totalVaccine = selectedAgeData.reduce((sum, { available_capacity }) => sum + available_capacity, 0);
          if (totalVaccine) {
            sendNotificationForSelected(pincode, name, filteredPinCodes);
          }
          return [
            ...newData,
            {
              name,
              pincode,
              sessions,
              total_available_capacity: totalVaccine
            }
          ];
        }
        return newData;
      }
      return newData;
    }, []);
    setFilteredPincodeData(filteredData)
    setLoading(false)
  }

  const getOtherData = (centers) => {
    const filteredData = centers.reduce((newData, { name, pincode, sessions }) => {
      const selectedAgeData = selectDataForAge(sessions);
      if (selectedAgeData.length) {
        const totalVaccine = selectedAgeData.reduce((sum, { available_capacity }) => sum + available_capacity, 0);
        return [
          ...newData,
          {
            name,
            pincode,
            sessions,
            total_available_capacity: totalVaccine
          }
        ];
      }
      return newData;
    }, []);
    setFilteredData(filteredData)
  }

  const getDistrictPinCodes = (centers) => {
    const array = []
    centers.map((element) => {
      return array.push({ 'value': element.pincode, label: element.pincode })
    })
    setPinCodeArray(array)
  }
  const handleChange = selectedOption => {
    setSelectedPincodes({ selectedOption });
  };

  const handleChangeState = selectedOption => {
    setSelectedState({ selectedOption });
    selectState(selectedOption.value)
  };

  const handleChangeDistrict = selectedOption => {
    setSelectedDistrict(selectedOption)
    checkAPI(selectedOption.value, selectedPinCodes.selectedOption)
  };

  const checkAPI = (districtId) => {
    setLoading(true)
    const today = Moment(new Date()).format("DD-MM-YYYY");
    fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=${districtId}&date=${today}`)
      .then(resp => resp.json())
      .then(data => {
        const { centers } = data
        if (centers.length > 0) {
          setCenterData(centers)
          getDistrictPinCodes(centers)
          getOtherData(centers)
          setLoading(false)
        }
      }).catch(() => {
        setApiError(true)
        setLoading(false)
      });
  };
  useEffect(() => {
    fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/states`)
      .then(resp => resp.json())
      .then(data => {
        const { states } = data
        const array = []
        states.map((statesData) => {
          array.push({ 'value': statesData.state_id, label: statesData.state_name })
        })
        setStateData(array)
      });
  }, [])

  const selectState = (stateId) => {
    fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`)
      .then(resp => resp.json())
      .then(data => {
        const { districts } = data
        const array = []
        districts.map((districtData) => {
          return array.push({ 'value': districtData.district_id, label: districtData.district_name })
        })
        setDistrictData(array)
      });
  }

  const startTracking = () => {
    if (keepAPICalling) { clearInterval(keepAPICalling) }
    setKeepAPICalling(setInterval(() => {
      const today = Moment(new Date()).format("DD-MM-YYYY");
      const districtId = selectedDistrict.value;
      fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=${districtId}&date=${today}`)
      .then(resp => resp.json())
      .then(data => {
        const { centers } = data
        if (centers.length > 0) {
          getSelectedPincodeData(centers, selectedPinCodes)
        }
      })
     
    }, 2000));
  }

  const stopTracking = () => {
    if (keepAPICalling) { clearInterval(keepAPICalling) }
  }

  return (
    <div className="App " >
      <header className="App-header col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h3>Welcome To Vaccine Notification !</h3>
      </header>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <Template />
      </div>
      <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12 selectBox">
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row row-no-padding">
            <label>Select State</label>
          </div>
          <Select
            value={selectedState.state_id}
            onChange={handleChangeState}
            options={stateData}
          />
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row row-no-padding">
            <label>Select City/ District</label>
          </div>
          <Select
            value={selectedState.district_id}
            onChange={handleChangeDistrict}
            options={districtData}
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row row-no-padding">
            <label>Select Nearest Pincodes</label>
          </div>
          <Select
            value={selectedPinCodes.pincode}
            onChange={handleChange}
            options={pinCodeArray}
            isMulti
          />
        </div>
        <div className="text-center">
          <div className="">
            <label>{' '}</label>
          </div>
          <div className="btn"><Button onClick={startTracking} variant="primary">Track</Button></div>
        </div>
        <div className="text-center">
          <div className="">
            <label>{' '}</label>
          </div>
          <div className="btn"><Button onClick={stopTracking} variant="primary">Stop Notification</Button></div>
        </div>
      </div>
      {apiError && filteredData.length === 0 ?
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <label className="text-danger">Data not available at the moment!</label>
        </div>
        :
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          {filteredPincodeData.length > 0 && (<SelectedDataTable filteredData={filteredPincodeData} label={`Filtered Data`} isLoading={loading} />)}
          {filteredData.length > 0 && (<SelectedDataTable filteredData={filteredData} label={`Other Data`} isLoading={loading} />)}
        </div>
      }
    </div>
  );
}

export default App;
