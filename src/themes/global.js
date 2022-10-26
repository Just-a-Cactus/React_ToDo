import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   body {
     background-color: ${({ theme }) => theme.backgroundColor};
     font-family: sans-serif;
     line-height: 1.4;
     font-size: 20px;
     transition: all 0.25s linear;
   }  
   
   * {
      box-sizing: border-box;
   }  
   
   ::selection {
      background-color: transparent;
   }
   
   //add-new-item
   .AddNewItem label.hidden ~ input {
      display: block;
   }

   .AddNewItem label.hidden {
      display: none;
   }

   .AddNewItem input {
      display: none;
      width: 100%;
      background-color: ${({ theme }) => theme.inputColor};
      color: inherit;
      border-radius: 10px;
      border-color: transparent;
      text-align: center;
      margin-bottom: 5px;
      font-size: 18px;
   }

   .AddNewItem input:focus {
      outline: none;
   }

   .AddNewItem label {
      font-size: 18px;
      color: ${({ theme }) => theme.inputTextColor};
      display: flex;
      justify-content: center;
   }

   .AddNewItem label:hover {
      color: inherit;
      cursor: pointer;
   }
   
   //app
   .app {
      background-color: ${({ theme }) => theme.appColor};
      border-radius: 10px;
      padding: 30px;
      max-width: 400px;
      margin: 20vh auto;
      color: ${({ theme }) => theme.color};
      box-shadow: 0 3px 2px rgba(0, 0, 0, 0.034), 0 7px 5px rgba(0, 0, 0, 0.048),
      0 13px 10px rgba(0, 0, 0, 0.06), 0 22px 18px rgba(0, 0, 0, 0.072),
      0 42px 33px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
   }
   
   
   //filter-button
   .FilterButton {
      border-radius: 10px;
      border-color: transparent;
      background-color: ${({ theme }) => theme.inputColor};
      color: ${({ theme }) => theme.color};
      cursor: pointer;
      font-size: 20px;
   }  
   
   .FilterButton + .FilterButton {
      margin-left: 10px;
   }  
   
   .FilterButton:hover {
      background-color: ${({ theme }) => theme.color};
      color: ${({ theme }) => theme.inputColor};
   }  
   
   .FilterButton.active {
      background-color: ${({ theme }) => theme.color};
      color: ${({ theme }) => theme.inputColor};
   }
   
   
   //search-task
   .SearchTask {
      position: relative;
   }

   .SearchTask .deleteButton {
      position: absolute;
      right: 10px;
      top: 6px;
   }

   @media (hover: hover) {
      .SearchTask .deleteButton:hover {
         cursor: pointer;
         color: ${({ theme }) => theme.accentColor};
      }
   }

   .SearchTask input {
      width: 100%;
      background-color: ${({ theme }) => theme.inputColor};
      color: inherit;
      border-radius: 10px;
      border-color: transparent;
      text-align: center;
      margin-bottom: 10px;
      font-size: 20px;
      padding-right: 30px;
      padding-left: 30px;
   }

   .SearchTask input:focus {
      outline: none;
   }
   
   //tasks-filter
   .TaskFilter {
      display: flex;
      justify-content: center;
      border-bottom: 1px ${({ theme }) => theme.borderColor};
      margin-bottom: 10px;
      padding-bottom: 10px;
   }

   .TaskFilter.active {
      background-color: ${({ theme }) => theme.accentColor};
   }
   
   //todo-item
   
   .TodoItem {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      border-bottom: 1px solid transparent;
   }  
   
   @media (hover: hover) {  
      .TodoItem:hover {
         border-bottom: 1px solid ${({ theme }) => theme.borderColor};
      }  
   }  
   
   .TodoItem.done {
      color: ${({ theme }) => theme.inputTextColor};
      text-decoration: line-through;
   }  
   
   .TodoItem .trash {
      color: ${({ theme }) => theme.color};
      min-width: 20px;
   }  
   
   @media (hover: hover) {  
      .TodoItem .trash:hover {
         cursor: pointer;
         color: ${({ theme }) => theme.accentColor};
      }  
   }  
   
   .TodoItem :first-child {
      flex-grow: 1;
   }  
   
   .TodoItem input[type="checkbox"] {
      display: none;
   }  
   
   .TodoItem input[type="checkbox"] + label {
      display: block;
      position: relative;
      padding-left: 30px;
      cursor: pointer;
   }  
   
   .TodoItem input[type="checkbox"] + label:before {
      content: "";
      display: block;
      width: 16px;
      height: 16px;
      border: 1px solid ${({ theme }) => theme.inputTextColor};
      border-radius: 5px;
      position: absolute;
      left: 0;
      top: 4px;
      transition: all 0.12s, border-color 0.08s;
   }  
   
   .TodoItem input[type="checkbox"]:checked + label:before {
      width: 5px;
      top: 0;
      left: 7px;
      border-radius: 0;
      border-color: ${({ theme }) => theme.color};
      border-top-color: transparent;
      border-left-color: transparent;
      transform: rotate(45deg);
   }
   
   //todo-list
   .TodoList {
      list-style: none;
      margin: 0;
      padding: 0;
   }
   
   
   //header
   .Header {
     text-align: center;
     padding-bottom: 10px;
   }

   .Header h1 {
     margin: 0 0 5px 0;
     font-size: 36px;
   }
   .Header span {
     color: ${({ theme }) => theme.inputTextColor};
   }   
`;
