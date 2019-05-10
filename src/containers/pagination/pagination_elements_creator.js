import React from 'react';
import PaginationElement from './pagination_element'

let array = [];

const range = {
    start: 2,
    before: 1,
    after: 2,
    end: 2,
}


export function CreatePeginationElement(currentPage, maxPage){
    CreateElement("&#10094", currentPage > 1, currentPage - 1);
    for(let i = 1;
        i <= range.start && i < currentPage - range.before;
        i++){
            CreateElement(i, true, i);
        }
    CreateElement("...",
        currentPage > range.start + range.before + 1,
        "", true);
    for(let i = range.before;
        i > 0;
        i--){
            const res = currentPage - i;
            CreateElement(res, res > 0, res);
        }
    CreateElement(currentPage, true, currentPage, true);
    for(let i = 1;
        i <= range.after && i + currentPage <= maxPage;
        i++){
            const res = i + currentPage;
            CreateElement(res, true, res);
        }
    CreateElement("...",
        maxPage - currentPage > range.after + range.end + 1,
        "", true);
    for(let i = range.end;
        i > 0;
        i--){
            const res = maxPage - i + 1;
            CreateElement(res,
                res > currentPage + range.after,
                res);
        }
        CreateElement("&#10095", currentPage < maxPage, currentPage + 1);
}

function CreateElement( content, condition, reference , isDisabled = false){
    if(condition)
        array.push(
            <PaginationElement 
                isDisabled={isDisabled}
                reference={reference}
                content={content}
            />
        )
}