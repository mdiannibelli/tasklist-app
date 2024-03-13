import { useState } from "react";
import Task from "./components/Task";
import '@fontsource-variable/league-spartan'
import TaskLocalStore from "./components/TaskLocalStore";

function App() {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center items-center">
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
    <h1 className="text-5xl uppercase text-purple-500 mb-8">Write down your tasks!</h1>
    <Task/>
   {/*  <TaskLocalStore/> */}
    </section>
  );
}

export default App;
