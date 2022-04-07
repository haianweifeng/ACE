import cashIcon from '../../views/Dashboard/assets/cash.png';
import invoiceIcon from '../../views/Dashboard/assets/invoice.png';
import billIcon from '../../views/Dashboard/assets/bill.png';
export default {
    state: {
        overviews: [
            {
                id: 1,
                icon: cashIcon,
                total: 'SGD 500,000,000.00',
                name: 'Cash Balance',
            },
            {
                id: 2,
                icon: invoiceIcon,
                total: 'SGD 10,000.00',
                name: 'Unpaid Invoice',
                overdue: '5,000.00'
            },
            {
                id: 3,
                icon: billIcon,
                total: 'SGD 10,000.00',
                name: 'Unpaid Bill',
                overdue: '5,000.00'
            }
        ],
        bar: [8, 10, 11.5, 2, -4, -1],
        line: [3.2, 8, 6.4, 7, 5.8, 9.5],
        pie: [
            {
                value: 1048,
                name: 'Rent',
                itemStyle: {
                    color: '#2873E7'
                }
            },
            {
                value: 735,
                name: 'Utilities',
                itemStyle: {
                    color: '#8EB7F5'
                }
            },
            {
                value: 280,
                name: 'General Supplies',
                itemStyle: {
                    color: '#DFECFF'
                }
            },
            {
                value: 484,
                name: 'Others',
                itemStyle: {
                    color: '#F1F1F1'
                }
            }
        ],
        transactionTable: [
            {
                refNo: 'RV-1900002',
                type: 'Payment-In',
                contact: 'GHI Company',
                date: '15 Jan 2019',
                amount: 'SGD 250,000,000.00',
                status: ''
            },
            {
                refNo: 'I-1900002',
                type: 'Invoice',
                contact: 'ABC Company',
                date: '14 Jan 2019',
                amount: 'SGD 5,000.00',
                status: 'Overdue'
            },
            {
                refNo: 'E-1900003',
                type: 'Expense',
                contact: 'KH Company',
                date: '10 Jan 2019',
                amount: 'SGD 6,500.00',
                status: 'Paid'
            },
            {
                refNo: 'E-1900002',
                type: 'Expense',
                contact: 'Singapore XYZ Pte Ltd',
                date: '8 Jan 2019',
                amount: 'SGD 3,500.00',
                status: 'Paid'
            },
            {
                refNo: 'E-1900001',
                type: 'Expense',
                contact: 'TUV Company Pte Ltd',
                date: '5 Jan 2019',
                amount: 'SGD 2,000.00',
                status: 'Unpaid'
            },
            {
                refNo: 'B-1900002',
                type: 'Bill',
                contact: 'TUV Company Pte Ltd',
                date: '5 Jan 2019',
                amount: 'SGD 5,000.00',
                status: 'Unpaid'
            },
            {
                refNo: 'B-1900001',
                type: 'Bill',
                contact: 'Singapore XYZ Pte Ltd',
                date: '5 Jan 2019',
                amount: 'SGD 5,000.00',
                status: 'Overdue'
            },
            {
                refNo: 'I-1900001',
                type: 'Invoice',
                contact: 'KH Company',
                date: '3 Jan 2019',
                amount: 'SGD 5,000.00',
                status: 'Unpaid'
            },
            {
                refNo: 'PV-1900001',
                type: 'Payment-Out',
                contact: 'ABC Company',
                date: '1 Jan 2019',
                amount: 'SGD 50,000,000.00',
                status: ''
            },
            {
                refNo: 'RV-1900001',
                type: 'Payment-In',
                contact: 'GHI Company',
                date: '1 Jan 2019',
                amount: 'SGD 300,000,000.00',
                status: ''
            },
            {
                refNo: 'J-1900003',
                type: 'Expense',
                contact: 'KH Company',
                date: '10 Jan 2019',
                amount: 'SGD 6,500.00',
                status: 'Paid'
            },
            {
                refNo: 'g-1900002',
                type: 'Expense',
                contact: 'Singapore XYZ Pte Ltd',
                date: '8 Jan 2019',
                amount: 'SGD 3,500.00',
                status: 'Paid'
            },
            {
                refNo: 'E-1900001',
                type: 'Expense',
                contact: 'TUV Company Pte Ltd',
                date: '5 Jan 2019',
                amount: 'SGD 2,000.00',
                status: 'Unpaid'
            },
            {
                refNo: 'B-1900002',
                type: 'Bill',
                contact: 'TUV Company Pte Ltd',
                date: '5 Jan 2019',
                amount: 'SGD 5,000.00',
                status: 'Unpaid'
            },
            {
                refNo: 'B-1900001',
                type: 'Bill',
                contact: 'Singapore XYZ Pte Ltd',
                date: '5 Jan 2019',
                amount: 'SGD 5,000.00',
                status: 'Overdue'
            },
            {
                refNo: 'I-1900001',
                type: 'Invoice',
                contact: 'KH Company',
                date: '3 Jan 2019',
                amount: 'SGD 5,000.00',
                status: 'Unpaid'
            },
            {
                refNo: 'FDF-1900001',
                type: 'Payment-Out',
                contact: 'ABC Company',
                date: '1 Jan 2019',
                amount: 'SGD 50,000,000.00',
                status: ''
            },
        ],
        businessTable: [
            {
                contact: 'ABC Company',
                relationship: 'Client',
                them: 'SGD 50,000,000.00',
                you: 'SGD 0.00',
                transactions: 'Overdue',
            },
            {
                contact: 'GHI Company',
                relationship: 'Client',
                them: 'SGD 500.00',
                you: 'SGD 0.00',
                transactions: 'Overdue',
            },
            {
                contact: 'KH Company',
                relationship: 'Client,Supplier,Others',
                them: 'SGD 500.00',
                you: 'SGD 0.00',
                transactions: '',
            },
            {
                contact: 'Singapore XYZ Pte Ltd',
                relationship: 'Supplier',
                them: 'SGD 500.00',
                you: 'SGD 0.00',
                transactions: '',
            },
            {
                contact: 'TUV Company Pte Ltd',
                relationship: 'Supplier',
                them: 'SGD 500.00',
                you: 'SGD 0.00',
                transactions: 'Overdue',
            },
        ]
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    }
}