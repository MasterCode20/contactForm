# Contact Form Application

This project is a simple contact form application deployed on Vercel. The application is designed to demonstrate the integration of monitoring and logging using Prometheus, Grafana, and Vercel's built-in analytics and logging tools.

## Table of Contents

- [Contact Form Application](#contact-form-application)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Monitoring Setup](#monitoring-setup)
    - [Prometheus Configuration](#prometheus-configuration)

## Features

- **Contact Form:** Allows users to submit their contact information and message.
- **Monitoring:** Collects metrics using Prometheus and visualizes them in Grafana.
- **Logging:** Centralized logging for easier debugging and analysis, integrated with Vercel's logging and analytics.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/)
- [Vercel CLI](https://vercel.com/docs/cli)
- [Prometheus](https://prometheus.io/download/)
- [Grafana](https://grafana.com/grafana/download)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/contact-form-app.git
    cd contact-form-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the application locally:**

    ```bash
    npm start
    ```

    The application should now be running on `http://localhost:3000`.

## Monitoring Setup

### Prometheus Configuration

1. **Set up Prometheus:**

   - Install Prometheus on your local machine or server.
   - Create or modify the `prometheus.yml` configuration file to include the following:

     ```yaml
     scrape_configs:
       - job_name: 'vercel_app'
         static_configs:
           - targets: ['https://contact-form-pi-ecru.vercel.app/metrics']
     ```

2. **Start Prometheus:**

   ```bash
   ./prometheus --config.file=prometheus.yml
