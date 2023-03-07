const kafka = require('kafka-node');

const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092'});
const consumer = new Consumer(client, [{topic: 'test'}]);

consumer.on('message', function (message) {
  console.log('Received message:', message.value);
});

consumer.on('error', function (err) {
  console.error('Consumer error:', err);
});

consumer.on('offsetOutOfRange', function (err) {
  console.error('Offset out of range:', err);
});
