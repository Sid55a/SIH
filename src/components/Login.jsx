const Login = () => {
  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://png.pngtree.com/thumb_back/fh260/background/20220217/pngtree-beautiful-hand-painted-green-garbage-collection-illustration-background-image_945238.jpg")',
      }}
    >
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img src="/assets/kerelaGOVT.png" width={150} alt="" srcSet="" />
            <h1 className="mb-2 text-2xl text-orange-400 font-bold">
              Kerala Governament
            </h1>
            <span className="text-green-500">Waste Management Service</span>
          </div>
          <form action="#">
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-green-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="name"
                placeholder="Username"
              />
            </div>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-green-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="Password"
                name="name"
                placeholder="Password"
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-orange-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
