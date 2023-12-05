import React, { useContext, useState } from "react";
import { AppContext } from "../../context/app-provider";

function Message() {
  const {showMessage, setShowMessage} = useContext(AppContext)

  return (
    <div
      id="toast-default"
      className={`${showMessage ? "fixed top-28 right-3 flex items-center w-full max-w-xs p-4 text-black rounded-lg shadow bg-green-500 bg-opacity-80" : "hidden"}`}
      
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8  rounded-lg bg-green-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="18"
          viewBox="0 0 576 512"
        >
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5zM576 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L416 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z" />
        </svg>
        <span className="sr-only">Fire icon</span>
      </div>
      <div className="ms-3 text-sm font-normal">Berhasil Menambahkan Track</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white"
        data-dismiss-target="#toast-default"
        aria-label="Close"
        onClick={()=>setShowMessage(false)}
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
}

export default Message;
