import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import ReactGA from "react-ga4";
import { useEffect } from "react";
// import { createClient } from "@supabase/supabase-js";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-8HYFH2KBG1");
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "App.tsx",
    });
  }, []);
  return (
    <div className="Body">
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} {...route} />
        ))}
      </Routes>
    </div>
  );
}

export default App;

// import { useEffect, useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import routes from "./routes";
// import "./App.css";
// import ReactGA from "react-ga4";
// import { createClient } from "@supabase/supabase-js";

// // Initialize Supabase client (outside the component)
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// if (!supabaseUrl || !supabaseKey) {
//   throw new Error(
//     "Please provide your Supabase URL and Anon Key in your environment variables."
//   );
// }

// const supabase = createClient(supabaseUrl, supabaseKey);

// function App() {
//   const [todos, setTodos] = useState([]);

//   // Function to fetch todos from Supabase
//   const getTodos = async () => {
//     try {
//       const { data, error } = await supabase.from("todos").select("*");

//       if (error) {
//         console.error("Error fetching todos:", error);
//         return;
//       }

//       setTodos(data || []);
//     } catch (error) {
//       console.error("Unexpected error fetching todos:", error);
//     }
//   };

//   useEffect(() => {
//     getTodos(); // Call getTodos when the component mounts
//   }, []);

//   useEffect(() => {
//     ReactGA.initialize("G-8HYFH2KBG1");
//     ReactGA.send({
//       hitType: "pageview",
//       page: window.location.pathname,
//       title: "App.tsx",
//     });
//   }, []);

//   return (
//     <div className="Body">
//       <Routes>
//         {routes.map((route, idx) => (
//           <Route key={idx} {...route} />
//         ))}
//       </Routes>

//       {/* Display the todos - consider moving this to a dedicated route component */}
//       <div>
//         <h2>Todos:</h2>
//         {todos.length > 0 ? (
//           todos.map((todo) => (
//             <div key={todo.id}>
//               <p>{todo.title || todo.name || "Untitled Todo"}</p>
//             </div>
//           ))
//         ) : (
//           <p>No todos found</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
