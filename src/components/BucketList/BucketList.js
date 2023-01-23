import { useState } from "react";
import BucketListForm from "../BucketListForm";
import Bucket from "../Bucket";

function BucketList() {
  const [bucketList, setBucketList] = useState([]);

  const addBucketListItem = (item) => {
    if (!item.text) {
      return;
    }

    const newBucketList = [item, ...bucketList];
    setBucketList(newBucketList);
  };

  const completeBucketListItem = (id) => {
    const updatedBucketList = bucketList.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    setBucketList(updatedBucketList);
  };

  const removeBucketListItem = (id) => {
    const updatedBucketList = [...bucketList].filter((item) => item.id !== id);

    setBucketList(updatedBucketList);
  };

  const editBucketListItem = (id, value) => {
    if (!value.text) {
      return;
    }

    const updatedBucketList = bucketList.map((item) => {
      if (item.id === id) {
        return value;
      }

      return item;
    });

    setBucketList(updatedBucketList);

    // setBucketList((prev) =>
    //   prev.map((item) => (item.id === id ? value : item))
    // );
  };

  return (
    <div>
      <h1>What is on your bucket list?</h1>
      <BucketListForm onSubmit={addBucketListItem} />
      <Bucket
        bucketList={bucketList}
        completeBucketListItem={completeBucketListItem}
        removeBucketListItem={removeBucketListItem}
        editBucketListItem={editBucketListItem} />
    </div>
  );
}

export default BucketList;
