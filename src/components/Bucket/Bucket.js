import { useState } from "react";
import BucketListForm from "../BucketListForm";

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    text: '',
    eagerness: ''
  })

  const submitUpdate = value => {
    props.editBucketListItem(edit.id, value)
    setEdit({ id: null, text: '', eagerness: '' })
  }

  if (edit.id) {
    return <BucketListForm edit={edit} onSubmit={submitUpdate} />
  }

  return (
    <div>
      {props.bucketList.map((item, i) => (
        <div
          className={
            item.isComplete
              ? `bucket-row complete ${item.eagerness}`
              : `bucket-row ${item.eagerness}`
          }
          key={i}
        >
          <div key={item.id} onClick={() => props.completeBucketListItem(item.id)}>
            {item.text}
          </div>
          <div className="icons">
            <p
              onClick={() =>
                setEdit({
                  id: item.id,
                  value: item.text,
                  eagerness: item.eagerness,
                })
              }
            >
              {" "}
              ✏️
            </p>
            <p onClick={() => props.removeBucketListItem(item.id)}> 🗑️</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bucket;
