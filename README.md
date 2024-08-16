Contact Form Application
This project is a simple contact form application deployed on Vercel. The application is designed to demonstrate the integration of monitoring and logging using Prometheus, Grafana, and Vercel's built-in analytics and logging tools.

Table of Contents
Features
Getting Started
Prerequisites
Installation
Monitoring Setup
Prometheus Configuration
Grafana Integration
Logging
Deployment
Contributing
License
Features
Contact Form: Allows users to submit their contact information and message.
Monitoring: Collects metrics using Prometheus and visualizes them in Grafana.
Logging: Centralized logging for easier debugging and analysis, integrated with Vercel's logging and analytics.
Getting Started
Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js
Vercel CLI
Prometheus
Grafana
Installation
Clone the repository:

bash
Copier le code
git clone https://github.com/yourusername/contact-form-app.git
cd contact-form-app
Install dependencies:

bash
Copier le code
npm install
Run the application locally:

bash
Copier le code
npm start
The application should now be running on http://localhost:3000.

Monitoring Setup
Prometheus Configuration
Set up Prometheus:

Install Prometheus on your local machine or server.

Create or modify the prometheus.yml configuration file to include the following:

yaml
Copier le code
scrape_configs:
  - job_name: 'vercel_app'
    static_configs:
      - targets: ['https://contact-form-pi-ecru.vercel.app/metrics']
Start Prometheus:

bash
Copier le code
./prometheus --config.file=prometheus.yml
Prometheus will now scrape the metrics from your deployed application.

Grafana Integration
Install and start Grafana.

Add Prometheus as a data source:

Go to Configuration > Data Sources.
Add a new data source and select Prometheus.
Set the URL to your Prometheus server, typically http://localhost:9090.
Create dashboards to visualize your metrics:

Use the provided templates or create your own dashboards to monitor your application's performance.
Logging
Since the application is deployed on Vercel, you can take advantage of Vercel's built-in logging and analytics. The logs can be accessed directly from the Vercel dashboard:

Vercel Logs: Navigate to your project on Vercel, then go to the "Functions" tab to see real-time logs.
Vercel Analytics: Set up Vercel Analytics from the dashboard for deeper insights into your application's traffic and performance.
Deployment
To deploy the application on Vercel:

Deploy using Vercel CLI:

bash
Copier le code
vercel
Follow the prompts to deploy your project.

Alternatively, deploy directly from GitHub:

Connect your GitHub repository to Vercel.
Push your changes to the main branch, and Vercel will automatically deploy the latest version.
Contributing
If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are welcome.

License
This project is open source and available under the MIT License.