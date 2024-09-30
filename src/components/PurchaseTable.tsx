import React from "react";
import ChevronDownIcon from "@/assets/svgs/icon-chevron-down.svg"

export const PurchaseTable :React.FC = () => {
    const tableHeadCols = [
        'Contact',
        'Depp Link',
        'Date',
        'Payment/Due Date',
        'Amount',
        'Tax',
        'Total'
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
            total: 90
        },
        {
            contact: 'union-pay',
            link: 'www.google.com',
            date: '25-April-2023',
            dueDate: '30-April-2023',
            isLate: true,
            amount: 90,
            tax: 0,
            total: 90
        },
        {
            contact: 'union-pay',
            link: 'www.google.com',
            date: '25-April-2023',
            dueDate: '30-April-2023',
            isLate: false,
            amount: 90,
            tax: 0,
            total: 90
        },
        {
            contact: 'Fedex',
            link: 'www.google.com',
            date: '25-April-2023',
            dueDate: '30-April-2023',
            isLate: true,
            amount: 90,
            tax: 0,
            total: 90
        },
        {
            contact: 'Organaise',
            link: 'www.google.com',
            date: '25-April-2023',
            dueDate: '30-April-2023',
            isLate: false,
            amount: 90,
            tax: 0,
            total: 90
        },
        {
            contact: 'Organaise',
            link: 'www.google.com',
            date: '25-April-2023',
            dueDate: '30-April-2023',
            isLate: true,
            amount: 90,
            tax: 0,
            total: 90
        },
        {
            contact: 'Orchid ltd',
            link: 'www.google.com',
            date: '25-April-2023',
            dueDate: '30-April-2023',
            isLate: false,
            amount: 90,
            tax: 0,
            total: 90
        },
        {
            contact: 'union-pay',
            link: 'www.google.com',
            date: '25-April-2023',
            dueDate: '30-April-2023',
            isLate: true,
            amount: 90,
            tax: 0,
            total: 90
        },
        {
            contact: 'Orchid ltd',
            link: 'www.google.com',
            date: '25-April-2023',
            dueDate: '30-April-2023',
            isLate: false,
            amount: 90,
            tax: 0,
            total: 90
        },
        {
            contact: 'Fedex',
            link: 'www.google.com',
            date: '25-April-2023',
            dueDate: '30-April-2023',
            isLate: false,
            amount: 90,
            tax: 0,
            total: 90
        }
    ]

  return (
      <>
          <table className="table">
              <thead>
              <tr>
                  {tableHeadCols.map((item, index) => {
                      return (
                          <th key={index}>
                              <div className="flex flex-nowrap gap-1.5 items-center">
                                  {item}
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
                      </tr>
                  )
              })}
              </tbody>
          </table>
      </>
  )
}
