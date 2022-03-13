import React from 'react';
//styles
import './PendingDetail.css';
//Components
import ProgressCircular from '../../components/ProgressCircular';
import TableDetail from '../../components/TableDetail';
import NewSideBar from "../newPage/NewSideBar";
const PendingDetail = () => {
    const list = [{ modelName: "Base v2", material: "PLA+", layerHeight: "0.28cm", infill: "20", subTotal: "1000", quantity: "01", lineTotal: "1000", score: 75 },
    { modelName: "Base v2", material: "PLA+", layerHeight: "0.28cm", infill: "20", subTotal: "250", quantity: "02", lineTotal: "500", score: 75 }]

    return (
        <div className='container'>
            <div className="nav">
                <NewSideBar />
            </div>
            <div className="container__body">
                <div className="container__body__title">
                    <div>
                        <h1>Water Pump</h1>
                        <p className="title__created">Created By: Jhon Harry</p>
                    </div>
                    <div className="title__estimated">
                        <h1>Estimate No: 001</h1>
                    </div>
                    <div>
                        <h1 className="title__value">Total Value: Rs.1,500</h1>
                    </div>
                    <div className="title__progress">
                        <ProgressCircular progress={75} />
                    </div>
                </div>
                <div className="table__body">
                    <TableDetail list={list} />
                </div>
            </div>
        </div>
    )
}
export default PendingDetail;