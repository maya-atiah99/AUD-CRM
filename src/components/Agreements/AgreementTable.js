import React from "react";

const AgreementTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Schedule</th>
          <th> Withdrawal/dismissal from all classes</th>
          <th>Withdrawal from select classes</th>
          <th>Withdrawal from IELP /ENGB classes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            During Drop/Add <span className='required'>*</span>
          </td>
          <td>100% Refundable</td>
          <td>100% Refundable</td>
          <td>100% Refundable</td>
        </tr>
        <tr>
          <td>After Drop/Add</td>
          <td>0% Refundable</td>
          <td>0% Refundable</td>
          <td>0% Refundable</td>
        </tr>
        <tr>
          <td>
            Until the end of the second week <span className='required'>*</span>
            <span className='required'>*</span>
          </td>
          <td>50% Refundable</td>
          <td>________</td>
          <td>________</td>
        </tr>
        <tr>
          <td>Until the end of the third week</td>
          <td>25% Refundable</td>
          <td>________</td>
          <td>________</td>
        </tr>
        <tr>
          <td>After the third week</td>
          <td>0% Refundable</td>
          <td>________</td>
          <td>________</td>
        </tr>

        {/* Repeat rows for Row 2 to Row 6 */}
      </tbody>
    </table>
  );
};

export default AgreementTable;
