

const getVisibleExpenses = (entries, {text, sortBy, startDate, endDate}) => {
    return entries.filter((entry)=>{
        const startDateMatch = typeof startDate !== 'number' || entry.timestamp >= startDate;
        const endDateMatch = typeof endDate !== 'number' || entry.timestamp <= endDate;
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

export default getVisibleExpenses;