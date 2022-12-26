# Domain and Subdomain Monitoring Website

This project is a website that monitors the HTTPS certificates for a given domain and its subdomains. It can filter expired certificates and displays the status of the HTTPS certificate for the domain and subdomain.

## Technologies Used

- Frontend: React
- Backend: Laravel
- Other tools and libraries:
  - [axios](https://www.npmjs.com/package/axios) for making HTTP requests

## Requirements

- Node.js and npm
- PHP and Composer

## Setup

1. Clone the repository:

git clone https://github.com/omarobaisi/domain-monitoring.git

2. Navigate to the client directory:

cd domain-monitoring/client

3. Install the dependencies:

npm install

4. Navigate to the server directory:

cd ../server

5. Install the dependencies:

composer install

6. Start the server:

php artisan serve

7. In a separate terminal window, navigate to the client directory and start the client:

cd ../client
npm start


## Usage

1. Navigate to http://localhost:3000 in your web browser.
2. Enter a domain in the form provided.
3. The website will display the status of the HTTPS certificate for the domain and subdomain.
4. You also have the ability to filter expired certificate.
