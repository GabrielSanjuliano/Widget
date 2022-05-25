import React from "react";
import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

// import { Container } from './styles';

const CloseButton: React.FC = () => {
  return (
    <Popover.Button
      className="top-5 right-5 absolute text-tx-800 hover:text-tx-900"
      title="Close feedback form"
    >
      <X className="w-4 h-4" weight="bold" />
    </Popover.Button>
  );
};

export default CloseButton;
