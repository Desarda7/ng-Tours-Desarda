// export function createFilterParams(payload: {[key: string]: string | number}): string {
//     if(Object.keys(payload).length === 0) return '';

//     let params = '(';

//     Object.keys(payload).forEach((key, index) => {
//         if (index) params += ' && '; // add && only between params
//         params += `${key}${payload[key].type}'${payload[key].value}'`
//     });

//     params += ')';

    


//    return params;
// }
