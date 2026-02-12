
import React, { useMemo, useState, useCallback, useRef } from 'react';
import './EmployeeGrid.css';
import { AgGridReact } from 'ag-grid-react';
import {
    ModuleRegistry,
    AllCommunityModule
} from 'ag-grid-community';
import { employees } from '../data/employees';
import { formatCurrency, formatDate, getRatingColor } from '../utils/formatters';

// Import AG Grid Styles
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

ModuleRegistry.registerModules([AllCommunityModule]);

const EmployeeGrid = () => {
    const gridRef = useRef(null);
    const [globalFilter, setGlobalFilter] = useState('');

    // Column Definitions
    const colDefs = useMemo(() => [
        {
            headerName: 'Employee',
            children: [
                {
                    headerName: 'Name',
                    valueGetter: (params) => {
                        if (params.data) {
                            return `${params.data.firstName} ${params.data.lastName}`;
                        }
                        return '';
                    },
                    width: 180,
                    checkboxSelection: true,
                    headerCheckboxSelection: true
                },
                { field: 'email', width: 220 },
                { field: 'age', width: 80, filter: 'agNumberColumnFilter' },
                { field: 'location', width: 140 }
            ]
        },
        {
            headerName: 'Job Details',
            children: [
                { field: 'department', width: 140, filter: true },
                { field: 'position', width: 180 },
                { field: 'manager', width: 160 },
                {
                    field: 'hireDate',
                    headerName: 'Hire Date',
                    valueFormatter: (params) => {
                        return params.value ? formatDate(params.value) : '';
                    },
                    width: 130
                }
            ]
        },
        {
            headerName: 'Performance & Comp',
            children: [
                {
                    field: 'salary',
                    valueFormatter: (params) => {
                        return params.value != null ? formatCurrency(params.value) : '';
                    },
                    width: 130
                },
                {
                    field: 'performanceRating',
                    headerName: 'Rating',
                    width: 100,
                    cellStyle: (params) => ({
                        color: params.value != null ? getRatingColor(params.value) : 'inherit',
                        fontWeight: 'bold'
                    })
                },
                { field: 'projectsCompleted', headerName: 'Projects', width: 110 }
            ]
        },
        {
            headerName: 'Status & Skills',
            children: [
                {
                    field: 'isActive',
                    headerName: 'Status',
                    width: 110,
                    cellRenderer: (params) => {
                        const isActive = params.value === true;
                        return (
                            <span className={`status-badge ${isActive ? 'status-active' : 'status-inactive'}`}>
                                {isActive ? 'Active' : 'Inactive'}
                            </span>
                        );
                    }
                },
                {
                    field: 'skills',
                    width: 250,
                    autoHeight: true,
                    cellRenderer: (params) => {
                        if (!params.value || !Array.isArray(params.value)) return null;
                        return (
                            <div className="skills-container">
                                {params.value.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        );
                    }
                }
            ]
        }
    ], []);

    // Default Column Def
    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true,
        resizable: true,
        floatingFilter: true, // Quick access to filters
    }), []);

    // Quick Filter Handler
    const onFilterTextChange = useCallback((e) => {
        setGlobalFilter(e.target.value);
    }, []);

    return (
        <div className="grid-wrapper">
            <div className="grid-controls">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Global Search..."
                        onChange={onFilterTextChange}
                        className="search-input"
                    />
                </div>
                <div className="record-count">
                    Total Records: <span className="record-count-value">{employees.length}</span>
                </div>
            </div>

            <div className="ag-grid-container ag-theme-quartz-auto-dark">
                <AgGridReact
                    ref={gridRef}
                    rowData={employees}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDef}
                    quickFilterText={globalFilter}
                    pagination={true}
                    paginationPageSize={15}
                    paginationPageSizeSelector={[10, 15, 20, 50]}
                    rowSelection="multiple"
                    animateRows={true}
                />
            </div>
        </div>
    );
};

export default EmployeeGrid;
