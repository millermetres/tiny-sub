import { createContext, useState, useContext } from 'react';

const DataContext = createContext({
  data: {},
  fetchData: () => null,
});

const SubscriptionProvider = ({ children }: { children: React.ReactNode }) => {
  const [subscriptions, setSubscriptions] = useState<Record<number, number>>(
    {}
  );

  const updateSubscriptions = (
    incomingSubscriptions: number[],
    outgoingSubscriptions: number[]
  ) => {
    setSubscriptions((prevSubscriptions: Record<number, number>) => {
      const subs = { ...prevSubscriptions };
      outgoingSubscriptions.forEach((x) => {
        subs[x] = Math.max((prevSubscriptions[x] || 0) - 1, 0);
      });

      incomingSubscriptions.forEach((x) => {
        subs[x] = (prevSubscriptions[x] || 0) + 1;
      });

      return subs;
    });
  };

  return (
    <SubscriptionContext.Provider
      value={{
        subscriptions,
        updateSubscriptions,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

export { SubscriptionContext, SubscriptionProvider };
