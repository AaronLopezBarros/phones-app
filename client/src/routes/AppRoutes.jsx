import { Route, Routes } from "react-router-dom";
import PhoneDetailComponent from "../components/PhoneDetailComponent/PhoneDetailComponent";

const AppRoutes = (props) => {
    const {phonesData} = props
    return (
        <Routes >
            <Route path="/phone-details/:id" element={<PhoneDetailComponent phonesData={phonesData}/>} />
        </Routes>
    )
}

export default AppRoutes;