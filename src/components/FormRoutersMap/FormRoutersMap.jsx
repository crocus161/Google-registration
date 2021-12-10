import React from 'react'
import Step1 from '../FormSteps/Step1/Step1';
import Step2 from '../FormSteps/Step2/Step2';
import Step3 from '../FormSteps/Step3/Step3';
import Step4 from '../FormSteps/Step4/Step4';
import Result from '../FormSteps/Result';
import { Navigate, Route, Routes } from 'react-router'

const FormRoutersMap = () => {
    return (
        <>
            <Routes>
                <Route path='/form/step1' element={<Step1 />} exact />
                <Route path='/form/step2' element={<Step2 />} exact />
                <Route path='/form/step3' element={<Step3 />} exact />
                <Route path='/form/step4' element={<Step4/>} exact />
                <Route path='/form/result' element={<Result />} exact />

                <Route path='/form' element={<Navigate to='/form/step1' />} />
            </Routes>
        </>
    )
}

export default FormRoutersMap
