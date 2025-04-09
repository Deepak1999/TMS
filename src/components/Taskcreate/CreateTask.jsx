import React from 'react'

const CreateTask = () => {
    return (
        <main id="main" className="main">
            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Create Your Task</h5>
                                        <form>
                                            <div className="row mb-3">
                                                <label className="col-sm-2 col-form-label">Project Catogary</label>
                                                <div className="col-sm-10">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Select Catogary</option>
                                                        <option value="1">Development</option>
                                                        <option value="2">Bug Fixes</option>
                                                        <option value="3">Testing / QA</option>
                                                        <option value="4">Documentation</option>
                                                        <option value="5">Design UI/UX</option>
                                                        <option value="6">Client Communication</option>
                                                        <option value="7">Meetings / Planning</option>
                                                        <option value="8">Deployment</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label for="inputText" className="col-sm-2 col-form-label">Project Name</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label className="col-sm-2 col-form-label">Project Status</label>
                                                <div className="col-sm-10">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Select Status</option>
                                                        <option value="1">In progress</option>
                                                        <option value="2">Hold</option>
                                                        <option value="3">Complete</option>
                                                        <option value="4">Not Start Yet</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label for="inputDate" className="col-sm-2 col-form-label">Project Start Date</label>
                                                <div className="col-sm-10">
                                                    <input type="date" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label for="inputPassword" className="col-sm-2 col-form-label">Project Description</label>
                                                <div className="col-sm-10">
                                                    <textarea className="form-control" style={{ height: "100px" }}></textarea>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label className="col-sm-2 col-form-label">Priority</label>
                                                <div className="col-sm-10">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Select Priority</option>
                                                        <option value="1">High</option>
                                                        <option value="2">Normal</option>
                                                        <option value="3">Low</option>
                                                        <option value="4">Critical</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label for="inputText" className="col-sm-2 col-form-label">Project Additional Comments</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label for="inputDate" className="col-sm-2 col-form-label">Project Complete Date</label>
                                                <div className="col-sm-10">
                                                    <input type="date" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary" style={{ marginRight: "15px" }} >Submit</button>
                                                <button type="reset" className="btn btn-secondary">Reset</button>
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
    )
}

export default CreateTask