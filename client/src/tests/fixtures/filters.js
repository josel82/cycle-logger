import moment from 'moment';


const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const altFilters = {
    text: 'test',
    sortBy: 'quantity',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
}

const customFilter_1 = {
    text: 'Aminoacids',
    sortBy: 'date',
    startDate: moment().subtract(8, 'days'),
    endDate: undefined
}

const customFilter_2 = {
    text: 'Aminoacids',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment().subtract(11, 'days')
}

export {filters, altFilters, customFilter_1, customFilter_2};