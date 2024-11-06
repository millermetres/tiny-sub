import { FlatList, ViewToken } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import SubscibeRect from '@/components/SubscribeRect';

const data = Array.from(Array(25).keys());

export default function SubscribeRectList() {
  const [subscribed, setSubscribed] = useState<number[]>([]);
  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 5,
      },
      onViewableItemsChanged: ({
        viewableItems,
      }: {
        changed: ViewToken[];
        viewableItems: ViewToken[];
      }) => {
        setSubscribed(viewableItems.map((viewable) => viewable.item));
      },
    },
  ]);

  const renderRect = useCallback(
    ({ item }: { item: number }) => (
      <SubscibeRect
        indexNumber={item}
        isSubscribed={subscribed.includes(item)}
      />
    ),
    [subscribed]
  );

  return (
    <FlatList
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      data={data}
      renderItem={renderRect}
    />
  );
}
