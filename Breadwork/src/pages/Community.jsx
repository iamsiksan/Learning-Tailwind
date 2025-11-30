import React from 'react'

function Community() {
  return (
    <div className="flex flex-col items-center justify-center h-96 w-full bg-white rounded-xl shadow-lg p-6 text-center">
      <div className="shadow-lg rounded-xl overflow-hidden mb-3">

      <img
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHlzNjV3dDN4ZnhzbXEycmduY3ZhM2FxMTllZnZtaDk0NW1xM214NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif"
        alt="Under Construction"
        className="h-50 w-80 "
      />
      </div>
      <h2 className="text-2xl font-bold mb-2">Page Under Construction</h2>
      <p className="text-gray-500">
        We're working hard to bring this page to you soon!
      </p>
    </div>
  )
}

export default Community