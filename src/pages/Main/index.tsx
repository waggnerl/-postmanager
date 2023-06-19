import NavBar from "../../components/NavBar";
import CreatePost from "../../components/CreatePost";
import { useEffect } from "react";
import "./style.css";
import Post from "../../components/Post";
import { fetchData, changePage } from "../../actions/api";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../actions/user";
function Main() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    api: {
      data: { posts },
    },
  } = useSelector((data: RootState) => data);
  const { page } = useAppSelector((state) => state.api.data);
  const { username: usernameRedux } = useAppSelector((state) => state.user);
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username && !username?.length) {
      navigate("/");
    }
    if (!usernameRedux && !usernameRedux.length && username) {
      dispatch(updateUser(username));
    }

    dispatch(fetchData(page));
  }, [dispatch, navigate, page, usernameRedux]);

  const handleLastPage = () => {
    const pageToCheck = page === 0 ? page : page - 10;
    dispatch(changePage(pageToCheck));
  };
  const handleNextPage = () => {
    const pageToCheck = page + 10;
    dispatch(changePage(pageToCheck));
  };
  return (
    <div className="containerMain">
      <div className="containerLimitWidth">
        <NavBar />
        <CreatePost />
        {posts.map(
          (post) =>
            !!post.username.length && (
              <Post
                key={post.id}
                id={post.id}
                username={post.username}
                title={post.title}
                content={post.content}
                date={post.created_datetime}
              />
            )
        )}
        <div className="containerArrow">
          <img
            src="/left.svg"
            height={"40px"}
            alt=""
            onClick={handleLastPage}
          />
          <img
            src="/right.svg"
            height={"40px"}
            alt=""
            onClick={handleNextPage}
          />
          <p>{page / 10}</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
