import React, { useState } from "react";

function Imageadd() {

    const [fileInput, setInput] = useState("");
    const [buttonOperation, setButtonOperation] = useState("");

    const getInputValue = (e) => {
        const inputValue = e.target;
        const fileName = inputValue.files[0].name;
        const fileType = inputValue.files[0].type;
        const type = fileType.split('/')[1];
        if (fileName && (type === 'png' || type === 'jpeg')) {
            console.log(fileType.split('/')[1]);
            setInput(fileName);
            setButtonOperation('');

        } else {
            
            setInput('Please select only "PNG" & JPEG File');
            setButtonOperation('disable');

        }

    };
    // console.log(fileInput);


    function formSubmit(e) {
        e.preventDefault();
        console.log(fileInput);
        setInput('');
    }

    return (
        <div className="row pt-3 image-add">
            <div className="col-4 m-auto">

                <form onSubmit={formSubmit} className="text-center">
                    <h5 className="imageName" id="imageName">{fileInput && ` "${fileInput}" selected`}</h5>

                    <input type="file" hidden name="image" id="image-section" onChange={getInputValue} />
                    <label htmlFor="image-section"><i className="fa-solid fa-plus"></i></label><br />
                    <button type="submit" className={`btn btn-success mt-2 ${buttonOperation}`}>
                        upload
                    </button>
                </form>

            </div>
        </div>

    );

}

export default Imageadd;