import axios from 'axios'
import { useState, useEffect } from "react";
import NavBar from '../components/NavBar';
import Sidebar from './Sidebar';
import ProjectBlueprint from '../components/ProjectBlueprint';
const DashboardLayout = ({children, consultant=true}) => {
    const api = global.config.API
    return(
        <div class="sq-dashboard-portal">
            <div class="sq-body">
                <NavBar/>
                <div class="sq-content h-100 ">
                    <ProjectBlueprint/>
                </div>
            </div>
            <Sidebar/>
        </div>
    )
}

export default DashboardLayout;