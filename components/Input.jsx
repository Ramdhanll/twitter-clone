import {
   CalendarIcon,
   ChartBarIcon,
   EmojiHappyIcon,
   PhotographIcon,
   XIcon,
} from '@heroicons/react/outline'
// import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react'

import React, { useEffect, useRef, useState } from 'react'

const Input = (props) => {
   const [input, setInput] = useState('')
   const [selectedFile, setSelectedFile] = useState(null)
   const [showEmojis, setShowEmojis] = useState(false)
   const filePickerRef = useRef(null)

   // const [chosenEmoji, setChosenEmoji] = useState(null)

   // const onEmojiClick = (event, emojiObject) => {
   //    setChosenEmoji(emojiObject)
   // }

   const openFilePicker = () => {
      if (filePickerRef.current) {
         filePickerRef.current.click()
      }
   }

   // const addEmoji = (e) => {
   //    let sym = e.unified.split('-')
   //    let codesArray = []
   //    sym.forEach((el) => codesArray.push('0x' + el))
   //    let emoji = String.fromCodePoint(...codesArray)
   //    setInput(input + emoji)
   // }

   const addImageToPost = () => {}

   const sendPost = () => {}

   return (
      <div className={`border-b border-gray-700 p-3 flex space-x-3 `}>
         <img
            src='https://media.istockphoto.com/photos/shot-of-a-female-mechanic-talking-on-her-cellphone-while-working-in-picture-id1342082733?s=612x612'
            className='h-11 w-11 rounded-full cursor-pointer'
         />

         <div className='w-full divide-y divide-gray-700'>
            <div
               className={`${selectedFile && 'pb-7'} ${input && 'space-y-2.5'}`}
            >
               <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  rows={2}
                  placeholder="What's happening?"
                  className='bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px] overflow-hidden'
               />

               {selectedFile && (
                  <div className='relative'>
                     <div
                        className='absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer'
                        onClick={() => setSelectedFile(null)}
                     >
                        <XIcon className='text-white h-5' />
                     </div>
                     <img
                        src={selectedFile}
                        className='rounded-2xl max-h-80 object-contain'
                     />
                  </div>
               )}

               <div>
                  <div className='flex items-center justify-between pt-2.5'>
                     <div className='flex items-center'>
                        <div className='icon' onClick={openFilePicker}>
                           <PhotographIcon className='h-[22px] text-[#1d9bf0] ' />
                           <input
                              type='file'
                              hidden
                              onChange={addImageToPost}
                              ref={filePickerRef}
                           />
                        </div>

                        <div className='icon rotate-90'>
                           <ChartBarIcon className='text-[#1d9bf0] h-[22px]' />
                        </div>

                        <div
                           className='icon'
                           onClick={() => setShowEmojis(!showEmojis)}
                        >
                           <EmojiHappyIcon className='text-[#1d9bf0] h-[22px]' />
                        </div>

                        <div className='icon'>
                           <CalendarIcon className='text-[#1d9bf0] h-[22px]' />
                        </div>
                        {/* 
                        {showEmojis && (
                           <Picker
                              onEmojiClick={onEmojiClick}
                              disableAutoFocus={true}
                              skinTone={SKIN_TONE_MEDIUM_DARK}
                              groupNames={{ smileys_people: 'PEOPLE' }}
                              native
                           />
                        )} */}
                     </div>
                     <button
                        className='bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default'
                        disabled={!input.trim() && !selectedFile}
                        onClick={sendPost}
                     >
                        Tweet
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Input
