const kafka = require('kafka-node');

const Producer = kafka.Producer;
const client = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092'});
const producer = new Producer(client);

producer.on('ready', function () {
  console.log('Producer is ready');
});

producer.on('error', function (err) {
  console.error('Producer error: ', err);
});

const message = {
  topic: 'test',
  
  
};

function queueMessage(i){
    i++;
    message.messages = JSON.stringify({name : 'test messageHello Kafka', i : i}),
    producer.send([message], function (err, data) {
        console.log('Sent:', message);
      });
      
}
let i =0 ;
setInterval(() => {
    i++;
    queueMessage(i);
}, 3000);