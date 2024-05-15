import React, { useState } from "react";
import Table from "./Table";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

function SortableTable(props) {
	const { config, data } = props;
	const [sortOrder, setSortOrder] = useState(null);
	const [sortBy, setSortBy] = useState(null);

	const handleClick = (label) => {
        if(sortBy && label !== sortBy) {
            setSortBy('asc');
            setSortBy(label);
            return;
        }

		if (sortOrder === null) {
			setSortOrder("asc");
			setSortBy(label);
		} else if (sortOrder === "asc") {
			setSortOrder("desc");
			setSortBy(label);
		} else if (sortOrder === "desc") {
			setSortOrder(null);
			setSortBy(null);
		}
	};
	const updatedConfig = config.map((column) => {
		if (!column.sortValue) {
			return column;
		}

		return {
			...column,
			header: () => (
				<th style={{cursor: "pointer"}} onClick={() => handleClick(column.label)}>
					<div className="d-flex align-items-center justify-content-center">
						{getIcons(column.label, sortBy, sortOrder)}
						{column.label}
					</div>
				</th>
			),
		};
	});

	let sortedData = data;
	if (sortBy && sortOrder) {
		const { sortValue } = config.find((column) => column.label === sortBy);
		sortedData = [...data].sort((a, b) => {
			const valueA = sortValue(a);
			const valueB = sortValue(b);

			const reverseOrder = sortOrder === "asc" ? 1 : -1;
			if (typeof valueA === "string") {
				return valueA.localeCompare(valueB) * reverseOrder;
			} else {
				return (valueA - valueB) * reverseOrder;
			}
		});
	}

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
