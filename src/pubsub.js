const subscribers = {};

//Publisher
const publish = (eventName, data) => {
  if (!subscribers[eventName]) return;

  subscribers[eventName].forEach((callback) => {
    callback(data);
  });
};

//Subscriber
const subscribe = (eventName, callback) => {
  if (!subscribers[eventName]) {
    subscribers[eventName] = [];
  }

  subscribers[eventName].push(callback);

  return {
    unsubscribe: () => {
      const subscriptionIndex = subscribers[eventName].findIndex((savedCallback) => savedCallback === callback);
      subscribers[eventName].splice(subscriptionIndex, 1);
    },
  };
};

export default { publish, subscribe };
