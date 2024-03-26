
import React from 'react';
import { useState } from 'react';


import Question from './Question';
const Entrance = () => {
  const [name, setname] = useState('');
    const [surname, setsurname] = useState('');
    const handleSubmit = (event) => {
      event.preventDefault();
      const text = `%0A 👦 Username: ${name}  %0A 📩Email:  ${surname} `;
      const chatId = -1002128588085;
      const token = '6834109969:AAEhUkHL4MsMs8Be2CWGY9oC7KXSbW8JHAM';
      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=html`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setname('');
          setsurname('');
    }
    )
        .catch((error) => {
          console.error('Error sending message:', error);
        });
    };

  return (
    <div className='relative img w-full h-[100vh]'>
      <form onSubmit={handleSubmit} className='absolute  inset-0 flex items-center justify-center '>
          <div className=' backdrop-blur border-solid border-[1px] rounded-[30px]  w-[400px] h-[400px] text-white'>
            <h1 className='text-center font-bold p-3 text-[30px] mt-10' >Global Test IT</h1>
            <div className='flex flex-col items-center px-[50px] gap-3 py-10'>
              <input type='text'
               value={name}
               onChange={(e) => setname(e.target.value)} className='tracking-wider capitalize w-full font-medium text-white text-[20px] px-3 outline-none bg-transparent border-solid border-white border-b-[3px] ' placeholder='Name' />
              <input type='text' 
              value={surname}
              onChange={(e) => setsurname(e.target.value)} className='tracking-wider capitalize w-full font-medium text-white text-[20px] px-3 outline-none bg-transparent border-solid border-white border-b-[3px] ' placeholder='Surname' />
              <button className='mt-5 text-[black] w-full h-[40px] hover:bg-[green] bg-[#3aab69] rounded-[30px] text-[25px] font-bold'>Send</button>
            </div>
          </div>
      </form>
    </div>
  );
};

export default Entrance;


















// import React, { useState } from 'react';
// const Form = () => {
//   const [username, setUsername] = useState('');
//   const [surname, setSurname] = useState('');
//   const sendMessage = (e) => {
//     e.preventDefault();

//     const text = `%0A 👦 Username: ${username} %0A 📩 Email: ${surname}`;
//     const chatId = -1002128588085;
//     const token = '6834109969:AAEhUkHL4MsMs8Be2CWGY9oC7KXSbW8JHAM';
//     const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=html`;

//     let api = new XMLHttpRequest();
//     api.open('GET', url, true);
//     api.send();

//     setUsername('');
//     setSurname('');
//   };
//   return (
//     <div className='flex bg-[transparent] w-full justify-center items-center md:px-0 px-5 ]'>
      
//       <form id='form' className='bg-[#948f8f] mt-[100px] flex flex-col max-w-[400px] md:gap-10 gap-5 p-5 w-full justify-center items-center rounded-[10px]'  onSubmit={sendMessage}>
//         <h1 className='font-bold md:text-[25px] text-[18px]'>Global Test IT</h1>
//         <input  type='text'value={username} onChange={(e) => setUsername(e.target.value)}   id='username'   className='capitalize outline-none border-[2px] border-solid border-[#8137a0] md:px-[5px] px-[2px] md:py-[10px] py-[6px] w-full max-w-[350px] md:text-[16px] text-[14px]' placeholder='Name'   />
//         <input  type='surname' id='surname' value={surname}  onChange={(e) => setSurname(e.target.value)}   className='outline-none border-[2px] border-solid border-[#8137a0] md:px-[5px] px-[2px] md:py-[10px] py-[6px] w-full max-w-[350px] md:text-[16px] text-[14px]'  placeholder='surname'   />
//         <input type='submit' value='Send'  className='bg-[orange] outline-none border-[2px] border-solid border-[orange] text-[white] cursor-pointer md:px-[5px] px-[2px] md:py-[10px] py-[6px] w-full max-w-[200px] hover:bg-[white] hover:text-[orange] self-start rounded-[4px] font-bold text-[14px] md:text-[18px]'  />
//       </form>
//     </div>
//   );
// };

// export default Form;
