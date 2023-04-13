import React, { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { postReview } from "../../redux/actions";
import Swal from "sweetalert2";
import { getUsers } from "../../redux/actions"; 


function ClothReviews({ id, comment }) {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  const [commentCar, setCommentCar] = useState("");
  const [reviewAdd, setReviewAdd] = useState(comment);
  //console.log(users)
  useEffect(() => {
    dispatch(getUsers())
  }, []);

  function handlerReviews(e) {
    e.preventDefault();
    const review = {
      email: user.email,
      idCar: id,
      comment: commentCar,
    };
    dispatch(postReview(review));
    setCommentCar("");
    setReviewAdd([...reviewAdd, review]);
  }

  function handlerComment(e) {
    e.preventDefault();
    setCommentCar(e.target.value);
  }
  function handlerlogear (){
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "You need a login",
      showConfirmButton: true,
      //timer: 3000,
    });
  }

  return (
    <div>
      <div className="flex flex-row ">
        <div className="mx-5">
          <textarea
            maxlength="250"
            autocomplete="off"
            className="text-black rounded-md bg-white"
            name=""
            value={commentCar}
            placeholder="write your question..."
            id={id}
            cols="80"
            rows="3"
            onChange={handlerComment}
          ></textarea>
        </div>
        <div className="" >
          {isAuthenticated && commentCar.length > 5 ? (
            <button onClick={handlerReviews} type="submit" className="bg-primary">
              Questions
            </button>
          ) :isAuthenticated ? (
            <button disable type="submit" className="bg-primary">
              Questions
            </button>
          ):
            <button onClick={handlerlogear} type="submit" className="bg-primary">
              Questions
            </button>}
        </div>
      </div>

      <div className="flex flex-col">
        {reviewAdd?.map((e) => (
          <div key={e.id} className="place-self-start bg-white mx-5 my-1 p-2 rounded-md ">
            <div className="text-lg "><span>{e.comment}</span></div>
            {e.request !== ""  ?(<div className=" p-2 bg-gray-100 text-gray-400"><span>ask : {e.request}</span></div>):null}
          </div> 
        ))}
      </div>
    </div>
  );
}

export default ClothReviews;
