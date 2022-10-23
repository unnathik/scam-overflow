import {useState, useEffect} from 'react';
import {BsSearch, BsChatRight, BsArrowLeftShort, BsArrowRightCircle} from "react-icons/bs";
import { FiHome } from "react-icons/fi"
import {signInWithGoogle} from './signInWithGoogle'
import db, { auth } from './firebase'
import { doc, onSnapshot, collection, query, where, serverTimestamp, addDoc } from "firebase/firestore";
import Post from './Post';

const Forum = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", icon: <FiHome />}, 
    {title: "Scam or Not?", icon: <BsSearch />, route: '/'},
    {title: "Report Jobs", icon: <BsChatRight />, route: '/forum'},
  ]
  const [posts, setPosts] = useState([])

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {auth.onAuthStateChanged(user => 
    {if (user == null) {
      //console.log(user)
      setAuthStatus(false)
      //console.log(authStatus)
    } else {
      //console.log(user)
      setAuthStatus(true)
      //console.log(authStatus)
    }});
  }, [])

    useEffect(() => {
      const q = query(collection(db, "scamUserPosts"))
      const unsub = onSnapshot(q, (querySnapshot) => {
        setPosts(querySnapshot.docs.map(doc => doc.data()));
        console.log("Data", querySnapshot.docs.map(doc => doc.data()));
      });
    }, [])

    const sendReport = e => {
      console.log(e)
      e.preventDefault();

      const dbRef = collection(db, "scamUserPosts");
      const data = {
        title: title,
        description, description, 
        timestamp: serverTimestamp(),
      }

      addDoc(dbRef, data)
      .then(docRef => {
        console.log("doc successfully added")
      })
      .catch(error => {
        console.log(error)
      })

      setTitle("")
      setDescription("")
    }


  return (
    <div className="flex">
    <div className={`bg-blue-900	h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
    <BsArrowLeftShort className={`bg-white text-blue-900 text-3xl rounded-full
    absolute -right-3 top-9 border border-blue-900 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>
    <div>
      <h1 className={`text-white font-medium text-2xl ${!open && "scale-0"} duration-300`}>Scam Overflow</h1>
    </div>
    <ul className="pt-2">
      {Menus.map((menu, index) => <>
      <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2
      hover:text-white ${menu.spacing ? "mt-9" : "mt-2"}`}>
        <span className="text-2xl block float-left">
          {menu.icon}
        </span>
        <a href={menu.route}>
        <span className={`text-base font-medium flex-1 ${!open && "hidden"} duration-200`} >
          {menu.title}
        </span>
        </a>
      </li>
      </>)}
    </ul>
    <button className={`text-gray-300 text-base flex items-center gap-x-4 cursor-pointer p-2
      hover:text-white ${authStatus && "hidden"} ${!open && "hidden"}`} onClick={signInWithGoogle}>Sign In</button>
    <button className={`text-gray-300 text-base flex items-center gap-x-4 cursor-pointer p-2
      hover:text-white ${!authStatus && "hidden"} ${!open && "hidden"}`} onClick={() => auth.signOut()}>Sign Out</button>
    </div>
    
    <div className="p-7 w-full">
        <h1 className="text-3xl font-bold">Report Job Scams!</h1>
        <p className='text-gray-700 flex-1'>Create a New Post</p>
        <input className='border border-blue-800 mt-2 w-5/6 align-top	rounded p-5' 
        value={title}
        placeholder='What is the scam called?'
        onChange={(e) => {
          console.log(e.target.value)
          setTitle(e.target.value)}
        }/>

        <input className='border border-blue-800 mt-2 w-5/6 h-1/4 align-top	rounded p-5' 
        value={description}
        placeholder='Describe the scam...'
        onChange={(e) => (setDescription(e.target.value))}/>

        <BsArrowRightCircle className={`bg-white text-blue-900 text-3xl rounded-full border border-blue-900 cursor-pointer 
        mt-5`} onClick={sendReport}>
        </BsArrowRightCircle>
        <p className='text-gray-700 flex-1 mt-8'>Browse Fake Job Alerts from Other Users</p>
        <div>
        {posts.map(post => (
                    <Post 
                    timestamp={post.timestamp}
                    title={post.title}
                    description={post.description}
                    />
                ))}
        </div>
    </div>
    </div>
  )
      }

export default Forum