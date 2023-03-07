import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './typeDefs';

export interface DataTableProps<T> {
	columns: Header[];
	rows: T[];
	footbar?: boolean;
	linked?: boolean;
}

const DataTable: React.FC<DataTableProps<any>> = (props) => {
	const navigate = useNavigate();

	// const itemClicked = (id: any) => {
	// 	navigate(id);
	// }
	return (
		<table id="dataTable" className="table table-striped table-bordered" cellSpacing={0} width="100%">
			<thead>
				<tr>
					{
						props.columns.length > 0 && props.columns.map((column, index) => {
							return <th key={index}>{column.name ?? ""}</th>
						})
					}
				</tr>
			</thead>
			{
				props.footbar &&
				<tfoot>
					<tr>
						{
							props.columns.length > 0 && props.columns.map((column, index) => {
								return <th key={index}>{column.name ?? ""}</th>
							})
						}
					</tr>
				</tfoot>
			}
			<tbody>
				{
					props.rows.length > 0 && props.columns.length > 0 && props.rows.map(row => {
						return (
							<tr style={{ cursor: props.linked ? "Pointer" : "" }} key={row.id} onClick={() => props.linked && navigate(row.id)}>
								{
									props.columns.map(columns => {
										return <td key={columns.id}>{row[columns.id]}</td>
									})
								}
							</tr>
						)
					})
				}
			</tbody>
		</table>
	);
};

export default DataTable;

