import React, { useState } from 'react';
import { PostDataType } from '../store/slices/api.slice';

const LeftPanel = ({data} : {data: string}) => {

  return (
    <div dangerouslySetInnerHTML={{__html: data}} />
  )
}

export default LeftPanel;