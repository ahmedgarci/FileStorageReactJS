
export default function Sidebar(){
    return(
        <div className="w-64 bg-white p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4">FileDrive</h2>
            <ul>
              <li className="mb-2 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">📁 All Files</li>
              <li className="mb-2 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">⭐ Favorites</li>
              <li className="mb-2 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">🗑️ Trash</li>
            </ul>
          </div>
    )
}