import PostItem from "./PostItem";
import classes from "./PostGird.module.css";
import { motion, Variants } from "framer-motion";

function PostsGrid(props) {
  const { posts } = props;

  return (
    <motion.ul className={` ${classes.grid}`}>
      {posts.map((post) => (
        <motion.div
          key={post.slug}
          className="delay-[300ms] duration-[600ms] taos:[transform:translate3d(0,-200px,0)_scale(0.6)] taos:opacity-0"
          data-taos-offset="500"
        >
          <PostItem post={post} />
        </motion.div>
      ))}
    </motion.ul>
  );
}
export default PostsGrid;
