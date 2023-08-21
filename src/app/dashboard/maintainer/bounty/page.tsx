export default function Page() {
  return (
    <>
      <div style={{ display: "table", width: "100%" }}>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          style={{ display: "table-cell", whiteSpace: "nowrap", width: "1px" }}
        >
          How much money do you want to put in?
        </label>
        <span style={{ display: "table-cell", padding: "0 4px 0 6px" }}>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            style={{ width: "30%", marginLeft: "2%" }}
          ></input>
        </span>
        <button className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Sign in with metamask
        </button>
      </div>
      <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Gas Fee:{" "}
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"
        style={{ marginLeft: "45%" }}
      >
        Submit
      </button>
    </>
  );
}
