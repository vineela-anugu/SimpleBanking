# Simple Banking Application

This is a basic web application for performing simple banking operations, built using Angular on the frontend and ASP.NET Core on the backend.

## Features

* **View Account Balance:** Allows users to retrieve and display the details (account number, holder name, current balance) of a specific bank account by entering the Account ID.
* **Deposit Funds:** Enables users to deposit a specified amount into their account by entering the Account ID and the deposit amount.
* **Withdraw Funds:** Allows users to withdraw a specified amount from their account by entering the Account ID and the withdrawal amount, with basic validation for positive amounts.
* **Real-time Balance Updates:** The account balance in the "Account Details" section is updated automatically after successful deposit or withdrawal without requiring a full page refresh, thanks to a shared service.
* **Basic UI Styling:** Includes basic CSS styling to improve the visual presentation of the application components.
* **Account ID Input:** Users can enter the Account ID in the UI for viewing balance, deposits, and withdrawals.

## Technologies Used

* **Frontend:**
    * [Angular](https://angular.io/) (Likely a recent version, e.g., 16 or 17)
    * [TypeScript](https://www.typescriptlang.org/)
    * [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
    * [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
    * [Angular CLI](https://angular.io/cli)
    * [RxJS](https://rxjs.dev/) (for reactive programming and handling asynchronous operations)
    * `@angular/common/http` (for making HTTP requests)
    * `@angular/forms` (`FormsModule` for handling user input in forms)
* **Backend:**
    * [.NET](https://dotnet.microsoft.com/) (Likely .NET 7 or .NET 8)
    * [ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/) (for building the RESTful API)
    * [C#](https://learn.microsoft.com/en-us/dotnet/csharp/) (as the backend programming language)
    * [Entity Framework Core](https://learn.microsoft.com/en-us/ef/core/) (for interacting with the database)
    * In-Memory Database (likely used for simplicity during development)
* **Other:**
    * Visual Studio IDE

## Setup Instructions

### Prerequisites

* [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine for the Angular frontend.
* [.NET SDK](https://dotnet.microsoft.com/download) (matching the version used in the backend) installed on your machine.

### Frontend Setup (Angular - `client` folder)

1.  Navigate to the `client` directory in your terminal.
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the Angular development server:
    ```bash
    ng serve -o
    ```
    This will usually run the frontend on `http://localhost:4200`.

### Backend Setup (ASP.NET Core - `server` folder)

1.  Navigate to the `server` directory in your terminal or IDE.
2.  Update the database (to ensure the in-memory database is created):
    ```bash
    dotnet ef database update
    ```
3.  Run the ASP.NET Core application:
    ```bash
    dotnet run
    ```
    This will usually run the backend on `https://localhost:7xxx` (check the console output, likely `https://localhost:7243`).

### Important Configuration

* Ensure that the `apiUrl` in your Angular `account.service.ts` is set to `https://localhost:7243/api/accounts`.

## Usage

1.  Open your web browser and navigate to the frontend URL (`http://localhost:4200`).
2.  Enter the desired Account ID in the input field of each section (Account Details, Deposit Funds, Withdraw Funds).
3.  Click the "View Balance" button to see the account details.
4.  Enter the amount in the "Deposit Funds" section and click "Deposit".
5.  Enter the amount in the "Withdraw Funds" section and click "Withdraw". The balance in the "Account Details" section should update automatically after successful transactions.

## Further Improvements (Optional)

* More specific error handling for scenarios like insufficient funds.
* Frontend input validation with visual cues.
* Displaying transaction history.
* Implementing user authentication and authorization.
* Enhancing the UI/UX with more advanced styling and layout.
* Adding unit and integration tests for both frontend and backend.
* Implementing more robust backend validation and security measures.

## Author

Vineela Reddy Anugu - github.com/vineela-anugu
