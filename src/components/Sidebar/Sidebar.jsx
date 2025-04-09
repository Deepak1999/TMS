import React from 'react'

const Sidebar = () => {
    return (
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <a className="nav-link">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                        <i className="bi bi-menu-button-wide"></i><span>Create Task</span>
                        {/* <i className="bi bi-chevron-down ms-auto"></i> */}
                    </a>
                    {/* <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="components-alerts.html">
                                <i className="bi bi-circle"></i><span>Alerts</span>
                            </a>
                        </li>
                    </ul> */}
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse">
                        <i className="bi bi-journal-text"></i><span>View Tasks</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse">
                        <i className="bi bi-layout-text-window-reverse"></i><span>Download Tasks</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse">
                        <i className="bi bi-bar-chart"></i><span>Feedback</span>
                    </a>
                </li>
            </ul>

        </aside>
    )
}

export default Sidebar