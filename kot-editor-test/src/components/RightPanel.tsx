import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { addDataAsync } from '../store/slices/api.slice';
import { useDispatch } from '../store/store';

const RightPanel = ({ index, data }: { index: number, data: string }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  return (
    <div>
      <ReactQuill key={index} theme="snow" value={value.length ? value : data} onChange={setValue} />
      <div>
        <button
          type="button"
          style={{
            backgroundColor: 'green',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 0
          }}
          onClick={() => dispatch(addDataAsync({ id: index + 1, text: value }))}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default RightPanel;