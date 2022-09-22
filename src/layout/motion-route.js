import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { NewPost } from "../components/posts/new-post";
import { Post } from "../components/posts/post";

const MotionRoute = ( { element } ) => {

  const setElement = () => {
    let elemento = < Outlet />;
    switch(element){
      case "post": 
        elemento = < Post />;
        break;
      case "newpost":
        elemento = < NewPost />;
        break;
      default: 
        elemento = < Outlet />;
    }
    return elemento;
  }

  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {setElement()}
    </motion.div>
  );
};

export default MotionRoute;
