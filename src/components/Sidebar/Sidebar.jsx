import React from 'react'

const Sidebar = () => {
    return (
        <aside id="sidebar" class="sidebar">

            <ul class="sidebar-nav" id="sidebar-nav">

                <li class="nav-item">
                    <a class="nav-link">
                        <i class="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                        <i class="bi bi-menu-button-wide"></i><span>Create Task</span>
                        {/* <i class="bi bi-chevron-down ms-auto"></i> */}
                    </a>
                    {/* <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="components-alerts.html">
                                <i class="bi bi-circle"></i><span>Alerts</span>
                            </a>
                        </li>
                    </ul> */}
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                        <i class="bi bi-journal-text"></i><span>View Tasks</span>
                        {/* <i class="bi bi-chevron-down ms-auto"></i> */}
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                        <i class="bi bi-layout-text-window-reverse"></i><span>Download Tasks</span>
                        {/* <i class="bi bi-chevron-down ms-auto"></i> */}
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                        <i class="bi bi-bar-chart"></i><span>Feedback</span>
                        {/* <i class="bi bi-chevron-down ms-auto"></i> */}
                    </a>
                </li>
            </ul>

        </aside>
    )
}

export default Sidebar