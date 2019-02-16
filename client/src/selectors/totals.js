import moment from 'moment';

export default (entries,  {text, startDate, endDate}) => {
    if(entries.length<=0){
        return 0;
    }else{
        return entries.filter((entry)=>{
            const timestampMoment = moment(entry.timestamp);
            const startDateMatch = startDate ? startDate.isSameOrBefore(timestampMoment, 'day') : true;
            const endDateMatch = endDate ? endDate.isSameOrAfter(timestampMoment, 'day') : true;
            const textMatch = entry.compound.toLowerCase().includes(text.toLowerCase())
    
            return startDateMatch && endDateMatch && textMatch;
        }).reduce((prev, {quantity})=> prev + quantity ,0);
    }
}