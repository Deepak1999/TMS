import React, { useState } from 'react'
import { useTable } from 'react-table';

const Feedbacks = () => {

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
            { name: 'Sales Lead', status: 'In Progress', status: '5', ratingGivenBy: 'Deep', description: 'Getting some error while merge code' },
            { name: 'Sales Lead', status: 'In Progress', status: '4', ratingGivenBy: 'Deep', description: 'Getting some error while merge code' },
            { name: 'Sales Lead', status: 'In Progress', status: '1', ratingGivenBy: 'Deep', description: 'Getting some error while merge code' },
            { name: 'Sales Lead', status: 'In Progress', status: '3', ratingGivenBy: 'Deep', description: 'Getting some error while merge code' },
            { name: 'Sales Lead', status: 'In Progress', status: '3', ratingGivenBy: 'Deep', description: 'Getting some error while merge code' },
            { name: 'Sales Lead', status: 'In Progress', status: '2', ratingGivenBy: 'Deep', description: 'Getting some error while merge code' },
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            { Header: 'Project Name', accessor: 'name' },
            { Header: 'Project Rating', accessor: 'status' },
            { Header: 'Rating Given By', accessor: 'ratingGivenBy' },
            { Header: 'Project Comments', accessor: 'description' },

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
                                        <h5 className="card-title">Feedback</h5>

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

export default Feedbacks