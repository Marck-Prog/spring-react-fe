import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../../assets/icons/SearchIcon";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
  useClose,
} from "@headlessui/react";
import Loading from "../../../assets/icons/Loading";

const SearchForm = () => {
  const router = useNavigate();
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchItems, setSearchItems] = useState<[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [moreThanFour, setMoreThanFour] = useState(false);
  let close = useClose();

  function closeModal() {
    setOpen(false);
    setNoResult(false);
    setMoreThanFour(false);
  }

  function openModal() {
    setOpen(true);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFetching(true);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setSearchValue((e.target as HTMLInputElement).value);
    setNoResult(false);
    setMoreThanFour(false);
  };

  return (
    <>
      <div>
        <button
          type="button"
          aria-label="Search"
          onClick={openModal}
          className="cursor-pointer"
        >
          <SearchIcon />
        </button>
        <Transition show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 overflow-y-auto"
            style={{ zIndex: 99999 }}
            static
            open={open}
            onClose={() => {}}
          >
            <div className="h-screen text-center" aria-hidden="true">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <DialogPanel className="fixed inset-0 bg-gray500 opacity-50" />
              </TransitionChild>

              {/* This element is to trick the browser into centering the modal contents. */}
              {/* <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span> */}
              <TransitionChild
                as={Fragment}
                enter="ease-linear duration-400"
                enterFrom="-translate-y-full"
                enterTo="translate-y-0"
                leave="ease-linear duration-300"
                leaveFrom="translate-y-0"
                leaveTo="-translate-y-full"
              >
                <div className="relative translate-y inline-block w-full pt-6 pb-12 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
                  <div className="app-max-width app-x-padding">
                    <div className="w-3/5 m-auto">
                      <div className="flex justify-end mb-8">
                        <button
                          type="button"
                          className="outline-none focus:outline-none text-2xl cursor-pointer"
                          onClick={closeModal}
                        >
                          &#10005;
                        </button>
                      </div>
                      <form
                        className="mt-2 flex items-center"
                        onSubmit={handleSubmit}
                      >
                        {isFetching ? (
                          <Loading />
                        ) : (
                          <SearchIcon extraClass="text-gray300 w-8 h-8" />
                        )}
                        <input
                          type="search"
                          placeholder={"Search anything..."}
                          className="px-4 py-2 w-full focus:outline-none text-2xl"
                          onChange={handleChange}
                        />
                      </form>
                      <div className="border-t-2 border-gray300"></div>
                    </div>

                    {noResult ? (
                      <div className="flex justify-center mt-8">
                        <span>No Result</span>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div
                          className="grid gap-x-4 justify-center my-8 focus:outline-none text-[20px]"
                          style={{
                            gridTemplateColumns:
                              "repeat( auto-fit, minmax(120px, 170px) )",
                          }}
                        >
                          {/* {searchItems.map((item) => (
                            <Card key={item.id} item={item} />
                          ))} */}
                          Result
                        </div>
                        {moreThanFour && <button>View All</button>}
                      </div>
                    )}
                  </div>
                </div>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};

export default SearchForm;
