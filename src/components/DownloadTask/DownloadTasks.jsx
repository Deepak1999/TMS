import React, { useState } from 'react';

const DownloadTasks = () => {

    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');

    const generateYears = () => {
        const currentYear = new Date().getFullYear();
        let years = [];
        for (let i = currentYear - 1; i <= currentYear + 5; i++) {
            years.push(i);
        }
        return years;
    };

    const generateMonths = () => {
        return [
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ];
    };

    return (
        <main id="main" className="main">
            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Download Your Tasks</h5>
                                        <form>
                                            <div className="row mb-3">
                                                <label htmlFor="year" className="col-sm-2 col-form-label">Year</label>
                                                <div className="col-sm-10">
                                                    <select
                                                        id="year"
                                                        className="form-select"
                                                        value={year}
                                                        onChange={(e) => setYear(e.target.value)}
                                                    >
                                                        <option value="">Select Year</option>
                                                        {generateYears().map((yearOption) => (
                                                            <option key={yearOption} value={yearOption}>
                                                                {yearOption}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label htmlFor="month" className="col-sm-2 col-form-label">Month</label>
                                                <div className="col-sm-10">
                                                    <select
                                                        id="month"
                                                        className="form-select"
                                                        value={month}
                                                        onChange={(e) => setMonth(e.target.value)}
                                                    >
                                                        <option value="">Select Month</option>
                                                        {generateMonths().map((monthOption, index) => (
                                                            <option key={index} value={index + 1}>
                                                                {monthOption}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label htmlFor="inputText" className="col-sm-2 col-form-label">Project Status</label>
                                                <div className="col-sm-10">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Select Status</option>
                                                        <option value="1">In progress</option>
                                                        <option value="2">Hold</option>
                                                        <option value="3">Complete</option>
                                                        <option value="4">Not Started Yet</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-sm-12 d-flex justify-content-center">
                                                    <button type="submit" className="btn btn-primary">Download Task</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default DownloadTasks;
