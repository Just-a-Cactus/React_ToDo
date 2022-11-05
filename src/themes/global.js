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
   .add-new-item label.hidden ~ input {
      display: block;
   }

   .add-new-item label.hidden {
      display: none;
   }

   .add-new-item input {
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

   .add-new-item input:focus {
      outline: none;
   }

   .add-new-item label {
      font-size: 18px;
      color: ${({ theme }) => theme.inputTextColor};
      display: flex;
      justify-content: center;
   }

   .add-new-item label:hover {
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
   .filter-button {
      border-radius: 10px;
      border-color: transparent;
      background-color: ${({ theme }) => theme.inputColor};
      color: ${({ theme }) => theme.color};
      cursor: pointer;
      font-size: 20px;
   }  
   
   .filter-button + .filter-button {
      margin-left: 10px;
   }  
   
   .filter-button:hover {
      background-color: ${({ theme }) => theme.color};
      color: ${({ theme }) => theme.inputColor};
   }  
   
   .filter-button.active {
      background-color: ${({ theme }) => theme.color};
      color: ${({ theme }) => theme.inputColor};
   }
   
   
   //search-task
   .search-task {
      position: relative;
   }

   .search-task .deleteButton {
      position: absolute;
      right: 10px;
      top: 6px;
   }

   @media (hover: hover) {
      .search-task .deleteButton:hover {
         cursor: pointer;
         color: ${({ theme }) => theme.accentColor};
      }
   }

   .search-task input {
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

   .search-task input:focus {
      outline: none;
   }
   
   //tasks-filter
   .task-filter {
      display: flex;
      justify-content: center;
      border-bottom: 1px ${({ theme }) => theme.borderColor};
      margin-bottom: 10px;
      padding-bottom: 10px;
   }

   .task-filter.active {
      background-color: ${({ theme }) => theme.accentColor};
   }
   
   //todo-item
   
   .todo-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      border-bottom: 1px solid transparent;
   }  
   
   @media (hover: hover) {  
      .todo-item:hover {
         border-bottom: 1px solid ${({ theme }) => theme.borderColor};
      }  
   }  
   
   .todo-item.done {
      color: ${({ theme }) => theme.inputTextColor};
      text-decoration: line-through;
   }  
   
   .todo-item .trash {
      color: ${({ theme }) => theme.color};
      min-width: 20px;
   }  
   
   @media (hover: hover) {  
      .todo-item .trash:hover {
         cursor: pointer;
         color: ${({ theme }) => theme.accentColor};
      }  
   }  
   
   .todo-item :first-child {
      flex-grow: 1;
   }  
   
   .todo-item input[type="checkbox"] {
      display: none;
   }  
   
   .todo-item input[type="checkbox"] + label {
      display: block;
      position: relative;
      padding-left: 30px;
      cursor: pointer;
   }  
   
   .todo-item input[type="checkbox"] + label:before {
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
   
   .todo-item input[type="checkbox"]:checked + label:before {
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
   .todo-list {
      list-style: none;
      margin: 0;
      padding: 0;
   }
   
   
   //header
   .header {
     text-align: center;
     padding-bottom: 10px;
   }

   .header h1 {
     margin: 0 0 5px 0;
     font-size: 36px;
   }
   .header span {
     color: ${({ theme }) => theme.inputTextColor};
   }   
`;
