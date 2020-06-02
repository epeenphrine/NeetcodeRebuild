import React from 'react'

export default function Search() {
    return (
        <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button type="button" className="btn btn-outline-secondary">Action</button>
                    <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div role="separator" className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
                <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
            </div>

            <div className="input-group">
                <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                <div className="input-group-append">
                    <button type="button" className="btn btn-outline-secondary">Action</button>
                    <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div role="separator" className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
