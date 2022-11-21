import React from 'react';
import { CDBFooter, CDBBox} from 'cdbreact';

export const Footer = () => {
    return (
      <CDBFooter className="shadow">
        <CDBBox
          display="flex"
          justifyContent="between"
          alignItems="center"
          className="mx-auto py-4 flex-wrap"
          style={{ width: '80%' }}
        >
          <CDBBox display="flex" alignItems="center">
            <div className="d-flex align-items-center p-0 text-dark">
              <img
                alt="logo"
                src="https://cdn-icons-png.flaticon.com/512/1446/1446874.png"
                width="30px"
              />
              <span className="ml-4 h5 mb-0 font-weight-bold">Dentistimo</span>
            </div>
          </CDBBox>
          <CDBBox>
            <small className="ml-2">&copy; Team 12, 2022. All rights reserved.</small>
          </CDBBox>
        </CDBBox>
      </CDBFooter>
    );
  };