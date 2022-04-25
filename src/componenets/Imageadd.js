import React, { useState } from "react";

function Imageadd() {

    const [fileInput, setInput] = useState({
        fileName: '',
        fileSize: 0,
        className: ''
    });
    const [buttonOperation, setButtonOperation] = useState("");
    const dimension = {
        width: 0,
        height: 0
    }

    const [getDim, setDim] = useState(dimension);

    const getInputValue = (e) => {
        let img = new Image();
        const inputValue = e.target;
        const fileName = inputValue.files[0].name;
        const fileType = inputValue.files[0].type;
        const fileSize = inputValue.files[0].size;
        img.src = window.URL.createObjectURL(e.target.files[0])
        img.onload = () => {
            let height = img.height;
            let width = img.width;

            setDim({
                width: width,
                height: height

            })
        }
        console.log(fileSize);
        const type = fileType.split('/')[1];
        if (fileName && (type === 'png' || type === 'jpeg')) {
            setInput({ ...fileInput, fileName: fileName, fileSize: fileSize })

            setButtonOperation('');

        } else {

            setInput({
                fileName: 'Wrong type file',
                fileSize: 0,
                className: ''

            });
            setButtonOperation('disable');

        }

    };




    function formSubmit(e) {
        e.preventDefault();

        if (fileInput.fileSize === 0) {
            setInput({ ...fileInput, fileName: "Wrong option" });

        } else {
            if (getDim.width > getDim.height) {
                setInput({ ...fileInput, className: "wide" });
                console.log(typeof getDim.width, "Wide");

            } else {

                setInput({ ...fileInput, className: "tall" });
                console.log(typeof getDim.width, "tall");



            }


        }
        console.log(fileInput);
        console.log(getDim);
    }

    return (
        <div className="row pt-3 image-add">
            <div className="col-4 m-auto">

                <form onSubmit={formSubmit} className="text-center">
                    <h5 className="imageName" id="imageName">{fileInput.fileName && ` "${fileInput.fileName}" selected`}</h5>

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