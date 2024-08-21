import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import { Dashboard } from "../components/Dashboard";
import { DashboardAdmins } from "../components/DashboardAdmins";
import { Panels } from "../components/Panels";

export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/dashboard-admin" element={<DashboardAdmins />} />
            <Route exact path="/panel" element={<Panels />} />
            <Route exact path="*" element={<Navigate to='/' replace />} />
        </Routes>
    )
}