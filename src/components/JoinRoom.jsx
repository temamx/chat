import React from 'react';
import socket from '../socket';

export default function JoinRoom() {
  return (
    <div className='join-block'>
        <input
        type="text"
        placeholder="Room ID"
        value=""
        />
        <input
        type="text"
        placeholder="Your name"
        value=""
        />
        <button className='btn btn-success'>ENTER</button>
      </div>
  )
}
