import search from "/svg/search-lg.svg";
import filter from "/svg/filter.svg";

export default function Search() {
  return (
    <section className="p-6 w-full flex ">
      <form className="relative flex w-full gap-3 justify-between">
        <img className="absolute top-4 left-4" src={search} />
        <input
          placeholder="Search anything"
          className="h-[3.5rem] w-[82%] pl-12 bg-gray-200/70 rounded-xl"
        />
        <button className="bg-black flex justify-center items-center h-[3.5rem] w-[3.5rem] rounded-lg">
          <img src={filter} />
        </button>
      </form>
    </section>
  );
}
