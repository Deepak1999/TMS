import React, { useState } from 'react';
import { useTable } from 'react-table';

const ViewTasks = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const pageSize = 5;

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if ((currentPage + 1) * pageSize < data.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleFirstPage = () => {
        setCurrentPage(0);
    };

    const handleLastPage = () => {
        setCurrentPage(Math.floor(data.length / pageSize));
    };

    const data = React.useMemo(
        () => [
            { category: 'Deployment', name: 'Sales Lead', status: 'In Progress', startDate: '2016-05-25', description: 'Getting some error while merge code', priority: 'Low', comments: 'Please assign someone to help', completeDate: '2016-05-29' },
            { category: 'Deployment', name: 'Sales Lead', status: 'In Progress', startDate: '2016-05-25', description: 'Getting some error while merge code', priority: 'Low', comments: 'Please assign someone to help', completeDate: '2016-05-29' },
            { category: 'Deployment', name: 'Sales Lead', status: 'In Progress', startDate: '2016-05-25', description: 'Getting some error while merge code', priority: 'Low', comments: 'Please assign someone to help', completeDate: '2016-05-29' },
            { category: 'Deployment', name: 'Sales Lead', status: 'In Progress', startDate: '2016-05-25', description: 'Getting some error while merge code', priority: 'Low', comments: 'Please assign someone to help', completeDate: '2016-05-29' },
            { category: 'Deployment', name: 'Sales Lead', status: 'In Progress', startDate: '2016-05-25', description: 'Getting some error while merge code', priority: 'Low', comments: 'Please assign someone to help', completeDate: '2016-05-29' },
            { category: 'Deployment', name: 'Sales Lead', status: 'In Progress', startDate: '2016-05-25', description: 'Getting some error while merge code', priority: 'Low', comments: 'Please assign someone to help', completeDate: '2016-05-29' },
            { category: 'Deployment', name: 'Sales Lead', status: 'In Progress', startDate: '2016-05-25', description: 'Getting some error while merge code', priority: 'Low', comments: 'Please assign someone to help', completeDate: '2016-05-29' },
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            { Header: 'Project Category', accessor: 'category' },
            { Header: 'Project Name', accessor: 'name' },
            { Header: 'Project Status', accessor: 'status' },
            { Header: 'Project Start Date', accessor: 'startDate' },
            { Header: 'Project Description', accessor: 'description' },
            { Header: 'Priority', accessor: 'priority' },
            { Header: 'Project Additional Comments', accessor: 'comments' },
            { Header: 'Project Complete Date', accessor: 'completeDate' },
        ],
        []
    );

    const currentData = data.length > 0 ? data.slice(currentPage * pageSize, (currentPage + 1) * pageSize) : [];

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data: currentData,
    });

    if (!currentData || currentData.length === 0) {
        return <div>No data available for the table.</div>;
    }

    return (
        <main id="main" className="main">
            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">View Tasks</h5>

                                        <table className="table table-striped" {...getTableProps()}>
                                            <thead>
                                                {headerGroups.map((headerGroup) => (
                                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                                        {headerGroup.headers.map((column) => (
                                                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </thead>
                                            <tbody {...getTableBodyProps()}>
                                                {rows.map((row) => {
                                                    prepareRow(row);
                                                    return (
                                                        <tr {...row.getRowProps()}>
                                                            {row.cells.map((cell) => (
                                                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                            ))}
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>

                                    </div>

                                    <div className="d-flex justify-content-between mt-3">
                                        <button onClick={handleFirstPage} disabled={currentPage === 0} className="btn btn-secondary">
                                            First
                                        </button>
                                        <button onClick={handlePreviousPage} disabled={currentPage === 0} className="btn btn-secondary">
                                            Previous
                                        </button>
                                        <span>
                                            Page {currentPage + 1} of {Math.ceil(data.length / pageSize)}
                                        </span>
                                        <button onClick={handleNextPage} disabled={(currentPage + 1) * pageSize >= data.length} className="btn btn-secondary">
                                            Next
                                        </button>
                                        <button onClick={handleLastPage} disabled={(currentPage + 1) * pageSize >= data.length} className="btn btn-secondary">
                                            Last
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ViewTasks;
