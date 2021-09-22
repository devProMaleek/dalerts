// Import the styled components
import styled from 'styled-components';

// Export the Wrapper Component div style.

export const Wrapper = styled.div`
  margin-top: 5rem;
  
  .dropdown {
    width: 100% !important; 
  }
  
  .small-font {
    font-size: .7rem;
    text-align: center;
  }
  .search{
    width: 100% !important;
    border-radius: 10px;
    border: none;
    outline: none;
    background: #1F2231;
    color: #ffffff;
  }
  
  .table-data tr:nth-child(even) {
    background: #1F2231;
    border-radius: 10px !important;
    color: #ffffff;
  }
  
  table tr, td {
    border: none;
    padding: 10px 0;
    text-align: center;
    color: #ffffff !important;
  }

  table tr {
    margin: 70px 0!important;
  }
  
  .row-data td:nth-child(1){
    border-radius: 10px 0 0 10px !important;
  }
  .row-data td:nth-child(6){
    border-radius: 0 10px 10px 0 !important;
  }
  
  .row-data button{
    border-radius: 10px !important;
    background: #161522 !important;
  }
  thead button {
    border-radius: 10px !important;
  }


  .has-search .form-control {
    padding-left: 2.375rem;
  }

  .has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
  }

`;