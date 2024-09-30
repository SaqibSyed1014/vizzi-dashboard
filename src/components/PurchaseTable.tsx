import React from "react";
import ChevronDownIcon from "@/assets/svgs/icon-chevron-down.svg"

export const PurchaseTable :React.FC = () => {
    const tableHeadCols = [
        { text: 'Contact', colClass: '' },
        { text: 'Deep Link', colClass: '' },
        { text: 'Date', colClass: '' },
        { text: 'Payment/Due Date', colClass: '' },
        { text: 'Amount', colClass: '' },
        { text: 'Tax', colClass: '' },
        { text:'Total', colClass: '' },
        { text: 'Expense type', colClass: '' },
        { text: 'Description', colClass: '!w-[100px]' },
        { text: 'Account', colClass: '!w-[150px]' },
        { text: 'Category-1', colClass: 'w-[120px]' },
        { text: 'Category-2', colClass: 'w-[120px]' }
    ]

    const tableData = [
        {
            contact: 'union-pay',
            link: 'www.google.com',
            date: '25-April-2023',
            dueDate: '30-April-2023',
            isLate: false,
            amount: 90,
            tax: 0,
            total: 90,
            expenseType: 'Bills',
            desc: 'Bring immediately',
            account: 'cost of goods so much goog',
            categoryOne: 'Uncategorized',
            categoryTwo: '_'
        },
        {
            contact: 'union-pay',
            link: 'www.google.com',
            date: '25-April-2023',
            dueDate: '30-April-2023',
            isLate: true,
            amount: 90,
            tax: 0,
            total: 90,
            expenseType: 'Bills',
            desc: 'Bring immediately',
            account: 'cost of goods so much goog',
            categoryOne: 'Uncategorized',
            categoryTwo: '_'
        },
        {
            contact: 'union-pay',
            link: 'www.google.com',
            date: '25-April-2023',
            dueDate: '30-April-2023',
            isLate: false,
            amount: 90,
            tax: 0,
            total: 90,
            expenseType: 'Bills',
            desc: 'Bring immediately',
            account: 'cost of goods so much goog',
            categoryOne: 'Uncategorized',
            categoryTwo: '_'
        },
        {
            contact: 'Fedex',
            link: 'www.google.com',
            date: '25-April-2023',
            dueDate: '30-April-2023',
            isLate: true,
            amount: 90,
            tax: 0,
            total: 90,
            expenseType: 'Bills',
            desc: 'Bring immediately',
            account: 'cost of goods so much goog',
            categoryOne: 'Uncategorized',
            categoryTwo: '_'
        },
        {
            contact: 'Organaise',
            link: 'www.google.com',
            date: '25-April-2023',
            dueDate: '30-April-2023',
            isLate: false,
            amount: 90,
            tax: 0,
            total: 90,
            expenseType: 'Bills',
            desc: 'Bring immediately',
            account: 'cost of goods so much goog',
            categoryOne: 'Uncategorized',
            categoryTwo: '_'
        },
        {
            contact: 'Organaise',
            link: 'www.google.com',
            date: '25-April-2023',
            dueDate: '30-April-2023',
            isLate: true,
            amount: 90,
            tax: 0,
            total: 90,
            expenseType: 'Bills',
            desc: 'Bring immediately',
            account: 'cost of goods so much goog',
            categoryOne: 'Uncategorized',
            categoryTwo: '_'
        },
        {
            contact: 'Orchid ltd',
            link: 'www.google.com',
            date: '25-April-2023',
            dueDate: '30-April-2023',
            isLate: false,
            amount: 90,
            tax: 0,
            total: 90,
            expenseType: 'Bills',
            desc: 'Bring immediately',
            account: 'cost of goods so much goog',
            categoryOne: 'Uncategorized',
            categoryTwo: '_'
        },
        {
            contact: 'union-pay',
            link: 'www.google.com',
            date: '25-April-2023',
            dueDate: '30-April-2023',
            isLate: true,
            amount: 90,
            tax: 0,
            total: 90,
            expenseType: 'Bills',
            desc: 'Bring immediately',
            account: 'cost of goods so much goog',
            categoryOne: 'Uncategorized',
            categoryTwo: '_'
        },
        {
            contact: 'Orchid ltd',
            link: 'www.google.com',
            date: '25-April-2023',
            dueDate: '30-April-2023',
            isLate: false,
            amount: 90,
            tax: 0,
            total: 90,
            expenseType: 'Bills',
            desc: 'Bring immediately',
            account: 'cost of goods so much goog',
            categoryOne: 'Uncategorized',
            categoryTwo: '_'
        },
        {
            contact: 'Fedex',
            link: 'www.google.com',
            date: '25-April-2023',
            dueDate: '30-April-2023',
            isLate: false,
            amount: 90,
            tax: 0,
            total: 90,
            expenseType: 'Bills',
            desc: 'Bring immediately',
            account: 'cost of goods so much goog',
            categoryOne: 'Uncategorized',
            categoryTwo: '_'
        }
    ]

  return (
      <div className="table-wrapper">
          <table className="table">
              <thead>
              <tr>
                  {tableHeadCols.map((item, index) => {
                      return (
                          <th key={index} className={`${item.colClass}`}>
                              <div className="flex flex-nowrap gap-1.5 items-center">
                                  {item.text}
                                  <ChevronDownIcon/>
                              </div>
                          </th>
                      )
                  })}
              </tr>
              </thead>
              <tbody>
              {tableData.map((item, index) => {
                  return (
                      <tr key={index}>
                          <td>{item.contact}</td>
                          <td>
                              <a href={item.link} className="text-[#22B9EB]">View in Xero</a>
                          </td>
                          <td>{item.date}</td>
                          <td>
                              <span className={`${item.isLate  ? 'text-red-dark' : ''}`}>
                                  {item.dueDate}
                              </span>
                          </td>
                          <td>
                              {`$${item.amount}`}
                          </td>
                          <td>
                              {`$${item.tax}`}
                          </td>
                          <td>
                              {`$${item.total}`}
                          </td>
                          <td>{item.expenseType}</td>
                          <td>
                              <div className="text-ellipsis text-nowrap overflow-hidden">{item.desc}</div>
                          </td>
                          <td className="text-ellipsis text-nowrap overflow-hidden">{item.account}</td>
                          <td>{item.categoryOne}</td>
                          <td>{item.categoryTwo}</td>
                      </tr>
                  )
              })}
              </tbody>
          </table>
      </div>
  )
}
