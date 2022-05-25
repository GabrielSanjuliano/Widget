import React, { useState } from "react";
import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import WidgetForm from "./WidgetForm";

// import { Container } from './styles';

const Widget: React.FC = () => {
  return (
    <Popover className="absolute bottom-5 right-5 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="bg-brand-500 hover:bg-brand-300 outline-none transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-200 focus:ring-brand-500 text-white rounded-full px-3 h-12 flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs duration-500 ease-linear transition-all">
          <span className="pl-2"></span>Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
};

export default Widget;
