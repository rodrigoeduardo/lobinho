"use client";
import { Card } from "@/components/Card";
import { useState } from "react";

export default function Home() {
  const [size, setSize] = useState("normal");
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Card size={size} content="werewolf" isVisible={isVisible} />

      <button className="mt-10" onClick={() => setSize("small")}>
        small
      </button>
      <button onClick={() => setSize("normal")}>normal</button>
      <button onClick={() => setSize("large")}>large</button>
      <button onClick={() => setIsVisible(!isVisible)}>
        trocar visibilidade
      </button>
      <p>current: {size}</p>
    </div>
  );
}
