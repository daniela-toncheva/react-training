import React from "react";

function Table({ data, config, keyFn }) {
	const renderedHeaders = config.map((columnConf) => {
		return <th key={columnConf.label}>{columnConf.label}</th>;
	});

	const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((cell) => {
            return <td key={cell.label}>{cell.render(rowData)}</td>
        } )
		return (
			<tr key={keyFn(rowData)}>
                {renderedCells}
			</tr>
		);
	});

	return (
		<div className="table-responsive mt-3">
			<table className="table table-bordered">
				<thead className="table-light">
					<tr>{renderedHeaders}</tr>
				</thead>
				<tbody>{renderedRows}</tbody>
			</table>
		</div>
	);
}

export default Table;
