import { FlatList, ViewToken } from 'react-native';
import React, { useCallback, useContext, useRef } from 'react';
import SubscibeRect from '@/components/SubscribeRect';
import { SubscriptionContext } from '@/context/SubscriptionContext';

const data = Array.from(Array(25).keys());

export default function SubscribeRectList() {
  const { updateSubscriptions } = useContext(SubscriptionContext);

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 10,
      },
      onViewableItemsChanged: ({ changed }: { changed: ViewToken[] }) => {
        const incoming: number[] = [];
        const outgoing: number[] = [];

        changed.forEach((change) => {
          if (change.isViewable) {
            incoming.push(change.item);
          } else {
            outgoing.push(change.item);
          }
        });

        updateSubscriptions(incoming, outgoing);
      },
    },
  ]);

  const renderRect = useCallback(
    ({ item }: { item: number }) => <SubscibeRect indexNumber={item} />,
    []
  );

  return (
    <FlatList
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      data={data}
      renderItem={renderRect}
    />
  );
}
