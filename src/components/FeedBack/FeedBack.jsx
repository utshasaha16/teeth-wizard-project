const FeedBack = ({ feedBackData }) => {
  console.log(feedBackData);
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 w-[90%] mx-auto mx-w-[1200px] mt-10">
      {feedBackData.map((feed) => (
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full"
                src={feed.userImg}
                alt=""
              />
              <h2 className="card-title ml-4">{feed.name}</h2>
              <p className="text-center font-semibold">Date :{new Date().toLocaleDateString()}</p>
            </div>
            <p>{feed.review}</p>
            <div className="card-actions justify-end items-center">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedBack;
