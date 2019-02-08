import moment from 'moment';

const getVisibleEntries = (entries, {text, sortBy, startDate, endDate}) => {
    return entries.filter((entry)=>{
        const timestampMoment = moment(entry.timestamp);
        const startDateMatch = startDate ? startDate.isSameOrBefore(timestampMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(timestampMoment, 'day') : true;
        const textMatch = entry.compound.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b)=>{
        if(sortBy === 'date'){
            return a.timestamp < b.timestamp ? 1 : -1;
        }else if(sortBy === 'quantity'){
            return a.quantity < b.quantity ? 1 : -1;
        }
        return null;
    });
}

export default getVisibleEntries;