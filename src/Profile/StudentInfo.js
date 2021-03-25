import React from "react";
// import "./view.css";

const StudentInfo = (props) => {
	return (<>
		<div className="row">
			<div className="col-sm-3">
				<h6 className="mb-0">{props.field}</h6>
			</div>
			<div className="col-sm-9 text-secondary">{props.value}</div>

		</div>
        <hr />{" "}

        </>
	);
};

export default StudentInfo;
