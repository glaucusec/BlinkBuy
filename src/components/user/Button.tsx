import React from "react";
import { useFormStatus } from "react-dom";
import { ColorRing } from "react-loader-spinner";

function Button({ text }: { text: string }) {
  const { pending } = useFormStatus();
  return (
    <button className="flex justify-center items-center h-10 w-full p-2 bg-blinkblue text-white rounded-sm">
      {pending ? <ColorRing visible={true} height={40} width={40} /> : text}
    </button>
  );
}

export default Button;
