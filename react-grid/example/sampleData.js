import React from 'react';
import { HeaderRow, Row, HeaderCell, Cell } from '../src/index';

const rowCount = 2000;
export const createDataWithCheckbox = () => {
    const data = [];
    for(let i = 0; i < rowCount; i++){
        data.push({
            checked: false,
            name: 'name' + i,
            email: i + '@gmail.com'
        })
    }

    return data;
}

export const buildHeaderWithCheckbox = () => {
    return <HeaderRow style={{ height: 32 }}>
        <HeaderCell colWidth={150} >Header 1</HeaderCell>
        <HeaderCell colWidth={50} sortBy={'aaa'}>Header 2 sdf ád ád ádaaaaaaaa  </HeaderCell>
        <HeaderCell colWidth={200} sortBy={'bbb'}>Header 3</HeaderCell>
        <HeaderCell colWidth={200} >Header 4</HeaderCell>
        <HeaderCell colWidth={200} >Header 5</HeaderCell>
        <HeaderCell colWidth={200} >Header 6</HeaderCell>
    </HeaderRow>;
}

export const buildBodyWithCheckbox = (data, onChange) => {
    const dataRowList = [];
    for(let i = 0; i < rowCount; i++){
        const item = data[i];
        dataRowList.push(
            (<Row key={i}>
                <Cell><input type="checkbox" checked={item.checked} onChange={(e) => onChange(i, e.target.checked)} /></Cell>
                <Cell>{item.name}</Cell>
                <Cell>{item.email}</Cell>
                <Cell>{item.email}</Cell>
                <Cell>{item.email}</Cell>
                <Cell>{item.email}</Cell>
            </Row>)
        )
    }

    return dataRowList;
}