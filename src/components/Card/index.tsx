"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import VanillaTilt, { TiltOptions } from "vanilla-tilt";

// Cards:
import Back from "public/cards/back.png";
import Werewolf from "public/cards/werewolf.png";

interface CardProps {
  size?: "small" | "normal" | "large";
  isVisible: boolean;
  content: "werewolf" | "villager" | "witch" | "hunter";
}

export function Card({ size, isVisible, content }: CardProps) {
  const tilt = useRef(null);

  const cardSize = () => {
    if (!size) return "max-w-none";

    switch (size) {
      case "small":
        return "w-32";
      case "normal":
        return "w-64";
      case "large":
        return "w-none";
    }
  };

  const cardImage = () => {
    switch (content) {
      case "werewolf":
        return Werewolf;
      //   case "villager":
      //     return Villager;
      //   case "witch":
      //     return Witch;
      //   case "hunter":
      //     return Hunter;
      default:
        return Back;
    }
  };

  useEffect(() => {
    const tiltOptions: TiltOptions = {
      reverse: true,
      speed: 1000,
      max: 5,
    };

    if (tilt.current) VanillaTilt.init(tilt.current, tiltOptions);
  }, []);
  return (
    <>
      {isVisible ? (
        <Image ref={tilt} src={cardImage()} alt="Card" priority />
      ) : (
        <Image ref={tilt} src={Back} alt="Card" priority />
      )}
    </>
  );
}
