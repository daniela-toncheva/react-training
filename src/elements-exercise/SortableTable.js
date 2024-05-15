import React from "react";
import Table from "./Table";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
	const { config, data } = props;
	const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(data, config);

	const updatedConfig = config.map((column) => {
		if (!column.sortValue) {
			return column;
		}

		return {
			...column,
			header: () => (
				<th
					style={{ cursor: "pointer" }}
					onClick={() => setSortColumn(column.label)}
				>
					<div className="d-flex align-items-center justify-content-center">
						{getIcons(column.label, sortBy, sortOrder)}
						{column.label}
					</div>
				</th>
			),
		};
	});

	return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
	const icons = (
		<span className="d-flex flex-column">
			<GoTriangleUp /> <GoTriangleDown />
		</span>
	);
	if (label !== sortBy) {
		return icons;
	}

	switch (sortOrder) {
		case "asc":
			return (
				<div>
					<GoTriangleUp />
				</div>
			);
		case "desc":
			return (
				<div>
					<GoTriangleDown />
				</div>
			);
		default:
			return icons;
	}
}

export default SortableTable;
