import { all } from "redux-saga/effects";
// import { userSaga } from "./user";
// import { patientDataSaga } from "./patientScore";

//root saga
export default function* rootSaga() {
    yield all([
        // userSaga(),
        // patientDataSaga()
    ]);
}
