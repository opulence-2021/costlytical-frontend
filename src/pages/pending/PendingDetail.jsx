import React from 'react';
//styles
import './PendingDetail.css';
//Components
import TableDetail from '../../components/TableDetail';
import SideBarPending from "./SideBarPending";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CustomButton from '../../components/CustomButton'
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'


const PendingDetail = () => {

    const list = [{ modelName: "Base v2", material: "PLA+", layerHeight: "0.28cm", infill: "20", subTotal: "1000", quantity: "01", lineTotal: "1000", score: 75 },
    { modelName: "Base v2", material: "PLA+", layerHeight: "0.28cm", infill: "20", subTotal: "250", quantity: "02", lineTotal: "500", score: 75 }]

    const handleConfirm = () => {
        Swal.fire(
            'Success!',
            'Order Request Submitted!',
            'success'
        )
    }
    const handleDecline = () => {
        Swal.fire({
            icon: 'error',
            title: 'Declined',
            text: 'Order Declined!',
        })
    }

    return (
        <div className="container">
            <div className='container__one'>
                <div className="nav">
                    <SideBarPending />
                </div>
                <div className="container__body">
                    <div className="container__body__title">
                        <div>
                            <h1>Water Pump</h1>
                            <p className="title__created">Created By: Jhon Harry</p>
                        </div>
                        <div className="title__estimated">
                            <h1>Project Id: 001</h1>
                        </div>
                        <div>
                            <h1 className="title__value">Total Value: Rs.1,500</h1>
                        </div>
                    </div>
                    <div className="table__body">
                        <TableDetail list={list} />
                    </div>
                    <div className="container__decline">
                        <button onClick={handleDecline} className='button__decline'>Decline Offer</button>
                    </div>
                    <div className="container__delivery">
                        <div className="box__store">
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Store pick-up" />
                        </div>
                        <div className="box__input">
                            <div className="box__option">
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Order delivered to your location" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Use address in the Profile" />
                            </div>
                            <h3 className='title__location'>Location</h3>
                            <TextField sx={{ marginRight: 4 }} id="addressLine1" label="Address Line 1" variant="standard" />
                            <TextField sx={{ marginRight: 4 }} id="addressLine2" label="Address Line 2" variant="standard" />
                            <TextField sx={{ marginRight: 4 }} id="city" label="City" variant="standard" />
                            <TextField sx={{ marginRight: 4 }} id="country" label="Country" variant="standard" />
                        </div>
                        <div className="container__confirm">
                            <button onClick={() => handleConfirm()} className='btn__confirm'>Confirm Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default PendingDetail;