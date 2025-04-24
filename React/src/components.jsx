import React from 'react';
import Card from './components/Card';

const Components = () => {
    const users = [
        {
          "username": "ali_123",
          "profession": "Frontend Developer",
          "age": 24,
          "city": "Lahore"
        },
        {
          "username": "sana_k",
          "profession": "Graphic Designer",
          "age": 27,
          "city": "Karachi"
        },
        {
          "username": "hamza_dev",
          "profession": "Backend Developer",
          "age": 30,
          "city": "Islamabad"
        },
        {
          "username": "ayesha_writer",
          "profession": "Content Writer",
          "age": 22,
          "city": "Rawalpindi"
        },
        {
          "username": "usman_ai",
          "profession": "AI Engineer",
          "age": 28,
          "city": "Faisalabad"
        }
      ]
      
  return (
    <div className='p-5'>
      {users.map(function(elem) {
        return <Card name = {elem.username} profession={elem.profession} age={elem.age} city={elem.city} />
      })}
    </div>
  );
};

export default Components;
