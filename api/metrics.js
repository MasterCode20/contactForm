const promClient = require('prom-client');

const collectDefaultMetrics = promClient.collectDefaultMetrics;

// Collecte les métriques par défaut
collectDefaultMetrics();

module.exports = async (req, res) => {
  try {
    res.setHeader('Content-Type', promClient.register.contentType);
    res.status(200).send(await promClient.register.metrics());
  } catch (err) {
    res.status(500).send(err.toString());
  }
};
