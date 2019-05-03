const kafka = require('kafka-node');
const _ = require('lodash');
const envHelper = require('./environmentVariablesHelper');
var producer, client;

// initilize kafka client and producers
function init() {
  client = new kafka.KafkaClient({
    kafkaHost: envHelper.sunbird_kafka_host,
    maxAsyncRequests: 100
  });

  producer = new kafka.HighLevelProducer(client);
  producer.on('ready', function () {
    console.log('Kafka Producer is connected and ready.');
  });

  producer.on('error', function (error) {
    console.error("Errored at kafka", error)
  });
}

if (envHelper.sunbird_kafka_host && envHelper.sunbird_state_sso_topic) {
  init();
}

const KafkaService = {

  // send data to kafka
  sendMessage: (data, kafkaTopic, callback = () => {
  }) => {

    if (!envHelper.sunbird_kafka_host && !envHelper.sunbird_state_sso_topic) {
      return callback(new Error('KAFKA_NOT_INITIALIZED.'))
    }

    if (_.isEmpty(data)) {
      return callback(new Error('DATA_MISSING.'))
    }

    if (_.isEmpty(kafkaTopic)) {
      return callback(new Error('KAFKA_TOPIC_MISSING.'))
    }

    const record = [
      {
        topic: kafkaTopic,
        messages: data
      }
    ];
    // Send record to Kafka
    producer.send(record, callback)
  }
};

module.exports = KafkaService;
